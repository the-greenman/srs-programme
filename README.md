# srs-programme

SRS (pronounced "source") is an open standard for portable semantic documents that people and AI can both understand and use. See [semanticops.com](https://semanticops.com).

The SemanticOps roadmap (`com.semanticops.programme`): periods rank objectives, epics
serve objectives, and priority is derived from the rank. The owner reprioritises by
editing a period's `objective_rank`, never the board Priority.

```bash
node scripts/roadmap.mjs --json                      # active period, ranked objectives, epic priorities
node scripts/roadmap.mjs --explain muDemocracy.org#224
node scripts/roadmap.mjs --apply [--yes]             # dry-run unless --yes; needs GHP_SCRIPT
```

The spec-rework programme this repository began as (phases, units, findings, carried
context, the unit-walk Protocol) is frozen history; new lessons go to srs-context.
It moved out of `the-greenman/srs` per owner decision 2026-09-16 (srs#786), history
preserved via `git subtree split`.

Visualiser: `node scripts/roadmap.mjs --json > roadmap/roadmap.json && python3 -m http.server -d roadmap`, or https://the-greenman.github.io/srs-programme/ (built by `.github/workflows/pages.yml`).

See `CLAUDE.md` for the working rules (Protocol, pinned-CLI writes, merge gate). `routines/unattended-worker.md` is the brief the nightly unattended-lane routine reads. The group routines `routines/wg-reviewer.md` (PR events) and `routines/wg-builder.md` (issue and merge events) are the event-driven briefs for the working group; the nightly lane is only their fallback sweep. `routines/working-groups.md` draws the whole decision process and the quorum and merge rules as flowcharts.

## Validate

```bash
export $(node scripts/fetch-pinned-srs.mjs)
"$SRS_CLI_PATH" repo validate --repo . --pretty
node scripts/check-programme-conformance.mjs
node scripts/roadmap.test.mjs
```

This is what CI runs (`.github/workflows/validate.yml`), against the pinned
`srs-rust` release declared there as `SRS_RUST_CLI_TAG`.
