import PageHero from '../components/PageHero'
import { team, LOGO } from '../data/site'

const values = [
  'Terapie 1:1',
  'Plan personalizat',
  'Echipament modern',
  'Toate vârstele',
  'Pre & post-partum',
  'Empatie & rezultate',
]

export default function Despre() {
  return (
    <>
      <PageHero
        tag="Despre"
        title="KinetoMobility Dej"
        desc="Cabinet de kinetoterapie · Est. 2007 · Dej"
      />

      <section className="section section-tight">
        <div className="container about-layout">
          <div className="about-story card reveal">
            <img
              src={LOGO}
              alt="Logo KinetoMobility"
              className="about-logo"
              width={96}
              height={96}
              loading="lazy"
              decoding="async"
            />
            <div>
              <p>
                Cabinet de recuperare medicală din Dej — kinetoterapie,
                fizioterapie, terapie manuală și aparatură performantă. Terapie
                individuală, plan clar pentru fiecare pacient.
              </p>
              <div className="values-inline">
                {values.map((v) => (
                  <span key={v} className="value-pill">{v}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="team-grid">
            {team.map((member, i) => (
              <article
                key={member.name}
                className={`card team-card reveal reveal-delay-${i}`}
              >
                <div className="team-avatar">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div className="team-body">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p>{member.bio}</p>
                  {member.phone && (
                    <a href={`tel:+4${member.phone}`} className="team-phone">
                      0764 719 609
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
