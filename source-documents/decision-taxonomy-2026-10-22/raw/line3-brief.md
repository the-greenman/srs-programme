Rate each of 101 decisions on ONE axis only: Line 3 of a T3 trigram (the top line). This is read-only analysis: do not modify any repository; write only the one output file named below.

Input: /tmp/claude-1000/-home-greenman-dev-semanticops/cd720b9c-b095-4533-869c-fa31697291a9/scratchpad/decisions101.md. `s:` ids are decisions of the SRS specification (a data standard); `p:` ids are decisions of the programme that runs the work (humans and AI agents). Read every one in full.

The axis, in the owner's words: "Are we focusing our energy, concentrating on a specific plan? Is the direction of the system we are focusing on under our will or control? Or are we opening the boundary to align with the energy state outside? Are we executing a project plan, or are we sensing and responding?"

- F (Focus / concentrate): the selected option holds the system's direction under our own will or control. It fixes a course, a design or a plan and executes it: the shape is decided here, by us, and the system is steered to it.
- Z (Zoom out / distribute): the selected option opens the boundary so the system aligns with the energy outside it. It senses and responds: it waits for evidence, a trigger, a consumer or practice to show the way; it lets outside conditions, users or experience set the direction; it keeps options open, experiments, or tolerates what it does not control.

This axis is NOT about how broad or narrow the subject is. A decision about one small thing can be sense-and-respond; a system-wide decision can be a fixed plan.

How to rate:
1. Name the system first (the decision's own context). Do not widen it.
2. Ask of the selected option: does it set the direction by our will (F), or does it open the system to be shaped by what comes from outside (Z)?
3. Confidence: 2 clear, 1 leaning, 0 cannot tell (still pick the nearer pole).
4. Reason: at most 15 words.

Output: a TSV at OUTPUT_PATH with header and exactly these columns:
id	system	line3	conf	reason
One row per decision, all 101, ids exactly as in the input.

Reply with the row count, the F/Z counts, and up to five observations about cases that were hard, with ids. Under 200 words.
