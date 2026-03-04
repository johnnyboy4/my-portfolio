export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--dark-2)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          
          {/* Left - Visual */}
          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%", paddingBottom: "110%",
              background: "var(--dark-3)",
              border: "1px solid rgba(0,229,255,0.1)",
              position: "relative",
              clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
              overflow: "hidden",
            }}>
              {/* Grid pattern */}
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }} />
              {/* Content inside */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "20px", padding: "40px" }}>
                <div style={{ fontSize: "80px" }}>👨🏾‍💻</div>
                <div style={{
                  background: "rgba(0,229,255,0.06)", border: "1px solid rgba(0,229,255,0.15)",
                  padding: "20px 24px", width: "100%",
                }}>
                  <div style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "2px", marginBottom: "12px" }}>CURRENT STACK</div>
                  {["HTML5", "CSS3", "PHP", "Python", "React.js", "Node.js"].map(tech => (
                    <div key={tech} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      marginBottom: "8px",
                    }}>
                      <span style={{ fontSize: "13px", color: "var(--text)" }}>{tech}</span>
                      <div style={{ height: "2px", width: "60%", background: "var(--dark)", position: "relative" }}>
                        <div style={{
                          position: "absolute", top: 0, left: 0, height: "100%",
                          width: tech === "HTML5" ? "95%" : tech === "CSS3" ? "92%" : tech === "PHP" ? "88%" : tech === "Python" ? "85%" : tech === "React.js" ? "82%" : "80%",
                          background: "var(--cyan)",
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Corner accent */}
            <div style={{
              position: "absolute", bottom: "-20px", right: "-20px",
              width: "80px", height: "80px",
              borderBottom: "2px solid var(--cyan)",
              borderRight: "2px solid var(--cyan)",
            }} />
          </div>

          {/* Right - Content */}
          <div>
            <span className="section-tag">About Me</span>
            <h2 className="section-title">
              Building the web,<br />
              <span style={{ color: "var(--cyan)" }}>one line at a time</span>
            </h2>

            <p style={{ color: "var(--text-dim)", lineHeight: 1.9, marginBottom: "20px", fontWeight: 300 }}>
              I'm <strong style={{ color: "var(--text)" }}>JohnnyBravo</strong> (Issume John Onyekachukwu), a passionate Fullstack Web Developer and UI/UX Designer 
              based in Nigeria. I specialize in building high-performance, visually stunning digital products 
              that solve real-world problems.
            </p>

            <p style={{ color: "var(--text-dim)", lineHeight: 1.9, marginBottom: "32px", fontWeight: 300 }}>
              With a strong foundation in both frontend and backend technologies, I bring ideas to life 
              from concept to deployment. I'm equally passionate about creating intuitive user interfaces 
              that don't just look good they feel right. My approach combines technical precision with 
              creative thinking to deliver experiences that truly stand out.
            </p>

            {/* Info grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "36px" }}>
              {[
                ["Name", "JohnnyBravo"],
                ["Birth Name", "Issume John"],
                ["Location", "Nigeria"],
                ["Status", "Available for hire"],
              ].map(([label, value]) => (
                <div key={label} style={{
                  padding: "16px",
                  background: "var(--dark-card)",
                  border: "1px solid rgba(0,229,255,0.06)",
                }}>
                  <div style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "2px", marginBottom: "4px" }}>{label.toUpperCase()}</div>
                  <div style={{ fontSize: "14px", color: "var(--text)", fontWeight: 500 }}>{value}</div>
                </div>
              ))}
            </div>

            <a 
              href="/resume" 
              className="btn-primary">Download Resume ↓</a>
          </div>
        </div>
      </div>
    </section>
  );
}