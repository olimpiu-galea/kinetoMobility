import PageHero from '../components/PageHero'
import {
  PHONE,
  PHONE_DISPLAY,
  ADDRESS,
  MAPS_EMBED_URL,
  MAPS_URL,
  schedule,
} from '../data/site'

const faqs = [
  {
    q: 'Cum mă programez?',
    a: `Sună la ${PHONE_DISPLAY} sau scrie pe Facebook.`,
  },
  {
    q: 'Bilet de trimitere?',
    a: 'Depinde de tratament — sună-ne pentru detalii.',
  },
  {
    q: 'Ședințe în grup?',
    a: 'Nu — terapie individuală 1:1.',
  },
]

export default function Contact() {
  return (
    <>
      <PageHero
        tag="Contact"
        title="Programează o ședință"
        desc="Telefon, adresă sau Facebook — alege ce e mai comod."
      >
        <a href={`tel:+4${PHONE}`} className="btn btn-primary btn-sm">
          {PHONE_DISPLAY}
        </a>
      </PageHero>

      <section className="section section-tight">
        <div className="container contact-layout">
          <div className="contact-top reveal">
            <a href={`tel:+4${PHONE}`} className="card contact-tile contact-tile-primary">
              <span className="contact-tile-label">Telefon</span>
              <strong>{PHONE_DISPLAY}</strong>
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card contact-tile"
            >
              <span className="contact-tile-label">Adresă</span>
              <strong>{ADDRESS}</strong>
            </a>
            <div className="card contact-tile contact-tile-schedule">
              <span className="contact-tile-label">Program</span>
              {schedule.map((s) => (
                <div key={s.days} className={`schedule-line ${s.open ? '' : 'muted'}`}>
                  <span>{s.days}</span>
                  <span>{s.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-map card reveal">
            <iframe
              title="Locația KinetoMobility Dej"
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              Google Maps →
            </a>
          </div>

          <div className="faq-grid reveal">
            {faqs.map((f) => (
              <div key={f.q} className="card faq-card">
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
