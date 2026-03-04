const testimonials = [
  {
    name: "Chukwuemeka Obi",
    role: "CEO, TechStartup Nigeria",
    text: "John delivered our web platform beyond expectations. His attention to detail, clean code, and ability to translate our vision into a stunning product was remarkable. Highly recommended!",
    avatar: "C",
    rating: 5,
  },
  {
    name: "Adaeze Nwosu",
    role: "Product Manager, FinTech Co.",
    text: "Working with John was a game changer. He not only built a robust backend system but also redesigned our UI, resulting in a 40% improvement in user engagement. Exceptional talent!",
    avatar: "A",
    rating: 5,
  },
  {
    name: "David Mensah",
    role: "Founder, E-Commerce Brand",
    text: "John built our entire e-commerce platform from scratch. Fast, responsive, and exactly what we needed. He communicated clearly throughout and delivered ahead of schedule.",
    avatar: "D",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background: "var(--dark)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span className="section-tag" style={{ paddingLeft: 0, paddingRight: "40px" }}>
            Testimonials
            <span style={{ position: "absolute", right: 0, top: "50%", width: "28px", height: "1px", background: "var(--cyan)" }} />
          </span>
          <h2 className="section-title">What Clients Say</h2>
          <p style={{ color: "var(--text-dim)", maxWidth: "500px", margin: "0 auto", fontWeight: 300 }}>
            Don't take my word for it — here's what people I've worked with have to say.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {testimonials.map((t, i) => (
            <div key={t.name} className="card glow-box" style={{ padding: "36px", position: "relative" }}>
              {/* Quote mark */}
              <div style={{
                fontSize: "80px", color: "var(--cyan)", opacity: 0.1,
                fontFamily: "Georgia", lineHeight: 1,
                position: "absolute", top: "20px", right: "24px",
              }}>"</div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                {Array(t.rating).fill(null).map((_, j) => (
                  <span key={j} style={{ color: "var(--cyan)", fontSize: "14px" }}>★</span>
                ))}
              </div>

              <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: "14px", marginBottom: "28px", fontWeight: 300, fontStyle: "italic" }}>
                "{t.text}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "14px", borderTop: "1px solid rgba(0,229,255,0.06)", paddingTop: "20px" }}>
                <div style={{
                  width: "44px", height: "44px",
                  background: `rgba(0,229,255,0.1)`,
                  border: "1px solid rgba(0,229,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Syne'", fontWeight: 800,
                  color: "var(--cyan)", fontSize: "18px",
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: "15px", color: "#fff" }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-dim)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
