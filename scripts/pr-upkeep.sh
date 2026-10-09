#!/usr/bin/env bash
# Keep the estate's open PRs moving (srs-programme#39).
#   gate:auto-merge  CLEAN -> merge;  BEHIND -> update branch
#   gate:owner-merge BEHIND -> update branch, so it is always ready for the owner
#   GitHub auto-merge on, BEHIND -> update branch (auto-merge then lands it)
#   --digest         one comment on semanticops.com#33: ready for owner, conflicts, no gate label
#   wg:third-party-ready  working-group PRs (semanticops.com#31) merge only with a valid quorum comment and budget left
# Dry run unless --apply. Never resolves conflicts, never labels, never touches drafts.
set -uo pipefail

# ponytail: one working group, hard-coded; read from records when a second is chartered (D18).
# 10 = Budget article c5a8c529-578a-4a34-bee3-3ed073305cee (WG Third-party ready), PRs merged per cycle.
WG_LABEL="wg:third-party-ready"; WG_BUDGET=10

# wg_verdict <is_wg 0|1> <comments_json> <last_commit_iso> <merged_this_cycle>
# Prints n/a (not a group PR), ok, or the reason the PR must wait. The latest quorum comment decides.
# Quorum line: <!-- wg-quorum --> builder=<actor> reviewer=<actor> gates=<result> mandate=<ruling> verdict=approve|reject
wg_verdict() {
  [ "$1" = 1 ] || { echo n/a; return; }
  local q
  q=$(jq -r --arg t "$3" '
    [.[] | select(.author_association == "OWNER")  # public repos: anyone can comment; only the owner account (routines run as it) counts
         | select(.body|startswith("<!-- wg-quorum -->"))
         | (.body|split("\n")[0]) as $l
         | ($l|capture("^<!-- wg-quorum --> builder=(?<b>agent:\\S+) reviewer=(?<r>agent:\\S+) gates=\\S+ mandate=\\S+ verdict=(?<v>\\S+)")? // {b:"",r:"",v:"malformed"})
         + {at:.created_at}] | sort_by(.at) | last
    | if . == null then "no quorum comment"
      elif .b == .r then "builder and reviewer are the same actor"
      elif .v != "approve" then "verdict " + .v
      elif .at <= $t then "quorum comment older than the last commit"
      else "ok" end' <<<"$2") || q="quorum comment unreadable"
  [ "$q" = ok ] && [ "$4" -ge "$WG_BUDGET" ] && q="over budget ($4 of $WG_BUDGET merged this cycle)"
  echo "$q"
}
[[ "${BASH_SOURCE[0]}" != "$0" ]] && return 0  # sourced by the test: functions only

REPOS="semanticops.com srs srs-rust srs-web srs-vscode srs-programme srs-context muDemocracy.org"
DIGEST_ISSUE="the-greenman/semanticops.com/issues/33"
APPLY=0; DIGEST=0
for a in "$@"; do case $a in --apply) APPLY=1 ;; --digest) DIGEST=1 ;; *) echo "unknown arg $a" >&2; exit 2 ;; esac; done

act() { # description, command...
  local what=$1; shift
  if [ $APPLY = 1 ]; then
    if "$@" >/dev/null 2>&1; then echo "DID   $what"; else echo "FAIL  $what"; FAILS=$((FAILS+1)); fi
  else echo "WOULD $what"; fi
}

FAILS=0; READY=""; CONFLICT=""; UNGATED=""; WGWAIT=""
# Cycle = Monday 00:00 UTC onward. Fail closed: an unreadable count blocks group merges.
MONDAY=$(date -u -d "-$(( $(date -u +%u) - 1 )) days" +%F)
WG_MERGED=$(gh api -X GET search/issues -f q="user:the-greenman is:pr is:merged label:\"$WG_LABEL\" merged:>=$MONDAY" --jq .total_count 2>/dev/null) \
  || { echo "FAIL  group budget count"; FAILS=$((FAILS+1)); WG_MERGED=$WG_BUDGET; }
