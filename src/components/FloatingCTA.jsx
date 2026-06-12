import { PHONE, WHATSAPP_URL } from '../data/site'

export default function FloatingCTA() {
  return (
    <div className="floating-cta-group">
      <a href={`tel:+4${PHONE}`} className="floating-cta floating-cta-call" aria-label="Sună pentru programare">
        <span className="floating-cta-icon" aria-hidden="true">📞</span>
        <span className="floating-cta-text">Sună acum</span>
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta floating-cta-whatsapp"
        aria-label="Scrie-ne pe WhatsApp"
      >
        <span className="floating-cta-icon" aria-hidden="true">💬</span>
        <span className="floating-cta-text">Scrie-ne pe WhatsApp</span>
      </a>
    </div>
  )
}
