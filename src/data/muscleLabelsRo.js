/** Etichete în română pentru mușchii din react-body-highlighter */
export const muscleLabelsRo = {
  trapezius: 'Trapez',
  'upper-back': 'Spate superior',
  'lower-back': 'Spate inferior (lombar)',
  chest: 'Piept',
  biceps: 'Biceps',
  triceps: 'Triceps',
  forearm: 'Antebraț',
  'back-deltoids': 'Umăr posterior',
  'front-deltoids': 'Umăr anterior',
  abs: 'Abdomen',
  obliques: 'Oblice / talie',
  adductor: 'Adductor',
  abductors: 'Abductori (coapse)',
  hamstring: 'Femural posterior',
  quadriceps: 'Cvadriceps',
  calves: 'Gambe',
  gluteal: 'Fesieri',
  head: 'Cap',
  neck: 'Gât',
  knees: 'Genunchi',
}

export function formatMuscleLabel(muscleId) {
  return muscleLabelsRo[muscleId] ?? muscleId
}
