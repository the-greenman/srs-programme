#!/usr/bin/env node
// Check that every SemanticOps domain meets the site standard (srs-context decision d871837a,
// semanticops.com#44): /llms.txt answers 200 as text/plain with CORS *, its first `##` section is
// the canonical Get running block, byte for byte, and every link in that block resolves.
//
//   node scripts/check-sites.mjs [--json]     exit 0 when every domain passes, 1 otherwise
//
// No dependencies: Node 18+ global fetch. srs-programme#334.

const DOMAINS = [
  "semanticops.com",
  "srs.semanticops.com",
  "engine.semanticops.com",
  "skill.semanticops.com",
  "app.semanticops.com",
];

// The canonical block. Change it here and in every site's llms.txt together.
const GET_RUNNING = `## Get running

- Install the srs engine: \`curl -fsSL https://engine.semanticops.com/install.sh | sh\`
- [First five minutes](https://engine.semanticops.com/start.md): CLI, MCP server, output contract
- [SemanticOps sites](https://semanticops.com/llms.txt): every site and what it is for
`;

const TIMEOUT_MS = 15000;

/** The first `## ` section: its heading line up to the next `## ` heading, trailing blank lines dropped. */
function firstSection(text) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const start = lines.findIndex((l) => l.startsWith("## "));
  if (start < 0) return null;
  let end = lines.findIndex((l, i) => i > start && l.startsWith("## "));
  if (end < 0) end = lines.length;
  return `${lines.slice(start, end).join("\n").trimEnd()}\n`;
}

const links = [...new Set(GET_RUNNING.match(/https:\/\/[^\s)`]+/g))];
const linkResults = new Map();

/** null when the link answers 2xx or 3xx (HEAD, then GET when HEAD is refused), else the reason. */
function checkLink(url) {
  if (!linkResults.has(url)) {
    const once = (method) =>
      fetch(url, { method, redirect: "manual", signal: AbortSignal.timeout(TIMEOUT_MS) }).then((r) => r.status);
    linkResults.set(
      url,
      once("HEAD")
        .then((s) => (s >= 200 && s < 400 ? s : once("GET")))
        .then((s) => (s >= 200 && s < 400 ? null : `${url} answered ${s}`))
        .catch((e) => `${url} failed: ${e.cause?.code ?? e.message}`)
    );
  }
  return linkResults.get(url);
}

async function checkDomain(domain) {
  const url = `https://${domain}/llms.txt`;
  let res;
  try {
    res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
  } catch (e) {
    return [`${url} failed: ${e.cause?.code ?? e.message}`];
  }
  if (res.status !== 200) return [`${url} answered ${res.status}`];
  const reasons = [];
  const type = res.headers.get("content-type") ?? "";
  if (!type.startsWith("text/plain")) reasons.push(`content-type is "${type}", not text/plain`);
  const cors = res.headers.get("access-control-allow-origin");
  if (cors !== "*") reasons.push(`access-control-allow-origin is ${cors === null ? "missing" : `"${cors}"`}, not *`);
  const section = firstSection(await res.text());
  if (section !== GET_RUNNING)
    reasons.push(
      section === null
        ? "no ## section"
        : section.startsWith("## Get running\n")
          ? "the Get running block differs from the canonical copy"
          : `first ## section is "${section.split("\n")[0]}", not Get running`
    );
  else for (const r of await Promise.all(links.map(checkLink))) if (r) reasons.push(r);
  return reasons;
}

const results = await Promise.all(
  DOMAINS.map(async (domain) => {
    const reasons = await checkDomain(domain);
    return { domain, ok: reasons.length === 0, reasons };
  })
);

if (process.argv.includes("--json")) console.log(JSON.stringify(results, null, 2));
else for (const r of results) console.log(r.ok ? `✓ ${r.domain}` : `✗ ${r.domain}: ${r.reasons.join("; ")}`);
process.exitCode = results.every((r) => r.ok) ? 0 : 1;
