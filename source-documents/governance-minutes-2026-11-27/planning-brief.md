# A shared practice that refines itself: planning brief

Planning brief, 2026-11-27. It manages the implementation that follows the day's research in this folder
("Protocol evolution", "SRS Minutes: a first governance product", "Topics through time", "Rules for minutes",
"Strata"). Domain: **A shared practice that refines itself** (`4a76b0b5`, suggested; first named Checkable AI documents), container `3201c9c6`. Epic: semanticops.com#72; objective `63221476`.

## The problem

> The basic problem here is that AI outputs are often black boxes, and we need to be able to both present a
> simple human facing summary and a way to go deeper to verify data. We also need to be able to maintain
> consistency over time and be able to keep using the historical data to enhance understanding and context.
> (Owner, 2026-11-27, vignette `0986f08a`.)

The owner widened it the same day (vignette `27a7396f`): "This is a little more than just checkable AI
documents, it's a consistent, and refining shared practice over time. [...] We are evolving the structured
context, so that when we process the next transcript, we are not starting from scratch, we are building on the
framework and knowledge from before. As we learn, we can evolve our protocols and continue to develop the
underlying datastructure and how we feed into it."

The product this leads to first is structured governance: minutes, decisions and their record, for a small
governed group. The mechanism is wider than governance. It is the same for a project's shared picture and a
research synthesis, and the three builds below were made to show that.

## What exists: three builds, three ways of making them

| | LTH Works minutes | Party Utility backstage | LiveWyer Insight |
|---|---|---|---|
| **What it is for** | A governed group's record: minutes, decision points, tasks | A crew's shared creative picture, published as `lovemissile.net/backstage` | A research synthesis: problems and opportunities over conference findings |
| **Source** | Meeting transcripts (private), house rules, supplied facts, the group's standing records | Two meeting transcripts, the organiser's clarifications in chat, the Sputnik site's data | 417 findings from 361 talks at 70 events (livewyer-ingress) |
| **How it was made** | Blueprint and Protocol (`minutes` 0.1 to 0.4) driven by the generic runner (srs-lab `minutes/runner.mjs`), 10 and 12 stages, then `meeting-update` | The `session-notes` protocol (`com.semanticops.picture` 0.1), stage replies written by Codex; `picture-update` opened and **left at its first stage**; then 35 hand passes | A Python pipeline (`ingest`, `link`, `compose`); the judgement is one file, `clusters.json`; no protocol until a two-stage synthesis experiment |
| **Strata** | Five, declared after the fact: memory, record, working, evidence, source | Not declared (area, idea/task/question, fragment, transcript) | Five, exact: opportunity, problem, finding, talk, event; every rests-on link goes one down |
| **Over time** | Series of meetings; subjects, follow-ups, standings, curation proposals | Designed (`developments`, `area_states`, `picture`) but not run; done by hand instead | None: a snapshot |
| **Person's role** | Secretary's check designed, not built; flag triage needed | The owner directed every pass in chat | Suggested, then affirmed or rejected, by lifecycle |
| **Computed values** | None | The site build | Signal, rank and counted confidence by script; a model asked to set signal marked all eleven "strong" |
| **Output** | Minutes PDF carrying its `.srs`; transcript withheld by default | A static site, built without transcript words; scrub check for personal data | srs-web navigation, an interactive report, a signal map |

The difference that matters for planning: the minutes are **process-first** (everything through stages, so it
is repeatable but untested on a long series); the backstage is **process, then hand** (the process got it
started, the useful picture came from passes it cannot repeat); LiveWyer is **pipeline-first** (repeatable,
but the judgement sits in one file and nothing records how it was reached).

## What the backstage showed

The 35 hand passes are seven kinds of act (finding `b9c05574`):

