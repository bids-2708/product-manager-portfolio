export default function MonitoringFlow({ c, dark }) {
  const bF = dark ? "#1E1E1E" : "#FFF";
  const bS = dark ? "#333" : "#D1CCC3";
  const aF = dark ? "rgba(217,119,6,.18)" : "rgba(180,83,9,.07)";
  const arr = dark ? "#555" : "#B0AAA0";

  const nW = 128, nH = 62, nY = 16, cy = nY + nH / 2; // node width, height, top, center-y
  const nodes = [
    { x: 28,  lines: ["Daily", "Tracking"],  sub: "Biometric",       accent: true },
    { x: 182, lines: ["Health", "Mapping"],   sub: "Monthly check-ups", accent: false },
    { x: 336, lines: ["Teacher", "KPI"],      sub: "Outcome-linked",  accent: false },
    { x: 490, lines: ["Award", "Ceremony"],   sub: "Social prestige", accent: true },
  ];

  return (
    <div style={{ margin: "28px 0" }}>
      <div style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: c.ac, marginBottom: 12, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
        Monitoring &amp; Accountability Loop
      </div>
      <svg viewBox="0 0 660 160" style={{ width: "100%", maxWidth: 660 }}>
        <defs>
          <marker id="mfa" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill={arr} />
          </marker>
          <marker id="mfb" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill={c.ac} />
          </marker>
        </defs>

        {/* Forward arrows between nodes */}
        {nodes.slice(0, -1).map((n, i) => (
          <line key={`arr-${i}`} x1={n.x + nW} y1={cy} x2={nodes[i + 1].x} y2={cy} stroke={arr} strokeWidth="1.5" markerEnd="url(#mfa)" />
        ))}

        {/* Feedback loop — right edge of last node, down, across, up to first node */}
        <path
          d={`M ${nodes[3].x + nW},${cy} L 636,${cy} L 636,128 L 16,128 L 16,${cy} L 26,${cy}`}
          fill="none" stroke={c.ac} strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#mfb)"
        />
        <text x={330} y={148} textAnchor="middle" fill={c.txM} fontSize="7.5" fontFamily="Plus Jakarta Sans,sans-serif">
          Continuous reinforcement — compliance dropped when ceremony cycles lapsed
        </text>

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={`node-${i}`}>
            <rect x={n.x} y={nY} width={nW} height={nH} rx="6"
              fill={n.accent ? aF : bF}
              stroke={n.accent ? c.ac : bS}
              strokeWidth="1.5"
            />
            <text x={n.x + nW / 2} y={nY + 22} textAnchor="middle" fill={c.tx} fontSize="10.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">{n.lines[0]}</text>
            <text x={n.x + nW / 2} y={nY + 36} textAnchor="middle" fill={c.tx} fontSize="10.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">{n.lines[1]}</text>
            <text x={n.x + nW / 2} y={nY + 52} textAnchor="middle" fill={c.txM} fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">{n.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
