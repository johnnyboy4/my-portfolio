import { useState } from "react";

// ─────────────────────────────────────────────
// 📁 ADD YOUR IMAGES TO: public/gallery/web/
//                         public/gallery/uiux/
//                         public/gallery/graphics/
//
// Then update the images array for each project below.
// To DELETE a project just remove its {} block from the array.
// To ADD description/tags just fill in the empty strings below.
// ─────────────────────────────────────────────

const projects = [
  // ── WEB PROJECTS ──────────────────────────
  {
    id: "w1", category: "web",
    title: "ShubzLuxuryHub",
    description: "ShubzLuxuryHub is a comprehensive e-commerce solution designed to provide a seamless online shopping experience. The platform includes a beautiful, user-friendly storefront where customers can browse products, add items to cart, and complete purchases through an intuitive checkout process.", // ← add your description here
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"], // ← e.g. ["PHP", "MySQL", "JavaScript"]
    cover: "/gallery/web/shubz-cover.png",
    images: [
      "/gallery/web/shubz-1.png",
      "/gallery/web/shubz-2.png",
      "/gallery/web/shubz-3.png",
      "/gallery/web/shubz-4.png",
      "/gallery/web/shubz-5.png",
      "/gallery/web/shubz-6.png",
      "/gallery/web/shubz-7.png",
      "/gallery/web/shubz-8.png",
      "/gallery/web/shubz-9.png",
      "/gallery/web/shubz-10.png",
    ],
  },
  {
    id: "w2", category: "web",
    title: "TutorConnect",
    description: "A full-stack platform where students log in and search for tutors by subject, exams and tutors register to be discovered. Makes quality tutoring accessible for students.",
    tags: ["Python", "HTML", "CSS", "JavaScript"],
    cover: "/gallery/web/tutor-cover.png",
    images: [
      "/gallery/web/tutor-1.png",
      "/gallery/web/tutor-2.png",
      "/gallery/web/tutor-3.png",
      "/gallery/web/tutor-4.png",
      "/gallery/web/tutor-5.png",
      "/gallery/web/tutor-6.png",
      "/gallery/web/tutor-7.png",
      "/gallery/web/tutor-8.png",
      "/gallery/web/tutor-9.png",
    ],
  },
  {
    id: "w3", category: "web",
    title: "Educational Games Platform",
    description: "An interactive platform featuring educational games designed to make learning fun and engaging for students.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    cover: "/gallery/web/games-cover.png",
    images: [
      "/gallery/web/games-1.png",
      "/gallery/web/games-2.png",
      "/gallery/web/games-3.png",
      "/gallery/web/games-4.png",
      "/gallery/web/games-5.png",
      "/gallery/web/games-6.png",
    ],
  },
  {
    id: "w4", category: "web",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my work and skills as a web developer.",
    tags: ["HTML5", "CSS3", "PYTHON", "JavaScript"],
    cover: "/gallery/web/web4-cover.png",
    images: [
      "/gallery/web/web4-1.png", 
      "/gallery/web/web4-2.png", 
      "/gallery/web/web4-3.png",
      "/gallery/web/web4-4.png",
      "/gallery/web/web4-5.png",
    ],
  },
  {
    id: "w5", category: "web",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my work and skills as a web developer.",
    tags: ["react", "node", "express", "mongodb", "tailwindcss"],
    cover: "/gallery/web/web5-cover.png",
    images: ["/gallery/web/web5-1.png", "/gallery/web/web5-2.png", "/gallery/web/web5-3.png"],
  },
  /* {
    id: "w6", category: "web",
    title: "Web Project 6",
    description: "",
    tags: [],
    cover: "/gallery/web/web6-cover.jpg",
    images: ["/gallery/web/web6-1.jpg", "/gallery/web/web6-2.jpg", "/gallery/web/web6-3.jpg"],
  },
  {
    id: "w7", category: "web",
    title: "Web Project 7",
    description: "",
    tags: [],
    cover: "/gallery/web/web7-cover.jpg",
    images: ["/gallery/web/web7-1.jpg", "/gallery/web/web7-2.jpg", "/gallery/web/web7-3.jpg"],
  },
  {
    id: "w8", category: "web",
    title: "Web Project 8",
    description: "",
    tags: [],
    cover: "/gallery/web/web8-cover.jpg",
    images: ["/gallery/web/web8-1.jpg", "/gallery/web/web8-2.jpg", "/gallery/web/web8-3.jpg"],
  },
  {
    id: "w9", category: "web",
    title: "Web Project 9",
    description: "",
    tags: [],
    cover: "/gallery/web/web9-cover.jpg",
    images: ["/gallery/web/web9-1.jpg", "/gallery/web/web9-2.jpg", "/gallery/web/web9-3.jpg"],
  },
  {
    id: "w10", category: "web",
    title: "Web Project 10",
    description: "",
    tags: [],
    cover: "/gallery/web/web10-cover.jpg",
    images: ["/gallery/web/web10-1.jpg", "/gallery/web/web10-2.jpg", "/gallery/web/web10-3.jpg"],
  },
 */
  // ── UI/UX PROJECTS ────────────────────────
  {
    id: "u1", category: "uiux",
    title: "UI/UX Projects",
    description: "designs for various UI/UX projects including mobile apps, web interfaces, and interactive prototypes. Each project focuses on user-centered design principles to create intuitive and engaging experiences.", // ← add your description here
    tags: ["Figma", "UI/UX", "Prototype"],
    cover: "/gallery/uiux/uiux1-cover.png",
    images: ["/gallery/uiux/uiux1-1.png", "/gallery/uiux/uiux1-2.png", "/gallery/uiux/uiux1-3.png"],
  },
  /* {
    id: "u2", category: "uiux",
    title: "UI/UX Project 2",
    description: "",
    tags: [],
    cover: "/gallery/uiux/uiux2-cover.jpg",
    images: ["/gallery/uiux/uiux2-1.jpg", "/gallery/uiux/uiux2-2.jpg", "/gallery/uiux/uiux2-3.jpg"],
  },
  {
    id: "u3", category: "uiux",
    title: "UI/UX Project 3",
    description: "",
    tags: [],
    cover: "/gallery/uiux/uiux3-cover.jpg",
    images: ["/gallery/uiux/uiux3-1.jpg", "/gallery/uiux/uiux3-2.jpg", "/gallery/uiux/uiux3-3.jpg"],
  },
  {
    id: "u4", category: "uiux",
    title: "UI/UX Project 4",
    description: "",
    tags: [],
    cover: "/gallery/uiux/uiux4-cover.jpg",
    images: ["/gallery/uiux/uiux4-1.jpg", "/gallery/uiux/uiux4-2.jpg", "/gallery/uiux/uiux4-3.jpg"],
  },
  {
    id: "u5", category: "uiux",
    title: "UI/UX Project 5",
    description: "",
    tags: [],
    cover: "/gallery/uiux/uiux5-cover.jpg",
    images: ["/gallery/uiux/uiux5-1.jpg", "/gallery/uiux/uiux5-2.jpg", "/gallery/uiux/uiux5-3.jpg"],
  },
  {
    id: "u6", category: "uiux",
    title: "UI/UX Project 6",
    description: "",
    tags: [],
    cover: "/gallery/uiux/uiux6-cover.jpg",
    images: ["/gallery/uiux/uiux6-1.jpg", "/gallery/uiux/uiux6-2.jpg", "/gallery/uiux/uiux6-3.jpg"],
  },
  {
    id: "u7", category: "uiux",
    title: "UI/UX Project 7",
    description: "",
    tags: [],
    cover: "/gallery/uiux/uiux7-cover.jpg",
    images: ["/gallery/uiux/uiux7-1.jpg", "/gallery/uiux/uiux7-2.jpg", "/gallery/uiux/uiux7-3.jpg"],
  },
  {
    id: "u8", category: "uiux",
    title: "UI/UX Project 8",
    description: "",
    tags: [],
    cover: "/gallery/uiux/uiux8-cover.jpg",
    images: ["/gallery/uiux/uiux8-1.jpg", "/gallery/uiux/uiux8-2.jpg", "/gallery/uiux/uiux8-3.jpg"],
  },
  {
    id: "u9", category: "uiux",
    title: "UI/UX Project 9",
    description: "",
    tags: [],
    cover: "/gallery/uiux/uiux9-cover.jpg",
    images: ["/gallery/uiux/uiux9-1.jpg", "/gallery/uiux/uiux9-2.jpg", "/gallery/uiux/uiux9-3.jpg"],
  },
  {
    id: "u10", category: "uiux",
    title: "UI/UX Project 10",
    description: "",
    tags: [],
    cover: "/gallery/uiux/uiux10-cover.jpg",
    images: ["/gallery/uiux/uiux10-1.jpg", "/gallery/uiux/uiux10-2.jpg", "/gallery/uiux/uiux10-3.jpg"],
  }, */

  // ── GRAPHICS PROJECTS ─────────────────────
  /* {
    id: "g1", category: "graphics",
    title: "Graphics Project 1",
    description: "",
    tags: [],
    cover: "/gallery/graphics/g1-cover.jpg",
    images: ["/gallery/graphics/g1-1.jpg", "/gallery/graphics/g1-2.jpg", "/gallery/graphics/g1-3.jpg"],
  },
  {
    id: "g2", category: "graphics",
    title: "Graphics Project 2",
    description: "",
    tags: [],
    cover: "/gallery/graphics/g2-cover.jpg",
    images: ["/gallery/graphics/g2-1.jpg", "/gallery/graphics/g2-2.jpg", "/gallery/graphics/g2-3.jpg"],
  },
  {
    id: "g3", category: "graphics",
    title: "Graphics Project 3",
    description: "",
    tags: [],
    cover: "/gallery/graphics/g3-cover.jpg",
    images: ["/gallery/graphics/g3-1.jpg", "/gallery/graphics/g3-2.jpg", "/gallery/graphics/g3-3.jpg"],
  },
  {
    id: "g4", category: "graphics",
    title: "Graphics Project 4",
    description: "",
    tags: [],
    cover: "/gallery/graphics/g4-cover.jpg",
    images: ["/gallery/graphics/g4-1.jpg", "/gallery/graphics/g4-2.jpg", "/gallery/graphics/g4-3.jpg"],
  },
  {
    id: "g5", category: "graphics",
    title: "Graphics Project 5",
    description: "",
    tags: [],
    cover: "/gallery/graphics/g5-cover.jpg",
    images: ["/gallery/graphics/g5-1.jpg", "/gallery/graphics/g5-2.jpg", "/gallery/graphics/g5-3.jpg"],
  },
  {
    id: "g6", category: "graphics",
    title: "Graphics Project 6",
    description: "",
    tags: [],
    cover: "/gallery/graphics/g6-cover.jpg",
    images: ["/gallery/graphics/g6-1.jpg", "/gallery/graphics/g6-2.jpg", "/gallery/graphics/g6-3.jpg"],
  },
  {
    id: "g7", category: "graphics",
    title: "Graphics Project 7",
    description: "",
    tags: [],
    cover: "/gallery/graphics/g7-cover.jpg",
    images: ["/gallery/graphics/g7-1.jpg", "/gallery/graphics/g7-2.jpg", "/gallery/graphics/g7-3.jpg"],
  },
  {
    id: "g8", category: "graphics",
    title: "Graphics Project 8",
    description: "",
    tags: [],
    cover: "/gallery/graphics/g8-cover.jpg",
    images: ["/gallery/graphics/g8-1.jpg", "/gallery/graphics/g8-2.jpg", "/gallery/graphics/g8-3.jpg"],
  },
  {
    id: "g9", category: "graphics",
    title: "Graphics Project 9",
    description: "",
    tags: [],
    cover: "/gallery/graphics/g9-cover.jpg",
    images: ["/gallery/graphics/g9-1.jpg", "/gallery/graphics/g9-2.jpg", "/gallery/graphics/g9-3.jpg"],
  },
  {
    id: "g10", category: "graphics",
    title: "Graphics Project 10",
    description: "",
    tags: [],
    cover: "/gallery/graphics/g10-cover.jpg",
    images: ["/gallery/graphics/g10-1.jpg", "/gallery/graphics/g10-2.jpg", "/gallery/graphics/g10-3.jpg"],
  }, */
];

