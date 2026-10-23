Rate each of 101 decisions on ONE axis only: Line 2 of a T3 trigram (the middle line). This is read-only analysis: do not modify any repository; write only the one output file named below.

Input: /tmp/claude-1000/-home-greenman-dev-semanticops/cd720b9c-b095-4533-869c-fa31697291a9/scratchpad/decisions101.md. `s:` ids are decisions of the SRS specification (a data standard); `p:` ids are decisions of the programme that runs the work (humans and AI agents). Read every one in full.

The axis, in the owner's words: "Is the option we are selecting moving the system towards a transformative energy state, are we adding energy to change states, or are we allowing the system to stabilise?"

- D (Disrupt / transform): the selected option adds energy to change the system's state. It moves the system into transformation: something is introduced, removed, replaced, renamed, migrated, restructured or reversed, and the system must pass through a change to get there. This holds even when the end goal is a steadier system: if getting there takes added energy and a change of state, it is D.
- S (Stabilise): the selected option lets the system settle. It keeps, confirms, deepens or protects the current state, holds a contract, defers change, or lets energy dissipate rather than adding it.

How to rate:
1. Name the system first (the decision's own context, e.g. "the SRS standard", "the programme", "the clerk tool"). Do not widen it.
2. Compare the selected option with the state before the decision (and with the alternatives, where the decision names them). Does choosing it add energy to change state (D), or let the system settle (S)?
3. Confidence: 2 clear, 1 leaning, 0 cannot tell (still pick the nearer pole).
4. Reason: at most 15 words.

Output: a TSV at OUTPUT_PATH with header and exactly these columns:
id	system	line2	conf	reason
One row per decision, all 101, ids exactly as in the input.

Reply with the row count, the D/S counts, and up to five observations about cases that were hard, with ids. Under 200 words.
