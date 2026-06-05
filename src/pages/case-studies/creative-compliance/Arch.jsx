export default function Arch({c,dark}){
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
