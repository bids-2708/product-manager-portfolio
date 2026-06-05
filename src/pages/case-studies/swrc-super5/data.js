export const S5 = {
  hero: {
    title: "Super5 Nutrition Enterprise",
    subtitle: "Building a delivery system for a 30-year-old unsolved problem",
    company: "SWRC / Barefoot College",
    duration: "November 2017 – March 2021",
    role: "Head — Nutrition Enterprise, Tilonia",
    tags: ["0→1 Social Enterprise", "Distribution Platform", "Operational Scale"],
  },

  pmBridge: "This predates my formal product career. The work was a rural social enterprise — no software, no AI, no SaaS metrics. The cognitive moves, however, are identical to what I do in AI product work: diagnose structural failure beneath surface symptoms, validate hypotheses before building, design accountability systems that measure outcomes not outputs, and hold the line between \"shipped\" and \"working.\" The domain is different. The thinking is the same.",

  problem: {
    hook: "Imagine you're brought in to solve a persistent public health problem. A nutritional supplement exists. Its ingredients are locally available and affordable. A non-profit has been running awareness programs for 30 years. The problem — childhood malnutrition and anemia among rural women — hasn't moved.",
    hookFollowUp: "The easy answer is access or awareness. Both were wrong.",
    context: "SWRC (Barefoot College) had long known about Amritchuran — an indigenous food mix of whole wheat, Bengal gram, peanuts, sesame seeds, and jaggery, understood to combat anemia and undernourishment. They had been teaching women in villages how to make it for three decades. It hadn't scaled. Three structural failures were hiding beneath the surface.",
    structuralFailures: [
      {
        title: "Time poverty",
        detail: "Women in these communities ran farming, animal husbandry, water and firewood collection, cooking, and childcare simultaneously. Preparing Amritchuran correctly was time-consuming. Their own health was never a priority in the household economy. Even Bal-Sevikas running crèches were abandoning children's learning sessions on preparation days — production was entangled with crèche operations.",
      },
      {
        title: "No standardized formulation",
        detail: "The recipe existed but ingredient proportions had never been standardized. Quality and nutritional output varied with every batch. Without standardization there was no consistent product — and without a consistent product there was no enterprise.",
      },
      {
        title: "A missing delivery system",
        detail: "Awareness programs assumed that knowing about a solution converts to using it. It doesn't. The barrier was never informational — it was the absence of a system that removed preparation friction and put a standardized, reliable product directly in the hands of the consumer, repeatedly.",
      },
    ],
    diagnosis: "Thirty years of awareness. Near-zero consistent consumption. The problem wasn't malnutrition. The problem was a missing delivery system.",
  },

  validation: {
    intro: "Before building anything, I had three hypotheses that each needed to hold. One failure would kill the model.",
    hypotheses: [
      {
        id: "H1",
        hypothesis: "Standardization is achievable and nutritionally meaningful.",
        method: "Lab analysis of standardized sample batches — fixed ingredient ratios, defined processing steps, nutritional content and shelf life tested.",
        finding: "A standardized formulation could deliver consistent, meaningful nutritional output across every batch.",
      },
      {
        id: "H2",
        hypothesis: "Clinical efficacy is real, not assumed.",
        method: "Six-month structured efficacy study across 60 malnourished children. Hemoglobin levels tracked before and after.",
        finding: "Hemoglobin levels improved by 60% (from ~7.5 g/dL). First formal clinical baseline for this formulation.",
      },
      {
        id: "H3",
        hypothesis: "The market will adopt and pay.",
        method: "50-household field survey across three villages. Tested palate acceptance, willingness to pay, and perception of value.",
        finding: "Taste and familiar ingredients were within cultural range. Villagers signaled willingness to pay. This wasn't a charity problem — it was a market problem.",
      },
    ],
  },

  build: {
    intro: "All three hypotheses held. The model was worth building.",
    decisions: [
      {
        label: "Centralized production",
        text: "The architectural decision that everything else depended on. It solved two structural problems simultaneously — removed the preparation burden from households and crèches, and enforced the standardized formulation at scale. Household production could never achieve the economics or quality consistency the problem required. I established a production unit at SWRC's Tilonia headquarters, obtained FSSAI licensing through coordination with the Gram Panchayat, BDO, and CMHO Ajmer, and upgraded to solar-powered machinery — increasing operator efficiency by 72%.",
      },
      {
        label: "Super5 brand",
        text: "Amritchuran was a household name but carried no aspiration. For women entrepreneurs selling a health supplement to other women, the product needed to feel worth buying — not a charity handout. The rebrand was a positioning decision, not a cosmetic one.",
      },
      {
        label: "Hub-and-spoke via women entrepreneurs",
        text: "The only architecture that could reach 453 remote villages at acceptable cost and with the trust levels the product required. Production unit at Tilonia as hub; 12 field centres across the districts as spokes; women entrepreneurs collected and sold within their own communities. The entrepreneur model created self-reinforcing accountability: they sold because they earned, they earned because they sold.",
      },
      {
        label: "SKU architecture and unit economics",
        text: "25g sachets for trial and daily use; 250g, 500g, 1kg packs for household buying. Production cost ~₹150/kg, retail ~₹210/kg including GST, entrepreneur margin ₹10–20/kg per SKU. The unit economics worked across every layer.",
      },
    ],
  },

  distributionGap: {
    csrContext: "CSR partners came in as the entrepreneur network grew — Credit Suisse funded network expansion; Coca-Cola Foundation enabled a school distribution program, putting Super5 in the hands of 1,200 malnourished children across 13 government schools covering 15 villages.",
    problem: "Getting Super5 to 1,200 children was a distribution problem. We solved it. But distribution and consumption are not the same thing. Ensuring each child consumed the supplement consistently — in the right quantity, on the right days — was an entirely different problem. And without solving it, the nutritional impact we were claiming wasn't real. It was reported.",
    honesty: "I had intuitions about this gap earlier but hadn't fully formalized it. CSR accountability sharpened the problem: when you're responsible to funders for outcomes — not just reach — the gap between \"product delivered\" and \"problem solved\" becomes impossible to paper over.",
    bridge: "This is the same tension that runs through AI product work. \"Model deployed\" and \"problem solved\" are also not the same thing. The accountability structure forced the product rigor.",
  },

  monitoring: {
    intro: "We introduced a fingerprint-based biometric attendance system across all 13 schools — not just an attendance tracker, but the foundation of a live consumption monitoring infrastructure.",
    capabilities: [
      { title: "Individual consumption tracking", desc: "Each child's attendance record tied to daily supplement distribution logs — visibility at the individual level, not just school-level supply." },
      { title: "Health outcome mapping", desc: "Monthly hemoglobin check-ups per child, letting us map consumption rates directly to health improvements and detect which children needed follow-up." },
      { title: "Leakage detection", desc: "Mismatches between supply records and consumption logs flagged schools where product wasn't reaching children — making an opaque distribution chain traceable." },
    ],
    behaviorInsight: "The harder design problem was behavioral: how do you sustain teacher compliance in a system they didn't ask for? We tied student health metrics to teacher recognition and ran village-level award ceremonies for teachers whose children showed the most significant health improvement. Social prestige in village communities is a powerful motivator — more so than financial incentives at the scale we were operating.",
    duolingo: "The insight is the same one that makes Duolingo work — consistent daily behavior doesn't happen through awareness. It requires a system that makes accountability visible and makes the right behavior the path of least resistance. The award ceremony model was that system for teachers.",
    continuousReinforcement: "The metrics confirmed it: consumption compliance improved when ceremonies were active and dropped when they lapsed. The system needed continuous reinforcement, not a one-time launch.",
  },

  outcomes: [
    { value: "52X", label: "Production scale", detail: "240 kg/month → 10,000 kg/month in ~2.5 years" },
    { value: "₹81L", label: "Revenue generated", detail: "~7% of org budget; highest across all departments (~4 years)" },
    { value: "176%", label: "Revenue CAGR", detail: "In a market with no prior commercial infrastructure" },
    { value: "₹1.2Cr", label: "External funding raised", detail: "10% of org budget; highest outside senior leadership" },
    { value: "180", label: "Women entrepreneurs", detail: "First-time entrepreneurs enabled across 453 villages" },
    { value: "20K+", label: "Lives impacted", detail: "Children and anemic mothers reached" },
    { value: "Top 3", label: "CII Foundation Award", detail: "Exemplary Entrepreneur Award — 3 of 2,500 nominees" },
  ],

  skills: [
    { skill: "High Agency", detail: "The mandate didn't exist — I created it. The team didn't exist — I built one: across funders, government bodies, 180 community entrepreneurs, school teachers, and CSR partners, without authority, title, or pre-existing budget. Every structural decision in this case study was initiated without being asked, inside an organization whose core work was something else entirely. High agency isn't about working alone. It's about building alignment without permission." },
    { skill: "Customer & User Discovery", detail: "The central insight — that the problem was structural, not informational — came from field observation and hypothesis-driven research, not assumption. Three hypotheses, three validation methods, three distinct user groups: women entrepreneurs, school teachers, and children and families. The monitoring system itself was a discovery artifact: it revealed consumption gaps that self-reported data would have missed, and surfaced a behavioral design lever (social prestige, not financial incentive) that no survey would have produced." },
    { skill: "Business & Market Sense", detail: "Unit economics across three layers. Pricing calibrated for margin viability and community affordability simultaneously. Revenue CAGR of 176% in a market with no prior commercial infrastructure. External funding that outperformed senior leadership. CSR partnerships secured by demonstrating measurable outcomes — which required the monitoring infrastructure to exist first. This was a functioning business inside an NGO, not a grant-dependent program." },
  ],
};
