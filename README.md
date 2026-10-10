# srs-programme

This is the SemanticOps programme: one instance of the methodology administered by [the-greenman/clerk](https://github.com/the-greenman/clerk). SRS (pronounced "source") is an open standard for portable semantic documents that people and AI can both understand and use. See [semanticops.com](https://semanticops.com).

The clerk holds all the code, briefs and workflows (see its [docs/tools.md](https://github.com/the-greenman/clerk/blob/main/docs/tools.md) and [docs/routines.md](https://github.com/the-greenman/clerk/blob/main/docs/routines.md)). This repository holds the data:

- records and containers in `com.semanticops.programme` (periods rank objectives, epics serve objectives, priority is derived from the rank) and the method package;
- the settings record "SemanticOps programme" (`cfb14770-053e-4fe7-9a84-ef3b3a07735c`), read with `clerk settings`;
- the roadmap site in `roadmap/`, published at https://the-greenman.github.io/srs-programme/ by the Pages workflow;
- frozen history: Waves 1-5, the v12 strategy records, `source-documents/`, and `routines/pilot31-ratify.md`.

The spec-rework programme this repository began as (phases, units, findings, carried context, the unit-walk Protocol) is frozen history; new lessons go to srs-context. It moved out of `the-greenman/srs` per owner decision 2026-09-16 (srs#786), history preserved via `git subtree split`.

## Running things

From a clerk checkout:

```bash
node bin/clerk.mjs roadmap --repo <this repo> --json    # active period, ranked objectives, epic priorities
node bin/clerk.mjs queue --repo <this repo>
node bin/clerk.mjs check --repo <this repo>
node bin/clerk.mjs conformance --repo <this repo>
```

Visualiser locally: `clerk roadmap --repo . --json > roadmap/roadmap.json && python3 -m http.server -d roadmap`.

## Gates

The Validate workflow (`.github/workflows/validate.yml`) calls the clerk's reusable workflow, against the pinned `srs-rust` release declared there as `SRS_RUST_CLI_TAG`. The other callers (derive-priority, pages, pr-upkeep, board-sync) are thin as well. See `CLAUDE.md` for the working rules.

## Plans

Planning documents in `source-documents/`. They are dated history; the work they propose is tracked as issues.

| Plan | Status | Tracking |
|---|---|---|
| `archaeology-2026-10-08` | Read-only audit of work lost before the reboot; a scout source for problems (start at `R-reconciled.md`) | to be filed under clerk#8 |
| `boundaries-2026-10-09` | Proposal for boundaries, compasses and working groups, awaiting owner review | to be filed under clerk#8 |
| `srs-web-lenses-2026-10-09` | Assessment of why srs-web confuses, with a lens-model proof of concept on an unpushed branch | to be filed under clerk#8 |
| `agent-democracy-2026-10-10` | Living concept document for agents as a working democracy | to be filed under clerk#8 |
