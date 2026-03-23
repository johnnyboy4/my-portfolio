import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Gallery", "Testimonials", "Blog", "Contact"];

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Gallery is a separate page, all others are anchor links
  const getHref = (link) => link === "Gallery" ? "/gallery" : `#${link.toLowerCase()}`;

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled || menuOpen ? "rgba(5,10,14,0.95)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid rgba(0,229,255,0.06)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px clamp(16px,5vw,24px)" }}>

          {/* Logo */}
          <a href="/" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(18px,3vw,22px)", color: "#fff", textDecoration: "none" }}>
            JB<span style={{ color: "var(--cyan)" }}>.</span>
          </a>

          {/* Desktop Links */}
          {!isMobile && (
            <div style={{ display: "flex", gap: "clamp(12px,2vw,28px)" }}>
              {links.map(link => (
                <a key={link}
                  href={getHref(link)}
                  style={{ fontFamily: "'DM Sans'", fontSize: "13px", color: link === "Gallery" ? "var(--cyan)" : "var(--text-dim)", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={e => e.target.style.color = "var(--cyan)"}
                  onMouseLeave={e => e.target.style.color = link === "Gallery" ? "var(--cyan)" : "var(--text-dim)"}
                >{link}</a>
              ))}
            </div>
          )}

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {!isMobile && (
              <a href="/resume" className="btn-primary" style={{ fontSize: "12px", padding: "9px 18px" }}>Resume ↓</a>
            )}
            {/* Hamburger */}
            {isMobile && (
              <button onClick={() => setMenuOpen(!menuOpen)} style={{
                background: "none", border: "1px solid rgba(0,229,255,0.2)",
                color: "var(--cyan)", fontSize: "20px", cursor: "pointer",
                width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {menuOpen ? "✕" : "☰"}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <div style={{
            background: "rgba(5,10,14,0.98)", borderTop: "1px solid rgba(0,229,255,0.08)",
            padding: "20px clamp(16px,5vw,24px) 24px",
            display: "flex", flexDirection: "column", gap: "4px",
          }}>
            {links.map(link => (
              <a key={link}
                href={getHref(link)}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'DM Sans'", fontSize: "16px",
                  color: link === "Gallery" ? "var(--cyan)" : "var(--text)",
                  textDecoration: "none", padding: "12px 0",
                  borderBottom: "1px solid rgba(0,229,255,0.05)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={e => e.target.style.color = "var(--cyan)"}
                onMouseLeave={e => e.target.style.color = link === "Gallery" ? "var(--cyan)" : "var(--text)"}
              >{link}</a>
            ))}
            <a href="/resume" className="btn-primary" style={{ marginTop: "16px", justifyContent: "center" }}>Resume ↓</a>
          </div>
        )}
      </nav>
    </>
  );
}
