# Boundaries, compasses and working groups: proposal

Draft for owner review, 2026-10-09. Nothing here is written to any repository.
"Evidenced" means a ruling, ADR or owner rule already decides it, and the source is cited.
"Proposed" means it is my inference, and you decide it.

The chain for each boundary is: purpose, then three or more tensions, then this-over-that leanings with an "unless" clause, then the layers that must stay apart. Together these make the boundary's compass. A working group is a boundary that has a mandate.

---

## 1. Model: map onto what already exists

### 1a. What already exists (and the overlap)

| Package | Constructs that matter here | Source |
|---|---|---|
| `com.mudemocracy.governance` 1.1.0 (id `1cd9622e`, **additive-only**) | `role` (role_holder, authority, boundary, source_of_authority, revisit_when), `article` (a durable rule or standing commitment, amendment_rule, protected_status), `decision`, `decision_log` header, `exercise`, relation `delegates`, governance lifecycle draft → proposed → ratified → superseded/closed, compositions `decision-log` and `governance-document` | muSrs/packages/governance; memory project_governance_epic_15 |
| `com.mudemocracy.stewardship` 0.1.0 (id `b64c147f`) | `agent` (brief), `standing-job` (done_when, trigger, size), `run-report` (chose, rationale, figures, landed_as), relations `authorised-by` (job/agent → role) and `authored-by` | muSrs/packages/stewardship |
| `com.mudemocracy.argument` 1.3.0 (id `126eeba4`, already depends on governance) | `boundary` (purpose, inside, outside, authority_basis, revision_condition), relation `holds-tension` (boundary → tension, no endpoint type constraint), relation `narrows` (child boundary → parent), `tension` (pole_a/pole_b as **text fields**) | muSrs/packages/argument |
| `com.semanticops.method` (srs-programme/packages/method) | `domain` (purpose, in_scope, out_of_scope), `tension` plus `pole` **records** (looks_like, shadow), `principle` (statement, **boundary_clause**, context, source_ref), relations `governs` (principle → tension), `leans-toward` (→ pole), `extends` (principle → principle), plus its own `agent` and `archetype` | srs-programme; 5 domains, 9 tensions, 18 poles, 6 principles |
| core `purpose` | "SemanticOps: tooling for meaning" (`90dfe53f`, in the owner's own words) | srs-programme records/tier-2/purpose-90dfe53f.json |

Overlap, which one-way-per-goal says to collapse:
- **Boundary.** There are four things called a boundary: `method/domain`, `argument/boundary`, `governance/role.boundary` (a text field) and `programme/boundary` (the frozen v12 release lines).
- **Tension.** There are two shapes. `method/tension` has pole records. `argument/tension` keeps its poles as text fields.
- **Agent.** There are two types: `method/agent` and `stewardship/agent`.

### 1b. Charter element → construct

| Charter element | Construct | New? |
|---|---|---|
| Boundary / working-group identity and purpose | `argument/boundary` record (purpose, inside, outside, authority_basis, revision_condition) | existing |
| Root purpose | The SemanticOps boundary is `derived-from` the purpose record `90dfe53f`. The owner's verbatim text keeps its one home. | existing |
| Nesting (systems in systems) | `argument/narrows` (child → parent). A child inherits every ancestor's tensions and principles by walking this relation. Nothing is copied. | existing |
| Core tensions | `argument/holds-tension` (boundary → `method/tension`). The poles are `method/pole` records, linked by `contains` as today. | existing |
| Leanings ("policies to uphold") | `method/principle` `governs` tension, plus `leans-toward` a pole. `boundary_clause` is already required, and "None ratified yet: to be stated" is the honest blank. | existing |
| Which boundary a principle belongs to | `contains` boundary → principle | existing relation (see D4) |
| Specialising a parent's leaning | `method/extends` (child principle → parent principle) | existing |
| Layers that must stay separate | One `governance/article` per boundary, titled "Layers". It names the layers and the one separation rule. | existing (see D5) |
| Standing orders | `governance/article` (amendment_rule says who may change them) | existing |
| Delegation order (powers) | `governance/role` for the group. `authority` = what it decides itself. `boundary` = what it must escalate. `source_of_authority` = the parent. The parent's role or article `delegates` → the group's role. | existing |
| Members, and the convener (the convener role) | `stewardship/agent` `authorised-by` the group role. One agent is the Steward (convener and liaison). | existing |
| Tasks | `stewardship/standing-job` `authorised-by` the group role. One-off jobs close when done_when holds. | existing |
| Own minutes (decision log) | A `decision_log` header plus `governance/decision` records in the group's container, rendered by the existing `decision-log` composition. Each decision `evidences` the article or principle it was made under (the gallery precedent). | existing |
| Escalation | One `governance/decision` left in state **proposed**, carrying context, alternatives and the compass entries it touches. | existing |
| Report back | `stewardship/run-report` per run. The cycle report is a run-report by the Steward in the format in 1e. | existing |
| Tasks vs decisions (owner rule, LTH Works) | A task is an issue or PR with no record. A decision closes off future options and gets a `decision` record. | none |

**Result: no new types and no new relation types.** The only thing added is the `packageDependencies` in 1c.

### 1c. Consume, don't clone

srs-programme declares `packageDependencies` (RFC-044) on three packages:
- governance (`1cd9622e`, ≥1.1.0);
- stewardship (`b64c147f`, 0.1.x, exact minor band while below 1.0);
- argument (`126eeba4`, ≥1.3.0).

It installs them by bundle (`.srspkg`, RFC-003), so the same UUIDs are in both places. muDemocracy stays the source, and srs-programme never edits a copy (the governance package is additive-only). The `package_dependency_set` MCP tool now exists, so srs-rust#1168 may already be closed. Verify that before use.

The `method` package then loses its own boundary and agent constructs (D2, D3). Nothing downstream reads them yet, so this is cheap now.

### 1d. Delegation order → merge rights

- **Within the mandate** (role.authority): the group decides and the PR carries `gate:auto-merge`. `pr-upkeep.yml` already merges green, gated PRs hourly. A decision that removes options also gets a `ratified` decision record in the group's log, approved by the group's quorum (its "own minutes").
- **Beyond the mandate** (role.boundary): the group opens **one** escalation, a `proposed` decision with its context. Any affected PRs carry `gate:owner-merge` and link to that decision. The owner rules on the decision, not on the PRs. A ratified decision then lets the PRs merge.
- **The owner reviews** the cycle report and the decision log, not individual PRs. Spot checks remain the owner's right.
- **The repository's own gates still bind.** In srs that means the three doors: a group can never auto-merge Door 2/3 or complex-mode work, whatever its mandate says. A mandate can narrow a parent's merge rights but never widen them.

### 1e. Standard formats

**Problem statement.** Every issue and every escalation opens with this. It follows a standard charter template.
```
Problem: <one factual sentence: what is happening, with evidence link>
Why it matters: <who or what is harmed; the tension or principle it touches>
Action needed: <decide | approve | inform>, and what exactly
Urgency: <by date or event, and what happens if it waits>
Answers: SP-nn  (or: No affirmed problem yet: ...)
```

**Group report.** One run-report per cycle, posted before the owner's review day. Plain words, the same headings every time, and nothing in it the owner needs to open a PR to understand.
```
1. Decisions for you (escalations): each in the problem-statement format, with a link to the proposed decision record
2. Decided within mandate: one line each, linked to the decision log
3. Done: tasks closed (count + links), PRs merged
4. Stuck or lost: claims released, red gates, anything not finished and why
5. Compass notes: any leaning that strained, any contradiction found
6. Next cycle: what the group will take on
Figures: queue size in/out, PRs merged, escalations, time to merge
```

### 1f. How the charter prevents the five blocks to teamwork

| Block | Prevented by |
|---|---|
| Unclear objectives and responsibilities | Boundary purpose, inside and outside; the role's authority; standing-jobs listing who does what |
| Unclear definitions of problems | The problem-statement format is required on every issue and escalation; `Answers: SP-nn` |
| Lack of co-operation | Quorum: a decision needs a second actor (a reviewer agent with a different session actor, `createdBy`). The Steward convenes and chases. |
| Inappropriate consultative processes | The delegation order says up front what escalates. The cycle timetable is fixed. Escalations are `proposed`, never pre-decided: work beyond the mandate waits for the ruling and is not merged first. |
| Inappropriate information | The standard report and the escalation format; the report is posted before review day; plain words; links in place of pasted text |

### 1g. Decisions to walk one by one

- **D1. Which type is the boundary?** Recommended: `argument/boundary`. It already has `narrows`, `holds-tension` and `authority_basis`, and it predates `method/domain`. The 5 `method/domain` records are re-made as boundaries (fork, `derived-from`), the 9 `contains` domain → tension edges become `holds-tension`, and `domain` retires.
- **D2. Which tension shape?** Recommended: keep `method/tension` with pole records. A leaning has to point at a pole, and that needs a record (structured over serialised). `argument/tension` keeps working for arguments, but compasses use the method shape. This leaves a sanctioned twin until the shapes converge, so it is an open contradiction (C1), not a solution.
- **D3. Which agent type?** Recommended: `stewardship/agent`, retiring `method/agent` and `method/archetype` (8 `instantiates` edges move over or retire).
- **D4. How is a principle scoped to its boundary?** Recommended: `contains` boundary → principle. The alternative is the free-text `context` field, which is serialised and not checkable.
- **D5. How are layers stored?** Recommended: one "Layers" article per boundary for now. Add a `layer` type only when a check needs to read layers (YAGNI).
- **D6. Contradiction check.** Recommended: an srs-programme CI gate, not a schema rule. A child principle that governs an inherited tension and leans toward the other pole without `extends` fails the gate. This is a governance-level rule (two levels of rules).
- **D7. Quorum.** Recommended: two distinct actors (a builder and a reviewer, with different `SRS_ACTOR`s) plus green gates.
- **D8. Mandate ceiling.** Recommended: a mandate never exceeds the repo's own merge rules (doors in srs; ADR-048 in srs-rust).
- **D9. First pilot group.** Recommended: #31. See section 5.

---

## 2. Boundary map

```
SemanticOps                                   (root; purpose 90dfe53f)
├── SRS standard          srs                 own compass (exists: decision-compass.md)
├── SRS implementation    srs-rust            own (ADR-048 is its seed)
├── Web editor            srs-web             own (21 ADRs, live UX decisions)
│   └── srs-vscode        inherits srs-web's client rules + srs-rust's; no own decisions now (parity catch-up only)
├── Agent memory          srs-context         small own (has its own value decision)
├── Public site           semanticops.com     own (dense rule set in CLAUDE.md)
└── Programme             srs-programme       own (how work is run; hosts the working groups)
muDemocracy: a sibling with its own goals (first funder), not a child. It supplies the governance packages.
```

Existing method domains: "Semantic records" = SRS standard + implementation. "Agent memory" = srs-context. "Stance", "Collaborative writing" and "Group meaning ownership" are lenses or muDemocracy concerns, not project boundaries. Leave them as they are.

---

## 3. Boundaries

### 3.1 SemanticOps (root)

**Purpose.** Tooling for meaning: helping people share their assumptions with each other, and with AI, so they can see where they differ and where to focus. SRS is the means. Out of scope: deciding for anyone, workflow or permission engines, hosting people's data (the SRS charter's out-of-scope list).

