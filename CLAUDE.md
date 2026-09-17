# CLAUDE.md

## What this is

`the-greenman/srs-programme` — the SRS spec-rework programme, modelled in SRS
(`com.semanticops.programme`): phases, units, findings and carried context, plus
the `programme-unit-walk` Protocol and its Blueprint. Moved out of
`the-greenman/srs` per owner decision 2026-09-16 (srs#786), history preserved by
`git subtree split`. The records are the source of truth; a unit's `issue_ref`
points at the GitHub issues where the work is executed, rather than restating
them.

## The Protocol is the one process home

`package/protocols/programme-unit-walk-*.json` defines how a unit goes from
proposed to landed. Do not restate its stages in a document, a script or an
issue comment — if the walk needs changing, change the Protocol.

## Writes go through the pinned CLI

Never hand-edit records, relations, containers or the manifest.

```bash
export $(node scripts/fetch-pinned-srs.mjs)
"$SRS_CLI_PATH" record create --repo . --type com.semanticops.programme/unit
node scripts/check-programme-conformance.mjs   # what CI runs
```

The pin (`SRS_RUST_CLI_TAG`) is declared once, in
`.github/workflows/validate.yml`. If the CLI cannot express an operation that is
a finding: file the srs-rust issue and park, never hand-edit around it.

## Merge gate

`validate` is required on master, strict, zero reviews. Programme data is
**non-normative** under srs#580's autonomy contract — nothing outside this
repository depends on it — so a PR states its Mode/Door, carries
`gate:auto-merge` and merges itself on green (`gh pr merge --auto`); red does
not merge. Mode complex, or Door 2/3, carries `gate:owner-merge` and the agent
never merges. Mode chaotic stops.

## Signing and queue

All commits are SSH-signed — `ssh-add -l | grep -q
"SHA256:vHuO6si5w3RLL4IJZofWbyvEi42WA2fYX7bM"` before committing, plain `git
commit`, never `--no-gpg-sign`. the-greenman/srs#580 is the queue and the
rulings not to relitigate: read it before starting any unit.
