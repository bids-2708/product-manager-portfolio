import { BSS } from "./data";
import AgenticShelf from "./AgenticShelf";
import ProtocolStack from "./ProtocolStack";
import RoadmapTimeline from "./RoadmapTimeline";
import JudgmentTriangle from "./JudgmentTriangle";
import { Tag, SL } from "../../../components/Tag";
import { CASE_STUDIES } from "../../../data/caseStudies";

export default function BrandStoreStudio({c,dark,nav}){
  const sec={maxWidth:720,margin:"0 auto",padding:"0 24px 48px"};
  const h2={fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.6rem",fontWeight:400,color:c.tx,margin:"0 0 20px",letterSpacing:"-.01em"};
  const bd={color:c.txM,fontSize:".93rem",lineHeight:1.75,margin:"0 0 14px"};

  const statusColor=(s)=>{
    if(s==="In delivery")return{bg:c.okBg,tx:c.okTx};
    if(s==="Next")return{bg:c.tgBg,tx:c.tgTx};
    return{bg:c.bgA,tx:c.txM};
  };

  return(
    <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif"}}>
      {/* ── HERO ───────────────────────────────────── */}
      <section style={{maxWidth:720,margin:"0 auto",padding:"60px 24px 48px"}}>
        <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
          <Tag l="Product Strategy" c={c}/><Tag l="Agentic Commerce" c={c}/>
          <span style={{fontSize:".8rem",color:c.txM,marginLeft:8}}>{BSS.hero.company} · {BSS.hero.duration}</span>
        </div>
        <h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"clamp(2rem,4vw,2.8rem)",fontWeight:400,color:c.tx,margin:"0 0 12px",letterSpacing:"-.02em",lineHeight:1.15}}>{BSS.hero.title}</h1>
        <p style={{fontSize:"1.05rem",color:c.txM,margin:"0 0 8px",lineHeight:1.5}}>{BSS.hero.subtitle}</p>
        <p style={{fontSize:".82rem",color:c.txM,margin:0,fontStyle:"italic"}}>{BSS.hero.role}</p>
      </section>
      <div style={{maxWidth:720,margin:"0 auto",padding:"0 24px"}}><hr style={{border:"none",borderTop:`1px solid ${c.bd}`,margin:"0 0 48px"}}/></div>

      {/* ── TL;DR ─────────────────────────────────── */}
      <section style={sec}>
        <SL t="TL;DR" c={c}/>
        <div style={{padding:"20px 22px",background:c.bgA,borderRadius:6,borderLeft:`3px solid ${c.ac}`}}>
          <p style={{...bd,margin:0,color:c.tx,fontSize:".95rem"}}>{BSS.tldr}</p>
        </div>
      </section>

      {/* ── MY ROLE ───────────────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>My Role</h2>
        <p style={bd}>{BSS.role.intro}</p>
        <ul style={{listStyle:"none",padding:0,margin:"12px 0 0",display:"flex",flexDirection:"column",gap:10}}>
          {BSS.role.items.map((it,i)=>(
            <li key={i} style={{display:"flex",gap:12,alignItems:"flex-start"}}>
              <span style={{color:c.ac,fontWeight:700,flexShrink:0,marginTop:2}}>·</span>
              <span style={{color:c.txM,fontSize:".9rem",lineHeight:1.65}}>{it}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── ACT 1: THE SHIFT ──────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>Act 1 — The Shift: Why This, Why Now</h2>
        <p style={bd}>{BSS.shift.intro}</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:12,margin:"20px 0"}}>
          {BSS.shift.painPoints.map(pp=>(
            <div key={pp.title} style={{padding:"16px 18px",border:`1px solid ${c.bd}`,borderRadius:6,background:c.bgC}}>
              <div style={{fontSize:"1.2rem",marginBottom:6}}>{pp.icon}</div>
              <div style={{fontSize:".85rem",fontWeight:700,color:c.tx,marginBottom:6}}>{pp.title}</div>
              <div style={{fontSize:".8rem",color:c.txM,lineHeight:1.55}}>{pp.detail}</div>
            </div>
          ))}
        </div>
        <p style={{...bd,fontStyle:"italic",borderLeft:`3px solid ${c.ac}`,paddingLeft:16,marginTop:8}}>{BSS.shift.closer}</p>
      </section>

      {/* ── ACT 2: THE BET ────────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>Act 2 — The Bet: Strategy & Vision</h2>
        <blockquote style={{margin:"0 0 20px",padding:"16px 22px",borderLeft:`3px solid ${c.ac}`,fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.15rem",fontStyle:"italic",color:c.tx,lineHeight:1.5,background:c.bgA,borderRadius:"0 6px 6px 0"}}>
          “{BSS.bet.quote}”
        </blockquote>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:12,margin:"16px 0"}}>
          {BSS.bet.blocks.map(b=>(
            <div key={b.label} style={{padding:"18px 20px",border:`1px solid ${c.bd}`,borderRadius:6,background:c.bgC}}>
              <div style={{fontSize:".78rem",fontWeight:700,color:c.ac,textTransform:"uppercase",letterSpacing:".06em",marginBottom:8}}>{b.label}</div>
              <div style={{fontSize:".87rem",color:c.txM,lineHeight:1.65}}>{b.text}</div>
            </div>
          ))}
        </div>
        <p style={{...bd,fontWeight:500,color:c.tx,marginTop:12}}>{BSS.bet.closer}</p>
      </section>

      {/* ── VISUAL: AGENTIC SHELF ─────────────────── */}
      <section style={{...sec,maxWidth:780}}>
        <h2 style={h2}>The Agentic Shelf</h2>
        <AgenticShelf c={c} dark={dark}/>
      </section>

      {/* ── ACT 3: THE FOG ────────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>Act 3 — The Fog: Designing When the Ground Is Still Moving</h2>
        <p style={bd}>{BSS.fog.intro}</p>
        <div style={{display:"flex",flexDirection:"column",gap:16,marginTop:8}}>
          {BSS.fog.items.map(it=>(
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
          <p style={{...bd,margin:0,fontWeight:500,color:c.tx,fontStyle:"italic"}}>{BSS.fog.closer}</p>
        </div>
      </section>

      {/* ── VISUAL: PROTOCOL STACK ────────────────── */}
      <section style={{...sec,maxWidth:780}}>
        <h2 style={h2}>The Bet, Architected</h2>
        <ProtocolStack c={c} dark={dark}/>
      </section>

      {/* ── ROADMAP ───────────────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>The Roadmap: Phase 1a → 2b</h2>
        <p style={bd}>{BSS.roadmap.intro}</p>
        <div style={{display:"flex",flexDirection:"column",gap:16,marginTop:16}}>
          {BSS.roadmap.phases.map(p=>{
            const sc=statusColor(p.status);
            return(
              <div key={p.phase} style={{border:`1px solid ${c.bd}`,borderRadius:6,overflow:"hidden"}}>
                <div style={{padding:"12px 20px",background:c.bgA,borderBottom:`1px solid ${c.bd}`,display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"}}>
                  <div>
                    <div style={{fontSize:".72rem",fontWeight:700,color:c.txM,letterSpacing:".06em",textTransform:"uppercase"}}>{p.phase}</div>
                    <div style={{fontSize:".95rem",fontWeight:700,color:c.tx,marginTop:2}}>{p.title}</div>
                  </div>
                  <span style={{display:"inline-block",padding:"4px 12px",borderRadius:100,background:sc.bg,color:sc.tx,fontSize:".7rem",fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",whiteSpace:"nowrap"}}>{p.status}</span>
                </div>
                <div style={{padding:"14px 20px",background:c.bgC}}>
                  <div style={{fontSize:".87rem",color:c.txM,lineHeight:1.65,marginBottom:10}}>{p.body}</div>
                  <div style={{fontSize:".78rem",fontWeight:700,color:c.ac,letterSpacing:".04em",textTransform:"uppercase",marginBottom:4}}>Why this, when it does</div>
                  <div style={{fontSize:".84rem",color:c.txM,lineHeight:1.6,marginBottom:12}}>{p.why}</div>
                  <div style={{padding:"10px 14px",background:c.bgA,borderRadius:4,borderLeft:`2px solid ${c.ac}`,fontSize:".82rem",color:c.tx,lineHeight:1.6,fontStyle:"italic"}}>{p.callout}</div>
                </div>
              </div>
            );
          })}
        </div>
        <p style={{...bd,marginTop:18,fontStyle:"italic"}}>{BSS.roadmap.closer}</p>
      </section>

      {/* ── VISUAL: ROADMAP TIMELINE ─────────────── */}
      <section style={{...sec,maxWidth:780}}>
        <RoadmapTimeline c={c} dark={dark}/>
      </section>

      {/* ── EVERY LINE ITEM IS A PRODUCT JUDGMENT ─ */}
      <section style={sec}>
        <h2 style={h2}>Every Line Item Is a Product Judgment</h2>
        <p style={bd}>{BSS.judgment.intro}</p>
        <JudgmentTriangle c={c} dark={dark}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12,margin:"8px 0 24px"}}>
          {BSS.judgment.forces.map(f=>(
            <div key={f.label} style={{padding:"14px 16px",border:`1px solid ${c.bd}`,borderRadius:6,background:c.bgC}}>
              <div style={{fontSize:".78rem",fontWeight:700,color:c.ac,textTransform:"uppercase",letterSpacing:".06em",marginBottom:6}}>{f.label}</div>
              <div style={{fontSize:".82rem",color:c.txM,lineHeight:1.6}}>{f.detail}</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          {BSS.judgment.reconciliations.map((r,i)=>(
            <div key={i} style={{padding:"16px 20px",background:c.bgA,borderRadius:6}}>
              <div style={{fontSize:".9rem",fontWeight:700,color:c.tx,marginBottom:6}}>{r.item}</div>
              <div style={{fontSize:".84rem",color:c.txM,lineHeight:1.65}}>{r.detail}</div>
            </div>
          ))}
        </div>
        <p style={{...bd,marginTop:18,fontStyle:"italic"}}>{BSS.judgment.closer}</p>
      </section>

      {/* ── WIP: FEED ENRICHMENT ─────────────────── */}
      <section style={sec}>
        <div style={{padding:"24px 26px",border:`2px dashed ${c.ac}`,borderRadius:8,background:c.bgA}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10,flexWrap:"wrap"}}>
            <span style={{display:"inline-block",padding:"4px 12px",borderRadius:100,background:c.wnBg,color:c.wnTx,fontSize:".7rem",fontWeight:700,letterSpacing:".06em",textTransform:"uppercase"}}>Work in Progress</span>
            <span style={{fontSize:".75rem",color:c.txM,fontStyle:"italic"}}>{BSS.wip.status}</span>
          </div>
          <h2 style={{...h2,margin:"4px 0 12px"}}>{BSS.wip.title}</h2>
          <p style={{...bd,marginBottom:16}}>{BSS.wip.intro}</p>
          <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:16}}>
            {BSS.wip.items.map((it,i)=>(
              <div key={i} style={{padding:"14px 18px",background:c.bgC,borderRadius:6,border:`1px solid ${c.bd}`}}>
                <div style={{fontSize:".88rem",fontWeight:700,color:c.tx,marginBottom:6}}>{it.title}</div>
                <div style={{fontSize:".83rem",color:c.txM,lineHeight:1.6}}>{it.detail}</div>
              </div>
            ))}
          </div>
          <p style={{...bd,margin:0,fontStyle:"italic",color:c.tx}}>{BSS.wip.closer}</p>
        </div>
      </section>

      {/* ── KEY STRATEGIC DECISIONS ──────────────── */}
      <section style={sec}>
        <h2 style={h2}>Key Strategic Decisions</h2>
        <div style={{display:"flex",flexDirection:"column",gap:0,border:`1px solid ${c.bd}`,borderRadius:6,overflow:"hidden"}}>
          {BSS.decisions.map((d,i)=>(
            <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 1.4fr",borderTop:i===0?"none":`1px solid ${c.bd}`,background:i%2===0?c.bgC:c.bgA}}>
              <div style={{padding:"14px 18px",fontSize:".86rem",fontWeight:700,color:c.tx,borderRight:`1px solid ${c.bd}`}}>{d.d}</div>
              <div style={{padding:"14px 18px",fontSize:".83rem",color:c.txM,lineHeight:1.6}}>{d.r}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUTCOMES ─────────────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>Outcomes</h2>
        <style>{`.bog{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px}@media(max-width:720px){.bog{grid-template-columns:1fr}}`}</style>
        <div className="bog">
          {BSS.outcomes.map(m=>(
            <div key={m.label} style={{padding:20,border:`1px solid ${c.bd}`,borderRadius:8,background:c.bgC}}>
              <div style={{fontSize:"1.8rem",fontWeight:800,color:c.ac,letterSpacing:"-.03em"}}>{m.value}</div>
              <div style={{fontSize:".82rem",fontWeight:600,color:c.tx,margin:"4px 0"}}>{m.label}</div>
              <div style={{fontSize:".78rem",color:c.txM,lineHeight:1.5}}>{m.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT I'D CARRY FORWARD ──────────────── */}
      <section style={sec}>
        <h2 style={h2}>What I'd Carry Forward</h2>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {BSS.carryForward.map((cf,i)=>(
            <div key={i} style={{padding:"16px 20px",background:c.bgA,borderRadius:6,borderLeft:`3px solid ${c.ac}`}}>
              <p style={{margin:0,fontSize:".88rem",color:c.tx,lineHeight:1.65,fontFamily:"'Instrument Serif',Georgia,serif",fontStyle:"italic"}}>{cf}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILL SIGNALS ───────────────────────── */}
      <section style={sec}>
        <SL t="Skill Signals" c={c}/>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          {BSS.skills.map(sd=>(
            <div key={sd.skill} style={{display:"flex",gap:14,alignItems:"flex-start"}}>
              <span style={{display:"inline-block",padding:"4px 0",borderRadius:100,background:c.tgBg,color:c.tgTx,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:".72rem",fontWeight:600,letterSpacing:".02em",whiteSpace:"nowrap",flexShrink:0,minWidth:200,textAlign:"center"}}>{sd.skill}</span>
              <span style={{fontSize:".85rem",color:c.txM,lineHeight:1.6,flex:1}}>{sd.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTINUE READING ───────────────────── */}
      <div style={{maxWidth:720,margin:"0 auto",padding:"0 24px"}}><hr style={{border:"none",borderTop:`1px solid ${c.bd}`,margin:"0 0 32px"}}/></div>
      <section style={{...sec,paddingBottom:80}}>
        <SL t="Continue Reading" c={c}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16}}>
          {CASE_STUDIES.filter(s=>s.id!=="brandstore-studio").map(s=>(
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
