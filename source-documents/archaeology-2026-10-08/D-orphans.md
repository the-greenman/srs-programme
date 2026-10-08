# D - Orphans / lost work (read-only audit, 2026-10-08)

Method: 122 remote branches with unique commits across 7 repos (raw data: branches.txt, joined.txt, landed.txt, frac.txt in this dir). PRs joined by head branch. "on_master%" = share of branch-added lines still present in the same file on default branch (crude landed-elsewhere test). 76 of 122 have a MERGED PR (squash leftovers, safe). Auto-delete on merge evidently not active for these.

## 1. Orphan branches (NOPR or only closed PRs), real loss candidates first

| repo | branch | commits | last | subject | PR | issue | landed elsewhere? |
|---|---|---|---|---|---|---|---|
| muDemocracy.org | claude/funny-albattani-00ohej | 1 | 2026-06-27 | markdown-to-guide.mjs reverse ingest (638 lines) | none | #12 OPEN (#11 closed as dup of it) | NO (0%, file absent on main). GENUINE LOSS |
| muDemocracy.org | claude/funny-albattani-4du2id | 1 | 2026-06-27 | guide-editor Phase 1 edit+save (local transport) | none | #2 closed NOT_PLANNED | NO (3%; saver.ts absent). Likely abandoned by design |
| muDemocracy.org | claude/funny-albattani-4qz82y | 3 | 2026-06-27 | guide-editor Phase 2 Dropbox PKCE transport | none | #2 NOT_PLANNED; Dropbox later retired | NO (2%). Intentionally dead |
| muDemocracy.org | claude/funny-albattani-i2w5jw / 7f5ntb / 282upx / plqcg8 | 1-2 | 2026-06-26/27 | rootTypeRefs fix, lockfile syncs | none | srs-rust#158 | rootTypeRefs landed via #108; lockfiles noise |
| muDemocracy.org | claude/funny-albattani-likxl1, mcpnby, tvyn79 | 1-2 | 2026-06-27 | guide seed records, about-block/CC licence | none | #14-#19 (all closed COMPLETED citing these branches) | mostly landed (AboutBlock.astro has CC BY-NC-SA; seed via #32). Residual: print.astro fallback aboutMission text on likxl1 (7fdbb1d) unverified |
| muDemocracy.org | astro-base, feat/7-srs-guide-mapping | 8 / 4 | 2026-06-11 | early Astro scaffold (21k lines) | none / #10 merged | n/a | 85% on main; superseded |
| srs-rust | claude/zen-pascal-cyvr8g | 1 | 2026-06-27 | move render_brief_markdown to srs-cli (+229/-194) | none | #131 (closed COMPLETED 2026-10-08 10:33 by owner after reopen) | NO (master still defines it in blueprint_brief_service.rs). Superseded in intent by OPEN srs-rust#751 (relocate to srs-projection); branch is 54+ commits stale, do not merge |
| srs-rust | claude/zen-pascal-hhn8sa | 1 | 2026-06-26 | ProtocolStage to ProtocolStageEntry From impls | none | #188 (re-closed COMPLETED 2026-10-08 10:34) | payload.rs already has ProtocolStageEntry; From-impl refactor itself not verified landed (27% line match) |
| srs-rust | feat/287-export-decision-bundle, feat/288-...-golden | 1 each | 2026-07-18 | plan docs only | none | #287/#288 | implementation shipped (PR #625, #634); plan docs not landed, harmless |
| srs-rust | feat/461-migration-framework | 1 | 2026-07-11 | plan + ADR-028 migration framework (515 lines) | none | #461 | ADR numbering collided: master ADR-028 is extension-catalog-types. Migration ADR text NOT on master (0%) |
| srs-rust | feat/631-container-slice-export | 1 | 2026-07-27 | plan(631) | none | #631 | implementation landed 08597e2a (#1259); plan doc only |
| srs-rust | feat/434-migrate-identity-wasm-binding | 6 | 2026-07-09 | WASM migrate_identity | none; sibling #473 merged | #434 | 84% landed via #473 |
| srs-rust | feat/1057-store-backed-mcp-application, docs/1057-mcp-streamable-http-profile | 4 / 3 | 2026-09-12 | MCP application + streamable-http profile | none | #1057 closed COMPLETED | landed (application.rs, fixtures test present); 5/5 docs files identical |
| srs-rust | chore/sync-schemas-rfc026 | 1 | 2026-07-21 | schema mirror | none | - | 88%, superseded by later syncs |
| srs-rust | agent/ratified-roadmap-mission | 1 | 2026-08-15 | Ratify the SRS roadmap mission (116 lines) | #848 CLOSED | - | NO (3%); queue superseded by srs-programme roadmap. Low value |
| srs-rust | chore/930-932-937-schema-drift-allowlist | 1 | 2026-09-04 | drift allowlist | #939 CLOSED | #938 | landed as 2e7eea4 rider on PR #928 (issue comment says so) |
| srs-rust | feat/437-cfr-write-boundary, feat/510-render-tier0-note-container, fix/1167, fix/1273 x2, fix/1290, fix/1293 | 1-4 | Jul / Oct 2026 | various fixes | all CLOSED unmerged | #437 #510 #1167 #1273 #1290 #1293 | ALL landed via other commits (4d592479, 04022051, 49d4c174, e085ff22, 46d7b315, 3a605b4c) |
| srs-web | feat/generic-srs-workspace | 1 | 2026-09-26 | generic shell + package editors | none | #322 closed | landed (src/lib/generic/* on main) |
| srs-web | fix/317-readonly-note, fix/325-generic-readonly-note | 1 each | Sep 2026 | read-only Save explanation | #318/#326 CLOSED | #317 #325 | landed (a3e492a, 8f73043) |
| srs-web | claude/relaxed-edison-m8gfs6 | 1 | 2026-06-27 | S8 external_links field on decisions (12 files) | none | - | 27% line match; external_links exists in fixtures only. Possible loss, low confidence |
| srs-web | claude/fix-273-relation-type-count | 1 | 2026-07-24 | e2e relation-type count | #274 CLOSED | #273 closed COMPLETED w/o PR | NO (0%); issue closed via other change? e2e brittle test unverified |
| srs | claude/serene-sagan-bexr2q | 1 | 2026-06-26 | gallery-v2 package data (closes srs#69) | none | #69 closed COMPLETED | gallery-project-v2 exists on master (regenerated via #151); 15% line match due to regeneration, probably landed |
| srs | claude/serene-sagan-53oof0 | 1 | 2026-06-26 | protocol.json schema | none | srs-rust#174 | 47%; schema since reworked |
| srs | docs/design-notes-tier0 | 3 | 2026-07-31 | design decisions as Tier-0 records (180 lines) | #291 CLOSED | RFC-038 fixture | NO (7%). Deliberately closed as concurrency fixture; probably superseded |
| srs | feat/248-federation-usage-docs | 1 | 2026-07-12 | ext:federation CLI usage | #170 CLOSED | srs-rust#248 | moot (federation removed, 0 mentions in usage doc) |
| srs | docs/1220-mcp-read-tool, docs/1228-find-rank-usage | 1 each | 2026-10-04 | usage docs | #882/#884 CLOSED | srs-rust#1220/#1228 | landed (usage doc has --rank, read tool) |
| srs | docs/542-registry-multi-tag, feat/619-attachment-size-bytes, claude/410-scope-rfc016-r1, claude/638-mark-unit-landed | 1 each | Jul-Sep | tiny doc/data edits | none | #542 #619 #410 #638 | 0% line match but usage doc now contains --tag/sizeBytes; probably landed in rewritten form |
| srs | docs/246-..., docs/252-..., docs/463-..., feat/461-..., feat/618-..., srs-purpose-scope, rfc/034-... | 1-2 | Jul 2026 | usage docs, RFC-034 Rev 4, purpose charter | none | various | 89-100% on master; landed |
| srs-vscode | claude/stoic-archimedes-* (5), docs/claude-code-web-setup | 1 each | Jun 2026 | protocol/discovery schema syncs, CLAUDE.md | none | srs-rust#174 | superseded (mirrors resynced since); docs/claude-code-web-setup: srs-vscode CLAUDE.md exists on master |
| srs-vscode | feat/field-type-crud | 4 | 2026-06-03 | field-type CRUD (906 lines) | none | - | 74% on master; likely landed piecemeal |
| srs-vscode | chore/schema-sync-rfc030 | 1 | 2026-07-28 | schema sync | #87 CLOSED | - | landed (94d5456) |
| semanticops.com | chore/issue-forms, fix/wrangler-previews, chore/editor-app-semanticops, feat/phase-3-content | 1-4 | Oct 6-8 | fresh work | none / #10 closed | - | active in worktrees; phase-3-content 97% on main; #10 closed superseded. Fresh, not lost |

## 2. Closed-unmerged PRs with unsuperseded work
Of 59 closed-unmerged PRs (srs 7, srs-rust 31, srs-web 6, srs-vscode 3, semanticops.com 1) all but a handful have been superseded (v2 re-opens, schema-sync bumps replaced by later syncs, WASM #91-96 re-landed as #93/#97/#98, #486/#529/#1281/#1301/#1303/#1306/#1187 re-landed under other PR numbers). Residual possibly-lost:
- srs-rust#871 fix/863-spec-conformance (QW-3: I-66 membership, precedes forks): re-landed as #876 (fix/863-spec-conformance-v2) - superseded.
- srs-rust#197 document_views_for_container resolver (#179): function exists in validation.rs - superseded.
- srs-rust#184 Deserialize ProtocolStage + `protocol create`: `protocol create` alias landed (#177). Core deserialize part unverified.
- srs-rust#41 heterogeneous document rendering (Jun 2026): render rework since; unverified, likely obsolete.
- srs-rust#30/#63 (repo create ID generation / uuid audit): later work (#1151 etc.) covers.
- srs#110 RFC-014 Import Tracking (closed 07-03): RFC-014 reworked/landed other way.
- srs-web#12 Vite scaffold, #171 e2e CI workflow: e2e CI exists on main (#193), superseded.
- srs-web#414 pin bump: routine.
No clear unsuperseded high-value PR found.

## 3. Stalled open PRs (>14 days)
- muDemocracy.org#202 fix/200-affirm "Owner-run claim affirmation mechanism" (opened 2026-09-22, 16 d)
- muDemocracy.org#201 fix/200-provenance "Change-provenance guard" (2026-09-22, 16 d). Both have local worktrees (fix-affirm, fix-provenance, clean apart from node_modules). Owner-merge items per memory.
All other 9 open PRs were opened 2026-10-08.

## 4. Local-only work in worktrees (109 worktrees surveyed, wts.txt / wt-state.txt)
Uncommitted, NOT build noise:
- Local-only, uncommitted work on the owner's machine (details withheld from this public copy; reported to the owner privately).
- srs-vscode-worktrees/{110,ci-workflow,mirror-342,331-license}: dirty only in tracked build output (dist/, dist-test/): noise, but dist is tracked in git (hygiene finding).
- muDemocracy cyc-* stewardship worktrees (8), mudem-cards etc.: only untracked node_modules.
Unpushed commits: every worktree with commits absent from any remote (semanticops.com phase-3-design 6, readme-align 1, try-cors 1; srs-rust 1152-package-upgrade 4; srs-web 331-many-documents 2, feat-380-389 3, wt-532 1; muDemocracy mig-rev8 2) corresponds to a squash-MERGED PR, and the content is on main (verified #1269, #390, #379, #535). No true unpushed-only commits found. Worktree branches with unmerged commits and no merged PR (editor-app-semanticops, phase-3-content, issue-forms, sox-previews, 317/325 readonly, generic-srs-workspace) were all checked above: fresh or landed.
Caveat: ~17 worktrees outside the 7 repos' own dirs (.worktrees/*) were attributed to srs vs srs-rust heuristically.

## 5. False closes (issues closed COMPLETED, no closing PR, since 2026-06-01: 218 candidates; auto-scan of last 3 comments)
Confirmed:
- muDemocracy.org#11 "markdown-to-guide.mjs" closed COMPLETED 2026-07-16 as dup of #12; comment itself notes #12 NOT done, script exists only on unmerged branch claude/funny-albattani-00ohej. #12 still OPEN (correct tracking).
- muDemocracy.org#14,#15,#16,#17,#18,#19 (guides footer/about/CC licence/guide number/category), closed 2026-06-27 COMPLETED citing commits on orphan branches claude/funny-albattani-likxl1/282upx. Spot check: CC BY-NC-SA licence present on main (AboutBlock.astro); numbering/date/version/category content not individually verified; print.astro aboutMission text commit 7fdbb1d is branch-only. Likely mostly landed via #32/#34, worth a 10 min check.
- srs-rust#131 and #188: closed COMPLETED 2026-07-22 with no PR (fix only on stranded branches zen-pascal-*); audit reopened; both CLOSED again 2026-10-08 10:33/10:34 by owner. #131: master STILL defines render_brief_markdown in srs-repository (work tracked by OPEN srs-rust#751 to srs-projection). #188: ProtocolStageEntry exists in payload.rs but the From-impl refactor not confirmed. Closure today is a re-close, treat as deliberate, but #188's content has no home.
- srs-rust#938 closed COMPLETED, PR #939 closed unmerged: fix actually landed as 2e7eea4 rider on #928. Fine.
- srs-web#273 closed COMPLETED, PR #274 (e2e relation-type count) closed unmerged: fix not found on main (0% line match); check whether e2e test still brittle.
- srs-rust#287 closed COMPLETED, bundle shipped via PR #625, only plan doc orphaned: fine.
Not confirmed lost: the remaining ~190 candidates without branch/PR references; 31 contain the word "branch"/"worktree" but were not individually inspected (list: srs #55 #59 #95 #239 #250 #251 #258 #259 #272 #701; srs-rust #14 #174 #257 #767-770 #783 #824 #852 #864 #887 #892 #993 #1041; srs-web #155 #156; muDemocracy #4 #5).
Known-pattern items (muSrs client-empty bugs branches 2026-07-21): no corresponding unmerged remote branches remain, so nothing found now.

## Top-line takeaways
1. Surprisingly little genuine loss remains; most surviving branches are squash-merge leftovers.
2. True orphans: markdown-to-guide.mjs (muDemocracy#12), render_brief_markdown move (srs-rust#131/#751, stale), ADR-028 migration-framework plan, srs-web S8 external_links.
3. Highest real data-loss risk is local-only, uncommitted work on the owner's machine (details withheld from this public copy; reported to the owner privately).
