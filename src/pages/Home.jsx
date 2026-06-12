import BodyZonePickerLibrary from '../components/BodyZonePickerLibrary'
import {
  PHONE,
  PHONE_DISPLAY,
  ADDRESS,
  LOGO,
  quickActions,
} from '../data/site'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content reveal">
            <div className="badge">
              <span className="pulse" />
              Dej · Est. 2007
            </div>
            <h1>
              Kineto<span className="gradient-text">Mobility</span>
            </h1>
            <p className="hero-slogan">Mai multă mobilitate, mai multă libertate</p>
            <p className="hero-desc">
              Cu experiență din 2007 și cu multă pasiune, tratăm: afecțiuni
              musculoscheletale, entorse, luxații, întinderi, contracturi și
              rupturi musculare, traumatisme pre și postoperator și
              posttraumatic, probleme ale coloanei vertebrale.
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

      <BodyZonePickerLibrary />
    </>
  )
}
