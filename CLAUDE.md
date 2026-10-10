# CLAUDE.md

## What this is

This is the SemanticOps programme, one instance of the methodology administered by `the-greenman/clerk`. The clerk holds all code, briefs and workflows (its `docs/tools.md` and `docs/routines.md`); this repo holds the data, the settings record "SemanticOps programme" (`cfb14770-053e-4fe7-9a84-ef3b3a07735c`, read with `clerk settings`; settings first, never hard-code what it holds), the roadmap site (`roadmap/`) and the frozen history (Waves 1-5, v12 records, `source-documents/`, `routines/pilot31-ratify.md`).

`the-greenman/srs-programme` is the **SemanticOps roadmap** (`com.semanticops.programme`), modelled in
SRS: periods rank objectives, epics serve objectives, and priority is derived from the rank
(rank 1 = P0, 2 = P1, 3+ = P2, unranked = parked). The records are the source of truth;
an epic's `issue_ref` points at the tracker, rather than restating it. Design: srs-programme#15.

- **To reprioritise, edit the active period's `objective_rank`** (`record update`). Never set board
  Priority by hand; `clerk roadmap --apply` is the one writer, run by
  `.github/workflows/derive-priority.yml` on every push to master and daily (`BOARD_TOKEN` secret).
- `clerk roadmap --repo . --json | --explain <repo#n> | --apply [--yes]` derives and applies.
- The spec-rework programme's units, findings, carried context, phases, Protocol and Blueprint
  are **frozen history**: no further lifecycle sync, no new ones. New lessons go to srs-context.
- The v12 strategy roadmap (boundaries, stages, contracts, assessments) is kept as frozen records.

Comments use `com.semanticops.comments` (`packages/comments`, export in `packages/comments/dist`): agents comment on records (`record create` comment + relation `com.semanticops.comments/comments-on`) and never edit records in Affirmed.

## Suggestions and the human layer

The `com.semanticops.method` package (problems, clusters, personas, remedies; own package under
`packages/method`) is written in two layers, both ordinary containers:

- **Suggestions** is where agents write. Every agent runs with its own session actor
  (`SRS_ACTOR='{"kind":"ai","id":"agent:<role>","name":"..."}'`, id stable per role) so `createdBy`
  says who suggested what. Create with `record create --container <Suggestions id>`.
- **Affirmed** is the human layer and has priority. A human adopts a suggestion with
  `record fork` (global `--container <Affirmed id>`): a new record, `derived-from` the suggestion,
  `createdBy` the human; the agent's original stays as testimony. Agents never write into Affirmed.
- Consumers (`roadmap.mjs` derivation and `--explain`, any Direction page) read **Affirmed only**.
- Dialogue between a human and an agent about a problem definition happens in comments.
- **Set aside** is the owner's reversible no: moving a suggestion there declines it; Restore moves it back. Agents never write into Affirmed or Set aside.
- Both containers have several writers: `container members add/remove`, never `container update`.

Precedence is repository governance (this file and `roadmap.mjs`), not a tool rule.

## Writes go through the pinned CLI

Never hand-edit records, relations, containers or the manifest. Use the srs MCP server where mounted, else the pinned CLI (`clerk fetch-srs --repo .` prints `SRS_CLI_PATH=`). If the CLI cannot express an operation that is a finding: file the srs-rust issue and park, never hand-edit around it.

The pin (`SRS_RUST_CLI_TAG`) is declared once, in `.github/workflows/validate.yml`; the clerk reads it from there.

## Filing issues

Every new SemanticOps issue (the-greenman/semanticops.com or an srs-* repo) states `Answers: SP-nn` or `No affirmed problem yet: <one-line problem>`. Before filing, search semanticops.com, srs, srs-rust, srs-web, srs-vscode, srs-context and muDemocracy.org (including `label:parked`) for an issue answering the same problem (`gh search issues --owner the-greenman "<terms>"`); comment on an existing one instead of filing a near-duplicate.

Problem scouts run the MCP/CLI `similar` check against existing problems before suggesting a new one. Parked muDemocracy.org issues are sources for problems (`source_ref: muDemocracy.org#N`), never bulk-imported; unparking happens when an affirmed problem is answered by an epic, not by period rank.

`source-documents/archaeology-2026-10-08/` is a scout source: the 2026-10-08 audit of work lost before the reboot (unfinished RFCs, unfollowed decisions, abandoned epics, false closes, broken follow-up promises, spec/implementation drift), each thread classed against the new system. Start at `R-reconciled.md`: ORPHANED rows have no problem yet. Cite a row as `source_ref: srs-programme:source-documents/archaeology-2026-10-08/<file>`.

## Merge gate

`validate` is required on master, strict, zero reviews. Programme data is
**non-normative** under srs#580's autonomy contract, nothing outside this
repository depends on it, so a PR states its Mode/Door, carries
`gate:auto-merge` and merges itself on green (`gh pr merge --auto`); red does
not merge. Mode complex, or Door 2/3, carries `gate:owner-merge` and the agent
never merges. Mode chaotic stops.

## Gates and choreography

Run each gate by its exit code, never through a piped `tail`. The gate is the Validate workflow, which calls the clerk. Locally, from a clerk checkout, with `SRS_CLI_PATH` set to the pinned CLI:

```bash
"$SRS_CLI_PATH" repo validate --repo <this repo> --pretty
node bin/clerk.mjs conformance --repo <this repo>
node bin/clerk.mjs check --repo <this repo>
node bin/clerk.mjs roadmap --repo <this repo> --json > /dev/null
```

Create worktrees with the clerk's `scripts/wt new srs-programme <issue#-slug>`. A red gate you cannot fix within scope means stop and report; never weaken a check to pass. Cloud routine sessions (briefs in the clerk's `routines/`) have no `ssh-add`: they skip the signing-key check below and commit with the environment's configured signing; local sessions keep the check.

### Clerk pin

Every caller in `.github/workflows/` (validate, derive-priority, pages, pr-upkeep, board-sync) pins the clerk to one commit SHA, written twice per caller (`uses: ...@<sha>` and `clerk-ref: <sha>`). Bump it together across all five callers, in one commit, when the clerk changes behaviour the programme needs. A single SHA everywhere; never mix.

## Signing and queue

All commits are SSH-signed, `ssh-add -l | grep -q
"SHA256:vHuO6si5w3RLL4IJZofWbyvEi42WA2fYX7bM"` before committing, plain `git
commit`, never `--no-gpg-sign`. The queue is this roadmap (`clerk roadmap --repo . --json`,
https://the-greenman.github.io/srs-programme/); spec work is epic semanticops.com#27 with
the-greenman/srs#580 as its queue.
