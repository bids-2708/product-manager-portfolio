import { useState } from "react";
import { S } from "./styles/theme";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import CreativeCompliance from "./pages/case-studies/creative-compliance";
import Super5 from "./pages/case-studies/swrc-super5";
import AEMIntegration from "./pages/case-studies/aem-integration";
import BrandStoreStudio from "./pages/case-studies/brandstore-studio";
// ─── ADD NEW CASE STUDIES HERE ──────────────────────────────
// import KrutrimLLM from "./pages/case-studies/krutrim-llm";

export default function Portfolio(){
  const[dark,setDark]=useState(false);
  const[page,setPage]=useState("home");
  const c=S(dark);
  const nav=(p)=>{setPage(p);window.scrollTo(0,0);};
  return(
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}::selection{background:rgba(180,83,9,.2)}`}</style>
      <div style={{minHeight:"100vh",background:c.bg,color:c.tx,transition:"background .3s,color .3s"}}>
        <Nav dark={dark} toggle={()=>setDark(!dark)} c={c} nav={nav} page={page}/>
        {page==="home"&&<Home c={c} dark={dark} nav={nav}/>}
        {page==="creative-compliance"&&<CreativeCompliance c={c} dark={dark} nav={nav}/>}
        {page==="swrc-super5"&&<Super5 c={c} dark={dark} nav={nav}/>}
        {page==="aem-integration"&&<AEMIntegration c={c} dark={dark} nav={nav}/>}
        {page==="brandstore-studio"&&<BrandStoreStudio c={c} dark={dark} nav={nav}/>}
        {/* ─── ADD NEW CASE STUDY PAGES HERE ────────────────────
        {page==="krutrim-llm"&&<KrutrimLLM c={c} dark={dark} nav={nav}/>}
        */}
      </div>
    </>
  );
}
