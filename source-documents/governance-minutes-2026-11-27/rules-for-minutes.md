# Rules for minutes

Draft, 2026-11-27, from the owner's statement of that day and what the experiments in this folder showed.
Each rule says how it is held in place: by the shape of the records, by a check the tool runs, or by a
person. A rule held only by guidance to a model is marked as such, because guidance is the weakest hold.

## What minutes are

**1. Minutes show what happened in a meeting.** They record what the meeting heard, explored, agreed and
took on. They are not a transcript, a summary of the subject, or a statement of what ought to have happened.
- *Held by:* the three minute types (record, discussion, decision), one per minute.

**2. Minutes put no words in anyone's mouth.** Nothing is recorded as said, agreed or meant unless the
record of the meeting supports it. A remark is attributed to a person only when the name is needed and the
record shows who spoke. A voice is never given a name by inference.
- *Held by:* every minute points at the fragments of the transcript it rests on, and a fragment's words are
  copied by the tool, never written by a model. A check refuses a minute with no evidence.
- *Held by guidance only:* that the wording does not go beyond the fragments. A person's check is the real
  hold.

**3. What was not established is said, not filled in.** A missing name, date, owner or figure is written as
not stated and raised as an open question.
- *Held by:* open questions as records; attendance with a stated basis (said in the meeting, supplied,
  inferred).

## Context

**4. Minutes may carry context, and context is never the meeting's.** Earlier meetings, standing rules and
earlier decisions can be set beside a minute so that it is understood and not misrepresented. They are
written in a separate place from what the meeting said, and never in the meeting's voice.
- *Held by:* two fields on a minute. `minute_text` is what the meeting did. `context` is what a reader needs
  from elsewhere.
- *Held by a check:* `minute_text` may not name a record from outside the meeting. Every outside record
  named in `context` must be linked from the minute, and every such link must be named in it.

**5. Everything has a source.** What the meeting did rests on fragments of its own record. Context rests on
the record it comes from: a standing article, an earlier decision, an earlier meeting's minute or the
standing of a subject. A reader can follow either to its origin.
- *Held by:* `evidences` from fragments; `informed-by` from the minute to each outside record.

**6. The source can be withheld, not hidden.** Minutes can travel without the full transcript. The fragments
they rest on keep their words, and the file says the transcript was withheld.
- *Held by:* a tombstoned source document; the tool's check reports it.

## Decisions

**7. A meeting is one kind of session.** Decisions are also taken outside meetings: in a vote, at a desk, in
a working session. A session has people, a time and acts; a meeting is a session with a record of what was
said.
- *Held by:* the session as the clerk already models it. The package's `meeting` is to become a session with
  a transcript.

**8. A decision can be before many meetings and is finalised in one session.** A meeting that discusses a
decision *considers* it. Exactly one session finalises it. Until then it is not decided, whatever a meeting
agreed.
- *Held by:* a decision is a record of its own, not a part of any meeting's minutes. A meeting's decision
  point can say which decision it considers. One relation from one session finalises it.
- *Held by a check:* a decision in a final state has exactly one finalising session. (In srs-programme
  today: 156 ratified decisions, each ratified in exactly one session; one has none.)

**9. A minute of decision records agreement in the meeting, not a decision.** It says what the meeting
agreed, and rests on a decision point the meeting settled. Whether that agreement is a decision is for the
group's own process.
- *Held by a check:* a minute of type decision must derive from a decision point whose status is settled or
  confirms-earlier.

## The process

**10. The process drafts and flags. People decide.** It does not finalise a decision, rule on a tension
with a standing record, change the list of subjects, or mark a minute as checked. Each of those is a named
person's act in a session.
- *Held by:* those acts are not stages a model can run.

**11. How the minutes were made is part of the minutes.** Which stages ran, what ran them, what each
produced and which checks it passed travel with the document.
- *Held by:* process-step records, and the author stamped on every record.
