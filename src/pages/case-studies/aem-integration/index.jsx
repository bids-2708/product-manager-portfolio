import { AEM } from "./data";
import WorkflowCompare from "./WorkflowCompare";
import BidirectionalArch from "./BidirectionalArch";
import { Tag, SL } from "../../../components/Tag";
import { CASE_STUDIES } from "../../../data/caseStudies";

export default function AEMIntegration({ c, dark, nav }) {
  const sec = { maxWidth: 720, margin: "0 auto", padding: "0 24px 48px" };
  const secWide = { maxWidth: 780, margin: "0 auto", padding: "0 24px 48px" };
  const h2 = { fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "1.6rem", fontWeight: 400, color: c.tx, margin: "0 0 20px", letterSpacing: "-.01em" };
  const bd = { color: c.txM, fontSize: ".93rem", lineHeight: 1.75, margin: "0 0 14px" };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>

      {/* ── HERO ───────────────────────────────────── */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px 48px" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
          {AEM.hero.tags.map(t => <Tag key={t} l={t} c={c} />)}
          <span style={{ fontSize: ".8rem", color: c.txM, marginLeft: 8 }}>{AEM.hero.company} · {AEM.hero.duration}</span>
        </div>
        <h1 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 400, color: c.tx, margin: "0 0 12px", letterSpacing: "-.02em", lineHeight: 1.15 }}>{AEM.hero.title}</h1>
        <p style={{ fontSize: "1.05rem", color: c.txM, margin: "0 0 8px", lineHeight: 1.5 }}>{AEM.hero.subtitle}</p>
        <p style={{ fontSize: ".82rem", color: c.txM, margin: 0, fontStyle: "italic" }}>{AEM.hero.role}</p>
      </section>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}><hr style={{ border: "none", borderTop: `1px solid ${c.bd}`, margin: "0 0 48px" }} /></div>

      {/* ── THE PROBLEM ────────────────────────────── */}
      <section style={secWide}>
        <h2 style={h2}>The Problem</h2>
        {AEM.problem.paragraphs.map((p, i) => (
          <p key={i} style={i === 0 ? { ...bd, fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "1.05rem", color: c.tx, fontWeight: 400 } : bd}>{p}</p>
        ))}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 12, margin: "20px 0 8px" }}>
          {AEM.problem.stats.map(s => (
            <div key={s.l} style={{ padding: "14px 16px", border: `1px solid ${c.bd}`, borderRadius: 6, background: c.bgC }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 800, color: c.ac, letterSpacing: "-.02em" }}>{s.v}</div>
              <div style={{ fontSize: ".75rem", color: c.txM, marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <WorkflowCompare c={c} dark={dark} />
      </section>

      {/* ── PLATFORM DECISION ──────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>Why This Was a Platform Decision</h2>
        <p style={{ ...bd, fontWeight: 500, color: c.tx }}>{AEM.platform.intro}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 12, margin: "16px 0 0" }}>
          {AEM.platform.constraints.map(k => (
            <div key={k.label} style={{ padding: "18px 20px", border: `1px solid ${c.bd}`, borderRadius: 6, background: c.bgC }}>
              <div style={{ fontSize: ".72rem", fontWeight: 700, color: c.ac, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 8 }}>{k.label}</div>
              <div style={{ fontSize: ".95rem", fontWeight: 600, color: c.tx, marginBottom: 6, fontFamily: "'Instrument Serif',Georgia,serif" }}>{k.title}</div>
              <div style={{ fontSize: ".85rem", color: c.txM, lineHeight: 1.65 }}>{k.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ARCHITECTURE ───────────────────────────── */}
      <section style={secWide}>
        <h2 style={h2}>The Integration Architecture</h2>
        <p style={bd}>{AEM.architecture.intro}</p>
        <BidirectionalArch c={c} dark={dark} />
      </section>

      {/* ── KEY DECISIONS ──────────────────────────── */}
      <section style={secWide}>
        <h2 style={h2}>Key Decisions</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 12, margin: "4px 0 0" }}>
          {AEM.decisions.map(d => (
            <div key={d.label} style={{ padding: "18px 20px", border: `1px solid ${c.bd}`, borderRadius: 6, background: c.bgC }}>
              <div style={{ fontSize: ".78rem", fontWeight: 700, color: c.ac, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 8 }}>{d.label}</div>
              <div style={{ fontSize: ".87rem", color: c.txM, lineHeight: 1.65 }}>{d.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STAKEHOLDER + PHASING ──────────────────── */}
      <section style={sec}>
        <h2 style={h2}>Stakeholder Alignment & Phased Delivery</h2>

        {/* Stakeholder chips */}
        <div style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: c.ac, marginBottom: 10 }}>Three groups, three wants</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 12, marginBottom: 24 }}>
          {AEM.alignment.stakeholders.map(s => (
            <div key={s.label} style={{ padding: "14px 16px", border: `1px solid ${c.bd}`, borderRadius: 6, background: c.bgC, textAlign: "center" }}>
              <div style={{ fontSize: ".82rem", fontWeight: 700, color: c.tx }}>{s.label}</div>
              <div style={{ fontSize: ".75rem", color: c.ac, marginTop: 4, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase" }}>{s.want}</div>
            </div>
          ))}
        </div>

        <p style={{ ...bd, fontStyle: "italic", borderLeft: `3px solid ${c.ac}`, paddingLeft: 16, color: c.tx, fontWeight: 500 }}>{AEM.alignment.poc}</p>

        {/* Phases */}
        <div style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: c.ac, margin: "28px 0 10px" }}>Phased delivery</div>
        <style>{`.aemph{display:grid;grid-template-columns:1fr;gap:12px;align-items:stretch}.aemph-arrow{display:none}@media(min-width:620px){.aemph{grid-template-columns:1fr auto 1fr}.aemph-arrow{display:flex}}`}</style>
        <div className="aemph">
          <div style={{ padding: "16px 18px", border: `1px solid ${c.bd}`, borderRadius: 6, background: c.bgC }}>
            <div style={{ fontSize: ".72rem", fontWeight: 700, color: c.ac, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6 }}>{AEM.alignment.phases[0].n}</div>
            <div style={{ fontSize: ".9rem", fontWeight: 600, color: c.tx, marginBottom: 6, fontFamily: "'Instrument Serif',Georgia,serif" }}>{AEM.alignment.phases[0].title}</div>
            <div style={{ fontSize: ".82rem", color: c.txM, lineHeight: 1.6 }}>{AEM.alignment.phases[0].text}</div>
          </div>
          <div className="aemph-arrow" style={{ alignItems: "center", justifyContent: "center", color: c.ac, fontSize: "1.4rem", fontWeight: 300 }}>→</div>
          <div style={{ padding: "16px 18px", border: `1px solid ${c.bd}`, borderRadius: 6, background: c.bgC }}>
            <div style={{ fontSize: ".72rem", fontWeight: 700, color: c.ac, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6 }}>{AEM.alignment.phases[1].n}</div>
            <div style={{ fontSize: ".9rem", fontWeight: 600, color: c.tx, marginBottom: 6, fontFamily: "'Instrument Serif',Georgia,serif" }}>{AEM.alignment.phases[1].title}</div>
            <div style={{ fontSize: ".82rem", color: c.txM, lineHeight: 1.6 }}>{AEM.alignment.phases[1].text}</div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ───────────────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>Outcomes</h2>
        <style>{`.aemog{display:grid;grid-template-columns:1fr;gap:16px}@media(min-width:640px){.aemog{grid-template-columns:repeat(3,1fr)}}`}</style>
        <div className="aemog">
          {AEM.outcomes.map(m => (
            <div key={m.label} style={{ padding: 20, border: `1px solid ${c.bd}`, borderRadius: 8, background: c.bgC }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: c.ac, letterSpacing: "-.03em" }}>{m.value}</div>
              <div style={{ fontSize: ".82rem", fontWeight: 600, color: c.tx, margin: "4px 0" }}>{m.label}</div>
              <div style={{ fontSize: ".78rem", color: c.txM, lineHeight: 1.5 }}>{m.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILL SIGNALS ──────────────────────────── */}
      <section style={sec}>
        <SL t="Skill Signals" c={c} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {AEM.skills.map(sd => (
            <span key={sd.skill} style={{ display: "inline-block", padding: "6px 14px", borderRadius: 100, background: c.tgBg, color: c.tgTx, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: ".78rem", fontWeight: 600, letterSpacing: ".02em", whiteSpace: "nowrap" }}>{sd.skill}</span>
          ))}
        </div>
      </section>

      {/* ── CONTINUE READING ───────────────────────── */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}><hr style={{ border: "none", borderTop: `1px solid ${c.bd}`, margin: "0 0 32px" }} /></div>
      <section style={{ ...sec, paddingBottom: 80 }}>
        <SL t="Continue Reading" c={c} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
          {CASE_STUDIES.filter(s => s.id !== "aem-integration").map(s => (
            <div key={s.id} style={{ position: "relative", borderRadius: 8, overflow: "hidden" }}>
              <div onClick={!s.comingSoon ? () => nav(s.id) : undefined} style={{ padding: 20, border: `1px solid ${c.bd}`, borderRadius: 8, background: c.bgC, cursor: s.comingSoon ? "default" : "pointer", filter: s.comingSoon ? "blur(2px)" : "none", userSelect: s.comingSoon ? "none" : "auto" }}>
                <Tag l={s.tag} c={c} />
                <h4 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "1.1rem", fontWeight: 400, color: c.tx, margin: "12px 0 4px" }}>{s.title}</h4>
                <span style={{ fontSize: ".78rem", color: c.txM }}>{s.subtitle}</span>
              </div>
              {s.comingSoon && (
                <div style={{ position: "absolute", inset: 0, borderRadius: 8, background: "rgba(250,250,247,0.75)", backdropFilter: "blur(2px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: 100, background: c.tgBg, color: c.tgTx, fontSize: ".7rem", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase" }}>Coming Soon</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
