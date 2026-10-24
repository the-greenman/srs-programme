# Work-flow audit: week to 2026-10-23

Oct 23, 2026 · @greenman

*Redacted for publication: details of a client engagement are replaced with "a client essay". The unredacted original is kept in the private srs-lab repository.*

## Summary

The system is producing a lot: 254 merged PRs this week, revision 10 landed in every repo, and two editors are in real use. But every one of those merges went through you, and 176 of them were process and memory rather than product. Two patterns explain most of the overwhelm.

**Your acts don't finish anything.** Affirming, answering, receiving and ratifying each happen on one surface. The merge that completes them happens on GitHub, by your hand. So you end up there.

**What needs you keeps getting re-planned rather than done.** Agents build machinery within days. Remedies that need an owner act or a regular cadence recur across plans and stall. Affirming the pilot domains appears in five plans in seven days, yet you did it on 10-16. The tracking issues named the suggestion ids, were never closed, and every later plan kept asking for it.

The five things to act on first:

1. **Rescue four pieces of work that exist nowhere else:**
   - the client essay file, untracked in the client's repository;
   - the srs-web lens POC, 5 commits never pushed;
   - today's uncommitted RFC-052 Door 3 amendment (srs#953);
   - commit 9d0d116 on decision ff946eb1, never landed.
2. **Hold one session to clear the owner-act backlog:**
   - finish the domain walks: link epic 5746dee3 to its remedy and re-point 4 problems' held-by, then close the stale srs-programme#107 and #110;
   - ratify or set aside the 5 proposed decisions, cdd272a3 among them;
   - receive the 3 reports;
   - triage the 19 `needs-input` issues.
3. **Ship clerk changes C1-C5.** They are all small. They fix the canary, govern srs-lab, refuse question-less owner PRs and auto-merge practice data. Together they take most merges off GitHub.
4. **Prune about 115 worktrees** and fix `wt` so it sees all 140 (C7, C8).
5. **Propose rules H1-H8 as decisions**, starting with H1, "an owner act is the last step of its work". The handbook and the clerk then follow from them.

## Retrospective: RFC-051 and RFC-052, 2026-10-24

Full document: Retrospective: shipping RFC-051 and RFC-052. The two breaking revisions cost 45 PRs across 9 repositories, 9 releases and about 14 owner rulings over 2 days 21 hours. The rollout itself took 3.5 hours; the rest went on finding the plan during the work.

- **Practice to propose as a decision:** a breaking change is accepted together with its release plan (surfaces, named consumers, delivery shape, order, runbook, in-flight inventory, consumer tests against the release candidate), and implementation starts only when the plan exists.
- **bf4a5af5:** recommend B, on the ADR-053 twin pattern. The text is derived from the structured diagnostic, so there is one source of meaning, and its retirement is planned later as its own breaking change.
- **Revision 11 (RFC-051)** is the first change to use the checklist: write its plan on srs#940 before srs-rust#1448 starts, and land srs-web#613 first.
- **A correction:** srs#962 merged while its challenger verdict was reject. I told you it was safe after checking GitHub's review count (zero) and missing the verdict comment. That led to RFC-052 Revision 6 and srs-rust#1458. In future I read the quorum comment, not the review count.

## Session held, 2026-10-24 (srs-programme#230, merged)

- **Ratified:**
  - 4a44396a, the bug fixer's seat.
  - 949ae72d, one merge rule everywhere. Your note: a core policy decision, then implementation specifics.
  - c04d8164, the clerk's runtime uses only Node's standard library. Your note: a moment-in-time statement of a deeper principle still to be uncovered.
  - cdd272a3, axis-in-domain records. Your note: the formal theory is that any boundary creates its own poles, fractally.
- **Accepted option A:**
  - 5d5feb79: the essay brief becomes a typed field. Your note: still experimental, so we add features to learn.
  - c7fefad9: land srs-rust#1264 first. Your note: decide on principle, keeping semantic integrity.
