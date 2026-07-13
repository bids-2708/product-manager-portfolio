export const CC = {
  hero: { title: "Creative Compliance", subtitle: "Shipping Agentic AI into Enterprise Ad Operations", company: "DaVinci Commerce", duration: "Dec 2024 – Present", role: "Senior Product Manager, end-to-end ownership" },
  problem: {
    context: "Every ad creative running on a retail media network must comply with three overlapping sets of rules — the media platform's specs, the retailer's guidelines, and the brand's own standards. In a market projected to exceed ~$70B in U.S. spend alone, this compliance step is still largely manual.",
    painPoints: [
      { icon: "💰", title: "High manual cost", detail: "~$50–$100 per creative in human review costs. A client running 60 campaigns/month with 10–30 creatives each burns hundreds of thousands annually." },
      { icon: "🔒", title: "Black-box rejections", detail: "Retailers return a binary reject with no or close to no explanation of what failed or why. Teams guess, fix, resubmit, and wait." },
      { icon: "📋", title: "Vague, shifting guidelines", detail: "Guidelines are ambiguous and constantly changing across retailers. No single source of truth." },
    ],
    signal: "Our sales and growth team, including our CEO, kept hearing the same request from prospects: can your platform solve this? The market signal was clear. What wasn't clear was whether an AI-driven solution could be accurate enough for enterprise clients to actually trust it.",
  },
  bet: {
    setup: "The tempting path was to build the full solution: a multi-agent AI system deeply integrated into our campaign workflow. That's what the problem demanded architecturally. But it would take months to build, and it rested on an unvalidated assumption — that clients would trust AI compliance enough to use it.",
    pivot: "I chose to de-risk the market question before investing in the architecture.",
    blocks: [
      { label: "What I shipped first", text: "A compliance feature with a single-prompt architecture integrated in our campaign workflow. One LLM call received the full creative, the full guideline document, and all compliance check instructions at once. It produced a compliance report with a score and specific findings." },
      { label: "Why this was a deliberate bet", text: "I knew the monolithic prompt had a ceiling. Stuffing 8–15K tokens of instructions into a single call is a known risk — the model attends to everything but prioritizes unpredictably. But this architecture could be built in weeks, not months. And the question I needed answered first wasn't \"can we build a reliable compliance system?\" It was \"will enterprise clients adopt the AI compliance feature?\"" },
    ],
  },
  protected: {
    items: [
      { n: "01", title: "Non-blocking compliance", desc: "The check never gates campaign launch — users can activate campaigns even while compliance is running asynchronously and can also choose to not run compliance at all. It was always optional. The AI earns authority by being right, not by being mandatory. If I'd hard-gated launches on a V1 model, one bad hallucination would have killed adoption permanently." },
      { n: "02", title: "Two-layer guideline architecture", desc: "Retailer compliance is always on — zero user setup required. I worked with the Ad Ops team to accurately curate retailer guidelines across every supported retail media network, because retailer rejections are the primary cost driver and accuracy here is non-negotiable. This curation effort compounds over time and creates a proprietary guideline library that becomes harder for competitors to replicate. Brand compliance is opt-in: users upload their own brand guidelines or provide a brand URL for AI-assisted curation. If a user skips brand setup, their report covers retailer adherence only — which is where the majority of rejection risk lives anyway." },
      { n: "03", title: "Dynamic-assets-only scope", desc: "Creative templates in our library are pre-approved. Non-compliance comes from on-the-fly edits — the things users change. This cut the problem space dramatically, reduced false positives, and meant every flag in the compliance report corresponded to something the user could actually fix." },
    ],
    validation: "Two enterprise clients adopted the feature. They ran real campaigns through it. The AI worked well enough that they started using it as their first-pass check before human review. The bet had validated.",
  },
  v1Revealed: {
    intro: "Client usage didn't just validate demand — it surfaced exactly where the architecture would fail at scale.",
    items: [
      { title: "Hallucinations scaled with prompt complexity", desc: "As the curated retailer guideline library grew more granular and clients began adding brand guidelines on top, the single-prompt system started producing inconsistent findings. The same creative would get different scores on consecutive runs. A color compliance check would \"bleed\" context from a font rule and hallucinate a violation. Retailer-specific rules got confused with brand-specific rules. The root cause: one prompt with too many competing instructions from too many sources." },
      { title: "Debugging was impossible", desc: "When a compliance report contained a questionable finding, there was no way to isolate which check went wrong. The entire prompt was a black box — I could see the input and the output, but not which instruction the model was attending to when it made a specific claim." },
      { title: "Extensibility had hit a wall", desc: "Pressure to add new checks was coming from both layers. On the retailer side: WCAG color-contrast scoring. On the brand side: font detection against brand whitelists, tone alignment with brand voice. Adding any new check meant modifying the single prompt, risking regressions — and because retailer and brand rules lived in the same prompt, a new brand check could destabilize a retailer check." },
    ],
    conclusion: "These weren't surprises. They were the failure modes I expected from the monolithic architecture, now confirmed with real usage data. Client usage patterns told me exactly what the redesigned system needed: per-check isolation, per-check observability, and a plugin model for new checks.",
  },
  multiAgent: {
    intro: "Every architectural requirement traced back to a specific V1 observation.",
    items: [
      { obs: "Hallucinations scaled with prompt complexity", req: "Agent-per-task decomposition", detail: "Six specialized compliance agents — Color, Font, Logo, Layout, Brand Tone, Dynamic Elements — each receiving only its data slice from a content preprocessor. Prompt size per agent dropped to ~1.5–3.5K tokens (from 8–15K). All six run in parallel. The model isn't choosing between competing instructions anymore — each agent has one job and a focused prompt." },
      { obs: "Full guideline documents injected into every check", req: "Semantic guideline retrieval", detail: "The single highest-impact architectural requirement. Guidelines are semantically chunked, embedded, and stored in a vector database. Each agent retrieves only its relevant 3–10 chunks via category-filtered search. Cross-cutting guidelines are tagged with multiple categories and deduplicated in scoring. The alternative — manual splitting by section — would have been brittle since guidelines don't follow consistent structures across retailers." },
      { obs: "Compliance scores were LLM-generated and sometimes hallucinated", req: "Deterministic scoring", detail: "The final compliance score is computed by pure math — weighted aggregation of structured agent findings. No LLM call. The one number clients care about most has zero hallucination risk." },
      { obs: "Adding new checks caused regressions", req: "Plugin architecture", detail: "Adding a new compliance check = defining an agent specification (name, guideline categories, input keys, prompt template, output schema) and registering it. The orchestrator auto-discovers registered agents. Zero changes to existing agents, scorer, or API." },
    ],
    tradeoff: "The multi-agent system uses ~60–80% more LLM tokens per creative (7–8 Bedrock calls vs. 1–2). I made the case to leadership that a system that's cheap per-call but hallucinates is more expensive than one that's reliable — a single bad compliance score that sends a client back to manual review costs more than the incremental token spend. Per-agent cost is also optimizable over time via prompt tuning.",
  },
  eval: {
    intro: "Deploying AI into enterprise decision-making requires proving the system works — not once, but continuously. The eval framework is built around one asymmetry: a false negative (system misses a real violation, retailer rejects) is categorically worse than a false positive (system flags something the retailer would have accepted).",
    matrix: {
      tn: { label: "TRUE NEGATIVE (TN)", desc: "Correct clearance. The creative is clean and the system correctly passes it. No reviewer time wasted." },
      fn: { label: "FALSE NEGATIVE (FN) — primary failure mode", desc: "The system misses a real violation. The creative gets pushed to placement and is rejected by the retailer. Minimising FN on MH rules is the primary optimisation target." },
      fp: { label: "FALSE POSITIVE (FP) — secondary failure mode", desc: "The system flags a violation the retailer would have accepted. Acceptable in early adoption — humans are the final gate. High FP rate over time causes reviewer fatigue." },
      tp: { label: "TRUE POSITIVE (TP)", desc: "Correct violation catch. The system flags a real problem before the creative reaches the retailer. Core value delivery." },
    },
    principles: [
      { title: "Ground truth: retailer decisions, not human annotations", detail: "Corpus sourced directly from retailer acceptance/rejection data — creatives that Amazon or Walmart actually approved or rejected. 150+ creatives, stratified: 30% retailer-accepted, 40% retailer-rejected, 20% edge cases, 10% cross-cutting violations." },
      { title: "MH rule recall as the primary gate", detail: "Not all violations are equal. A WCAG contrast failure gets rejected every time (must-have). A borderline font substitution might pass (good-to-have). Primary gate: MH rule recall ≥ 95%. Overall recall ≥ 85% is secondary." },
      { title: "Deliberate FP tolerance in early adoption", detail: "With humans as the final gate, over-flagging is acceptable friction. FP tolerance: ≤ 15% Phase 1 → ≤ 10% full cutover → ≤ 5% at eight weeks post-launch." },
      { title: "Shadow mode for regression, not accuracy", detail: "The Go monolith hallucinates, so agreement with it is not a signal of correctness. Shadow mode catches regressions only. All accuracy measurement runs against the retailer-sourced ground truth corpus." },
      { title: "Per-agent observability", detail: "Every validation produces a full trace with per-agent spans. Debugging went from \"the compliance system is wrong\" to \"the font agent retrieved an irrelevant guideline chunk because the category tagging on chunk #4 is ambiguous.\"" },
      { title: "Ongoing, not one-and-done", detail: "50 live validations sampled per week, reviewed against known retailer outcomes. Any MH rule disagreement escalated to a prompt tuning ticket within 48 hours. Corpus is versioned and re-evaluated when retailers update specs." },
    ],
  },
  outcomes: [
    { value: "$1.1M", label: "Annual enterprise savings", detail: "Reduced human compliance reviews from avg. 3 per creative to 1 — AI handles first-pass, humans validate edge cases only" },
    { value: "80%+", label: "First-touch approval rate", detail: "Creatives passing AI compliance check approved by retailers on first submission" },
    { value: "~40s", label: "Time-to-verdict", detail: "Per creative (V1), trending below 30s with agents running in parallel" },
    { value: "0%", label: "Workflow disruption", detail: "Campaign launch time within 10% of pre-compliance baseline — non-blocking design" },
  ],
  skills: [
    { skill: "Product Sense", detail: "Scoped MVP to dynamic-assets-only, chose non-blocking UX, designed two-layer guideline architecture — each decision optimized for adoption over completeness" },
    { skill: "AI & Technical Fluency", detail: "Diagnosed architectural failure modes, defined multi-agent requirements, designed vector retrieval approach for guidelines" },
    { skill: "Analytical Sense", detail: "Ground-truth dataset design, MH-rule recall gating, shadow mode comparison, per-agent diagnostic traces" },
  ],
};