for r in $REPOS; do
  # mergeStateStatus is computed lazily; UNKNOWN just waits for the next run.
  rows=$(gh pr list -R "the-greenman/$r" --state open -L 100 \
    --json number,title,isDraft,mergeStateStatus,labels,autoMergeRequest \
    -q '.[] | select(.isDraft|not) | [.number, .mergeStateStatus, ([.labels[].name|select(startswith("gate:"))] + (if .autoMergeRequest then ["auto-on"] else [] end) | join(",")), (any(.labels[]; .name=="wg:third-party-ready") | if . then "1" else "0" end), .title[:70]] | map(tostring) | join("\u001f")') \
    || { echo "FAIL  list $r"; FAILS=$((FAILS+1)); continue; }
  while IFS=$'\x1f' read -r n state gate wg title; do  # unit separator: keeps empty fields
    [ -z "$n" ] && continue
    pr="$r#$n"
    [[ "$gate" == *gate:owner-merge* ]] && wg=0  # escalated to the owner: ordinary rules
    if [ "$wg" = 1 ]; then  # group PRs: merge only on a valid quorum within budget; no update-branch (a new commit voids the quorum; the reviewer updates, then re-reviews)
      why="awaiting group review"
      if [[ "$gate" == *gate:auto-merge* ]]; then
        sha=$(gh api "repos/the-greenman/$r/pulls/$n" --jq .head.sha 2>/dev/null)
        last=$(gh api "repos/the-greenman/$r/commits/$sha" --jq .commit.committer.date 2>/dev/null)
        cm=$(gh api "repos/the-greenman/$r/issues/$n/comments" --paginate --jq '.[]|{body,created_at,author_association}' 2>/dev/null | jq -s . 2>/dev/null)
        if [ -z "$last" ] || [ -z "$cm" ]; then why="could not read commits or comments"
        else why=$(wg_verdict 1 "$cm" "$last" "$WG_MERGED"); fi
      fi
      if [ "$why" = ok ] && [ "$state" = CLEAN ]; then
        act "merge $pr (group quorum ok, $WG_MERGED of $WG_BUDGET merged this cycle)" gh pr merge "$n" -R "the-greenman/$r" --merge
        WG_MERGED=$((WG_MERGED+1))
      else
        [ "$why" = ok ] && why="quorum ok, waiting for state $state"
        WGWAIT+="- $pr $title ($why)"$'\n'
      fi
    fi
    case "$wg:$gate:$state" in
      1:*) ;;
      *:*gate:auto-merge*:CLEAN)  act "merge $pr" gh pr merge "$n" -R "the-greenman/$r" --merge ;;
      *:*gate:auto-merge*:BEHIND|*:*gate:owner-merge*:BEHIND|*:*auto-on*:BEHIND)
                                act "update-branch $pr" gh pr update-branch "$n" -R "the-greenman/$r" ;;
    esac
    case "$gate:$state" in
      *gate:owner-merge*:CLEAN) READY+="- $pr $title"$'\n' ;;
    esac
    [ "$state" = DIRTY ] && CONFLICT+="- $pr $title"$'\n'
    [[ "$gate" != *gate:* && "$wg" != 1 ]] && UNGATED+="- $pr $title"$'\n'
  done <<< "$rows"
done

if [ $DIGEST = 1 ]; then
  body="**PR upkeep digest $(date -u +%F)** (srs-programme \`scripts/pr-upkeep.sh\`)

Ready for owner merge (green, up to date):
${READY:-- none
}
Conflicts (need a person or agent):
${CONFLICT:-- none
}
No gate label (classify as \`gate:auto-merge\` or \`gate:owner-merge\`):
${UNGATED:-- none
}
Working group: waiting (\`$WG_LABEL\`, $WG_MERGED of $WG_BUDGET merged this cycle):
${WGWAIT:-- none
}"
  if [ $APPLY = 1 ]; then
    gh api "repos/$DIGEST_ISSUE/comments" -f body="$body" >/dev/null && echo "DID   digest" || { echo "FAIL  digest"; FAILS=$((FAILS+1)); }
  else echo "WOULD digest:"; echo "$body"; fi
fi

echo "$FAILS failure(s)"
[ $FAILS = 0 ]
