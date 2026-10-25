# Forming decisions: discoveries

A running record of what we have learned about decisions, how they are formed and what kinds there are. Newest pass last. Nothing here is a ruling: this is an exercise in the handbook's sense, an open discussion that feeds proposals. When something here is ready, it goes to a session as a proposed decision, and this page links to it.

**Owner:** Peter Brownell. **Kept by:** Claude Code sessions, on the owner's instruction. **Started:** 2026-10-22.

## The problem

Decisions need to be formed correctly in order to mean something. A decision has to be recognised for the kind of decision it makes, and then formed to fit that kind. The kinds are not known in advance: we develop the taxonomy through practice, and we cluster before we name.

Two further rulings from the owner, 2026-10-22, that frame everything below:

- **Scope.** A decision is generally scoped to a context. A decision made for one domain does not become global automatically. Different domains hold different priorities.
- **Cluster before naming.** Look for shared properties first, with more than one form of clustering. Name kinds only once clusters hold.

## Sources

| Source | What it gives |
|---|---|
| The owner's 46 comments in srs-programme (`com.semanticops.comments/comment`, 2026-10-08 to 2026-10-22), 24 of them on decisions | the owner's reading of what is and is not a decision |
| clerk `docs/decision-log.md` (2026-10-11, clerk#40) | the four tests, the seven kinds (adopted to test), the first re-read of the log |
| clerk `docs/pr-decisions.md` (proposed) | choice, ruling and escalation; well-formed asks |
| srs `docs/charter/decision-compass.md` | the Pattern Grid, six axes, decision modes |
| 54 srs `rfc-decision` records; 87 srs-programme `decision` records | the corpus |
| srs-context: 07078124, 49b05d8b, 4c7b8a21 (conventions), cc05d4c9 and 04839eed (concepts) | what was already captured |
| greenmans_creation: `obsidian-vault/0-Core/T3.md`, `Three-Axes.md`, `workspace/the-system/T3_formulation.md`, `workspace/muDemocracy/decision-practice-synthesis.md` | T3 theory; an earlier six-type decision taxonomy; the case-law model |

## What the owner's comments say

From the first eleven (2026-10-11), already in clerk `docs/decision-log.md`: a decision is one standing choice that governs later choices. Tasks, applications, the results of ordering, and bundles are not decisions. A statement is timeless. Every decision is reviewable. A technical choice cites its design principle.

From the later comments (2026-10-12 to 2026-10-22):

1. **Find the principle underneath.** "Moment in time" decisions record the task. The decision is the policy the next case would cite: "we build APIs from spec; the spec is the source of truth" (on 46bb7a8c); "the clerk is operational tooling, it needs to be security aware" (on e745e9b2); "experiment first, but the layer rules are strict" (on a1b06725).
2. **Scope a context-bound decision.** "A specific UX decision for the agent assisted editor at this moment in time. It should not be judged as a strict rule" (on ff946eb1).
3. **A broad snapshot sets no precedent.** "Return to this as a set of deeper decisions" (on 05c3ddcb).
4. **An initial ruling may be ratified to keep moving**, then refined, identifying "what layers need to be identified, and what principles apply at each layer" (on 926c059f).
5. **Authority.** Groups must not have overlapping authority (on 9a45c0a1). A higher group may override, never arbitrarily, and gives reasons (on ccd593c3, 9e2c2950).
6. **Principles bend for a time.** "Reliability over renewal ... may actually need to swing the other way for a little" before the third-party milestone (on principle 70955692).
7. **Principles clash.** "An unknown key should not crash a repo. We should probably loosen the fail closed decision" (on exercise 2ac083c0).
8. **A decision is a choice.** "A decision with no options is not a decision" (2026-10-22).

## Discoveries so far

### 1. The kind label is not working as a taxonomy (2026-10-22, re-read of 47)

- `policy` is the catch-all: 24 of the 47 programme decisions since 2026-10-12, and 33 of 58 kinded decisions overall. Read against its own frame ("every X must Y; measured by I"), 8 of the 24 are policies, 8 are about who may act or decide, 2 are gates, 1 is a lean.
- 29 of 87 programme decisions carry no kind; 7 of those came after the kinds were adopted.
- The kind is assigned after the decision is written, if at all, so the form does not fit the kind.
- `decision_kind` is a closed enum, so a misfit has nowhere to go and is forced into `policy`. The misfit, which is the taxonomy's evidence, is lost.
- 6 of 47 are not decisions (applications, a plan, an open question, a task choice, an implementation convention). 5 are bundles.

### 2. Scope is missing from every programme decision (2026-10-22)

- No programme decision links to a domain. Every one sits in the SemanticOps (root) log, so every one reads as global.
- Made local, written global: ff946eb1 (editor), 2800bea0 (Agent memory), 2637af0a (editor group), possibly f58db200.
- Same question, two domains, two answers on purpose: what counts as a recorded ruling for a group's mandate (2637af0a for the editor group; 0b1c25b1 for Third-party ready).
- All 54 srs decisions carry `decision_scope`, and state where they stop ("Does not change rules 1, 2, 3, 5 or 6"). srs scopes by construct and layer; the programme would scope by domain and group. Both are "the context the decision was made in".

### 3. Ten shared properties (2026-10-22, first clustering of 101)

Every decision has each of these, and they vary independently:

1. **Object**: what it governs (representation; placement; change over time; existence; who may act; flow of work; how decisions are made; orientation).
2. **Form**: the grammar of the statement (X is Y; every X must Y; X over Y unless Z; X only once C; G may X; G never X, it does Y; X covers A not B; we work as if X; X removed until T; A lands with B; do this now).
3. **Time**: standing; until a named phase; deferred until a trigger; provisional; one case.
4. **Lineage**: founds an instrument; applies one; refines or corrects; carves an exception; supersedes in part; stands alone.
5. **Scope**: how far it reaches, and whether it says where it stops.
6. **Grounding**: principle; usage evidence; incident; the owner's word; borrowed practice.
7. **Review shape**: counterexample; trigger arrives; phase flips; measure crosses a line; never used (ritual); gamed.
8. **Discretion**: were there legitimate alternatives?
9. **Parts**: single; instrument (many parts, one purpose); bundle (many parts, several purposes).
10. **Layer**: the plane it speaks on.

Findings:

- **Form and object are independent.** "Every X must Y" governs representation, change and decision-making alike. So a kind cannot be one property; a kind is a combination of properties that keeps recurring.
- **The two logs govern different things.** srs: representation and change over time. Programme: authority, flow and orientation (srs has one authority decision, the three doors).
- **Instruments are not bundles.** An instrument (the grid, the layer rules, the doors, choice/ruling/escalation) has many parts serving one purpose and is cited as a whole. A bundle's parts serve different purposes. The "one thing" test needs this distinction.
- **An instrument changes every decision after it.** 17 srs decisions cite no earlier decision; 16 of them were made on or before 2026-08-21, the day the Pattern Grid was ratified. After it, every srs decision but one founds, applies, refines or carves an instrument. The programme is where srs was in July: most decisions stand alone.
- **Some questions get decided twice, in different places.** "What goes in a decision log?" (srs 1e5df0d9: where legitimate alternatives remained; programme a5c769be: what governs later choices; neither cites the other). Data-change landing order (srs 86f49083 as a one-off; programme a8e833f1 as the rule, two months later, in the root programme log rather than the srs log). Some questions should be answered once and cited everywhere; others per domain.
- **Review shape follows the other properties**: representation by counterexample, deferred by trigger, phase-bound by phase, process by measure, instruments by ritual guard.
- **Properties everyone shares tell you nothing.** srs `governing_values`: shared-coherence on 45 of 54. srs `project_phase`: "formation" on all 53 that set it. Same failure as `policy`.

Candidate clusters, where properties coincide (watch, do not name yet):

1. Representation × "X is Y" × counterexample review × construct scope (the srs design core).
2. Who may act × permission or prohibition × domain or group scope (programme; fits the current kinds worst).
3. Change over time × rule or sequence form × phase review.
4. Existence × removed-until-trigger × deferred × trigger review (srs only).
5. Instrument × founds lineage × system scope × ritual-guard review.
6. Orientation × belief or comparative form × until a phase.

Detail: `clusters-2026-10-22.md` and `reread-2026-10-22.md` beside this page.

### 4. Prior taxonomies to compare against

- **The seven kinds** (clerk D2, 2026-10-11): purpose, boundary, premise, preference, policy, design, mandate.
- **The decision modes** (srs 7caca3a1): clear, complicated, complex, chaotic, unresolved. A mode is how a decision is made, not what it is.
- **muDemocracy's working taxonomy** (greenmans_creation `decision-practice-synthesis.md`): deliberation, technical/architecture, resource allocation, strategic direction, governance/process, ethical/values. Its decision flow (tension, options including the null option, criteria, statement with a boundary, consequences, conditions of enough, outstanding issues) matches the owner's later comments closely. Its "case law" model is the precedent the owner asks decisions to set.
- **The kind tags** in the decision compass: reason, default, test, rule.

### 5. T3 clustering: each decision placed on the three stance axes (2026-10-22)

> **Superseded in part** by discoveries 7 and 8, which re-rate lines 1 and 2 on the owner's definitions. Line 3 and the method stand; the line 1 findings below (Action unreadable for data shape) were an artefact of the first rubric.

**Method.** Each of the 101 decisions was given one pole on each T3 stance axis, read within its own boundary (the axes are boundary-relative: concept 04839eed, decision ee95817b):

| Line | Axis | Yang (1) | Yin (0) | T3 core name |
|---|---|---|---|---|
| 1 | Action | Act: effort outward, ships, enables others | Observe: effort inward, records, reviews, holds | Energy: Output / Input |
| 2 | Change | Disrupt: alters, removes, replaces, introduces | Stabilise: keeps, deepens, protects | Time: Activate / Equilibrate |
| 3 | Perspective | Focus: one target, sharply defined | Zoom out: the whole, a frame others use | Space: Concentrate / Distribute |

Pass 1: two raters, blind to each other, each with a confidence per axis (2 clear, 1 leaning, 0 unreadable). Pass 2: agreement, then the codes cross-checked against the property clusters of discovery 3. Pass 3: the split cases resolved by rule, not case by case.

**Agreement.**

| Axis | Agree | Kappa | Both raters confident (2) |
|---|---|---|---|
| Perspective | 97 / 101 | 0.91 | 53 of 53 agree |
| Change | 94 / 101 | 0.86 | 37 of 37 agree |
| Action | 84 / 101 | 0.64 | 25 of 25 agree |

Whenever both raters were confident they agreed. Lines 2 and 3 can be read reliably for decisions; line 1 is weaker.

**Resolved distribution** (`~` = metastable on Action):

| Code | Archetype | n | srs | programme |
|---|---|---|---|---|
| OSF | Steward | 24 | 7 | 17 |
| OSZ | Watcher | 16 | 10 | 6 |
| ~DF | | 13 | 12 | 1 |
| ADF | Initiator | 13 | 7 | 6 |
| ODF | Analyst | 8 | 3 | 5 |
| ODZ | Rebel | 8 | 6 | 2 |
| ASF | Synthesizer | 6 | 1 | 5 |
| ADZ | Challenger | 5 | 3 | 2 |
| ASZ | Builder | 4 | 2 | 2 |
| ~DZ, ~SF | | 4 | 3 | 1 |

Full table: `t3-assignments.tsv` beside this page.

**Findings.**

1. **Breadth of subject separates the case from the frame** (first rubric; this is the scope property, not T3 line 3 as the owner defines it, see discovery 10). Of the 12 decisions the owner flagged as "moment in time" or that the re-read found not to be decisions (applications, choices, plans), 11 read Focus. The decisions that found an instrument read Zoom out (7 of 9; the two exceptions are the two decision-log boundaries, read as about one log). The owner's instruction "find the principle underneath" is a move on line 3 from Focus to Zoom out, keeping lines 1 and 2. Example: p:46bb7a8c (the clerk's OpenAPI document) is ASF; the principle under it, "we build APIs from the spec", is the same decision read Zoom out.
2. **Change separates the two logs.** srs leans Disrupt (33 D to 21 S, after resolution): it is in its formation phase, removing and reshaping (axis 2-8, Evolution). The programme leans Stabilise (31 S to 16 D). The programme's governance log is Steward-shaped: Observe, Stabilise, Focus (17 of 47). srs's modal code is Watcher, Observe, Stabilise, Zoom out (10 of 54), and srs spreads more evenly across the eight.
3. **Action cannot be read for decisions about what a thing is.** 15 of 54 srs decisions are metastable on Action; 2 of 47 programme decisions. The metastable ones are representation decisions: renames, removals, relocations (`~DF`). Action reads well for decisions about practice (who does what) and poorly for decisions about data shape. Open: whether T3's core reading of Energy as the direction of information flow (does the decision change what goes out to consumers, or what is taken in and held?) would make line 1 readable for them.
4. **Same question, different domains, different pole.** p:2637af0a (editor group: an affirmed remedy counts as a ruling) is ADF; p:0b1c25b1 (Third-party ready: only spec records count) is ASF. They differ on one line: Change. T3 gives a vocabulary for how two domains differ on one question: which line, which way. By contrast s:1e5df0d9 and p:a5c769be (what goes in a decision log) are both OSF: the same orientation, decided twice without either citing the other.
5. **A group's declared lean and its decisions can disagree.** WG Third-party ready leans Initiator, ADF (p:7270e772). The one decision in this set made for it alone, p:0b1c25b1, reads ASF. One case only: watch it, do not conclude.
6. **T3 does not see the object.** Authority decisions spread over seven codes; change-over-time decisions over six. T3 places orientation, not what a decision governs. It is a second, independent clustering, as asked, and should not replace the object clustering.
7. **Flexibility.** Both logs reach all eight orientations, which T3's health matrix reads as healthy flexibility. The programme's weight on Steward (36%) is the nearest thing to a fixation, and it matches the owner's critique: inward, holding, narrow.

