export default function PageHero({ tag, title, desc, children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-row reveal">
        <div className="page-hero-text">
          {tag && <span className="section-tag">{tag}</span>}
          <h1>{title}</h1>
          {desc && <p className="page-hero-desc">{desc}</p>}
        </div>
        {children && <div className="page-hero-action">{children}</div>}
      </div>
    </section>
  )
}
