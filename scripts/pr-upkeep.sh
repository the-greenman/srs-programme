#!/usr/bin/env bash
# Keep the estate's open PRs moving (srs-programme#39).
#   gate:auto-merge  CLEAN -> merge;  BEHIND -> update branch
#   gate:owner-merge BEHIND -> update branch, so it is always ready for the owner
#   GitHub auto-merge on, BEHIND -> update branch (auto-merge then lands it)
#   --digest         one comment on semanticops.com#33: ready for owner, conflicts, no gate label
# Dry run unless --apply. Never resolves conflicts, never labels, never touches drafts.
set -uo pipefail

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

FAILS=0; READY=""; CONFLICT=""; UNGATED=""
for r in $REPOS; do
  # mergeStateStatus is computed lazily; UNKNOWN just waits for the next run.
  rows=$(gh pr list -R "the-greenman/$r" --state open -L 100 \
    --json number,title,isDraft,mergeStateStatus,labels,autoMergeRequest \
    -q '.[] | select(.isDraft|not) | [.number, .mergeStateStatus, ([.labels[].name|select(startswith("gate:"))] + (if .autoMergeRequest then ["auto-on"] else [] end) | join(",")), .title[:70]] | map(tostring) | join("\u001f")') \
    || { echo "FAIL  list $r"; FAILS=$((FAILS+1)); continue; }
  while IFS=$'\x1f' read -r n state gate title; do  # unit separator: keeps empty fields
    [ -z "$n" ] && continue
    pr="$r#$n"
    case "$gate:$state" in
      *gate:auto-merge*:CLEAN)  act "merge $pr" gh pr merge "$n" -R "the-greenman/$r" --merge ;;
      *gate:auto-merge*:BEHIND|*gate:owner-merge*:BEHIND|*auto-on*:BEHIND)
                                act "update-branch $pr" gh pr update-branch "$n" -R "the-greenman/$r" ;;
    esac
    case "$gate:$state" in
      *gate:owner-merge*:CLEAN) READY+="- $pr $title"$'\n' ;;
    esac
    [ "$state" = DIRTY ] && CONFLICT+="- $pr $title"$'\n'
    [[ "$gate" != *gate:* ]] && UNGATED+="- $pr $title"$'\n'
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
}"
  if [ $APPLY = 1 ]; then
    gh api "repos/$DIGEST_ISSUE/comments" -f body="$body" >/dev/null && echo "DID   digest" || { echo "FAIL  digest"; FAILS=$((FAILS+1)); }
  else echo "WOULD digest:"; echo "$body"; fi
fi

echo "$FAILS failure(s)"
[ $FAILS = 0 ]
