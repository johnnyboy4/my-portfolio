const posts = [
  { title:"Building Scalable REST APIs with Node.js and Express", excerpt:"A deep dive into designing production-ready REST APIs with best practices for security, performance, and maintainability.", date:"Feb 20, 2026", readTime:"8 min read", tag:"Backend", emoji:"⚙️" },
  { title:"The Power of React Hooks: A Practical Guide", excerpt:"Exploring useState, useEffect, useCallback and custom hooks to write cleaner, more efficient React components.", date:"Feb 10, 2026", readTime:"6 min read", tag:"React", emoji:"⚛️" },
  { title:"UI/UX Principles Every Developer Should Know", excerpt:"Breaking down core design principles that help developers create more user-friendly and visually appealing interfaces.", date:"Jan 28, 2026", readTime:"5 min read", tag:"Design", emoji:"🎨" },
];

export default function Blog() {
  return (
    <section id="blog" className="section" style={{ background:"var(--dark-2)" }}>
      <div className="container">
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"clamp(32px,5vw,60px)", flexWrap:"wrap", gap:"16px" }}>
          <div>
            <span className="section-tag">Thoughts & Articles</span>
            <h2 className="section-title">Latest from the Blog</h2>
          </div>
          <a href="#" className="btn-outline" style={{ fontSize:"13px" }}>All Posts →</a>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%,260px),1fr))", gap:"clamp(14px,3vw,24px)" }}>
          {posts.map(post => (
            <article key={post.title} className="card glow-box" style={{ padding:0, cursor:"pointer", display:"flex", flexDirection:"column" }}>
              <div style={{ padding:"clamp(20px,3vw,32px) clamp(18px,3vw,28px) clamp(16px,2vw,24px)", background:"linear-gradient(135deg, rgba(0,229,255,0.04), transparent)", borderBottom:"1px solid rgba(0,229,255,0.06)" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                  <span style={{ fontSize:"clamp(28px,5vw,36px)" }}>{post.emoji}</span>
                  <span style={{ fontSize:"9px", color:"var(--cyan)", letterSpacing:"2px", background:"rgba(0,229,255,0.06)", padding:"4px 10px", border:"1px solid rgba(0,229,255,0.1)" }}>{post.tag.toUpperCase()}</span>
                </div>
              </div>
              <div style={{ padding:"clamp(16px,3vw,24px) clamp(18px,3vw,28px) clamp(18px,3vw,28px)", flex:1, display:"flex", flexDirection:"column" }}>
                <h3 style={{ fontFamily:"'Syne'", fontWeight:700, fontSize:"clamp(13px,2vw,17px)", color:"#fff", lineHeight:1.4, marginBottom:"10px" }}>{post.title}</h3>
                <p style={{ color:"var(--text-dim)", fontSize:"clamp(11px,1.8vw,13px)", lineHeight:1.7, marginBottom:"20px", fontWeight:300, flex:1 }}>{post.excerpt}</p>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"8px" }}>
                  <div style={{ display:"flex", gap:"8px" }}>
                    <span style={{ fontSize:"10px", color:"var(--text-dim)" }}>{post.date}</span>
                    <span style={{ fontSize:"10px", color:"var(--text-dim)" }}>· {post.readTime}</span>
                  </div>
                  <span style={{ fontSize:"12px", color:"var(--cyan)", fontFamily:"'Syne'", fontWeight:700 }}>Read →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}