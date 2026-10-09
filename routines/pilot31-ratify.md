# Ratify the WG Third-party ready charter (pilot semanticops.com#31, step U6)

Owner-run. Agents never run these: the Owner role, the ratifying decision and the `delegates` edge are the
owner's act (plan decision D15). Run from the root of a fresh srs-programme worktree that contains the U4 and U5
records, with the pinned CLI.

## 1. Setup

```bash
export $(node scripts/fetch-pinned-srs.mjs)
export SRS_ACTOR='{"kind":"human","id":"<your-human-id>","name":"<your name>"}'   # placeholder: your own human actor
AFFIRMED=5e28aa7e-4b35-4474-8f62-cf8dcae1e506
GROUP_ROLE=834b61fd-6385-4e7e-8c5f-8fe65718f65c        # governance/role "WG Third-party ready" (agent testimony)
```

## 2. Create the Owner role, in Affirmed

```bash
echo '{"fieldValues":{"title":"Owner","role_holder":"<your name>","authority":"Delegates the WG Third-party ready mandate and ratifies or amends its charter.","boundary":"The whole SemanticOps programme.","source_of_authority":"Project owner","status":"active"}}' \
 | "$SRS_CLI_PATH" record create --repo . --container $AFFIRMED --type governance/role
# note the returned instanceId as OWNER_ROLE
```

## 3. Create the ratifying decision, in Affirmed

```bash
echo '{"fieldValues":{"title":"Charter: WG Third-party ready","decision_question":"Does the owner delegate the WG Third-party ready mandate on the terms in the group role and its four standing orders?","decision_statement":"Ratified: the group role 834b61fd and its standing orders (membership and quorum, cycle and report, budget, reporting and minutes) are the mandate of the Third-party ready working group, under the SRS implementation compass. Amendments need a new owner decision.","rationale":"semanticops.com#31; compass boundaries B0-B3 from srs-programme PR pilot31-u4-compass.","owner":"<your name>","status":"active"}}' \
 | "$SRS_CLI_PATH" record create --repo . --container $AFFIRMED --type governance/decision
# note the returned instanceId as DECISION; then move it to ratified:
"$SRS_CLI_PATH" record allowed-transitions --repo . --id $DECISION
"$SRS_CLI_PATH" record transition --repo . --id $DECISION --help    # use the target-state flag shown, to: ratified
```

## 4. The delegates edge (Owner role delegates to the group role)

```bash
echo "{\"relationType\":\"delegates\",\"sourceInstanceId\":\"$OWNER_ROLE\",\"targetInstanceId\":\"$GROUP_ROLE\"}" \
 | "$SRS_CLI_PATH" relation create --repo .
```

Optionally also record that the decision rests on the group's standing orders:
`evidences` from `$DECISION` to each article (6bc0a404-2f0b-48bc-a8c6-d69b9a340015, f65ba0b9-8c5b-4312-9567-7e1b9470264d, c5a8c529-578a-4a34-bee3-3ed073305cee, 07d1594d-9f68-4b8c-b773-2a68174606e4).

## 5. Signed commit

```bash
ssh-add -l | grep -q "SHA256:vHuO6si5w3RLL4IJZofWbyvEi42WA2fYX7bM" || echo "SIGNING KEY NOT LOADED"
git add -A && git commit -m "Ratify charter: WG Third-party ready"   # plain commit; the owner's SSH signature is the mandate's provenance
```

## 6. Verify

```bash
"$SRS_CLI_PATH" repo validate --repo . --pretty                  # 0 errors
node scripts/check-programme-conformance.mjs && node scripts/check-method.mjs
"$SRS_CLI_PATH" relation list --repo . | grep '"delegates"'      # exactly one edge, Owner -> group role
git log -1 --show-signature                                      # Good "git" signature for the owner's key
```

Both new records must be createdBy kind human (check-method rejects AI-authored records in Affirmed).
