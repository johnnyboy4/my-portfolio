export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background:"var(--dark-2)", borderTop:"1px solid rgba(0,229,255,0.06)", padding:"clamp(32px,6vw,48px) 0" }}>
      <div className="container">
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%,200px),1fr))", gap:"clamp(24px,4vw,32px)", alignItems:"center", marginBottom:"clamp(24px,4vw,36px)" }}>

          <div>
            <div style={{ fontFamily:"'Syne'", fontWeight:800, fontSize:"clamp(18px,3vw,22px)", color:"#fff", marginBottom:"6px" }}>
              JB<span style={{ color:"var(--cyan)" }}>.</span>
            </div>
            <p style={{ fontSize:"clamp(11px,2vw,13px)", color:"var(--text-dim)" }}>Fullstack Developer & UI/UX Designer</p>
          </div>

          <div style={{ display:"flex", gap:"clamp(16px,3vw,32px)", flexWrap:"wrap" }}>
            {["About","Skills","Projects","Contact"].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ fontSize:"clamp(12px,2vw,13px)", color:"var(--text-dim)", textDecoration:"none", transition:"color 0.3s" }}
                onMouseEnter={e=>e.target.style.color="var(--cyan)"} onMouseLeave={e=>e.target.style.color="var(--text-dim)"}
              >{link}</a>
            ))}
          </div>

          <div style={{ display:"flex", gap:"12px" }}>
            {[{icon:"🐙",href:"https://github.com/johnnyboy4"},{icon:"💼",href:"https://linkedin.com"},{icon:"🐦",href:"https://twitter.com"}].map(s => (
              <a key={s.icon} href={s.href} target="_blank" rel="noreferrer"
                style={{ width:"clamp(34px,5vw,40px)", height:"clamp(34px,5vw,40px)", background:"rgba(0,229,255,0.04)", border:"1px solid rgba(0,229,255,0.1)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"clamp(14px,2.5vw,18px)", textDecoration:"none", transition:"all 0.3s" }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--cyan)";e.currentTarget.style.background="rgba(0,229,255,0.08)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(0,229,255,0.1)";e.currentTarget.style.background="rgba(0,229,255,0.04)"}}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        <div style={{ paddingTop:"clamp(16px,3vw,24px)", borderTop:"1px solid rgba(0,229,255,0.05)", textAlign:"center" }}>
          <p style={{ fontSize:"clamp(10px,1.8vw,12px)", color:"var(--text-dim)" }}>
            © {year} JohnnyBravo — Issume John Onyekachukwu. Built with React & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}