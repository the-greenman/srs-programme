# SRS Minutes: a first governance product

Project definition, 2026-11-27. Written from the experiments recorded in srs-programme Research
("Minutes with provenance", "SRS carriers", "Protocol evolution") and the code in srs-lab `minutes/`.

## The product

A small governed group (a board, a committee, a working group) gives it the recording or transcript of a
meeting. It gets back minutes that its secretary checks and its members can trust:

- every minute, decision and task cites the lines of the transcript it rests on;
- every point where something was, or could have been, decided is listed with its status;
- each such point is checked against the group's own rules and earlier decisions, and where it strains one,
  the page says which and why;
- topics hang from subjects that persist, so a matter can be followed from meeting to meeting;
- the result is a file the group owns: a PDF anyone can read, carrying the full record for anyone who
  wants to check it.

It drafts and flags. It never decides, never guesses a name, a date or an owner, and says what it could not
establish. The group's own decision process stays the master.

The first group is LTH Works, whose secretary is the owner of this programme.

## What we know (2026-11-27)

| Question | What was run | Result |
|---|---|---|
| Can a Blueprint and Protocol lead a transcript to minutes? | Two real meetings, 10 stages, one generic runner | Yes. All checks pass. Covers the hand-written minutes and adds what they left out. |
| Can the process be handed over? | One bundle file installed into empty repositories | Yes for the definitions. The runner's conventions are outside the package. |
| Can one runner drive other processes? | The governance decision protocol (9 stages, one record); a synthesis protocol on LiveWyer Insight (417 findings) | Yes for both, with no change to their packages. Not for per-item repetition, computed fields or human gates. |
| Can it bring the group's memory to a meeting? | 12-stage protocol in a master repository with 25 real articles, roles and decisions | Yes. 89 checks over two meetings, including the real issue (a job over the spending limit). About half are flagged "in tension": too many without triage. |
| Can a matter be followed across meetings? | Persistent subjects, two meetings | Partly. 4 of 12 subjects span both meetings; 2 matters split across subjects because the first meeting shaped the list. Subjects need curating. |
| Will memory scale? | 173 real decisions; lexical search against 25 hand-made links | Not by search alone: the related decision is in the top five about half the time. |
| Do full minutes bloat the master? | Sizes and timings | Not in capacity: a year of meetings is the size of repositories that validate in 0.4 s. In noise, yes: 52% of records are working detail and they crowd search results unless filtered by type. |
| Can the working detail live outside the master? | A third real meeting run in a copy of the master, outcomes merged back | Yes. A separate repository cannot be merged in; a working copy of the master can. The master grew by 129 records, not 249. |
| Can a draft decision be built from the minutes? | The governance decision protocol on one decision point | Yes. It matches the decision the group really took the next day, and raises the limit that decision had to deal with. |

## Design positions the evidence supports

**1. Two layers of record, one repository identity.** The outcome layer (meeting, attendance, minutes,
decisions, tasks, references, subjects, and the precedent checks a person has accepted) belongs in the
group's master repository, where it is institutional memory. The working layer (fragments, decision points,
open questions, process steps, the transcript) is what makes the minutes checkable; it is half the records
and most of the search noise. Work a meeting in a copy of the master, merge the outcome layer back, and keep
the whole meeting as a file attached to its meeting record. Tested with a third real meeting: 129 outcome
records merged back, 120 working records stayed in the 684 KB meeting file, and the master validates.
Decision points belong in the outcome layer: left behind, they take the precedent checks' links with them.

**2. Memory is an index, not a search.** A stage that needs earlier decisions should be given them through
subjects and the relation graph, or by a first pass that reads titles and picks what to read in full. Text
search is the fallback.

**3. Flags are for a person.** A precedent check produces "in tension" freely and "contradicts" never. That is
the right posture, but it means a triage step: the secretary keeps, dismisses or escalates each flag, and
only kept flags go on the page.

