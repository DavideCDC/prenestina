# Prenestina Ricambi — Bozza UI

Sito vetrina mobile-first per **Prenestina Ricambi** (Aprilia, LT). Direzione: premium automotive — nero, cromature, accento rosso del logo.

## Cosa c'è in questa cartella

- `Prenestina Ricambi.html` — file principale, apri in browser
- `screens.jsx` — componenti delle 3 schermate (Home / Chi siamo / Contatti) + design system
- `design-canvas.jsx` — canvas di presentazione (pan/zoom, focus mode)
- `ios-frame.jsx` — bezel iPhone per i mockup
- `tweaks-panel.jsx` — pannello tweaks (cambio colore accento)
- `assets/logo-dark.png` — logo trasparente, ottimizzato per fondo scuro (1242×411)

## Stack consigliato per lo sviluppo

- HTML/CSS/JS statico (Astro, Next.js static export, o anche solo HTML+CSS)
- Hosting: Vercel / Netlify
- Niente backend richiesto

## Sistema visivo

**Palette**
- Background: `#0a0a0c`
- Surface: `#16161c`
- Line: `#2a2a33`
- Text: `#f5f5f7` / dim `#9a9aa6` / mute `#6b6b76`
- Accent (rosso logo): `#c8202c`

**Tipografia (Google Fonts)**
- Display/Heading: **Manrope** 700–800
- Body/UI: **Inter Tight** 400–600
- Kicker/Mono: **JetBrains Mono** 400–500

**Componenti chiave**
- CTA primaria: gradiente rosso, lettering uppercase, glow rosso
- Card: bordo cromato 1px, fondo surface
- Chrome rule: linea sottile con gradiente metallico per separatori

## Da definire con il cliente prima di sviluppare

- [ ] Indirizzo esatto, telefono, email, P.IVA
- [ ] Numero WhatsApp Business
- [ ] Foto reali (negozio, banco, magazzino)
- [ ] Lista marchi reali trattati
- [ ] Anno di fondazione
- [ ] Destinazione email del form richiesta ricambi
- [ ] Embed Google Maps della posizione reale
- [ ] Meta SEO per "ricambi auto Aprilia" + schema.org LocalBusiness