**Rules adopted for this pass (provisional; for the owner to confirm).**

- **Change is read against practice before the decision** (T3's relativity principle with the reference set to the status quo). "Remove a parallel mechanism so one way holds" is then Disrupt. This resolved all 7 Change splits (s:19997e24, s:43249f53, s:86f49083, s:a270e98a, s:a8dcbfe5, s:aee09992, p:ff946eb1 → D).
- **Perspective reads the subject, not the reach.** Reach is the separate scope property. This resolved the 4 Perspective splits (p:684f84ab, p:3b910d90, p:31e9fd27 → F; s:dd0a33fc → Z, a frame over every emitter).
- **Action splits stay metastable** (T3's threshold: |s| ≤ θ is undefined, not forced).

**Naming hazard.** The stance archetypes and T3's own orientation names disagree. Stance "Steward" is OSF (in T3's names, IEC, Guardian/Stabilizer). T3's "Steward/Monitor" is IED, which is OSZ (the stance set's Watcher). Codes, not names, should carry the meaning in this work.

**Line 3 has two readings.** The stance set reads it as attention (Focus / Zoom out); T3's core reads it as structure (Concentrate / Distribute: centralised and bounded against decentralised and networked). For authority decisions these may come apart: "a level never decides for the level above" (p:acf486d8, OSZ) distributes authority while widening attention. A later pass could rate line 3 both ways.

