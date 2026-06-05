export default function RoadmapTimeline({c,dark}){
  const bF=dark?"#1E1E1E":"#FFF",bS=dark?"#333":"#D1CCC3",aF=dark?"rgba(217,119,6,.15)":"rgba(180,83,9,.06)",aS=c.ac,tC=c.tx,mC=c.txM,arr=dark?"#555":"#B0AAA0";
  const phases=[
    {p:"1a",t:"ACP feed",s:"In delivery",active:true},
    {p:"1b",t:"GMC feed",s:"Next",active:true},
    {p:"2a",t:"ACP Checkout",s:"Planned",active:false},
    {p:"2b",t:"UCP Catalog",s:"Planned",active:false},
  ];
  return(
    <div style={{margin:"32px 0"}}>
      <div style={{fontSize:".7rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:c.ac,marginBottom:12,fontFamily:"'Plus Jakarta Sans',sans-serif"}}>Phase 1a → 2b · gated sequence</div>
      <svg viewBox="0 0 680 200" style={{width:"100%",maxWidth:680}}>
        <defs><marker id="rt1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill={arr}/></marker><marker id="rt2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill={aS}/></marker></defs>

        {/* Baseline */}
        <line x1="40" y1="100" x2="640" y2="100" stroke={arr} strokeWidth="1" strokeDasharray="2,3"/>

        {phases.map((ph,i)=>{
          const x=70+i*155;
          const fill=ph.active?aF:bF;
          const stroke=ph.active?aS:bS;
          const labelColor=ph.active?c.ac:mC;
          return(
            <g key={ph.p}>
              {/* Node */}
              <circle cx={x} cy="100" r="10" fill={stroke} stroke={stroke} strokeWidth="1.5"/>
              <text x={x} y="104" textAnchor="middle" fill={dark?"#1A1A1A":"#FFF"} fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">{ph.p}</text>
              {/* Card */}
              <rect x={x-60} y="125" width="120" height="60" rx="6" fill={fill} stroke={stroke} strokeWidth="1.2"/>
              <text x={x} y="146" textAnchor="middle" fill={tC} fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">{ph.t}</text>
              <text x={x} y="162" textAnchor="middle" fill={labelColor} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600" letterSpacing=".05em">{ph.s.toUpperCase()}</text>
              {/* Forward arrow */}
              {i<phases.length-1&&(<line x1={x+12} y1="100" x2={x+143} y2="100" stroke={arr} strokeWidth="1.5" markerEnd="url(#rt1)"/>)}
              {/* Phase label above */}
              <text x={x} y="78" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600" letterSpacing=".06em">PHASE {ph.p.toUpperCase()}</text>
            </g>
          );
        })}

        {/* GMC → UCP dependency arc (1b → 2b) */}
        <path d="M 225 90 Q 412 30 535 90" fill="none" stroke={aS} strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#rt2)"/>
        <text x="380" y="38" textAnchor="middle" fill={c.ac} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">GMC enrolment required for UCP</text>
      </svg>
    </div>
  );
}
