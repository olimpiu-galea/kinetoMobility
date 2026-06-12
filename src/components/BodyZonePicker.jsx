import { useMemo, useState } from 'react'
import { bodyMapZones, BODY_MAP_VIEWBOX, formatZoneLabel } from '../data/bodyMapZones'
import { openWhatsApp } from '../data/site'

const { w: VW, h: VH } = BODY_MAP_VIEWBOX
const emptyForm = { nume: '', telefon: '', varsta: '', problema: '' }

function ZoneOverlay({ zone, selected, onToggle }) {
  const active = selected.has(zone.id)

  return (
    <ellipse
      id={zone.id}
      cx={zone.cx}
      cy={zone.cy}
      rx={zone.rx}
      ry={zone.ry}
      className={`body-zone ${active ? 'is-active' : ''}`}
      onClick={() => onToggle(zone.id)}
      role="button"
      tabIndex={0}
      aria-label={`${formatZoneLabel(zone)}${active ? ', selectat' : ''}`}
      aria-pressed={active}
      data-view={zone.view}
      data-lateral={zone.lateral}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle(zone.id)
        }
      }}
    />
  )
}

function formatZonesForMessage(labels) {
  if (labels.length === 0) return '—'
  const joined = labels.join(', ')
  if (joined.length <= 380) return joined
  return `${labels.slice(0, 6).join(', ')} (+${labels.length - 6} zone)`
}

function buildWhatsAppMessage(form, selectedLabels) {
  const lines = [
    'Bună ziua! Aș dori să fiu contactat de KinetoMobility.',
    '',
    `Nume: ${form.nume.trim()}`,
    `Telefon: ${form.telefon.trim()}`,
    `Vârstă: ${form.varsta.trim() || '—'}`,
    `Zone cu probleme: ${formatZonesForMessage(selectedLabels)}`,
    '',
    `Problemă: ${form.problema.trim()}`,
  ]
  return lines.join('\n')
}

export default function BodyZonePicker() {
  const [selected, setSelected] = useState(() => new Set())
  const [form, setForm] = useState(emptyForm)
  const [formError, setFormError] = useState('')

  const toggle = (id) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const selectedLabels = useMemo(
    () => bodyMapZones.filter((z) => selected.has(z.id)).map((z) => formatZoneLabel(z)),
    [selected],
  )

  const count = selectedLabels.length

  const updateField = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (formError) setFormError('')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!form.nume.trim() || !form.telefon.trim() || !form.problema.trim()) {
      setFormError('Completează numele, telefonul și descrierea problemei.')
      return
    }
    openWhatsApp(buildWhatsAppMessage(form, selectedLabels))
  }

  return (
    <section className="section section-tight body-picker-section">
      <div className="container body-picker-container">
        <div className="body-picker-head reveal">
          <h2>Selectează zonele cu probleme</h2>
          <p>Atinge zonele afectate pe siluetă — față sau spate</p>
        </div>

        <div className="pain-map-card reveal">
          <div className="pain-map-labels" aria-hidden="true">
            <span>Față</span>
            <span>Spate</span>
          </div>

          <div className="pain-map-canvas">
            <svg
              viewBox={`0 0 ${VW} ${VH}`}
              className="pain-map-svg"
              preserveAspectRatio="xMidYMid meet"
              aria-label="Hartă corporală interactivă"
            >
              {bodyMapZones.map((zone) => (
                <ZoneOverlay
                  key={zone.id}
                  zone={zone}
                  selected={selected}
                  onToggle={toggle}
                />
              ))}
            </svg>
          </div>

          <div className="pain-map-footer">
            <p className="pain-map-count">
              Ai selectat: <strong>{count}</strong> {count === 1 ? 'zonă' : 'zone'}
            </p>

            {count > 0 && (
              <div className="pain-map-chips">
                {selectedLabels.map((label) => (
                  <span key={label} className="pain-map-chip">
                    {label}
                  </span>
                ))}
              </div>
            )}

            <form className="pain-map-form" onSubmit={handleFormSubmit}>
              <div className="pain-map-form-grid">
                <label className="form-field">
                  <span>Nume</span>
                  <input
                    type="text"
                    value={form.nume}
                    onChange={updateField('nume')}
                    placeholder="Numele tău"
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="form-field">
                  <span>Telefon</span>
                  <input
                    type="tel"
                    value={form.telefon}
                    onChange={updateField('telefon')}
                    placeholder="07xx xxx xxx"
                    autoComplete="tel"
                    required
                  />
                </label>
                <label className="form-field">
                  <span>Vârstă</span>
                  <input
                    type="number"
                    value={form.varsta}
                    onChange={updateField('varsta')}
                    placeholder="Ex. 35"
                    min="1"
                    max="120"
                  />
                </label>
                <label className="form-field form-field-full">
                  <span>Descrie problema</span>
                  <textarea
                    value={form.problema}
                    onChange={updateField('problema')}
                    placeholder="Spune-ne pe scurt ce te deranjează, de când, ce ai încercat până acum..."
                    rows={3}
                    required
                  />
                </label>
              </div>
              {formError && <p className="form-error">{formError}</p>}
              <div className="pain-map-form-actions">
                <button type="submit" className="btn btn-primary pain-map-form-submit">
                  Trimite-ne mesaj și te contactăm noi
                </button>
                {count > 0 && (
                  <button
                    type="button"
                    className="btn btn-ghost pain-map-reset"
                    onClick={() => setSelected(new Set())}
                  >
                    Resetează zonele
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
