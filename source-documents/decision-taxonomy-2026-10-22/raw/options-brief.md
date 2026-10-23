Rate the OPTIONS of decisions on three T3 axes. Read-only analysis: modify no repository; write only the one output file named below.

Input: /tmp/claude-1000/-home-greenman-dev-semanticops/cd720b9c-b095-4533-869c-fa31697291a9/scratchpad/options-input.md. Each entry is one decision: its chosen statement and the alternatives it recorded. `s:` = SRS specification (a data standard); `p:` = the programme that runs the work.

Step 1, list the options. For each decision, list every distinct course of action: the chosen one (option 1) and each recorded alternative, including "do nothing" or "leave as is" only where the record names it. Merge alternatives that are the same course in different words. Keep each option's label under 12 words.

Step 2, rate each option on the three lines, in the owner's definitions. Read each option as if it were the one selected, within the decision's own system boundary, against the state before the decision.

- Line 1. A (Act): applies will outward on the world beyond the system's boundary; the effect lands on others (users, third parties, other repositories, consumers, the public). O (Observe): lets energy in to change the system's own inner reality: its model, rules, ways of working, understanding. Inward is not passive.
- Line 2. D (Disrupt): adds energy to change the system's state; it must pass through a change (introduce, remove, replace, migrate, restructure). S (Stabilise): lets the system settle; keeps, confirms, protects, defers.
- Line 3. F (Focus): a closed boundary; the direction is under our will; executing a plan. Z (Zoom out): opens the boundary to align with what is outside; sensing and responding (waits for evidence, use, a trigger; experiments; tolerates what it does not control). Not about breadth of subject.

Confidence per option: the lowest of its three lines (2 clear, 1 leaning, 0 cannot tell).

Output: a TSV at OUTPUT_PATH, header and exactly these columns:
id	option	chosen	label	line1	line2	line3	conf
`option` is 1, 2, 3...; `chosen` is y for the selected option, n otherwise; line values are single letters (A/O, D/S, F/Z). One row per option, every decision in the input.

Reply with: decisions rated, total options, how many decisions have all options on the same three letters, and up to five observations with ids. Under 200 words.
