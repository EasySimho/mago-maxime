// Sections of the home page, in order.
export const ACTS = [
  { id: 'io', name: 'Chi sono' },
  { id: 'spettacolo', name: 'Lo spettacolo' },
  { id: 'eventi', name: 'Per il tuo evento' },
  { id: 'prenota', name: 'Prenota' },
] as const;

export type ActId = (typeof ACTS)[number]['id'];
export const act = (id: ActId) => ACTS.find((a) => a.id === id)!;
