export default function Arch({c,dark}){
  const PAPER=dark?"#2A2724":"#F2EFE9", PLINE=dark?"#3D3A35":"#C9C3B8",
        TX=c.tx, MC=c.txM, BS=dark?"#333":"#D4CFC6", AC=c.ac,
        ARR=dark?"#555":"#AEA79C", FAN=dark?"#4A4A4A":"#C4BEB4",
        WH=dark?"#1E1E1E":"#FFF", ATINT=dark?"rgba(217,119,6,.14)":"rgba(180,83,9,.055)";
  const FF="'Plus Jakarta Sans',sans-serif";
  const L={fontSize:".7rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",marginBottom:12,fontFamily:FF};

  const Txt=(x,y,s,fs,o={})=>(
    <text x={x} y={y} textAnchor={o.a||"middle"} fill={o.fill||TX} fontSize={fs}
          fontWeight={o.fw||undefined} fontStyle={o.it?"italic":undefined} fontFamily={FF}>{s}</text>
  );
  const Arrow=(x1,y1,x2,y2,m)=>(
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={ARR} strokeWidth="1.5" strokeLinecap="round" markerEnd={`url(#${m})`}/>
  );
  const Doc=(x,y,w,h,l1,l2)=>{
    const f=12,mx=x+w/2,cy=y+h/2;
    const p=`M${x},${y} H${x+w-f} L${x+w},${y+f} V${y+h} H${x} Z`;
    const fold=`M${x+w-f},${y} V${y+f} H${x+w}`;
    return (<>
      <path d={p} fill={PAPER} stroke={PLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d={fold} fill="none" stroke={PLINE} strokeWidth="1.2" strokeLinejoin="round"/>
      {l1&&!l2&&Txt(mx,cy+4,l1,11,{fw:700})}
      {l1&&l2&&Txt(mx,cy-3,l1,11,{fw:700})}
      {l2&&Txt(mx,cy+11,l2,8,{fill:MC})}
    </>);
  };
  const Proc=(x,y,w,h,l1,l2,o={})=>{
    const mx=x+w/2,cy=y+h/2;
    return (<>
      <rect x={x} y={y} width={w} height={h} rx="9" fill={o.tint?ATINT:WH}
            stroke={o.accent?AC:BS} strokeWidth="1.5" strokeDasharray={o.dash?"5,4":undefined}/>
      {l2
        ? <>{Txt(mx,cy-4,l1,o.tfs||12,{fw:700})}{Txt(mx,cy+11,l2,o.sfs||9,{fill:MC})}</>
        : Txt(mx,cy+5,l1,o.tfs||12,{fw:700})}
    </>);
  };
  const Cyl=(cx,top,rx,h)=>{
    const ry=rx*0.16;
    const body=`M${cx-rx},${top} V${top+h} A${rx},${ry} 0 0 0 ${cx+rx},${top+h} V${top} A${rx},${ry} 0 0 0 ${cx-rx},${top} Z`;
    return (<>
      <path d={body} fill={WH} stroke={AC} strokeWidth="1.5"/>
      <ellipse cx={cx} cy={top} rx={rx} ry={ry} fill={WH} stroke={AC} strokeWidth="1.5"/>
    </>);
  };
  const centers=[125,219,313,407,501,595];

  return(
    <div style={{margin:"32px 0"}}>

      <div style={{marginBottom:40}}>
        <div style={{...L,color:c.txM}}>V1: Monolithic Architecture</div>
        <svg viewBox="0 0 720 210" style={{width:"100%",maxWidth:720}}>
          <defs><marker id="m1" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><path d="M0,0 L9,3.5 L0,7 Z" fill={ARR}/></marker></defs>
          {/* legend */}
          {Doc(14,9,22,15)}
          {Txt(46,21,"Input / data",9,{a:"start",fill:MC})}
          <rect x="14" y="34" width="22" height="15" rx="3.5" fill={WH} stroke={BS} strokeWidth="1.3"/>
          {Txt(46,46,"Process / step",9,{a:"start",fill:MC})}
          {/* inputs */}
          {Doc(24,90,156,44,"Ad Creative","HTML or image")}
          {Doc(24,150,156,44,"Full Guidelines","the entire rulebook")}
          {/* single call (black box) */}
          <rect x="286" y="98" width="214" height="92" rx="9" fill={ATINT} stroke={AC} strokeWidth="1.5" strokeDasharray="5,4"/>
          {Txt(393,132,"Single Claude Call",13,{fw:700})}
          {Txt(393,152,"All checks + full guideline doc",9,{fill:MC})}
          {Txt(393,167,"~8–15K tokens · black box",8.5,{fill:MC})}
          {/* output */}
          {Doc(560,120,148,50,"Score + Report","LLM-generated score")}
          {/* arrows */}
          {Arrow(180,112,283,130,"m1")}
          {Arrow(180,172,283,158,"m1")}
          {Arrow(500,144,557,145,"m1")}
        </svg>
      </div>

      <div>
        <div style={{...L,color:c.ac}}>V2: Multi-Agent Architecture</div>
        <svg viewBox="0 0 720 674" style={{width:"100%",maxWidth:720}}>
          <defs><marker id="a2" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><path d="M0,0 L9,3.5 L0,7 Z" fill={ARR}/></marker></defs>
          {/* legend */}
          {Doc(14,9,22,15)}
          {Txt(46,21,"Input / data",9,{a:"start",fill:MC})}
          <rect x="14" y="34" width="22" height="15" rx="3.5" fill={WH} stroke={BS} strokeWidth="1.3"/>
          {Txt(46,46,"Process / step",9,{a:"start",fill:MC})}
          {Cyl(25,60,11,10)}
          {Txt(46,70,"Data store",9,{a:"start",fill:MC})}
          {/* creative branch */}
          {Doc(280,30,160,46,"Ad Creative","HTML or image")}
          {Arrow(360,76,360,106,"a2")}
          {Proc(238,108,244,50,"Content Pre-processor","Breaks the ad into clean, labeled pieces")}
          {Arrow(360,158,360,190,"a2")}
          {Txt(372,177,"creative pieces stored",8,{a:"start",fill:MC,it:1})}
          {/* guidelines ingestion */}
          {Txt(12,182,"loaded once, ahead of time",8,{a:"start",fill:MC,it:1})}
          {Doc(10,194,134,42,"Brand Guidelines","brand rules")}
          {Doc(10,250,134,42,"Retailer Guidelines","retailer rules")}
          <rect x="156" y="209" width="92" height="56" rx="9" fill={WH} stroke={BS} strokeWidth="1.5"/>
          {Txt(202,233,"Semantic",10.5,{fw:700})}
          {Txt(202,248,"Chunking",10.5,{fw:700})}
          {Arrow(144,215,154,229,"a2")}
          {Arrow(144,271,154,245,"a2")}
          {Arrow(248,237,265,235,"a2")}
          {/* qdrant */}
          {Cyl(360,199,93,74)}
          {Txt(360,223,"Qdrant",12.5,{fw:700})}
          {Txt(360,239,"guidelines + creative pieces,",8,{fill:MC})}
          {Txt(360,250,"semantically chunked",8,{fill:MC})}
          {Arrow(360,282,360,314,"a2")}
          {Txt(372,301,"retrieves the relevant pieces",8,{a:"start",fill:MC,it:1})}
          {/* orchestrator */}
          {Proc(226,314,268,52,"Orchestrator","Pulls the right pieces from Qdrant and routes each to a check",{accent:1,tint:1,tfs:13,sfs:9})}
          {/* fan-out */}
          {Arrow(360,366,360,392,"a2")}
          {Txt(348,378,"sends each piece to the right check",8,{a:"end",fill:MC,it:1})}
          {Txt(348,389,"all six run at the same time",8,{a:"end",fill:MC,it:1})}
          {centers.map((cx,i)=><line key={"fo"+i} x1="360" y1="394" x2={cx} y2="426" stroke={FAN} strokeWidth="1" strokeDasharray="1,3.5" strokeLinecap="round"/>)}
          {/* 6 checks */}
          {["Color","Font","Logo","Layout","Tone","Dynamic"].map((n,i)=><g key={n}>{Proc(83+i*94,426,84,48,n)}</g>)}
          {/* merge */}
          {centers.map((cx,i)=><line key={"mg"+i} x1={cx} y1="474" x2="360" y2="514" stroke={FAN} strokeWidth="1" strokeDasharray="1,3.5" strokeLinecap="round"/>)}
          {/* qdrant -> scoring */}
          <path d="M453,235 H646 Q658,235 658,247 V529 Q658,541 646,541 H531" fill="none" stroke={ARR} strokeWidth="1.3" strokeDasharray="1,4" strokeLinecap="round" markerEnd="url(#a2)"/>
          {Txt(556,229,"scoring guidelines",8,{fill:MC,it:1})}
          {/* scoring */}
          {Proc(196,514,328,54,"Scoring","Combines every check's score with fixed math — same inputs, same result",{accent:1,sfs:8.5})}
          {Arrow(360,568,360,608,"a2")}
          {Txt(372,595,"final score + report",8,{a:"start",fill:MC,it:1})}
          {/* report */}
          {Doc(270,608,180,46,"Report","Final compliance report")}
        </svg>
      </div>

    </div>
  );
}
