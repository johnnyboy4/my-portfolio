const testimonials = [
  {
  name: "Mr Valentine",
  role: "CEO, Decipher Academy",
  text: "Working with Mr. John over the past three years has been a truly rewarding experience. When we were just starting out, he played a key role in helping us develop our educational products, particularly the interactive games that are now an essential part of our learning system. He has an exceptional ability to translate ideas into functional product features, bringing concepts to life with precision and creativity. His attention to detail, technical skill, and commitment to quality have consistently stood out. I highly recommend his services to anyone looking for a professional who is deeply invested in delivering excellent results.",
  avatar: "V",
  rating: 5,
  },
  
  {
    name: "Adaeze Nwosu",
    role: "Product Manager, Joitech.",
    text: "Working with JohnnyBravo was a game changer. He not only built a robust backend system but also redesigned our UI, resulting in a 40% improvement in user engagement. Exceptional talent!",
    avatar: "A",
    rating: 5,
  },
  {
    name: "David Mensah",
    role: "Founder, E-Commerce Brand",
    text: "JohnnyBravo built our entire e-commerce platform from scratch. Fast, responsive, and exactly what we needed. He communicated clearly throughout and delivered ahead of schedule.",
    avatar: "D",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background: "var(--dark)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,70px)" }}>
          <span className="section-tag" style={{ paddingLeft: 0, paddingRight: "36px" }}>
            Testimonials
            <span style={{ position: "absolute", right: 0, top: "50%", width: "24px", height: "1px", background: "var(--cyan)" }} />
          </span>
          <h2 className="section-title">What Clients Say</h2>
          <p style={{ color: "var(--text-dim)", maxWidth: "500px", margin: "0 auto", fontWeight: 300, fontSize: "clamp(13px,2vw,15px)" }}>
            Don't take my word for it — here's what people I've worked with have to say.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,260px),1fr))", gap: "clamp(14px,3vw,24px)" }}>
          {testimonials.map(t => (
            <div key={t.name} className="card glow-box" style={{ padding: "clamp(20px,3vw,36px)", position: "relative" }}>

              {/* Big quote mark */}
              <div style={{ fontSize: "clamp(48px,8vw,80px)", color: "var(--cyan)", opacity: 0.08, fontFamily: "Georgia", lineHeight: 1, position: "absolute", top: "12px", right: "16px" }}>"</div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                {Array(t.rating).fill(null).map((_, j) => (
                  <span key={j} style={{ color: "var(--cyan)", fontSize: "13px" }}>★</span>
                ))}
              </div>

              {/* Quote text */}
              <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: "clamp(12px,1.8vw,14px)", marginBottom: "20px", fontWeight: 300, fontStyle: "italic" }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid rgba(0,229,255,0.06)", paddingTop: "16px" }}>
                <div style={{
                  width: "40px", height: "40px", flexShrink: 0,
                  background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Syne'", fontWeight: 800, color: "var(--cyan)", fontSize: "16px",
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: "clamp(13px,2vw,15px)", color: "#fff" }}>{t.name}</div>
                  <div style={{ fontSize: "clamp(10px,1.5vw,12px)", color: "var(--text-dim)" }}>{t.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}