### 6. The owner's theory of the three axes (2026-10-22)

In the owner's words:

> We can judge a decision on the three axes. But each is independent. The archetypes are just those that prioritise a specific type of decision. These will not define anything about the domain, but the classification may overlap with the others, and the synthetic process makes it mappable.

> Line 1, the bottom line of the trigram. Every decision has a choice to act, to apply energy outward, apply will on the world, or to allow energy inward, to change the inner reality or system itself.

What follows from it:

- **Three independent judgements, not one type.** A decision is judged on each line separately. The three-letter code is the combination, not a kind.
- **An archetype is a stance that favours a code**, not a decision type. An Initiator (ADF) prioritises decisions that act outward, disrupt and focus; it does not mean the decision is "an Initiator decision". This is why the archetype names should not be used as decision kinds.
- **The T3 code does not define the domain.** A domain's own axes and leans (cdd272a3, 7270e772) are a separate matter. A decision's code may sit with or against its domain's lean; that difference is information, not an error.
- **The classifications overlap and are mapped, not merged.** T3 is one classification beside the object, form, time, lineage and scope clusterings. The synthetic process (as in the Pattern Grid's autoclassification, srs b9d7096e) maps one onto another rather than collapsing them into one taxonomy.
- **Line 1 is about where the change lands, not about activity.** Observe is not passive or "waiting": it is energy let in to change the system itself. A sweeping rewrite of the standard's own model is inward. The first pass used a different rubric (Observe as recording, reviewing, holding), and that is the likely reason line 1 had the weakest agreement (kappa 0.64) and could not be read for decisions about data shape. Line 1 is being re-rated on the owner's definition (discovery 7).

### 7. Line 1 on the owner's definition: where the change lands (2026-10-22)

**Definition (owner).** "Every decision has a choice to act, to apply energy outward, apply will on the world, or to allow energy inward, to change the inner reality or system itself." Rated by two new blind raters, boundary first, then: is the effect aimed outside the boundary (A) or at the system itself (O)?

**Agreement.** 98 / 101, kappa 0.90 (first rubric: 84 / 101, kappa 0.64). All 63 cases where both raters were confident agree. Line 1 is now as readable as lines 2 and 3.

**Findings.**

1. **All 17 decisions that the first rubric could not read are inward.** Renames, removals and relocations in the standard's own model change its inner reality. The definition, not the decisions, was the problem.
2. **Inward is the norm for a decision log.** 82 of 101 are O. A log mostly records how a system changes itself.
3. **Act is coherent: the decisions whose effect crosses the boundary.** The 16 A decisions are releases and migrations reaching users' data (s:86f49083, p:a8e833f1), travelling forms and exports (s:8948e43f, s:a8dcbfe5), federation (s:5f18603e, p:31e9fd27), machine-facing outputs and foreign content (s:b2ff7c91, s:2e0cd70a, s:dd0a33fc, s:2f048790), the clerk's contract with its clients (p:46bb7a8c), exposing the desk (p:e745e9b2), and one-off landings (p:bbb03bff, p:bf4a5af5, p:5d5feb79, s:e5828aa8). These are the decisions third parties feel.
4. **Authority decisions are inward.** 14 decisions moved from A to O, most of them about who may act or how work flows (p:2637af0a, p:0b1c25b1, p:9e2c2950, p:70a84bb7, p:d529294a, p:a8bc55ef). They enable work, but what they change is the programme's own way of working. The first rubric mistook enabling for acting.
5. **The owner's "moment in time" decisions over-represent Act.** 6 of the 12 flagged or non-decisions are A, against 16 of 101 overall. A case applies will outward on one thing; the principle under it is usually an inward change to how the system works.

**Still split (3):** s:aee09992, p:21ee9352, s:1967b8eb: each defines something inside the system whose purpose is how it reads to outsiders.

### 8. Line 2 on the owner's definition: adding energy, or letting it settle (2026-10-22)

**Definition (owner).** "Is the option we are selecting moving the system towards a transformative energy state, are we adding energy to change states, or are we allowing the system to stabilise?"

**Agreement.** 93 / 101, kappa 0.84 (first rubric 0.86). All 36 cases where both raters were confident agree.

**Findings.**

1. **The pole belongs to the selected option, not the topic.** Decisions about change that select the safe way to land it read Stabilise: p:a8e833f1 (a revision lands with its migration), p:bbb03bff, p:bf4a5af5 (structured diagnostics beside the text list). Their alternatives (dual read, release before migration, replace the text lists) would have read Disrupt. So each alternative has its own pole, and a decision is the choice between poles. This matches the PR-decision rule that each option names its `pole` (clerk `docs/pr-decisions.md`).
2. **Founding a frame and holding a frame split on line 2.** New instruments read ODZ: the Pattern Grid, the reference strengths, the decision modes, the grid operations (s:cce3c00e, s:c8704763, s:7caca3a1, s:8f5aca2c, s:b9d7096e). Rules that hold a frame read OSZ: the layer rules, retirement per layer, a rename is a migration, the level test, the doors (s:9ee14517, s:5f8204bc, s:628cf6c4, s:c20fcff8, s:e99a9437).
3. **Magnitude is unsettled.** The 8 splits are small new conventions: an actor marker, a re-review label, a slug convention, a classification of PR decisions (p:21ee9352, p:ea96a678, p:04b78189, p:e3505ded). One rater counts any new mechanism as added energy; the other counts a small convention as settling. Open: does line 2 read the direction only, or does a threshold of energy apply (T3's continuous state and metastable band suggest the latter)?

### 9. The combined picture (version 2 codes, 2026-10-22)

> **Line 3 here is the first rubric (breadth of subject).** The owner's definition is below; discovery 10 re-rates line 3 on it and gives the version 3 codes, which replace this table.

**Line 3, the owner's definition (2026-10-22):** "Are we focusing our energy ... concentrating on a specific plan ... Is the direction of the system we are focusing on under our will or control? Or are we opening the boundary to align with the energy state outside? Are we executing a project plan, or are we sensing and responding?" So line 3 is control against responsiveness: Focus holds the direction under our will and executes a plan; Zoom out opens the boundary and senses and responds. It is neither breadth of attention nor reach, the two readings of the first pass. The owner added: "Focus is a closed boundary, focusing on our will. Opening up, zooming out, is sensing."

**How lines 1 and 3 differ.** Both speak of the boundary, in different ways. Line 1 is the direction energy flows across it: outward onto the world, or inward to change the system. Line 3 is the state of the boundary itself: closed and steered by our will, or open and sensing. So an inward decision can still be open (the system changes itself in response to what it senses: p:559bfb9e "experiment now, unify later"), and an outward one can still be closed (a release imposed to a fixed plan).

Line 1 and 2 from discoveries 7 and 8; line 3 from discovery 5. `~` is metastable. Full table: `t3-assignments-v2.tsv`.

| Code | Favoured by | n | srs | programme | What the members share |
|---|---|---|---|---|---|
| ODF | Analyst | 25 | 17 | 8 | a targeted change to the system's own model or practice |
| OSF | Steward | 23 | 7 | 16 | a targeted rule that lets one part of the system settle |
| ODZ | Rebel | 14 | 11 | 3 | a new frame for the whole system |
| OSZ | Watcher | 14 | 7 | 7 | a rule that holds the whole system's frame |
| ADF | Initiator | 6 | 3 | 3 | one change pushed out to others |
| ASZ | Builder | 4 | 3 | 1 | a standing guarantee to everyone outside |
| ASF | Synthesizer | 3 | 0 | 3 | one landing that keeps others working |
| ADZ | Challenger | 2 | 2 | 0 | a change everyone outside must absorb |
| metastable | | 10 | 5 | 5 | |

- **Each log has its own centre.** srs: Analyst (ODF, 17 of 54), targeted change to its own model, as a standard in formation. Programme: Steward (OSF, 16 of 47), targeted settling of its own practice.
- **The archetypes describe whom a decision suits, not what it is.** An Analyst favours the ODF decisions; that is a statement about stance, and the kinds remain to be found from the other clusterings (owner's theory, discovery 6).
- **The same-question pairs now differ on one line each.** p:2637af0a (editor group) ODF against p:0b1c25b1 (Third-party ready) O~F: line 2. s:86f49083 (one landing, ADZ) against p:a8e833f1 (the rule, ASZ): line 2, the rule is the stabilising way to land the change. s:5f18603e and p:31e9fd27 (federation's commitment and its schedule) are both ADF.
- **The flagged cases are Focus** (10 of 12). The move to the principle underneath is on line 3, and often on line 1 too (from outward on a case to inward on the system).

### 10. Line 3 on the owner's definition: a closed boundary or an open one (version 3 codes, 2026-10-22)

**Definition (owner).** Focus: the direction is under our will; a closed boundary; executing a plan. Zoom out: opening the boundary to align with the energy outside; sensing and responding. Rated by two new blind raters, explicitly not by breadth of subject.

**Agreement.** 96 / 101, kappa 0.81. All 48 cases where both raters were confident agree. The split is lopsided (about 85 F to 14 Z), which keeps kappa lower than raw agreement.

**Findings.**

1. **Line 3 is not breadth.** Only 62 of 101 keep their first-rubric pole. 27 moved from Z to F: the system-wide frames (the grid's founding, the layer rules, the reference strengths, the doors) are closed. We impose them. Breadth of subject belongs to the scope property.
2. **Decisions are almost always closed.** 85 of 101 hold the direction under our will. The 13 that both raters read as open share one property: **the selected option lets something outside decide.**
   - evidence of use decides what is removed: s:4f1e12e5, s:53635966, s:2a1e1590;
   - real use decides what graduates: p:a1b06725;
   - practice decides how models unify: p:559bfb9e;
   - an observed overlap decides nesting: p:8e1ae42a;
   - the boundary decides a stance: p:ee95817b;
   - a test decides whether a convention is enforced: p:04b78189;
   - the tool carries what it does not recognise, and each corpus decides its own practice: s:2e0cd70a, s:1e7c0c8e;
   - counterparties are sought out: s:8f5aca2c;
   - a retirement is left open for later: p:bf4a5af5;
   - history is investigated before deciding: p:b80d2d1e.
3. **Every decision has a sensor, but most do not sense in the choice.** Each record carries a review trigger (`revisit_when`, `review_trigger`): an open boundary, attached afterwards. A Focus decision is a closed choice plus an open sensor. A Zoom out decision puts the sensing into the choice itself.
4. **"Committed, not evidence-gated" is a line 3 flip.** The attested removals (s:4f1e12e5, ODZ) wait on evidence for each return. Federation's return (s:5f18603e, ADF) was taken out of that by the owner: committed, scheduled, under our will. The one ruling is named by its pole.
5. **The owner's practice is open; the log is mostly closed.** The owner's comments keep naming open principles: "we start with a sample, learn, then commit", "initial experiments and non-conformity is allowed until we have a standard practice", "a design decision that we will use for now, and review". Few decisions encode that in the choice itself. Most encode it only in their review trigger, if at all.
6. **Health (T3).** Decision-making concentrates in O·F: ODF 31 and OSF 31, 62 of 101. Neither log reaches every orientation. ADZ (Challenger: outward, transforming, open) never occurs. srs never reaches OSZ; the programme never reaches ODZ. T3's health matrix reads 6 of 8 as a warning, not a fixation.

**Version 3 distribution** (line 1 from discovery 7, line 2 from 8, line 3 from this pass; `~` metastable). Full table: `t3-assignments-v3.tsv`.

| Code | Favoured by | n | srs | programme |
|---|---|---|---|---|
| ODF | Analyst | 31 | 22 | 9 |
| OSF | Steward | 31 | 14 | 17 |
| ADF | Initiator | 8 | 5 | 3 |
| ASF | Synthesizer | 5 | 2 | 3 |
| OSZ | Watcher | 5 | 0 | 5 |
| ODZ | Rebel | 4 | 4 | 0 |
| ASZ | Builder | 2 | 1 | 1 |
| ADZ | Challenger | 0 | 0 | 0 |
| metastable | | 15 | 6 | 9 |

**Still split (5):** p:2637af0a, p:a8bc55ef (delegation: distributing authority, read as both a planned charter and an opening); s:7caca3a1, s:b9d7096e (instruments that look for emergence); p:684f84ab (a decision held open, or captured to a fixed procedure).

### 11. Vertices, spans and hexagrams: a working model (2026-10-22, hypothesis)

**The owner's questions.** "These 8 different types should become stable definitions of the forms decisions can take. Not every decision can have options at all vertices. So, we can map the final decision to a vertex... But can decision types exist as decisions that present specific types of options? Full yang decisions focus on action, movement, and specific goals. Or is trying to collapse to just 8 types like this missing dimensions? The I Ching uses two sets of trigrams: the context and the action. So there may need to be different classifications working in parallel."

**Working model (Claude's proposal, untested).**

1. **A vertex is the orientation of the chosen option.** On the owner's three definitions the eight vertices are stable and can be applied consistently (discoveries 7, 8, 10). Full yang, ADF: act outward, add energy, by our will: action, movement, a specific goal. Full yin, OSZ: turn inward, let it settle, open the boundary and sense.
2. **A decision type is defined by its span: the lines on which its real options differ.**
   - One line (an edge of the cube): a single trade-off. p:a8e833f1 spans line 2 (land with the migration, S, or dual read and release later, D). s:5f18603e spans line 3 (committed, or evidence-gated).
   - Two or three lines (a face, or the whole cube): a fork in direction. p:559bfb9e spans lines 2 and 3 (experiment side by side, or unify now).
   - No line: every option sits on one vertex. p:46bb7a8c (OpenAPI, protobuf, schemas from code, hand-written types: all closed, inward design choices) is the example, and the owner flagged it as not a real decision. The decision under it ("APIs from spec") does span a line.
   - **Hypothesis:** a governing decision spans at least one line; a choice whose options share a vertex is an implementation or task choice. The well-formed-ask rule (each option names its `pole` on a `tension`, clerk `docs/pr-decisions.md`) already points this way.
3. **A decision is read as a hexagram: context trigram × action trigram.** The context trigram is the stance of the domain or group the decision is made in (recorded for WG Third-party ready, ADF, p:7270e772). The action trigram is the chosen option (its ruling p:0b1c25b1 reads A~F). srs's compass is already two trigrams, inner and outer, over its six axes (srs-context cc05d4c9). This fits the scope ruling: the same choice reads differently in two domains because the context trigram differs.
4. **The other classifications run in parallel.** T3 places orientation only. Object, form, time, lineage, scope and parts (discovery 3) are independent of it; T3 does not see the object (authority decisions span seven codes). A kind is a recurring combination across the parallel classifications, mapped by the synthetic process, not one of eight boxes.

**Test to run next.** For decisions that list their alternatives: rate each option's vertex on all three lines; compute each decision's span; check whether flagged non-decisions have empty spans; and, where the domain's lean is recorded, compare context and action trigrams.

### 12. The option test: spans, the status quo, and which lines are chosen (2026-10-23)

**Method.** The 80 decisions that record alternatives (all 54 srs; 26 of the programme's) were rated option by option: every distinct course of action, the chosen one included, placed on all three lines in the owner's definitions. Two blind raters, about 300 options each. A decision's **span** is the set of lines on which its options differ. The other 22 programme decisions record no alternatives at all: by the owner's rule ("a decision with no options is not a decision") they are not yet well-formed decisions.

**Agreement.** On span, line by line: 65, 70 and 69 of 80. The chosen option's code agrees with the decision-level code (discovery 10) on line 3 for 88% of ratings, line 2 for 79%, line 1 for 62%.

**Findings.**

1. **Line 1 is given, not chosen.** Options within one decision almost never differ on line 1: 5 of 80 once "do nothing" is set aside (6 with it). The direction of energy is fixed by what the decision is about and its boundary. The choice is made on line 2 (53 of 80 span it, excluding do nothing) and line 3 (33 of 80). Line 1 behaves like context, which fits the owner's two-trigram reading (discovery 11): part of what looks like the decision's orientation is really its situation.
2. **"Do nothing" is the yin vertex.** Of the recorded do-nothing options, rater J placed 29 of 34 at OSZ and rater I 16 of 30 (the rest mostly OSF or ASZ). The status quo lets the system settle and keeps it open. So the rule that every decision names a do-nothing option guarantees that a yin course is always on the table. Chosen options lean slightly more yang than rejected ones (2.05 against 1.92 yang lines for rater I; 2.08 against 1.84 for rater J).
3. **"Do nothing" inflates the span.** With it included, nearly every decision spans lines 2 and 3, flagged non-decisions too. The test has to set it aside.
4. **The span hypothesis has weak support at best.** With do nothing set aside, the owner's flagged non-decisions span fewer lines (0.83 on average against 1.19) and are empty three times as often (3 of 12 against 6 of 68). But an empty span also occurs on sound governing decisions (the layer rules s:9ee14517, p:f58db200, p:7ee8fa01): their recorded alternatives are variants at the same vertex, differing in technique, not stance. **So an empty span does not identify a non-decision. It shows that the alternatives considered were not real alternatives in orientation:** a quality signal about how the options were framed.
5. **Line 1 is fragile at option level.** Both raters tended to rate schema options in the spec as Act ("the standard faces its consumers"), against the decision-level consensus (Observe: the standard changing its own model). Line 1 needs its boundary stated explicitly every time it is applied, or the reading drifts outward.

**What this suggests for forming decisions (for the owner to judge).**

- Name at least one real alternative that differs from the chosen option on a line other than line 1, as well as "do nothing". If every option sits on the chosen vertex, the decision is still a technique choice, and the governing choice is one level up.
- Read line 1 as part of the context: state the boundary, and expect the options to share it.
- Treat "do nothing" as the yin reference point the other options are read against.

Data: `options-rater-i.tsv`, `options-rater-j.tsv`, `spans.tsv` (all options) and `spans-excl-donothing.tsv`.

### 13. The programme itself is stuck on line 1 (owner, 2026-10-23)

In the owner's words: "Our current work has been stuck at line 1 for a week or two. We cannot act because we have not judged our ability to act as sufficient. We have established many different rules for how we should act, but are ignoring hundreds of carefully defined issues that are immediately actable."

**The evidence agrees.**

- 82 of 101 decisions are inward (discovery 7).
- The programme's centre is OSF: inward, settling, closed (discovery 10).
- ADZ (outward, transforming, open) never occurs.
- On 2026-10-23 the eight repositories held 396 open issues, of which 200 are parked and 25 are ready:

  | Repository | Open | Parked | Ready |
  |---|---|---|---|
  | srs | 91 | 60 | 4 |
  | srs-rust | 135 | 92 | 12 |
  | srs-web | 72 | 35 | 6 |
  | srs-vscode | 16 | 13 | 0 |
  | the rest | 82 | 0 | 3 |

- Most are parked by the readiness rules themselves: an issue is not work until it is grounded in an affirmed problem and routed (handbook, decisions D4, D5 and D15).

**Reading.** The rules about acting have absorbed the energy that acting needs. In T3 terms this is a fixation on line 1's yin. Energy turns inward to judge and refine the system's own readiness, and none goes outward onto the world. This exercise is itself an instance: two days of inward work.

**What follows.** The way out is not a better rule for when to act; that would be another inward step. It is a line 1 flip: apply energy outward by shipping the work already defined. A taxonomy of decisions should be judged by whether it helps work move, not by its completeness.

### 14. The three-axis structure is trigram based (owner, 2026-10-23)

The owner ruled that the three-axis structure follows the trigram. Line 1 is Earth (Cardinal, Aries ↔ Libra), line 2 is Human (Fixed, Taurus ↔ Scorpio), line 3 is Heaven (Mutable, Gemini ↔ Sagittarius), and lines 4 to 6 repeat them in the upper trigram. Systemic Data Ethics and the zodiac's Individual, Relational and Systemic levels fit the same twelve positions but are built from a different rubric, so they do not number the lines.

The local reference is `three-axes-by-trigram.md` beside this page. The SRS compass is zodiac based (owner, same day): its own grouping of the axes is its rubric, not an error. Reading it on trigram lines is a translation, and the two translations give different inner trigrams (110 by movement, 011 by the alignment). The owner then framed the two as **different synthetic systems that map the same space**. The trigram is the default for a domain because it is built directly from tensions; the zodiac compass makes gaps easier to find. clerk#159's chapter was rewritten to match (4dd09b9). The owner then ruled the two yang polarities it had left open (discovery 15).

The decision ratings (discoveries 7 to 12) already use the trigram order.

### 15. On the zodiac, polarity is derived by rule; the mapping is the judgement (owner, 2026-10-23)

The owner's rule is that yin and yang alternate around the signs from Aries, except at 6/7 and 12/1. The yang signs are therefore Aries, Gemini, Leo, Scorpio, Capricorn and Pisces, and the ratified SRS compass matches on all twelve. "Everything about this structure is rule based. The synthetic practice maps the domain first." Two balances follow from applying the rule correctly: each element splits 2–1, and each level splits 2–2. They are cross-checks on the mapping, not separate rules to satisfy. In the first pass, Shared coherence was put on ♐ Governance, which gave Fire 3–0. Read with the signs, it sits on ♊ Description. The owner's readings, Aries (new versions, action) ↔ Libra (reference, stability) and Leo (forward from the centre, bound) ↔ Aquarius (wider, open, with the group), agree with the rule. See `three-axes-by-trigram.md` (Polarity) and clerk#159.

Same day, on the trigram, for Programme coordination: line 3 is where direction comes from, a goal we have chosen (yang) or alignment with other actors (yin). Core once is control from the centre and adapters take direction from outside, so Core once is yang. Line 1 is Refine ↔ Deliver, with Deliver yang (owner).

### 16. Finding active work was missing from the plan (2026-10-25)

The standard-flow plan (clerk#197) assumed the desk was where a new session would find active work, and never tested it. The owner asked how a chat starts at the desk, and the live desk (`clerk desk`, run on 2026-10-25) answered:

| Question | Answered by the desk? |
|---|---|
| What needs the owner? | yes ("Needs you", including issues assigned to the owner) |
| What are the groups doing? | yes ("Threads", "Running fine") |
| Which open PRs belong to no epic? | yes ("Unthreaded") |
| Which sequences are in progress, and what is next? | **no.** clerk#19, which holds clerk#197 and the Ready tasks #203, #199 and #200, shows "idle · No open PR", because an epic's state is read from its open PRs alone |
| What will the central lane take next? | **no.** Only `clerk queue` shows it |
| What is claimed but has no PR yet? | **no** |
| Is it current? | **no.** The pinned desk is posted only on the daily digest run, which GitHub fires late or not at all (once at 12:02 on 2026-10-24; the 15-minute cron fires about 7 times a day). clerk#203 |
| Does a new chat know to start there? | only once srs-context#77 (a brief entry) merges |

**What changed.**
- clerk#204 now covers sequences, the central lane and claims without a PR.
- clerk#127 gains step 0, **Find**.

**The owner's rule for finishing this:** dogfood until work that follows the process is not lost, and any new agent finds the process. A stop for an approval before the goal is a failure, so approvals are taken up front.

### 17. Dogfooding the flow to the goal: what held, and what a new session still does (2026-10-25)

The owner pre-approved the whole sequence, W1 to W7 (decision 51054b3c, ratified in srs-programme#262), so no merge stopped for the owner. By 13:30 UTC every task had landed through the flow: claim, worktree, gates by exit code, independent review, PR, run report on clerk#197.

| Goal | Result |
|---|---|
| G2. The pinned desk is current and shows all active work | **Met.** It is rewritten on every upkeep run (clerk#205; 10:22 and 12:48 UTC). It shows each ranked epic's sequences with the next task free to take, the central lane counted by the queue's own rule, and claims with no PR (clerk#206, #213). |
| G3. No owner stop | **Met for merges.** Every merge cited 51054b3c. The permission layer refused one merge over a red required check, rightly: a gate passes in CI or not at all. |
| G1. A fresh headless session finds the process and the next task, and never asks to affirm | **Partly.** Run 1 took an item from the owner's Needs you list. The brief was then sharpened (srs-context#78): Needs you is the owner's queue, and an agent resumes the first sequence showing `next:`. Run 2 left the owner's queue alone, weighed the top sequence's next task (clerk#8) and correctly set it aside as owner work, then chose a cross-cutting blocker (the failing integration check, clerk#218) over the next sequence row. Neither run asked for affirmation. |

**What the dogfood taught.**
1. **The process caught its own defects only when it was run.** The first flow-keeper sweep would have labelled six epics and the tracker for the unattended lane (clerk#216). `refersTo` matched `srs-lab#25` as `clerk#25`, which falsely refused claims and hid a stale claim (clerk#213). Neither showed up in the tests.
2. **Review before label.** clerk#206 was labelled `gate:auto-merge` at opening and merged before its review, which then found three blocking defects. From then on every PR opened as a draft with no gate label until its review passed.
3. **Records through the CLI, every time.** Two early handbook edits were made as JSON. The content was right, but the act was the mimicry the rules forbid.
4. **API cost is a constraint of the flow itself.** One desk run costs about 190 REST requests, and one integration run about 1,360. The sequence exhausted the owner's 5,000-an-hour quota once, and the CI installation token several times, so PRs failed on rate limits, not on their changes (clerk#215, #218).
5. **A new session reads the desk as addressed to it.** "Everything that needs you" is the owner's queue, but a session told only "continue the work" took it as its own. The rule is now in the brief and the handbook's Find step. The desk itself still speaks only to the owner, so a line on the desk for agents is the next lever if sessions keep missing the sequence rows.

## Open questions

1. Does Authority replace Mandate, or widen it? Are Gate and Lean kinds, or attributes?
2. Does a decision pass down into narrower domains until one holds its own (as axes do in cdd272a3)?
3. Which programme decisions are meant to hold for the whole of SemanticOps (d529294a, f58db200)?
4. Do the non-decisions leave the log, or stay as history linked to the decision they apply?
5. Line 1: resolved by the owner's definition (discovery 7).
7. Line 2: does magnitude matter, or only direction (discovery 8)?
8. Line 3: re-rated on the owner's definition (discovery 10). Is delegation (handing authority to a group) a closed plan or an opening?
9. Should a decision's sense-and-respond part sit in the choice, or is the review trigger enough? (discovery 10.3)
10. Is line 1 part of the context trigram rather than the action (discovery 12.1)?
11. Should every decision name an alternative that differs on line 2 or 3, besides do nothing (discovery 12)?
6. Is the T3 code a property every decision should carry (as srs carries `governing_values` and its cell)?

## Next passes

- Option-level rating and spans: done (discovery 12). Next: rate options against a stated boundary to steady line 1; test the context trigram (domain lean) against line 1.

- Add the 40 earlier programme decisions and the srs-context decisions.
- A property matrix (all ten properties per decision) so clusterings can be recomputed as decisions arrive.
- Cross the T3 code with the object clustering: which object × orientation pairs recur.
- Rate line 3 both ways (attention and structure).
- The owner marks up the assignments; disagreements become the record of what the axes mean for decisions.
