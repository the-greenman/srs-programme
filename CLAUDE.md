# CLAUDE.md

## What this is

`the-greenman/srs-programme` is the **SemanticOps roadmap** (`com.semanticops.programme`), modelled in
SRS: periods rank objectives, epics serve objectives, and priority is derived from the rank
(rank 1 = P0, 2 = P1, 3+ = P2, unranked = parked). The records are the source of truth;
an epic's `issue_ref` points at the tracker, rather than restating it. Design: srs-programme#15.

- **To reprioritise, edit the active period's `objective_rank`** (`record update`). Never set board
  Priority by hand; `node scripts/roadmap.mjs --apply` is the one writer.
- `node scripts/roadmap.mjs --json | --explain <repo#n> | --apply [--yes]` derives and applies.
- The spec-rework programme's units, findings, carried context, phases, Protocol and Blueprint
  are **frozen history**: no further lifecycle sync, no new ones. New lessons go to srs-context.
- The v12 strategy roadmap (boundaries, stages, contracts, assessments) is kept as frozen records.

## Writes go through the pinned CLI

Never hand-edit records, relations, containers or the manifest.

```bash
export $(node scripts/fetch-pinned-srs.mjs)
"$SRS_CLI_PATH" record create --repo . --type com.semanticops.programme/unit
node scripts/check-programme-conformance.mjs   # what CI runs
node scripts/roadmap.test.mjs                   # also CI
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
