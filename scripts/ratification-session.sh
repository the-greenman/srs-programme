#!/usr/bin/env bash
# Ratification session: like approving the minutes. Decisions made on the fly (relayed from the owner's working
# session, or proposed by a working group and escalated) are recorded at once as `proposed` in the decision log of
# their context. At a ratification session the owner reviews them and ratifies or sets each aside, as themself.
#
#   bash scripts/ratification-session.sh                      list what awaits ratification (no changes)
#   bash scripts/ratification-session.sh --ratify all         ratify every pending decision
#   bash scripts/ratification-session.sh --ratify <id>...    ratify these (ids or 8-char prefixes)
#   bash scripts/ratification-session.sh --set-aside <id>...  decline these (lifecycle: abandoned)
#
# Needs SRS_ACTOR set to a human actor: ratification is the owner's act and is never done by an agent.
# Changes are left in the working tree; commit them signed and open an owner-merge PR.
set -euo pipefail
LOG_TITLE="${LOG_TITLE:-SemanticOps decision log}"
cd "$(dirname "$0")/.."
[ -n "${SRS_CLI_PATH:-}" ] || export $(node scripts/fetch-pinned-srs.mjs 2>/dev/null)
srs() { "$SRS_CLI_PATH" "$@"; }

log=$(srs container list --repo . | jq -r --arg t "$LOG_TITLE" '.payload.containers[]? | select(.title==$t) | .containerId' | head -1)
[ -n "$log" ] || { echo "no container titled \"$LOG_TITLE\"" >&2; exit 1; }
members=$(srs container get --repo . "$log" | jq -c '[.payload.container.memberInstanceIds[].instanceId]')
pending=$(srs record list --repo . --type governance/decision \
  | jq -c --argjson m "$members" '[(.payload.records // .payload.instances)[] | select(.instanceId as $i | $m | index($i)) | select(.record.lifecycleState=="proposed")]')

n=$(jq length <<<"$pending")
echo "Awaiting ratification in \"$LOG_TITLE\": $n"
jq -r '.[] | "\n\(.instanceId[0:8])  \(.record.fieldValues.title)\n  Resolution: \(.record.fieldValues.decision_statement)\n  Why:        \(.record.fieldValues.rationale // "-")\n  Review:     \(.record.fieldValues.revisit_when // "-")\n  Recorded:   \(.record.createdAt[0:10]) by \(.record.createdBy.name // .record.createdBy.id // "unattributed")"' <<<"$pending"

mode="${1:-}"; [ -z "$mode" ] && exit 0
shift
case "$mode" in --ratify) to=ratified ;; --set-aside) to=abandoned ;; *) echo "unknown option $mode" >&2; exit 2 ;; esac
jq -e '.kind=="human"' <<<"${SRS_ACTOR:-{\}}" >/dev/null 2>&1 || { echo "SRS_ACTOR must be a human actor: ratification is the owner's act" >&2; exit 1; }

if [ "${1:-}" = all ]; then ids=$(jq -r '.[].instanceId' <<<"$pending")
else ids=""; for p in "$@"; do
  id=$(jq -r --arg p "$p" '[.[] | select(.instanceId | startswith($p)) | .instanceId] | if length==1 then .[0] else empty end' <<<"$pending")
  [ -n "$id" ] || { echo "no single pending decision matches $p" >&2; exit 1; }
  ids+="$id "; done
fi
for id in $ids; do
  echo "{\"to\":\"$to\"}" | srs record transition --repo . --id "$id" | jq -r '.payload.record | "\(.lifecycleState)  \(.fieldValues.title)"'
done
srs repo validate --repo . | jq -c '.payload.summary'
echo "Now commit (signed) and open an owner-merge PR."
