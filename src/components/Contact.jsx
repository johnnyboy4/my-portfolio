import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name:"", email:"", subject:"", message:"" });
  };

  const inputStyle = {
    width:"100%", background:"rgba(255,255,255,0.02)",
    border:"1px solid rgba(0,229,255,0.1)", color:"var(--text)",
    fontFamily:"'DM Sans', sans-serif", fontSize:"clamp(12px,2vw,14px)",
    padding:"clamp(10px,2vw,14px) clamp(12px,2vw,18px)", outline:"none",
    transition:"border-color 0.3s ease",
  };

  return (
    <section id="contact" className="section" style={{ background:"var(--dark)" }}>
      <div className="container">
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%,280px),1fr))", gap:"clamp(32px,6vw,80px)", alignItems:"start" }}>

          {/* Info */}
          <div>
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let's build<br /><span style={{ color:"var(--cyan)" }}>something great</span></h2>
            <p style={{ color:"var(--text-dim)", lineHeight:1.8, fontWeight:300, marginBottom:"clamp(28px,5vw,48px)", fontSize:"clamp(13px,2vw,15px)" }}>
              I'm currently open to new opportunities. Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open!
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:"clamp(14px,3vw,24px)" }}>
              {[
                { icon:"📧", label:"Email", value:"issumajohn0@gmail.com", href:"mailto:issumajohn0@gmail.com" },
                { icon:"📍", label:"Location", value:"Lagos, Nigeria", href:null },
                { icon:"💼", label:"LinkedIn", value:"linkedin.com/in/johnnybravoDev", href:"https://linkedin.com" },
                { icon:"🐙", label:"GitHub", value:"github.com/johnnyboy4", href:"https://github.com/johnnyboy4" },
              ].map(item => (
                <div key={item.label} style={{ display:"flex", alignItems:"center", gap:"14px" }}>
                  <div style={{ width:"clamp(38px,6vw,48px)", height:"clamp(38px,6vw,48px)", flexShrink:0, background:"rgba(0,229,255,0.05)", border:"1px solid rgba(0,229,255,0.1)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"clamp(16px,3vw,20px)" }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize:"10px", color:"var(--text-dim)", letterSpacing:"1px", marginBottom:"2px" }}>{item.label.toUpperCase()}</div>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize:"clamp(11px,2vw,14px)", color:"var(--text)", textDecoration:"none" }}
                        onMouseEnter={e=>e.target.style.color="var(--cyan)"} onMouseLeave={e=>e.target.style.color="var(--text)"}
                      >{item.value}</a>
                    ) : (
                      <span style={{ fontSize:"clamp(11px,2vw,14px)", color:"var(--text)" }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="card" style={{ padding:"clamp(20px,4vw,40px)" }}>
            {sent ? (
              <div style={{ textAlign:"center", padding:"clamp(30px,6vw,60px) 0" }}>
                <div style={{ fontSize:"clamp(40px,8vw,60px)", marginBottom:"16px" }}>✅</div>
                <h3 style={{ fontFamily:"'Syne'", color:"#fff", fontSize:"clamp(16px,3vw,22px)", marginBottom:"8px" }}>Message Sent!</h3>
                <p style={{ color:"var(--text-dim)", fontSize:"clamp(12px,2vw,14px)" }}>Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"clamp(14px,3vw,20px)" }}>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%,180px),1fr))", gap:"clamp(12px,2vw,16px)" }}>
                  {[{name:"name",placeholder:"Your Name"},{name:"email",placeholder:"your@email.com",type:"email"}].map(f => (
                    <div key={f.name}>
                      <label style={{ fontSize:"10px", color:"var(--text-dim)", letterSpacing:"1px", display:"block", marginBottom:"7px" }}>{f.name.toUpperCase()}</label>
                      <input name={f.name} type={f.type||"text"} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder} required style={inputStyle}
                        onFocus={e=>e.target.style.borderColor="var(--cyan)"} onBlur={e=>e.target.style.borderColor="rgba(0,229,255,0.1)"} />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ fontSize:"10px", color:"var(--text-dim)", letterSpacing:"1px", display:"block", marginBottom:"7px" }}>SUBJECT</label>
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required style={inputStyle}
                    onFocus={e=>e.target.style.borderColor="var(--cyan)"} onBlur={e=>e.target.style.borderColor="rgba(0,229,255,0.1)"} />
                </div>
                <div>
                  <label style={{ fontSize:"10px", color:"var(--text-dim)", letterSpacing:"1px", display:"block", marginBottom:"7px" }}>MESSAGE</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required rows={5}
                    style={{ ...inputStyle, resize:"vertical", minHeight:"clamp(100px,15vw,140px)" }}
                    onFocus={e=>e.target.style.borderColor="var(--cyan)"} onBlur={e=>e.target.style.borderColor="rgba(0,229,255,0.1)"} />
                </div>
                <button type="submit" className="btn-primary" style={{ width:"100%", justifyContent:"center" }}>Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}