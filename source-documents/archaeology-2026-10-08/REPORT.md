# What was lost: SemanticOps task archaeology (2026-10-08)

**Method:** six read-only digs ran against origin and GitHub, never against the stale local checkouts:
- **A.** Accepted RFCs.
- **B.** Ratified decisions.
- **C.** Epics and stories.
- **D.** Orphan branches and false closes.
- **E.** Promises of follow-up work in commits, PRs, docs and code.
- **F.** Drift between spec and implementation.

A seventh pass, **R**, checked every unfinished item against the new system: the srs-programme roadmap, Project #6, semanticops.com issues and the 55 problem records. The detail tables are A–F and R in this directory.

**What each standing means:**
- **Orphaned:** no live issue and no problem record. This is the true loss.
- **Named only:** a problem record names it, but its issues are parked and there are **zero remedy records** in srs-programme. Nobody is planning a response.
- **Parked:** it exists only as a parked issue.
- **Active:** it is on a live epic, the roadmap or Project #6.

Of 48 deduplicated threads, 18 are orphaned, 14 are named only, 7 are parked and 4 are active. The other 5 are mixed.

---

## 1. The pattern: how threads got lost

1. **We closed the epic before the work was done.** The self-host epic srs#256 closed on 2026-09-05 with its central promise still open: bootstrap cutover srs#260, authorship flip srs#271, and prose⇄schema check srs#246. The relation-coherence epic srs#171 ratified rules R1–R11 on 2026-07-14, but the enforcement in srs-rust#557, #558, #559 and #566 was never built. Decisions and designs get a "done" moment; enforcement does not.
2. **The spec half lands, the implementation half doesn't.** Decision 4f1e12e5 removed `FixedInstances`, `RelationQuery` and `View.protection` from the spec. All three are still compiled into `srs-core/src/types/view.rs`, which was verified. srs#832 was then closed as not_planned with the Rust side untouched.
3. **Issues are closed COMPLETED while the fix sits on a branch.** All of these were verified:
   - srs-rust#131: `render_brief_markdown` is still at `blueprint_brief_service.rs:168`.
   - srs-web#173: four `Quarantined (#173)` e2e tests are still on main.
   - Others: srs-rust#188, srs#562 (111 of 122 headings left), srs#710 (closed the same day a PR said it stays open), and muDemocracy.org#11 and #14–19.
