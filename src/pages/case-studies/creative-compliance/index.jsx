import { CC } from "./data";
import Arch from "./Arch";
import CMatrix from "./CMatrix";
import { Tag, SL } from "../../../components/Tag";
import { CASE_STUDIES } from "../../../data/caseStudies";

export default function CreativeCompliance({c,dark,nav}){
  const sec={maxWidth:720,margin:"0 auto",padding:"0 24px 48px"};
  const h2={fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.6rem",fontWeight:400,color:c.tx,margin:"0 0 20px",letterSpacing:"-.01em"};
  const bd={color:c.txM,fontSize:".93rem",lineHeight:1.75,margin:"0 0 14px"};

  return(
    <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif"}}>
      {/* ── HERO ───────────────────────────────────── */}
      <section style={{maxWidth:720,margin:"0 auto",padding:"60px 24px 48px"}}>
        <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
          <Tag l="Agentic AI" c={c}/><Tag l="Enterprise B2B SaaS" c={c}/>
          <span style={{fontSize:".8rem",color:c.txM,marginLeft:8}}>{CC.hero.company} · {CC.hero.duration}</span>
        </div>
        <h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"clamp(2rem,4vw,2.8rem)",fontWeight:400,color:c.tx,margin:"0 0 12px",letterSpacing:"-.02em",lineHeight:1.15}}>{CC.hero.title}</h1>
        <p style={{fontSize:"1.05rem",color:c.txM,margin:"0 0 8px",lineHeight:1.5}}>{CC.hero.subtitle}</p>
        <p style={{fontSize:".82rem",color:c.txM,margin:0,fontStyle:"italic"}}>{CC.hero.role}</p>
      </section>
      <div style={{maxWidth:720,margin:"0 auto",padding:"0 24px"}}><hr style={{border:"none",borderTop:`1px solid ${c.bd}`,margin:"0 0 48px"}}/></div>

      {/* ── THE PROBLEM ────────────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>The Problem</h2>
        <p style={bd}>{CC.problem.context}</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12,margin:"20px 0"}}>
          {CC.problem.painPoints.map(pp=>(
            <div key={pp.title} style={{padding:"16px 18px",border:`1px solid ${c.bd}`,borderRadius:6,background:c.bgC}}>
              <div style={{fontSize:"1.2rem",marginBottom:6}}>{pp.icon}</div>
              <div style={{fontSize:".85rem",fontWeight:700,color:c.tx,marginBottom:6}}>{pp.title}</div>
              <div style={{fontSize:".8rem",color:c.txM,lineHeight:1.55}}>{pp.detail}</div>
            </div>
          ))}
        </div>
        <p style={{...bd,fontStyle:"italic",borderLeft:`3px solid ${c.ac}`,paddingLeft:16,marginTop:8}}>{CC.problem.signal}</p>
      </section>

      {/* ── THE BET ────────────────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>The Bet: Ship Simple, Validate Fast</h2>
        <p style={bd}>{CC.bet.setup}</p>
        <p style={{...bd,fontWeight:600,color:c.tx}}>{CC.bet.pivot}</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:12,margin:"16px 0 0"}}>
          {CC.bet.blocks.map(b=>(
            <div key={b.label} style={{padding:"18px 20px",border:`1px solid ${c.bd}`,borderRadius:6,background:c.bgC}}>
              <div style={{fontSize:".78rem",fontWeight:700,color:c.ac,textTransform:"uppercase",letterSpacing:".06em",marginBottom:8}}>{b.label}</div>
              <div style={{fontSize:".87rem",color:c.txM,lineHeight:1.65}}>{b.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT I PROTECTED FOR ───────────────────── */}
      <section style={sec}>
        <h2 style={h2}>What I Protected For in V1</h2>
        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          {CC.protected.items.map(it=>(
            <div key={it.n} style={{display:"flex",gap:16,alignItems:"flex-start"}}>
              <span style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.5rem",color:c.ac,fontWeight:400,lineHeight:1,flexShrink:0,width:32,textAlign:"right",marginTop:2}}>{it.n}</span>
              <div style={{flex:1,padding:"16px 20px",border:`1px solid ${c.bd}`,borderRadius:6,background:c.bgC}}>
                <div style={{fontSize:".92rem",fontWeight:700,color:c.tx,marginBottom:6}}>{it.title}</div>
                <div style={{fontSize:".85rem",color:c.txM,lineHeight:1.65}}>{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:20,padding:"16px 20px",background:c.bgA,borderRadius:6,borderLeft:`3px solid ${c.ac}`}}>
          <p style={{...bd,margin:0,fontWeight:500,color:c.tx}}>{CC.protected.validation}</p>
        </div>
      </section>

      {/* ── WHAT V1 REVEALED ───────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>What V1 Revealed</h2>
        <p style={bd}>{CC.v1Revealed.intro}</p>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          {CC.v1Revealed.items.map((it,i)=>(
            <div key={i} style={{padding:"18px 20px",background:c.bgA,borderRadius:6}}>
              <div style={{fontSize:".92rem",fontWeight:700,color:c.tx,marginBottom:6}}>{it.title}</div>
              <div style={{fontSize:".85rem",color:c.txM,lineHeight:1.65}}>{it.desc}</div>
            </div>
          ))}
        </div>
        <p style={{...bd,marginTop:16,fontStyle:"italic"}}>{CC.v1Revealed.conclusion}</p>
      </section>

      {/* ── ARCHITECTURE ───────────────────────────── */}
      <section style={{...sec,maxWidth:780}}>
        <h2 style={h2}>System Architecture: V1 → V2</h2>
        <Arch c={c} dark={dark}/>
      </section>

      {/* ── DESIGNING THE MULTI-AGENT SYSTEM ────────── */}
      <section style={sec}>
        <h2 style={h2}>Designing the Multi-Agent System</h2>
        <p style={bd}>{CC.multiAgent.intro}</p>
        <div style={{display:"flex",flexDirection:"column",gap:20}}>
          {CC.multiAgent.items.map((d,i)=>(
            <div key={i} style={{border:`1px solid ${c.bd}`,borderRadius:6,overflow:"hidden"}}>
              <div style={{padding:"12px 20px",background:c.bgA,borderBottom:`1px solid ${c.bd}`}}>
                <div style={{fontSize:".72rem",fontWeight:600,color:c.txM,letterSpacing:".06em",textTransform:"uppercase"}}>V1 observation</div>
                <div style={{fontSize:".88rem",fontWeight:600,color:c.tx,marginTop:4}}>{d.obs}</div>
              </div>
              <div style={{padding:"14px 20px",background:c.bgC}}>
                <div style={{fontSize:".72rem",fontWeight:700,color:c.ac,letterSpacing:".06em",textTransform:"uppercase",marginBottom:4}}>→ Requirement: {d.req}</div>
                <div style={{fontSize:".85rem",color:c.txM,lineHeight:1.65}}>{d.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EVALUATION FRAMEWORK ───────────────────── */}
      <section style={sec}>
        <h2 style={h2}>Evaluation Framework</h2>
        <p style={bd}>{CC.eval.intro}</p>
        <CMatrix c={c}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:12}}>
          {CC.eval.principles.map((p,i)=>(
            <div key={i} style={{padding:"16px 18px",border:`1px solid ${c.bd}`,borderRadius:6,background:c.bgC}}>
              <div style={{fontSize:".82rem",fontWeight:700,color:c.tx,marginBottom:6}}>{p.title}</div>
              <div style={{fontSize:".8rem",color:c.txM,lineHeight:1.6}}>{p.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUTCOMES ───────────────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>Outcomes</h2>
        <style>{`.og{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:20px}@media(min-width:900px){.og{grid-template-columns:repeat(4,1fr)}}@media(max-width:480px){.og{grid-template-columns:1fr}}`}</style>
        <div className="og">
          {CC.outcomes.map(m=>(
            <div key={m.label} style={{padding:20,border:`1px solid ${c.bd}`,borderRadius:8,background:c.bgC}}>
              <div style={{fontSize:"1.8rem",fontWeight:800,color:c.ac,letterSpacing:"-.03em"}}>{m.value}</div>
              <div style={{fontSize:".82rem",fontWeight:600,color:c.tx,margin:"4px 0"}}>{m.label}</div>
              <div style={{fontSize:".78rem",color:c.txM,lineHeight:1.5}}>{m.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILL SIGNALS ───────────────────────────── */}
      <section style={sec}>
        <SL t="Skill Signals" c={c}/>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          {CC.skills.map(sd=>(
            <div key={sd.skill} style={{display:"flex",gap:14,alignItems:"flex-start"}}>
              <span style={{display:"inline-block",padding:"4px 0",borderRadius:100,background:c.tgBg,color:c.tgTx,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:".72rem",fontWeight:600,letterSpacing:".02em",whiteSpace:"nowrap",flexShrink:0,minWidth:168,textAlign:"center"}}>{sd.skill}</span>
              <span style={{fontSize:".85rem",color:c.txM,lineHeight:1.6,flex:1}}>{sd.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTINUE READING ───────────────────────── */}
      <div style={{maxWidth:720,margin:"0 auto",padding:"0 24px"}}><hr style={{border:"none",borderTop:`1px solid ${c.bd}`,margin:"0 0 32px"}}/></div>
      <section style={{...sec,paddingBottom:80}}>
        <SL t="Continue Reading" c={c}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16}}>
          {CASE_STUDIES.filter(s=>s.id!=="creative-compliance").map(s=>(
            <div key={s.id} style={{position:"relative",borderRadius:8,overflow:"hidden"}}>
              <div onClick={!s.comingSoon?()=>nav(s.id):undefined} style={{padding:20,border:`1px solid ${c.bd}`,borderRadius:8,background:c.bgC,cursor:s.comingSoon?"default":"pointer",filter:s.comingSoon?"blur(2px)":"none",userSelect:s.comingSoon?"none":"auto"}}>
                <Tag l={s.tag} c={c}/>
                <h4 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.1rem",fontWeight:400,color:c.tx,margin:"12px 0 4px"}}>{s.title}</h4>
                <span style={{fontSize:".78rem",color:c.txM}}>{s.subtitle}</span>
              </div>
              {s.comingSoon&&(
                <div style={{position:"absolute",inset:0,borderRadius:8,background:"rgba(250,250,247,0.75)",backdropFilter:"blur(2px)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{display:"inline-block",padding:"5px 14px",borderRadius:100,background:c.tgBg,color:c.tgTx,fontSize:".7rem",fontWeight:700,letterSpacing:".06em",textTransform:"uppercase"}}>Coming Soon</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
