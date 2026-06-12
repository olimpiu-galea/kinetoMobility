export const BODY_MAP_VIEWBOX = { w: 1200, h: 900 }
export const FRONT_CENTER_X = 300
export const BACK_CENTER_X = 900

function e(id, meta, cx, cy, rx, ry, rotate = 0) {
  return { id, shape: 'ellipse', ...meta, cx, cy, rx, ry, rotate }
}

function c(id, meta, cx, cy, r) {
  return { id, shape: 'circle', ...meta, cx, cy, r }
}

const f = {
  cap: { part: 'cap', partLabel: 'Cap', view: 'fata', viewLabel: 'față', lateral: 'centru', lateralLabel: '' },
  gat: { part: 'gat', partLabel: 'Gât', view: 'fata', viewLabel: 'față', lateral: 'centru', lateralLabel: '' },
  umarD: { part: 'umar', partLabel: 'Umăr', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta' },
  umarS: { part: 'umar', partLabel: 'Umăr', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga' },
  pieptD: { part: 'piept', partLabel: 'Piept', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta' },
  pieptS: { part: 'piept', partLabel: 'Piept', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga' },
  abd1: { part: 'abdomen', partLabel: 'Abdomen sus', view: 'fata', viewLabel: 'față', lateral: 'centru', lateralLabel: '' },
  abd2: { part: 'abdomen', partLabel: 'Abdomen mijlociu', view: 'fata', viewLabel: 'față', lateral: 'centru', lateralLabel: '' },
  abd3: { part: 'abdomen', partLabel: 'Abdomen jos', view: 'fata', viewLabel: 'față', lateral: 'centru', lateralLabel: '' },
  bazin: { part: 'bazin', partLabel: 'Bazin', view: 'fata', viewLabel: 'față', lateral: 'centru', lateralLabel: '' },
  bratD: { part: 'brat', partLabel: 'Braț', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta' },
  bratS: { part: 'brat', partLabel: 'Braț', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga' },
  cotD: { part: 'cot', partLabel: 'Cot', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta' },
  cotS: { part: 'cot', partLabel: 'Cot', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga' },
  anteD: { part: 'antebrat', partLabel: 'Antebrat', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta' },
  anteS: { part: 'antebrat', partLabel: 'Antebrat', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga' },
  manaD: { part: 'mana', partLabel: 'Mână', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta' },
  manaS: { part: 'mana', partLabel: 'Mână', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga' },
  coapsaD: { part: 'coapsa', partLabel: 'Coapsă', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta' },
  coapsaS: { part: 'coapsa', partLabel: 'Coapsă', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga' },
  genD: { part: 'genunchi', partLabel: 'Genunchi', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta' },
  genS: { part: 'genunchi', partLabel: 'Genunchi', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga' },
  gambD: { part: 'gamba', partLabel: 'Gambă', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta' },
  gambS: { part: 'gamba', partLabel: 'Gambă', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga' },
  gleznD: { part: 'glezn', partLabel: 'Gleznă', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta' },
  gleznS: { part: 'glezn', partLabel: 'Gleznă', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga' },
  picD: { part: 'picior', partLabel: 'Picior', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta' },
  picS: { part: 'picior', partLabel: 'Picior', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga' },
}

const s = {
  cap: { part: 'cap', partLabel: 'Cap', view: 'spate', viewLabel: 'spate', lateral: 'centru', lateralLabel: '' },
  gat: { part: 'gat', partLabel: 'Gât', view: 'spate', viewLabel: 'spate', lateral: 'centru', lateralLabel: '' },
  umarD: { part: 'umar', partLabel: 'Umăr', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta' },
  umarS: { part: 'umar', partLabel: 'Umăr', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga' },
  omoplatD: { part: 'omoplat', partLabel: 'Omoplat', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta' },
  omoplatS: { part: 'omoplat', partLabel: 'Omoplat', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga' },
  coloana: { part: 'coloana', partLabel: 'Coloană', view: 'spate', viewLabel: 'spate', lateral: 'centru', lateralLabel: '' },
  talie: { part: 'talie', partLabel: 'Talie', view: 'spate', viewLabel: 'spate', lateral: 'centru', lateralLabel: '' },
  fesaD: { part: 'fesa', partLabel: 'Fesă', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta' },
  fesaS: { part: 'fesa', partLabel: 'Fesă', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga' },
  bratD: { part: 'brat', partLabel: 'Braț', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta' },
  bratS: { part: 'brat', partLabel: 'Braț', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga' },
  cotD: { part: 'cot', partLabel: 'Cot', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta' },
  cotS: { part: 'cot', partLabel: 'Cot', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga' },
  anteD: { part: 'antebrat', partLabel: 'Antebrat', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta' },
  anteS: { part: 'antebrat', partLabel: 'Antebrat', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga' },
  manaD: { part: 'mana', partLabel: 'Mână', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta' },
  manaS: { part: 'mana', partLabel: 'Mână', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga' },
  coapsaD: { part: 'coapsa', partLabel: 'Coapsă', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta' },
  coapsaS: { part: 'coapsa', partLabel: 'Coapsă', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga' },
  genD: { part: 'genunchi', partLabel: 'Genunchi', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta' },
  genS: { part: 'genunchi', partLabel: 'Genunchi', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga' },
  gambD: { part: 'gamba', partLabel: 'Gambă', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta' },
  gambS: { part: 'gamba', partLabel: 'Gambă', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga' },
  gleznD: { part: 'glezn', partLabel: 'Gleznă', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta' },
  gleznS: { part: 'glezn', partLabel: 'Gleznă', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga' },
  picD: { part: 'picior', partLabel: 'Picior', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta' },
  picS: { part: 'picior', partLabel: 'Picior', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga' },
}

export const bodyMapZones = [
  // ── FAȚĂ ──
  e('head-front', f.cap, 300, 118, 27, 41),
  e('neck-front', f.gat, 300, 162, 21.5, 14),
  c('left-shoulder-front', f.umarD, 232, 192, 22.5),
  c('right-shoulder-front', f.umarS, 368, 192, 22.5),
  e('left-chest-front', f.pieptD, 268, 220, 31.5, 38),
  e('right-chest-front', f.pieptS, 332, 222, 28, 37),
  e('upper-abdomen-front', f.abd1, 300, 272, 40, 16),
  e('middle-abdomen-front', f.abd2, 300, 285, 39, 14),
  e('lower-abdomen-front', f.abd3, 300, 298, 38, 13),
  e('pelvis-front', f.bazin, 300, 337, 38.5, 27),
  e('left-upper-arm-front', f.bratD, 218, 248, 17, 39.5, 14),
  e('right-upper-arm-front', f.bratS, 382, 252, 17, 39.5),
  c('left-elbow-front', f.cotD, 210, 293, 12.5),
  c('right-elbow-front', f.cotS, 385, 298, 12.5),
  e('left-forearm-front', f.anteD, 204, 333, 14.5, 34, 11),
  e('right-forearm-front', f.anteS, 386, 338, 14.5, 34),
  c('left-hand-front', f.manaD, 198, 369, 11),
  c('right-hand-front', f.manaS, 388, 374, 11),
  e('left-thigh-front', f.coapsaD, 268, 396, 31, 57),
  e('right-thigh-front', f.coapsaS, 332, 394, 31, 57),
  e('left-knee-front', f.genD, 268, 456, 16, 18.5),
  e('right-knee-front', f.genS, 331, 457, 16, 18.5),
  e('left-calf-front', f.gambD, 268, 510, 19.5, 43.5),
  e('right-calf-front', f.gambS, 332, 510, 19.5, 43.5),
  e('left-ankle-front', f.gleznD, 265, 564, 11.5, 12),
  e('right-ankle-front', f.gleznS, 333, 566, 11.5, 12),
  e('left-foot-front', f.picD, 252, 590, 24, 12, -24),
  e('right-foot-front', f.picS, 348, 594, 24, 12, 31),

  // ── SPATE ──
  e('head-back', s.cap, 900, 113, 30, 40.5),
  e('neck-back', s.gat, 900, 155, 21, 13.5),
  e('left-shoulder-back', s.umarS, 838, 188, 17.5, 25.5, 38),
  e('right-shoulder-back', s.umarD, 962, 188, 17.5, 25.5, -51),
  e('left-scapula-back', s.omoplatS, 871, 213, 26.5, 39.5, -22),
  e('right-scapula-back', s.omoplatD, 929, 213, 26.5, 39.5, 12),
  e('spine-back', s.coloana, 900, 251, 12, 55),
  e('waist-back', s.talie, 900, 321, 39.5, 17.5),
  e('left-glute-back', s.fesaS, 872, 360, 28, 30.5),
  e('right-glute-back', s.fesaD, 928, 360, 28, 30.5),
  e('left-upper-arm-back', s.bratS, 814, 238, 14, 36, 14),
  e('right-upper-arm-back', s.bratD, 986, 234, 15, 40, -17),
  e('left-elbow-back', s.cotS, 804, 279, 12, 10),
  e('right-elbow-back', s.cotD, 994, 277, 12, 10),
  e('left-forearm-back', s.anteS, 797, 314, 14, 36, 6),
  e('right-forearm-back', s.anteD, 1001, 315, 15, 40, -12),
  e('left-hand-back', s.manaS, 794, 360, 13, 14.5),
  e('right-hand-back', s.manaD, 1006, 360, 13, 14.5),
  e('left-thigh-back', s.coapsaS, 871, 391, 29.5, 63),
  e('right-thigh-back', s.coapsaD, 929, 391, 28.5, 62),
  e('left-knee-back', s.genS, 871, 457, 17, 16),
  e('right-knee-back', s.genD, 929, 458, 17, 16),
  e('left-calf-back', s.gambS, 871, 507, 19.5, 47.5),
  e('right-calf-back', s.gambD, 929, 506, 19.5, 47.5),
  e('left-ankle-back', s.gleznS, 868, 560, 13, 10.5),
  e('right-ankle-back', s.gleznD, 932, 559, 13, 10.5),
  e('left-foot-back', s.picS, 856, 577, 26.5, 13.5, -20),
  e('right-foot-back', s.picD, 944, 575, 25, 12.5, 14),
]

/** Ordine desenare — zonele din față acoperă marginile interioare */
export const BODY_ZONE_DRAW_ORDER = [
  'head-front', 'neck-front',
  'left-shoulder-front', 'right-shoulder-front',
  'left-chest-front', 'right-chest-front',
  'upper-abdomen-front', 'middle-abdomen-front', 'lower-abdomen-front',
  'pelvis-front',
  'left-upper-arm-front', 'right-upper-arm-front',
  'left-elbow-front', 'right-elbow-front',
  'left-forearm-front', 'right-forearm-front',
  'left-hand-front', 'right-hand-front',
  'left-thigh-front', 'right-thigh-front',
  'left-knee-front', 'right-knee-front',
  'left-calf-front', 'right-calf-front',
  'left-ankle-front', 'right-ankle-front',
  'left-foot-front', 'right-foot-front',
  'head-back', 'neck-back',
  'left-shoulder-back', 'right-shoulder-back',
  'left-scapula-back', 'right-scapula-back',
  'spine-back', 'waist-back',
  'left-glute-back', 'right-glute-back',
  'left-upper-arm-back', 'right-upper-arm-back',
  'left-elbow-back', 'right-elbow-back',
  'left-forearm-back', 'right-forearm-back',
  'left-hand-back', 'right-hand-back',
  'left-thigh-back', 'right-thigh-back',
  'left-knee-back', 'right-knee-back',
  'left-calf-back', 'right-calf-back',
  'left-ankle-back', 'right-ankle-back',
  'left-foot-back', 'right-foot-back',
]

const drawRank = new Map(BODY_ZONE_DRAW_ORDER.map((id, i) => [id, i]))

export function getZonesForRender() {
  return [...bodyMapZones].sort((a, b) => drawRank.get(a.id) - drawRank.get(b.id))
}

export function formatZoneLabel(zone) {
  if (zone.lateral === 'centru') {
    return `${zone.partLabel} (${zone.viewLabel})`
  }
  return `${zone.partLabel} ${zone.lateralLabel} (${zone.viewLabel})`
}