| Kind | What it did | Passes | Nearest stage kind |
|---|---|---|---|
| **Supplement** | Organiser's words become a note; records are updated and added resting on it | market, stairs-craft, crt-media, lineup-adverts-bar, entrance, music-guide, shared-vision | extract + update, reading a supplied source |
| **Import** | Facts from another system (the site's DJ list) | lineup-note | extract from a supplied source |
| **Restyle** | Rewrite into the crew's "we" voice, adding no meaning | vision-area-summaries, vision-item-text, vision-resource-notes | update, whole document, with a no-new-claims rule |
| **Classify** | Tag tasks and openings by kind of work, closed vocabulary | work-type-assignments | update |
| **Conform** | Apply a house rule to everything already written | people-roles, scrub-quote-update | update sweep with a runnable check |
| **Reshape** | New kinds of area (element, project), `belongs-to`, moves, merges | elements-projects, max-headroom-project, building-elements, area-merges | gate: the `area_proposals` stage, which the owner's word skipped |
| **Resolve identity** | Names, spellings and aliases of the crew | crew-clarification | update on people, with a source |

Three kinds of drift came with them. The repository's copy of the package gained vocabulary and a relation
type that the package source (`spec.mjs`) and its protocols do not have. The runner was forked
(`tools/runner-debug.mjs`, about four times the size of the srs-lab runner). And the update protocol was
never finished, so nothing records what became of the first meeting's items. A fresh run from the sources
would not produce the picture that is published.

That is why the backstage comes first: it is the one build where the process demonstrably fell short of what
was needed, and its passes are a ready test set for the stage kinds.

## Strata and layers

The owner (vignette `10abae93`): "I want a human to be able to view the minutes and then drill down. But the
current experiences of drilling down feel difficult. Once we drill we have a graph or a mess. What if we
actually created a defined set of strata?"

Where it stands:

- **Measured on two documents.** Minutes: of 483 rests-on links within one meeting, none goes up a stratum;
  the only upward ones cross meetings (back in time) or reach standing records (across). LiveWyer: all 737
  go exactly one stratum down (findings `418cb821`, `b68c916c`).
- **Four directions, not a graph.** Down (what it rests on), back (the same matter earlier), across (standing
  records beside it), around (where it is filed).
- **It unifies four things:** drill-down; what merges into a master and what stays in the meeting file;
  the rule that context is never the meeting's voice (context is across or back, never down); and search
  defaulting to upper strata.
- **Earlier work.** srs-lab `strata/` (the writer's cauldron view) made strata a declared mapping of types
  to layers and set a trigger to revisit "if a package should declare its own layer" (DECISIONS S2). The
  minutes work is that trigger.
- **Open:** strata on the Blueprint or the package (exercise `e936c7bf`); order within a stratum; skipping
  (needed: a minute rests on fragments directly as well as through a decision point); strata are a different
  axis from tiers.
- **Untested:** the backstage. The exercise's own next step is to declare strata for the Party Utility season
  and see whether the same shape holds. Unit A does it.

## The shape of the answer

Three declarations, each a small addition, carry the whole problem, and two loops make it a practice:

1. **Strata** answer *how do I check it*: a fixed path down from any statement to its source.
2. **Stage kinds** answer *how was it made, and can it be made again*: every change, including a correction,
   is a stage of a declared kind with its reads, writes and check; a tool computes; a person gates.
3. **The series** answers *does it stay consistent*: each new source starts from what earlier documents
   left open, reading history through subjects and the relation graph.

4. **The lesson loop** answers *does the practice improve*: each run ends with a review that turns the
   maintainer's corrections into a proposed package version, re-run on earlier sources before release.
5. **Trust levels** answer *how does AI take on more*: a stage moves from every output checked, to sampled,
   to trusted, on measured acceptance, and drops back on a miss.

Everything a person does (accept a minute, keep a flag, accept a reshape) is a session act in the clerk,
recorded with who, when and in what order (Rules for minutes 7 and 10).

## Domain and problems

Domain **A shared practice that refines itself** (`4a76b0b5`), under Deep context; Group governance (`c72787fd`, affirmed) is
its first market. Personas: *Reader* (`fd7ac1e0`, refines Reader of a finished work) and *Maintainer*
(`b3889bd4`, refines A person working with AI). All suggested; affirmation is the owner's, in the affirmation
layer.

| Cluster | Problem | Held by | Remedy |
|---|---|---|---|
| The practice learns | SP-199 Lessons from one meeting don't reach the next | Maintainer | `f3ef427e` Each run ends with a lesson pass into a new package version |
| | SP-200 AI's share of the work cannot grow with trust | Maintainer | `9b8f5c43` Stages earn autonomy by measured acceptance |
| Open it down to the source | SP-190 AI summary gives no way to check it | Reader | `d5546041` Declared strata, drilled one layer at a time |
| | SP-191 Drilling down gives a graph, not a path | Reader | `d5546041` |
| Grow consistently over time | SP-192 Each new source processed as the first | Maintainer | `f6765764` Each new source starts from what the series left open |
| | SP-193 Changes outside the process leave no repeatable trail | Maintainer | `94ef1a1e` Every change is a declared stage of a known kind |
| | SP-194 History too large to give, too hard to search | Maintainer | `f6765764` |
| Trust the process, not the run | SP-195 Computed values left to a model's judgement | Reader | `94ef1a1e` |
| | SP-196 Too many flags make the check ignorable | Maintainer | `e589fc6d` Flags triaged by a person, kept rate counted |
| | SP-197 Runs differ and nobody can tell | Maintainer | `94ef1a1e` |
| | SP-198 A process cannot declare what it needs | Maintainer | `94ef1a1e` |

Related, not duplicated: SP-158 (live minutes cannot point at their words; holon semanticops.com#64), the
citation-anchor problem (`a06ce32d`), and "Replaced decisions leave no readable history" (`d2c8e6ad`).

## The holon: units in delivery order

Each unit ends with something a person uses, and names the spec or engine work it pulls, so the standard moves
because a consumer needs it.

### Unit A. The backstage, rebuilt by its protocols

*Answers SP-193, SP-197, SP-198; tests remedies `94ef1a1e` and `d5546041`.*

- Package `com.semanticops.picture` 0.2 in its source: element and project area kinds, `belongs-to`, people
  as name and role only, work-kind tags, and declared strata (picture, area standing, area, item, fragment,
  transcript; to be confirmed against the data).
- New stages, one per kind of pass: **supplement** (reads a supplied note, updates and adds records resting on
  it), **classify**, **conform** (a house rule as a sweep with a runnable check: the scrub check and the
  people rule), **restyle** (no new claims; checked by comparing claims before and after), **reshape** as
  proposals a person accepts, **resolve identity**. Import is supplement with a different source.
- Finish `picture-update` on meeting 2.
- **The replay test.** From the two transcripts and the organiser's clarifications as supplied notes, rebuild
  the backstage with protocols only, in a fresh repository, and diff it against the hand-built one. Run it
  twice, once with Claude and once with Codex, and diff those.
- Retire the runner fork; the backstage uses the shared runner.
- **Done when:** the published backstage can be rebuilt from its sources and notes by protocol alone; no more
  than one pass in five still needs a script (the remedy's falsifier); the two models' pictures are diffed
  and the difference is posted; the strata check reports no upward rests-on link within a meeting.

### Unit B. One runner, in the clerk

*Answers SP-198.* Settles exercise `4926701b` (where the runner lives) as the design note proposes: the pure
part (brief from definitions, check a reply) in `lib/practice`, the srs CLI and the model in `lib/adapters`,
packages in `packages/`. Stage kinds, reads and writes declared in the definition (a `meta` carrier until the
spec has them). The secretary's check and curation become session acts.

### Unit C. The Tier 1 stage contract, specified

*Answers SP-198.* One RFC: `ProtocolStage.mode`, `reads` with scope, `writes`, `RelationSpec.requiredOf` and
`label`, more than one output type and an uncertainty type, an anchor on `SourceReference`,
`Protocol.blueprintRef`, a `meta` carrier on definitions. With it, the filed fixes: srs#1053, srs#1054,
srs-rust#1711 (runs travel), #1712 (advance checked), #1713 (dates validated), #1714 (brief covers every type).
The stage kinds Unit A needs are the evidence for `mode`.

### Unit D. Strata, specified and drilled

*Answers SP-190, SP-191.* `Blueprint.strata` (ordered layers of types); the no-upward-provenance invariant as a
diagnostic; an engine query (for a record, what it rests on by stratum, and what lies back, across and around);
a drill-down composition; a reader view (the `strata.py --html` prototype taken to the published page and the
PDF carrier). Settles exercise `e936c7bf`.

### Unit E. SRS Minutes, phase 1, with LTH Works

*Answers SP-190, SP-196; tests `e589fc6d`.* Three consecutive meetings through the minutes protocol, the
secretary's check and flag triage as session acts, outcome layer merged into the master, transcript withheld.
Count the secretary's edits (items edited, struck, added) as the baseline. **Done when** three meetings have
gone through and the members' minutes check passes.

### Unit F. Growing through time

*Answers SP-192, SP-194; tests `f6765764`.* Package first: lifecycles on `decision_point`, `task`,
`subject_state`, `subject_proposal`, `precedent`; topics may have no subject. Then the engine's series and
repository scope, and a second RFC for repository-scoped types and scoped completion checks ("every open X in
the series has a Y"). Then the subject-thread composition. Settles exercises `1d4a984b` and `c52bb95e`.

### Unit G. The lab: is it consistent?

*Answers SP-195, SP-197.* A re-run harness: the same meetings and the backstage re-run when the package or
model changes; variance across runs; a second model and a local one (decision `24ed7a61`); comparison with
what the maintainer finally approved. Compute stages for counted values (LiveWyer's counted confidence is the
first). Runs through every unit from A onward.

### Later

Phase 2 and 3 of the minutes project: memory as an index (subjects, the graph, select-then-read), tension
between records as a relation with triage, decisions built per decision point by the governance protocol,
people as records with consent, live protocols (semanticops.com#64 is the live-capture half).

## Decisions to take in one session

Each is an existing exercise or a recorded open point; none is asked piecemeal.

1. Where the runner lives (exercise `4926701b`). Proposed: the clerk, as above.
2. Whether strata belong to the Blueprint or the package (exercise `e936c7bf`). Proposed: the Blueprint, one
   stack per document type, because the minutes measured a stack per document.
3. Whether the package's meeting and the clerk's session are one thing (exercise `37e78650`).
4. Where a meeting's working records live (exercise `c52bb95e`). Proposed: a working copy of the master, outcome
   strata merged back, the meeting file attached.
5. Whether continuity is its own update protocol or part of each stage (exercise `1d4a984b`).
6. The domain itself: a new domain under Deep context, or problems folded into Group governance. Proposed:
   new, because the backstage and LiveWyer have the same problems and no governance.

## Measures

| Measure | Baseline now | Target |
|---|---|---|
| Changes needing a one-off script, backstage | 35 of 35 after the first protocol | 1 in 5 or fewer (Unit A) |
| Difference between two models' runs | not measured | measured and posted for every protocol change |
| Secretary's edits per meeting | not measured | baseline at Unit E; below it by phase 3 |
| Flags kept by the secretary | about half flagged; none triaged | two thirds of shown flags kept |
| Open items with a follow-up | 17 of 18 in the one test | all, enforced by a check |
| Rests-on links going up a stratum within a document | 0 in minutes and LiveWyer | 0 in the backstage |

## Risks

- **The picture is not governance.** The backstage tests stage kinds and strata, not decisions. Keep its rules
  (no decisions, no remarks about people) in its own package; do not let governance words leak in.
- **Over-declaring.** Seven new stage kinds may be five. Unit A should merge any two that its replay shows to be
  the same act.
- **Privacy.** Both sources are private transcripts. Replays run outside any repository; only counts are posted.
- **One owner as every persona.** The owner is secretary, organiser and reader in all three builds. Unit E is the
  first with other readers; collect their checks there.
- **Two masters.** LTH Works keeps Loomio for decisions; the product feeds it and does not compete.
