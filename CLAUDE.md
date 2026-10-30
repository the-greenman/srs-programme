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
- Consumers (`roadmap.mjs` derivation and `--explain`, any Direction page) read **Affirmed only** for priority and ranking (problems, remedies); `roadmap.mjs` also reads clusters and personas from Suggestions as grouping labels, marked "suggested", with no priority weight.
- Dialogue between a human and an agent about a problem definition happens in comments.
- **Set aside** is the owner's reversible no: moving a suggestion there declines it; Restore moves it back. Agents never write into Affirmed or Set aside.
- Both containers have several writers: `container members add/remove`, never `container update`.

Precedence is repository governance (this file and `roadmap.mjs`), not a tool rule.

## Narrative explorations

The owner's understanding of the work enters as **Tier-0 vignettes** in the **Narrative explorations**
container (`80b283ef`). A vignette is a *source of meaning*, not a log of the conversation. Record one only when the owner's words
say what something **is, why it matters, or how it should be understood**: a concept, a theory, a ruling, a frustration that exposes a missing concept, or the start of a problem or remedy. Do **not** record
instructions (do this, merge that, move X up, add help for Y): they carry no meaning beyond the act, and the act is already in the PR or issue.
Test: *if the owner had said nothing, would a record's meaning be poorer?* A challenge that reveals a concept ("Is that not us? What is our holon?" gives *the driver is us*) passes; "I've merged the first two" fails. A mixed message is recorded only for its meaning-bearing sentences. When it does qualify, record their words verbatim as a note
(`note create`, then `container members add 80b283ef <id>`; sections `narrative` and `source`) before
acting on it. Records derived from a vignette go to Suggestions with `derived-from` to it. The practice
is the clerk handbook chapter "Narrative explorations: how meaning grows" (decision 77e04b19), which also sets the one-container-per-conversation standard (dated title, summary description, `topic:` tags).

## Flow stops

When you find work stopped, record it as you fix it or work around it. That covers:
- a PR that cannot merge;
- a gate red for a reason outside its change;
- an issue nobody can take;
- duplicate work;
- an owner wait that asks nothing;
- a routine that did not run.

Write a `com.semanticops.programme/finding` in Suggestions, tagged `flow-stop`, with dated evidence. It `evidences` the exercise of the flow-map stage where the work stopped (container `165f3a6e`, nine stages) and the problem behind it. Suggest the problem if none exists, and suggest the remedy if one is obvious. When a flow-stop finding already names the cause, add the occurrence to its evidence instead of a second finding. The rule is clerk handbook *Recording where flow stops* (proposed decision fbba3d5e). Read the stops with `srs find --tag flow-stop`.

## Decision flow

Decisions have their own flow, parallel to work: container `68b6eb64`, six stages (Arise, Settle by principle, Place, Decide, Record, Cite and revisit). It applies whenever you propose, apply or find a decision.
- **Placement.** Name the boundary where the decision removes choices: link the domain if one exists, otherwise add a tag `boundary:<slug>` in plain words. Never create a domain just to place a decision.
- **Principles first.** Before escalating, apply the decision compass and the recorded principles (remedy e120cf12).
- **Stops.** Record a decision that stopped, as you meet it, as a finding tagged `decision-stop` that `evidences` its stage. That covers a decision that:
  - vanished once a principle was applied;
  - reached a level that is not its own;
  - could not be found, or lived only in a branch;
  - was asked again.

The rule is proposed decision 199dd369. Read with `srs find --tag decision-stop` and `srs find --tag boundary:<slug>`.

## Research

Standing research into how SRS is used and what it needs: the **Research** root section, container `2f14de07`. Its anchor note says how a thread works. There is one thread per question: the graph (`fd02df3d`), human-readable repositories (`02a7e2e4`), and the flow and decision explorations above.
- **Add evidence as you meet it.** That covers a demo, a friction, an issue comment or an owner remark about SRS in use.
  - An existing record joins the thread by membership. Don't copy it.
  - New evidence is a `finding` in Suggestions that `evidences` the problem it bears on, and joins the thread.
  - Owner words are first a vignette in their conversation container.
- **Keep counter-evidence in the same thread.**
- **Rewrite, don't append.** The thread's anchor note holds the case so far; update it when the evidence changes the story.

srs-context points here (convention `a752700b`), so a session in any repository can find it.

## Writes go through the pinned CLI

Never hand-edit records, relations, containers or the manifest. Use the srs MCP server where mounted, else the pinned CLI (`clerk fetch-srs --repo .` prints `SRS_CLI_PATH=`). If the CLI cannot express an operation that is a finding: file the srs-rust issue and park, never hand-edit around it.

The pin (`SRS_RUST_CLI_TAG`) is declared once, in `.github/workflows/validate.yml`; the clerk reads it from there.

## Filing issues

A bug is filed as a bug (found while, steps, expected, actual, severity) and needs no problem: bugs are bugs (owner, 2026-10-25). Every other new SemanticOps issue (the-greenman/semanticops.com or an srs-* repo) is filed in the shape of the clerk handbook's *How an issue reaches a group*, and is checked with `clerk flow --chain <repo#n>` straight after: fix every ✗ it prints.

1. First line `Answers: SP-nn "<title>"`, naming a suggested or affirmed problem. `No affirmed problem yet` is not a way to file: suggest the problem first (look with `srs find --type com.semanticops.method/problem`, create the suggestion in the Suggestions container, held-by a persona-in-domain, `derived-from` the vignette), then name it.
2. `Part of <epic or story>`, and link the issue as its sub-issue.
3. `Remedy: <id8> *<title>*` where one fits, and `Ruling:` (a decision id, or `none` with why).
4. Sections `## Problem`, `## Technical plan` and `## Acceptance`.
5. The lane label the flow names (`wg:...` or `lane:unattended`).

Before filing, search semanticops.com, srs, srs-rust, srs-web, srs-vscode, srs-context and muDemocracy.org (including `label:parked`) for an issue answering the same problem (`gh search issues --owner the-greenman "<terms>"`); comment on an existing one instead of filing a near-duplicate.

Problem scouts run the MCP/CLI `similar` check against existing problems before suggesting a new one. Parked muDemocracy.org issues are sources for problems (`source_ref: muDemocracy.org#N`), never bulk-imported; unparking happens when an affirmed problem is answered by an epic, not by period rank.

`source-documents/archaeology-2026-10-08/` is a scout source: the 2026-10-08 audit of work lost before the reboot (unfinished RFCs, unfollowed decisions, abandoned epics, false closes, broken follow-up promises, spec/implementation drift), each thread classed against the new system. Start at `R-reconciled.md`: ORPHANED rows have no problem yet. Cite a row as `source_ref: srs-programme:source-documents/archaeology-2026-10-08/<file>`.

## Merge gate

`validate` is required on master, strict, zero reviews. **This repository is a
shared database: every PR carries `gate:auto-merge` and merges itself on green**
(`gh pr merge --auto`); red does not merge. That covers records, relations,
containers, source documents, settings and the clerk pin the workflows run
(decision c373c2c1, 2026-10-24; it revises 949ae72d here). A PR only records
state: the owner's acts are made in a session, the control room or a recorded
ruling. A PR that ratifies, affirms, authorises or sets aside on the owner's
behalf without that session record or the owner's actor is refused (SP-71).
Mode chaotic stops.

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