const filters = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "uiux", label: "UI/UX" },
  { key: "graphics", label: "Graphics" },
];

const categoryColors = {
  web: "#00e5ff",
  uiux: "#a78bfa",
  graphics: "#f472b6",
};

const categoryLabels = {
  web: "Web",
  uiux: "UI/UX",
  graphics: "Graphics",
};

// Placeholder cover when image is missing
function PlaceholderCover({ category, title }) {
  const emojis = { web: "🌐", uiux: "✏️", graphics: "🎨" };
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "var(--dark-3)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: "10px",
      backgroundImage: "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }}>
      <span style={{ fontSize: "clamp(28px,5vw,40px)" }}>{emojis[category]}</span>
      <span style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "1px", textAlign: "center", padding: "0 8px" }}>{title}</span>
    </div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null); // { project, imageIndex }

  const filtered = activeFilter === "all" ? projects : projects.filter(p => p.category === activeFilter);

  const openLightbox = (project, index = 0) => setLightbox({ project, imageIndex: index });
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox(lb => ({ ...lb, imageIndex: (lb.imageIndex - 1 + lb.project.images.length) % lb.project.images.length }));
  const nextImage = () => setLightbox(lb => ({ ...lb, imageIndex: (lb.imageIndex + 1) % lb.project.images.length }));

  // Close on background click
  const handleBackdropClick = e => { if (e.target === e.currentTarget) closeLightbox(); };

  // Keyboard navigation
  const handleKeyDown = e => {
    if (!lightbox) return;
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex={-1} style={{ outline: "none", minHeight: "100vh", background: "var(--dark)", paddingTop: "90px" }}>

      {/* ── HEADER ── */}
      <div className="container" style={{ paddingTop: "clamp(32px,6vw,60px)", paddingBottom: "clamp(24px,4vw,40px)" }}>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--text-dim)", textDecoration: "none", fontSize: "13px", marginBottom: "32px", transition: "color 0.3s" }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--cyan)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--text-dim)"}
        >← Back to Portfolio</a>

        <span className="section-tag">My Work</span>
        <h1 style={{ fontSize: "clamp(2rem,6vw,4rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: "14px" }}>
          Project <span style={{ color: "var(--cyan)", textShadow: "0 0 30px rgba(0,229,255,0.3)" }}>Gallery</span>
        </h1>
        <p style={{ color: "var(--text-dim)", fontSize: "clamp(13px,2vw,16px)", maxWidth: "500px", fontWeight: 300, lineHeight: 1.7 }}>
          A visual showcase of my work across web development, UI/UX design, and graphics.
        </p>
      </div>

      {/* ── FILTER TABS ── */}
      <div className="container" style={{ marginBottom: "clamp(32px,5vw,56px)" }}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {filters.map(f => (
            <button key={f.key} onClick={() => setActiveFilter(f.key)}
              style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700,
                fontSize: "clamp(11px,2vw,13px)", letterSpacing: "1.5px",
                padding: "10px clamp(16px,3vw,24px)",
                background: activeFilter === f.key ? "var(--cyan)" : "transparent",
                color: activeFilter === f.key ? "var(--dark)" : "var(--text-dim)",
                border: activeFilter === f.key ? "1px solid var(--cyan)" : "1px solid rgba(0,229,255,0.15)",
                cursor: "pointer", transition: "all 0.3s ease",
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
              onMouseEnter={e => { if (activeFilter !== f.key) { e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.color = "var(--cyan)"; } }}
              onMouseLeave={e => { if (activeFilter !== f.key) { e.currentTarget.style.borderColor = "rgba(0,229,255,0.15)"; e.currentTarget.style.color = "var(--text-dim)"; } }}
            >
              {f.label}
              <span style={{ marginLeft: "8px", fontSize: "10px", opacity: 0.7 }}>
                ({f.key === "all" ? projects.length : projects.filter(p => p.category === f.key).length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── PROJECT GRID ── */}
      <div className="container" style={{ paddingBottom: "clamp(60px,10vw,100px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,300px),1fr))", gap: "clamp(14px,3vw,24px)" }}>
          {filtered.map((project, i) => (
            <div key={project.id} className="card glow-box"
              style={{ cursor: "pointer", overflow: "hidden", animation: `fadeInUp 0.5s ease ${i * 0.05}s both` }}
              onClick={() => openLightbox(project, 0)}
            >
              {/* Cover Image */}
              <div style={{ height: "clamp(180px,25vw,240px)", position: "relative", overflow: "hidden" }}>
                <img src={project.cover} alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                />
                <div style={{ display: "none", width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}>
                  <PlaceholderCover category={project.category} title={project.title} />
                </div>

                {/* Hover overlay */}
                <div className="gallery-overlay" style={{
                  position: "absolute", inset: 0,
                  background: "rgba(0,229,255,0.08)",
                  backdropFilter: "blur(2px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  opacity: 0, transition: "opacity 0.3s ease",
                }}>
                  <div style={{
                    background: "rgba(5,10,14,0.9)", border: "1px solid var(--cyan)",
                    padding: "10px 20px", fontFamily: "'Syne'", fontWeight: 700,
                    fontSize: "12px", color: "var(--cyan)", letterSpacing: "1px",
                  }}>
                    VIEW PROJECT ↗
                  </div>
                </div>

                {/* Category badge */}
                <div style={{
                  position: "absolute", top: "12px", right: "12px",
                  background: "rgba(5,10,14,0.85)", backdropFilter: "blur(10px)",
                  border: `1px solid ${categoryColors[project.category]}`,
                  padding: "3px 10px", fontSize: "9px",
                  color: categoryColors[project.category],
                  fontFamily: "'Syne'", fontWeight: 700, letterSpacing: "1.5px",
                }}>
                  {categoryLabels[project.category].toUpperCase()}
                </div>

                {/* Image count badge */}
                <div style={{
                  position: "absolute", bottom: "12px", right: "12px",
                  background: "rgba(5,10,14,0.85)", backdropFilter: "blur(10px)",
                  padding: "3px 10px", fontSize: "10px", color: "var(--text-dim)",
                  fontFamily: "'DM Sans'",
                }}>
                  📷 {project.images.length}
                </div>
              </div>

              {/* Card content */}
              <div style={{ padding: "clamp(16px,3vw,22px)" }}>
                <h3 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: "clamp(14px,2vw,17px)", color: "#fff", marginBottom: "8px" }}>
                  {project.title}
                </h3>

                {project.description && (
                  <p style={{ color: "var(--text-dim)", fontSize: "clamp(11px,1.8vw,13px)", lineHeight: 1.6, marginBottom: "12px", fontWeight: 300,
                    display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                  }}>
                    {project.description}
                  </p>
                )}

                {project.tags.length > 0 && (
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{ fontSize: "10px", color: "var(--text-dim)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", padding: "2px 8px" }}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div onClick={handleBackdropClick} style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(5,10,14,0.97)", backdropFilter: "blur(10px)",
          display: "flex", flexDirection: "column",
          animation: "fadeIn 0.2s ease",
        }}>

          {/* Top bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(12px,3vw,20px) clamp(16px,4vw,32px)", borderBottom: "1px solid rgba(0,229,255,0.08)", flexShrink: 0 }}>
            <div>
              <div style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: "clamp(14px,2.5vw,18px)", color: "#fff" }}>{lightbox.project.title}</div>
              <div style={{ fontSize: "11px", color: "var(--cyan)", marginTop: "2px" }}>
                {lightbox.imageIndex + 1} / {lightbox.project.images.length}
              </div>
            </div>
            <button onClick={closeLightbox} style={{ background: "none", border: "1px solid rgba(0,229,255,0.2)", color: "var(--text-dim)", fontSize: "18px", cursor: "pointer", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.color = "var(--cyan)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,229,255,0.2)"; e.currentTarget.style.color = "var(--text-dim)"; }}
            >✕</button>
          </div>

          {/* Main image area */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", padding: "clamp(12px,3vw,24px)", minHeight: 0 }}>

            {/* Prev button */}
            {lightbox.project.images.length > 1 && (
              <button onClick={prevImage} style={{
                position: "absolute", left: "clamp(8px,2vw,20px)", zIndex: 1,
                background: "rgba(5,10,14,0.8)", border: "1px solid rgba(0,229,255,0.2)",
                color: "var(--cyan)", fontSize: "clamp(16px,3vw,22px)", cursor: "pointer",
                width: "clamp(36px,5vw,48px)", height: "clamp(36px,5vw,48px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--cyan)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(0,229,255,0.2)"}
              >‹</button>
            )}

            {/* Image */}
            <img
              key={lightbox.imageIndex}
              src={lightbox.project.images[lightbox.imageIndex]}
              alt={`${lightbox.project.title} ${lightbox.imageIndex + 1}`}
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", animation: "fadeIn 0.2s ease", borderRadius: "2px" }}
              onError={e => { e.target.src = ""; e.target.alt = "Image not found"; }}
            />

            {/* Next button */}
            {lightbox.project.images.length > 1 && (
              <button onClick={nextImage} style={{
                position: "absolute", right: "clamp(8px,2vw,20px)", zIndex: 1,
                background: "rgba(5,10,14,0.8)", border: "1px solid rgba(0,229,255,0.2)",
                color: "var(--cyan)", fontSize: "clamp(16px,3vw,22px)", cursor: "pointer",
                width: "clamp(36px,5vw,48px)", height: "clamp(36px,5vw,48px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--cyan)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(0,229,255,0.2)"}
              >›</button>
            )}
          </div>

          {/* Thumbnail strip */}
          {lightbox.project.images.length > 1 && (
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", padding: "clamp(10px,2vw,16px) clamp(16px,4vw,32px)", borderTop: "1px solid rgba(0,229,255,0.06)", overflowX: "auto", flexShrink: 0 }}>
              {lightbox.project.images.map((img, i) => (
                <div key={i} onClick={() => setLightbox(lb => ({ ...lb, imageIndex: i }))}
                  style={{
                    width: "clamp(44px,8vw,64px)", height: "clamp(32px,6vw,48px)",
                    flexShrink: 0, overflow: "hidden", cursor: "pointer",
                    border: i === lightbox.imageIndex ? "2px solid var(--cyan)" : "2px solid transparent",
                    opacity: i === lightbox.imageIndex ? 1 : 0.5,
                    transition: "all 0.2s",
                  }}
                >
                  <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          )}

          {/* Project info */}
          <div style={{ padding: "clamp(12px,2vw,16px) clamp(16px,4vw,32px)", borderTop: "1px solid rgba(0,229,255,0.06)", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", flexShrink: 0 }}>
            {lightbox.project.description && (
              <p style={{ color: "var(--text-dim)", fontSize: "clamp(11px,1.8vw,13px)", flex: 1, fontWeight: 300, lineHeight: 1.6 }}>
                {lightbox.project.description}
              </p>
            )}
            {lightbox.project.tags.length > 0 && (
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {lightbox.project.tags.map(tag => (
                  <span key={tag} style={{ fontSize: "10px", color: "var(--cyan)", background: "rgba(0,229,255,0.06)", border: "1px solid rgba(0,229,255,0.15)", padding: "3px 10px" }}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .gallery-overlay { opacity: 0 !important; }
        .card:hover .gallery-overlay { opacity: 1 !important; }
        .card:hover img { transform: scale(1.05); }
      `}</style>
    </div>
  );
}