4. **"Follow-up" with no issue.** About 15 merged PRs promised follow-up work and never filed it. Examples: srs #896 (stale docs/overview), #544, #533, #660; srs-rust #40, #349/#354, #921, #965; srs-vscode #93 (record-update patch semantics); and an untracked `#[ignore]` test at `srs-bindings/tests/compositions.rs:115`.
5. **Implementation runs ahead of the spec, which never catches up.** Several MCP and WASM tools have no spec or RFC home: `record_fork`, `container_copy`, `similar`, `neighbours`, `agent-index`, `tree`, doctor and `package_upgrade`. RFC-003 export and the local-wins change (#738) needed later conformance fixes.
6. **Today's reboot itself closed work.** On 2026-10-08, 66 issues closed and 23 muDemocracy.org stories and epics went to not_planned. Most were legitimate, but see §4 on #27.

## 2. Orphaned: no tracking anywhere (the true loss)

### High

- **Federation "committed return"** (decisions 4f1e12e5 and 5f18603e). srs-rust#235, srs-rust#545 and srs-web#210 are closed as not_planned. srs-rust#683 and srs#871 are parked. All that remains is a `deferred` strategy_contract, with no problem record, objective, date or trigger. Federation was called "core for SRS", yet the new system does not carry it.
- **Local-only work.** Local-only, uncommitted work on the owner's machine (details withheld from this public copy; reported to the owner privately).

### Medium

- **Spec MUSTs with no enforcement.** I-137 (don't delete a referenced type version), I-95/96 (unknown cross-field rule is an error) and I-108 (reject gzip `.srsj`). Only about 20 of 128 invariants are cited anywhere in the code, and no invariant→diagnostic map exists.
- **Generator inversion.** ADR-048 promised a successor issue when #256 closed. None was filed.
- **Checks-as-records fold** (decision 19997e24). srs#490 closed after deleting one script, and `checks.json` is still hand-authored. The compass "Known anomalies" still lists #589, #590 and #591, all of which are closed.
- **Dead Rust constructs:** the `view.rs` items from 4f1e12e5 and `types/revision.rs`.
- **srs-vscode at rev 8.** `containerCommands.ts:158` still sends `rootInstanceIds: []`, which the core rejects, and `guideLoader.ts:118` falls back to `rootInstanceIds[0]`. Both verified.
- **False closes with no live successor:** srs-rust#188, srs-web#173, srs#562 and srs-web#273. srs-rust#131 has a successor, #751, but it is parked.
- **muSrs decisions.** Ratified 49c88628 points at amendments that were never created, and 11 of 14 decisions are stuck in draft.
- **Local-only code and notes:** Local-only, uncommitted work on the owner's machine (details withheld from this public copy; reported to the owner privately).
- **Stale agent docs.** Root CLAUDE.md is outside git, so no PR or issue can fix it. It still says:
  - the RFC-043 migration is pending; #1133 is closed and corpora are at rev 8.
  - "no corpus may carry `createdBy`"; rev 9 shipped via #1171.
  - no command writes packageDependencies; #1168 is merged.
  - the `revisions.json` allowlist is still in place; it's gone.
  - epic #95 Phase 1 is pending; it's closed.
  - srs-bindings and srs-projection are "placeholders"; srs-bindings is 3.5k lines.
  - the spec repo has 264 instances; that count is stale.

  Also stale: `srs-usage.md:696`, the released `SKILL.md` (still Tier 1 and `valueType`), and srs `docs/overview` ("three repositories", `graduatedAt`).

### Low

- RFC status lag: RFC-018 is still Accepted although ext:changelog was removed, RFC-021 says Draft although it is done, and RFC-010 is Draft.
- Allowlists cite closed issues: 70 of 73 reachability exclusions, the coherence allowlist, and the language allowlist (#563).
- Pattern Grid census and the Continuity-flip review have no owner.
- srs-web still uses DocumentView naming in 12 files.
- ADR-047 still says "proposed" although it is implemented.

## 3. Named by a problem but unfunded (parked issues, zero remedies)

These are the large losses. The problem record exists, so they won't vanish, but nothing is moving them.

| Thread | Problem | What's left |
|---|---|---|
| Relation-layer enforcement R1–R11 | SP-02 | srs-rust#557/558/559/566, srs#180 fixture, #181, #287. Rules ratified 12 weeks ago, `enforcement: hard\|advisory` stored but never enforced. |
| Spec/schema/impl drift | SP-01 | srs-rust#1118: `emptyBehavior` spelling makes a valid document unwritable. srs-rust#1100: blueprint cardinality grammar. srs#246: prose⇄schema check. |
| Record-layer clone/diff/reintegrate/merge | SP-34/35/40 | muDemocracy.org#62/#63/#116 and Epic 07 #94 (2/11). RFCs srs#387/#388 never written. Only the package layer of RFC-014 shipped. |
| Package distribution | SP-36 | RFC-045 readme: srs-rust#1164 has zero code, and the bundle reader *refuses* `readme`. RFC-044 Inv 43 still matches by namespace label (#1173), plus #1169, #1213, srs#872/873. RFC-047 is a stalled draft. |
| Retype RFC-024 | SP-11 | Stub srs#178 only. R11 and RFC-022 depend on it. |
| Client re-derived semantics | SP-05/38/46 | srs-vscode#45 is a third copy of the `precedes` chain. srs-web#167 hardcodes lifecycle states. Also #280, #303, #336. |
| Self-host remainder | SP-01/06 | srs#246, #312, #351 are parked. #260 and #271 are active under srs#580 but blocked. |

## 4. Abandoned epics and releases

- **Project #5 releases that shipped but stayed unfinished:** 03 workflow editor (36%), 04 generic editor (51%), 08 (47%), 10 (42%), 12 srs-vscode delivery (18%, the worst) and 13 (38%). Release 02 (Decision Log) reached 95%, but its R2 and R3 walkthroughs were closed not_planned.
- **Largest parked epics:**
  - Epic 04 muDemocracy.org#83: 4/19, with 7 stories never planned.
  - Epic 07 offline editor #94: 2/11.
  - Epic 03 workflow editor #76: 0/8.
  - srs-vscode workstream #118: 5/10.
  - Epic 06 live governance editor #92: 3/8.
  - srs-web#92 container nav: 3/12, pagination never shipped.
  - srs-rust#350 hardening: 51/69, a catch-all.
- **Mid-flight stories:** about 18 parked stories have all or nearly all of their sub-issues done but were never closed: #28, #52, #58, #87, #99, #114, #115, #127 and #131. 28 stories marked `story:unplanned` never got a single sub-issue.
- **Replacement epics:** of the three epics recreated on semanticops.com, one is faithful, one is partial and one is hollow.
  - **#29 (from Epic 17): faithful.** All 10 stories were recreated. muDemocracy.org#247 and #248 (rev-8 stewardship scripts) were stranded, and about 10 loose items still need a story.
  - **#28 (from Epic 18): partial.** Stories #291 and #292 (see what agents know, carry memory) are only bullets; the originals are parked.
  - **#27 (from Epic 13): hollow.** None of stories #126, #127 or #129 were recreated, and the SDD bridge srs#214 is parked. Its roadmap link is srs#580, which is about spec *readability*, not the third-party spec-authoring package that Epic 13 was about.

## 5. Spec ⇄ implementation: why agents keep hitting differences

The schema mirrors are byte-identical, which is good. The drift lives in the other layers.

**Root causes:**
1. The model is defined in four places: spec prose, JSON Schema, Rust `serde` and client TypeScript. CI gates only some pairs: payload golden schemas gate nothing (srs-rust#1258/#1261), and srs-vscode `check-payload-schema-drift` is red on master (#133).
2. The implementation moves first under downstream pressure: RFC-003 export, the #738 local-wins change, the tool surface in §1.5.
3. Tolerant, silent success hides divergence: `ok:true` with nothing persisted (srs-rust#1031, #841), and render order silently changed in build 414 (srs-rust#1132).
4. Clients copied semantics before the core had a surface, and the copies survived after the core caught up.
5. Data-model revisions 4 to 9 landed in about six weeks, and seeds, skills, docs and tests lag each bump. Seed and fixture staleness has recurred: srs-rust#1180, #826, #890.
6. Agents read stale ground truth: an old `~/.cargo/bin/srs`, sibling checkouts, shallow clones, and an MCP server running an old binary. Today the spec repo is at rev 8 while the binary writes rev 9 (RFC-046).

**Notable live divergences:** srs-rust#1118, #1100, #559, #566, #550, #1173 and #1132. Others: the CLI `--text` option versus the MCP `contentMatch` field, `note create` ignoring `containerId`, and `container update` silently replacing membership.

## 6. Suggested next moves (proposals only, nothing done)

1. **Commit or deliberately discard** the local-only work (§2 high). This is the only loss that is unrecoverable.
2. **Give federation a problem record** or explicitly withdraw the "committed return" in a decision. It should not live only as a deferred contract.
3. **Write remedy records** for SP-01, SP-02, SP-34–36 and SP-11. Problems without remedies are how §3 stays parked indefinitely.
4. **Rule for future epic closes:** an epic cannot close with open children unless each one is re-homed by number. A similar check on "closed COMPLETED" would verify a merged PR is linked; the false closes in §1.3 would have failed it.
5. **Fix #27's carry-forward**, or record that the spec-authoring-package scope is dropped.
6. **One sweep issue** for stale docs: root CLAUDE.md (consider moving it into git), srs-usage.md, SKILL.md, docs/overview and the compass anomalies.
7. **An invariant→diagnostic traceability table**, checked in CI. This turns spec-ahead drift from invisible into a red build.
