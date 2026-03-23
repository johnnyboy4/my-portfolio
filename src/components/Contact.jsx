import { useState, useRef } from "react";
import { Mail, MapPin, GitBranch } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_h3pnzvb";
const EMAILJS_TEMPLATE_ID = "template_i0v0dwx";
const EMAILJS_PUBLIC_KEY = "zVp1kvIexUdewSy99";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setStatus("sending");
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(0,229,255,0.1)", color: "var(--text)",
    fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(12px,2vw,14px)",
    padding: "clamp(10px,2vw,14px) clamp(12px,2vw,18px)", outline: "none",
    transition: "border-color 0.3s ease",
  };

  const contactItems = [
  { icon: () => <Mail size={20} color="var(--cyan)" />, label: "Email", value: "issumajohn0@gmail.com", href: "mailto:issumajohn0@gmail.com" },
  { icon: () => <MapPin size={20} color="var(--cyan)" />, label: "Location", value: "Lagos, Nigeria", href: null },
  { icon: () => <FaLinkedin size={20} color="var(--cyan)" />, label: "LinkedIn", value: "linkedin.com/in/johnnybravoDev", href: "https://linkedin.com/in/johnnybravoDev" },
  { icon: () => <GitBranch size={20} color="var(--cyan)" />, label: "GitHub", value: "github.com/johnnyboy4", href: "https://github.com/johnnyboy4" },
  { icon: () => <FaWhatsapp size={20} color="var(--cyan)" />, label: "WhatsApp", value: "+234 814 930 2272", href: "https://wa.me/2348149302272" },
];

  return (
    <section id="contact" className="section" style={{ background: "var(--dark)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,280px),1fr))", gap: "clamp(32px,6vw,80px)", alignItems: "start" }}>

          {/* Info */}
          <div>
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let's build<br /><span style={{ color: "var(--cyan)" }}>something great</span></h2>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontWeight: 300, marginBottom: "clamp(28px,5vw,48px)", fontSize: "clamp(13px,2vw,15px)" }}>
              I'm currently open to new opportunities. Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open!
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px,3vw,20px)" }}>
              {contactItems.map(item => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{
                    width: "clamp(38px,6vw,48px)", height: "clamp(38px,6vw,48px)", flexShrink: 0,
                    background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}>
                    <item.icon />
                  </div>
                  <div>
                    <div style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "1px", marginBottom: "2px" }}>
                      {item.label.toUpperCase()}
                    </div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer"
                        style={{ fontSize: "clamp(11px,2vw,14px)", color: "var(--text)", textDecoration: "none", transition: "color 0.3s" }}
                        onMouseEnter={e => e.target.style.color = "var(--cyan)"}
                        onMouseLeave={e => e.target.style.color = "var(--text)"}
                      >{item.value}</a>
                    ) : (
                      <span style={{ fontSize: "clamp(11px,2vw,14px)", color: "var(--text)" }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="card" style={{ padding: "clamp(20px,4vw,40px)" }}>

            {status === "sent" && (
              <div style={{ textAlign: "center", padding: "clamp(30px,6vw,60px) 0" }}>
                <div style={{ fontSize: "clamp(40px,8vw,60px)", marginBottom: "16px" }}>✅</div>
                <h3 style={{ fontFamily: "'Syne'", color: "#fff", fontSize: "clamp(16px,3vw,22px)", marginBottom: "8px" }}>Message Sent!</h3>
                <p style={{ color: "var(--text-dim)", fontSize: "clamp(12px,2vw,14px)" }}>Thanks for reaching out! I'll get back to you as soon as possible.</p>
              </div>
            )}

            {status === "error" && (
              <div style={{ textAlign: "center", padding: "clamp(30px,6vw,60px) 0" }}>
                <div style={{ fontSize: "clamp(40px,8vw,60px)", marginBottom: "16px" }}>❌</div>
                <h3 style={{ fontFamily: "'Syne'", color: "#fff", fontSize: "clamp(16px,3vw,22px)", marginBottom: "8px" }}>Something went wrong!</h3>
                <p style={{ color: "var(--text-dim)", fontSize: "clamp(12px,2vw,14px)" }}>Please try again or email me directly at issumajohn0@gmail.com</p>
              </div>
            )}

            {(status === "idle" || status === "sending") && (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "clamp(14px,3vw,20px)" }}>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,180px),1fr))", gap: "clamp(12px,2vw,16px)" }}>
                  <div>
                    <label style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "1px", display: "block", marginBottom: "7px" }}>NAME</label>
                    <input name="from_name" type="text" value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your Name" required style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                      onBlur={e => e.target.style.borderColor = "rgba(0,229,255,0.1)"} />
                  </div>
                  <div>
                    <label style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "1px", display: "block", marginBottom: "7px" }}>EMAIL</label>
                    <input name="from_email" type="email" value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com" required style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                      onBlur={e => e.target.style.borderColor = "rgba(0,229,255,0.1)"} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "1px", display: "block", marginBottom: "7px" }}>SUBJECT</label>
                  <input name="subject" value={form.subject} onChange={handleChange}
                    placeholder="What's this about?" required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                    onBlur={e => e.target.style.borderColor = "rgba(0,229,255,0.1)"} />
                </div>

                <div>
                  <label style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "1px", display: "block", marginBottom: "7px" }}>MESSAGE</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project..." required rows={5}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "clamp(100px,15vw,140px)" }}
                    onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                    onBlur={e => e.target.style.borderColor = "rgba(0,229,255,0.1)"} />
                </div>

                <button type="submit" disabled={status === "sending"} className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", opacity: status === "sending" ? 0.7 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}>
                  {status === "sending" ? "Sending..." : "Send Message →"}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}