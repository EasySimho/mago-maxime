import type { Seme } from './suits';
export type { Seme };

export const SEMI: Record<Seme, { breve: string; evento: string }> = {
  cuori: {
    breve: 'Matrimoni',
    evento: 'Matrimoni e feste private',
  },
  quadri: {
    breve: 'Aziende',
    evento: 'Eventi aziendali e gala',
  },
  fiori: {
    breve: 'Teatro',
    evento: 'Teatro e spettacoli',
  },
  picche: {
    breve: 'Close-up',
    evento: 'Close-up e magia da tavolo',
  },
};

export const ORDINE: Seme[] = ['cuori', 'quadri', 'fiori', 'picche'];
