import { useState } from "react";
import { SITE, ABOUT, SIGNALS, OTHER_WORK } from "../data/siteData";
import { CASE_STUDIES } from "../data/caseStudies";
import { Tag, SL, Card } from "../components/Tag";

function AdditionalCard({cs, c, onClick}) {
  const [h, sH] = useState(false);
  const isClickable = !!cs.id;
  return (
    <div
      onClick={isClickable ? onClick : undefined}
      onMouseEnter={isClickable ? () => sH(true) : undefined}
      onMouseLeave={isClickable ? () => sH(false) : undefined}
      style={{border:`1px solid ${h ? c.ac : c.bd}`,borderRadius:8,padding:"24px 28px",marginBottom:24,background:h ? c.bgA : c.bgC,cursor:isClickable?"pointer":"default",transition:"all .25s",transform:h?"translateY(-2px)":"none"}}
    >
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}><Tag l={cs.tag} c={c}/><span style={{fontSize:".75rem",color:c.txM}}>{cs.subtitle}</span></div>
      <h4 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.2rem",fontWeight:400,color:c.tx,margin:"8px 0"}}>{cs.title}</h4>
      <div style={{fontSize:"1.25rem",fontWeight:700,color:c.ac,margin:"8px 0 12px",letterSpacing:"-.02em"}}>{cs.metric}</div>
      <p style={{color:c.txM,fontSize:".88rem",lineHeight:1.6,margin:0}}>{cs.description}</p>
      {isClickable && <div style={{marginTop:16,fontSize:".8rem",color:h?c.ac:c.txM,fontWeight:500,transition:"color .2s"}}>Read case study →</div>}
    </div>
  );
}

export default function Home({c,dark,nav}){
  return(
    <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif"}}>
      <section style={{maxWidth:720,margin:"0 auto",padding:"80px 24px 60px"}}>
        <h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"clamp(2.5rem,5vw,3.5rem)",fontWeight:400,color:c.tx,margin:"0 0 16px",letterSpacing:"-.02em",lineHeight:1.1}}>{SITE.name}</h1>
        <p style={{fontSize:"1.2rem",color:c.txM,margin:0,lineHeight:1.5,maxWidth:540,wordSpacing:"0.3em"}}>{SITE.positioning}</p>
      </section>
      <section style={{maxWidth:720,margin:"0 auto",padding:"0 24px 60px"}}>
        <SL t="About" c={c}/>
        {ABOUT.paragraphs.map((p,i)=><p key={i} style={{color:i===0?c.tx:c.txM,fontSize:i===0?"1.15rem":".95rem",lineHeight:1.7,margin:"0 0 16px",fontWeight:i===0?500:400,fontStyle:i===0?"normal":"normal",fontFamily:i===0?"'Instrument Serif',Georgia,serif":"'Plus Jakarta Sans',sans-serif"}}>{p}</p>)}
      </section>
      <section style={{maxWidth:720,margin:"0 auto",padding:"0 24px 60px"}}>
        <div style={{display:"flex",flexWrap:"wrap",gap:10}}>{SIGNALS.map(s=><span key={s} style={{display:"inline-block",padding:"6px 16px",border:`1px solid ${c.bd}`,borderRadius:100,fontSize:".8rem",color:c.tx,fontWeight:500}}>{s}</span>)}</div>
      </section>
      <div style={{maxWidth:720,margin:"0 auto",padding:"0 24px"}}><hr style={{border:"none",borderTop:`1px solid ${c.bd}`,margin:"0 0 60px"}}/></div>
      <section style={{maxWidth:1080,margin:"0 auto",padding:"0 24px 80px"}}>
        <SL t="Featured Work" c={c}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:20}}>{CASE_STUDIES.map(s=><Card key={s.id} s={s} c={c} onClick={()=>nav(s.id)}/>)}</div>
      </section>
      <section style={{maxWidth:1080,margin:"0 auto",padding:"0 24px 60px"}}>
        <SL t="Additional Work" c={c}/>
        {OTHER_WORK.additionalCaseStudies.map(cs=>(
          <AdditionalCard key={cs.title} cs={cs} c={c} onClick={cs.id ? ()=>nav(cs.id) : undefined} />
        ))}
        {/* Side Projects — toggle overlay by setting sideProjectsComingSoon: true/false in siteData.js */}
        <div style={{marginTop:16,position:"relative"}}>
          <SL t="Side Projects & Build Log" c={c}/>
          <div style={{filter:OTHER_WORK.sideProjectsComingSoon?"blur(3px)":"none",userSelect:OTHER_WORK.sideProjectsComingSoon?"none":"auto"}}>
            {OTHER_WORK.sideProjects.map(sp=>(
              <div key={sp.title} style={{padding:"16px 0",borderBottom:`1px solid ${c.bdL}`}}>
                <div style={{fontSize:".95rem",fontWeight:600,color:c.tx,marginBottom:4}}>{sp.title}</div>
                <div style={{fontSize:".82rem",color:c.txM,lineHeight:1.5}}>{sp.description}</div>
              </div>
            ))}
          </div>
          {OTHER_WORK.sideProjectsComingSoon&&(
            <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,background:"rgba(250,250,247,0.7)",backdropFilter:"blur(2px)",borderRadius:6}}>
              <span style={{display:"inline-block",padding:"6px 18px",borderRadius:100,background:c.tgBg,color:c.tgTx,fontSize:".75rem",fontWeight:700,letterSpacing:".06em",textTransform:"uppercase"}}>Coming Soon</span>
              <span style={{fontSize:".8rem",color:c.txM,fontFamily:"'Plus Jakarta Sans',sans-serif"}}>Detailed write-ups in progress</span>
            </div>
          )}
        </div>
      </section>
      <footer style={{borderTop:`1px solid ${c.bd}`,padding:"40px 24px",textAlign:"center"}}>
        <div style={{maxWidth:720,margin:"0 auto"}}>
          <p style={{color:c.txM,fontSize:".85rem",marginBottom:16}}>Interested in working together?</p>
          <div style={{display:"flex",justifyContent:"center",gap:24,flexWrap:"wrap"}}>
            <a href={`mailto:${SITE.email}`} style={{color:c.ac,fontWeight:600,fontSize:".9rem",textDecoration:"none"}}>{SITE.email}</a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" style={{color:c.ac,fontWeight:600,fontSize:".9rem",textDecoration:"none"}}>LinkedIn</a>
          </div>
          <p style={{color:c.txM,fontSize:".7rem",marginTop:24,opacity:.5}}>© 2026 Bidyapathi Ray</p>
        </div>
      </footer>
    </div>
  );
}
