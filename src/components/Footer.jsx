export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: "var(--dark-2)",
      borderTop: "1px solid rgba(0,229,255,0.06)",
      padding: "48px 24px",
    }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <div style={{ fontFamily: "'Syne'", fontWeight: 800, fontSize: "22px", color: "#fff", marginBottom: "6px" }}>
              JB<span style={{ color: "var(--cyan)" }}>.</span>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-dim)" }}>
              Fullstack Developer & UI/UX Designer
            </p>
          </div>

          <div style={{ display: "flex", gap: "32px" }}>
            {["About", "Skills", "Projects", "Contact"].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{
                fontSize: "13px", color: "var(--text-dim)", textDecoration: "none",
                transition: "color 0.3s",
              }}
                onMouseEnter={e => e.target.style.color = "var(--cyan)"}
                onMouseLeave={e => e.target.style.color = "var(--text-dim)"}
              >{link}</a>
            ))}
          </div>

          <div style={{ display: "flex", gap: "16px" }}>
            {[
              { icon: "🐙", href: "https://github.com", label: "GitHub" },
              { icon: "💼", href: "https://linkedin.com", label: "LinkedIn" },
              { icon: "🐦", href: "https://twitter.com", label: "Twitter" },
            ].map(social => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer"
                style={{
                  width: "40px", height: "40px",
                  background: "rgba(0,229,255,0.04)",
                  border: "1px solid rgba(0,229,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px", textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.background = "rgba(0,229,255,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,229,255,0.1)"; e.currentTarget.style.background = "rgba(0,229,255,0.04)"; }}
              >{social.icon}</a>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: "36px", paddingTop: "24px",
          borderTop: "1px solid rgba(0,229,255,0.05)",
          textAlign: "center",
        }}>
          <p style={{ fontSize: "12px", color: "var(--text-dim)" }}>
            © {year} JohnnyBravo — Issume John Onyekachukwu. Built with React & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}