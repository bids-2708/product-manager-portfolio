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
        <rect x="40" y="80" width="70" height="44" rx="8" fill={sys} stroke={sysBd} strokeWidth="1" />
        <text x="75" y="107" textAnchor="middle" {...lbl} fontSize="13" fill={c.tx}>AEM</text>
        <line x1="110" y1="102" x2="144" y2="102" stroke={mute} strokeWidth="1" markerEnd="url(#wfArrow)" fill="none" />

        {/* Manual steps */}
        {[
          { x: 146, label: "Manual", sub: "download" },
          { x: 282, label: "Manual", sub: "editing" },
          { x: 418, label: "Manual", sub: "upload + tag" },
        ].map((s, i) => (
          <g key={i}>
            <rect x={s.x} y="80" width="100" height="44" rx="8" fill={badBg} stroke={bad} strokeWidth="1" />
            <text x={s.x + 50} y="97" textAnchor="middle" {...dim} fontSize="11" fill={bad}>{s.label}</text>
            <text x={s.x + 50} y="113" textAnchor="middle" {...dim} fontSize="11" fill={bad}>{s.sub}</text>
          </g>
        ))}
        <line x1="246" y1="102" x2="280" y2="102" stroke={mute} strokeWidth="1" markerEnd="url(#wfArrow)" fill="none" />
        <line x1="382" y1="102" x2="416" y2="102" stroke={mute} strokeWidth="1" markerEnd="url(#wfArrow)" fill="none" />
        <line x1="518" y1="102" x2="552" y2="102" stroke={mute} strokeWidth="1" markerEnd="url(#wfArrow)" fill="none" />

        {/* AEM box (end) */}
        <rect x="554" y="80" width="70" height="44" rx="8" fill={sys} stroke={sysBd} strokeWidth="1" />
        <text x="589" y="107" textAnchor="middle" {...lbl} fontSize="13" fill={c.tx}>AEM</text>

        {/* Bottleneck callout */}
        <line x1="332" y1="124" x2="332" y2="152" stroke={mute} strokeWidth="0.8" strokeDasharray="4,3" />
        <text x="332" y="170" textAnchor="middle" {...dim} fontSize="11" fill={mute}>70–100 creatives/day × multiple aspect ratios</text>

        {/* Divider */}
        <line x1="40" y1="215" x2="640" y2="215" stroke={c.bd} strokeWidth="1" />

        {/* AFTER */}
        <text x="40" y="245" {...lbl} fontSize="13" fill={c.tx}>After · integrated workflow</text>
        <text x="40" y="265" {...dim} fontSize="11" fill={mute}>~$2M/year · 30K manual uploads eliminated</text>

        {/* AEM (start) */}
        <rect x="40" y="290" width="70" height="44" rx="8" fill={sys} stroke={sysBd} strokeWidth="1" />
        <text x="75" y="317" textAnchor="middle" {...lbl} fontSize="13" fill={c.tx}>AEM</text>
        <line x1="110" y1="312" x2="144" y2="312" stroke={good} strokeWidth="1.2" markerEnd="url(#wfArrow)" fill="none" />

        {/* Auto import */}
        <rect x="146" y="285" width="110" height="54" rx="8" fill={goodBg} stroke={good} strokeWidth="1" />
        <text x="201" y="306" textAnchor="middle" {...lbl} fontSize="12" fill={c.tx}>Auto import</text>
        <text x="201" y="324" textAnchor="middle" {...dim} fontSize="11" fill={c.ac}>Metadata intact</text>
        <line x1="256" y1="312" x2="290" y2="312" stroke={good} strokeWidth="1.2" markerEnd="url(#wfArrow)" fill="none" />

        {/* DaVinci assembly */}
        <rect x="292" y="285" width="120" height="54" rx="8" fill={goodBg} stroke={good} strokeWidth="1" />
        <text x="352" y="306" textAnchor="middle" {...lbl} fontSize="12" fill={c.tx}>DaVinci</text>
        <text x="352" y="324" textAnchor="middle" {...dim} fontSize="11" fill={c.ac}>Template assembly</text>
        <line x1="412" y1="312" x2="446" y2="312" stroke={good} strokeWidth="1.2" markerEnd="url(#wfArrow)" fill="none" />

        {/* Auto export */}
        <rect x="448" y="285" width="110" height="54" rx="8" fill={goodBg} stroke={good} strokeWidth="1" />
        <text x="503" y="306" textAnchor="middle" {...lbl} fontSize="12" fill={c.tx}>Auto export</text>
        <text x="503" y="324" textAnchor="middle" {...dim} fontSize="11" fill={c.ac}>Metadata writeback</text>
        <line x1="558" y1="312" x2="592" y2="312" stroke={good} strokeWidth="1.2" markerEnd="url(#wfArrow)" fill="none" />

        {/* AEM (end) */}
        <rect x="594" y="290" width="70" height="44" rx="8" fill={sys} stroke={sysBd} strokeWidth="1" />
        <text x="629" y="317" textAnchor="middle" {...lbl} fontSize="13" fill={c.tx}>AEM</text>

        {/* Human review callout */}
        <line x1="352" y1="339" x2="352" y2="370" stroke={mute} strokeWidth="0.8" strokeDasharray="4,3" />
        <rect x="256" y="372" width="192" height="28" rx="6" fill={c.bgA} stroke={c.bd} strokeWidth="1" />
        <text x="352" y="390" textAnchor="middle" {...dim} fontSize="11" fill={c.tx}>Human creative review preserved</text>

        {/* Caption */}
        <text x="340" y="430" textAnchor="middle" {...dim} fontSize="11" fill={mute}>
          Self-serve — the client's team operates the flow without DaVinci support involvement
        </text>
      </svg>
    </div>
  );
}
