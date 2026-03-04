import { useState } from "react";

const links = ["About", "Skills", "Projects", "Testimonials", "Blog", "Contact"];

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1200px",
        margin: "0 auto",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "22px",
          color: "#fff",
          textDecoration: "none",
          letterSpacing: "-0.5px",
        }}
      >
        JB<span style={{ color: "var(--cyan)" }}>.</span>
      </a>

      {/* Desktop Links */}
      <div
        style={{
          display: "flex",
          gap: "36px",
          background: scrolled ? "rgba(5,10,14,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          border: scrolled ? "1px solid rgba(0,229,255,0.08)" : "none",
          padding: scrolled ? "12px 32px" : "0",
          borderRadius: "100px",
          transition: "all 0.4s ease",
        }}
        className="desktop-nav"
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "var(--text-dim)",
              textDecoration: "none",
              transition: "color 0.3s ease",
              letterSpacing: "0.5px",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--cyan)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--text-dim)")}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Resume Button */}
      <a
        href="/resume"
        className="btn-primary"
        style={{ fontSize: "12px", padding: "10px 20px" }}
      >
        Resume ↓
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "var(--cyan)",
          fontSize: "24px",
          cursor: "pointer",
        }}
        className="mobile-menu-btn"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}