**Tensions and leanings.**

| Tension | Leaning, unless | Status | Where it bit |
|---|---|---|---|
| Depth ↔ overload | **Layered depth over everything at once**, unless the reader must act on the whole (a contract or a ruling), then state it in full | evidenced: SRS charter "layered and drillable" (srs/source-documents/spec/srs-purpose-and-scope.md); compass "minimal pointer surface" | spec prose 39% longer than CommonMark with no examples (srs#567-569) |
| Human judgement ↔ agent throughput | **Human layer over agent suggestion**, unless the work is inside a delegated mandate, then agents act and merge | evidenced: srs-programme CLAUDE.md (Affirmed has priority); semanticops.com "AI never decides or ratifies"; owner 2026-10-09 (mandates) | the owner-merge PR flood, 2026-10-09 |
| Generic mechanism ↔ built-in policy | **Mechanism over policy**: the tool is honest about each operation, and governed corpora adopt policy in their own records, unless the rule can be declared and checked by any implementation (the level test), then it is standard | evidenced: rfc-decision-1e7c0c8e, c20fcff8; owner "two levels of rules" 2026-09-10 | #710: a repo retirement policy read as a tool rule |
| Reviewable ↔ fast | **Reviewable units over throughput**, unless a compass already settles the decision, then it flows without per-item review | evidenced: owner 2026-10-09 ("cannot approve PRs I cannot test or understand") | 48 lost threads (archaeology 2026-10-08) |

**Layers (must stay apart).** Purpose and governance (why, who decides) → standard (srs) → implementation (srs-rust) → surfaces (srs-web, srs-vscode, semanticops.com). Across all of them, the human layer is separate from the agent layer.
Rule: **rulings flow down, never up.** A lower layer stands alone. An upper layer cites the one below and never restates it. This generalises compass rules 2 and 5 and ADR-048 rule 1.

**Inherits.** Nothing (root). **Possibly contradicts.** C2, C3 (section 4).

### 3.2 SRS standard (srs)

**Purpose.** Transfer a complex unit of knowledge with its meaning intact, layered and drillable, without encoding who is in charge. Out of scope: org charts, workflow, UI, storage, transport, making decisions (SRS charter §6).

**Tensions and leanings.** All **evidenced**: the six compass axes, verbatim in `srs/docs/charter/decision-compass.md`, and already recorded as method principles.
- Semantic integrity over practical expression. The unless clause is not ratified yet (blank in principle `0cc8dea4`).
- Evolution over continuity, until the first full public release, when it flips.
- Shared coherence over local autonomy. The unless clause is not ratified yet (`b6acc84a`).
- Office over testimony, unless testimony fills a gap; it is promoted only by verification.
- Reliability over renewal; renewal only as explicit supersession.
- Portability over possession; the exception goes to axis 3–9's explicit-local boundary.

Plus the twelve cell preferences. Two blank unless clauses are open work for the owner.

**Layers.** MEANING / EXPRESSION / OPERATION and the six layer rules (rfc-decision-9ee14517, refined by 0118e938). Already the model for everything below.

**Inherits** the root. **Specialises** "mechanism over policy" into the level test. **Possibly contradicts:** C4, C9.

### 3.3 SRS implementation (srs-rust)

**Purpose.** One implementation of every capability, in the core service, exposed through CLI, WASM and MCP, that a third party can trust to behave as the spec says. Out of scope: making spec rulings, presentation.

| Tension | Leaning, unless | Status | Where it bit |
|---|---|---|---|
| Spec-led ↔ implementation-led | **Spec first over shipping ahead**, unless it is a spike that never ships in a release | rule evidenced (ADR-048 rule 1); clause proposed | srs-rust#1210 shipped package export before RFC-003 was accepted (#1212 conforms it) |
| One mechanism ↔ compatibility | **One way over carrying the old one**, unless it is transition carriage in `extra` with a named collapse issue, or a declared twin with a parity gate | evidenced: ADR-048 rule 3 and worked example (b) | `semanticObjectType`; revisions.json allowlist (#866); federation removed with no shims (#878) |
| Core once ↔ adapter convenience | **Core service over adapter logic** | evidenced: capability-layering.md, ADR-010, ADR-037 | srs-bindings "no duplicated logic" |
| Strict ↔ repairable | **Checked over permissive**, unless an explicit repair operation uses the unchecked catalog | evidenced: ADR-045, ADR-047 | incoherent repos could not be fixed |

**Layers.** srs-core (no I/O) → srs-repository (all logic) → adapters (cli, bindings, mcp-core → mcp) → clients. Rule: semantics live once, in srs-repository. ADR-048 rule 6 (identifier over label) specialises the Identity cell.

**Inherits** the compass's OPERATION plane. **Possibly contradicts:** C5, C11.

### 3.4 Web editor (srs-web)

**Purpose.** Let people open, read and change SRS repositories where they already keep them (local, GitHub, Dropbox, Drive), with agents paired in. Presentation only. Out of scope: SRS semantics, hosting data.

| Tension | Leaning, unless | Status | Where it bit |
|---|---|---|---|
| Thin client ↔ responsive UI | **Engine call over client logic**, unless the call is missing; then file the core gap and orchestrate existing calls only | evidenced: ADR-001; ADR-006 note (srs-web#103) | client-side grouping on message text (srs-web#512) |
| Generic ↔ opinionated | **Generic editor, with opinions as data (views, compositions)**, unless it is the muDemocracy governance app | proposed | CLAUDE.md says "opinionated governance editor"; deploy is generic at app.semanticops.com (C8) |
| Recommended path ↔ every option shown | **Recommended path by default, with alternatives in the ⋯ menu**, unless the user picks a distinction ("none / flat" is first-class) | evidenced: owner rules (secondary actions in menu; boundary-distinction-relationship) | |
| Agent writes ↔ human save | **Human commits over agent persistence**: agent writes stay unsaved until a human saves | evidenced: srs-context component "srs-web MCP relay" | |

**Layers.** Storage adapters → WASM engine → shell and lenses → theming tokens (ADR-019/020). Rule: storage never interprets records; the UI never interprets them outside WASM.
**Review need.** Every PR gets a preview deploy (owner 2026-10-09).
**Possibly contradicts:** C7, C8.

### 3.5 Agent memory (srs-context)

**Purpose.** Long-lived context so an agent starts with the few records it needs, with where each came from. Out of scope: how the agent reasons.

| Tension | Leaning, unless | Status |
|---|---|---|
| Recall ↔ noise | **Fewer, read records over more records**: prune never-read records at review | evidenced: decision "How we judge srs-context's value" |
| Summary ↔ copy | **Pointer to the canonical home over a copy**; the canonical wins | evidenced: decision "Context records point to canonical documents" |
| Project-specific ↔ neutral | **One neutral package for srs-context and the public kit** | evidenced: decision "One context package" |

**Layers.** package (scripts) → context records → skill and hook → bench. **Possibly contradicts:** C4 ("bump its version").

### 3.6 Public site (semanticops.com)

**Purpose.** Explain SemanticOps and SRS to technical professionals: a human site and an agent site from one source. Out of scope: the spec host (srs.semanticops.com), deploying by hand.

| Tension | Leaning, unless | Status |
|---|---|---|
| Creative page ↔ faithful record | **Change the record, never the component**; facts live once in `source/` | evidenced: CLAUDE.md rules 2a and 4 |
| Plain words ↔ lineage vocabulary | **Plain words over borrowed terms**, unless it is a code comment or internal doc | evidenced: muSrs C-174; CLAUDE.md rule 5 |
| Direction ↔ current state | **Say where it is going, never claim the unbuilt as built** | evidenced: rule 5 "never say" list |
| Consistency ↔ one-off pages | **Component and specimen first** | evidenced: rules 1–2 |

**Layers.** source records → projection scripts → generated data → components (styleguide) → pages; tokens in three tiers. Rule: no fact in a page, only in `source/`.
**Possibly contradicts:** C3, C10.

### 3.7 Programme (srs-programme)

**Purpose.** Run SemanticOps work from records: problems → remedies → epics, priority derived from rank, and (new) working groups with mandates. Out of scope: the content of the spec or code.

| Tension | Leaning, unless | Status |
|---|---|---|
| Agent throughput ↔ owner attention | **A delegated mandate over per-PR review**, unless the work is beyond the mandate; then one escalated decision with its context | proposed, from owner 2026-10-09 |
| Suggestion ↔ affirmation | **Affirmed over suggested**, unless the owner explicitly reads suggestions marked "(suggested)" | evidenced: CLAUDE.md; owner 2026-10-09 srs-programme#35 |
| Records ↔ tracker | **Records over the tracker** for priority; execution state stays in GitHub, read and never copied | evidenced: CLAUDE.md (roadmap.mjs is the one writer) |
| Capture all ↔ answer problems | **Answered problems over backlog**: no bulk import of parked issues | evidenced: owner 2026-10-08 |

**Layers.** method (why: problems, tensions) → programme (what: objectives, epics) → tracker (issues, PRs) → routines (agents). Plus human layer over suggestion layer. Rule: priority comes only from records.
**Possibly contradicts:** C2, C3.

---

## 4. Open contradictions

- **C1. Duplicate constructs.** Four "boundary" constructs, two tension shapes and two agent types: method/domain vs argument/boundary vs governance/role.boundary vs programme/boundary; method/tension vs argument/tension; method/agent vs stewardship/agent. Sources: section 1a. Owner rule: one way per goal. Resolve through D1–D3.
- **C2. Affirmed and Suggestions are containers that carry authority.** Membership of a container decides precedence ("consumers read Affirmed only"), but rfc-decision-0750c62f and 0118e938 say a container carries no meaning, and that this is closed. The CLAUDE.md line "precedence is repository governance" may reconcile them: governance policy may read a selection. Rule 3 ("expression never alters meaning") still needs a ruling. Alternative: a ratified lifecycle state on the forked record.
- **C3. Five different merge rules.** srs-programme auto-merges on green. semanticops.com CLAUDE.md and the owner rule "review before PR" say agents push branches only and the owner opens the PR. "Review then auto-merge" applies to technical PRs. The unattended lane makes every PR owner-merge. srs uses doors × mode. The delegation order (1d) is where these should converge, with one rule per repo stated as the group's mandate ceiling.
- **C4. Edit in place vs increment.** The compass Versioning cell is "increment over edit", and srs-context CLAUDE.md says to bump the version. The owner's "pre-publication definitions stay v1" and "version tracks meaning" say to edit in place. Different boundaries may lean differently, but this is not declared anywhere.
- **C5. Spec first vs shipped ahead.** ADR-048 rule 1 (spec first) vs srs-rust#1210 (export shipped before RFC-003 was accepted).
- **C6. Resolved, no action.** Core relation types: srs-rust PR #738 ("local wins") vs the owner's 2026-10-08 rule. Fixed by #1341. Kept here so it is not refiled.
- **C7. srs-web nav order.** srs-web ADR-009 orders nav by `precedes`, but RFC-043 (revision 8) orders it by the root container's entries, and 0750c62f says nav below the root follows the part-of tree. ADR-009 needs a successor at the revision-8 cutover.
- **C8. Generic or governance editor.** srs-web CLAUDE.md says "opinionated governance web editor"; the deploy plan says a generic editor at app.semanticops.com, with governance at app.mudemocracy.org.
- **C9. Stale audit row.** The compass's observability-audit row for 4–10 says attribution machinery is "removed", but RFC-046 `createdBy` is accepted and already carried by srs-programme records. This is a correction, not a refinement (rfc-decision-4431046e).
- **C10. Site purpose out of date.** semanticops.com's purpose record ("SemanticOps builds SRS…") predates the owner's 2026-10-08 purpose ("tooling for meaning"). The rewording is a site PR for the owner.
- **C11. Governance keys break the naming rule.** The governance package uses an unnamespaced `delegates` key and type namespace `governance`. That conflicts with the rule that custom relation types use `namespace/name`, and with "one name". Consuming the package (1c) imports this. Because the package is additive-only, a fix needs muDemocracy's consent.

### Owner rulings on section 4 (2026-10-09)

The meta-ruling: **a rule holds at the boundary that made it.** Several of these "contradictions" lifted a rule out of its boundary.

- **C1. Not a contradiction across boundaries.** "One way per goal" is a rule for *the spec*. It does not hold in the wild, and it does not hold for data or packages, where several versions coexist. The boundary, tension and archetype formations are successive versions: supersede them gradually (`supersedes`), and never retire them in one cut. D1–D3 are amended accordingly: argument/boundary, method/tension and stewardship/agent become the current versions, and the older ones are superseded over time.
- **C2. Rule at the wrong boundary.** "A container carries no meaning" was about the container's *own data*. Adding a root or identity record is what gives a container meaning. A container still defines a group and gives it a boundary, and a group has emergent meaning. Affirmed and Suggestions as layers are fine.
- **C3. Standardise bit by bit.** Merge rules are governance. Converge them gradually through the working groups' delegation orders.
- **C4. Versioning standard soon.** The way the spec has been versioned is a governance recommendation that enables provenance. Write it as a standard (a candidate RFC). The pre-publication "stay at v1" practice is that boundary's own choice.
- **C5. Spec first, always.** Coordination was lost around RFC-003 because implementation went first.
- **C7. Boundary work in progress.** `precedes` is semantic order. A container orders its members within its own boundary (RFC-043). srs-web ADR-009 needs a successor.
- **C8. Resolved.** app.mudemocracy.org becomes the governance editor and app.semanticops.com the generic editor. They share one codebase for as long as possible, and governance can be a default lens. srs-web CLAUDE.md is to say this.
- **C11. We can fix.** Namespace the governance package's `delegates` key and its type namespace.
- C6, C9, C10: no ruling needed (resolved, a correction, and a site rewording).

---

## 5. First working group pilot

**Recommendation: charter semanticops.com#31 ("Third-party ready") first. Charter #33 second.**

- #31's mandate can be checked on every PR: each child executes a ruling that already exists, so "within mandate" = "cites the ruling it executes, no new ruling made" (ADR-048 rule 1; Door 1 in srs).
- #33 builds the gates and merge machinery that every group relies on. A group that sets its own merge rights by editing those gates should not be the first to hold a mandate. Charter it once #31 has tested the pattern.

### Draft charter: "Third-party ready" working group

**Purpose.** A third party who reads the SRS spec gets a tool that behaves as written. The group closes recorded gaps between rulings, schema and the reference implementation. Inside: srs-rust (and srs mirrors) changes that execute an existing ruling. Outside: new rulings, RFCs, client UX.
**Parent.** SRS implementation (`narrows`), which narrows SemanticOps. Answers SP-01, SP-02.

**Standing orders.**
- Members: Steward (convener and liaison), Builder, Reviewer (Challenger archetype), each with its own `SRS_ACTOR`; the owner as the parent role.
- Quorum: Builder plus a different Reviewer, with green gates. The group never self-reviews.
- Cycle: nightly lane runs. The cycle closes Sunday 18:00 UTC and the report is posted before the owner's Monday review.
- Reports to every owner review, using the format in 1e.
- Keeps and approves its own minutes: a decision log in srs-programme (container "WG Third-party ready: decisions", `decision_log` header, `decision-log` composition). Group decisions are ratified by quorum.

**Powers (delegation order).**
- Decides itself, and auto-merges:
  - any change that executes a recorded ruling, RFC or invariant and names it;
  - in mode clear or complicated;
  - within srs-rust plus the mirror syncs that follow;
  - with green gates;
  - at most 10 PRs per cycle (the "budget").
- Escalates, one `proposed` decision each:
  - any change that would make or change a ruling;
  - Door 2 or Door 3;
  - complex mode;
  - a breaking CLI or payload change;
  - a pin bump in another repo;
  - anything that touches gates or merge rules;
  - going over budget.
- The policies it upholds (its "financial standing orders") are the compass of SRS implementation (3.3), which in turn inherits the SRS standard compass. The repo's own merge rules apply in full.

**Tasks (standing-jobs).**
- Triage new divergences from the archaeology (B-decisions, F-drift) into problem-statement issues.
- Execute up to 3 lane issues per night.
- Close each issue only with a merged PR.
- Keep mirrors in sync after each spec release.
- Re-run the divergence diff weekly and report the count.
- Keep the group's Layers article and decision log current.

**Role of the Steward (the convener).** Convenes each cycle, delegates tasks to Builder and Reviewer, keeps the minutes, writes the report, liaises with the owner, and is the only member who opens escalations.

**Done or revisit when.** No open divergence in the diff for two cycles, or the owner changes the mandate.

---

## Owner rulings on D7–D9 (2026-10-09)

- **D7. Quorum:** builder plus reviewer plus green gates. The builder and reviewer must be two distinct agents with different `SRS_ACTOR` ids.
- **D8. A charter can widen the mandate** beyond the repo's default merge rules. The owner's delegation is the authority, and repo rules are the default when there is no charter. Consequence: srs's `pr-classification` CI check today rejects `gate:auto-merge` on Door 2/3 or complex mode. A chartered group acting under a wider delegation needs that check to recognise the charter (cite the delegating decision) rather than the bare door.
- **D9. Pilot:** #31 "Third-party ready" first. #33 is chartered second.
- D1–D3: amended by the C1 ruling (supersede gradually). D4–D6 are settled during the build.
