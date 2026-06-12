import PageHero from '../components/PageHero'
import { PHONE, PHONE_SIMARIA, allServices } from '../data/site'

export default function Servicii() {
  return (
    <>
      <PageHero
        tag="Servicii"
        title="Tratamente & terapii"
        desc="Kinetoterapie, fizioterapie și recuperare medicală — plan personalizat pentru fiecare pacient."
      >
        <a href={`tel:+4${PHONE}`} className="btn btn-primary btn-sm">
          Întreabă la telefon
        </a>
      </PageHero>

      <section className="section section-tight">
        <div className="container">
          <div className="services-grid">
            {allServices.map((s, i) => (
              <article
                key={s.slug}
                className={`card service-card ${s.program ? 'service-card-program' : ''} reveal reveal-delay-${i % 3}`}
                id={s.slug}
              >
                {s.image && (
                  <div className="service-card-image">
                    <img
                      src={s.image}
                      alt={s.title}
                      width={400}
                      height={300}
                      loading="lazy"
                      decoding="async"
                    />
                    {s.program && <span className="program-tag program-tag-overlay">{s.tag}</span>}
                  </div>
                )}
                <div className="service-card-body">
                {!s.image && s.program && <span className="program-tag">{s.tag}</span>}
                <h3>{s.title}</h3>
                <p className="service-summary">{s.summary}</p>
                {s.program && s.points ? (
                  <ul className="service-points">
                    {s.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="service-desc">{s.desc}</p>
                )}
                <span className="service-tag">{s.forWho}</span>
                {s.program && s.contact && (
                  <a href={`tel:+4${s.contact}`} className="service-contact">
                    {s.contactName} ·{' '}
                    {s.contact === PHONE_SIMARIA ? '0764 719 609' : s.contact}
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
