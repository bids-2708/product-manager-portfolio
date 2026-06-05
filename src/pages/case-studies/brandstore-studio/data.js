export const BSS = {
  hero: {
    title: "BrandStore Studio",
    subtitle: "Enabling Brands on the New Agentic Shelf",
    company: "DaVinci Commerce",
    duration: "2025 – Present",
    role: "Product Strategy & Vision Lead",
  },
  tldr: "Consumer discovery and purchase intent are migrating out of search boxes and into conversations with AI assistants. A new \"agentic shelf\" is forming — and enterprise brands that spent decades winning the physical and digital shelf are invisible on it. BrandStore Studio is a self-serve SaaS platform that closes that gap. A brand connects its product data, and the platform generates a publish-ready presence across agentic surfaces — starting with an MCP server, extending to emerging commerce protocols like ACP and UCP. I led product strategy and vision: forming a point of view on which protocols to bet on, sequencing a roadmap when the protocols themselves are still in beta, and keeping that roadmap defensible as the landscape shifts underfoot.",
  role: {
    intro: "I owned the \"why build this, why now, what do we bet on, and in what order\" layer:",
    items: [
      "Reading the agentic commerce landscape and forming a defensible point of view on protocol support (MCP, ACP, UCP).",
      "Sequencing the roadmap — what to support and when — given that the standards were unfinished and moving.",
      "Translating an uncertain, fast-moving external environment into decisions engineers and designers could build against.",
    ],
  },
  shift: {
    intro: "The starting point wasn't the product. It was the user.",
    painPoints: [
      { icon: "💬", title: "People stopped Googling, started asking", detail: "Product research, comparison, and purchase intent increasingly happen inside a conversation — not on a search results page, not on a brand's website. Shoppers expect conversational, zero-click discovery." },
      { icon: "🛒", title: "A new shelf is forming", detail: "ChatGPT, Gemini, Claude, AI Mode on Google, Amazon's Rufus — each is becoming a place where consumers ask \"what should I buy?\" Collectively, that's a new shelf. It doesn't live on anyone's owned property." },
      { icon: "👻", title: "Enterprise brands are invisible on it", detail: "Brands across spirits, luxury, FMCG, and telecom have spent decades winning the physical and digital shelf. On the agentic shelf, they have no storefront, no playbook, and no way in." },
      { icon: "⏳", title: "The stakes are first-mover", detail: "When a consumer asks an assistant for a recommendation, something answers. Brands that show up early shape that answer — and start training the surfaces' relevance signals. Brands that wait inherit whatever the model decides for them." },
    ],
    closer: "That's the \"why now.\" The window is open, and it won't stay open uncontested.",
  },
  bet: {
    quote: "Brands don't need a separate integration for every AI surface. They need to build once and deploy everywhere — and they need to do it without an engineering team.",
    blocks: [
      { label: "Self-serve by default", text: "A platform that turns a brand's existing product data into an agentic-ready presence — no DaVinci-side hand-holding required." },
      { label: "MCP as the output", text: "The brand publishes a ready-to-go MCP server: their data, structured and exposed so AI surfaces can discover and surface it." },
      { label: "Data is the invariant", text: "The brand's data is the only thing that stays constant across surfaces. Schemas, protocols, rendering — that's surface-specific engineering DaVinci absorbs, not the brand." },
    ],
    closer: "The hard strategic call: which protocols do we bet on, and in what order? The deliverable wasn't a feature — it was a defensible, sequenced point of view: MCP as the foundation, ACP first, GMC as the bridge, UCP after.",
  },
  fog: {
    intro: "The complication that made this hard — and the part most relevant to product judgment:",
    items: [
      { n: "01", title: "The protocols themselves were in beta", desc: "Specs moved. What was true one month wasn't guaranteed the next. There was no settled ground truth to design against." },
      { n: "02", title: "Engineers brought me questions standards bodies hadn't answered", desc: "\"How should we handle X?\" — where X genuinely had no canonical answer yet. The job became making calls under that ambiguity, not waiting for it to resolve." },
      { n: "03", title: "Product sense became the primary tool", desc: "With no spec to defer to, the work was judgment: deciding what was durable versus a temporary quirk, what to abstract away from the brand user, what to hard-code versus keep flexible, and where to absorb risk inside the platform so it never reached the user." },
      { n: "04", title: "The self-serve constraint never relaxed", desc: "Every decision still had to resolve into a flow a non-technical brand team could complete unaided. Complexity had to be absorbed by the product, not handed to the user." },
    ],
    closer: "Keep moving at the pace of the ecosystem without freezing on unresolvable questions, and without shipping that uncertainty to the brand.",
  },
  roadmap: {
    intro: "The roadmap is the strategy made concrete. It takes a brand from presence on a single surface to presence across the agentic shelf — and the sequence is deliberate, not a feature wish list. Each phase unlocks the next.",
    phases: [
      {
        phase: "Phase 1a", status: "In delivery",
        title: "Generate an ACP-compliant feed",
        body: "Get brands into ChatGPT's native product discovery layer via an ACP-compliant product feed, with real-time updates pushed through the OpenAI Commerce API.",
        why: "The platform already outputs an MCP server; ACP supports MCP as transport; ChatGPT is the surface with the open early-mover window today. Lowest friction, highest urgency — so it leads.",
        callout: "Promotions elevated to P0. A flash sale that launches at 9am but the surface doesn't learn about until tomorrow's batch is a conversion failure on the brand's biggest traffic day. Real-time push exists for promotions, not catalogue parity.",
      },
      {
        phase: "Phase 1b", status: "Next",
        title: "Generate a GMC feed output",
        body: "Generate a Google Merchant Center–compliant product feed so brands can surface on Google's AI surfaces — AI Mode and Gemini discovery.",
        why: "UCP eligibility depends on the brand being enrolled in Google Merchant Center. Without GMC there is no Google AI surface presence for UCP to enrich. GMC isn't a detour on the way to UCP — it is the prerequisite, and it earns its place as its own phase.",
        callout: "Standalone value too: Google Shopping and free listings, regardless of what happens with UCP.",
      },
      {
        phase: "Phase 2a", status: "Planned",
        title: "ACP Checkout",
        body: "Turn discovery into transaction: enable buy-in-chat on ChatGPT by switching on ACP's checkout capability, with payment integration and checkout-partner onboarding.",
        why: "Checkout is a genuine scope expansion — it changes what the platform is. Sequenced for when the early-mover discovery land-grab is banked and the portfolio includes brands where agentic checkout is actually viable.",
        callout: "Discovery before transaction is the honest order of operations.",
      },
      {
        phase: "Phase 2b", status: "Planned",
        title: "UCP support (Catalog)",
        body: "Make the brand's catalogue queryable in real time on Google's AI surfaces via UCP's Catalog capability — so Gemini can pull live product data straight from the brand.",
        why: "Sits on the GMC foundation from 1b — can't come earlier. Scope is deliberately Catalog, not Checkout: the current enterprise portfolio (spirits, luxury, FMCG, telecom) is a discovery portfolio, not a checkout portfolio.",
        callout: "UCP Catalog also maps almost directly onto the MCP server the platform already generates, so the build is an extension, not a new foundation.",
      },
    ],
    closer: "Each phase is gated by the one before it, and each was scoped by where the protocol is mature enough to commit versus where honesty means waiting. Support what's ready, sequence what isn't, and never let the brand carry the uncertainty.",
  },
  judgment: {
    intro: "Strategy and vision is the heart of this case study, so it's worth being explicit about how each roadmap item earned its place. None came from a spec or a backlog. Each one sits at the intersection of three forces, and product sense is what reconciles them.",
    forces: [
      { label: "Leadership ambition", detail: "Be the platform for all AI surfaces, not a single-channel tool." },
      { label: "Client pull", detail: "Real, present demand from large brands who want to show up where their customers now are." },
      { label: "Protocol readiness", detail: "The unglamorous reality of what's stable, what's in beta, and what has hard prerequisites." },
    ],
    reconciliations: [
      { item: "ACP leads", detail: "Client pull, leadership ambition, and protocol readiness all happen to point the same way — the rare easy call, so it goes first." },
      { item: "GMC becomes its own phase", detail: "Ambition (Google's surfaces, UCP) ran ahead of protocol reality (GMC enrollment is a hard dependency). Product sense caught that and inserted the missing step rather than letting UCP get committed prematurely." },
      { item: "Checkout waits", detail: "Ambition is real but the portfolio reality isn't there yet. Saying \"not now, and here's the trigger condition\" is itself the product judgment." },
      { item: "UCP scoped to Catalog", detail: "Committing to Checkout would have been over-promising against a portfolio that can't use it. Match scope to reality, not to enthusiasm." },
    ],
    closer: "Every item is a reconciliation, and the sequence is the argument.",
  },
  wip: {
    status: "Active exploration · iteration stage",
    title: "Solving Discoverability — Feed Enrichment",
    intro: "Getting a brand onto an AI surface is necessary but not sufficient. The harder, still-open problem: being discoverable once you're there.",
    items: [
      { title: "Feed enrichment as the lever", detail: "The richer and more structured a brand's data — detailed attributes, product highlights, intent-relevant metadata — the more signal the surfaces have to rank and match it against real user queries. Enrichment is how a brand moves from \"present\" to \"preferred.\"" },
      { title: "Builds on the data-first substrate", detail: "Because the platform is architected around the brand's data as the invariant, enrichment has a natural home — a layer on top of normalized data, not a bolt-on per surface." },
      { title: "Why it's still WIP", detail: "Open questions are real: how much enrichment can be automated versus brand-supplied, how to measure discoverability when the surfaces don't expose a ranking score, and how this stays durable as the surfaces' algorithms evolve. We iterate rather than commit." },
    ],
    closer: "It's in the case study deliberately. Not every part of a strategy is locked, and showing the live edge of the thinking is more honest than pretending the roadmap has no open frontier.",
  },
  decisions: [
    { d: "MCP as the foundational layer", r: "Most stable, broadly supported substrate; lowest risk of a rebuild as the ecosystem churns." },
    { d: "ACP first", r: "Near-perfect alignment with the existing MCP-server output, plus an open early-mover window on ChatGPT." },
    { d: "Promotions elevated to P0 within ACP", r: "Time-sensitive promotional data — not steady-state catalogue updates — is what justifies a real-time push." },
    { d: "GMC feed as its own phase before UCP", r: "UCP eligibility depends on GMC enrollment; the bridge has to be built before the destination." },
    { d: "ACP Checkout deferred to 2a", r: "Checkout is a scope expansion; discovery comes before transaction, and the portfolio needs to be ready." },
    { d: "UCP scoped to Catalog, not Checkout", r: "The current enterprise portfolio is a discovery portfolio; scope matches reality, not enthusiasm." },
    { d: "Build once, deploy across surfaces", r: "Brands shouldn't carry the integration burden of a fragmenting AI-surface landscape; the platform carries it." },
    { d: "Absorb protocol volatility inside the platform", r: "Beta-stage instability is the platform's problem to manage, never something exposed to brand users." },
  ],
  outcomes: [
    { value: "6", label: "Enterprise brands onboarded", detail: "Live on the platform across spirits, luxury, FMCG, and telecom categories." },
    { value: "100+", label: "Brands in pipeline", detail: "Early signal that the \"build once, be available on the agentic shelf\" thesis resonates with enterprise brands." },
    { value: "1a → 2b", label: "Sequenced roadmap that has held", detail: "The roadmap kept holding as the ecosystem evolved — because it was built around reasoning and dependencies, not a snapshot of any one spec." },
  ],
  carryForward: [
    "In a fast-moving space, ship a point of view, not certainty. The value wasn't predicting the winning protocol — it was building a framework for deciding, so the team could move while the landscape was still settling.",
    "A roadmap is an argument, not a list. Every phase is gated by a dependency or a readiness condition. Sequencing is the strategy.",
    "Product sense scales when the spec doesn't exist. The most leveraged thing I did was give engineers a defensible answer to unresolved questions so they weren't blocked waiting for the ecosystem to catch up.",
    "The platform's job is to enable brands on the agentic shelf — not to be it. That framing kept scope honest.",
    "Next: resolve feed-enrichment discoverability from exploration into a committed capability, deepen protocol coverage as ACP and UCP mature, and keep widening surface reach so \"build once\" keeps its promise as new agentic surfaces emerge.",
  ],
  skills: [
    { skill: "Product Strategy", detail: "Formed a defensible point of view on which agentic-commerce protocols to bet on while specs were still moving — and translated it into decisions engineers could build against." },
    { skill: "Roadmap Sequencing", detail: "Turned competing pressure from leadership, clients, and protocol readiness into a gated 1a → 2b sequence where every phase unlocks the next." },
    { skill: "Decision-making Under Ambiguity", detail: "Made calls on questions the standards bodies hadn't answered, absorbed protocol volatility inside the platform, and kept the self-serve constraint intact for non-technical brand users." },
  ],
};
