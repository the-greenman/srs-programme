# Topics through time: the update, and where each change belongs

Design note, 2026-11-27. Follows "SRS Minutes: a first governance product" and "How the Protocol definition
needs to evolve". Evidence: the second-meeting pass on a working group's real October and November
meetings (srs-lab `minutes/`, package 0.3, protocol `meeting-update`).

## The problem the second meeting showed

The October meeting left 10 decision points open and 8 tasks. The November meeting was minuted with no
relation to any of them. Its records pointed at the same subjects, and that was all. Four of its minutes
said "still" or "again", and nothing connected them to what they continued. A second meeting was being
processed as if it were the first.

## What "growing through time" is

Four things, each a record a person can read and correct:

| | What it is | Lives |
|---|---|---|
| **Subject** | A matter the group returns to. Stable identity, few of them, owned by a person. | In the repository, outside any meeting |
| **Topic** | That matter as one meeting dealt with it. About one subject, or none. | In the meeting |
| **Follow-up** | What a later meeting did to one item an earlier meeting left open: resolved, progressed, unchanged, overtaken, not mentioned. | In the later meeting, pointing at the earlier item |
| **Standing** | Where a subject stands after a meeting: the position, what changed, what is still open. Each replaces the last. | In the meeting, in a chain per subject |

And one act: **curation**. The process proposes changes to the subject list (merge, split, rename, retire,
move a topic). A person accepts or declines. The process never reshapes the list alone.

## What the pass produced

Run after each meeting's minutes, in the master holding both meetings:

- **November: 17 follow-ups** on October's 18 open items. 4 progressed, each with the transcript lines that
  show it. 13 not mentioned: floor plans, the architect, the admin role, the board, the room lets, the yard.
  That list of business quietly dropped is something hand-written minutes do not give.
- **8 standings**, 3 of them replacing an October standing.
- **2 proposals at each meeting, both correct**: the two topics the first meeting had filed under the wrong
  subject. Once a person accepted them, the fire escape read as one thread across both meetings.

Three limits:

- One open item got no follow-up, and nothing could enforce it. "Every open item from earlier meetings has
  exactly one follow-up" is a check across documents.
- A misfiled topic breaks the chain: the fire escape standing had no predecessor until the proposal was
  accepted. **Curation has to come before memory**, so the order is: minutes, check, curate, then update.
- The thread across meetings had to be printed by a script. A composition renders one container and
  cannot follow a subject through several.

## The levels

One test per level decides where a change goes.

| Level | Holds | Test |
|---|---|---|
| **Spec** | Shapes and invariants that any two tools must agree on to exchange a repository. No governance words. | Would two implementations disagree about the file without it? |
| **Engine** | Generic mechanics over those shapes, the same for every package. No model calls. | Would it work unchanged for the LiveWyer report? |
| **Package** | The governance vocabulary as definitions: types, lifecycles, relations, the stages and their guidance. Data, distributed as a bundle. | Is it a word a group would use? |
| **Processor** (the clerk) | Judgement, policy and the outside world: which model, when to run, who may accept, what to merge, the group's own master. | Does it depend on who the group is, or on a person's act? |

The package and the processor both belong to the clerk today (`packages/`, `lib/practice`, `lib/adapters`).
They are separated here because the package travels and the processor does not.

## Where each change goes

