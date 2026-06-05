export default function JudgmentTriangle({c,dark}){
  const bF=dark?"#1E1E1E":"#FFF",bS=dark?"#333":"#D1CCC3",aF=dark?"rgba(217,119,6,.15)":"rgba(180,83,9,.06)",aS=c.ac,tC=c.tx,mC=c.txM;
  return(
    <div style={{margin:"32px 0"}}>
      <div style={{fontSize:".7rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:c.ac,marginBottom:12,fontFamily:"'Plus Jakarta Sans',sans-serif"}}>Three forces · one reconciliation</div>
      <svg viewBox="0 0 680 320" style={{width:"100%",maxWidth:680}}>
        {/* Three overlapping circles */}
        <circle cx="260" cy="130" r="100" fill={aF} stroke={aS} strokeWidth="1.5" opacity="0.8"/>
        <circle cx="420" cy="130" r="100" fill={aF} stroke={aS} strokeWidth="1.5" opacity="0.8"/>
        <circle cx="340" cy="220" r="100" fill={aF} stroke={aS} strokeWidth="1.5" opacity="0.8"/>

        {/* Labels for each circle */}
        <text x="190" y="60" textAnchor="middle" fill={tC} fontSize="12" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Leadership</text>
        <text x="190" y="76" textAnchor="middle" fill={tC} fontSize="12" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Ambition</text>

        <text x="490" y="60" textAnchor="middle" fill={tC} fontSize="12" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Client</text>
        <text x="490" y="76" textAnchor="middle" fill={tC} fontSize="12" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Pull</text>

        <text x="340" y="304" textAnchor="middle" fill={tC} fontSize="12" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Protocol Readiness</text>

        {/* Centre callout */}
        <rect x="265" y="155" width="150" height="38" rx="6" fill={bF} stroke={aS} strokeWidth="1.5"/>
        <text x="340" y="173" textAnchor="middle" fill={c.ac} fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">Roadmap</text>
        <text x="340" y="186" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">= the reconciliation</text>
      </svg>
    </div>
  );
}
