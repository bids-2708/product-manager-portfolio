export default function HubSpoke({ c, dark }) {
  const bF = dark ? "#1E1E1E" : "#FFF";
  const bS = dark ? "#333" : "#D1CCC3";
  const aF = dark ? "rgba(217,119,6,.18)" : "rgba(180,83,9,.07)";
  const arr = dark ? "#555" : "#B0AAA0";

  // Hub center
  const cx = 290, cy = 195;
  // Radii
  const r1 = 118; // field centers
  const r2 = 172; // village dots

  // 6 field centers, starting from top (−90°), spaced 60° apart
  const centers = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 - 90) * (Math.PI / 180);
    return { x: cx + r1 * Math.cos(angle), y: cy + r1 * Math.sin(angle), angle };
  });

  // 3 village dots per field center, spread perpendicular to the spoke
  const villageDots = centers.flatMap((fc) => {
    const perp = fc.angle + Math.PI / 2;
    return [-22, 0, 22].map((offset) => ({
      x: cx + r2 * Math.cos(fc.angle) + Math.cos(perp) * offset,
      y: cy + r2 * Math.sin(fc.angle) + Math.sin(perp) * offset,
    }));
  });

  return (
    <div style={{ margin: "28px 0" }}>
      <div style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: c.ac, marginBottom: 12, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
        Distribution Architecture
      </div>
      <svg viewBox="0 0 580 400" style={{ width: "100%", maxWidth: 580 }}>
        {/* Dashed lines to village dots */}
        {centers.map((fc, i) =>
          villageDots.slice(i * 3, i * 3 + 3).map((dot, j) => (
            <line key={`vl-${i}-${j}`} x1={fc.x} y1={fc.y} x2={dot.x} y2={dot.y} stroke={arr} strokeWidth="0.8" strokeDasharray="2,3" />
          ))
        )}

        {/* Spokes from hub to field centers */}
        {centers.map((fc, i) => (
          <line key={`spoke-${i}`} x1={cx} y1={cy} x2={fc.x} y2={fc.y} stroke={arr} strokeWidth="1.5" />
        ))}

        {/* Village dots */}
        {villageDots.map((dot, i) => (
          <circle key={`vd-${i}`} cx={dot.x} cy={dot.y} r="4" fill={arr} opacity="0.55" />
        ))}

        {/* Field center boxes */}
        {centers.map((fc, i) => (
          <g key={`fc-${i}`}>
            <rect x={fc.x - 28} y={fc.y - 15} width="56" height="30" rx="4" fill={bF} stroke={bS} strokeWidth="1.5" />
            <text x={fc.x} y={fc.y + 5} textAnchor="middle" fill={c.tx} fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Field Centre</text>
          </g>
        ))}

        {/* Hub */}
        <circle cx={cx} cy={cy} r="54" fill={aF} stroke={c.ac} strokeWidth="2" />
        <text x={cx} y={cy - 10} textAnchor="middle" fill={c.tx} fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Production</text>
        <text x={cx} y={cy + 6} textAnchor="middle" fill={c.tx} fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Unit</text>
        <text x={cx} y={cy + 21} textAnchor="middle" fill={c.ac} fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif">Tilonia, SWRC</text>

        {/* Caption */}
        <text x={290} y={392} textAnchor="middle" fill={c.txM} fontSize="8.5" fontFamily="Plus Jakarta Sans,sans-serif">
          12 Field Centres · 453 Villages · 180 Women Entrepreneurs
        </text>
      </svg>
    </div>
  );
}
