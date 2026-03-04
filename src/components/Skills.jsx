const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 82 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Python", level: 85 },
      { name: "PHP", level: 88 },
      { name: "Node.js", level: 80 },
      { name: "REST APIs", level: 83 },
    ],
  },
  {
    title: "UI/UX Design",
    icon: "✏️",
    skills: [
      { name: "Figma", level: 75 },
      { name: "Wireframing", level: 78 },
      { name: "Prototyping", level: 72 },
      { name: "Design Systems", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "MySQL / MongoDB", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Netlify", level: 85 },
    ],
  },
];

const techIcons = ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Python", "PHP", "MySQL", "Git", "Figma", "MongoDB", "Netlify"];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "var(--dark)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span className="section-tag" style={{ paddingLeft: 0, paddingRight: "40px", display: "inline-block", position: "relative" }}>
            My Expertise
            <span style={{ position: "absolute", right: 0, top: "50%", width: "28px", height: "1px", background: "var(--cyan)" }} />
          </span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p style={{ color: "var(--text-dim)", maxWidth: "500px", margin: "0 auto", fontWeight: 300 }}>
            A curated set of tools and technologies I use to craft exceptional digital products.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", marginBottom: "60px" }}>
          {skillCategories.map((cat) => (
            <div key={cat.title} className="card glow-box" style={{ padding: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
                <span style={{ fontSize: "24px" }}>{cat.icon}</span>
                <h3 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: "18px", color: "#fff" }}>{cat.title}</h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <span style={{ fontSize: "13px", color: "var(--text)" }}>{skill.name}</span>
                      <span style={{ fontSize: "12px", color: "var(--cyan)" }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: "3px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", overflow: "hidden" }}>
                      <div style={{
                        height: "100%",
                        width: `${skill.level}%`,
                        background: "linear-gradient(90deg, var(--cyan-dim), var(--cyan))",
                        borderRadius: "2px",
                        boxShadow: "0 0 10px rgba(0,229,255,0.4)",
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Current Stack Card */}
        <div className="card" style={{ padding: "32px", marginBottom: "40px", background: "rgba(0,229,255,0.02)" }}>
          <div style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "2px", marginBottom: "20px" }}>CURRENT STACK — IN ORDER OF PROFICIENCY</div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { name: "HTML5", color: "#e34f26" },
              { name: "CSS3", color: "#264de4" },
              { name: "JavaScript", color: "#f7df1e" },
              { name: "PHP", color: "#777bb4" },
              { name: "Python", color: "#3776ab" },
              { name: "React.js", color: "#61dafb" },
              { name: "Node.js", color: "#339933" },
            ].map((tech, i) => (
              <div key={tech.name} style={{
                display: "flex", alignItems: "center", gap: "8px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "10px 18px",
                position: "relative",
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: tech.color, display: "inline-block", flexShrink: 0 }} />
                <span style={{ fontSize: "13px", color: "var(--text)", fontFamily: "'DM Sans'" }}>{tech.name}</span>
                <span style={{ fontSize: "10px", color: "var(--text-dim)", marginLeft: "4px" }}>#{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling tech ticker */}
        <div style={{ overflow: "hidden", border: "1px solid rgba(0,229,255,0.08)", padding: "20px 0", position: "relative" }}>
          <div style={{ display: "flex", gap: "48px", animation: "marquee 20s linear infinite", width: "max-content" }}>
            {[...techIcons, ...techIcons].map((tech, i) => (
              <span key={i} style={{
                fontFamily: "'Syne'", fontWeight: 700, fontSize: "13px",
                color: i % 3 === 0 ? "var(--cyan)" : "var(--text-dim)",
                letterSpacing: "2px", whiteSpace: "nowrap",
              }}>
                {tech} <span style={{ color: "rgba(0,229,255,0.2)" }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}