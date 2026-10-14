---
name: Mago Maxime
description: Il Teatro Buio, ridotto all'essenziale — one short page about the man: his photos, his words, his signature, on a black stage.
colors:
  void: "#050505"
  stage: "#0a0a0a"
  panel: "#121212"
  panel-raised: "#1a1a1a"
  chalk: "#efece6"
  chalk-raised: "#dedad2"
  ink: "#0b0b0b"
  ash: "#95928b"
  ash-ink: "#57554f"
  red: "#c8102e"
  red-deep: "#a00c24"
typography:
  wordmark:
    fontFamily: "Archivo Variable, Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 13.5vw, 14rem)"
    fontWeight: 200
    lineHeight: 0.85
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125"
  display:
    fontFamily: "Archivo Variable, Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.8rem, 7.6vw, 7.4rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo Variable, Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 5vw, 4.6rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  lead:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.2em"
rounded:
  card-sm: "12px"
  card: "18px"
  ticket: "14px"
  panel: "clamp(26px, 3.4vw, 48px)"
  pill: "999px"
spacing:
  s1: "8px"
  s2: "16px"
  s3: "24px"
  s4: "32px"
  s6: "48px"
  s8: "64px"
  s12: "96px"
  s16: "128px"
  gutter: "clamp(20px, 4.5vw, 64px)"
  inset: "clamp(6px, 0.9vw, 14px)"
components:
  button-ticket:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.ticket}"
    height: "56px"
  button-ticket-on-chalk:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.ticket}"
    height: "56px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.pill}"
    height: "56px"
  nav-capsule:
    backgroundColor: "{colors.void}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.pill}"
    height: "44px"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "48px"
  filter-chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.pill}"
    height: "48px"
  playing-card:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  act-panel-dark:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.panel}"
  act-panel-chalk:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
  input-field:
    backgroundColor: "rgba(11, 11, 11, 0.04)"
    textColor: "{colors.ink}"
    rounded: "{rounded.ticket}"
    padding: "14px 16px"
---

<!-- Written inline by the main build thread (the impeccable-documenter subagent was interrupted twice by machine sleep). Derived from src/styles/tokens.css, src/styles/global.css and the shipped components. -->

# Design System: Mago Maxime

## Overview

**Creative North Star: "Il Teatro Buio"**

A short, personal page about Maxime. The black stage stays, but the decoration has gone: no follow-spot, smoke, grain, act rail or numbered acts. What leads now is the person: his black-and-white photos (portrait, hands, a moment on stage), his first-person words and his handwritten signature. Rounded panels still lay one section over the previous like cards on a table. Everything is designed phone-first, because about 80% of visits come from phones.

The page is five sections and nothing more: the hero (his portrait, name and booking), Chi sono (his voice, the hands photo, the signature, one quote), Lo spettacolo (the stage photo and the three arts as a short list), Per il tuo evento (four suits, each one tapping through to the pre-filled form) and Prenota (the ticket form).

**Key Characteristics:**
- Photo-led and personal: every image is of Maxime, shown in black and white (`public/maxime/`), with honest slots until the files arrive.
- First-person copy in his voice, signed with his own signature.
- Rounded panels stacked over one another, alternating dark and chalk.
- Expanded thin Archivo for the name; wide medium Archivo for headings; Geist for reading.
- Generous spacing: every section clears the nav and breathes.

## Colors

A two-material palette: void-black stage and chalk card stock, with ash greys for anything secondary, plus one hue: playing-card red.

### Primary
- **Chalk Card Stock** (chalk): the only bright material. It is used for playing cards, chalk act panels, primary ticket buttons on dark, and the lit wordmark.

### Neutral
- **The Void** (void): the house and stage ground behind everything, plus the opaque nav and rail capsules.
- **Stage Black** (stage): a slightly lifted dark for stage areas.
- **Dark Panel** (panel): dark act panels.
- **Raised Panel** (panel-raised): surfaces sitting on a dark panel, such as the success face of the ticket and dark card faces.
- **Raised Chalk** (chalk-raised): surfaces sitting on chalk, such as the ticket stub and the three-arts cards.
- **Ink** (ink): text and card art on chalk, the active filter chip, ticket buttons on chalk panels.
- **Ash** (ash): secondary text on dark surfaces (≥ 6:1 on panel).
- **Ash Ink** (ash-ink): secondary text on chalk (≥ 6:1 on chalk).
- Hairlines are translucent: chalk at 12% on dark, ink at 14% on chalk.

