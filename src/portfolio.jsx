import { useState } from "react";

// ─── DATA LAYER ─────────────────────────────────────────────
const SITE = {
  name: "Bidyapathi Ray",
  shortName: "Bids",
  positioning: "product x builder x isb x nit",
  email: "bidyapathi.ray@gmail.com",
  linkedin: "https://linkedin.com/in/bidyapathi-ray",
};

const ABOUT = {
  paragraphs: [
    "I've spent eight years building things, and the last three building AI — from models to products.",
    "Right now at DaVinci Commerce, I work at the cusp of agentic AI — from building a compliance product to enabling brands on AI surfaces. Before that, as a founding team member at Ola Krutrim, I owned the data strategy behind India's first large language models.",
    "Neither of these was the plan.",
    "At 22, I walked away from a perfectly good process-engineering job at one of the world's largest refineries because comfort felt like the wrong signal. This decision made complete sense to me and zero sense to everyone else. It took me to rural Rajasthan, where I spent four years building a nutrition enterprise from scratch — 180 first-time women entrepreneurs, a last-mile supply chain across 453 villages, reaching 5,000 women and 20,000 children. Then I went to business school, which was considerably more air-conditioned.",
    "The pattern, in hindsight: find the hardest problem in the room, build until it runs without you, leave for the next one. Repeat until someone calls it a career.",
    "I'm drawn to ambiguous, high-stakes work where the right answer isn't obvious yet — and I'm most useful early, when there's nothing to copy and everything to figure out.",
    "If that's the kind of problem you're staring at, let's talk.",
    "Friends will tell you I'm equally likely to be found feeding people, staring at a body of water, or breaking it down on a dance floor — ideally all three, in that order.",
  ],
};

const SIGNALS = ["Agentic AI product development", "0→1 in ambiguous environments", "AI evaluation frameworks", "Enterprise platform integrations"];

const CASE_STUDIES = [
  { id: "creative-compliance", title: "Creative Compliance", subtitle: "DaVinci Commerce", metric: "$1.1M annual savings", tag: "Agentic AI", description: "Shipped the ad-tech industry's first agentic AI compliance product — autonomous agents that synthesize retailer and brand guidelines, flag non-adherent creatives, and generate actionable compliance reports.", skills: ["Product Sense", "AI Fluency", "Analytical Sense"] },
  { id: "swrc-super5", title: "Super5 Nutrition Enterprise", subtitle: "SWRC / Barefoot College", metric: "20K+ children impacted", tag: "0→1 Product", description: "Built a nutrition enterprise from scratch in rural Rajasthan — production, supply chain across 453 villages, 180 women entrepreneurs. Scaled production 52X. Generated highest department revenue.", skills: ["High Agency", "Customer Discovery", "Business Sense"] },
  { id: "krutrim-llm", title: "Building India's First LLMs", subtitle: "Ola Krutrim", metric: "2Tn+ tokens generated", tag: "LLM Development", description: "Founding team member. Designed and executed the data acquisition strategy across all phases of GenAI model training. Directed the evaluation program for WebRAG and moderation classifiers.", skills: ["AI Fluency", "High Agency", "Analytical Sense"] },
];

const OTHER_WORK = {
  additionalCaseStudies: [{ title: "AEM Integration for Fortune 500 Retailer", subtitle: "DaVinci Commerce", metric: "$2M annual savings", description: "Bidirectional integration with Adobe Experience Manager — eliminating ~30K manual uploads/year and preserving asset lineage via configurable writeback logic.", tag: "Enterprise Platform" }],
  sideProjects: [
    { title: "Compliance Guideline Curation Agent", description: "Independently built AI agent that scrapes brand URLs and auto-generates structured compliance guidelines using LLM extraction." },
    { title: "MCP Server", description: "Custom Model Context Protocol server." },
    { title: "JD Analyzer", description: "Job description analysis tool." },
  ],
};

