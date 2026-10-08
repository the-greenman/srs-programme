# C-epics: epics and stories started and not completed (read-only, as of 2026-10-08)

Data: `gh issue list --state all` for 7 repos, GraphQL subIssuesSummary / REST sub_issues, Project #5 item-list (1287 items). Children = direct sub-issues (cross-repo included), done = closed.

KEY CONTEXT: on 2026-10-08 a mass parking sweep touched every issue (updatedAt is meaningless; "Last activity" below is the last real comment or child closure). The same day epics 13, 17, 18 were closed not_planned with "Moved to the public tracker" comments pointing at semanticops.com#27/#29/#28 (those exist, all OPEN, created 10-08). Parked = the whole old muDemocracy.org roadmap (Releases 03-13) was shelved by owner redirection to the "SemanticOps problem-response programme".

## Table (sorted by size of unfinished work)

| Item | Kind | Opened | Status class | Children done/total | Last activity | Why it stopped / what was left |
|---|---|---|---|---|---|---|
| srs-rust#350 Platform quality & hardening | epic | 2026-07-05 | PARKED (open) | 51/69 | 2026-10-07 (child closed) | Catch-all bucket; 18 open: 15 parked P1 (MCP surface gaps #994, CLI definition delete #992, container list payload bug #1083, RFC-044 mirror #1169/#1173, store newline #1172), srs-rust#861 needs-input, srs#901 doc fix still active. Never a finite epic. |
| muDemocracy.org#83 Epic 04 muSrs Generic Semantic Editor | epic | 2026-07-03 | PARKED | 4/19 | 2026-08-11 | 15 open; 7 stories unplanned (#84-90: manifesto/copy as records, publish site from muSrs), #75 hand-arrange views. Owner moved to problem programme; copy/manifesto work shelved. Release 04: 28/55 items closed, 27 open-parked. Mid-flight: #87 3/3 subs, #84 2/2 subs closed under still-open stories. |
| muDemocracy.org#94 Epic 07 Offline editor | epic | 2026-07-04 | PARKED | 2/11 | 2026-08-11 | 9 open: #62-65 diff/merge/iterations, #116 reintegrate slice, #100 VCS workstream, srs#387/#388 RFCs (offline reintegration, repo-copy identity) never written. Release 07: 12/22. srs#375 audit routed edit-and-return boundary here, no follow-up. |
| muDemocracy.org#76 Epic 03 Workflow Editor | epic | 2026-07-03 | PARKED | 0/8 (real) | 2026-08-11 | #77-82 Designer browse stories unplanned; srs-rust#413 standalone package validate, #114 .srspkg export. Nothing shipped under it; #77 and #114 have 1/1 and 3/3 closed subs (work done, story not closed). Release 03: 5/14. |
| muDemocracy.org#92 Epic 06 Live Governance Editor | epic | 2026-07-04 | PARKED | 3/8 | 2026-07-22 | Open: #37 upgrade package (R3 yours-for-keeps), #57 revisit, #69/#70 promote/start-from-proposal, srs-rust#236 addressability epic (itself open). Body was empty at 07-16 review. Release 06: 16/24. |
| srs-web#92 Container-driven governance navigation | epic | 2026-06-28 | PARKED | 3/12 | 2026-09-17 | 07-16 note said "nearly complete" yet 9 open: #95 unify decision_log container, #122/#137 shell convergence, #162 pagination (srs-rust#408/#409), srs-rust#380/#382. srs-rust#377 closed not_planned 10-08. Never closed or re-scoped; pagination chain is a real unfinished capability. |
| muDemocracy.org#36 Epic 02 Governance app, Decision Log R1->R3 | epic | 2026-06-28 | OPEN-PARKED (R1 done) | 24/31 | 2026-07-22 (R1 complete) | R1 safe-to-try COMPLETE 07-22 with e2e green. R2/R3 never done: #58 supersede, #99 srs-gov CLI editing, #109 upgrade framework, #49/#52 exports, #131 file picker (10/15 subs), R2/R3 walkthroughs #56/#59 closed not_planned. Release 02: 215/226 items closed (best-completed release). |
| muDemocracy.org#124 Epic 13 SRS for Specs | epic | 2026-07-22 | CLOSED INCOMPLETE (not_planned, replaced) | 0/3 | 2026-10-08 | Closed with replacement semanticops.com#27 (exists, OPEN, 3 children: srs#216, srs#243 parked, srs-rust#673 done). Stories #126 (2/4 subs), #127 (5/6), #129 (0) still open-parked. Release 13: 3/8. Last real activity 2026-08-23 (decision-coherence research). |
| muDemocracy.org#224 Epic 17 SRS as agent-supported editor | epic | 2026-10-01 | CLOSED INCOMPLETE (not_planned, replaced) | 11/13 (but 9 closed not_planned) | 2026-10-08 | Replacement semanticops.com#29 (OPEN, 45 children, 24 done). Essay-editor stories #225-228, #242, #261, #276, #282, #299, #302 closed not_planned (moved), only #245 truly completed. #247/#248 (rev-8 membership) still open orphaned under closed epic. Owner redirected 10-08. |
| muDemocracy.org#288 Epic 18 srs-context | epic | 2026-10-06 | CLOSED INCOMPLETE (not_planned, replaced) | 2/4 | 2026-10-08 | Replacement semanticops.com#28 (OPEN, stories #25/#26 duplicates of #289/#290). #291/#292 still open-parked under closed epic. Engine shipped (#1284-87, #1319, #1322), measurement baseline set, monthly review due 2026-11-04. |
| muDemocracy.org#118 Workstream: srs-vscode delivery | workstream (CLI-parity "Epic 12") | 2026-07-18 | PARKED | 5/10 | 2026-09-11 | Stories #119,#121,#122,#123 open-parked (0/5, 1/4, 0/2, 3/4 subs); catch-up srs-vscode#119/#121 closed 09-11. #120 workstream 0/1 (srs-vscode#75 hygiene). Release 12: 4/22 (worst). |
| srs#171 Relation layer coherence (R1-R10) | epic | 2026-07-14 | OPEN-PARKED | 9/18 | 2026-07-31 | Design ratified; enforcement not built: srs-rust#557/#558/#559 (validate relation diagnostics, canonicalDirection enforce), srs#180 conformance fixture, #181 docs guardrails, #287 eight prose defects, srs-web#216, srs-vscode#45 (#47 closed not_planned). Classic "motivating example fixed, general enforcement never built". |
| srs#256 Self-host SRS model (closed 2026-09-05) | epic | 2026-07-29 | CLOSED INCOMPLETE | 53/59 | 2026-10-07 | Closed with 6 open: #260 Task 4 bootstrap closure + cutover (owner sequencing hold 2026-08-23, blocked) with its child #271 Task 4a authorship flip (P1, blocks-gate); #312 fail-closed unknown extension; #351 JS/Rust transform equivalence gate; srs-rust#800/#801; muD#133 core foundations gate 21/24. #512 queue closed not_planned (superseded by #580). Core promise (flip authorship to records) not delivered. |
| muDemocracy.org#141 Facilitated Decisions (P2 protocol meeting) | epic | 2026-08-15 | PARKED | 0/2 (+1 np) | 2026-08-15 | Stories #66 live protocol meeting, #67 ratify: unplanned, no subs. Walkthrough #144 closed not_planned. Depends on srs-rust#236 addressability. |
| muDemocracy.org#60 Epic 08 AI-assisted decision capture | epic | 2026-07-02 | PARKED (blocked label) | 0/4 | 2026-08-15 | #68 transcript recommendations, #71/#72 agent orientation (#71 1/1 sub), #128 agent channels (6/9 subs). Disposition: split to #141 and agent stories later absorbed by Epic 17/18. |
| muDemocracy.org#95 Epic 05 Governance viewer | epic | 2026-07-04 | PARKED | 2/4 | 2026-07-16 | Dependencies done (srs-rust#212, srs#92). Stories #73 (1/1 sub), #74 never built. Release 05: 9/12 items done, closest to finish of the parked ones. |
| muDemocracy.org#293 Epic 19 Package distribution | epic | 2026-10-07 | PARKED (born parked) | 0/3 stories (sub 7/23) | 2026-10-07 | Filed one day before the sweep; #294 3/10, #295 2/9, #296 2/4 sub-issues. In-flight, partial merged work. |
| muDemocracy.org#159 Epic 16 Reference impl honours its contracts | epic | 2026-09-10 | PARKED | 13/16 | 2026-09-20 | Open: srs-rust#1291 type create core fields, #1307 find --text naming (both parked), #1297 --version. Mostly done. |
| muDemocracy.org#117 Epic 11 Snapshot export (.srs, slices) | epic | 2026-07-18 | PARKED | 0/2 stories (sub 7/9) | 2026-08-11 | #113 single-.srs (2/3), #115 slice export (5/6) nearly done but stories never closed; semantic-preservation items routed here from srs#375. |
| srs#556 Spec reads in layers (metastructure) | epic | 2026-09-05 | OPEN, mostly done | 16/18 | 2026-10-08 | Open: #566 stub (only if earned), #580 (circular), #605 closed not_planned. Concept-tree design ruled 09-05; prerequisites filed post-freeze. Near-complete. |
| srs#580 Programme: spec becomes what it describes | programme | 2026-09-05 | OPEN, live | 3/11 | 2026-10-08 | Active queue; P0 children open (#787 readable spec, #837, #841, #844, srs-rust#1129/#1132, srs-programme#3 harvest loop no trigger, #15 roadmap as SRS records). Superseded in role by srs-programme roadmap. Not stalled, but largest open P0 list. |
| srs-web#306 Browser-hosted SRS MCP via relay | epic | 2026-09-12 | PARKED | 13/17 | 2026-10-05 | Core path live 10-03; open: #308 interop tests, #309 transport spike (parked), srs-rust#1240 facet drill-down, srs-web#446 pairing-code OAuth. |
| srs#100 / srs-rust#271 Attachments & .srs archive | epic pair | 2026-06-28 | PARKED | srs#100 2/3; srs-rust#271 43/46 | 2026-07-28 | Open: srs-web#233 attachment delete/unlink, #234 policy UI (both blocked), srs-rust#776 WASM remove/unlink bindings. UI delete flow never shipped. |
| srs#64 W1 Extraction model & gallery | epic | 2026-06-23 | PARKED | 8/10 | 2026-08-15 | srs#49 extraction workflow docs, #50 guidance-sync.mjs open since 2026-06-09. Note says assumptions need post-cutover rework. |
| srs#384 F2 Meaning you can take / SRS 2.0 | release boundary | 2026-08-15 | PARKED | 1/3 | 2026-08-15 | #385 RFC frozen publication, #386 independent offline reader unstarted; #142 walkthrough closed np. |
| srs#726 Structured discovery | epic | 2026-09-10 | OPEN | no tracked subs | 2026-10-04 | Active; eval comments through 10-04. Not stalled but has no sub-issues to measure. |
| srs#787 Readability wave | wave | 2026-09-16 | OPEN, stalled | 0/0 | 2026-09-17 | Rulings recorded, no children; parent P0 in #580. >21 days no activity. |
| srs#375 Semantic preservation audit after #256 | audit | 2026-08-11 | OPEN | n/a | 2026-08-11 | Disposition summary posted; routed items sit on parked epics 07/11/03. |
| srs-rust#236 Implement ext:addressability | epic | 2026-06-27 | PARKED | 3/3 | 2026-07-18 | All children closed but epic left open and parked; stranded srs branch claude/serene-sagan-53oof0 noted 07-18. Blocks protocol runs (Epic 06/08). |
| srs-rust#235 Implement ext:federation | epic | 2026-06-27 | CLOSED not_planned (closed 10-08) | 4/4 | 2026-10-08 | Removed clean-cut per srs-rust#878; spec keeps a "committed return" for federation (decision 4f1e12e5). Registry #683 flagged as federation start; no replacement epic exists yet. |
| srs-rust#234 ext:registry / import-tracking | epic | 2026-06-27 | CLOSED INCOMPLETE | 7/8 | 2026-07-19 | srs-vscode#42 registry list/get in VS Code still open-parked. Successor distribution work is Epic 19. |
| muDemocracy.org#30 Epic 01 Decision Logger v1 | epic | 2026-06-24 | CLOSED COMPLETED, 1 open | 10/11 | 2026-07-06 | Shipped 06-27. S8 #28 external links reopened, parked (its 2/2 subs done). |
| muDemocracy.org#93 AI Assisted Governance | epic | 2026-07-04 | CLOSED COMPLETED (parent loop) | 0/1 | 2026-07-04 | Has #60 (Epic 08) as its only child, which is open: the closure is a duplicate/rename artifact. |
| srs-web#322 Generic-first editor | story | - | CLOSED COMPLETED, 1 open sub | 1/2 | - | One sub-issue left open. |
| srs-rust#464 Migration framework epic | epic | 2026-07-09 | COMPLETE | 6/6 | 2026-07-21 | Closed with full delivery comment. (Lead resolved: not a loss.) |
| srs#95 Required root container, srs-rust#262 | epic | 2026-06-28 | COMPLETE | 5/5; 5/5 | 2026-07-16 | Both closed 07-16. |
| srs#66 W5, #65 W3, srs-rust#178 W4, #212, #231-233 | epic | 2026-06 | COMPLETE | all closed | 2026-07 | No loss. |
| semanticops.com#27 / #28 / #29 | epics | 2026-10-08 | OPEN, fresh | 1/3, 1/3, 24/45 | 2026-10-08 | Successors of 13/18/17; mostly parked srs issues or duplicates; check they are not parking spots. |

