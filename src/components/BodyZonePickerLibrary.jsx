import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Model from 'react-body-highlighter'
import {
  hideSoleusPolygons,
  musclesForHighlight,
  resolveMuscleClick,
} from '../data/bodyLibraryConfig'
import { formatMuscleLabel } from '../data/muscleLabelsRo'
import { openWhatsApp } from '../data/site'

const emptyForm = { nume: '', telefon: '', varsta: '', problema: '' }
const SELECT_COLOR = 'rgba(242, 168, 168, 0.85)'
const BODY_COLOR = '#e4e8ec'
const MODEL_VIEWBOX = '0 0 100 225'

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

function applyModelSvgFixes(wrap, type) {
  const svg = wrap?.querySelector('svg.rbh')
  if (!svg) return
  svg.setAttribute('viewBox', MODEL_VIEWBOX)
  svg.removeAttribute('width')
  svg.removeAttribute('height')
  if (type === 'posterior') hideSoleusPolygons(svg)
}

function BodyModel({ type, data, onMuscleClick }) {
  const wrapRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    applyModelSvgFixes(wrap, type)
    const frame = requestAnimationFrame(() => {
      applyModelSvgFixes(wrap, type)
      requestAnimationFrame(() => applyModelSvgFixes(wrap, type))
    })

    return () => cancelAnimationFrame(frame)
  }, [type, data])

  return (
    <div ref={wrapRef} className="pain-map-model">
      <Model
        type={type}
        data={data}
        bodyColor={BODY_COLOR}
        highlightedColors={[SELECT_COLOR]}
        onClick={onMuscleClick}
      />
    </div>
  )
}

export default function BodyZonePickerLibrary() {
  const [selected, setSelected] = useState(() => new Set())
  const [form, setForm] = useState(emptyForm)
  const [formError, setFormError] = useState('')

  const toggleMuscle = useCallback((muscle) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(muscle)) next.delete(muscle)
      else next.add(muscle)
      return next
    })
  }, [])

  const handleMuscleClick = useCallback(
    ({ muscle }) => toggleMuscle(resolveMuscleClick(muscle)),
    [toggleMuscle],
  )

  const highlightData = useMemo(() => {
    const muscles = musclesForHighlight(selected)
    if (muscles.length === 0) return []
    return [{ name: 'zone-selectate', muscles, frequency: 1 }]
  }, [selected])

  const selectedLabels = useMemo(
    () => musclesForHighlight(selected).map(formatMuscleLabel).sort((a, b) => a.localeCompare(b, 'ro')),
    [selected],
  )

  const count = selectedLabels.length
  const zoneLabel = count === 1 ? 'zonă' : 'zone'

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

        <div className="pain-map-card pain-map-card-library reveal">
          <div className="pain-map-library-frame">
            <div className="pain-map-dual">
              <div className="pain-map-view">
                <span className="pain-map-view-label">FAȚĂ</span>
                <BodyModel type="anterior" data={highlightData} onMuscleClick={handleMuscleClick} />
              </div>
              <div className="pain-map-view">
                <span className="pain-map-view-label">SPATE</span>
                <BodyModel type="posterior" data={highlightData} onMuscleClick={handleMuscleClick} />
              </div>
            </div>

            <p className="pain-map-library-status" aria-live="polite">
              Ai selectat: <strong>{count}</strong> {zoneLabel}
            </p>
          </div>

          <div className="pain-map-footer">
            {count > 0 && (
              <div className="pain-map-chips">
                {selectedLabels.map((label) => (
                  <span key={label} className="pain-map-chip">{label}</span>
                ))}
              </div>
            )}

            <form className="pain-map-form" onSubmit={handleFormSubmit}>
              <div className="pain-map-form-grid">
                <label className="form-field">
                  <span>Nume</span>
                  <input type="text" value={form.nume} onChange={updateField('nume')} placeholder="Numele tău" autoComplete="name" required />
                </label>
                <label className="form-field">
                  <span>Telefon</span>
                  <input type="tel" value={form.telefon} onChange={updateField('telefon')} placeholder="07xx xxx xxx" autoComplete="tel" required />
                </label>
                <label className="form-field">
                  <span>Vârstă</span>
                  <input type="number" value={form.varsta} onChange={updateField('varsta')} placeholder="Ex. 35" min="1" max="120" />
                </label>
                <label className="form-field form-field-full">
                  <span>Descrie problema</span>
                  <textarea value={form.problema} onChange={updateField('problema')} placeholder="Spune-ne pe scurt ce te deranjează, de când, ce ai încercat până acum..." rows={3} required />
                </label>
              </div>
              {formError && <p className="form-error">{formError}</p>}
              <div className="pain-map-form-actions">
                <button type="submit" className="btn btn-primary pain-map-form-submit">
                  Trimite-ne mesaj și te contactăm noi
                </button>
                {count > 0 && (
                  <button type="button" className="btn btn-ghost pain-map-reset" onClick={() => setSelected(new Set())}>
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
