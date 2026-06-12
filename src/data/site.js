export const PHONE = '0745368925'
export const PHONE_DISPLAY = '0745 368 925'
export const WHATSAPP_NUMBER = '40745368925'
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`
export const WHATSAPP_URL = `${WHATSAPP_BASE}?text=${encodeURIComponent(
  'Bună ziua! Aș dori o programare la KinetoMobility.',
)}`

export function buildWhatsAppUrl(text) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`
}

/** Navigare directă — funcționează pe mobile (window.open e blocat adesea) */
export function openWhatsApp(text) {
  window.location.assign(buildWhatsAppUrl(text))
}
export const PHONE_SIMARIA = '0764719609'
export const ADDRESS = 'Strada Iuliu Maniu nr. 1A, Dej 405200'
export const MAPS_URL =
  'https://maps.google.com/?q=KinetoMobility+Dej+Strada+Iuliu+Maniu+1A'
export const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=KinetoMobility+Dej+Strada+Iuliu+Maniu+1A&output=embed'
export const FACEBOOK_URL = 'https://www.facebook.com/kinetohorea/'
export const LOGO = '/images/logo-facebook.jpg'

export const schedule = [
  { days: 'Luni – Vineri', hours: '09:00 – 17:00', open: true },
  { days: 'Sâmbătă – Duminică', hours: 'Închis', open: false },
]

export const navLinks = [
  { to: '/', label: 'Acasă' },
  { to: '/servicii', label: 'Servicii' },
  { to: '/despre', label: 'Despre' },
  { to: '/contact', label: 'Contact' },
]

export const services = [
  {
    slug: 'kinetoterapie',
    title: 'Kinetoterapie',
    image: '/images/services/kinetoterapie.jpg',
    summary: 'Recuperare prin mișcare, plan personalizat pentru fiecare pacient.',
    desc: 'Programe individualizate de exerciții terapeutice pentru restabilirea mobilității, forței și funcției. Abordare 1:1 — pacient și terapeut.',
    forWho: 'Dureri articulare, postură, recuperare post-operatorie, sportivi',
  },
  {
    slug: 'fizioterapie',
    title: 'Fizioterapie',
    image: '/images/services/fizioterapie.jpg',
    summary: 'Tratamente moderne pentru aparatul locomotor.',
    desc: 'Tehnici de fizioterapie pentru reducerea durerii, inflamației și îmbunătățirea funcției musculare și articulare.',
    forWho: 'Afecțiuni musculare, articulare, coloană vertebrală',
  },
  {
    slug: 'terapie-manuala',
    title: 'Terapie manuală',
    image: '/images/services/terapie-manuala.jpg',
    summary: 'Tehnici manuale pentru mobilitate și postură.',
    desc: 'Manipulări și tehnici manuale specializate pentru eliberarea tensiunilor și îmbunătățirea amplitudinii de mișcare.',
    forWho: 'Blocaje articulare, tensiuni musculare, dureri cronice',
  },
  {
    slug: 'masaj-terapeutic',
    title: 'Masaj terapeutic',
    image: '/images/services/masaj-terapeutic.jpg',
    summary: 'Relaxare musculară și accelerarea recuperării.',
    desc: 'Masaj de recuperare care susține procesul de vindecare, reduce tensiunea și îmbunătățește circulația locală.',
    forWho: 'Contracturi musculare, oboseală, recuperare sportivă',
  },
  {
    slug: 'bioptron',
    title: 'Terapie Bioptron',
    image: '/images/services/bioptron.jpg',
    summary: 'Lumină polarizată pentru regenerare tisulară.',
    desc: 'Terapie cu lumină medicală polarizată — stimulează microcirculația, reduce inflamația și susține vindecarea naturală.',
    forWho: 'Inflamații, dureri, recuperare tisulară',
  },
  {
    slug: 'bicom',
    title: 'Terapie Bicom',
    image: '/images/services/bicom.jpg',
    summary: 'Terapie biofizică complementară.',
    desc: 'Metodă biofizică de susținere a proceselor de autoreglare ale organismului, utilizată ca terapie complementară.',
    forWho: 'Terapie de susținere în recuperare',
  },
]

export const team = [
  {
    name: 'Sima Maria',
    role: 'Kinetoterapeut',
    phone: PHONE_SIMARIA,
    bio: 'Licențiată în Kinetoterapie, masterandă în Kinetoterapia afecțiunilor aparatului locomotor. Specializată în recuperarea planșeului pelvin, afecțiuni urologice și ginecologice.',
  },
  {
    name: 'Bogdan Mădălina',
    role: 'Kinetoterapeut',
    bio: 'Specializarea Balneofiziokinetoterapie și recuperare medicală. Masterandă în reabilitarea pacienților cu boli reumatologice.',
  },
]

export const quickActions = [
  {
    title: 'Programează o ședință',
    desc: 'Sună direct la cabinet',
    action: `tel:+4${PHONE}`,
    cta: 'Sună acum',
    icon: '📞',
  },
  {
    title: 'Găsește cabinetul',
    desc: 'Str. Iuliu Maniu 1A, Dej',
    action: MAPS_URL,
    cta: 'Deschide harta',
    icon: '📍',
    external: true,
  },
  {
    title: 'Vezi programul',
    desc: 'Luni – Vineri, 09:00 – 17:00',
    action: '/contact',
    cta: 'Detalii contact',
    icon: '🕐',
  },
]
