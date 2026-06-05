import { useState } from "react";

export const Tag = ({l,c,s}) =>
  <span style={{display:"inline-block",padding:"4px 12px",borderRadius:100,background:c.tgBg,color:c.tgTx,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:".75rem",fontWeight:600,letterSpacing:".02em",...s}}>{l}</span>;

export const SL = ({t,c}) =>
  <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:".7rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:c.ac,marginBottom:16}}>{t}</div>;

export function Card({s,c,onClick}){
  const[h,sH]=useState(false);
  const coming = !!s.comingSoon;
  return(
    <div style={{position:"relative",borderRadius:8,overflow:"hidden"}}>
      {/* Card content — always rendered so the card keeps its natural height */}
      <div
        onClick={!coming ? onClick : undefined}
        onMouseEnter={!coming ? ()=>sH(true) : undefined}
        onMouseLeave={!coming ? ()=>sH(false) : undefined}
        style={{display:"block",width:"100%",textAlign:"left",background:h?c.bgA:c.bgC,border:`1px solid ${h?c.ac:c.bd}`,borderRadius:8,padding:"28px 28px 24px",cursor:coming?"default":"pointer",transition:"all .25s",transform:!coming&&h?"translateY(-2px)":"none",fontFamily:"'Plus Jakarta Sans',sans-serif",filter:coming?"blur(3px)":"none",userSelect:coming?"none":"auto"}}
      >
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}><Tag l={s.tag} c={c}/><span style={{fontSize:".75rem",color:c.txM}}>{s.subtitle}</span></div>
        <h3 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.5rem",fontWeight:400,color:c.tx,margin:"0 0 8px",letterSpacing:"-.01em",lineHeight:1.2}}>{s.title}</h3>
        <div style={{fontSize:"1.75rem",fontWeight:700,color:c.ac,margin:"12px 0 16px",letterSpacing:"-.02em"}}>{s.metric}</div>
        <p style={{color:c.txM,fontSize:".9rem",lineHeight:1.6,margin:0}}>{s.description}</p>
        <div style={{display:"flex",gap:8,marginTop:16,flexWrap:"wrap"}}>{s.skills.map(sk=><span key={sk} style={{fontSize:".7rem",color:c.txM,padding:"3px 8px",border:`1px solid ${c.bdL}`,borderRadius:4}}>{sk}</span>)}</div>
        <div style={{marginTop:20,fontSize:".8rem",color:h?c.ac:c.txM,fontWeight:500,transition:"color .2s"}}>Read case study →</div>
      </div>
      {/* Coming Soon overlay — toggle by setting comingSoon: true/false in caseStudies.js */}
      {coming&&(
        <div style={{position:"absolute",inset:0,borderRadius:8,background:"rgba(250,250,247,0.75)",backdropFilter:"blur(2px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,border:`1px solid ${c.bd}`}}>
          <span style={{display:"inline-block",padding:"6px 18px",borderRadius:100,background:c.tgBg,color:c.tgTx,fontSize:".75rem",fontWeight:700,letterSpacing:".06em",textTransform:"uppercase"}}>Coming Soon</span>
          <span style={{fontSize:".8rem",color:c.txM,fontFamily:"'Plus Jakarta Sans',sans-serif"}}>Case study in progress</span>
        </div>
      )}
    </div>
  );
}
