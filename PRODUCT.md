# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- Chi organizza un evento e cerca un intrattenimento che gli ospiti ricordino: coppie che si sposano e chi organizza feste private (compleanni, anniversari).
- Aziende e agenzie eventi (convention, cene di gala, team building, lanci di prodotto).
- Teatri, festival e locali che programmano spettacoli.
- Situazione tipica (dedotta, da confermare): arrivano da Instagram/TikTok o dal passaparola, spesso da telefono, per capire chi è Maxime e chiedere un preventivo.

## Product Purpose
Sito vetrina di Maxime, mago, illusionista e ipnotista. Deve far capire in pochi secondi che tipo di artista è, mostrare le tre arti (magia, illusionismo, ipnosi/mentalismo) e i tipi di evento, e portare il visitatore a una richiesta di preventivo (form, WhatsApp, telefono, email). Successo = richieste di contatto qualificate.

## Positioning
Regola delle 3 M, in evidenza in apertura: **Magia · Meraviglia · Memoria**.

Un solo artista che unisce magia da vicino, grandi illusioni e ipnosi/mentalismo, con spettacoli costruiti su misura per ogni evento. Il sito stesso deve "fare un effetto" (es. il trucco "Pensa a una carta"), non solo descriverlo.

## Operating Context
- Contatto: **il telefono diretto ha la priorità** (pulsante Chiama in apertura e nella barra su telefono, numero grande in Prenota), poi WhatsApp, poi il modulo diviso per semi. Instagram è un canale fondamentale e va reso ben visibile. Numero, WhatsApp, email e profili social in `site.json` sono ancora SEGNAPOSTO.
- Tipi di evento mappati sui semi delle carte: ♥ matrimoni e feste private, ♦ aziende e gala, ♣ teatro e spettacoli, ♠ close-up / magia da tavolo.
- Zona: Italia ed estero.

## Capabilities and Constraints
- Sito statico Astro, deploy su Netlify/Vercel.
- Contenuti in `src/data/site.json` e `src/data/eventi.json`, modificabili senza toccare il codice.
- Lingua: italiano.

## Brand Commitments
- Bianco e nero (grigi e luce ammessi) più un solo colore: il rosso delle carte da gioco, solo per cuori/quadri, il pulsante Prenota e il punto rosso che chiude i titoli (richiesta dell'utente, ottobre 2026).
- Immaginario: magia, carte da gioco e i quattro semi, la mente/ipnosi, il palcoscenico.
- Fotografie solo vere, di Maxime (`public/maxime/`), **a colori** quasi ovunque perché la sua magia è giocosa e festosa (richiesta di Maxime, ottobre 2026); in bianco e nero solo la foto di scena in "Lo spettacolo". Niente foto stock o generate.
- Nome d'arte: "Maxime" / "Mago Maxime".

## Evidence on Hand
- Foto reali di Maxime dal vivo (ottobre 2026): ritratto sul palco, mani con le carte, scena col pubblico e quattro foto tra gli ospiti. Ancora nessuna recensione, numero di eventi o anno di attività confermato.
- Testi, contatti, elenco eventi e recensioni attuali sono **segnaposto**: non vanno presentati come reali né arricchiti con numeri o clienti inventati.

## Product Principles
1. La richiesta di preventivo è sempre a un gesto di distanza.
2. Mostrare la magia, non descriverla: il sito deve stupire con un'interazione vera.
3. Mistero sì, confusione no: ogni sezione deve restare chiara su cosa offre Maxime.
4. Niente affermazioni non verificate (anni, numeri, clienti, premi).

## Accessibility & Inclusion
WCAG AA; tutte le interazioni (trucco, carte, galleria, form) usabili da tastiera e con `prefers-reduced-motion`.
