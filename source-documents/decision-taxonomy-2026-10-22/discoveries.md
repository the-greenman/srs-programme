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

1. **Perspective separates the case from the frame.** Of the 12 decisions the owner flagged as "moment in time" or that the re-read found not to be decisions (applications, choices, plans), 11 read Focus. The decisions that found an instrument read Zoom out (7 of 9; the two exceptions are the two decision-log boundaries, read as about one log). The owner's instruction "find the principle underneath" is a move on line 3 from Focus to Zoom out, keeping lines 1 and 2. Example: p:46bb7a8c (the clerk's OpenAPI document) is ASF; the principle under it, "we build APIs from the spec", is the same decision read Zoom out.
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

## Open questions

1. Does Authority replace Mandate, or widen it? Are Gate and Lean kinds, or attributes?
2. Does a decision pass down into narrower domains until one holds its own (as axes do in cdd272a3)?
3. Which programme decisions are meant to hold for the whole of SemanticOps (d529294a, f58db200)?
4. Do the non-decisions leave the log, or stay as history linked to the decision they apply?
5. Can T3 line 1 be read for representation decisions, and how?
6. Is the T3 code a property every decision should carry (as srs carries `governing_values` and its cell)?

## Next passes

- Add the 40 earlier programme decisions and the srs-context decisions.
- A property matrix (all ten properties per decision) so clusterings can be recomputed as decisions arrive.
- Cross the T3 code with the object clustering: which object × orientation pairs recur.
- Rate line 3 both ways (attention and structure).
- The owner marks up the assignments; disagreements become the record of what the axes mean for decisions.
