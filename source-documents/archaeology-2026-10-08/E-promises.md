# E - Promises of later work not kept (read-only archaeology, 2026-10-08)

Method: merged-PR bodies since 2026-04-01 across 7 repos (1415 PRs; 347 promise lines naming an issue, 248 naming none), each referenced issue resolved for state, last comment and `parked` label; code markers and allowlists on origin/master; doc claims in CLAUDE.md / srs-usage.md / ADRs / roadmap docs.
Caveats: GitHub `updatedAt` is useless (everything was touched by the 2026-10-08 roadmap reset, srs-programme#15), so "last activity" = last comment or creation date. 66 issues were closed on 2026-10-08 in that reset; most carry a verified "done:/duplicate:/obsolete:" comment. Almost every stalled promise is now labelled `parked` (tracked, deliberately idle). "NO-CLOSING-PR" only means no `Closes #N` found, many are false positives and are omitted.

## srs-rust

| Promise | Where | Referenced issue + state | Status | Last activity |
|---|---|---|---|---|
| "unify BriefStage/ProtocolStageEntry ... deferred" and "move render_brief_markdown to srs-cli" (capability-layering.md:107 cites #131 as residual) | PR #132 (2026-06-09); `crates/srs-repository/src/blueprint_brief_service.rs:168` still defines `render_brief_markdown` on master | #131 CLOSED/COMPLETED 2026-10-08, but code unmoved. Three audit comments (07-08, 07-09, 07-18) said the fix lives only on stranded branch `claude/zen-pascal-cyvr8g`; closed anyway | CLOSED-WITHOUT-WORK | 2026-10-08 (wrongly closed) |
| `#[ignore]` "fixture regeneration is corpus-side follow-up work" | `crates/srs-bindings/tests/compositions.rs:115` (`compositions_for_container_empty_when_unbound`) | #783 CLOSED 2026-08-14. No fixture-regeneration issue named | BROKEN-UNTRACKED | 2026-08-14 |
| "TODO: fault-injection test ... pending a FailStore test double (see ADR-024)" | `record_store.rs:960`, `services.rs:266` | no issue | BROKEN-UNTRACKED | unknown |
| "TODO(#638): expose via srs-bindings WASM binding" (attachment policy); srs-web has interim hardcoded 5 MB budget "replaced by #638" | `attachment_policy_service.rs:34`; srs-web `attach-check.ts:16,25` | #638 OPEN, parked, 0 comments since 2026-07-18 | STALLED | 2026-07-18 |
| Follow-ups: #609 rebuild-precedes-chain CLI; #601 ADR-011 payload violation; #564 TypeJson duplication; #537 `record get-field-value` CLI; #396 payload unification; #626 `"<memory>"` sentinel; #639 validation.rs dedup; #687 CLI tree-model adoption; #688 ramp removal; #691; #704 logical-id migration; #706 SQLite spike; #725 carve-outs; #743; #749/#752 MCP list_changed + pagination; #557/#558/#559 relation ergonomics | PRs #610, #602, #565, #538, #397, #627, #640, #694, #707, #735, #745, #753, #569 (all Jul 2026) | all OPEN, labelled `parked`, no comment since filing (last 2026-07-07 to 07-31) | STALLED (parked) | 2026-07-07..07-31 |
| "Follow-up #1332 (CLI/web enforcement, unify validation.rs, retire flag), #1333" | PR #1335 (2026-10-07) | OPEN | KEPT (recent, queue) | 2026-10-08 |
| "RFC-044 mirror sync deferred to #1169 (after srs#860)" | PR #1170 (2026-10-02) | #1169 OPEN; srs#860 merged | STALLED (6 days, unblocked) | 2026-10-08 |
| "docs/roadmap/extension-implementation.md ... `ext:registry` service/CLI/binding pending (#244)"; Rev-note says file is dated 2026-06-27 and still lists repeatable fields | `docs/roadmap/extension-implementation.md:29,65`; PR #1278 noted it stale | #243, #244, #442 CLOSED | DOC-STALE | 2026-10-05 |
| "TODO(srs-rust#1126) ... no WASM binding to create a container" (srs-web GuidesShell) | srs-web `src/lib/guides/GuidesShell.svelte:458` | #1126 CLOSED 2026-10-08 "done: WASM create_container exists lib.rs:1027" | DOC-STALE (client never updated; "Create guide" still root-only) | 2026-10-08 |
| `ponytail:` "exports the whole tree to size it; replace with core repo_size (#1328)" | srs-web `essay-document.ts:678` | #1328 OPEN | STALLED/pending | 2026-10-08 |
| "ADR-037: multi-repo, subscriptions, HTTP transport are follow-up issues" | `docs/adr/037-mcp-adapter-surface.md:36` | #682 closed; #681 CLOSED not-planned (obsolete); #679 HTTP OPEN parked; #683 multi-repo = "start of federation" per memory | partly DOC-STALE | 2026-10-08 |
| "ADR-048: collapse execution still pending at srs#372" | `docs/adr/048-implementation-decision-rules.md:80` | srs#372 OPEN | STALLED | 2026-08-11 |
| PR #40: "Phase 2: remodel muSrs table type; Phase 3: guide-document-view; Phase 4: spec deltas, close RFC-001 Open Q2" | PR #40 (2026-06-04), "out of scope for this PR" | no issue named | BROKEN-UNTRACKED (not verified done) | 2026-06-04 |
| "Backfill the 23 unsized leaves; re-enable 'SRS issue assessment' routine"; "re-point routine to promote:ready, re-enable it" | PRs #349, #354 (2026-07-05) | no issue | BROKEN-UNTRACKED | 2026-07-05 |
| "MCP JSON resources are pretty-printed ... separate change" | PR #1313 (2026-10-07) | none filed; grep of mcp crates finds no `to_string_pretty` now, so possibly fixed | UNVERIFIED | 2026-10-07 |
| "Protocol run execution over MCP: follow-up if programme needs" | PR #965 | none | BROKEN-UNTRACKED (conditional) | 2026-09-06 |
| "packageDependencies silently dropped ... out of scope, flagged for a follow-up issue" | PR #945 (2026-09-05) | #1168 (tool gap) filed later and closed | KEPT | 2026-10-02 |
| "release-time sync of `docs/dogfooding.md` ~40 sections still reference document-view/--view" | PR #921 (2026-09-02) | none named | BROKEN-UNTRACKED | 2026-09-02 |
| "perf: tree_service node-revisit blowup, pre-existing, out of scope" | PR #1112 | memory says srs-rust#1113 OPEN | STALLED | 2026-09-21 |

## srs (spec)

| Promise | Where | Referenced issue + state | Status | Last activity |
|---|---|---|---|---|
| "Follow-up (not in this PR): docs/overview/ still stale: 'three repositories', 'monorepo', `graduatedAt`, `members[]`, `rootInstanceIds`" | PR #896 (2026-10-05); origin/master `docs/overview/README.md:74,76`, `first-repository.md:210,231`, `how-it-works.md:4` still carry them | no issue named | BROKEN-UNTRACKED (confirmed still stale) | 2026-10-05 |
| "Downstream follow-up (separate srs-rust issue): re-vendor srs-gov governance-seed.srsj; blocked by find_field_by_name('title') ambiguity" | PR #172 (2026-07-14) | no issue named; the function name no longer greps in srs-gov / governance_scaffold_service | UNVERIFIED (probably moot) | 2026-07-14 |
| "fieldMeta must not appear inside an inline-composite value - left for a follow-up" | PR #660 (2026-09-06); `checks.json` description repeats it | none | BROKEN-UNTRACKED | 2026-09-06 |
| "Extensions (35 contains children) and Foundation Group (19) deferred to a follow-up unit" ; "16 of 23 records (111 of 122 headings) left for follow-on against #562" | PRs #721, #678 (Sep 2026) | #562 CLOSED/COMPLETED 2026-09-09, no closing PR | CLOSED-WITHOUT-WORK (unverified remainder) | 2026-09-09 |
| "Key Invariants: no successor yet, deliberately deferred (carried-context-31ea3659)"; #710 "stays open for the follow-up `srs type delete` unit" | PRs #744, #721, #759 | #710 CLOSED 2026-09-11 the same day it was said to stay open | CLOSED-WITHOUT-WORK | 2026-09-11 |
| "Composition/View/Manifest/DiscoveryQuery/ExportConfig narrative-block retirement - not filed as its own issue (file on request)" | PR #544 (2026-09-04) | none | BROKEN-UNTRACKED (explicit) | 2026-09-04 |
| "Theme (theme.json) and DiscoveryQuery schema generation: Parked ... own follow-up unit recommended" | PR #533 (2026-09-02) | none named | BROKEN-UNTRACKED | 2026-09-02 |
| "Corpus migration out of scope; srs-rust follow-up for note_create omits createdAt" | PRs #508, #476 | none named for note createdAt | BROKEN-UNTRACKED | 2026-08-25 |
| "RFC-038 Phase 0 step 2: charter relocation not done - srs#329 open" | PR #378 (2026-08-13) | #329 OPEN parked | STALLED | 2026-09-07 |
| "patent covenant deferred" (licensing ruling) | PRs srs#707, srs-rust#1008, srs-web#300, srs-vscode#112 | srs#331 OPEN parked | STALLED | 2026-09-07 |
| "Rust emitter deferred to #260" (schema projection `srs schema generate`) | PRs #270, #489, #500 | srs#260 OPEN | STALLED; Rust `srs-projection` crate has `json_schema.rs` (189-line lib) so partially done | 2026-10-07 |
| "Rename core-bundle.srsj -> .srspkg by follow-up (#872, srs-rust#1213)" | PR #874 (2026-10-03) | both OPEN | STALLED (5 days) | 2026-10-08 |
| "Tool support pending srs-rust#1164" (readme carriage); PR #865 follow-ups #859, srs-web#355 | `srs-usage.md:1612`; PR #865 | #1164 OPEN parked; #859 OPEN last 2026-10-02; srs-web#355 OPEN | STALLED (docs correct while pending) | 2026-10-08 |
| `scripts/spec-coherence-allowlist.json` header: "each citing the live issue that removes it" | scripts/spec-coherence-allowlist.json | entries cite srs#805 (CLOSED 2026-09-27), #787 (OPEN) | DOC-STALE (allowlist cites closed issue) | 2026-09-27 |
| `publication-reachability-exclusions.json`: 73 entries; 70 cite only CLOSED issues (#285,#409,#274,#273,#631), 2 cite none, 1 cites an open one | scripts/publication-reachability-exclusions.json | decision-compass.md:219 already records "80 of 82 entries cite closed issues" and names #590 (CLOSED) | CLOSED-WITHOUT-WORK (disposition discriminator never added) | 2026-09-06 |
| `spec-language-allowlist.json` (2771 lines, 554 refs to #563); `decision-record-shape-allowlist.json` cites #607 | scripts/ | #563, #607 CLOSED | DOC-STALE (allowlisted gaps whose tracking issue is closed) | 2026-09-08 |
| `composition-container-literal-allowlist.json` (50 refs) | scripts/ | #851 OPEN, ready, P1, active | KEPT | 2026-10-08 |
| RFC-031 checker "41 allowlisted gaps" | `scripts/idl-schema-conformance-allowlist.json` | now `[]` | KEPT (retired) | - |
| srs-usage.md:696 "`protocol create` ... pending srs-rust#177" | `srs-usage.md:696` | #177 CLOSED 2026-06-25 | DOC-STALE | 2026-06-25 |
| charter decision-compass.md:345 "provisional pending the owner's future ruling" (srs#461) | docs/charter/decision-compass.md:345 | #461 CLOSED | DOC-STALE | 2026-08-25 |

## srs-web

| Promise | Where | Referenced issue + state | Status | Last activity |
|---|---|---|---|---|
| e2e quarantines "Quarantined (#173) ... Rewrite against the current breadcrumb" (`test.fixme` x4, `describe.skip("Migrations panel")`) | `e2e/gallery.spec.ts:197`, `load-repo.spec.ts:71`, `record-edit.spec.ts:43,115`, `migrations.spec.ts:41` | #173 "e2e suite: 42 failures - get green" CLOSED/COMPLETED but quarantines remain | CLOSED-WITHOUT-WORK | 2026-07-09 |
| "TODO(srs-web#215 item 2): no binding exposes a final state's requiresRelation" | `GovernanceShell.svelte:774` | #215 CLOSED 2026-10-04 | DOC-STALE (TODO outlives closed issue) | 2026-10-04 |
| "ADR-001 residual debt: orderByPrecedes retained (#122)"; "LifecycleState widened with tracking comment (#167)"; ADR-010 deferred to #137; #165 OAuth extraction | PRs #123, #168, #169; `docs/adr/010` | #122, #167, #137, #165 OPEN parked, last 2026-07-07..16 | STALLED (parked) | 2026-07-16 |
| "Follow-ups #436 margin flow, #437 dark theme, #439 styleguide overflow, #434 roving tabindex" | PRs #440, #435 (2026-10-04) | OPEN, 4 days | KEPT (young) | 2026-10-04 |
| Epic parents the PRs cite (muDemocracy.org #224, #226, #242, #282, #225) | PRs #409, #430, #435, #440; srs#853, #860 | CLOSED/NOT_PLANNED in the 2026-10-08 reset (23 muDemocracy.org issues closed not-planned) | CLOSED-WITHOUT-WORK for the story-level promises ("PR-B follows", Phases 2-5 under #282) | 2026-10-08 |
| "typed-honesty follow-up srs-web#284" | srs-rust PR #843 | OPEN parked | STALLED | 2026-08-14 |
| "ponytail: read old essay comment ids until essays depend on com.semanticops.comments (muDemocracy.org#305)" | `src/lib/comments.ts:66` | #305 OPEN | STALLED/pending | 2026-10-08 |

## srs-vscode

| Promise | Where | Referenced issue + state | Status | Last activity |
|---|---|---|---|---|
| "Known follow-up: `record update` has no patch capability; filing an srs-rust issue to extend" (client-side preserve-unrendered-fields workaround) | PR #93 (2026-08-15); `editCommands.ts:260,287` | no srs-rust issue found by search | BROKEN-UNTRACKED | 2026-08-15 |
| #73, #68 follow-ups from PR #59 (tag write surface etc.) | PR #59 | #73 OPEN parked (07-21), #68 OPEN | STALLED | 2026-07-21 |
| #47 CI literal-lint | closed as dup of srs-web#216 (OPEN parked) | the lint exists nowhere | STALLED (consolidated) | no comments |

## Root / cross-repo docs (workspace-root CLAUDE.md, not in any git repo)

| Claim | Referenced issue + state | Status |
|---|---|---|
| RFC-046 `createdBy` "lands with srs-rust#1171 ... Until then, no corpus may carry it" | #1171 CLOSED 2026-10-02; `srs-core/src/types/actor.rs` exists | DOC-STALE |
| RFC-043 container model "migration lands after srs-rust#1133; until then corpora are revision 7" | #1133 CLOSED 2026-10-02; srs/srs/manifest.json is dataModelRevision 8 | DOC-STALE |
| "No CLI/MCP command writes packageDependencies yet (srs-rust#1168)" | #1168 CLOSED 2026-10-02; `package dependency add/list/check` CLI and `package_dependency_*` MCP tools exist | DOC-STALE |
| "srs-rust keeps revisions.json behind a declared allowlist (srs-rust#866)" | #866 CLOSED; #681 comment says "the revisions.json allowlist is gone too" | DOC-STALE |
| "`srs-projection` future SQL/search/graph placeholder; `srs-bindings` future FFI placeholder" | `srs-bindings/src/lib.rs` 3510 lines + dozens of tests; `srs-projection` has json_schema.rs, RFC-035 parity test; crates `srs-gov`, `srs-mcp-core`, `srs-schema` not listed | DOC-STALE |
| "repo validate ok:false drops payload (srs-rust#1283)" | #1283 CLOSED 2026-10-07 | DOC-STALE (probable) |
| "Implementation pending srs-rust#1164" (readme) | #1164 OPEN parked | STALLED (accurate) |
| "enforcement and `repo create` scaffolding land in epic #95 Phase 1" | #95 CLOSED/COMPLETED 2026-07-16 | DOC-STALE |
| "`srs repo validate --repo srs/srs  # 264 instances`" | number surely stale | DOC-STALE |
| "DocumentView name still live until srs#272" | #272 CLOSED 2026-10-08 | DOC-STALE (likely) |

## Placeholder crates
No placeholders remain: `srs-projection` (partial: JSON-schema emitter only; remainder = srs#260 OPEN) and `srs-bindings` (full) are real. Only the documentation still calls them placeholders.

## Counts
Promise lines naming an issue: 347 (265 PRs). Referencing OPEN issues idle >30 days: ~35 distinct, all now `parked`. Referencing issues closed with no work evidenced: 6 confirmed (srs-rust#131, srs-web#173, srs#562 remainder, srs#710, srs reachability exclusions, muDemocracy.org epics). Promises naming no issue: ~16 section-level, 9 clearly lost.
