import { S5 } from "./data";
import HubSpoke from "./HubSpoke";
import MonitoringFlow from "./MonitoringFlow";
import { Tag, SL } from "../../../components/Tag";
import { CASE_STUDIES } from "../../../data/caseStudies";

export default function Super5({ c, dark, nav }) {
  const sec = { maxWidth: 720, margin: "0 auto", padding: "0 24px 48px" };
  const h2 = { fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "1.6rem", fontWeight: 400, color: c.tx, margin: "0 0 20px", letterSpacing: "-.01em" };
  const bd = { color: c.txM, fontSize: ".93rem", lineHeight: 1.75, margin: "0 0 14px" };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>

      {/* ── HERO ───────────────────────────────────── */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px 48px" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
          {S5.hero.tags.map(t => <Tag key={t} l={t} c={c} />)}
          <span style={{ fontSize: ".8rem", color: c.txM, marginLeft: 8 }}>{S5.hero.company} · {S5.hero.duration}</span>
        </div>
        <h1 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 400, color: c.tx, margin: "0 0 12px", letterSpacing: "-.02em", lineHeight: 1.15 }}>{S5.hero.title}</h1>
        <p style={{ fontSize: "1.05rem", color: c.txM, margin: "0 0 8px", lineHeight: 1.5 }}>{S5.hero.subtitle}</p>
        <p style={{ fontSize: ".82rem", color: c.txM, margin: 0, fontStyle: "italic" }}>{S5.hero.role}</p>
      </section>

      {/* ── PM BRIDGE ──────────────────────────────── */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 48px" }}>
        <div style={{ padding: "20px 24px", background: c.bgA, borderLeft: `4px solid ${c.ac}`, borderRadius: "0 8px 8px 0" }}>
          <div style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: c.ac, marginBottom: 10, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>A note on this case study</div>
          <p style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "1rem", color: c.tx, lineHeight: 1.7, margin: 0, fontStyle: "" }}>{S5.pmBridge}</p>
        </div>
      </section>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}><hr style={{ border: "none", borderTop: `1px solid ${c.bd}`, margin: "0 0 48px" }} /></div>

      {/* ── THE PROBLEM ────────────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>The Problem</h2>
        <p style={{ ...bd, fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "1.05rem", color: c.tx, fontWeight: 400 }}>{S5.problem.hook}</p>
        <p style={{ ...bd, fontWeight: 600, color: c.tx }}>{S5.problem.hookFollowUp}</p>
        <p style={bd}>{S5.problem.context}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12, margin: "20px 0" }}>
          {S5.problem.structuralFailures.map(f => (
            <div key={f.title} style={{ padding: "16px 18px", border: `1px solid ${c.bd}`, borderRadius: 6, background: c.bgC }}>
              <div style={{ fontSize: ".85rem", fontWeight: 700, color: c.tx, marginBottom: 8 }}>{f.title}</div>
              <div style={{ fontSize: ".8rem", color: c.txM, lineHeight: 1.6 }}>{f.detail}</div>
            </div>
          ))}
        </div>
        <p style={{ ...bd, fontStyle: "italic", borderLeft: `3px solid ${c.ac}`, paddingLeft: 16, marginTop: 8, fontWeight: 500, color: c.tx }}>{S5.problem.diagnosis}</p>
      </section>

      {/* ── VALIDATING BEFORE BUILDING ─────────────── */}
      <section style={sec}>
        <h2 style={h2}>Validating Before Building</h2>
        <p style={bd}>{S5.validation.intro}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {S5.validation.hypotheses.map(h => (
            <div key={h.id} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "1.4rem", color: c.ac, fontWeight: 400, lineHeight: 1, flexShrink: 0, width: 36, textAlign: "right", marginTop: 3 }}>{h.id}</span>
              <div style={{ flex: 1, border: `1px solid ${c.bd}`, borderRadius: 6, overflow: "hidden" }}>
                <div style={{ padding: "12px 18px", background: c.bgA, borderBottom: `1px solid ${c.bd}` }}>
                  <div style={{ fontSize: ".78rem", fontWeight: 700, color: c.ac, letterSpacing: ".04em", textTransform: "uppercase", marginBottom: 4 }}>Hypothesis</div>
                  <div style={{ fontSize: ".9rem", fontWeight: 600, color: c.tx }}>{h.hypothesis}</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
                  <div style={{ padding: "12px 18px", borderRight: `1px solid ${c.bd}` }}>
                    <div style={{ fontSize: ".72rem", fontWeight: 700, color: c.txM, textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 6 }}>How I tested it</div>
                    <div style={{ fontSize: ".82rem", color: c.txM, lineHeight: 1.6 }}>{h.method}</div>
                  </div>
                  <div style={{ padding: "12px 18px", background: c.bgC }}>
                    <div style={{ fontSize: ".72rem", fontWeight: 700, color: c.ac, textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 6 }}>Finding</div>
                    <div style={{ fontSize: ".82rem", color: c.tx, lineHeight: 1.6, fontWeight: 500 }}>{h.finding}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE BUILD ──────────────────────────────── */}
      <section style={{ ...sec, maxWidth: 780 }}>
        <h2 style={h2}>The Build</h2>
        <p style={{ ...bd, fontWeight: 600, color: c.tx }}>{S5.build.intro}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 12, margin: "16px 0 28px" }}>
          {S5.build.decisions.map(d => (
            <div key={d.label} style={{ padding: "18px 20px", border: `1px solid ${c.bd}`, borderRadius: 6, background: c.bgC }}>
              <div style={{ fontSize: ".78rem", fontWeight: 700, color: c.ac, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 8 }}>{d.label}</div>
              <div style={{ fontSize: ".87rem", color: c.txM, lineHeight: 1.65 }}>{d.text}</div>
            </div>
          ))}
        </div>
        <HubSpoke c={c} dark={dark} />
      </section>

      {/* ── WHEN DISTRIBUTION ISN'T ENOUGH ─────────── */}
      <section style={sec}>
        <h2 style={h2}>When Distribution Isn't Enough</h2>
        <p style={bd}>{S5.distributionGap.csrContext}</p>
        <p style={{ ...bd, fontWeight: 600, color: c.tx }}>{S5.distributionGap.problem}</p>
        <div style={{ padding: "18px 20px", background: c.bgA, borderRadius: 6, margin: "16px 0" }}>
          <p style={{ ...bd, margin: "0 0 10px" }}>{S5.distributionGap.honesty}</p>
          <p style={{ ...bd, margin: 0, fontStyle: "italic", borderLeft: `3px solid ${c.ac}`, paddingLeft: 14, color: c.tx, fontWeight: 500 }}>{S5.distributionGap.bridge}</p>
        </div>
      </section>

      {/* ── THE MONITORING SYSTEM ──────────────────── */}
      <section style={{ ...sec, maxWidth: 780 }}>
        <h2 style={h2}>The Monitoring System</h2>
        <p style={bd}>{S5.monitoring.intro}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 12, margin: "16px 0 24px" }}>
          {S5.monitoring.capabilities.map(cap => (
            <div key={cap.title} style={{ padding: "14px 16px", border: `1px solid ${c.bd}`, borderRadius: 6, background: c.bgC }}>
              <div style={{ fontSize: ".82rem", fontWeight: 700, color: c.tx, marginBottom: 6 }}>{cap.title}</div>
              <div style={{ fontSize: ".78rem", color: c.txM, lineHeight: 1.6 }}>{cap.desc}</div>
            </div>
          ))}
        </div>
        <MonitoringFlow c={c} dark={dark} />
        <p style={{ ...bd, marginTop: 24 }}>{S5.monitoring.behaviorInsight}</p>
        <p style={{ ...bd, fontStyle: "italic", borderLeft: `3px solid ${c.ac}`, paddingLeft: 16 }}>{S5.monitoring.duolingo}</p>
        <p style={{ ...bd, fontWeight: 500, color: c.tx, margin: 0 }}>{S5.monitoring.continuousReinforcement}</p>
      </section>

      {/* ── OUTCOMES ───────────────────────────────── */}
      <section style={sec}>
        <h2 style={h2}>Outcomes</h2>
        <style>{`.s5og{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:20px}@media(min-width:700px){.s5og{grid-template-columns:repeat(4,1fr)}}@media(max-width:480px){.s5og{grid-template-columns:1fr}}`}</style>
        <div className="s5og">
          {S5.outcomes.map(m => (
            <div key={m.label} style={{ padding: 20, border: `1px solid ${c.bd}`, borderRadius: 8, background: c.bgC }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: c.ac, letterSpacing: "-.03em" }}>{m.value}</div>
              <div style={{ fontSize: ".82rem", fontWeight: 600, color: c.tx, margin: "4px 0" }}>{m.label}</div>
              <div style={{ fontSize: ".78rem", color: c.txM, lineHeight: 1.5 }}>{m.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILL SIGNALS ───────────────────────────── */}
      <section style={sec}>
        <SL t="Skill Signals" c={c} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {S5.skills.map(sd => (
            <span key={sd.skill} style={{ display: "inline-block", padding: "6px 14px", borderRadius: 100, background: c.tgBg, color: c.tgTx, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: ".78rem", fontWeight: 600, letterSpacing: ".02em", whiteSpace: "nowrap" }}>{sd.skill}</span>
          ))}
        </div>
      </section>

      {/* ── CONTINUE READING ───────────────────────── */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}><hr style={{ border: "none", borderTop: `1px solid ${c.bd}`, margin: "0 0 32px" }} /></div>
      <section style={{ ...sec, paddingBottom: 80 }}>
        <SL t="Continue Reading" c={c} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
          {CASE_STUDIES.filter(s => s.id !== "swrc-super5").map(s => (
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
