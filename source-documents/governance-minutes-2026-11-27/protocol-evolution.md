# How the Protocol definition needs to evolve

Evidence: experiments of 2026-11-27 on three different processes, all driven by one generic runner
(srs-lab `minutes/runner.mjs`): meeting minutes (two real meetings, then both again inside a master
repository with governance records), the LiveWyer Insight report (417 real findings clustered into problems,
then opportunities), and the governance decision protocol (nine stages filling one record).

## What a stage is

A Protocol stage today can do two things: write records of one type (`outputType`), or fill named fields
(`contributesTo`). The four processes need eight kinds of act:

| Kind | What it does | Seen in | Today |
|---|---|---|---|
| extract | writes records of one type from a source | minutes (most stages), findings | expressible |
| update | fills fields on records an earlier stage made | categorise | expressible, but only implied by position |
| target | fills fields of the one record the run is building | governance decision protocol | expressible (the original design) |
| synthesise | writes records that group or judge earlier ones, with links both ways | problems from findings; precedent checks | expressible: one type plus incoming links |
| for-each | repeats a stage, or a whole sub-protocol, per item | per talk; a decision protocol per decision point | not expressible |
| compute | derives values from the graph with no judgement: counts, signal, rank, render | LiveWyer signal and ranking; publish | not expressible |
| gate | a person accepts, rejects or promotes before the run goes on | triage of flagged decisions; affirmation; the secretary's check | not expressible |
| live | works on a source that is still arriving | decision-logger's context cursor; the live detector | not expressible |

## Tier 1: fits the spec as it stands

Additive, optional properties and fixes. No existing definition changes meaning. Each could be one small RFC,
or one RFC for the set.

1. **`ProtocolStage.mode`**: `extract | update | target | compute | gate`. Today the runner infers the first
   three from position and from which of `outputType` and `contributesTo` is present.
2. **`ProtocolStage.writes`**: the relations a stage writes, as references to the Blueprint's relation specs.
   Today the runner offers a link when the other end already exists.
3. **`RelationSpec.requiredOf`** (`source | target`) and **`RelationSpec.label`**. `required` does not say which
   end it binds; its description is copied from the field text.
4. **`ProtocolStage.reads`**: what a stage is given: the source document, notes by tag (house rules, supplied
   facts), record types and their scope (this document, the repository).
5. **More than one output type**, and a named **uncertainty type** (open questions), so a stage can say what it
   could not establish.
6. **An anchor on `SourceReference`** (problem-index P-EV-04), or bless the convention already in use in three
   places: a fragment identifier in `sourceId` (`#t=` for WebVTT, `#chars=`, RFC 5147 `#line=`).
7. **`Protocol.blueprintRef`**. The engine binds a Protocol to a Blueprint by `targetType` = a root type; two
   Protocols for one root type (minutes, governance-minutes) cannot both be found that way.
8. **A `meta` carrier on definitions.** Every Protocol schema is closed (`additionalProperties: false` at all
   four levels), so nothing can be tried inside a definition before it is specified.
9. **Fixes already filed**: srs#1054 (a loose Protocol cannot be created), srs-rust#1711 (runs do not travel),
   #1712 (advance unchecked), #1713 (dates unvalidated), #1714 (brief covers only the root type), srs#1053
   (source-document checksum).

## Tier 2: needs design, but stays inside ext:protocol

1. **ProtocolRun as a specified entity.** The spec has no run shape; a standing ruling (rfc-decision-4f1e12e5)
   left run semantics "designed at consumer time". A run needs: what each stage produced, who or what ran
   it, the checks it passed, and a place in the repository layout so it travels. The prototype keeps this as
   `process_step` records.
2. **Checkable completion.** `completionCriteria` is prose. A small closed vocabulary of checks would cover
   everything the three processes needed: covers-the-source, max-span, every-X-has-a-Y, at-least-N.
3. **Records that are not finished yet.** A required field is checked when a record is created, but a tight
   Protocol fills fields one stage at a time (the governance decision needs `decision_statement`, written at
   stage 6 of 9), and a computed field (LiveWyer `signal`) is not the model's to write. Needs a notion of a
   record under construction.
4. **Gate stages.** A stage whose act is a person's: accept, reject, promote, with the result as a lifecycle
   transition on earlier records, and a way back to an earlier stage.
5. **Compute stages.** Declared derivations a tool runs. When a model was asked to write LiveWyer's `signal`
   it marked all eleven opportunities "strong".
6. **Composition.** No `extends` or `include`: governance-minutes repeats all ten minutes stages to add two.
   And no sub-run: "run the decision protocol for each settled decision point" is a chain the spec describes
   only as a non-normative example.
7. **Scope.** A stage writes into one container. Subjects that persist across meetings, and standing records
   it must read but never write, sit outside it. The prototype declares persistent types in a profile note
   and derives standing ones (types from another package).

## Tier 3: deeper challenges, wider than the Protocol

1. **Context assembly at scale.** LTH's 25 standing records fit in every brief. srs-programme's 173 decisions
   are 414 KB. Lexical `find` put a decision's known related decision in its first five 52 to 56 per cent of
   the time (25 hand-made links as ground truth). Institutional memory needs an index that is not text
   search: subjects, the relation graph, or a select-then-read pass over titles.
2. **What "contradicts" means.** No relation type says it (srs-programme invented `set-against`); nothing says
   who rules on a flagged tension or what it does to either record's lifecycle.
3. **Provenance across repositories.** Cross-repository relations went with federation. `repo merge` works
   only between copies of one repository. A decision promoted into a master cannot point back into a
   separate meeting file except through an attachment.
4. **Live protocols.** A source that is still arriving, provisional observations that later windows refine,
   a cursor (AttentionState) that tags material as it is produced. Everything tested here is after the event.
5. **People.** No participant entity; speakers are free text and must not be inferred from a voice.
6. **Re-running a stage.** A model stage is not deterministic. Nothing defines what re-running a stage does to
   the records the first run made, or to what later stages built on them.
7. **Withholding as an export.** A transcript can be tombstoned by hand; there is no operation that produces
   "the minutes with their evidence, without the conversation".
