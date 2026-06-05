export default function AgenticShelf({c,dark}){
  const bF=dark?"#1E1E1E":"#FFF",bS=dark?"#333":"#D1CCC3",aF=dark?"rgba(217,119,6,.15)":"rgba(180,83,9,.06)",aS=c.ac,tC=c.tx,mC=c.txM,arr=dark?"#555":"#B0AAA0";
  const surfaces=["ChatGPT","Gemini","Claude","AI Mode","Rufus"];
  return(
    <div style={{margin:"32px 0"}}>
      <div style={{fontSize:".7rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:c.ac,marginBottom:12,fontFamily:"'Plus Jakarta Sans',sans-serif"}}>Build once · Deploy everywhere</div>
      <svg viewBox="0 0 680 260" style={{width:"100%",maxWidth:680}}>
        <defs><marker id="bs1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill={arr}/></marker></defs>

        {/* Brand input */}
        <rect x="0" y="105" width="120" height="56" rx="6" fill={bF} stroke={bS} strokeWidth="1.5"/>
        <text x="60" y="130" textAnchor="middle" fill={tC} fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Brand</text>
        <text x="60" y="146" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">Product data</text>

        <line x1="125" y1="133" x2="180" y2="133" stroke={arr} strokeWidth="1.5" markerEnd="url(#bs1)"/>

        {/* Platform */}
        <rect x="185" y="95" width="280" height="76" rx="6" fill={aF} stroke={aS} strokeWidth="1.5" strokeDasharray="4,3"/>
        <text x="325" y="120" textAnchor="middle" fill={tC} fontSize="12" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">BrandStore Studio</text>
        <text x="325" y="138" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">Self-serve · No engineering required</text>
        <text x="325" y="154" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">Output: publish-ready MCP server + protocol feeds</text>

        <line x1="470" y1="133" x2="520" y2="133" stroke={arr} strokeWidth="1.5" markerEnd="url(#bs1)"/>

        {/* Hub */}
        <circle cx="540" cy="133" r="14" fill={aF} stroke={aS} strokeWidth="1.5"/>
        <text x="540" y="137" textAnchor="middle" fill={tC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">⇄</text>

        {/* Surface fan-out */}
        {surfaces.map((n,i)=>{
          const y=20+i*48;
          return(
            <g key={n}>
              <line x1="554" y1="133" x2="600" y2={y+14} stroke={arr} strokeWidth="1" strokeDasharray="3,2"/>
              <rect x="600" y={y} width="80" height="28" rx="14" fill={bF} stroke={bS} strokeWidth="1.2"/>
              <text x="640" y={y+18} textAnchor="middle" fill={tC} fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">{n}</text>
            </g>
          );
        })}

        <text x="640" y="252" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontStyle="italic">…and what comes next</text>
      </svg>
    </div>
  );
}