| What the feature needs | Spec | Engine | Package | Processor |
|---|---|---|---|---|
| **A series**: meetings in order | Nothing new if a parent container lists the meetings (`childContainerIds`) and the order is a field of the root record. Say so once, as a convention. | Resolve "earlier documents of this series" as a scope. | `meeting.meeting_date`; a Meetings container. | |
| **A stage reads earlier meetings** | `ProtocolStage.reads`, with a scope: this document, the series before it, the repository. (Tier 1.) | Assemble what the stage is given. | Which types the update reads. | Choose among them when there are too many (subjects first, then search). |
| **Subjects outlive a meeting** | A type's records can be scoped to the repository, not the document. (Tier 2, small.) | Put such records in their registry; show them to every run. | `subject`. | |
| **Open business** | Already there: lifecycle states and the discovery filter on them. | Already there (`find --lifecycle-state open`, tested). | Give `decision_point` and `task` a lifecycle (open, closed, overtaken) in place of a status field. | Move the state when a person accepts a follow-up as resolved. |
| **Nothing left open is dropped** | A completion check that can name a scope and a lifecycle state: every open X in the series has a Y. (Tier 2.) | Run the check; refuse a stage that fails it. | The check on the follow-up stage. | |
| **A standing replaces the last** | Already there: `supersedes`, and a lifecycle state that requires it. | Already there (`record successor`, tested). It leaves the old record's state unchanged: one more call, or a fix. | `subject_state` with a lifecycle (current, superseded). | |
| **Curation** | A gate stage: its outcome is a person's act. (Tier 2.) A lifecycle on the proposal (proposed, accepted, declined) is already expressible. | Nothing special. Moving a topic is one relation removed and one made. | `subject_proposal`, its kinds. | The act itself, as a clerk session act (accept, set aside), by a named role; then re-run the standings the move affects. |
| **The thread across meetings** | A composition section that follows relations out of its container (the graph thread's one-hop selection and bounded walk). (Tier 3.) | Render it. | A `subject-thread` composition. | Until then, print it (as the lab does). |
| **Tension with standing records** | Nothing. | Nothing. | A relation "in tension with" in governance 2.0; a lifecycle on the check (flagged, kept, dismissed). | Triage as a session act; count what is kept. |
| **The order of the work** | Sub-runs, or "this protocol follows that one". (Tier 2.) | Record the runs so they travel. | Three protocols: minutes, update, decision. | Orchestrate: minutes, the secretary's check, curation, update, merge. |
| **Briefs and model calls** | Nothing. | A stage brief that covers every type the stage touches (srs-rust#1714). | The guidance. | The model, the retries, the cost, the identity stamped on what it writes. |
| **Outcome and working layers** | A type can be marked as working detail. (Tier 2, small; needs a ruling.) | Merge or slice by that mark. | Which types are which. | What to merge into the master and when; attach the meeting file. |
| **The group's own master** | Nothing. | Nothing. | Nothing. | An adapter (for the first group, Loomio and the vault), one way. |
| **Withholding the transcript** | Already there (a tombstoned source document). | An export option that withholds a named source. | | The default, per group. |

## What this says

- **Most of "growing through time" needs no new spec.** Lifecycles, `supersedes`, successors, child
  containers and the lifecycle filter already carry open business, standings and the series. The prototype
  used plain fields where a lifecycle belongs; the package should change, not the spec.
- **The spec changes it does need are three.** A stage's `reads` with a scope; a repository scope for a
  type; a completion check that can name a scope and a state. The first is Tier 1. The other two are small
  parts of Tier 2 and can be designed from this one use.
- **The engine's share is scope and checks.** It resolves "the series before this document" and "the
  repository", and it runs declared checks. It never calls a model and never knows what a subject is.
- **Everything a person does is the processor's.** Accepting a minute, keeping a flag, accepting a
  proposal, promoting a decision point: these are clerk session acts, which already record who acted, when
  and in what order. The clerk's `session` and the package's `meeting` should become one thing.
- **The runner belongs in the clerk**, split the way the clerk already splits: the pure part (build a brief
  from definitions, check a reply) in `lib/practice`; the srs CLI and the model in `lib/adapters`; the
  minutes package in `packages/`.

## Order of work

1. Package: lifecycles on `decision_point`, `task`, `subject_state`, `subject_proposal`, `precedent`; topics
   may have no subject. No spec or engine change needed. Re-run the two meetings.
2. Clerk: move the runner in; make the secretary's check and curation session acts; orchestrate the five
   steps for one meeting.
3. Spec, one RFC: `reads` with scope, alongside the rest of the Tier 1 stage contract.
4. Engine: series and repository scope; the brief (#1714); runs that travel (#1711).
5. Spec, second RFC: repository-scoped types and scoped completion checks, written from what steps 1 to 4
   needed.
6. The thread composition, with the graph work.
