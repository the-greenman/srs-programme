// Reads ./roadmap.json (output of `node scripts/roadmap.mjs --json`). All semantics are derived there; this file only presents.
export const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
export const issueUrl = (ref) => { const [repo, n] = ref.split("#"); return `https://github.com/the-greenman/${repo}/issues/${n}`; };
const epicLink = (e) => `<li><a href="${esc(issueUrl(e.ref))}" target="_blank" rel="noreferrer">${esc(e.title)}</a> <span class="muted">${esc(e.ref)}</span></li>`;

export function focusView(r) {
  const { activePeriod: p, objectives, epics } = r;
  const cols = objectives.filter((o) => o.rank != null).map((o) => {
    const mine = epics.filter((e) => e.objective === o.title && !e.parked);
    return `<section class="col"><h3><span class="chip ${o.tier}">${o.tier}</span>${esc(o.title)}</h3>
      <ul class="epics">${mine.map(epicLink).join("") || '<li class="muted">No epics yet.</li>'}</ul></section>`;
  }).join("");
  const parked = epics.filter((e) => e.parked);
  return `<h2>${esc(p.title)}</h2><p class="muted">${esc(p.starts_on)} to ${esc(p.ends_on ?? "open-ended")}</p>
    <div class="cols">${cols}<section class="col"><h3>Parked</h3><p class="muted">Not serving a ranked objective this period.</p>
    <ul class="epics">${parked.map(epicLink).join("") || '<li class="muted">Nothing parked.</li>'}</ul></section></div>`;
}

export const SNAPSHOT_TABS = [["boundaries", "Release boundaries"], ["stages", "Capability stages"], ["contracts", "Contracts"], ["assessments", "Evidence"]];

export function snapshotView(r, tab) {
  const items = r.snapshot[tab] ?? [];
  return `<div class="banner">Parked snapshot (v12). Kept as it was migrated; it is not the current plan.</div><div class="grid">${items.map((i) => `
    <article class="card"><h3>${esc(i.key)}: ${esc(i.title)}</h3>
      ${i.reality_state || i.stability ? `<p><span class="chip">${esc(i.reality_state || i.stability)}</span></p>` : ""}
      <p>${esc(i.summary)}</p>
      ${i.links.length ? `<p class="muted">${i.links.map((l) => `${esc(l.type)} ${esc(l.to)}`).join(", ")}</p>` : ""}
      <details><summary>Details</summary><pre>${esc(i.body)}</pre>${(i.evidence ?? []).length ? `<ul>${i.evidence.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>` : ""}</details>
    </article>`).join("")}</div>`;
}

export function page(r, view) {
  const tabs = [["focus", "Focus"], ...SNAPSHOT_TABS.map(([k, l]) => [k, `Parked snapshot: ${l}`])];
  return `<h1>SemanticOps roadmap</h1>
    <nav aria-label="Views">${tabs.map(([k, l]) => `<button type="button" data-view="${k}" aria-selected="${k === view}">${esc(l)}</button>`).join("")}</nav>
    ${view === "focus" ? focusView(r) : snapshotView(r, view)}`;
}

if (typeof document !== "undefined") {
  const app = document.querySelector("#app");
  const view = () => location.hash.slice(1) || "focus";
  try {
    const r = await (await fetch("./roadmap.json")).json();
    const draw = () => { app.innerHTML = page(r, view()); };
    app.addEventListener("click", (e) => { const b = e.target.closest("[data-view]"); if (b) location.hash = b.dataset.view; });
    addEventListener("hashchange", draw);
    draw();
  } catch (err) {
    app.innerHTML = `<h1>Roadmap data could not load</h1><p>${esc(err.message)}. Generate it with <code>node scripts/roadmap.mjs --json &gt; roadmap/roadmap.json</code> and serve the roadmap directory over HTTP.</p>`;
  }
}
