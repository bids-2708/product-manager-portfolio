export default function ProtocolStack({c,dark}){
  const bF=dark?"#1E1E1E":"#FFF",bS=dark?"#333":"#D1CCC3",aF=dark?"rgba(217,119,6,.15)":"rgba(180,83,9,.06)",aS=c.ac,tC=c.tx,mC=c.txM,arr=dark?"#555":"#B0AAA0";
  return(
    <div style={{margin:"32px 0"}}>
      <div style={{fontSize:".7rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:c.ac,marginBottom:12,fontFamily:"'Plus Jakarta Sans',sans-serif"}}>The Protocol Stack</div>
      <svg viewBox="0 0 680 260" style={{width:"100%",maxWidth:680}}>
        <defs><marker id="ps1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill={arr}/></marker></defs>

        {/* Top: Surfaces */}
        <text x="0" y="14" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700" letterSpacing="1">SURFACES</text>
        <rect x="40" y="22" width="140" height="34" rx="17" fill={bF} stroke={bS} strokeWidth="1.2"/>
        <text x="110" y="43" textAnchor="middle" fill={tC} fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">ChatGPT</text>
        <rect x="270" y="22" width="140" height="34" rx="17" fill={bF} stroke={bS} strokeWidth="1.2"/>
        <text x="340" y="40" textAnchor="middle" fill={tC} fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Google AI Mode</text>
        <text x="340" y="51" textAnchor="middle" fill={mC} fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif">+ Shopping</text>
        <rect x="500" y="22" width="140" height="34" rx="17" fill={bF} stroke={bS} strokeWidth="1.2"/>
        <text x="570" y="43" textAnchor="middle" fill={tC} fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600">Gemini</text>

        {/* Connecting lines surfaces → protocols */}
        <line x1="110" y1="56" x2="110" y2="86" stroke={arr} strokeWidth="1.2" markerEnd="url(#ps1)"/>
        <line x1="340" y1="56" x2="340" y2="86" stroke={arr} strokeWidth="1.2" markerEnd="url(#ps1)"/>
        <line x1="570" y1="56" x2="570" y2="86" stroke={arr} strokeWidth="1.2" markerEnd="url(#ps1)"/>

        {/* Middle: Protocols */}
        <text x="0" y="104" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700" letterSpacing="1">PROTOCOLS</text>
        <rect x="40" y="112" width="140" height="50" rx="6" fill={aF} stroke={aS} strokeWidth="1.5"/>
        <text x="110" y="132" textAnchor="middle" fill={tC} fontSize="12" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">ACP</text>
        <text x="110" y="148" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">Agentic Commerce Protocol</text>

        <rect x="270" y="112" width="140" height="50" rx="6" fill={aF} stroke={aS} strokeWidth="1.5"/>
        <text x="340" y="132" textAnchor="middle" fill={tC} fontSize="12" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">GMC</text>
        <text x="340" y="148" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">Google Merchant Center</text>

        <rect x="500" y="112" width="140" height="50" rx="6" fill={aF} stroke={aS} strokeWidth="1.5"/>
        <text x="570" y="132" textAnchor="middle" fill={tC} fontSize="12" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">UCP</text>
        <text x="570" y="148" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">Unified Commerce Protocol</text>

        {/* GMC → UCP dependency */}
        <line x1="410" y1="137" x2="500" y2="137" stroke={aS} strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#ps1)"/>
        <text x="455" y="130" textAnchor="middle" fill={c.ac} fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">requires</text>

        {/* Connecting lines protocols → MCP */}
        <line x1="110" y1="162" x2="110" y2="192" stroke={arr} strokeWidth="1.2"/>
        <line x1="340" y1="162" x2="340" y2="192" stroke={arr} strokeWidth="1.2"/>
        <line x1="570" y1="162" x2="570" y2="192" stroke={arr} strokeWidth="1.2"/>

        {/* Bottom: MCP foundation */}
        <text x="0" y="210" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700" letterSpacing="1">FOUNDATION</text>
        <rect x="40" y="218" width="600" height="38" rx="6" fill={aF} stroke={aS} strokeWidth="1.5" strokeDasharray="0"/>
        <text x="340" y="236" textAnchor="middle" fill={tC} fontSize="12" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700">MCP Server</text>
        <text x="340" y="250" textAnchor="middle" fill={mC} fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif">The brand's data, structured once · the invariant every protocol reads from</text>
      </svg>
    </div>
  );
}
