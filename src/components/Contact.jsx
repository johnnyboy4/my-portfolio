import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., EmailJS or Formspree)
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(0,229,255,0.1)",
    color: "var(--text)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    padding: "14px 18px",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--dark)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "80px", alignItems: "start" }}>
          
          {/* Left info */}
          <div>
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">
              Let's build<br />
              <span style={{ color: "var(--cyan)" }}>something great</span>
            </h2>

            <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontWeight: 300, marginBottom: "48px" }}>
              I'm currently open to new opportunities. Whether you have a project in mind, 
              want to collaborate, or just want to say hi — my inbox is always open!
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { icon: "📧", label: "Email", value: "issumeohn@gmail.com", href: "mailto:issumeohn@gmail.com" },
                { icon: "📍", label: "Location", value: "Nigeria", href: null },
                { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/issumejohn", href: "https://linkedin.com" },
                { icon: "🐙", label: "GitHub", value: "github.com/issumejohn", href: "https://github.com" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{
                    width: "48px", height: "48px", flexShrink: 0,
                    background: "rgba(0,229,255,0.05)",
                    border: "1px solid rgba(0,229,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "20px",
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "1px", marginBottom: "2px" }}>{item.label.toUpperCase()}</div>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: "14px", color: "var(--text)", textDecoration: "none" }}
                        onMouseEnter={e => e.target.style.color = "var(--cyan)"}
                        onMouseLeave={e => e.target.style.color = "var(--text)"}
                      >{item.value}</a>
                    ) : (
                      <span style={{ fontSize: "14px", color: "var(--text)" }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="card" style={{ padding: "40px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <div style={{ fontSize: "60px", marginBottom: "20px" }}>✅</div>
                <h3 style={{ fontFamily: "'Syne'", color: "#fff", fontSize: "22px", marginBottom: "10px" }}>Message Sent!</h3>
                <p style={{ color: "var(--text-dim)" }}>Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>NAME</label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      placeholder="Your Name" required
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                      onBlur={e => e.target.style.borderColor = "rgba(0,229,255,0.1)"}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>EMAIL</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com" required
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                      onBlur={e => e.target.style.borderColor = "rgba(0,229,255,0.1)"}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>SUBJECT</label>
                  <input
                    name="subject" value={form.subject} onChange={handleChange}
                    placeholder="What's this about?" required
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                    onBlur={e => e.target.style.borderColor = "rgba(0,229,255,0.1)"}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>MESSAGE</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project..." required rows={6}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
                    onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                    onBlur={e => e.target.style.borderColor = "rgba(0,229,255,0.1)"}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
