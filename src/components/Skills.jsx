const skillCategories = [
  { title:"Frontend", icon:"🎨", skills:[{name:"HTML5",level:95},{name:"CSS3",level:92},{name:"JavaScript",level:88},{name:"React.js",level:82}] },
  { title:"Backend", icon:"⚙️", skills:[{name:"PHP",level:88},{name:"Python",level:85},{name:"Node.js",level:80},{name:"REST APIs",level:83}] },
  { title:"UI/UX Design", icon:"✏️", skills:[{name:"Figma",level:75},{name:"Wireframing",level:78},{name:"Prototyping",level:72},{name:"Design Systems",level:70}] },
  { title:"Tools & Others", icon:"🛠️", skills:[{name:"Git & GitHub",level:85},{name:"MySQL/MongoDB",level:80},{name:"VS Code",level:95},{name:"Netlify",level:85}] },
];
const techIcons = ["HTML5","CSS3","JavaScript","React","Node.js","Python","PHP","MySQL","Git","Figma","MongoDB","Netlify"];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background:"var(--dark)" }}>
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:"clamp(40px,6vw,70px)" }}>
          <span className="section-tag" style={{ paddingLeft:0, paddingRight:"36px" }}>
            My Expertise
            <span style={{ position:"absolute", right:0, top:"50%", width:"24px", height:"1px", background:"var(--cyan)" }} />
          </span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p style={{ color:"var(--text-dim)", maxWidth:"500px", margin:"0 auto", fontWeight:300, fontSize:"clamp(13px,2vw,15px)" }}>
            A curated set of tools and technologies I use to craft exceptional digital products.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%,260px),1fr))", gap:"clamp(14px,3vw,24px)", marginBottom:"clamp(32px,5vw,60px)" }}>
          {skillCategories.map(cat => (
            <div key={cat.title} className="card glow-box" style={{ padding:"clamp(20px,3vw,32px)" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"20px" }}>
                <span style={{ fontSize:"clamp(18px,3vw,24px)" }}>{cat.icon}</span>
                <h3 style={{ fontFamily:"'Syne'", fontWeight:700, fontSize:"clamp(14px,2vw,18px)", color:"#fff" }}>{cat.title}</h3>
              </div>
              {cat.skills.map(skill => (
                <div key={skill.name} style={{ marginBottom:"14px" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"6px" }}>
                    <span style={{ fontSize:"clamp(11px,1.8vw,13px)", color:"var(--text)" }}>{skill.name}</span>
                    <span style={{ fontSize:"11px", color:"var(--cyan)" }}>{skill.level}%</span>
                  </div>
                  <div style={{ height:"3px", background:"rgba(255,255,255,0.05)", borderRadius:"2px", overflow:"hidden" }}>
                    <div style={{ height:"100%", width:`${skill.level}%`, background:"linear-gradient(90deg, var(--cyan-dim), var(--cyan))", borderRadius:"2px", boxShadow:"0 0 8px rgba(0,229,255,0.4)" }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Stack order card */}
        <div className="card" style={{ padding:"clamp(20px,3vw,32px)", marginBottom:"clamp(24px,4vw,40px)", background:"rgba(0,229,255,0.02)" }}>
          <div style={{ fontSize:"10px", color:"var(--text-dim)", letterSpacing:"2px", marginBottom:"16px" }}>CURRENT STACK — IN ORDER OF PROFICIENCY</div>
          <div style={{ display:"flex", gap:"10px", flexWrap:"wrap" }}>
            {[{name:"HTML5",color:"#e34f26"},{name:"CSS3",color:"#264de4"},{name:"JavaScript",color:"#f7df1e"},{name:"PHP",color:"#777bb4"},{name:"Python",color:"#3776ab"},{name:"React.js",color:"#61dafb"},{name:"Node.js",color:"#339933"}].map((tech,i) => (
              <div key={tech.name} style={{ display:"flex", alignItems:"center", gap:"6px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)", padding:"8px 14px" }}>
                <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:tech.color, display:"inline-block", flexShrink:0 }} />
                <span style={{ fontSize:"clamp(10px,1.8vw,13px)", color:"var(--text)" }}>{tech.name}</span>
                <span style={{ fontSize:"9px", color:"var(--text-dim)" }}>#{i+1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ticker */}
        <div style={{ overflow:"hidden", border:"1px solid rgba(0,229,255,0.08)", padding:"16px 0" }}>
          <div style={{ display:"flex", gap:"40px", animation:"marquee 20s linear infinite", width:"max-content" }}>
            {[...techIcons,...techIcons].map((tech,i) => (
              <span key={i} style={{ fontFamily:"'Syne'", fontWeight:700, fontSize:"12px", color:i%3===0?"var(--cyan)":"var(--text-dim)", letterSpacing:"2px", whiteSpace:"nowrap" }}>
                {tech} <span style={{ color:"rgba(0,229,255,0.2)" }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}