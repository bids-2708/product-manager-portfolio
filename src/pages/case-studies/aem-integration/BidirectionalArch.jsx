export default function BidirectionalArch({ c, dark }) {
  const sys = dark ? "#1E1E1E" : "#FFF";
  const sysBd = dark ? "#3A3A3A" : "#D1CCC3";
  const mute = c.txM;
  const ac = c.ac;
  const acBg = dark ? "rgba(217,119,6,.14)" : "rgba(180,83,9,.06)";
  const noteBg = c.bgA;

  const lbl = { fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600 };
  const dim = { fontFamily: "'Plus Jakarta Sans',sans-serif" };

  return (
    <div style={{ margin: "28px 0" }}>
      <div style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: c.ac, marginBottom: 12, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
        Bidirectional Integration Architecture
      </div>
      <svg viewBox="0 0 680 460" style={{ width: "100%", maxWidth: 680 }}>
        <defs>
          <marker id="aArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* AEM container */}
        <rect x="40" y="40" width="180" height="380" rx="16" fill={sys} stroke={sysBd} strokeWidth="1.2" />
        <text x="130" y="72" textAnchor="middle" {...lbl} fontSize="14" fill={c.tx}>AEM (DAM)</text>
        <text x="130" y="90" textAnchor="middle" {...dim} fontSize="11" fill={mute}>Source of truth</text>

        <rect x="60" y="120" width="140" height="56" rx="8" fill={sys} stroke={sysBd} strokeWidth="1" />
        <text x="130" y="142" textAnchor="middle" {...lbl} fontSize="13" fill={c.tx}>Asset library</text>
        <text x="130" y="160" textAnchor="middle" {...dim} fontSize="11" fill={mute}>Images · metadata</text>

        <rect x="60" y="310" width="140" height="56" rx="8" fill={sys} stroke={sysBd} strokeWidth="1" />
        <text x="130" y="332" textAnchor="middle" {...lbl} fontSize="13" fill={c.tx}>Export folder</text>
        <text x="130" y="350" textAnchor="middle" {...dim} fontSize="11" fill={mute}>Finished creatives</text>

        {/* DaVinci container */}
        <rect x="460" y="40" width="180" height="380" rx="16" fill={acBg} stroke={ac} strokeWidth="1.2" />
        <text x="550" y="72" textAnchor="middle" {...lbl} fontSize="14" fill={c.tx}>DaVinci</text>
        <text x="550" y="90" textAnchor="middle" {...dim} fontSize="11" fill={ac}>Creative platform</text>

        <rect x="480" y="120" width="140" height="56" rx="8" fill={sys} stroke={ac} strokeWidth="1" />
        <text x="550" y="142" textAnchor="middle" {...lbl} fontSize="13" fill={c.tx}>Imported assets</text>
        <text x="550" y="160" textAnchor="middle" {...dim} fontSize="11" fill={ac}>With metadata</text>

        <rect x="480" y="210" width="140" height="56" rx="8" fill={sys} stroke={ac} strokeWidth="1" />
        <text x="550" y="232" textAnchor="middle" {...lbl} fontSize="13" fill={c.tx}>Template assembly</text>
        <text x="550" y="250" textAnchor="middle" {...dim} fontSize="11" fill={ac}>Multi-format output</text>

        <rect x="480" y="310" width="140" height="56" rx="8" fill={sys} stroke={ac} strokeWidth="1" />
        <text x="550" y="332" textAnchor="middle" {...lbl} fontSize="13" fill={c.tx}>Export queue</text>
        <text x="550" y="350" textAnchor="middle" {...dim} fontSize="11" fill={ac}>Writeback config</text>

        {/* IMPORT flow */}
        <text x="340" y="112" textAnchor="middle" {...lbl} fontSize="12" fill={c.tx}>Import</text>
        <line x1="200" y1="148" x2="478" y2="148" stroke={ac} strokeWidth="1.2" markerEnd="url(#aArrow)" fill="none" />
        <rect x="245" y="128" width="90" height="28" rx="6" fill={c.bgC} stroke={c.bd} strokeWidth="1" />
        <text x="290" y="146" textAnchor="middle" {...dim} fontSize="11" fill={c.tx}>Folder browse</text>
        <rect x="345" y="128" width="100" height="28" rx="6" fill={c.bgC} stroke={c.bd} strokeWidth="1" />
        <text x="395" y="146" textAnchor="middle" {...dim} fontSize="11" fill={c.tx}>Metadata filter</text>

        {/* UUID callout */}
        <line x1="340" y1="156" x2="340" y2="168" stroke={mute} strokeWidth="0.8" strokeDasharray="4,3" />
        <rect x="258" y="170" width="164" height="28" rx="6" fill={noteBg} stroke={c.bd} strokeWidth="1" />
        <text x="340" y="188" textAnchor="middle" {...dim} fontSize="11" fill={ac}>UUID → URL resolution</text>

        {/* Internal DaVinci flow arrows */}
        <line x1="550" y1="176" x2="550" y2="208" stroke={mute} strokeWidth="0.8" markerEnd="url(#aArrow)" fill="none" opacity="0.6" />
        <line x1="550" y1="266" x2="550" y2="308" stroke={mute} strokeWidth="0.8" markerEnd="url(#aArrow)" fill="none" opacity="0.6" />

        {/* EXPORT flow */}
        <text x="340" y="302" textAnchor="middle" {...lbl} fontSize="12" fill={c.tx}>Export</text>
        <line x1="478" y1="338" x2="200" y2="338" stroke={ac} strokeWidth="1.2" markerEnd="url(#aArrow)" fill="none" />
        <rect x="250" y="348" width="120" height="28" rx="6" fill={c.bgC} stroke={c.bd} strokeWidth="1" />
        <text x="310" y="366" textAnchor="middle" {...dim} fontSize="11" fill={c.tx}>Metadata writeback</text>
        <rect x="380" y="348" width="90" height="28" rx="6" fill={c.bgC} stroke={c.bd} strokeWidth="1" />
        <text x="425" y="366" textAnchor="middle" {...dim} fontSize="11" fill={c.tx}>PNG / JPEG</text>

        <text x="340" y="432" textAnchor="middle" {...dim} fontSize="11" fill={mute}>
          Entire flow is self-serve — no engineering involvement per client
        </text>
      </svg>
    </div>
  );
}
