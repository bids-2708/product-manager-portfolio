import { SITE } from "../data/siteData";

export default function Nav({dark,toggle,c,nav,page}){
  const lnk = {background:"none",border:"none",cursor:"pointer",color:c.txM,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:".85rem",textDecoration:"none",transition:"color .2s"};
  return(
    <nav style={{position:"sticky",top:0,zIndex:100,background:dark?"rgba(17,17,17,.92)":"rgba(250,250,247,.92)",backdropFilter:"blur(12px)",borderBottom:`1px solid ${c.bd}`,padding:"0 24px"}}>
      <div style={{maxWidth:1080,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",height:56}}>
        <button onClick={()=>nav("home")} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.25rem",color:c.tx,padding:0}}>{SITE.shortName}</button>
        <div style={{display:"flex",alignItems:"center",gap:20}}>
          {page!=="home"&&<button onClick={()=>nav("home")} style={lnk} onMouseEnter={e=>e.target.style.color=c.ac} onMouseLeave={e=>e.target.style.color=c.txM}>← Back</button>}
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" style={lnk} onMouseEnter={e=>e.target.style.color=c.ac} onMouseLeave={e=>e.target.style.color=c.txM}>LinkedIn</a>
          <a href={`mailto:${SITE.email}`} style={lnk} onMouseEnter={e=>e.target.style.color=c.ac} onMouseLeave={e=>e.target.style.color=c.txM}>Email</a>
          <button onClick={toggle} style={{background:"none",border:"none",cursor:"pointer",fontSize:"1.1rem",padding:8,opacity:.6,transition:"opacity .2s"}} onMouseEnter={e=>e.target.style.opacity=1} onMouseLeave={e=>e.target.style.opacity=.6}>{dark?"☀️":"🌙"}</button>
        </div>
      </div>
    </nav>
  );
}
