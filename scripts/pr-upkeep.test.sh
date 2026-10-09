#!/usr/bin/env bash
# Tests the working-group merge decision in pr-upkeep.sh (wg_verdict). Exit code only.
set -uo pipefail
source "$(dirname "$0")/pr-upkeep.sh"
FAIL=0
t() { local want=$1 got; shift; got=$(wg_verdict "$@"); [ "$got" = "$want" ] && echo "ok   $want" || { echo "FAIL want '$want' got '$got'"; FAIL=1; }; }

line='<!-- wg-quorum --> builder=agent:tpr-builder reviewer=%s gates=green@abc123 mandate=srs-rust#1 verdict=%s'
c() { jq -n --arg b "$(printf "$line\nfindings: none" "$1" "$2")" --arg at "$3" '[{body:$b,created_at:$at}]'; }
COMMIT=2026-10-12T10:00:00Z; AFTER=2026-10-12T11:00:00Z; BEFORE=2026-10-12T09:00:00Z

t ok                                                    1 "$(c agent:tpr-reviewer approve $AFTER)" $COMMIT 3
t "builder and reviewer are the same actor"             1 "$(c agent:tpr-builder approve $AFTER)" $COMMIT 3
t "quorum comment older than the last commit"           1 "$(c agent:tpr-reviewer approve $BEFORE)" $COMMIT 3
t "over budget (10 of 10 merged this cycle)"            1 "$(c agent:tpr-reviewer approve $AFTER)" $COMMIT 10
t "verdict reject"                                      1 "$(c agent:tpr-reviewer reject $AFTER)" $COMMIT 3
t "no quorum comment"                                   1 '[{"body":"lgtm","created_at":"2026-10-12T11:00:00Z"}]' $COMMIT 3
t n/a                                                   0 '[]' $COMMIT 99   # non-group PR: neither quorum nor budget applies
exit $FAIL
