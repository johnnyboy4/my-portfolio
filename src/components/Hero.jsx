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
    <section id="hero" className="grid-bg" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden", paddingTop: "80px",
    }}>

      <div style={{ position:"absolute", top:"20%", right:"5%", width:"clamp(150px,25vw,400px)", height:"clamp(150px,25vw,400px)", background:"radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none" }} />

      <div className="container" style={{ position:"relative", zIndex:1, width:"100%" }}>
        <div className="hero-grid">

          {/* TEXT — always order 1 */}
          <div className="hero-text">
            <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(0,229,255,0.06)", border:"1px solid rgba(0,229,255,0.15)", padding:"7px 14px", borderRadius:"100px", marginBottom:"clamp(16px,3vw,28px)" }}>
              <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:"var(--cyan)", display:"inline-block", animation:"pulse-cyan 2s ease infinite" }} />
              <span style={{ fontSize:"11px", color:"var(--cyan)", fontFamily:"'DM Sans'", letterSpacing:"1px" }}>Available for work</span>
            </div>

            <h1 style={{ fontSize:"clamp(2rem,6vw,5rem)", fontWeight:800, lineHeight:1.05, color:"#fff", marginBottom:"6px" }}>
              Johnny<span style={{ color:"var(--cyan)", textShadow:"0 0 40px rgba(0,229,255,0.3)" }}>Bravo</span>
            </h1>

            <p style={{ fontSize:"clamp(9px,1.5vw,13px)", color:"var(--text-dim)", fontFamily:"'DM Sans'", fontWeight:300, letterSpacing:"2px", marginBottom:"14px", textTransform:"uppercase" }}>
              Issume John Onyekachukwu
            </p>

            <div style={{ marginBottom:"16px", height:"36px", display:"flex", alignItems:"center" }}>
              <span style={{ fontSize:"clamp(0.85rem,2vw,1.3rem)", color:"var(--text-dim)", fontFamily:"'DM Sans'", fontWeight:300 }}>
                {displayed}<span style={{ animation:"blink 1s step-end infinite", color:"var(--cyan)" }}>|</span>
              </span>
            </div>

            <p style={{ fontSize:"clamp(13px,1.5vw,15px)", lineHeight:1.8, color:"var(--text-dim)", maxWidth:"480px", marginBottom:"clamp(20px,4vw,36px)", fontWeight:300 }}>
              Crafting exceptional digital experiences through clean code and thoughtful design.
              I bridge the gap between functionality and aesthetics to build products people love.
            </p>

            <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
              <a href="#projects" className="btn-primary">View My Work →</a>
              <a href="#contact" className="btn-outline">Let's Talk</a>
            </div>

            <div style={{ display:"flex", gap:"clamp(20px,5vw,40px)", marginTop:"clamp(28px,5vw,48px)", flexWrap:"wrap" }}>
              {[["4+","Years Exp."],["10+","Projects"],["5+","Clients"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize:"clamp(1.3rem,3vw,2rem)", fontWeight:800, color:"var(--cyan)", fontFamily:"'Syne'" }}>{num}</div>
                  <div style={{ fontSize:"clamp(9px,1.2vw,11px)", color:"var(--text-dim)", letterSpacing:"1px", marginTop:"2px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE — order 2 always */}
          <div className="hero-image">
            <div style={{ position:"relative", width:"clamp(180px,38vw,320px)", height:"clamp(220px,43vw,380px)", margin:"0 auto" }}>
              <div style={{
                width:"100%", height:"100%", position:"relative",
                clipPath:"polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                overflow:"hidden", border:"1px solid rgba(0,229,255,0.15)",
              }}>
                <img src="/profile_clean.png" alt="JohnnyBravo"
                  style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }}
                  onError={e => {
                    e.target.style.display="none";
                    e.target.parentNode.style.background="var(--dark-3)";
                    e.target.parentNode.style.display="flex";
                    e.target.parentNode.style.alignItems="center";
                    e.target.parentNode.style.justifyContent="center";
                    e.target.parentNode.style.fontSize="80px";
                    e.target.parentNode.innerText="👨🏾‍💻";
                  }}
                />
              </div>
              <div style={{ position:"absolute", top:"-8px", right:"-8px", background:"var(--dark-card)", border:"1px solid rgba(0,229,255,0.2)", padding:"8px 12px", borderRadius:"10px", animation:"float 4s ease-in-out infinite" }}>
                <div style={{ fontSize:"9px", color:"var(--cyan)", fontFamily:"'Syne'", fontWeight:700 }}>FULLSTACK</div>
                <div style={{ fontSize:"8px", color:"var(--text-dim)" }}>React · Node · Python</div>
              </div>
              <div style={{ position:"absolute", bottom:"14px", left:"-8px", background:"var(--dark-card)", border:"1px solid rgba(0,229,255,0.2)", padding:"8px 12px", borderRadius:"10px", animation:"float 5s ease-in-out infinite 1s" }}>
                <div style={{ fontSize:"9px", color:"var(--cyan)", fontFamily:"'Syne'", fontWeight:700 }}>UI/UX</div>
                <div style={{ fontSize:"8px", color:"var(--text-dim)" }}>Design · Prototype</div>
              </div>
              <div style={{ position:"absolute", top:0, left:0, width:"40px", height:"40px", borderTop:"2px solid var(--cyan)", borderLeft:"2px solid var(--cyan)" }} />
            </div>
          </div>

        </div>
      </div>

      <div style={{ position:"absolute", bottom:"20px", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:"6px" }}>
        <span style={{ fontSize:"9px", letterSpacing:"2px", color:"var(--text-dim)" }}>SCROLL</span>
        <div style={{ width:"1px", height:"36px", background:"linear-gradient(to bottom, var(--cyan), transparent)", animation:"float 2s ease-in-out infinite" }} />
      </div>

      <style>{`
        /* Desktop & tablet landscape */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(24px, 5vw, 60px);
          align-items: center;
        }
        .hero-text { order: 1; }
        .hero-image { order: 2; display: flex; justify-content: center; }

        /* Tablet portrait */
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 55% 45%; gap: 20px; }
        }

        /* Mobile — stack: text on top, image below */
        @media (max-width: 640px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .hero-text {
            order: 1;
            text-align: left;
          }
          .hero-image {
            order: 2;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
