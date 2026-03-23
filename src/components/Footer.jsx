export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background:"var(--dark-2)", borderTop:"1px solid rgba(0,229,255,0.06)", padding:"clamp(32px,6vw,48px) 0" }}>
      <div className="container">
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%,200px),1fr))", gap:"clamp(24px,4vw,32px)", alignItems:"center", marginBottom:"clamp(24px,4vw,36px)" }}>

          <div>
            <div style={{ fontFamily:"'Syne'", fontWeight:800, fontSize:"clamp(18px,3vw,22px)", color:"#fff", marginBottom:"6px" }}>
              JB<span style={{ color:"var(--cyan)" }}>.</span>
            </div>
            <p style={{ fontSize:"clamp(11px,2vw,13px)", color:"var(--text-dim)" }}>Fullstack Developer & UI/UX Designer</p>
          </div>

          
         
        </div>

        <div style={{ paddingTop:"clamp(16px,3vw,24px)", borderTop:"1px solid rgba(0,229,255,0.05)", textAlign:"center" }}>
          <p style={{ fontSize:"clamp(10px,1.8vw,12px)", color:"var(--text-dim)" }}>
            © {year} JohnnyBravo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}