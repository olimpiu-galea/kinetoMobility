/** Zone ascunse pe spate — se tratează ca parte din „Gambe” (calves) */
export const hiddenMuscles = new Set(['left-soleus', 'right-soleus'])

/** Pe vederea posterior, soleus sunt mereu ultimele 2 poligoane din SVG */
export function hideSoleusPolygons(svg) {
  const polygons = [...svg.querySelectorAll('polygon')]
  if (polygons.length < 2) return

  polygons.slice(-2).forEach((polygon) => {
    polygon.style.display = 'none'
    polygon.style.pointerEvents = 'none'
    polygon.setAttribute('aria-hidden', 'true')
  })
}

export function resolveMuscleClick(muscle) {
  if (hiddenMuscles.has(muscle)) return 'calves'
  return muscle
}

export function musclesForHighlight(selected) {
  return [...selected].filter((id) => !hiddenMuscles.has(id))
}
