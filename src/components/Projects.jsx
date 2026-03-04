const projects = [
  {
    title: "ShubzLuxuryHub — E-Commerce Platform",
    description: "A comprehensive e-commerce solution with a beautiful storefront, shopping cart, and a full admin dashboard. Features include product catalog with advanced filtering, real-time cart updates, streamlined checkout, WhatsApp order notifications, dynamic pricing with sale support, stock management with low-stock alerts, and location-based shipping calculation.",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    image: null,
    emoji: "🛒",
    live: "#",
    github: null,
    featured: true,
    badge: "Web Development",
  },
  {
    title: "TutorConnect — Student & Tutor Platform",
    description: "A full-stack web platform where students can log in and search for tutors by subject or example, and tutors can register and create profiles to be discovered. Built to make quality tutoring accessible and easy to find for Nigerian students.",
    tags: ["Python", "HTML", "CSS", "JavaScript"],
    image: null,
    emoji: "🎓",
    live: "#",
    github: null,
    featured: true,
    badge: "Education",
  },
  {
    title: "Educational Games Platform",
    description: "An interactive platform featuring educational games designed to make learning fun and engaging for students. Built with a focus on gamification and interactivity.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: null,
    emoji: "🎮",
    live: "#",
    github: null,
    featured: false,
  },
  {
    title: "Task Management App",
    description: "A Kanban-style productivity app with drag-and-drop, team collaboration, and real-time updates.",
    tags: ["React", "JavaScript", "CSS"],
    image: null,
    emoji: "📋",
    live: "#",
    github: null,
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app with location search, forecasts, and beautiful data visualizations.",
    tags: ["JavaScript", "API", "CSS"],
    image: null,
    emoji: "🌤️",
    live: "#",
    github: null,
    featured: false,
  },
  {
    title: "UI/UX Case Study",
    description: "A complete redesign of a mobile banking app focusing on accessibility and user experience.",
    tags: ["Figma", "UI/UX", "Prototype"],
    image: null,
    emoji: "📱",
    live: "#",
    github: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: "var(--dark-2)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <span className="section-tag">My Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p style={{ color: "var(--text-dim)", fontWeight: 300, fontSize: "14px", marginTop: "8px", maxWidth: "500px" }}>
              Real projects I've built. GitHub links coming soon as I migrate them.
            </p>
          </div>
          <a href="https://github.com/johnnybravoDev" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: "13px" }}>
            GitHub →
          </a>
        </div>

        {/* Featured Projects */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.title} className="card glow-box" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              {/* Project image or placeholder */}
              <div style={{
                height: "220px", overflow: "hidden",
                background: "linear-gradient(135deg, var(--dark-3), var(--dark-2))",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative",
                borderBottom: "1px solid rgba(0,229,255,0.06)",
              }}>
                {project.image ? (
                  <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                    <span style={{ fontSize: "70px", position: "relative", zIndex: 1 }}>{project.emoji}</span>
                  </>
                )}
                <span style={{
                  position: "absolute", top: "16px", left: "16px",
                  fontSize: "10px", color: "var(--cyan)", letterSpacing: "2px",
                  background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)",
                  padding: "5px 12px", border: "1px solid rgba(0,229,255,0.2)",
                }}>{project.badge?.toUpperCase()}</span>
              </div>

              <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: "19px", color: "#fff", marginBottom: "12px", lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                <p style={{ color: "var(--text-dim)", lineHeight: 1.7, fontSize: "13px", marginBottom: "20px", fontWeight: 300, flex: 1 }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ fontSize: "11px", color: "var(--text-dim)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", padding: "4px 12px" }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <a href={project.live} className="btn-primary" style={{ fontSize: "12px", padding: "10px 20px" }}>Live Demo ↗</a>
                  {project.github ? (
                    <a href={project.github} className="btn-outline" style={{ fontSize: "12px", padding: "9px 20px" }}>GitHub</a>
                  ) : (
                    <span style={{ fontSize: "12px", color: "var(--text-dim)", fontStyle: "italic" }}>GitHub coming soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {projects.filter(p => !p.featured).map((project) => (
            <div key={project.title} className="card glow-box" style={{ padding: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span style={{ fontSize: "32px" }}>{project.emoji}</span>
                <div style={{ display: "flex", gap: "12px" }}>
                  <a href={project.live} style={{ color: "var(--text-dim)", fontSize: "16px", textDecoration: "none" }}
                    onMouseEnter={e => e.target.style.color = "var(--cyan)"}
                    onMouseLeave={e => e.target.style.color = "var(--text-dim)"}
                  >↗</a>
                </div>
              </div>
              <h3 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: "17px", color: "#fff", marginBottom: "10px" }}>{project.title}</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.7, fontSize: "13px", marginBottom: "20px", fontWeight: 300 }}>{project.description}</p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontSize: "10px", color: "var(--cyan)", fontFamily: "'DM Sans'", letterSpacing: "1px" }}>{tag} ·</span>
                ))}
              </div>
              {!project.github && (
                <div style={{ marginTop: "12px", fontSize: "11px", color: "var(--text-dim)", fontStyle: "italic" }}>GitHub coming soon</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}