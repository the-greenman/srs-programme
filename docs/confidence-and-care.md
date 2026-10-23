<!-- Rendered from the SemanticOps programme Confidence and care policy records (container 461d1a6f-e96d-49b6-bb4a-d2076764fcc1) by the clerk's scripts/render-policy.mjs. Do not edit: change the records. -->

# Confidence and care policy

The owner's policy for how confident the programme is in a work item and how careful the work must be at that confidence. The outline is the rendered document: each axis with its grades, then the care modes, then the rules in order. Owner-maintained: agents propose changes as comments on a record, with evidence.

How to read it: every work item is graded on each axis below (the highest grade whose signals hold; none if no grade's do). The rules are then tried in order, and the first that matches chooses the care mode the work is done in. Nothing here refuses work: low confidence means more care, not no action. `clerk care --explain <repo#n>` shows the grades, signals and rule for one item.

### Placement: is the theory grounded?

Does the work answer a problem the programme has named, and how firmly? A problem need not be affirmed to count: one defined in conversation with the owner is real, and one only a synthesiser produced still counts for something. What placement never does is stop work; it sets how much care the work needs.


#### High: the problem is affirmed

**Level**: high

The owner has affirmed the problem the work answers: a human fork of it sits in Affirmed.

**Earned by any of**:
- problem.affirmed


#### Medium: the problem has a conversation behind it

**Level**: medium

The problem is still a suggestion, but it came out of a conversation: a human wrote it, or its source names the session, call or discussion it came from.

**Earned by any of**:
- problem.suggested.conversation


#### Low: an agent's suggestion, or a problem named in words

**Level**: low

Only an agent produced the problem (a synthesiser or analyst pass), or the item names its problem in words with "No affirmed problem yet:". Less confidence, not none.

**Earned by any of**:
- problem.suggested.synthesised
- answers.none-yet


### Mandate: is it planned and decided?

Is the work part of the plan, and has anyone decided how it should go? The roadmap already ranks objectives and epics; this axis credits that planning even where the theory is thin.


#### High: a ruling names the fix

**Level**: high

A recorded ruling the item cites says what to build, not only that something should be built.

**Earned by any of**:
- ruling.names-fix


#### Medium: under a ranked epic

**Level**: medium

The item sits under an epic that serves an objective the active period ranks.

**Earned by any of**:
- epic.ranked


#### Low: under an epic, not ranked

**Level**: low

The item sits under a roadmap epic whose objective is not ranked this period.

**Earned by any of**:
- epic.any


### Technical plan: is the how concrete?

Is it clear what changes, where, and how it will be tested? A concrete technical plan lets work go ahead before the domain and theory are affirmed, which is how a technical requirement fed in from the command line fits the flow.


#### High: a written technical plan

**Level**: high

The item carries a technical plan: a "## Technical plan" section, or at least three concrete steps (a checklist or numbered list) with code references or acceptance criteria. Issues already written with detailed steps carry their plan without the heading. The owner directing the work does not earn this grade on its own: agents run as the owner's actor, so the session actor cannot prove the owner is present (clerk#157 review, B1).

**Earned by any of**:
- plan.section


### Care mode: Build

Work as normal: claim, build, pass every gate. Merge follows the PR's own decision mode and door.

**Must**:
- pass every gate by exit code
- state the placement basis in the PR

**Merge gate at least**: auto-merge


### Care mode: Careful

Do the work, but the smallest reversible version of it, and say what you assumed. Never stop to wait for an answer: ask it in the PR, and let the merge wait instead.

**Must**:
- build the smallest reversible slice
- write an assumptions block in the PR
- put open questions as blocks: merge asks
- label the PR gate:owner-merge

**Merge gate at least**: owner-merge


### Care mode: Probe

Find out before changing behaviour: reproduce the problem, write a failing test, spike it, or write the missing technical plan or placement as a proposal. A probe is real work; it is how the next run reaches a higher mode.

**Must**:
- change no behaviour that merges without the owner
- leave a written result: a reproduction, test, spike or proposal
- suggest a placement or technical plan for the item

**Merge gate at least**: owner-merge


### Rule 1: a clear plan on grounded or owner-directed work builds

**When all of**:
- technical_plan>=high

**And at least one of**:
- placement>=medium
- signal:owner.directed

A concrete technical plan is enough to build once the theory has a conversation behind it, or when the owner is driving the work. The theory can be affirmed afterwards.

**Selects**: Care mode: Build


### Rule 2: affirmed theory and a ruling that names the fix build

**When all of**:
- placement>=high
- mandate>=high

Nothing is left to guess: the problem is affirmed and the fix is decided.

**Selects**: Care mode: Build


### Rule 3: a clear plan on thin theory is careful

**When all of**:
- technical_plan>=high

The how is clear but the why rests on an agent's suggestion alone: build it reversibly and let the owner merge.

**Selects**: Care mode: Careful


### Rule 4: grounded, planned work without a technical plan is careful

**When all of**:
- placement>=medium
- mandate>=medium

The work belongs in the plan and its problem has a conversation behind it, but the how is open: take the smallest reversible step and ask.

**Selects**: Care mode: Careful


### Rule 5: everything else is a probe

No item is refused for lack of confidence. When nothing above holds, the work is to find out.

**Selects**: Care mode: Probe


### Medium: the owner is directing

**Level**: medium

The session actor is the owner's (owner.directed), as in a command-line session. It counts for something, but not for a plan: agent sessions also run as the owner's actor, so it can raise care from Probe only together with other signals, and never reaches Build without a written technical plan.

**Earned by any of**:
- owner.directed


### Domain: do we know where it belongs?

How sure the programme is of the domain the item belongs to, and so of the group that holds it. Domain confidence does not select a care mode in this seed; it ranks strong items for pulling forward and tells routing how sure the placement is. A rule may name it, as domain>=<level>, once practice shows it should.


### High: the domain comes from affirmed theory

**Level**: high

The item answers an affirmed problem held by a persona in a domain.

**Earned by any of**:
- domain.affirmed-problem


### Medium: placed with a group, or theory not yet affirmed

**Level**: medium

The item carries the wg: label of a group that holds a domain, or answers a suggested problem held by a persona in a domain.

**Earned by any of**:
- domain.group-label
- domain.suggested-problem


### Low: inferred from the repository

**Level**: low

The repository is governed by a group that holds a domain. When more than one group governs it, the repository suggests a domain but cannot say which; both count as low.

**Earned by any of**:
- domain.repo-one-group
- domain.repo-shared

### Signal catalogue

The signals a grade or rule may name. Their meaning is the clerk's code (lib/practice/care-policy.mjs); which grade or rule they feed is the records above. A record naming a signal not listed here stops the clerk.

- `problem.affirmed`: The item answers a problem the owner has affirmed (a human fork in Affirmed).
- `problem.suggested.conversation`: The item answers a suggested problem with a conversation behind it: written by a human, or its source_ref names a conversation, session, discussion or call.
- `problem.suggested.synthesised`: The item answers a suggested problem that only an agent produced (a synthesiser or analyst, no conversation basis).
- `answers.none-yet`: The item says "No affirmed problem yet: <problem>": it names its problem in words, with no record yet.
- `answers.stated` (not used by this policy): The item has an Answers: or "No affirmed problem yet:" line at all.
- `domain.affirmed-problem`: The item answers an affirmed problem held by a persona in a domain: the domain comes from affirmed theory.
- `domain.suggested-problem`: The item answers a suggested problem held by a persona in a domain: the domain comes from theory not yet affirmed.
- `domain.group-label`: The item carries the wg: label of a working group that holds a domain: someone has placed it with that group.
- `domain.repo-one-group`: The item's repository is governed by exactly one working group that holds a domain: the domain is inferred from where the item lives.
- `domain.repo-shared`: The item's repository is governed by more than one working group that holds a domain: the repository suggests a domain but cannot say which.
- `epic.ranked`: The item sits under an epic that serves an objective the active period ranks.
- `epic.any`: The item sits under a roadmap epic, ranked or not.
- `ruling.names-fix`: The item cites a recorded ruling (a "Ruling:" line naming a decision record id) and says what that ruling has it build (a "Fix:" line).
- `plan.section`: The item carries a technical plan: a "## Technical plan" section with content, or at least three steps (a checklist or numbered list) with code references or acceptance criteria.
- `owner.directed`: The owner is driving this work directly: the session actor (SRS_ACTOR) is the settings owner_actor, as in a command-line session.

### Changing the policy

The owner changes the records, with the pinned srs CLI, the MCP server or the editor; a change that alters how workers behave is recorded as a decision in a session. Agents never edit these records: they propose a change as a comment on the record (com.semanticops.comments, comments-on), with the evidence, such as which items a rule sent to which mode and how they went. Then run `clerk render-policy --repo <programme>` and commit the records and this file together.
