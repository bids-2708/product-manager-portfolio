export default function WorkflowCompare({ c, dark }) {
  const sys = dark ? "#1E1E1E" : "#FFF";
  const sysBd = dark ? "#3A3A3A" : "#D1CCC3";
  const mute = c.txM;
  const bad = dark ? "#F87171" : "#B91C1C";
  const badBg = dark ? "rgba(248,113,113,.1)" : "rgba(185,28,28,.06)";
  const good = c.ac;
  const goodBg = dark ? "rgba(217,119,6,.14)" : "rgba(180,83,9,.08)";

  const lbl = { fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600 };
  const dim = { fontFamily: "'Plus Jakarta Sans',sans-serif" };

  return (
    <div style={{ margin: "28px 0" }}>
      <div style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: c.ac, marginBottom: 12, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
        Before vs. After
      </div>
      <svg viewBox="0 0 680 450" style={{ width: "100%", maxWidth: 680 }}>
        <defs>
          <marker id="wfArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* BEFORE */}
        <text x="40" y="38" {...lbl} fontSize="13" fill={c.tx}>Before · manual workflow</text>
        <text x="40" y="58" {...dim} fontSize="11" fill={mute}>175–200 hrs/day · ~$4M/year</text>

        {/* AEM box (start) */}
        <rect x="40" y="80" width="110" height="44" rx="8" fill={sys} stroke={sysBd} strokeWidth="1" />
        <text x="95" y="107" textAnchor="middle" {...lbl} fontSize="13" fill={c.tx}>AEM</text>
        <line x1="150" y1="102" x2="184" y2="102" stroke={mute} strokeWidth="1" markerEnd="url(#wfArrow)" fill="none" />

        {/* Manual steps */}
        {[
          { x: 186, label: "Manual", sub: "download" },
          { x: 316, label: "Manual", sub: "editing" },
          { x: 446, label: "Manual", sub: "upload + tag" },
        ].map((s, i) => (
          <g key={i}>
            <rect x={s.x} y="80" width="100" height="44" rx="8" fill={badBg} stroke={bad} strokeWidth="1" />
            <text x={s.x + 50} y="97" textAnchor="middle" {...dim} fontSize="11" fill={bad}>{s.label}</text>
            <text x={s.x + 50} y="113" textAnchor="middle" {...dim} fontSize="11" fill={bad}>{s.sub}</text>
          </g>
        ))}
        <line x1="286" y1="102" x2="314" y2="102" stroke={mute} strokeWidth="1" markerEnd="url(#wfArrow)" fill="none" />
        <line x1="416" y1="102" x2="444" y2="102" stroke={mute} strokeWidth="1" markerEnd="url(#wfArrow)" fill="none" />
        <line x1="546" y1="102" x2="574" y2="102" stroke={mute} strokeWidth="1" markerEnd="url(#wfArrow)" fill="none" />

        {/* AEM box (end) */}
        <rect x="576" y="80" width="64" height="44" rx="8" fill={sys} stroke={sysBd} strokeWidth="1" />
        <text x="608" y="107" textAnchor="middle" {...lbl} fontSize="13" fill={c.tx}>AEM</text>

        {/* Bottleneck callout */}
        <line x1="366" y1="124" x2="366" y2="152" stroke={mute} strokeWidth="0.8" strokeDasharray="4,3" />
        <text x="366" y="170" textAnchor="middle" {...dim} fontSize="11" fill={mute}>70–100 creatives/day × multiple aspect ratios</text>

        {/* Divider */}
        <line x1="40" y1="215" x2="640" y2="215" stroke={c.bd} strokeWidth="1" />

        {/* AFTER */}
        <text x="40" y="245" {...lbl} fontSize="13" fill={c.tx}>After · integrated workflow</text>
        <text x="40" y="265" {...dim} fontSize="11" fill={mute}>~$2M/year · 30K manual uploads eliminated</text>

        {/* AEM (start) */}
        <rect x="40" y="290" width="110" height="44" rx="8" fill={sys} stroke={sysBd} strokeWidth="1" />
        <text x="95" y="317" textAnchor="middle" {...lbl} fontSize="13" fill={c.tx}>AEM</text>
        <line x1="150" y1="312" x2="184" y2="312" stroke={good} strokeWidth="1.2" markerEnd="url(#wfArrow)" fill="none" />

        {/* Auto import */}
        <rect x="186" y="285" width="110" height="54" rx="8" fill={goodBg} stroke={good} strokeWidth="1" />
        <text x="241" y="306" textAnchor="middle" {...lbl} fontSize="12" fill={c.tx}>Auto import</text>
        <text x="241" y="324" textAnchor="middle" {...dim} fontSize="11" fill={c.ac}>Metadata intact</text>
        <line x1="296" y1="312" x2="324" y2="312" stroke={good} strokeWidth="1.2" markerEnd="url(#wfArrow)" fill="none" />

        {/* DaVinci assembly */}
        <rect x="326" y="285" width="120" height="54" rx="8" fill={goodBg} stroke={good} strokeWidth="1" />
        <text x="386" y="306" textAnchor="middle" {...lbl} fontSize="12" fill={c.tx}>DaVinci</text>
        <text x="386" y="324" textAnchor="middle" {...dim} fontSize="11" fill={c.ac}>Template assembly</text>
        <line x1="446" y1="312" x2="474" y2="312" stroke={good} strokeWidth="1.2" markerEnd="url(#wfArrow)" fill="none" />

        {/* Auto export */}
        <rect x="476" y="285" width="110" height="54" rx="8" fill={goodBg} stroke={good} strokeWidth="1" />
        <text x="531" y="306" textAnchor="middle" {...lbl} fontSize="12" fill={c.tx}>Auto export</text>
        <text x="531" y="324" textAnchor="middle" {...dim} fontSize="11" fill={c.ac}>Metadata writeback</text>
        <line x1="586" y1="312" x2="614" y2="312" stroke={good} strokeWidth="1.2" markerEnd="url(#wfArrow)" fill="none" />

        {/* AEM (end) */}
        <rect x="616" y="290" width="24" height="44" rx="8" fill={sys} stroke={sysBd} strokeWidth="1" />
        <text x="628" y="317" textAnchor="middle" {...lbl} fontSize="10" fill={c.tx}>AEM</text>

        {/* Human review callout */}
        <line x1="386" y1="339" x2="386" y2="370" stroke={mute} strokeWidth="0.8" strokeDasharray="4,3" />
        <rect x="290" y="372" width="192" height="28" rx="6" fill={c.bgA} stroke={c.bd} strokeWidth="1" />
        <text x="386" y="390" textAnchor="middle" {...dim} fontSize="11" fill={c.tx}>Human creative review preserved</text>

        {/* Caption */}
        <text x="340" y="430" textAnchor="middle" {...dim} fontSize="11" fill={mute}>
          Self-serve — the client's team operates the flow without DaVinci support involvement
        </text>
      </svg>
    </div>
  );
}