### Accent
- **Card Red** (red, #c8102e): the red of a real deck. It has exactly three jobs: hearts and diamonds (every `Suit` named cuori/quadri renders red), the primary ticket buttons (Prenota, Invia: red with chalk text, 5:1), and the red full stop (`<span class="pip">.</span>`) that closes each section heading. Text selection and `accent-color` follow it. Red on void is 3.4:1, so it is never used for body text on dark.

### Named Rules
**The One Red Rule.** Red means "card", "book him" or "the curtain" (the menu's velvet drapes, a darker red family #3a0510–#a3162b). Never use it for decoration, borders, backgrounds of sections or body copy; if a new element wants red, it must be a heart/diamond or the booking action.

**The Light Is Not A Colour Rule.** The follow-spot, house glow and beam are translucent warm-white over the void (`rgba(255, 252, 244, …)` at 0.02–0.11). Never tint light, never add an accent hue.

**The Two Materials Rule.** A surface is either stage (void/panel family) or card stock (chalk family). Cream, beige or grey "middle" grounds do not exist.

## Typography

**Display Font:** Archivo Variable, using its width axis (with Geist Variable and system sans as fallback)
**Body Font:** Geist Variable (with ui-sans-serif, system-ui)

**Character:** A wide, quiet grotesk that reads like a film title card when set expanded and thin, paired with a neutral modern sans for reading. Sans-serif only, by the client's explicit choice.

### Hierarchy
- **Wordmark** (200, 125% width, uppercase, clamp 3.4–14rem, line-height 0.85): MAXIME in the hero only.
- **Display** (400, 112% width, clamp 2.8–7.4rem, line-height 0.98): big statements such as the manifesto and "Pensa a una carta".
- **Headline** (500, 112% width, clamp 2.3–4.6rem, line-height 0.98): act headings.
- **Accent italic** (250–300, italic): the emphasised words inside display and headline (`<em>`). The lighter weight carries the emphasis, not a different face.
- **Lead** (Geist 400, clamp 1.15–1.4rem, line-height 1.5, max 46ch): the paragraph beside each act heading.
- **Body** (Geist 400, 1.0625rem, line-height 1.6).
- **Label** (Geist 500, 0.72rem, 0.2em tracking, uppercase): functional labels only (form fields, card subtitles, credits line). Never placed as a kicker above a heading.

### Named Rules
**The Sans-Only Rule.** No serif face anywhere, including accents, numerals and the logo.

**The Width Carries Drama Rule.** Hierarchy is built with the width axis and weight (125% thin for the name, 112% medium for headings), not with a second display family.

## Layout

The home page is one vertical stack of acts inside `[data-stack]`:

1. hero (stage)
2. artista
3. arti
4. eventi
5. mazzo
6. mente
7. biglietto

The footer follows on the open stage.

**Act panels**
- Each act is `position: sticky`. When a panel is taller than the viewport, it sticks by its bottom edge (`--stick` = min(0, viewport − height)).
- Panels are inset from the stage edge (inset 6–14px) so their rounded corners show against the void.
- Content sits in a wrap of max 1320px with a fluid gutter (20–64px).

**Act headers**
- An act header is a two-column grid: headline at 7fr, lead at 5fr, aligned to the end.
- Below 860–960px it collapses to one column.

**Spacing**
- Spacing follows an 8pt scale (8 to 128px).
- Acts open with generous top space and close with 80–160px.

**Fixed chrome**
- An opaque nav sits across the top (logo capsule left; ticket and menu capsule right).
- A Roman-numeral act rail sits at the right edge, hidden below 1100px.

## Elevation & Depth

Depth comes from layering, not from lifting.

**Panel stacking**
- Act panels sit physically over one another.
- A soft upward shadow sits at each panel's top edge (`0 -30px 60px -20px rgba(0,0,0,.8)`).
- As the next act arrives, the panel beneath scales to 0.92 and darkens through a void overlay (up to 75%).

**Cards**
- Cards carry a soft offset drop shadow plus a 1px inset hairline.
- Hover lifts a card by translation (−12 to −14px) with a deeper shadow.

### Shadow Vocabulary
- **Panel edge** (`box-shadow: 0 -30px 60px -20px rgba(0,0,0,0.8)`): the top of every act panel.
- **Card** (`box-shadow: 0 1px 0 rgba(255,255,255,0.5) inset, 0 24px 48px -20px rgba(0,0,0,0.6)`): playing cards.
- **Ticket** (`box-shadow: 0 40px 80px -40px rgba(0,0,0,0.9)`): the booking ticket on its dark panel.

### Named Rules
**The Cards On The Table Rule.** Depth is always "something laid on top of something": panels over panels, cards over the table. No floating glass, no glow halos.

## Shapes

Every corner is rounded:
- **Panels:** 26–48px.
- **Playing cards:** 18px, aspect 5:7.
- **Inner card art and photo-free plates:** 12px.
- **Inputs:** 14px; the textarea is 18px.
- **Chips, ghost buttons, nav capsules and the rail:** full pills.

**Ticket form**
- Primary actions are ticket stubs: a 14px rectangle with semicircular notches (7px) cut into both ends, and a dashed perforation separating the arrow stub.
- The booking form is a full ticket: notches at the tear line and a dashed stub border.

**Seams**
- Act seams carry a dotted perforation line under the nav, with no text.

### Named Rules
**The No Sharp Corner Rule.** If it has a corner, it is rounded. Square boxes are a defect.

## Components

### Buttons
- **Primary: ticket stub.** Card red with chalk text on every surface (hover fills chalk, text turns red). 56px tall; uppercase Geist 600 at 0.82rem with 0.14em tracking. The notched ends are cut by a CSS mask, and a dashed stub holds a 14px arrow.
- **Ghost: pill.** Transparent with a 32% hairline (30% ink on chalk). It is used for secondary actions ("Pensa a una carta", "Tutto il mazzo").
- **Hover:** a circular fill rises from below (0.9s expo-out) and the text inverts. On fine pointers, pills lean toward the cursor (magnetic, 0.6s expo-out). The arrow nudges 3px.
- **Focus:** a 1px currentColor outline, offset 5px.

### Chips (gallery filters, event-type selector)
- **Style:** pill, 48px, hairline border, uppercase label, with an SVG suit glyph before the name.
- **State:** the selected chip fills ink with chalk text.

### Cards / Containers
- **Playing card:** chalk stock, 18px radius, 5:7. The value sits over the suit in both corners, the bottom corner rotated 180°; the centre carries one large suit pip.
- **Act panel:** dark or chalk, rounded, sticky, perforation seam at the top.

### Inputs / Fields
- **Style:** a 4% ink fill, transparent 1px border, 14px radius, 52px minimum height, ink caret.
- **Focus:** an ink border on a transparent fill.
- **Invalid (after interaction):** a dashed ink border.
- **Disabled submit:** 55% opacity with a progress cursor and an "Invio in corso…" label.

### Navigation
- **Logo: the signature.** "Maxime" in a pen-signature hand with an underline swash (`src/components/Firma.astro`, pure SVG paths outlined from Herr Von Muellerhoff, SIL OFL), no capsule. It is drawn left to right as the page opens (1.5s clip reveal). It reads the first painted background beneath it and switches between chalk (dark ground, with a dark halo) and ink (light ground, with a chalk halo) so whatever scrolls under it never cuts the strokes. On phones (≤760px) it leaves the corner once the hero is passed; with the menu open it leaves the corner on every size and appears instead, large and chalk, on the closed curtain above the sections. The Menu control keeps its opaque void capsule.
- "Prenota" is a red ticket stub. It is hidden below 560px; the menu stays.
- **Menu: the stage curtain.** Opening it, two red velvet drapes (vertical folds, shadowed creases, light from above) slide in from the sides and unfurl until they meet: fast then settling (0.75s expo-out). Closing is the reverse feel: they part slowly, then whip away (0.65s ease-in). The sections are then written on the closed curtain in chalk Archivo, centred, with WhatsApp, email and Instagram below. Picking a section jumps the page behind the closed curtain, then the drapes part on that scene. Escape closes it, scroll is locked, the red nav ticket hides while it is open, and reduced motion swaps the movement for a fade.

### Booking (Prenota)
- Under the heading, two ghost pills side by side: WhatsApp and Chiama (tel:), the ways to book without a form.
- The ticket form asks only: event type (four suit chips), Nome*, Data dell'evento, Telefono o email* (one field, validated as a phone number or an email). No message field.
- Phones (≤760px): the contact stub is hidden, since WhatsApp and Chiama already sit above the form; the form padding tightens. Wider screens keep the stub with name, channels and zone.

### Footer
- One last photo of Maxime on stage (`saluto.jpg` landscape, `saluto-telefono.jpg` 4:5 via `Photo`'s `mobile` prop) with "Ci vediamo alla prossima serata." and the red Prenota ticket.
- Phones: a 4:5 rounded card, words and ticket over a bottom gradient. ≥900px: words and ticket on the stage at the left (5fr), the photo at 3:2 on the right (7fr).
- Below: Instagram, TikTok, YouTube and the © line in ash. No giant wordmark, no suit row.

### Mobile Booking Bar
- Phones only (≤ 760px): a void capsule (22px radius) floating 12px above the bottom safe area, holding a full-width red ticket "Prenota" and a 52px WhatsApp button. It hides on the hero, the ticket act, the footer and when the menu is open.

### Photo slots
- `public/maxime/ritratto|mani|scena.(jpg|png|webp)` render in grayscale. An optional `showreel.mp4` replaces the hero portrait. A missing file shows a dark slot naming the file to add.
- The files are pre-graded to black and white (channel mix, S-curve, vignette; the hero background is darkened through a subject mask), so CSS only applies `grayscale(1)` as a guard. `Photo` takes an optional `position` (object-position) to keep Maxime in frame on phone and desktop crops.
- **Live gallery** (end of Lo spettacolo): `live-1…4` at 4:5, rounded 18px, tilted ±1.2–1.4° like cards on the table. Phones swipe through a scroll-snap row; desktop shows four columns with the even ones dropped.

### Theatre bill (Lo spettacolo)
- The three arts are set as a playbill: each name in thin, expanded, uppercase Archivo (250, 118% width, clamp 2.1–4.6rem) with its small suit glyph, one ash line beside it (≥1000px) or under it. Hairlines between rows. The spiral glyph has 2.5 open turns so it holds at icon size.

### Event photos (Per il tuo evento)
- One real photo per kind of evening (`public/maxime/evento-cuori|quadri|fiori|picche.jpg`, 4:5, pre-graded B&W): the guest under white drapes, the gala table, the stage microphone, the hands with the deck.
- Each tile: 18px radius, a bottom gradient to void carrying the event name in chalk Archivo (500, 110%) with an arrow, nothing else. The whole tile links to the form with the suit pre-selected.
- Phones: one per row, landscape 3:2, served from dedicated crops (`evento-<seme>-largo.jpg`) through `Photo`'s `mobile` prop (a `<picture>` source below 900px). ≥900px: four portrait 4:5 tiles in a row. Hover zooms the photo 5% and nudges the arrow; focus draws a red ring.

### Signature
- `public/maxime/firma.(svg|png)` is shown on chalk and inverted on dark. Until it exists, a light italic typed name stands in.

## Do's and Don'ts

### Do:
- **Do** keep the page short; a new section must earn its place for someone deciding to book.
- **Do** put Maxime (photo, voice, signature) at the centre of any new section; decoration is the first thing to cut.
- **Do** keep section padding clear of the nav (`nav-h` + 40–104px) and use the 8pt scale generously.
- **Do** draw cards with the authored SVG suits (`src/data/suits.ts`) and set the value and suit large on the stock.
- **Do** make the primary action of any section a ticket stub; keep pills for secondary controls.
- **Do** keep every piece of card content readable at rest; interaction may enrich, never reveal essential information.
- **Do** keep entrance motion to the diagonal "deal" (from −90px x, +140px y, −14° rotation, expo-out) and honour `prefers-reduced-motion` with full static states.
- **Do** label demonstration content as examples until real material exists.
- **Do** design for the phone first: 44px+ targets, no hover-only states (hover styles live inside `@media (hover: hover)`), no horizontal scroll at 360px, booking always reachable.

### Don't:
- **Don't** use serif faces, Unicode or emoji suit glyphs, or any colour other than card red in its three jobs.
- **Don't** use stock or generated photos of "a magician": only real photos of Maxime.
- **Don't** hide card content behind hover-flips (removed at the client's request as unreliable).
- **Don't** place kicker or eyebrow labels above headings; the act rail is the only numbering.
- **Don't** use square corners or hard-cut full-bleed section bands.
- **Don't** put translucent chrome over content; nav and rail capsules are opaque.
- **Don't** state unverified facts (years, event counts, clients, response times).