## Story-level findings (muDemocracy.org)
- 100 stories: 42 closed (about 18 closed not_planned on 10-08: walkthroughs #56 #59 #142 #143 #144 and the Epic 17/18 essay/agent stories), 58 OPEN and PARKED, 0 orphans (all have parents).
- Stories whose sub-issues are mostly done but story still open (parked on the final step): #28 2/2, #52 2/2, #58 2/2, #87 3/3, #77 1/1, #114 3/3, #99 3/3, #104 2/2, #109 1/1, #73 1/1, #71 1/1, #37 1/1, #84 2/2, #115 5/6, #127 5/6, #131 10/15, #128 6/9, #113 2/3. These are the genuine mid-flight losses.
- 28 stories carry story:unplanned and have 0 sub-issues (never planned): mainly Epics 03, 04, 06, 07, 08. Story-planning radar #125 closed not_planned on 10-08.
- Never-started (0/0, no PR): #62-65, #66, #67, #74, #75, #78-82, #85, #86, #88-90, #116, #129.

## Project #5 Release groups (items closed / total; open ones all carry parked)
| Release | Closed/Total | Verdict |
|---|---|---|
| 01 Decision Logger v1 | 34/35 | complete |
| 02 Governance app | 215/226 | mostly done (R1 shipped; R2/R3 stalled) |
| 03 Workflow editor | 5/14 | ABANDONED (36% done) |
| 04 Generic Semantic Editor | 28/55 | ABANDONED/half (51%, 27 parked) |
| 05 Governance viewer | 9/12 | nearly done, parked |
| 06 Live governance | 16/24 | partly done (3 not_planned) |
| 07 Offline editor | 12/22 | half, parked |
| 08 AI Assisted Decision log | 7/15 | ABANDONED (47%) |
| 09 Public VCS storage | 6/11 | half, parked |
| 10 Public VCS full repo | 5/12 | ABANDONED (42%) |
| 12 SRS VS Code Extension | 4/22 | ABANDONED (18%) |
| 13 SRS for Specs | 3/8 | ABANDONED, moved to semanticops.com#27 |
| (no release) | 609/831 (157 open-parked, 65 open not parked) | |

## Totals per repo (epic/umbrella items)
| Repo | Epics found | Complete | Open-parked/open stalled | Closed incomplete |
|---|---|---|---|---|
| muDemocracy.org | 16 labelled + 5 workstreams | 1 (Epic 01, 1 reopened story) | 12 parked | 3 (13, 17, 18) + #93 artifact |
| srs | ~12 (W1/3/5, 64, 95, 100, 171, 256, 384, 556, 580, 726) | 4 (95, 65, 66, +W3) | 8 open (64, 100, 171, 384, 556, 580, 726, 787) | 1 (256, 6 open) |
| srs-rust | ~13 (178, 212, 231-236, 262, 271, 350, 464) | 7 (178, 212, 231-233, 262, 464) | 3 (236, 271, 350) | 2 (234, 235) |
| srs-web | 2 labelled (92, 306) | 0 | 2 parked | 0 (+ #322 sub open) |
| srs-vscode | 0 epics | - | 14 parked issues, no epic | - |
| semanticops.com | 3 (all new) | 0 | 0 | 0 |
| srs-programme | 0 (11 issues) | - | - | - |

Caveats: counts are direct sub-issues only; some children (e.g. #133) are themselves umbrellas. "Last activity" for parked epics is from latest comment or child closure, not updatedAt. Raw data in ./raw/ (JSON, sub/, gq-*.jsonl). No GitHub writes were made.
