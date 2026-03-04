const projects = [
  { title:"ShubzLuxuryHub — E-Commerce Platform", description:"A comprehensive e-commerce solution with storefront, admin dashboard, WhatsApp order notifications, dynamic pricing, stock management, and location-based shipping.", tags:["HTML5","CSS3","JavaScript","PHP","MySQL"], emoji:"🛒", live:"#", github:null, featured:true, badge:"Web Development" },
  { title:"TutorConnect — Student & Tutor Platform", description:"A full-stack platform where students log in and search for tutors by subject, and tutors register to be discovered. Makes quality tutoring accessible for Nigerian students.", tags:["Python","HTML","CSS","JavaScript"], emoji:"🎓", live:"#", github:null, featured:true, badge:"Education" },
  { title:"Educational Games Platform", description:"An interactive platform featuring educational games designed to make learning fun and engaging for students.", tags:["HTML","CSS","JavaScript"], emoji:"🎮", live:"#", github:null, featured:false },
  { title:"Task Management App", description:"A Kanban-style productivity app with drag-and-drop, team collaboration, and real-time updates.", tags:["React","JavaScript","CSS"], emoji:"📋", live:"#", github:null, featured:false },
  { title:"Weather Dashboard", description:"Real-time weather app with location search, forecasts, and beautiful data visualizations.", tags:["JavaScript","API","CSS"], emoji:"🌤️", live:"#", github:null, featured:false },
  { title:"UI/UX Case Study", description:"A complete redesign of a mobile banking app focusing on accessibility and user experience.", tags:["Figma","UI/UX","Prototype"], emoji:"📱", live:"#", github:null, featured:false },
];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background:"var(--dark-2)" }}>
      <div className="container">
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"clamp(32px,5vw,60px)", flexWrap:"wrap", gap:"16px" }}>
          <div>
            <span className="section-tag">My Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p style={{ color:"var(--text-dim)", fontWeight:300, fontSize:"clamp(12px,2vw,14px)", marginTop:"6px" }}>Real projects I've built. GitHub links coming soon.</p>
          </div>
          <a href="https://github.com/johnnyboy4" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize:"13px" }}>GitHub →</a>
        </div>

        {/* Featured */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%,300px),1fr))", gap:"clamp(14px,3vw,24px)", marginBottom:"clamp(14px,3vw,24px)" }}>
          {projects.filter(p=>p.featured).map(project => (
            <div key={project.title} className="card glow-box" style={{ padding:0, overflow:"hidden", display:"flex", flexDirection:"column" }}>
              <div style={{ height:"clamp(140px,20vw,220px)", overflow:"hidden", background:"linear-gradient(135deg, var(--dark-3), var(--dark-2))", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", borderBottom:"1px solid rgba(0,229,255,0.06)" }}>
                <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)", backgroundSize:"30px 30px" }} />
                <span style={{ fontSize:"clamp(48px,8vw,70px)", position:"relative", zIndex:1 }}>{project.emoji}</span>
                <span style={{ position:"absolute", top:"12px", left:"12px", fontSize:"9px", color:"var(--cyan)", letterSpacing:"2px", background:"rgba(0,0,0,0.6)", backdropFilter:"blur(10px)", padding:"4px 10px", border:"1px solid rgba(0,229,255,0.2)" }}>{project.badge?.toUpperCase()}</span>
              </div>
              <div style={{ padding:"clamp(18px,3vw,28px)", flex:1, display:"flex", flexDirection:"column" }}>
                <h3 style={{ fontFamily:"'Syne'", fontWeight:700, fontSize:"clamp(14px,2.5vw,19px)", color:"#fff", marginBottom:"10px", lineHeight:1.3 }}>{project.title}</h3>
                <p style={{ color:"var(--text-dim)", lineHeight:1.7, fontSize:"clamp(11px,1.8vw,13px)", marginBottom:"16px", fontWeight:300, flex:1 }}>{project.description}</p>
                <div style={{ display:"flex", gap:"6px", flexWrap:"wrap", marginBottom:"20px" }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ fontSize:"10px", color:"var(--text-dim)", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)", padding:"3px 10px" }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display:"flex", gap:"10px", alignItems:"center", flexWrap:"wrap" }}>
                  <a href={project.live} className="btn-primary" style={{ fontSize:"11px", padding:"9px 16px" }}>Live Demo ↗</a>
                  {project.github ? (
                    <a href={project.github} className="btn-outline" style={{ fontSize:"11px", padding:"8px 16px" }}>GitHub</a>
                  ) : (
                    <span style={{ fontSize:"11px", color:"var(--text-dim)", fontStyle:"italic" }}>GitHub coming soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%,240px),1fr))", gap:"clamp(12px,2vw,20px)" }}>
          {projects.filter(p=>!p.featured).map(project => (
            <div key={project.title} className="card glow-box" style={{ padding:"clamp(18px,3vw,28px)" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"12px" }}>
                <span style={{ fontSize:"clamp(24px,4vw,32px)" }}>{project.emoji}</span>
                <a href={project.live} style={{ color:"var(--text-dim)", fontSize:"16px", textDecoration:"none" }}
                  onMouseEnter={e=>e.target.style.color="var(--cyan)"} onMouseLeave={e=>e.target.style.color="var(--text-dim)"}
                >↗</a>
              </div>
              <h3 style={{ fontFamily:"'Syne'", fontWeight:700, fontSize:"clamp(13px,2vw,17px)", color:"#fff", marginBottom:"8px" }}>{project.title}</h3>
              <p style={{ color:"var(--text-dim)", lineHeight:1.7, fontSize:"clamp(11px,1.8vw,13px)", marginBottom:"14px", fontWeight:300 }}>{project.description}</p>
              <div style={{ display:"flex", gap:"4px", flexWrap:"wrap" }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontSize:"10px", color:"var(--cyan)", fontFamily:"'DM Sans'", letterSpacing:"0.5px" }}>{tag} ·</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}