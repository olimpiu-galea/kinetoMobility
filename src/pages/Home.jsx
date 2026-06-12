import { Link } from 'react-router-dom'
import BodyZonePicker from '../components/BodyZonePicker'
import {
  PHONE,
  PHONE_DISPLAY,
  ADDRESS,
  LOGO,
  quickActions,
} from '../data/site'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content reveal">
            <div className="badge">
              <span className="pulse" />
              Dej · Recuperare medicală
            </div>
            <h1>
              Recuperare
              <span className="gradient-text"> personalizată</span>
            </h1>
            <p className="hero-desc">
              Kinetoterapie 1:1, echipament modern, echipă dedicată.
            </p>
            <div className="hero-actions">
              <a href={`tel:+4${PHONE}`} className="btn btn-primary">
                {PHONE_DISPLAY}
              </a>
              <Link to="/servicii" className="btn btn-ghost">
                Servicii
              </Link>
            </div>
            <div className="hero-meta">
              <span><strong>Program</strong> L–V 09–17</span>
              <span className="meta-dot" />
              <span><strong>Locație</strong> {ADDRESS}</span>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-1">
            <div className="hero-logo-card">
              <img
                src={LOGO}
                alt="KinetoMobility"
                width={160}
                height={160}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="quick-actions">
            {quickActions.map((item, i) => {
              const className = `quick-card reveal reveal-delay-${i}`
              const inner = (
                <>
                  <span className="quick-icon">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </>
              )
              if (item.action.startsWith('/')) {
                return (
                  <Link key={item.title} to={item.action} className={className}>
                    {inner}
                  </Link>
                )
              }
              return (
                <a
                  key={item.title}
                  href={item.action}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={className}
                >
                  {inner}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <BodyZonePicker />

      <section className="section section-tight">
        <div className="container home-bottom-grid">
          <Link to="/servicii#kinetoterapie-prenatala" className="card home-tile reveal">
            <span className="section-tag">Specializat</span>
            <h3>Prenatal & Postnatal</h3>
            <p>Planșeu pelvin, diastază, postură post-partum.</p>
            <span className="tile-link">Vezi la servicii →</span>
          </Link>
          <Link to="/despre" className="card home-tile reveal reveal-delay-1">
            <span className="section-tag">Echipa</span>
            <h3>Terapeuți UMF Cluj</h3>
            <p>Specialiști dedicați recuperării tale.</p>
            <span className="tile-link">Cunoaște echipa →</span>
          </Link>
        </div>
      </section>
    </>
  )
}
