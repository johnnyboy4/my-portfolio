import { useEffect, useState } from "react";

const roles = ["Fullstack Web Developer", "UI/UX Designer", "Problem Solver", "Creative Coder"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: "80px" }}>

      {/* Glow orbs */}
      <div style={{ position:"absolute", top:"20%", right:"5%", width:"clamp(200px,30vw,400px)", height:"clamp(200px,30vw,400px)", background:"radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(32px, 6vw, 60px)",
          alignItems: "center",
        }}>

          {/* Text Content */}
          <div style={{ animation: "fadeInUp 0.9s ease forwards", order: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(0,229,255,0.06)", border: "1px solid rgba(0,229,255,0.15)",
              padding: "7px 14px", borderRadius: "100px", marginBottom: "clamp(20px,4vw,32px)",
            }}>
              <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:"var(--cyan)", display:"inline-block", animation:"pulse-cyan 2s ease infinite" }} />
              <span style={{ fontSize:"11px", color:"var(--cyan)", fontFamily:"'DM Sans'", letterSpacing:"1px" }}>Available for work</span>
            </div>

            <h1 style={{ fontSize:"clamp(2.4rem,8vw,5rem)", fontWeight:800, lineHeight:1.0, color:"#fff", marginBottom:"6px" }}>
              Johnny<span style={{ color:"var(--cyan)", textShadow:"0 0 40px rgba(0,229,255,0.3)" }}>Bravo</span>
            </h1>

            <p style={{ fontSize:"clamp(10px,2vw,13px)", color:"var(--text-dim)", fontFamily:"'DM Sans'", fontWeight:300, letterSpacing:"2px", marginBottom:"16px", textTransform:"uppercase" }}>
              Issume John Onyekachukwu
            </p>

            <div style={{ marginBottom:"20px", height:"40px", display:"flex", alignItems:"center" }}>
              <span style={{ fontSize:"clamp(0.9rem,2.5vw,1.4rem)", color:"var(--text-dim)", fontFamily:"'DM Sans'", fontWeight:300 }}>
                {displayed}<span style={{ animation:"blink 1s step-end infinite", color:"var(--cyan)" }}>|</span>
              </span>
            </div>

            <p style={{ fontSize:"clamp(13px,2vw,16px)", lineHeight:1.8, color:"var(--text-dim)", maxWidth:"480px", marginBottom:"clamp(24px,4vw,40px)", fontWeight:300 }}>
              Crafting exceptional digital experiences through clean code and thoughtful design.
              I bridge the gap between functionality and aesthetics to build products people love.
            </p>

            <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
              <a href="#projects" className="btn-primary">View My Work →</a>
              <a href="#contact" className="btn-outline">Let's Talk</a>
            </div>

            {/* Stats */}
            <div style={{ display:"flex", gap:"clamp(20px,5vw,40px)", marginTop:"clamp(32px,5vw,56px)", flexWrap:"wrap" }}>
              {[["4+","Years Experience"],["10+","Projects Done"],["5+","Happy Clients"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize:"clamp(1.4rem,4vw,2rem)", fontWeight:800, color:"var(--cyan)", fontFamily:"'Syne'" }}>{num}</div>
                  <div style={{ fontSize:"clamp(9px,1.5vw,12px)", color:"var(--text-dim)", letterSpacing:"1px", marginTop:"3px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div style={{ display:"flex", justifyContent:"center", animation:"fadeIn 1.2s ease forwards", order:2 }}>
            <div style={{ position:"relative", width:"clamp(240px,40vw,340px)", height:"clamp(280px,45vw,400px)" }}>
              <div style={{
                width:"100%", height:"100%", position:"relative",
                clipPath:"polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
                overflow:"hidden", border:"1px solid rgba(0,229,255,0.15)",
              }}>
                <img src="/profile_clean.png" alt="JohnnyBravo"
                  style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }}
                  onError={e => { e.target.style.display="none"; e.target.parentNode.style.background="var(--dark-3)"; e.target.parentNode.style.display="flex"; e.target.parentNode.style.alignItems="center"; e.target.parentNode.style.justifyContent="center"; e.target.parentNode.style.fontSize="80px"; e.target.parentNode.innerText="👨🏾‍💻"; }}
                />
              </div>
              {/* Floating badges - hidden on very small screens */}
              <div style={{ position:"absolute", top:"-10px", right:"-10px", background:"var(--dark-card)", border:"1px solid rgba(0,229,255,0.2)", padding:"10px 14px", borderRadius:"10px", animation:"float 4s ease-in-out infinite", display:"block" }}>
                <div style={{ fontSize:"10px", color:"var(--cyan)", fontFamily:"'Syne'", fontWeight:700 }}>FULLSTACK</div>
                <div style={{ fontSize:"9px", color:"var(--text-dim)" }}>React · Node · Python</div>
              </div>
              <div style={{ position:"absolute", bottom:"16px", left:"-10px", background:"var(--dark-card)", border:"1px solid rgba(0,229,255,0.2)", padding:"10px 14px", borderRadius:"10px", animation:"float 5s ease-in-out infinite 1s" }}>
                <div style={{ fontSize:"10px", color:"var(--cyan)", fontFamily:"'Syne'", fontWeight:700 }}>UI/UX</div>
                <div style={{ fontSize:"9px", color:"var(--text-dim)" }}>Design · Prototype</div>
              </div>
              <div style={{ position:"absolute", top:0, left:0, width:"50px", height:"50px", borderTop:"2px solid var(--cyan)", borderLeft:"2px solid var(--cyan)" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position:"absolute", bottom:"24px", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:"6px" }}>
        <span style={{ fontSize:"9px", letterSpacing:"2px", color:"var(--text-dim)" }}>SCROLL</span>
        <div style={{ width:"1px", height:"40px", background:"linear-gradient(to bottom, var(--cyan), transparent)", animation:"float 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}