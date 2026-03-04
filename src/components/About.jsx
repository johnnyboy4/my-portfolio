export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--dark-2)" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(32px, 6vw, 80px)",
          alignItems: "center",
        }}>

          {/* Visual */}
          <div style={{ position:"relative", order:1 }}>
            <div style={{
              width:"100%", paddingBottom:"90%",
              background:"var(--dark-3)", border:"1px solid rgba(0,229,255,0.1)",
              position:"relative", overflow:"hidden",
              clipPath:"polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
            }}>
              <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)", backgroundSize:"40px 40px" }} />
              <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"16px", padding:"clamp(20px,4vw,40px)" }}>
                <div style={{ fontSize:"clamp(48px,8vw,80px)" }}>👨🏾‍💻</div>
                <div style={{ background:"rgba(0,229,255,0.06)", border:"1px solid rgba(0,229,255,0.15)", padding:"16px 20px", width:"100%" }}>
                  <div style={{ fontSize:"10px", color:"var(--text-dim)", letterSpacing:"2px", marginBottom:"10px" }}>CURRENT STACK</div>
                  {["HTML5","CSS3","PHP","Python","React.js","Node.js"].map(tech => (
                    <div key={tech} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"7px" }}>
                      <span style={{ fontSize:"12px", color:"var(--text)" }}>{tech}</span>
                      <div style={{ height:"2px", width:"55%", background:"var(--dark)", position:"relative" }}>
                        <div style={{ position:"absolute", top:0, left:0, height:"100%", background:"var(--cyan)",
                          width: tech==="HTML5"?"95%":tech==="CSS3"?"92%":tech==="PHP"?"88%":tech==="Python"?"85%":tech==="React.js"?"82%":"80%" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ position:"absolute", bottom:"-16px", right:"-16px", width:"60px", height:"60px", borderBottom:"2px solid var(--cyan)", borderRight:"2px solid var(--cyan)" }} />
          </div>

          {/* Content */}
          <div style={{ order:2 }}>
            <span className="section-tag">About Me</span>
            <h2 className="section-title">Building the web,<br /><span style={{ color:"var(--cyan)" }}>one line at a time</span></h2>

            <p style={{ color:"var(--text-dim)", lineHeight:1.9, marginBottom:"16px", fontWeight:300, fontSize:"clamp(13px,2vw,15px)" }}>
              I'm <strong style={{ color:"var(--text)" }}>JohnnyBravo</strong> (Issume John Onyekachukwu), a passionate Fullstack Web Developer and UI/UX Designer based in Nigeria. I specialize in building high-performance, visually stunning digital products that solve real-world problems.
            </p>
            <p style={{ color:"var(--text-dim)", lineHeight:1.9, marginBottom:"28px", fontWeight:300, fontSize:"clamp(13px,2vw,15px)" }}>
              With a strong foundation in both frontend and backend technologies, I bring ideas to life from concept to deployment. I combine technical precision with creative thinking to deliver experiences that truly stand out.
            </p>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(140px,1fr))", gap:"12px", marginBottom:"28px" }}>
              {[["Brand","JohnnyBravo"],["Birth Name","Issume John"],["Location","Nigeria"],["Status","Available for hire"]].map(([label,value]) => (
                <div key={label} style={{ padding:"14px", background:"var(--dark-card)", border:"1px solid rgba(0,229,255,0.06)" }}>
                  <div style={{ fontSize:"9px", color:"var(--text-dim)", letterSpacing:"2px", marginBottom:"4px" }}>{label.toUpperCase()}</div>
                  <div style={{ fontSize:"clamp(11px,2vw,14px)", color:"var(--text)", fontWeight:500 }}>{value}</div>
                </div>
              ))}
            </div>

            <a href="/resume" className="btn-primary">View Resume →</a>
          </div>
        </div>
      </div>
    </section>
  );
}