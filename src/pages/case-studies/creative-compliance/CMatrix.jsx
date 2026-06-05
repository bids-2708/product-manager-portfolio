import { CC } from "./data";

export default function CMatrix({c}){
  const m=CC.eval.matrix;
  const cell=(bg)=>({padding:"14px 16px",borderRadius:6,background:bg,border:`1px solid ${c.bd}`});
  const lb=(col)=>({fontSize:".72rem",fontWeight:700,color:col,letterSpacing:".04em",marginBottom:6});
  const ds={fontSize:".78rem",color:c.txM,lineHeight:1.55};
  const hd={fontSize:".7rem",fontWeight:600,color:c.txM,textAlign:"center",padding:"8px 4px",letterSpacing:".04em"};
  return(
    <div style={{marginBottom:28}}>
      <div style={{fontSize:".78rem",color:c.txM,marginBottom:12,lineHeight:1.5}}>Unit of measurement: a single creative evaluated against a retailer's ad specs. Ground truth = actual retailer accept/reject decision.</div>
      <div style={{display:"grid",gridTemplateColumns:"auto 1fr 1fr",gap:8}}>
        <div/><div style={hd}>Retailer accepted</div><div style={hd}>Retailer rejected</div>
        <div style={{...hd,textAlign:"right",paddingRight:12,display:"flex",alignItems:"center",justifyContent:"flex-end"}}>System: compliant</div>
        <div style={cell(c.okBg)}><div style={lb(c.okTx)}>{m.tn.label}</div><div style={ds}>{m.tn.desc}</div></div>
        <div style={cell(c.dnBg)}><div style={lb(c.dnTx)}>{m.fn.label}</div><div style={{...ds,fontWeight:500}}>{m.fn.desc}</div></div>
        <div style={{...hd,textAlign:"right",paddingRight:12,display:"flex",alignItems:"center",justifyContent:"flex-end"}}>System: non-compliant</div>
        <div style={cell(c.wnBg)}><div style={lb(c.wnTx)}>{m.fp.label}</div><div style={ds}>{m.fp.desc}</div></div>
        <div style={cell(c.okBg)}><div style={lb(c.okTx)}>{m.tp.label}</div><div style={ds}>{m.tp.desc}</div></div>
      </div>
    </div>
  );
}
