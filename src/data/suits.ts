// Authored suit glyphs (100×100). Used server-side by <Suit /> and client-side by suitSvg().
export type Seme = 'cuori' | 'quadri' | 'fiori' | 'picche';

export const SUIT_PATHS: Record<Seme, string> = {
  cuori:
    'M50 90C24 70 5 54 5 32 5 17 16 7 30 7c9 0 16 5 20 13 4-8 11-13 20-13 14 0 25 10 25 25 0 22-19 38-45 58Z',
  quadri: 'M50 3C59 21 71 37 87 50 71 63 59 79 50 97 41 79 29 63 13 50 29 37 41 21 50 3Z',
  fiori:
    'M50 8a19 19 0 0 1 14.6 31.2A19 19 0 1 1 55 68c1 11 5 20 14 27H31c9-7 13-16 14-27a19 19 0 1 1-9.6-28.8A19 19 0 0 1 50 8Z',
  picche:
    'M50 5c10 17 43 34 43 57 0 13-10 21-21 21-8 0-15-4-19-11 1 10 5 17 14 23H33c9-6 13-13 14-23-4 7-11 11-19 11-11 0-21-8-21-21C7 39 40 22 50 5Z',
};

/* Two and a half open turns: stays a spiral, not a smudge, at icon size */
export const SPIRAL_PATH = 'M46 50a4 4 0 0 1 8 0a14 14 0 0 1-28 0a24 24 0 0 1 48 0a34 34 0 0 1-68 0a44 44 0 0 1 88 0';

export const SUIT_NAMES: Record<Seme, string> = { cuori: 'cuori', quadri: 'quadri', fiori: 'fiori', picche: 'picche' };
const VALUE_NAMES: Record<string, string> = { A: 'Asso', K: 'Re', Q: 'Donna', J: 'Fante' };

/** "K", "quadri" -> "Re di quadri" */
export const cardName = (v: string, s: Seme) => `${VALUE_NAMES[v] ?? v} di ${SUIT_NAMES[s]}`;

export const suitSvg = (s: Seme, cls = 'suit') =>
  `<svg class="${cls}" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><path d="${SUIT_PATHS[s]}" fill="currentColor"/></svg>`;

/** Card corner markup (value over suit), for client-side rendering. */
export const cornerHtml = (v: string, s: Seme) => `<span>${v}</span>${suitSvg(s)}`;