- **Received:** all three working-group reports, so Third-party ready is running again.
- **Deferred:** bf4a5af5 (how structured diagnostics reach the text lists) waits on a retrospective of the RFC-051 and RFC-052 rollout. Precedent points to option B, the ADR-053 pattern: a structured list beside the text, retired later.
- **Not taken up this session:** exercises 8 to 12, and the ff946eb1 correction.
- **Now unblocked:** the four axes PRs (srs-programme#206, clerk#135, srs-lab#18, srs-context#58), two of which need a rebase; srs-web#567 (Funding 2); srs-rust#1264 as the next builder item; and srs-vscode#145, now that its group is unpaused.

## Session prepared, 2026-10-24

One session clears most of the desk: 6 decisions, 3 reports, 5 exercises and one correction. The session copy of srs-programme is ready at `~/dev/.wt/srs-programme/session-20261024-104049`. Run `/session` and answer item by item, or in one line, for example "ratify 1 to 4, receive all, input on 8, 11 and 12, decide 13 and 14 as recommended".

| # | Item | Recommendation | Why |
| --- | --- | --- | --- |
| 1 | 4a44396a: the bug fixer holds a builder seat in every group | Ratify | You merged its seat (srs-programme#210); this records the mandate. No routine uses it until its trigger is set up |
| 2 | 949ae72d: one agent merge rule in every governed repository | Ratify | It matches the `pr-check` rule you chose ("refuse both"). Then clerk's CLAUDE.md and srs-web#609 point to it |
| 3 | c04d8164: the clerk's runtime imports only Node's standard library | Ratify | It codifies what `test/runtime-imports.test.mjs` already enforces |
| 4 | cdd272a3: polarity per domain and axis (axis-in-domain records) | Ratify, if your 10-22 words still hold | It unblocks four PRs: srs-programme#206, clerk#135, srs-lab#18 and srs-context#58; two of them need a rebase first. Keep clerk#140 (only mature domains act independently) held until the domains' axes are placed |
| 5-7 | Reports: Third-party ready 10-22 and 10-23, Agent-supported editor 10-23 | Receive all three | This unpauses Third-party ready, so srs-vscode#145 merges through upkeep |
| 8 | 2ac083c0: one unknown key makes a repository unloadable | Input: option 1, an unknown instance key is a non-fatal warning (a Door 3 revision of RFC-038) | Your 10-22 comment already leans this way; it becomes an `/rfc` |
| 9 | 451a23ba: one chain of meaning for essays and the programme | Hold | Both models are still being practised; nothing is blocked |
| 10 | b430b7e0: a taxonomy of decisions by practice | Note it and defer | It is new and large, and blocks nothing |
| 11 | da4b2b6a: how a remedy differs by domain and persona | Make it a decision: a relation from a remedy to the persona-in-domain it serves | You said on 10-16 that "a remedy does need to point to who it is for" |
| 12 | dd1a47a7: relation reads hide who asserted a link | Input: yes, additive. Relation reads carry createdBy, notes and meta; the kind filter is deferred | It unblocks srs-rust#1411, which the muDemocracy site editor asked for |
| 13 | 5d5feb79: where an essay keeps each agent's brief | Option A: a typed field in the essay package | It unblocks srs-web#567 (Funding 2); Funding 3 and 4 share the release |
| 14 | c7fefad9: the diagnostics shape before srs-rust#1339 | Option A: land srs-rust#1264 first, and answer its real question by adding structured diagnostics alongside the string lists rather than replacing them | Additive keeps every consumer working; #1339 then becomes mechanical |
| 15 | Not on the agenda: ff946eb1, the no-threading clause | Ask the clerk to record a successor that drops it | Your 10-21 correction (commit 9d0d116) never landed |

## Status of every task, 2026-10-24

| Area | Done | Open |
| --- | --- | --- |
| Rescues | Lens POC pushed and parked (srs-web#614); RFC-052 Door 3 merged (srs#962); the client essay file backed up locally | Where the client essay file is versioned (your call, not the client's repository); the successor to ff946eb1 (session item 15); two muDemocracy.org worktrees still hold a regenerated `agent-amendments.md` that is safe to discard (my removal was blocked by a permission check) |
| Worktrees | 117 removed, uncommitted work archived; 140 down to 30 | `wt` still misses three repos (clerk#168); routines still leave worktrees behind (clerk#169) |
| Confidence and care | clerk#157, #162 and srs-programme#216 merged; live, with three queued items building and three careful under their group | Briefs follow the modes (clerk#156 phase 4) |
| Merge load | Owner-merge PRs must state a question (clerk#172), and that is live through the pin (srs-programme#229); every PR on Needs you now asks something | An answer merges the PR (clerk#164, P1); session merges (clerk#166, P1); receive instead of a thumbs-up (clerk#167); srs-lab governed (srs-programme#227); one merge rule everywhere (session item 2) |
| Lost threads | Real status posted on srs-programme#107 and #110; two context notes (srs-context#62) | Loose ends on the desk (clerk#170, P1); affirming updates its issues (clerk#171); finish the domain walks (an epic link and 4 held-by links) |
| Real use | Client-essay issues routed to the editor group; a remedy suggested (c21da256) | Affirm or set aside c21da256; write the client-essay run-report; srs-rust#1423 for the bug fixer |
| CI and mirrors | srs-vscode Schema Drift fixed (#149); the cloud canary is passing again | A scheduled mirror sync (srs-vscode#150); control room errors (srs-lab#22) |
| Handbook rules H1 to H8 | H2 is in force through `pr-check`; H8 is partly done (pr-decisions status line) | H1 and H3 to H7 are not yet proposed as decisions |
| Your other calls | — | srs-web#607 (duplication layering); semanticops.com active or parked; retire `problem-index/`; triage 19 `needs-input` issues |

## Progress since the audit

Updated 2026-10-23, evening. Everything below was done within the handbook's gates: agents merged only `gate:auto-merge` PRs, and every owner-gated PR waits for you.

| What | Where | State |
| --- | --- | --- |
| Pruned 117 worktrees; uncommitted work archived first | `~/dev/.wt/_archive/2026-10-23` | Done; 23 kept (open PRs, live work, your decisions) |
| Pushed the lens POC (5 commits that existed nowhere else) | srs-web `poc/ux-lenses` | Done |
| Backed up the client essay file; not committed to the client's repository | a local archive | Done |
| Confidence and care policy: review findings fixed; only a written plan builds | clerk#157 | Merged by you |
| Seed updated to match; re-rendered | srs-programme#216 | Green, waits for you |
| Claim consults the policy: rebased onto main | clerk#162 | Green, waits for you |
| Container conflicts fixed with the CLI | srs-programme#211, #210 | #211 merged by upkeep; #210 waits for you |
| Schema Drift red on srs-vscode master since 10-22 | srs-vscode#149, #145 | #149 merged; #145 green, waits for its paused group |
| Gate labels on 6 ungated PRs | srs-context#59, #60 (auto, merged); srs-programme#206, clerk#135, srs-lab#18 (wait on cdd272a3); srs-web#607 (layering question) | Done |
| Client-essay issues routed | srs-web#587-#590 to `wg:agent-editor`; srs-rust#1423 as `bug` | Done |
| Epic with every child completed, closed | srs-rust#236 | Done |
| Real status posted | srs-programme#107, #110 | Done |
| Bugs filed | clerk#164-#171, srs-programme#227, srs-vscode#150 | Open; #164, #166 and #170 are under P0 epic semanticops.com#38 |
| Remedy suggested for real-use occasions | c21da256 (srs-programme#228) | Merged; in Suggestions for you to affirm or set aside |

**clerk#165 is built: clerk#172 is merged (2026-10-24): you answered A1 "refuse both".** `pr-check` now refuses an owner-merge PR that asks the owner nothing, and a PR with no gate label. The desk and the upkeep digest send such PRs back to an agent. An independent review found 4 defects in the first cut, all fixed. Follow-up: srs-lab#22, so the control room shows the new errors. On the day it was built, the rule caught five of this session's own owner-gated PRs with their question in a comment, not the body. Their bodies now carry a `Decision asked:` line. Context notes went to srs-context#62.

**Live now:** `pr-check`, which every agent brief runs from clerk main. **Waiting on srs-programme#229**, the clerk pin bump: the desk filter and the digest section, which run inside srs-programme's workflows pinned to clerk `9400818`. #229 is green. Its dry run already lists srs-context#58 as asking nothing, and that body now carries its question.

**srs-programme#216 (care policy) was tuned before starting, 2026-10-24.** As first seeded, it put all six queued items into Careful, which meant your merge. Each of them is affirmed, ranked and held by a working group. Two changes, both data only:

- a new Rule 3 sends affirmed, ranked work with its steps written out to Build;
- a new mode, "Careful, group-reviewed", keeps group work with no plan under its group's review.

Result: three queued items build and three stay careful under their group. Ungrounded work still can't build. You merged #216 on 2026-10-24, and the policy is live: claims now read a mode (srs-rust#1442 reads Build) and master is green. The pin bump #229 is up to date and green, and its validate run now includes the policy drift check.

**Waiting on you:**

- **Merge:** nothing outstanding. You merged srs#962, srs-programme#210, #216 and #229 (2026-10-24). The routines run clerk main, master is green, and every PR on the desk's Needs you now states its question. Merged on the owner's say-so after green CI and an independent review: srs-rust#1454, #1455 and #1457, srs-lab#21 and clerk#162. The srs-rust, clerk and srs-lab masters are green afterwards.
- **Session:**
  - Ratify or set aside cdd272a3, which unblocks three axes PRs.
  - Ratify or set aside 949ae72d, one merge rule everywhere.
  - Receive the two Third-party ready reports, which unpauses the group and lets #145 merge.
  - Write a successor to ff946eb1 for the no-threading clause.
- **Decide:** srs-web#607. Duplication either moves into the srs-rust core, stays as a TS stopgap, or is dropped.

**Corrections to this report:**

- **`needs-input` claims.** A hold keeps its claim on purpose (#715), so H5 and C10 now ask for the question to be surfaced, not for the claim to be released.
- **The paired SP-73 to SP-97 records** are each a suggestion plus your affirmed fork. That is by design.
- **C2** is settled by ratifying 949ae72d.

## What landed this week

254 PRs merged in nine repos, and you are recorded as the merger of every one. 176 of them were process and memory (sessions, decisions, clerk, dream cycle, control room). 50 were the spec, the implementation and the editors. The biggest product move was coordinated: RFC-051 and RFC-052 were accepted on 10-20 and every repo reached `dataModelRevision` 10 by 10-23.

&#91;embedded content: gh pr list --state merged, merged:>=2026-10-16, run 2026-10-23\]

| Repo | Main themes (PR numbers) |
| --- | --- |
| srs-programme | Sessions and affirmations; problems SP-67 to SP-98, personas and domains; working-group reports; trigram, zodiac and axis compass work (#205, #220-#225); escalations for srs-rust#1417 and #1264 |
| clerk | PR decisions and upkeep: pr-check, merge rules, quorum (#78-#95); the work-status set and labels (#122-#149); `clerk serve` (#107, #136); cloud health (#117-#120); `/ship` (#84); bug-fixer brief (#153) |
| srs-context | Daily dream cycle (9 runs); about 15 trap and finding notes; pinned-build hooks (#43, #49) |
| muDemocracy.org | Site editor built on srs-web libraries (#351-#381); /, /about and /decision-recording rendered from muSrs; EmDash retired (#353, #382-#385); explainer v0.5 |
| srs-rust | RFC-051 core: fractional keys, write sets (#1433-#1438); RFC-052 revision 10 and its migration (#1437, #1440); validation hardening and error codes |
| srs-web | Essay editor work for the funding remedies: undo, split, caret, attachments, documents as context (#574-#597); libraries extracted to `$lib/document`, `$lib/agent-host`, `$lib/agent-library` |
| srs-lab | The control room as a client of `clerk serve`, served at control.semanticops.com: Domains view, affirmation rounds (#4-#19) |
| srs | RFC-051 and RFC-052 accepted (#942, #943); RFC-051 Revision 15 (#955); revision 10 (#957) |
| srs-vscode | Revision-8 container model (#135); schema syncs |
| semanticops.com | Nothing since 10-07, though it holds four of the seven roadmap epics, two of them P0 |

At the end of the week 18 PRs were open, none of them reviewed. 19 issues were waiting on `needs-input`, the oldest for 93 days (srs-rust#683, P0).

## Worktrees: what to prune, what to rescue

There are 140 worktrees across 12 repos in 7 different places on disk. About 115 can go today. 14 hold work that is not on master, and one of those was edited an hour before this audit. Inventory taken 2026-10-23 \~17:00 from `git worktree list` in every repo, with fetch, merge-base, `git cherry` and the PR's head commit checked for each.

### Safe to remove now

| Group | Count | Why it is safe |
| --- | --- | --- |
| Clean, HEAD already on the default branch | 61 | clerk 19, srs-context 9, srs-programme 9, srs-rust 8, srs-lab 7, srs 4, muDemocracy.org 3, srs-web 2 |
| srs-context branches whose PR merged with the same head commit | 20 | 12 `dream-*` worktrees (one per dream run since 2026-10-13), plus 129, 32, 38, 42, 83, axes-zodiac-rule, decision-taxonomy, site-editor-findings |
| PR merged by squash; the one extra local commit is the same change | 7 | srs-web 532, 541; srs-programme pilot31-u8-steward; clerk 64-desk, cloud-friction, cloud-no-gh; muDemocracy.org mig-rev8 |
| PR closed and superseded | 8 | srs-context 7-lab-worktree-trap, axis-polarity, gh-rate-limit-trap (re-opened as #58-#60); srs-web 317, 325; srs-vscode 137; semanticops.com 10; srs-rust pr-1374 (srs-rust#1195 closed) |
| Merged, dirty only with build noise | 10 | `node_modules`, `dist/` or an esbuild binary: srs-vscode 110, 331-license, ci-workflow, mirror-342, 143-mirror-rev10; srs 1338-error-codes; clerk 121-labels, 151-bug-fixer; srs-context dream-202610231127 (an untracked bench result) |
| Merged, dirty only with an RFC draft that has since landed | 4 | srs 051-per-entry, rfc-composition-arrangement-tree, rfc-readme, srs-wt-rfc855: RFC-043/044/045/051/052 are all on master |
| Abandoned before September's model changes | 2 | srs-rust 991-render-dedupe (srs-rust#991 closed); muDemocracy.org doc-layer (86 changed files, 2026-09-22, revision 7 package) |

### Rescue or decide first

| Worktree | What is there | Recommended act |
| --- | --- | --- |
| srs `.wt/srs/953-rfc052-door3` | 9 uncommitted files: RFC-052 Revision 5, "Door 3 amendment, owner rulings of 2026-10-23", for open srs#953. Last edit 16:35 today | In flight. Make sure it ends as a PR today; nothing protects it if the session dies |
| srs-web `srs-web-wt-ux-lenses` | 5 commits never pushed: lens POC rounds 1-3 (Collection / Focus / Context panes) and "plan: programme integration path for the lens work", 2026-10-09 | Push the branch and file a parked issue; this is design work that exists nowhere else |
| srs-programme `comment-responses-decision` | Commit 9d0d116 "Decision ff946eb1: drop the no-threading clause", made after PR #190 merged, never landed. ff946eb1 was ratified 2026-10-22 as "conversation stays flat" | Owner check: did the ratified text keep the clause you wanted dropped? |
| srs-programme `session-202610211017` | Uncommitted minute of a 2026-10-21 session (comment and ratify on the holons decision 05c3ddcb) | Discard: the session was re-held 2026-10-22 (PR #199). Lesson in the process section |
| srs-programme `clerk-dogfood` | Uncommitted ratification-session record and decision edit, 2026-10-10 | Discard: superseded by the session tooling |
| srs-programme `queue-report` | Untracked `scripts/queue.mjs` and its test, 2026-10-10 | Discard: queue reporting moved to clerk (srs-programme PRs #71, #75) |
| srs-programme `50-handbook-watcher` | PR #114 closed unmerged: handbook-watcher agent, SP-67/68 remedy | Discard: the problems landed by another route; confirm the watcher is not wanted |
| clerk `63-precedent-is-local` | Plan commit for open clerk#63, no PR, 2026-10-12 | Push it to the issue as a draft PR, or park clerk#63 |
| srs-web `generic-srs-workspace` | Pushed, no PR, 2026-09-26 | Close: overtaken by the control room and lens work |
| semanticops.com `phase-3-content`, `wt-issue-forms` | 5 commits pushed, no PR, 2026-10-06/08; the site has had no commit since 2026-10-07 | Decide whether semanticops.com is parked; if so, say so on its epic |
| muDemocracy.org `explainer-0.5.0` (old location) | One commit beside merged PR #339 | Discard: `.wt/muDemocracy.org/309-explainer-0.5.0` carries the merged version |
| muDemocracy.org `309-explainer-0.5.0`, `pr-202` | Both modify `content/review/agent-amendments.md` | Check whether those agent amendments should be committed |

### Why they pile up

- `scripts/wt` scans a fixed repo list that omits clerk, srs-context and srs-lab, which hold 74 of the 140 worktrees. `wt prune` never sees them.
- Its squash-merge check needs the PR head to equal local HEAD, so any local fix-up after merge keeps a worktree forever.
- The dream cycle and the review and merge-queue routines create worktrees and never remove them.
- 31 worktrees sit outside `~/dev/.wt` (`semanticops/.worktrees`, `*-worktrees`, `srs-web-wt-*`, `srs-wt-rfc855`, `semanticops.com-wt-issue-forms`, `muDemocracy.org-worktrees`), from before `wt` existed.

## Lost and half-done

Agents deliver machinery within days: the desk, the status set, `clerk serve`, the close gates, and the RFC-052 rollout across eight repos. What stalls is anything that needs an owner act or a standing cadence. Those remedies are re-proposed in the next plan and dropped again. One remedy, affirming the pilot domains, appears in five plans written in seven days, though you had done it on 10-16; its tracking issues never noticed. This section covers 31 in-scope plan files from `~/.claude/plans` since 10-01, all checked against master and GitHub. The plan files are local and untracked, so the plans themselves are the easiest thing to lose (clerk#8).

### Proposed again and again, never delivered

| Remedy | Proposed in | State today |
| --- | --- | --- |
| You affirm domains, personas-in-domain and clusters for the two pilot domains | 5 plans: temporal-tome, quirky-gosling, atomic-kahan, soft-piglet, two-domains | Done 10-16 (all 7 domains by 10-20), but #107 and #110 name the suggestion ids and were never closed, so the desk kept asking. Left: epic 5746dee3 answers no affirmed problem; 4 problems have no affirmed persona-in-domain |
| One owner surface | quirky-gosling (srs-web#562, #544, #560), atomic-kahan (desk) | Three surfaces built (desk issue #35, srs-lab control room, `clerk serve`); the srs-web ones are still open. More surfaces now, not fewer |
| Triage `needs-input` | atomic-kahan, soft-piglet | Grew from 12 to 19; the same five issues from July and August are oldest |
| Receive reports to unpause groups | atomic-kahan, soft-piglet | WG Third-party ready is paused again. No plan changed the rule itself (C12) |
| Weekly audit and indicators I1-I4 | temporal-tome, quirky-gosling, two-domains, soft-piglet | srs-programme#38 and clerk#25 open, so no plan's success measure has ever been taken |
| Put plans into managed state | witty-origami Phase 5 | clerk#8 untouched since 10-11 |
| Stop ungated PRs | atomic-kahan, soft-piglet | 5 on 10-15, 5 on 10-16, 8 "unclassified" on today's desk (C4) |
| Per-stage flow view on the desk | soft-piglet step 7 | Not built |

### Plans half done and stalled

| Plan (date) | Done | Stalled |
| --- | --- | --- |
| Control room as `clerk serve` (10-20) | Phases 0-1: contract, OpenAPI, serve, integration | Phase 2 rounds and Phase 3 method acts are still in `workbench.mjs`; srs-rust#1415 and #1416 open |
| Judge PR decisions like affirmations (10-20) | Partly in decision 949ae72d (proposed) | `judgement()` for decisions, judgement-style PR view |
| Axes as records (10-22) | Built | Blocked on ratifying cdd272a3; clerk#135, srs-lab#18 and srs-context#58 open; the handbook already describes axes as live |
| Get the groups moving (10-16) | Flow at a glance, `holds-domain`, topup by lane | Domain walks, parked sweep, desk Flow section; both groups merged 0 of 10 this cycle |
| Two domains end to end (10-11) | Method package, principle-2 gate, I1 command | Affirmations done 10-16. Left: the epic link, 4 held-by links, the D5 flip; axes (0 of 3 per domain) wait on ratifying cdd272a3 |
| Explainer packages (10-08) | Explainer 0.5 shipped | SRS package and exporter (muDemocracy#318), Guide 1.1 pilot (#309, #319-#328); idle since 10-12 |
| Site menu in muSrs (10-22) | Nothing | Not started, no issue filed |
| RFC-051 and RFC-052 delivery (10-22) | RFC-052 everywhere; RFC-051 PRs 1-3 | On track: #1448-#1450, release #1421, srs#949 |

### Claimed, drafted or opened, then left

- **Stuck claims:**
  - clerk#25, "in progress" since 10-17 from a stopped run.
  - srs-rust#1264, srs-web#513 and srs-programme#38, claims that stopped before code on 10-22/23.
- **Branch-only drafts:**
  - clerk `63-precedent-is-local`, a plan for clerk#63, which is P1 and ready.
  - srs-programme `docs/36-design-principles-draft`, 118 lines for semanticops.com#36.
  - srs-web `poc/ux-lenses`, never pushed.
- **PRs that will stall:**
  - Merge conflicts: clerk#157 and #135, srs-programme#210 and #211. Its issue clerk#151 is already closed, so #210 is probably superseded.
  - Failing CI with no new commit: srs-web#607 (perhaps redundant) and srs-vscode#145.
- **Epics with every sub-issue closed but still open:** srs#100 and srs-rust#236.
- **semanticops.com:** P0 epic #38 and P1 epic #29 have not moved since 10-08/10-20, and the repo has had no commit since 10-07.
- **Housekeeping:** the 189 issue-numbered plan files in srs-rust and srs-web `plans/` all point to closed issues and can be archived.

## Real use this week

Both editors did real work this week. When you named a problem live, the loop closed in hours. When agents broke something, the reports fell outside every queue. Real use also exposed a gap that spec dogfooding hides: in the spec repo, git, gates and PRs supply diff, undo and validation for free. In a user's editor, nothing does. (Structure only below; no contract content was read.)

### Essay editor on a client essay (private)

- **The file is at risk.** the client essay file (507 KB, last written 10-21) is untracked in the client's repository. It has no history and no restore point.
- **What it holds:** 60 records (20 paragraphs, 29 comments, 8 sources), 49 relations and 8 attached source documents. Three agents worked on it at once through the relay: two Claude Code sessions and ChatGPT web.
- **The conversation went one way.** All 29 comments are agent-written; there are no human comment records. Your verdicts went to chat and GitHub, so the enrich brief's "answer pending human comments" loop never ran.
- **Writes bypassed the guard.** 14 of the 20 paragraphs have no `createdBy`. This fits an agent writing the file outside a live session (srs-web#587); that cause is inferred.
- **Validate passed on a broken essay.** The essay stopped rendering while `repo validate` stayed clean, and you had to unzip it and run the CLI by hand. The engine cause, srs-rust#1423, is still open. A package fix, muDemocracy.org#365, merged.
- **The brief did not fit.** `enrich.md` assumes muSrs data (an existing problem and claim pool). The client essay had none, and agents could not create it (srs-web#590).

| Problem from real use | Path | State |
| --- | --- | --- |
| SP-95 paste arrives as one paragraph | affirmed, then srs-web#586, #597 | Shipped 10-21, same day |
| SP-96 no thumbs up or down on a comment | srs-web#591, #592; decision ff946eb1 ratified 10-22 | Blocked on srs-programme#189 |
| SP-21 no "what changed" view | srs-web#587 | Unlabelled, in no queue |
| SP-06 a broken essay opens silently | srs-web#588 | Unlabelled, in no queue |
| SP-89 cannot undo an agent's changes | srs-web#589 | Unlabelled, in no queue |
| SP-85 packages cannot be installed from the editor | srs-web#590 | Unlabelled, in no queue |

The four bottom rows are the "agent made a mess" class. They matter more for real use than comment kinds do, yet the WG Agent-supported editor report for 10-21 says its "queue is dry".

### muDemocracy.org site editor

- **It is now the editor.** The prototype (#350, 10-19) converged on srs-web's shared `$lib/document` and `$lib/agent-library` (srs-web#601-#605). `/`, `/about` and `/decision-recording` now render from muSrs, and EmDash is gone (#382-#385). An agent's re-render waits while you type (#374).
- **CI missed a breakage.** The site editor follows srs-web's bindings pin, not the CLI pin, and CI does not run its tests. 13 of 18 tests failed at revision 10 while CI stayed green.
- **Smaller friction:** relation reads omit `createdBy` (srs-rust#1411); global class-name collisions (srs-web#577); a stale input type (srs-web#578); record duplication (srs-web#606, whose PR #607 fails CI and may be redundant after muDemocracy.org#379); 6 validate warnings (#386).

### Where the feedback is lost

- **The client essay appears in no programme or srs-context record.** No finding or report says "first real use; this is what broke". The evidence is spread across issue prose and an unversioned zip.
- **The problem index is split.** `semanticops/problem-index` has not changed since May and is not a git repo. The live problems are `srs-programme/records/tier-2/problem-*`, where SP-73 to SP-97 each have two records: the suggestion and your affirmed fork, which is by design.

## How work actually moves, and why you end up merging

Deciding is not the bottleneck: srs-programme holds 83 ratified decisions, and only 5 are proposed. The bottleneck is that every decision becomes a PR, and every non-group PR stops at you. Since 10-09, about 78 merged PRs carried `gate:owner-merge` and up to 111 more had no gate label. No surface lets you merge in bulk, and none lets an act of yours trigger the merge.

&#91;embedded content: from clerk code, srs-lab/control-room and the /session command, read 2026-10-23\]

GitHub is the only surface where every act can be finished, so that is where you end up.

### Why PRs reach you

1. **The rule tells agents to hand PRs to you.** `clerk/CLAUDE.md` line 17 says "the owner reviews and merges", while `/ship` says a clear, Door-1 central PR gets `gate:auto-merge`. In clerk, 74 of 75 merged PRs were owner-merge or unlabelled.
2. **Unlabelled PRs have no default.** `pr-upkeep` lists them under "classify as…", and the desk says "Give it a gate label — agent", but no routine does it. Five PRs are unlabelled today.
3. **An owner-merge PR need not ask anything.** srs-web#608, srs-programme#216 and clerk#157 show "Decision asked: (none stated)". `/ship` requires an `asks` entry, but `pr-check` does not enforce it.
4. **Your own acts come back as PRs.** Each affirmation round in the control room ends in a PR you merge on GitHub (`workbench.mjs:139`). srs-lab is not in `governed_repos`, so all 12 of its merges were manual.
5. **Answers do not act.** An `srs:answer` posted from the control room is only parsed by `pr-check`; upkeep does not merge on it.
6. **The session hides merges.** `/session` runs the agenda without `--scan`, so its Merges list is always empty, and merges are not written into the session minute.

### Why threads get lost

- **Worktrees are invisible.** `scripts/wt` misses 74 of 140 (see the worktrees section), and the desk's Threads list shows epics and PRs, not branches or worktrees.
- **Claims stick.** A stopped agent run leaves `needs-input` and the issue stays "in progress": clerk#25 since 10-17, and srs-rust#1264, srs-web#513 and srs-programme#38 since 10-22/23.
- **Intake was ratified but never built.** D2-D7 are ratified, but no issue has ever carried `intake`, there is no router, and topup does not route (clerk#124). Real-use issues such as srs-web#587-#590 therefore land in no queue.
- **Interrupted sessions leave no trace.** The 10-21 session stopped mid-way and was re-held on 10-22. The partial minute is still uncommitted in a worktree.
- **The handbook lags its own decisions.** The Intake chapter, `pr-decisions.md` and `service.md` call decisions "proposed" that are ratified. Routine schedules disagree between the handbook and `tools.md`, and the watcher that would catch this has no trigger.
- **Copies have drifted.** The root `scripts/wt`, `scripts/session` and `.claude/commands/session.md` differ from clerk's copies.

### What blocks the queue today

- **The routines are stopped.** The cloud canary has failed since 10-23 (`/tmp/clerk` symlink missing), so every routine stops at its preflight.
- **A group is paused.** WG Third-party ready has two unacknowledged reports, and acknowledging them still means a thumbs-up on semanticops.com#31.
- **P0/P1 epics are idle.** Four of the seven roadmap epics live in semanticops.com, which has had no commit since 10-07. P1 epic #29 last moved on 10-08.
- **A ratified rule could add load.** Rule 3b910d90 lets a group operate independently only in a mature domain, and clerk#140 would enforce it. Every domain has 0 of 3 axes placed, so enforcing it now would send every delegated merge back to you.

## Recommendations: the handbook

Eight rules, each stated as the lasting practice so it can be proposed as a decision and then placed in `clerk/docs/handbook.md`. Together they cover two things: what reaches you, and what can never go missing.

| # | Rule to propose | Where in the handbook | Answers |
| --- | --- | --- | --- |
| H1 | **An owner act is the last step of its work.** When you affirm, answer an ask, receive a report or ratify, the system finishes the job, including the merge. You never merge a PR whose only content is your own recorded act (affirmation rounds, session minutes, dream runs). | Flow at a glance, rows 1-4, 11 and 13; Review and merge | Merging on GitHub |
| H2 | **A PR reaches the owner only with a question that only the owner can answer.** An owner-merge PR with no well-formed `asks` is misclassified and goes back to an agent. Every PR carries a gate label from the moment it opens. | Review and merge | Merging on GitHub |
| H3 | **The owner's queue has a limit.** At most N PRs (start with 5) may wait for the owner at once. Above that, agents stop opening owner-gated PRs and route new work through a group. | Review and merge; Groups | Overwhelm |
| H4 | **Every piece of work stays visible until it lands or is let go.** Each worktree, branch and claim belongs to an issue. It ends merged, parked (with a comment on its issue saying where the work is) or discarded. Nothing ends as a dirty directory. | New section: Loose ends | Lost threads |
| H5 | **A held claim surfaces its question.** A run that stops at a question keeps its claim, so the work resumes where it stopped (#715). Its question then appears on the desk and in the next session agenda, with its age. | Claim and build | Stuck claims |
| H6 | **A session either completes or is discarded.** The next session starts by committing or deleting any partial minute. Merges taken in a session are recorded in its minute. | Report, session and ratification | Lost sessions |
| H7 | **Real use is an occasion.** Each real-user session (a client essay, muDemocracy.org) gets a run-report: what was done, which agents, what broke, linked issues. Its issues enter intake with a domain and a group. Agent-damage problems (no undo, no change view, silent breakage) rank above polish. A real user's file is versioned before an agent touches it. | Intake; a new paragraph under Problems | Real-use feedback falling out |
| H8 | **Status comes from records, and process text lives once.** A decision's status in the handbook is read from its `lifecycleState`, never typed. `scripts/wt`, `scripts/session` and the `/session` command have one copy, in clerk; every other copy is a pointer. | Front matter; Tools | Drift |

### Keeping the wider context without drowning

The handbook should also give you a rhythm, so you know where to look and when it is safe not to:

- **Daily, 10 minutes, at the control room desk.** Answer asks; each answer merges. Receive reports. If it is not on the desk, it does not need you, and the desk must make that true by also listing loose ends.
- **Twice a week, a session.** Ratify, set aside, and decide escalations. Merges and acts land in one minute.
- **Weekly, a generated state of the programme**, like this document. It covers what moved toward each ranked objective, the practice-to-product ratio, loose ends, stuck claims and real-use findings. It is a routine's job, not yours.
- **Track one ratio.** This week, process and memory repos took 176 merges and the product took 50. Objective 1, "keep work moving to done", is itself practice work. Watch the ratio so the practice serves the product rather than becoming the product.

## Recommendations: clerk code

Thirteen changes, in the order to build them. The first five are small and together would take most merges off GitHub. Sizes: S is under a day of agent work, M is one to three PRs.

| # | Change | Where | Size | Rule |
| --- | --- | --- | --- | --- |
| C1 | Fix the cloud canary (`/tmp/clerk` symlink); every routine is stopped behind it | the cloud environment setup, `doctor` preflight | S | — |
| C2 | Replace "the owner reviews and merges" with the `/ship` gate rule | `clerk/CLAUDE.md:17` | S | H2 |
| C3 | Add srs-lab to `governed_repos`; affirmation rounds open with `gate:auto-merge` | srs-programme `programme-cfb14770`; `srs-lab/control-room/workbench.mjs` | S | H1 |
| C4 | `pr-check` fails an owner-merge PR with no `asks`, and fails a PR with no gate label; upkeep lists both as "back to agent" | `lib/practice/pr-decisions.mjs`, `lib/practice/upkeep.mjs` | S | H2 |
| C5 | Practice-data PRs (session minutes, dream runs, affirmation rounds, context notes) default to auto-merge when validate is clean | `upkeep.mjs` `routePR` | S | H1 |
| C6 | **An answer merges.** When every blocking ask has an owner `srs:answer`, the choice is not "Do nothing", and the PR is clean and green, upkeep merges it | `upkeep.mjs`, reusing the parser at `pr-decisions.mjs:44-57` | M | H1 |
| C7 | **One `wt`.** Root `scripts/wt`, `scripts/session` and `.claude/commands/session.md` become symlinks to clerk's copies. `WT_REPOS` gains clerk, srs-context and srs-lab, plus a `--json` mode. The squash-merge check compares trees, not head ids | `clerk/scripts/wt`; workspace root | S | H4, H8 |
| C8 | **Routines clean up after themselves.** The dream cycle, merge-queue, review and `/session` remove their worktree once the PR is open or merged | `lib/adapters/session.mjs` `endSession`; dream and review briefs | S | H4 |
| C9 | **A Loose ends lane on the desk.** List unmerged, dirty or unpushed worktrees and branches with no PR, stuck claims and conflicting PRs, each with its age and issue | `lib/practice/desk.mjs`, `api/openapi.json`, the control room desk | M | H4, H5 |
| C10 | **Held questions reach the owner.** The desk and the session agenda list every `needs-input` question with its age. The hold keeps its claim by design (#715), so the fix is visibility, not unclaiming. | `routines/unattended-worker.md`, `wg-builder.md`; `scripts/gh-project.mjs` | S | H5 |
| C11 | **Session acts in the control room.** `POST /api/session` for ratify, set aside, receive and merge; `clerk session --merge`; merges written to the minute; the agenda reads the desk snapshot instead of needing `--scan` | `bin/clerk.mjs:216`, `lib/adapters/session.mjs`, `docs/service.md` | M | H1, H6 |
| C12 | **Receive replaces the thumbs-up.** The pause rule reads `receives` relations, not reactions on #31 | `upkeep.mjs` `pauseState` | M | H1 |
| C13 | **Intake, minimally.** A router routine that labels any issue with an `Answers: SP-` line and no `wg:` label, starting with srs-web#587-#590 (clerk#124) | new `routines/router.md`; topup | M | H7 |

Two things to hold rather than build:

- **clerk#140**, enforcing "independent only in a mature domain", should wait until a plan to place domain axes exists. Today it would send every delegated merge back to you.
- **The SRS Branch Auditor** is cited in four CLAUDE.md files but has no brief or trigger. Write it as C9's routine or delete the references.

## Action checklist

**Today: rescue**

- [ ] Commit the client essay file, or snapshot it somewhere versioned
- [ ] Push `poc/ux-lenses` from `semanticops/srs-web-wt-ux-lenses` and file a parked issue
- [ ] Make sure `.wt/srs/953-rfc052-door3` ends in a PR for srs#953
- [ ] Check whether ff946eb1's ratified text kept the no-threading clause (commit 9d0d116)
- [ ] Commit or discard the `content/review/agent-amendments.md` edits in the two muDemocracy.org worktrees

**This week: clean up**

- [ ] Remove the \~115 safe worktrees listed in the worktrees section
- [ ] Discard the stale partial minutes and drafts: `session-202610211017`, `clerk-dogfood`, `queue-report`
- [ ] Unclaim clerk#25, srs-rust#1264, srs-web#513 and srs-programme#38; close or unassign srs-programme#107 and #110 once they are affirmed
- [ ] Rebase or close clerk#157, #135 and srs-programme#210, #211; decide on srs-web#607 and srs-vscode#145
- [ ] Close epics srs#100 and srs-rust#236
- [ ] Decide whether semanticops.com is active; if not, re-rank its four roadmap epics
- [ ] Retire `semanticops/problem-index` (the paired SP records are suggestion plus affirmed fork; leave them)
- [ ] Write a run-report for the client-essay session and route srs-web#587-#590 and srs-rust#1423 to WG Agent-supported editor

**Session: owner acts**

- [ ] Link epic 5746dee3 to its remedy, re-point the 4 problems' held-by, then close srs-programme#107 and #110
- [ ] Ratify or set aside 949ae72d, c04d8164, cdd272a3, 5d5feb79 and c7fefad9
- [ ] Receive the 3 working-group reports
- [ ] Answer the 5 open exercises
- [ ] Triage the 19 `needs-input` issues: answer, park or close
- [ ] Propose H1-H8 as decisions

**Clerk build order**

- [ ] C1-C5 (small, biggest effect on merge load)
- [ ] C7, C8, C10 (threads stop getting lost)
- [ ] C6, C9, C11, C12 (the control room becomes the place decisions finish)
- [ ] C13 (intake router)
- [ ] A weekly routine that regenerates this report