// ─── CASE STUDY DATA (source of truth: Notion doc) ──────────
const CC = {
  hero: { title: "Creative Compliance", subtitle: "Shipping Agentic AI Into Enterprise Ad Operations", company: "DaVinci Commerce", duration: "Dec 2024 – Present", role: "Senior Product Manager, end-to-end ownership" },
  problem: {
    context: "Every ad creative running on a retail media network must comply with three overlapping sets of rules — the media platform's specs, the retailer's guidelines, and the brand's own standards. In a market projected to exceed ~$70B in U.S. spend alone, this compliance step is still largely manual.",
    painPoints: [
      { icon: "💰", title: "High manual cost", detail: "~$50–$100 per creative in human review costs. A client running 60 campaigns/month with 10–30 creatives each burns hundreds of thousands annually." },
      { icon: "🔒", title: "Black-box rejections", detail: "Retailers return a binary reject with no or close to no explanation of what failed or why. Teams guess, fix, resubmit, and wait." },
      { icon: "📋", title: "Vague, shifting guidelines", detail: "Guidelines are ambiguous and constantly changing across retailers. No single source of truth." },
    ],
    signal: "Our sales and growth team, including our CEO, kept hearing the same request from prospects: can your platform solve this? The market signal was clear. What wasn't clear was whether an AI-driven solution could be accurate enough for enterprise clients to actually trust it and change their workflow.",
  },
  bet: {
    setup: "The tempting path was to build the full solution: a multi-agent AI system deeply integrated into our campaign workflow. That's what the problem demanded architecturally. But it would take months to build, and it rested on an unvalidated assumption — that clients would trust AI compliance enough to use it.",
    pivot: "I chose to de-risk the market question before investing in the architecture.",
    blocks: [
      { label: "What I shipped first", text: "A compliance feature with a single-prompt architecture integrated in our campaign workflow. One LLM call received the full creative (as both image and HTML rendition), the full guideline document, and all compliance check instructions at once. It produced a compliance report with a score and specific findings." },
      { label: "Why this was a deliberate bet, not a shortcut", text: "I knew the monolithic prompt had a ceiling. Stuffing 8–15K tokens of instructions into a single call is a known risk — the model attends to everything but prioritizes unpredictably. But this architecture could be built in weeks, not months. And the question I needed answered first wasn't \"can we build a reliable compliance system?\" It was \"will enterprise clients adopt the AI compliance feature?\"" },
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
      { title: "Extensibility had hit a wall", desc: "Pressure to add new checks was coming from both layers. On the retailer side: WCAG color-contrast scoring, file size validation against retailer-specific limits. On the brand side: font detection against brand whitelists, tone alignment with brand voice, character count. Adding any new check meant modifying the single prompt, risking regressions — and because retailer and brand rules lived in the same prompt, a new brand check could destabilize a retailer check." },
    ],
    conclusion: "These weren't surprises. They were the failure modes I expected from the monolithic architecture, now confirmed with real usage data. Client usage patterns told me exactly what the redesigned system needed: per-check isolation, per-check observability, and a plugin model for new checks.",
  },
  multiAgent: {
    intro: "I wrote the product requirements for a multi-agent refactor. Every architectural requirement traced back to a specific V1 observation.",
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


// ─── STYLES ─────────────────────────────────────────────────
const S = (dark) => dark
  ? { bg:"#111",bgA:"#1A1A1A",bgC:"#1E1E1E",tx:"#E8E6E1",txM:"#9CA3AF",ac:"#D97706",bd:"#2A2A2A",bdL:"#333",tgBg:"rgba(217,119,6,.12)",tgTx:"#F59E0B",dnBg:"rgba(220,38,38,.1)",dnTx:"#F87171",okBg:"rgba(34,197,94,.1)",okTx:"#4ADE80",wnBg:"rgba(234,179,8,.1)",wnTx:"#FACC15" }
  : { bg:"#FAFAF7",bgA:"#F3F1EC",bgC:"#FFF",tx:"#1A1A1A",txM:"#6B7280",ac:"#B45309",bd:"#E5E2DB",bdL:"#EBE8E1",tgBg:"rgba(180,83,9,.08)",tgTx:"#92400E",dnBg:"rgba(220,38,38,.06)",dnTx:"#DC2626",okBg:"rgba(22,163,74,.06)",okTx:"#16A34A",wnBg:"rgba(202,138,4,.06)",wnTx:"#A16207" };

// ─── SHARED COMPONENTS ─────────────────────────────────────

function Nav({dark,toggle,c,nav,page}){
  const lnk = {background:"none",border:"none",cursor:"pointer",color:c.txM,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:".85rem",textDecoration:"none",transition:"color .2s"};
  return(
    <nav style={{position:"sticky",top:0,zIndex:100,background:dark?"rgba(17,17,17,.92)":"rgba(250,250,247,.92)",backdropFilter:"blur(12px)",borderBottom:`1px solid ${c.bd}`,padding:"0 24px"}}>
      <div style={{maxWidth:1080,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",height:56}}>
        <button onClick={()=>nav("home")} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.25rem",color:c.tx,padding:0}}>{SITE.shortName}</button>
        <div style={{display:"flex",alignItems:"center",gap:20}}>
          {page!=="home"&&<button onClick={()=>nav("home")} style={lnk} onMouseEnter={e=>e.target.style.color=c.ac} onMouseLeave={e=>e.target.style.color=c.txM}>← Back</button>}
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" style={lnk} onMouseEnter={e=>e.target.style.color=c.ac} onMouseLeave={e=>e.target.style.color=c.txM}>LinkedIn</a>
          <a href={`mailto:${SITE.email}`} style={lnk} onMouseEnter={e=>e.target.style.color=c.ac} onMouseLeave={e=>e.target.style.color=c.txM}>Email</a>
          <button onClick={toggle} style={{background:"none",border:"none",cursor:"pointer",fontSize:"1.1rem",padding:8,opacity:.6,transition:"opacity .2s"}} onMouseEnter={e=>e.target.style.opacity=1} onMouseLeave={e=>e.target.style.opacity=.6}>{dark?"☀️":"🌙"}</button>
        </div>
      </div>
    </nav>
  );
}

const Tag=({l,c,s})=><span style={{display:"inline-block",padding:"4px 12px",borderRadius:100,background:c.tgBg,color:c.tgTx,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:".75rem",fontWeight:600,letterSpacing:".02em",...s}}>{l}</span>;
const SL=({t,c})=><div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:".7rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:c.ac,marginBottom:16}}>{t}</div>;

function Card({s,c,onClick}){
  const[h,sH]=useState(false);
  return(
    <button onClick={onClick} onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)} style={{display:"block",width:"100%",textAlign:"left",background:h?c.bgA:c.bgC,border:`1px solid ${h?c.ac:c.bd}`,borderRadius:8,padding:"28px 28px 24px",cursor:"pointer",transition:"all .25s",transform:h?"translateY(-2px)":"none",fontFamily:"'Plus Jakarta Sans',sans-serif"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}><Tag l={s.tag} c={c}/><span style={{fontSize:".75rem",color:c.txM}}>{s.subtitle}</span></div>
      <h3 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.5rem",fontWeight:400,color:c.tx,margin:"0 0 8px",letterSpacing:"-.01em",lineHeight:1.2}}>{s.title}</h3>
      <div style={{fontSize:"1.75rem",fontWeight:700,color:c.ac,margin:"12px 0 16px",letterSpacing:"-.02em"}}>{s.metric}</div>
      <p style={{color:c.txM,fontSize:".9rem",lineHeight:1.6,margin:0}}>{s.description}</p>
      <div style={{display:"flex",gap:8,marginTop:16,flexWrap:"wrap"}}>{s.skills.map(sk=><span key={sk} style={{fontSize:".7rem",color:c.txM,padding:"3px 8px",border:`1px solid ${c.bdL}`,borderRadius:4}}>{sk}</span>)}</div>
      <div style={{marginTop:20,fontSize:".8rem",color:h?c.ac:c.txM,fontWeight:500,transition:"color .2s"}}>Read case study →</div>
    </button>
  );
}

// ─── ARCHITECTURE SVG ───────────────────────────────────────
function Arch({c,dark}){
  const bF=dark?"#1E1E1E":"#FFF",bS=dark?"#333":"#D1CCC3",aF=dark?"rgba(217,119,6,.15)":"rgba(180,83,9,.06)",aS=c.ac,tC=c.tx,mC=c.txM,arr=dark?"#555":"#B0AAA0";
  return(
    <div style={{margin:"32px 0"}}>
      <div style={{marginBottom:40}}>
        <div style={{fontSize:".7rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:c.txM,marginBottom:12,fontFamily:"'Plus Jakarta Sans',sans-serif"}}>V1: Monolithic Architecture</div>
        <svg viewBox="0 0 680 120" style={{width:"100%",maxWidth:680}}>
          <defs><marker id="a1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill={arr}/></marker></defs>
          <rect x="0" y="30" width="120" height="56" rx="6" fill={bF} stroke={bS} strokeWidth="1.5"/><text x="60" y="55" textAnchor="middle" fill={tC} fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Ad Creative</text><text x="60" y="72" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">+ Full Guidelines</text>
          <line x1="125" y1="58" x2="175" y2="58" stroke={arr} strokeWidth="1.5" markerEnd="url(#a1)"/>
          <rect x="180" y="20" width="280" height="76" rx="6" fill={aF} stroke={aS} strokeWidth="1.5" strokeDasharray="4,3"/><text x="320" y="48" textAnchor="middle" fill={tC} fontSize="12" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Single Claude Call</text><text x="320" y="66" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">All checks + full guideline doc</text><text x="320" y="80" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">~8-15K tokens • Black-box</text>
          <line x1="465" y1="58" x2="515" y2="58" stroke={arr} strokeWidth="1.5" markerEnd="url(#a1)"/>
          <rect x="520" y="30" width="140" height="56" rx="6" fill={bF} stroke={bS} strokeWidth="1.5"/><text x="590" y="55" textAnchor="middle" fill={tC} fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Score + Report</text><text x="590" y="72" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">LLM-generated score</text>
        </svg>
      </div>
      <div>
        <div style={{fontSize:".7rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:c.ac,marginBottom:12,fontFamily:"'Plus Jakarta Sans',sans-serif"}}>V2: Multi-Agent Architecture</div>
        <svg viewBox="0 0 680 320" style={{width:"100%",maxWidth:680}}>
          <defs><marker id="a2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill={arr}/></marker></defs>
          <rect x="230" y="0" width="220" height="48" rx="6" fill={aF} stroke={aS} strokeWidth="1.5"/><text x="340" y="20" textAnchor="middle" fill={tC} fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Content Preprocessor</text><text x="340" y="36" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">1 Claude call → structured data extraction</text>
          <line x1="340" y1="48" x2="340" y2="72" stroke={arr} strokeWidth="1.5" markerEnd="url(#a2)"/><text x="340" y="86" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontStyle="italic">parallel fan-out</text>
          {["Color","Font","Logo","Layout","Tone","Dynamic"].map((n,i)=>{const x=15+i*112;return(<g key={n}><line x1="340" y1="90" x2={x+48} y2={100} stroke={arr} strokeWidth="1" strokeDasharray="3,2"/><rect x={x} y={100} width="96" height="72" rx="5" fill={bF} stroke={bS} strokeWidth="1.5"/><text x={x+48} y={122} textAnchor="middle" fill={tC} fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">{n}</text><text x={x+48} y={138} textAnchor="middle" fill={mC} fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">Qdrant query</text><text x={x+48} y={150} textAnchor="middle" fill={mC} fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">→ Claude call</text><text x={x+48} y={162} textAnchor="middle" fill={mC} fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">→ findings</text><line x1={x+48} y1={172} x2={x+48} y2={200} stroke={arr} strokeWidth="1" strokeDasharray="3,2"/></g>);})}
          <rect x="0" y="204" width="90" height="40" rx="5" fill={aF} stroke={aS} strokeWidth="1"/><text x="45" y="222" textAnchor="middle" fill={tC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Qdrant</text><text x="45" y="234" textAnchor="middle" fill={mC} fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif">Vector Store</text><line x1="90" y1="224" x2="130" y2="224" stroke={aS} strokeWidth="1" strokeDasharray="3,2"/><text x="110" y="218" textAnchor="middle" fill={mC} fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif">category-filtered</text><text x="110" y="232" textAnchor="middle" fill={mC} fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif">chunks only</text>
          <rect x="210" y="224" width="260" height="48" rx="6" fill={bF} stroke={aS} strokeWidth="1.5"/><text x="340" y="246" textAnchor="middle" fill={tC} fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Deterministic Scorer</text><text x="340" y="262" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">Pure math aggregation • No LLM call • No hallucination</text>
          <line x1="340" y1="272" x2="340" y2="296" stroke={arr} strokeWidth="1.5" markerEnd="url(#a2)"/>
          <rect x="260" y="296" width="160" height="24" rx="4" fill={bF} stroke={bS} strokeWidth="1"/><text x="340" y="312" textAnchor="middle" fill={tC} fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Report + Persist</text>
        </svg>
      </div>
    </div>
  );
}

// ─── CONFUSION MATRIX ───────────────────────────────────────
function CMatrix({c}){
  const m=CC.eval.matrix;
  const cell=(bg)=>({padding:"14px 16px",borderRadius:6,background:bg,border:`1px solid ${c.bd}`});
  const lb=(col)=>({fontSize:".72rem",fontWeight:700,color:col,letterSpacing:".04em",marginBottom:6});
  const ds={fontSize:".78rem",color:c.txM,lineHeight:1.55};
  const hd={fontSize:".7rem",fontWeight:600,color:c.txM,textAlign:"center",padding:"8px 4px",letterSpacing:".04em"};
  return(
    <div style={{marginBottom:28}}>
      <div style={{fontSize:".78rem",color:c.txM,marginBottom:12,lineHeight:1.5}}>Unit of measurement: a single creative evaluated against a retailer's ad specs. Ground truth = actual retailer accept/reject decision.</div>
      <div style={{display:"grid",gridTemplateColumns:"auto 1fr 1fr",gap:8}}>
        <div/><div style={hd}>Retailer accepted</div><div style={hd}>Retailer rejected</div>
        <div style={{...hd,textAlign:"right",paddingRight:12,display:"flex",alignItems:"center",justifyContent:"flex-end"}}>System: compliant</div>
        <div style={cell(c.okBg)}><div style={lb(c.okTx)}>{m.tn.label}</div><div style={ds}>{m.tn.desc}</div></div>
        <div style={cell(c.dnBg)}><div style={lb(c.dnTx)}>{m.fn.label}</div><div style={{...ds,fontWeight:500}}>{m.fn.desc}</div></div>
        <div style={{...hd,textAlign:"right",paddingRight:12,display:"flex",alignItems:"center",justifyContent:"flex-end"}}>System: non-compliant</div>
        <div style={cell(c.wnBg)}><div style={lb(c.wnTx)}>{m.fp.label}</div><div style={ds}>{m.fp.desc}</div></div>
        <div style={cell(c.okBg)}><div style={lb(c.okTx)}>{m.tp.label}</div><div style={ds}>{m.tp.desc}</div></div>
      </div>
    </div>
  );
}

// ─── HOME PAGE ──────────────────────────────────────────────
function Home({c,dark,nav}){
  return(
    <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif"}}>
      <section style={{maxWidth:720,margin:"0 auto",padding:"80px 24px 60px"}}>
        <h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"clamp(2.5rem,5vw,3.5rem)",fontWeight:400,color:c.tx,margin:"0 0 16px",letterSpacing:"-.02em",lineHeight:1.1}}>{SITE.name}</h1>
        <p style={{fontSize:"1.1rem",color:c.txM,margin:0,lineHeight:1.5,maxWidth:540}}>{SITE.positioning}</p>
      </section>
      <section style={{maxWidth:720,margin:"0 auto",padding:"0 24px 60px"}}>
        <SL t="About" c={c}/>
        {ABOUT.paragraphs.map((p,i)=><p key={i} style={{color:i===0?c.tx:c.txM,fontSize:i===0?"1.15rem":".95rem",lineHeight:1.7,margin:"0 0 16px",fontWeight:i===0?500:400,fontStyle:i===0?"italic":"normal",fontFamily:i===0?"'Instrument Serif',Georgia,serif":"'Plus Jakarta Sans',sans-serif"}}>{p}</p>)}
      </section>
      <section style={{maxWidth:720,margin:"0 auto",padding:"0 24px 60px"}}>
        <div style={{display:"flex",flexWrap:"wrap",gap:10}}>{SIGNALS.map(s=><span key={s} style={{display:"inline-block",padding:"6px 16px",border:`1px solid ${c.bd}`,borderRadius:100,fontSize:".8rem",color:c.tx,fontWeight:500}}>{s}</span>)}</div>
      </section>
      <div style={{maxWidth:720,margin:"0 auto",padding:"0 24px"}}><hr style={{border:"none",borderTop:`1px solid ${c.bd}`,margin:"0 0 60px"}}/></div>
      <section style={{maxWidth:1080,margin:"0 auto",padding:"0 24px 80px"}}>
        <SL t="Featured Work" c={c}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:20}}>{CASE_STUDIES.map(s=><Card key={s.id} s={s} c={c} onClick={()=>s.id==="creative-compliance"?nav("creative-compliance"):null}/>)}</div>
      </section>
      {/* Additional + Side Projects — aligned to 1080 like Featured Work */}
      <section style={{maxWidth:1080,margin:"0 auto",padding:"0 24px 60px"}}>
        <SL t="Additional Work" c={c}/>
        {OTHER_WORK.additionalCaseStudies.map(cs=>(
          <div key={cs.title} style={{border:`1px solid ${c.bd}`,borderRadius:8,padding:"24px 28px",marginBottom:24,background:c.bgC}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}><Tag l={cs.tag} c={c}/><span style={{fontSize:".75rem",color:c.txM}}>{cs.subtitle}</span></div>
            <h4 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.2rem",fontWeight:400,color:c.tx,margin:"8px 0"}}>{cs.title}</h4>
            <div style={{fontSize:"1.25rem",fontWeight:700,color:c.ac,margin:"8px 0 12px",letterSpacing:"-.02em"}}>{cs.metric}</div>
            <p style={{color:c.txM,fontSize:".88rem",lineHeight:1.6,margin:0}}>{cs.description}</p>
          </div>
        ))}
        <div style={{marginTop:16}}>
          <SL t="Side Projects & Build Log" c={c}/>
          {OTHER_WORK.sideProjects.map(sp=>(
            <div key={sp.title} style={{padding:"16px 0",borderBottom:`1px solid ${c.bdL}`}}>
              <div style={{fontSize:".95rem",fontWeight:600,color:c.tx,marginBottom:4}}>{sp.title}</div>
              <div style={{fontSize:".82rem",color:c.txM,lineHeight:1.5}}>{sp.description}</div>
            </div>
          ))}
        </div>
      </section>
      <footer style={{borderTop:`1px solid ${c.bd}`,padding:"40px 24px",textAlign:"center"}}>
        <div style={{maxWidth:720,margin:"0 auto"}}>
          <p style={{color:c.txM,fontSize:".85rem",marginBottom:16}}>Interested in working together?</p>
          <div style={{display:"flex",justifyContent:"center",gap:24,flexWrap:"wrap"}}>
            <a href={`mailto:${SITE.email}`} style={{color:c.ac,fontWeight:600,fontSize:".9rem",textDecoration:"none"}}>{SITE.email}</a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" style={{color:c.ac,fontWeight:600,fontSize:".9rem",textDecoration:"none"}}>LinkedIn</a>
          </div>
          <p style={{color:c.txM,fontSize:".7rem",marginTop:24,opacity:.5}}>© 2026 Bidyapathi Ray</p>
        </div>
      </footer>
    </div>
  );
}

// ─── CASE STUDY PAGE ────────────────────────────────────────
function CSPage({c,dark,nav}){
  const sec={maxWidth:720,margin:"0 auto",padding:"0 24px 48px"};
  const h2={fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.6rem",fontWeight:400,color:c.tx,margin:"0 0 20px",letterSpacing:"-.01em"};
  const bd={color:c.txM,fontSize:".93rem",lineHeight:1.75,margin:"0 0 14px"};

  return(
    <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif"}}>
      {/* ── HERO (UNCHANGED) ───────────────────────── */}
      <section style={{maxWidth:720,margin:"0 auto",padding:"60px 24px 48px"}}>
        <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
          <Tag l="Agentic AI" c={c}/><Tag l="Enterprise B2B SaaS" c={c}/>
          <span style={{fontSize:".8rem",color:c.txM,marginLeft:8}}>{CC.hero.company} · {CC.hero.duration}</span>
        </div>
        <h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"clamp(2rem,4vw,2.8rem)",fontWeight:400,color:c.tx,margin:"0 0 12px",letterSpacing:"-.02em",lineHeight:1.15}}>{CC.hero.title}</h1>
        <p style={{fontSize:"1.05rem",color:c.txM,margin:"0 0 8px",lineHeight:1.5}}>{CC.hero.subtitle}</p>
        <p style={{fontSize:".82rem",color:c.txM,margin:0,fontStyle:"italic"}}>{CC.hero.role}</p>
      </section>
      <div style={{maxWidth:720,margin:"0 auto",padding:"0 24px"}}><hr style={{border:"none",borderTop:`1px solid ${c.bd}`,margin:"0 0 48px"}}/></div>

      {/* ── THE PROBLEM ────────────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>The Problem</h2>
        <p style={bd}>{CC.problem.context}</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12,margin:"20px 0"}}>
          {CC.problem.painPoints.map(pp=>(
            <div key={pp.title} style={{padding:"16px 18px",border:`1px solid ${c.bd}`,borderRadius:6,background:c.bgC}}>
              <div style={{fontSize:"1.2rem",marginBottom:6}}>{pp.icon}</div>
              <div style={{fontSize:".85rem",fontWeight:700,color:c.tx,marginBottom:6}}>{pp.title}</div>
              <div style={{fontSize:".8rem",color:c.txM,lineHeight:1.55}}>{pp.detail}</div>
            </div>
          ))}
        </div>
        <p style={{...bd,fontStyle:"italic",borderLeft:`3px solid ${c.ac}`,paddingLeft:16,marginTop:8}}>{CC.problem.signal}</p>
      </section>

      {/* ── THE BET ────────────────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>The Bet: Ship Simple, Validate Fast</h2>
        <p style={bd}>{CC.bet.setup}</p>
        <p style={{...bd,fontWeight:600,color:c.tx}}>{CC.bet.pivot}</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:12,margin:"16px 0 0"}}>
          {CC.bet.blocks.map(b=>(
            <div key={b.label} style={{padding:"18px 20px",border:`1px solid ${c.bd}`,borderRadius:6,background:c.bgC}}>
              <div style={{fontSize:".78rem",fontWeight:700,color:c.ac,textTransform:"uppercase",letterSpacing:".06em",marginBottom:8}}>{b.label}</div>
              <div style={{fontSize:".87rem",color:c.txM,lineHeight:1.65}}>{b.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT I PROTECTED FOR ───────────────────── */}
      <section style={sec}>
        <h2 style={h2}>What I Protected For in V1</h2>
        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          {CC.protected.items.map(it=>(
            <div key={it.n} style={{display:"flex",gap:16,alignItems:"flex-start"}}>
              <span style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.5rem",color:c.ac,fontWeight:400,lineHeight:1,flexShrink:0,width:32,textAlign:"right",marginTop:2}}>{it.n}</span>
              <div style={{flex:1,padding:"16px 20px",border:`1px solid ${c.bd}`,borderRadius:6,background:c.bgC}}>
                <div style={{fontSize:".92rem",fontWeight:700,color:c.tx,marginBottom:6}}>{it.title}</div>
                <div style={{fontSize:".85rem",color:c.txM,lineHeight:1.65}}>{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:20,padding:"16px 20px",background:c.bgA,borderRadius:6,borderLeft:`3px solid ${c.ac}`}}>
          <p style={{...bd,margin:0,fontWeight:500,color:c.tx}}>{CC.protected.validation}</p>
        </div>
      </section>

      {/* ── WHAT V1 REVEALED ───────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>What V1 Revealed</h2>
        <p style={bd}>{CC.v1Revealed.intro}</p>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          {CC.v1Revealed.items.map((it,i)=>(
            <div key={i} style={{padding:"18px 20px",background:c.bgA,borderRadius:6}}>
              <div style={{fontSize:".92rem",fontWeight:700,color:c.tx,marginBottom:6}}>{it.title}</div>
              <div style={{fontSize:".85rem",color:c.txM,lineHeight:1.65}}>{it.desc}</div>
            </div>
          ))}
        </div>
        <p style={{...bd,marginTop:16,fontStyle:"italic"}}>{CC.v1Revealed.conclusion}</p>
      </section>

      {/* ── ARCHITECTURE (UNCHANGED) ───────────────── */}
      <section style={{...sec,maxWidth:780}}>
        <h2 style={h2}>System Architecture: V1 → V2</h2>
        <Arch c={c} dark={dark}/>
      </section>

      {/* ── DESIGNING THE MULTI-AGENT SYSTEM ────────── */}
      <section style={sec}>
        <h2 style={h2}>Designing the Multi-Agent System</h2>
        <p style={bd}>{CC.multiAgent.intro}</p>
        <div style={{display:"flex",flexDirection:"column",gap:20}}>
          {CC.multiAgent.items.map((d,i)=>(
            <div key={i} style={{border:`1px solid ${c.bd}`,borderRadius:6,overflow:"hidden"}}>
              <div style={{padding:"12px 20px",background:c.bgA,borderBottom:`1px solid ${c.bd}`}}>
                <div style={{fontSize:".72rem",fontWeight:600,color:c.txM,letterSpacing:".06em",textTransform:"uppercase"}}>V1 observation</div>
                <div style={{fontSize:".88rem",fontWeight:600,color:c.tx,marginTop:4}}>{d.obs}</div>
              </div>
              <div style={{padding:"14px 20px",background:c.bgC}}>
                <div style={{fontSize:".72rem",fontWeight:700,color:c.ac,letterSpacing:".06em",textTransform:"uppercase",marginBottom:4}}>→ Requirement: {d.req}</div>
                <div style={{fontSize:".85rem",color:c.txM,lineHeight:1.65}}>{d.detail}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:20,padding:"16px 20px",border:`1px solid ${c.bd}`,borderLeft:`3px solid ${c.ac}`,borderRadius:"0 6px 6px 0",background:c.bgC}}>
          <div style={{fontSize:".78rem",fontWeight:700,color:c.ac,textTransform:"uppercase",letterSpacing:".06em",marginBottom:6}}>Tradeoff accepted</div>
          <div style={{fontSize:".85rem",color:c.txM,lineHeight:1.65}}>{CC.multiAgent.tradeoff}</div>
        </div>
      </section>

      {/* ── EVALUATION FRAMEWORK ───────────────────── */}
      <section style={sec}>
        <h2 style={h2}>Evaluation Framework</h2>
        <p style={bd}>{CC.eval.intro}</p>
        <CMatrix c={c}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:12}}>
          {CC.eval.principles.map((p,i)=>(
            <div key={i} style={{padding:"16px 18px",border:`1px solid ${c.bd}`,borderRadius:6,background:c.bgC}}>
              <div style={{fontSize:".82rem",fontWeight:700,color:c.tx,marginBottom:6}}>{p.title}</div>
              <div style={{fontSize:".8rem",color:c.txM,lineHeight:1.6}}>{p.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUTCOMES (responsive 2x2 / 1x4 / 4x1) ── */}
      <section style={sec}>
        <h2 style={h2}>Outcomes</h2>
        <style>{`.og{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:20px}@media(min-width:900px){.og{grid-template-columns:repeat(4,1fr)}}@media(max-width:480px){.og{grid-template-columns:1fr}}`}</style>
        <div className="og">
          {CC.outcomes.map(m=>(
            <div key={m.label} style={{padding:20,border:`1px solid ${c.bd}`,borderRadius:8,background:c.bgC}}>
              <div style={{fontSize:"1.8rem",fontWeight:800,color:c.ac,letterSpacing:"-.03em"}}>{m.value}</div>
              <div style={{fontSize:".82rem",fontWeight:600,color:c.tx,margin:"4px 0"}}>{m.label}</div>
              <div style={{fontSize:".78rem",color:c.txM,lineHeight:1.5}}>{m.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILL SIGNALS (fixed-width chips) ───────── */}
      <section style={sec}>
        <SL t="Skill Signals" c={c}/>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          {CC.skills.map(sd=>(
            <div key={sd.skill} style={{display:"flex",gap:14,alignItems:"flex-start"}}>
              <span style={{display:"inline-block",padding:"4px 0",borderRadius:100,background:c.tgBg,color:c.tgTx,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:".72rem",fontWeight:600,letterSpacing:".02em",whiteSpace:"nowrap",flexShrink:0,minWidth:168,textAlign:"center"}}>{sd.skill}</span>
              <span style={{fontSize:".85rem",color:c.txM,lineHeight:1.6,flex:1}}>{sd.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTINUE READING ───────────────────────── */}
      <div style={{maxWidth:720,margin:"0 auto",padding:"0 24px"}}><hr style={{border:"none",borderTop:`1px solid ${c.bd}`,margin:"0 0 32px"}}/></div>
      <section style={{...sec,paddingBottom:80}}>
        <SL t="Continue Reading" c={c}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16}}>
          {CASE_STUDIES.filter(s=>s.id!=="creative-compliance").map(s=>(
            <div key={s.id} style={{padding:20,border:`1px solid ${c.bd}`,borderRadius:8,background:c.bgC}}>
              <Tag l={s.tag} c={c}/>
              <h4 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.1rem",fontWeight:400,color:c.tx,margin:"12px 0 4px"}}>{s.title}</h4>
              <span style={{fontSize:".78rem",color:c.txM}}>{s.subtitle}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── APP SHELL ──────────────────────────────────────────────
export default function Portfolio(){
  const[dark,setDark]=useState(false);
  const[page,setPage]=useState("home");
  const c=S(dark);
  const nav=(p)=>{setPage(p);window.scrollTo(0,0);};
  return(
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}::selection{background:rgba(180,83,9,.2)}`}</style>
      <div style={{minHeight:"100vh",background:c.bg,color:c.tx,transition:"background .3s,color .3s"}}>
        <Nav dark={dark} toggle={()=>setDark(!dark)} c={c} nav={nav} page={page}/>
        {page==="home"&&<Home c={c} dark={dark} nav={nav}/>}
        {page==="creative-compliance"&&<CSPage c={c} dark={dark} nav={nav}/>}
      </div>
    </>
  );
}