**4. A decision record is its own protocol.** The minutes protocol finds decision points. For each one the
group takes up, the decision protocol builds the record. That is the path from a meeting to the decision
register, and it is where the governance package needs to grow (no field today for what a decision rules
out, for declared interests, for the group's own number, or for its subject).

**5. The transcript does not have to travel.** The minutes file validates with the transcript withheld and
the evidence fragments intact. That should be the default export.

## The project

Three phases. Each ends with something the group uses, and each names the spec work it depends on, so the
standard moves because a consumer needs it.

### Phase 1: minutes from last night's meeting

*The group can:* hand over a transcript and, after the secretary's check, circulate minutes as a PDF that
carries its record.

- **Package** `minutes` 1.0: the two protocols, with subjects made optional and curated.
- **Tool**: the runner made a supported command (its home to be decided: the engine, the clerk, or its own
  package), plus the secretary's check as a real step: accept, edit or strike each minute; keep or dismiss
  each flag.
- **Repository**: the group's master, loaded from its existing records. For LTH Works that means a bridge
  from Loomio and the vault, one way, with Loomio staying the master for decisions.
- **Spec and engine**: the Tier 1 changes (stage mode, the links a stage writes, which end a requirement
  binds, what a stage reads, an anchor on source references, an explicit Blueprint reference, a `meta`
  carrier) and the filed bugs (srs-rust#1711 to #1714, srs#1053, srs#1054).
- **Done when**: three consecutive meetings have gone through it; the members' minutes check passes; and the
  secretary's changes are counted (items edited, struck, added) so the next phase has a baseline.

### Phase 2: minutes with memory

*The group can:* see, on the page, what each decision point relies on or strains; follow a subject across
a year; and move a decision point into a draft decision in its own format.

- **Package**: governance 2.0 (the missing decision fields, a subject link, a relation for tension between
  records) and the decision protocol run per decision point.
- **Tool**: working copy, merge of the outcome layer, the meeting file attached; subject curation; flag
  triage feeding back as examples.
- **Spec and engine**: Tier 2. A specified protocol run that travels; checkable completion; records under
  construction; gate stages; sub-runs; persistent and standing scope.
- **Done when**: a trustee can read one subject's history across at least four meetings and the decisions
  under it; and at least two thirds of the flags the secretary is shown are ones they keep.

### Phase 3: in the room

*The group can:* have the draft ready when the meeting ends, with flags raised while there is still time
to settle them.

- Live transcription and the local detector (already working in `transcribe/` and `local-lab/`) feeding
  provisional observations; a frontier model writing only what was flagged (decision 24ed7a61).
- People as records, with consent before a voice is named.
- **Spec**: Tier 3. Live protocols and the attention cursor; context assembly as a specified strategy.
- **Done when**: one real meeting ends with minutes its secretary edits less than the Phase 1 baseline.

### Running through all three: the lab

The lab keeps the evaluation honest: the same meetings re-run when the package or model changes, variance
across runs, a second model (including the local ones), and the comparison with what the secretary finally
approved. Nothing here has yet measured variance.

## What this needs from the standard, in order

1. One RFC for the Tier 1 stage contract. Small, additive, and it moves the runner's conventions into the
   package, which is what makes the process truly portable.
2. The protocol run, specified (the ruling that deferred it named a decision log as the consumer that would
   settle it; this is that consumer).
3. Gates and records under construction, together: both are about a record a person has not yet accepted.
4. Scope and composition: persistent types, standing records, sub-runs, `extends`.
5. Later, and beyond the Protocol: context assembly, tension between records, live protocols, people.

## Risks

- **Over-flagging** makes the precedent check ignorable. Mitigation: triage from the first use, and count.
- **Caution**: the process records fewer decisions than the people in the room. That is the safe direction,
  but the secretary must be able to promote a decision point in one step.
- **One model, one run.** No variance measured; quality claims rest on a reading, not a score.
- **Privacy.** Transcripts hold more than business. The withheld-transcript export and the off-the-record
  topic are the first controls, not the last.
- **Subject drift.** A subject list left to the process fragments. It needs an owner.
- **Two masters.** Where a group already has a decision record (Loomio), the product must feed it, not
  compete with it.

## First steps

1. Rule on where the runner lives and who owns the minutes package.
2. File the Tier 1 RFC from the nine things the runner supplies.
3. Minute the next LTH Works meeting through Phase 1 as it stands, with the secretary's edits counted.
4. Decide the governance 2.0 fields with LTH Works' eight-part decision format as the test case.
