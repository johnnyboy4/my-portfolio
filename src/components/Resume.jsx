export default function Resume() {
  const handlePrint = () => window.print();

  return (
    <>
      {/* Print styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .resume-wrapper { box-shadow: none !important; }
          .resume-sidebar { background: #0a1520 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .resume-main { background: white !important; }
          .skill-bar-fill { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }

        .resume-wrapper {
          font-family: 'DM Sans', sans-serif;
          display: flex;
          max-width: 900px;
          min-height: 100vh;
          margin: 0 auto;
          box-shadow: 0 0 60px rgba(0,229,255,0.1);
        }

        .resume-sidebar {
          width: 260px;
          flex-shrink: 0;
          background: #0a1520;
          padding: 36px 24px;
          border-right: 1px solid rgba(0,229,255,0.1);
        }

        .resume-main {
          flex: 1;
          background: #050a0e;
          padding: 40px 36px;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          color: #00e5ff;
          text-transform: uppercase;
          margin-bottom: 14px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(0,229,255,0.12);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-title::before {
          content: '';
          width: 3px;
          height: 14px;
          background: #00e5ff;
          display: inline-block;
          flex-shrink: 0;
        }

        .exp-card {
          background: rgba(0,229,255,0.02);
          border: 1px solid rgba(0,229,255,0.07);
          border-left: 2px solid #00e5ff;
          padding: 14px 16px;
          margin-bottom: 14px;
        }

        .exp-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: #fff;
          margin-bottom: 3px;
        }

        .exp-company {
          font-size: 11px;
          color: #00e5ff;
          margin-bottom: 10px;
        }

        .exp-bullet {
          display: flex;
          gap: 8px;
          margin-bottom: 5px;
          align-items: flex-start;
        }

        .exp-bullet::before {
          content: '▸';
          color: #00b8cc;
          font-size: 9px;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .exp-bullet span {
          font-size: 11.5px;
          color: #8aa8b8;
          line-height: 1.6;
        }

        .edu-card {
          background: rgba(0,229,255,0.02);
          border: 1px solid rgba(0,229,255,0.07);
          padding: 12px 14px;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-row {
          margin-bottom: 12px;
        }

        .skill-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        }

        .skill-bar-bg {
          height: 3px;
          background: rgba(255,255,255,0.05);
          border-radius: 2px;
        }

        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #00b8cc, #00e5ff);
          border-radius: 2px;
          box-shadow: 0 0 6px rgba(0,229,255,0.4);
        }

        .tag {
          display: inline-block;
          font-size: 9.5px;
          color: #6a8fa5;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 3px 8px;
          margin: 3px 3px 3px 0;
        }

        .strength-item {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 7px;
          font-size: 11.5px;
          color: #8aa8b8;
        }

        .strength-item::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00e5ff;
          flex-shrink: 0;
        }
      `}</style>

      {/* Page wrapper */}
      <div style={{ background: "#050a0e", minHeight: "100vh", padding: "40px 20px" }}>

        {/* Print / Download button */}
        <div className="no-print" style={{ maxWidth: "900px", margin: "0 auto 20px", display: "flex", justifyContent: "flex-end", gap: "12px" }}>
          <a href="/" style={{
            fontFamily: "'Syne', sans-serif", fontSize: "13px", fontWeight: 700,
            color: "#6a8fa5", textDecoration: "none", padding: "10px 20px",
            border: "1px solid rgba(255,255,255,0.06)",
          }}>← Back to Portfolio</a>
          <button onClick={handlePrint} style={{
            fontFamily: "'Syne', sans-serif", fontSize: "13px", fontWeight: 700,
            background: "#00e5ff", color: "#050a0e", border: "none",
            padding: "10px 24px", cursor: "pointer",
            clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
          }}>
            Download PDF ↓
          </button>
        </div>

        <div className="resume-wrapper">

          {/* ── SIDEBAR ── */}
          <div className="resume-sidebar">

            {/* Avatar */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <div style={{
                width: "80px", height: "80px", borderRadius: "50%",
                background: "#050a0e", border: "2px solid #00e5ff",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 14px",
                fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "24px", color: "#00e5ff",
              }}>JB</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "18px", color: "#fff", lineHeight: 1.1 }}>JohnnyBravo</div>
              <div style={{ fontSize: "10px", color: "#6a8fa5", letterSpacing: "1px", margin: "4px 0 10px" }}>Issume John Onyekachukwu</div>
              <div style={{
                background: "rgba(0,229,255,0.06)", border: "1px solid rgba(0,229,255,0.15)",
                padding: "5px 10px", fontSize: "9px", color: "#00e5ff",
                letterSpacing: "1.5px", fontFamily: "'Syne', sans-serif", fontWeight: 700,
              }}>FULLSTACK DEV · UI/UX</div>
            </div>

            {/* Contact */}
            <div style={{ marginBottom: "22px" }}>
              <div className="section-title">Contact</div>
              {[
                { icon: "📧", value: "issumajohn0@gmail.com" },
                { icon: "📞", value: "+234 814 930 2272" },
                { icon: "📍", value: "Lagos, Nigeria" },
              ].map(item => (
                <div key={item.value} style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "9px" }}>
                  <span style={{ fontSize: "11px" }}>{item.icon}</span>
                  <span style={{ fontSize: "11px", color: "#8aa8b8", lineHeight: 1.4 }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Tech Skills */}
            <div style={{ marginBottom: "22px" }}>
              <div className="section-title">Tech Skills</div>
              {[
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 92 },
                { name: "JavaScript", level: 88 },
                { name: "PHP", level: 88 },
                { name: "Python", level: 85 },
                { name: "React.js", level: 82 },
                { name: "Node.js", level: 80 },
                { name: "MySQL / MongoDB", level: 78 },
              ].map(skill => (
                <div key={skill.name} className="skill-row">
                  <div className="skill-label">
                    <span style={{ fontSize: "11px", color: "#c8dde8" }}>{skill.name}</span>
                    <span style={{ fontSize: "10px", color: "#00e5ff" }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div style={{ marginBottom: "22px" }}>
              <div className="section-title">Tools</div>
              {["Git & GitHub", "VS Code", "Figma", "Netlify", "MS Office Suite", "MySQL Workbench"].map(tool => (
                <span key={tool} className="tag">{tool}</span>
              ))}
            </div>

            {/* Languages */}
            <div style={{ marginBottom: "22px" }}>
              <div className="section-title">Languages</div>
              <div style={{ fontSize: "11.5px", color: "#8aa8b8" }}>English <span style={{ color: "#00e5ff", fontSize: "10px" }}>(Fluent)</span></div>
            </div>

            {/* Strengths */}
            <div>
              <div className="section-title">Strengths</div>
              {["Analytical Thinking", "Attention to Detail", "Team Collaboration", "Problem Solving", "Adaptability", "Leadership"].map(s => (
                <div key={s} className="strength-item">{s}</div>
              ))}
            </div>
          </div>

          {/* ── MAIN CONTENT ── */}
          <div className="resume-main">

            {/* Summary */}
            <div style={{ marginBottom: "28px" }}>
              <div className="section-title">Professional Summary</div>
              <p style={{ fontSize: "12px", color: "#8aa8b8", lineHeight: 1.8, fontWeight: 300 }}>
                Fullstack Web Developer and UI/UX Designer with <strong style={{ color: "#c8dde8" }}>4+ years of experience</strong> building 
                real-world digital products from concept to deployment. Computer Science graduate with 
                hands-on expertise in both frontend and backend technologies, client management, and 
                end-to-end project delivery. Passionate about creating clean, performant, and user-friendly 
                applications that solve real problems.
              </p>
            </div>

            {/* Experience */}
            <div style={{ marginBottom: "28px" }}>
              <div className="section-title">Experience</div>

              <div className="exp-card">
                <div className="exp-title">Fullstack Web Developer & UI/UX Designer</div>
                <div className="exp-company">Freelance · Remote</div>
                <div className="exp-bullet"><span>Built ShubzLuxuryHub — a full e-commerce platform with storefront, admin dashboard, WhatsApp order notifications, dynamic pricing, and stock management.</span></div>
                <div className="exp-bullet"><span>Developed TutorConnect, a student-tutor matching platform enabling subject-based tutor discovery and student login.</span></div>
                <div className="exp-bullet"><span>Created an educational games platform to make learning interactive and engaging for students.</span></div>
                <div className="exp-bullet"><span>Delivered end-to-end projects for SMBs, managing planning, development, client handover, and documentation.</span></div>
                <div className="exp-bullet"><span>Maintained high client satisfaction through consistent communication and on-time delivery.</span></div>
              </div>

              <div className="exp-card">
                <div className="exp-title">Teacher & Administrative Coordinator</div>
                <div className="exp-company">Community Secondary School, Ihe, Enugu State</div>
                <div className="exp-bullet"><span>Taught Computer Science to secondary school students, improving digital literacy and academic outcomes.</span></div>
                <div className="exp-bullet"><span>Supported day-to-day administrative operations including scheduling, record keeping, and staff coordination.</span></div>
                <div className="exp-bullet"><span>Organized extracurricular activities including technology workshops and debate sessions.</span></div>
              </div>

              <div className="exp-card">
                <div className="exp-title">Industrial Trainee (SIWES)</div>
                <div className="exp-company">Promasidor Nigeria Limited, Lagos</div>
                <div className="exp-bullet"><span>Resolved hardware, software, and network issues across departments, reducing system downtime.</span></div>
                <div className="exp-bullet"><span>Assisted with system updates and IT maintenance under senior IT staff supervision.</span></div>
              </div>

              <div className="exp-card">
                <div className="exp-title">Web Development Intern</div>
                <div className="exp-company">Edmoss Global Ventures, Lagos</div>
                <div className="exp-bullet"><span>Contributed to website creation and visual branding projects during a structured internship.</span></div>
                <div className="exp-bullet"><span>Developed foundational skills in project delivery, design standards, and client requirements.</span></div>
              </div>
            </div>

            {/* Education */}
            <div style={{ marginBottom: "28px" }}>
              <div className="section-title">Education</div>

              <div className="edu-card">
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "13px", color: "#fff", marginBottom: "3px" }}>B.Sc. Computer Science</div>
                  <div style={{ fontSize: "11px", color: "#00e5ff" }}>Hill-City University, Benin</div>
                </div>
                <div style={{ fontSize: "10px", color: "#6a8fa5", background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.1)", padding: "4px 10px" }}>B.Sc.</div>
              </div>

              <div className="edu-card">
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "13px", color: "#fff", marginBottom: "3px" }}>OND Computer Science</div>
                  <div style={{ fontSize: "11px", color: "#00e5ff" }}>Lagos State Polytechnic</div>
                </div>
                <div style={{ fontSize: "10px", color: "#6a8fa5", background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.1)", padding: "4px 10px" }}>OND</div>
              </div>
            </div>

            {/* Corporate Skills */}
            <div>
              <div className="section-title">Corporate & Business Skills</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {["Project Coordination", "Documentation & Reporting", "Data Management", "Administrative Operations", "Stakeholder Communication", "Client Management", "Digital Process Management"].map(skill => (
                  <span key={skill} style={{
                    fontSize: "10.5px", color: "#8aa8b8",
                    background: "rgba(0,229,255,0.04)", border: "1px solid rgba(0,229,255,0.1)",
                    padding: "5px 12px",
                  }}>{skill}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}