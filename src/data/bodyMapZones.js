export const BODY_MAP_VIEWBOX = { w: 400, h: 380 }

/**
 * Zone = elipse SVG (overlay organic, discret)
 * lateral = stânga/dreapta pacientului
 */
export const bodyMapZones = [
  // Față
  { id: 'fata-cap', part: 'cap', partLabel: 'Cap', view: 'fata', viewLabel: 'față', lateral: 'centru', lateralLabel: '', cx: 102, cy: 38, rx: 24, ry: 28 },
  { id: 'fata-gat', part: 'gat', partLabel: 'Gât', view: 'fata', viewLabel: 'față', lateral: 'centru', lateralLabel: '', cx: 102, cy: 66, rx: 16, ry: 12 },
  { id: 'fata-umar-dreapta', part: 'umar', partLabel: 'Umăr', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 62, cy: 88, rx: 22, ry: 18 },
  { id: 'fata-umar-stanga', part: 'umar', partLabel: 'Umăr', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga', cx: 142, cy: 88, rx: 22, ry: 18 },
  { id: 'fata-piept-dreapta', part: 'piept', partLabel: 'Piept', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 78, cy: 118, rx: 26, ry: 28 },
  { id: 'fata-piept-stanga', part: 'piept', partLabel: 'Piept', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga', cx: 126, cy: 118, rx: 26, ry: 28 },
  { id: 'fata-abdomen-dreapta', part: 'abdomen', partLabel: 'Abdomen', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 80, cy: 158, rx: 24, ry: 26 },
  { id: 'fata-abdomen-stanga', part: 'abdomen', partLabel: 'Abdomen', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga', cx: 124, cy: 158, rx: 24, ry: 26 },
  { id: 'fata-bazin', part: 'bazin', partLabel: 'Bazin', view: 'fata', viewLabel: 'față', lateral: 'centru', lateralLabel: '', cx: 102, cy: 188, rx: 38, ry: 18 },
  { id: 'fata-brat-dreapta', part: 'brat', partLabel: 'Braț', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 44, cy: 130, rx: 14, ry: 38 },
  { id: 'fata-antebrat-dreapta', part: 'antebrat', partLabel: 'Antebrat', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 38, cy: 198, rx: 12, ry: 34 },
  { id: 'fata-mana-dreapta', part: 'mana', partLabel: 'Mână', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 34, cy: 248, rx: 10, ry: 14 },
  { id: 'fata-brat-stanga', part: 'brat', partLabel: 'Braț', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga', cx: 160, cy: 130, rx: 14, ry: 38 },
  { id: 'fata-antebrat-stanga', part: 'antebrat', partLabel: 'Antebrat', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga', cx: 166, cy: 198, rx: 12, ry: 34 },
  { id: 'fata-mana-stanga', part: 'mana', partLabel: 'Mână', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga', cx: 170, cy: 248, rx: 10, ry: 14 },
  { id: 'fata-coapsa-dreapta', part: 'coapsa', partLabel: 'Coapsă', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 82, cy: 238, rx: 22, ry: 44 },
  { id: 'fata-coapsa-stanga', part: 'coapsa', partLabel: 'Coapsă', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga', cx: 122, cy: 238, rx: 22, ry: 44 },
  { id: 'fata-genunchi-dreapta', part: 'genunchi', partLabel: 'Genunchi', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 84, cy: 288, rx: 18, ry: 16 },
  { id: 'fata-genunchi-stanga', part: 'genunchi', partLabel: 'Genunchi', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga', cx: 120, cy: 288, rx: 18, ry: 16 },
  { id: 'fata-gamba-dreapta', part: 'gamba', partLabel: 'Gambă', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 86, cy: 322, rx: 16, ry: 32 },
  { id: 'fata-gamba-stanga', part: 'gamba', partLabel: 'Gambă', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga', cx: 118, cy: 322, rx: 16, ry: 32 },
  { id: 'fata-picior-dreapta', part: 'picior', partLabel: 'Picior', view: 'fata', viewLabel: 'față', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 88, cy: 352, rx: 14, ry: 10 },
  { id: 'fata-picior-stanga', part: 'picior', partLabel: 'Picior', view: 'fata', viewLabel: 'față', lateral: 'stanga', lateralLabel: 'stânga', cx: 116, cy: 352, rx: 14, ry: 10 },

  // Spate
  { id: 'spate-cap', part: 'cap', partLabel: 'Cap', view: 'spate', viewLabel: 'spate', lateral: 'centru', lateralLabel: '', cx: 298, cy: 38, rx: 24, ry: 28 },
  { id: 'spate-gat', part: 'gat', partLabel: 'Gât', view: 'spate', viewLabel: 'spate', lateral: 'centru', lateralLabel: '', cx: 298, cy: 66, rx: 16, ry: 12 },
  { id: 'spate-umar-stanga', part: 'umar', partLabel: 'Umăr', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga', cx: 258, cy: 88, rx: 22, ry: 18 },
  { id: 'spate-umar-dreapta', part: 'umar', partLabel: 'Umăr', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 338, cy: 88, rx: 22, ry: 18 },
  { id: 'spate-sus-stanga', part: 'spate-sus', partLabel: 'Spate sus', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga', cx: 274, cy: 118, rx: 26, ry: 28 },
  { id: 'spate-sus-dreapta', part: 'spate-sus', partLabel: 'Spate sus', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 322, cy: 118, rx: 26, ry: 28 },
  { id: 'spate-mijlociu', part: 'spate-mijlociu', partLabel: 'Spate mijlociu', view: 'spate', viewLabel: 'spate', lateral: 'centru', lateralLabel: '', cx: 298, cy: 152, rx: 34, ry: 22 },
  { id: 'spate-lombar', part: 'lombar', partLabel: 'Lombar', view: 'spate', viewLabel: 'spate', lateral: 'centru', lateralLabel: '', cx: 298, cy: 178, rx: 32, ry: 18 },
  { id: 'spate-fesa-stanga', part: 'fesa', partLabel: 'Fesă', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga', cx: 276, cy: 204, rx: 22, ry: 20 },
  { id: 'spate-fesa-dreapta', part: 'fesa', partLabel: 'Fesă', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 320, cy: 204, rx: 22, ry: 20 },
  { id: 'spate-brat-stanga', part: 'brat', partLabel: 'Braț', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga', cx: 240, cy: 130, rx: 14, ry: 38 },
  { id: 'spate-antebrat-stanga', part: 'antebrat', partLabel: 'Antebrat', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga', cx: 234, cy: 198, rx: 12, ry: 34 },
  { id: 'spate-mana-stanga', part: 'mana', partLabel: 'Mână', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga', cx: 230, cy: 248, rx: 10, ry: 14 },
  { id: 'spate-brat-dreapta', part: 'brat', partLabel: 'Braț', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 356, cy: 130, rx: 14, ry: 38 },
  { id: 'spate-antebrat-dreapta', part: 'antebrat', partLabel: 'Antebrat', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 362, cy: 198, rx: 12, ry: 34 },
  { id: 'spate-mana-dreapta', part: 'mana', partLabel: 'Mână', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 366, cy: 248, rx: 10, ry: 14 },
  { id: 'spate-coapsa-stanga', part: 'coapsa', partLabel: 'Coapsă', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga', cx: 278, cy: 238, rx: 22, ry: 44 },
  { id: 'spate-coapsa-dreapta', part: 'coapsa', partLabel: 'Coapsă', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 318, cy: 238, rx: 22, ry: 44 },
  { id: 'spate-genunchi-stanga', part: 'genunchi', partLabel: 'Genunchi', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga', cx: 280, cy: 288, rx: 18, ry: 16 },
  { id: 'spate-genunchi-dreapta', part: 'genunchi', partLabel: 'Genunchi', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 316, cy: 288, rx: 18, ry: 16 },
  { id: 'spate-gamba-stanga', part: 'gamba', partLabel: 'Gambă', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga', cx: 282, cy: 322, rx: 16, ry: 32 },
  { id: 'spate-gamba-dreapta', part: 'gamba', partLabel: 'Gambă', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 314, cy: 322, rx: 16, ry: 32 },
  { id: 'spate-picior-stanga', part: 'picior', partLabel: 'Picior', view: 'spate', viewLabel: 'spate', lateral: 'stanga', lateralLabel: 'stânga', cx: 284, cy: 352, rx: 14, ry: 10 },
  { id: 'spate-picior-dreapta', part: 'picior', partLabel: 'Picior', view: 'spate', viewLabel: 'spate', lateral: 'dreapta', lateralLabel: 'dreapta', cx: 312, cy: 352, rx: 14, ry: 10 },
]

export function formatZoneLabel(zone) {
  if (zone.lateral === 'centru') {
    return `${zone.partLabel} (${zone.viewLabel})`
  }
  return `${zone.partLabel} ${zone.lateralLabel} (${zone.viewLabel})`
}
