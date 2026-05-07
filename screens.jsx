// Prenestina Ricambi — premium automotive mobile screens
// Black + chrome + red accent. No copyrighted UI; original design.

const PR_COLORS = {
  bg: '#0a0a0c',
  bg2: '#111116',
  surface: '#16161c',
  surface2: '#1d1d24',
  line: '#2a2a33',
  lineSoft: '#1f1f27',
  text: '#f5f5f7',
  textDim: '#9a9aa6',
  textMute: '#6b6b76',
  red: '#c8202c',
  redGlow: 'rgba(200,32,44,0.35)',
  chrome1: '#3a3a44',
  chrome2: '#8a8a96',
  chrome3: '#e6e6ea',
};

// ─── Building blocks ────────────────────────────────────────────────

// Chrome hairline divider (thin metallic gradient line)
function ChromeRule({ style = {} }) {
  return (
    <div style={{
      height: 1,
      background: `linear-gradient(90deg, transparent 0%, ${PR_COLORS.chrome1} 15%, ${PR_COLORS.chrome3} 50%, ${PR_COLORS.chrome1} 85%, transparent 100%)`,
      opacity: 0.45,
      ...style,
    }} />
  );
}

// Chrome bevel border (used on cards and CTAs)
function chromeBorder() {
  return {
    border: '1px solid transparent',
    backgroundImage: `linear-gradient(${PR_COLORS.surface},${PR_COLORS.surface}), linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04) 30%, rgba(0,0,0,0.5))`,
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
  };
}

// Real brand logo — dark-mode variant (transparent + white small text)
// Cropped tight: 410×133 ≈ 3.08 : 1 aspect
function PRLogoMark({ size = 28 }) {
  return (
    <img src="assets/logo-dark.png" alt="Prenestina Ricambi"
      style={{ height: size, width: 'auto', display: 'block', flexShrink: 0 }}/>
  );
}

function PRLogoFull({ width = 180 }) {
  return (
    <img src="assets/logo-dark.png" alt="Prenestina Ricambi"
      style={{ width, height: 'auto', display: 'block' }}/>
  );
}

// iOS-style status bar in dark mode (we already use IOSDevice, but inside the screen body
// we render our own header content)

// Top app bar (dark, sticky-looking)
function TopBar({ title, right }) {
  return (
    <div style={{
      position: 'relative',
      padding: '52px 18px 14px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: `linear-gradient(180deg, ${PR_COLORS.bg2} 0%, ${PR_COLORS.bg} 100%)`,
    }}>
      <PRLogoFull width={140} />
      <div style={{ display: 'flex', gap: 8 }}>{right}</div>
    </div>
  );
}

function IconButton({ children, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: 38, height: 38, borderRadius: 10,
      background: PR_COLORS.surface, color: PR_COLORS.text,
      border: `1px solid ${PR_COLORS.line}`, padding: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer',
    }}>{children}</button>
  );
}

// Generic icons (24px stroke style)
const Icons = {
  search: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
  menu: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  phone: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>,
  pin: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  clock: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  wa: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.7 4.2 1.7.7 2.3.8 3.2.6.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.1 15 3.6 13.5 3.6 12c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.3-8.4 8.3z"/></svg>,
  mail: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
  arrow: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  car: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14l2-6a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 6"/><path d="M3 14h18v4a1 1 0 0 1-1 1h-1a2 2 0 0 1-2-2H7a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1v-4z"/><circle cx="7.5" cy="16.5" r="1"/><circle cx="16.5" cy="16.5" r="1"/></svg>,
  moto: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="M5 17h6l4-7h3M9 10l3 7M14 7h4"/></svg>,
  check: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>,
  tool: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 1 0 5 5L21 13l-2 2-1.7-1.7-2 2L19 19l-2 2-3.7-3.7-2 2L13 21l-2 2-1.7-1.7-2 2L3 19l2-2-1.7-1.7 2-2L3 9l2-2 3.7 3.7 2-2L7 5l2-2 1.7 1.7 2-2L17 7l-2 2-.3-.7z"/></svg>,
  shield: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3z"/></svg>,
  truck: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7h11v10H2zM13 10h5l3 4v3h-8z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>,
  insta: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>,
  fb: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2h-3c-3 0-5 1.8-5 5v3H6v4h3v8h4z"/></svg>,
};

// Striped placeholder image
function ImageSlot({ height = 180, label = 'photo', radius = 14 }) {
  return (
    <div style={{
      height, borderRadius: radius, position: 'relative', overflow: 'hidden',
      backgroundColor: '#1a1a22',
      backgroundImage: `repeating-linear-gradient(135deg, #1a1a22 0 12px, #20202a 12px 24px)`,
      border: `1px solid ${PR_COLORS.line}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{
        fontFamily: 'JetBrains Mono, ui-monospace, monospace',
        fontSize: 10, letterSpacing: '0.15em',
        color: PR_COLORS.textMute, textTransform: 'uppercase',
      }}>{label}</span>
    </div>
  );
}

// Red glossy CTA button
function RedCTA({ children, full, icon }) {
  return (
    <button style={{
      height: 50, width: full ? '100%' : undefined,
      padding: '0 22px',
      borderRadius: 12, border: 'none',
      background: `linear-gradient(180deg, #d92836 0%, #a8141f 100%)`,
      color: '#fff', cursor: 'pointer',
      fontFamily: 'Manrope, system-ui', fontWeight: 700, fontSize: 14,
      letterSpacing: '0.04em', textTransform: 'uppercase',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      boxShadow: `0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.3) inset, 0 8px 24px ${PR_COLORS.redGlow}`,
    }}>
      {children}{icon}
    </button>
  );
}

function GhostCTA({ children, full }) {
  return (
    <button style={{
      height: 50, width: full ? '100%' : undefined,
      padding: '0 22px',
      borderRadius: 12, cursor: 'pointer',
      background: PR_COLORS.surface, color: PR_COLORS.text,
      border: `1px solid ${PR_COLORS.line}`,
      fontFamily: 'Manrope, system-ui', fontWeight: 600, fontSize: 14,
      letterSpacing: '0.04em', textTransform: 'uppercase',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    }}>{children}</button>
  );
}

// Section header (kicker + title)
function SectionHead({ kicker, title }) {
  return (
    <div style={{ padding: '0 18px', marginBottom: 14 }}>
      <div style={{
        fontFamily: 'JetBrains Mono, ui-monospace, monospace',
        fontSize: 10, letterSpacing: '0.28em', color: PR_COLORS.red,
        textTransform: 'uppercase', marginBottom: 8,
      }}>— {kicker}</div>
      <h2 style={{
        margin: 0, fontFamily: 'Manrope, system-ui', fontWeight: 800,
        fontSize: 24, lineHeight: 1.1, color: PR_COLORS.text,
        letterSpacing: '-0.02em',
      }}>{title}</h2>
    </div>
  );
}

// ─── HOME SCREEN ────────────────────────────────────────────────────

function HomeScreen({ accent = PR_COLORS.red }) {
  const cats = [
    { icon: Icons.car, label: 'Auto' },
    { icon: Icons.moto, label: 'Moto' },
    { icon: Icons.tool, label: 'Officina' },
    { icon: Icons.shield, label: 'Originali' },
  ];

  const services = [
    { icon: Icons.truck, title: 'Consegne in zona', sub: 'Aprilia · Latina · Pomezia in giornata' },
    { icon: Icons.tool, title: 'Ordini speciali', sub: 'Ricambi non a magazzino su richiesta' },
    { icon: Icons.shield, title: 'Solo ricambi originali', sub: 'O qualità OE certificata equivalente' },
  ];

  const brands = ['FIAT', 'BMW', 'AUDI', 'MERCEDES', 'VW', 'FORD', 'YAMAHA', 'HONDA', 'DUCATI', 'PIAGGIO', 'PEUGEOT', 'OPEL'];

  return (
    <div style={{ background: PR_COLORS.bg, color: PR_COLORS.text, minHeight: '100%', paddingBottom: 40 }}>
      <TopBar right={<>
        <IconButton>{Icons.search}</IconButton>
        <IconButton>{Icons.menu}</IconButton>
      </>} />

      {/* HERO */}
      <div style={{ position: 'relative', padding: '20px 18px 28px' }}>
        <div style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', height: 360,
          background: `radial-gradient(120% 80% at 70% 20%, #1a1a24 0%, #0a0a0c 60%)`,
          border: `1px solid ${PR_COLORS.line}`,
        }}>
          {/* placeholder hero image */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0 14px, transparent 14px 28px)`,
          }} />
          {/* red diagonal accent */}
          <div style={{
            position: 'absolute', right: -40, top: 40, width: 220, height: 6,
            background: accent, transform: 'rotate(-18deg)',
            boxShadow: `0 0 24px ${accent}`,
          }} />
          <div style={{
            position: 'absolute', right: -60, top: 56, width: 220, height: 1,
            background: PR_COLORS.chrome3, opacity: 0.5, transform: 'rotate(-18deg)',
          }} />

          {/* hero copy */}
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 22 }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.3em',
              color: accent, marginBottom: 14, textTransform: 'uppercase',
            }}>— APRILIA · DAL 1998</div>
            <h1 style={{
              margin: 0, fontFamily: 'Manrope, system-ui', fontWeight: 800,
              fontSize: 36, lineHeight: 0.98, letterSpacing: '-0.035em',
              color: '#fff',
            }}>
              Il ricambio<br/>
              <span style={{
                background: 'linear-gradient(180deg,#fff 0%, #b8b8c0 60%, #6e6e78 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>giusto.</span> Subito.
            </h1>
            <p style={{
              margin: '14px 0 22px', fontFamily: 'Inter Tight, system-ui',
              fontSize: 14, lineHeight: 1.45, color: PR_COLORS.textDim, maxWidth: 280,
            }}>
              Ricambi auto e moto per privati, officine e rivenditori. A magazzino o su ordinazione in 24/48h.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <RedCTA icon={Icons.arrow}>Chiama ora</RedCTA>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORIE — quick pills */}
      <div style={{ padding: '0 18px 30px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10,
        }}>
          {cats.map((c, i) => (
            <div key={i} style={{
              ...chromeBorder(),
              borderRadius: 12, padding: '14px 6px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              color: PR_COLORS.text,
            }}>
              <div style={{ color: accent }}>{c.icon}</div>
              <span style={{
                fontFamily: 'Manrope, system-ui', fontSize: 11, fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      <ChromeRule style={{ margin: '0 18px 30px' }}/>

      {/* SERVIZI */}
      <SectionHead kicker="Cosa facciamo" title="Servizi pensati per chi non ha tempo da perdere." />
      <div style={{ padding: '6px 18px 30px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {services.map((s, i) => (
          <div key={i} style={{
            ...chromeBorder(),
            borderRadius: 14, padding: 16,
            display: 'flex', gap: 14, alignItems: 'flex-start',
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 10, flexShrink: 0,
              background: PR_COLORS.bg, border: `1px solid ${PR_COLORS.line}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: accent,
            }}>{s.icon}</div>
            <div style={{ flex: 1, paddingTop: 2 }}>
              <div style={{
                fontFamily: 'Manrope, system-ui', fontWeight: 700, fontSize: 14.5,
                color: PR_COLORS.text, marginBottom: 4,
              }}>{s.title}</div>
              <div style={{
                fontFamily: 'Inter Tight, system-ui', fontSize: 12.5,
                color: PR_COLORS.textDim, lineHeight: 1.45,
              }}>{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* BRANDS */}
      <SectionHead kicker="Marchi trattati" title="Auto, moto, scooter — oltre 60 case." />
      <div style={{ padding: '6px 18px 30px' }}>
        <div style={{
          ...chromeBorder(),
          borderRadius: 14, padding: '4px',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        }}>
          {brands.map((b, i) => (
            <div key={b} style={{
              padding: '18px 8px', textAlign: 'center',
              borderRight: (i % 3 !== 2) ? `1px solid ${PR_COLORS.lineSoft}` : 'none',
              borderBottom: i < brands.length - 3 ? `1px solid ${PR_COLORS.lineSoft}` : 'none',
              fontFamily: 'Manrope, system-ui', fontWeight: 700, fontSize: 12,
              letterSpacing: '0.08em', color: PR_COLORS.textDim,
            }}>{b}</div>
          ))}
        </div>
        <div style={{
          marginTop: 12, textAlign: 'center',
          fontFamily: 'Inter Tight, system-ui', fontSize: 12, color: PR_COLORS.textMute,
        }}>+ 50 altri · chiedici quello che cerchi</div>
      </div>

      {/* SHOWROOM PHOTO */}
      <div style={{ padding: '0 18px 30px' }}>
        <ImageSlot height={200} label="foto negozio · banco vendita" />
      </div>

      {/* CTA BLOCK */}
      <div style={{ padding: '0 18px 30px' }}>
        <div style={{
          borderRadius: 18, padding: 22,
          background: `linear-gradient(180deg, ${PR_COLORS.surface2} 0%, ${PR_COLORS.bg2} 100%)`,
          border: `1px solid ${PR_COLORS.line}`,
        }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.28em',
            color: accent, marginBottom: 10, textTransform: 'uppercase',
          }}>— Non lo trovi?</div>
          <h3 style={{
            margin: 0, fontFamily: 'Manrope, system-ui', fontWeight: 800, fontSize: 22,
            color: PR_COLORS.text, lineHeight: 1.1, letterSpacing: '-0.02em',
          }}>Mandaci la targa<br/>o il codice originale.</h3>
          <p style={{
            margin: '12px 0 18px', fontFamily: 'Inter Tight, system-ui',
            fontSize: 13, color: PR_COLORS.textDim, lineHeight: 1.45,
          }}>Ti rispondiamo entro un'ora con disponibilità e prezzo. WhatsApp è il canale più veloce.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <RedCTA full icon={Icons.wa}>Scrivi su WhatsApp</RedCTA>
            <GhostCTA full>Modulo richiesta</GhostCTA>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// ─── CHI SIAMO ─────────────────────────────────────────────────────

function AboutScreen({ accent = PR_COLORS.red }) {
  const stats = [
    { n: '25+', l: 'Anni di attività' },
    { n: '60', l: 'Marchi trattati' },
    { n: '24h', l: 'Ordini speciali' },
    { n: '3', l: 'Comuni serviti' },
  ];

  const values = [
    { t: 'Ricambi originali', d: 'Lavoriamo con i fornitori ufficiali. Niente sorprese, niente compatibili scadenti.' },
    { t: 'Conoscenza tecnica', d: 'Dietro al banco c\'è chi smonta motori da vent\'anni. Ti diciamo quello che ti serve davvero.' },
    { t: 'Tempi seri', d: 'Se diciamo domattina, è domattina. Se non è disponibile, te lo diciamo subito.' },
  ];

  return (
    <div style={{ background: PR_COLORS.bg, color: PR_COLORS.text, minHeight: '100%', paddingBottom: 40 }}>
      <TopBar right={<IconButton>{Icons.menu}</IconButton>} />

      {/* HERO */}
      <div style={{ padding: '8px 18px 28px' }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.3em',
          color: accent, marginBottom: 14, textTransform: 'uppercase',
        }}>— Chi siamo</div>
        <h1 style={{
          margin: 0, fontFamily: 'Manrope, system-ui', fontWeight: 800,
          fontSize: 38, lineHeight: 0.98, letterSpacing: '-0.035em',
          color: PR_COLORS.text, textWrap: 'balance',
        }}>
          Una ricambi<br/>di <span style={{
            background: 'linear-gradient(180deg,#fff 0%, #b8b8c0 60%, #6e6e78 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>quartiere</span><br/>che non sbaglia ordine.
        </h1>
        <p style={{
          margin: '20px 0 0', fontFamily: 'Inter Tight, system-ui',
          fontSize: 15, lineHeight: 1.55, color: PR_COLORS.textDim,
        }}>
          Siamo Prenestina Ricambi, ad Aprilia. Lavoriamo con officine, carrozzerie e privati che hanno bisogno del pezzo giusto, alla prima.
        </p>
      </div>

      {/* PHOTO */}
      <div style={{ padding: '0 18px 28px' }}>
        <ImageSlot height={220} label="foto squadra · banco vendita" />
      </div>

      {/* STATS */}
      <div style={{ padding: '0 18px 30px' }}>
        <div style={{
          ...chromeBorder(),
          borderRadius: 16, padding: '4px',
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '20px 16px',
              borderRight: (i % 2 === 0) ? `1px solid ${PR_COLORS.lineSoft}` : 'none',
              borderBottom: i < 2 ? `1px solid ${PR_COLORS.lineSoft}` : 'none',
            }}>
              <div style={{
                fontFamily: 'Manrope, system-ui', fontWeight: 800, fontSize: 32,
                color: PR_COLORS.text, lineHeight: 1, letterSpacing: '-0.04em',
                background: 'linear-gradient(180deg,#fff 0%, #b8b8c0 80%, #6e6e78 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>{s.n}</div>
              <div style={{
                marginTop: 6,
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: PR_COLORS.textMute,
              }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <ChromeRule style={{ margin: '0 18px 30px' }}/>

      {/* STORY */}
      <SectionHead kicker="La nostra storia" title="Aprilia, fine anni '90." />
      <div style={{ padding: '6px 18px 30px' }}>
        <p style={{
          margin: 0, fontFamily: 'Inter Tight, system-ui',
          fontSize: 14, lineHeight: 1.6, color: PR_COLORS.textDim,
        }}>
          [PLACEHOLDER COPY · da definire]<br/><br/>
          Abbiamo aperto un piccolo negozio sulla Pontina perché in zona mancava un punto di riferimento serio per i ricambi auto. Negli anni siamo cresciuti — sono arrivate le moto, gli scooter, i furgoni — ma il modo di lavorare è rimasto lo stesso: capire cosa serve, trovarlo, consegnarlo in fretta.
        </p>
      </div>

      {/* VALUES */}
      <SectionHead kicker="Come lavoriamo" title="Tre cose, fatte bene." />
      <div style={{ padding: '6px 18px 30px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {values.map((v, i) => (
          <div key={i} style={{
            ...chromeBorder(),
            borderRadius: 14, padding: 18,
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8,
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: 6,
                background: accent, color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{Icons.check}</div>
              <div style={{
                fontFamily: 'Manrope, system-ui', fontWeight: 700, fontSize: 15,
                color: PR_COLORS.text, letterSpacing: '-0.005em',
              }}>{v.t}</div>
            </div>
            <p style={{
              margin: 0, paddingLeft: 32,
              fontFamily: 'Inter Tight, system-ui', fontSize: 13,
              lineHeight: 1.5, color: PR_COLORS.textDim,
            }}>{v.d}</p>
          </div>
        ))}
      </div>

      {/* TEAM PHOTO */}
      <div style={{ padding: '0 18px 30px' }}>
        <ImageSlot height={180} label="foto · interni magazzino" />
      </div>

      {/* CTA */}
      <div style={{ padding: '0 18px 0' }}>
        <RedCTA full icon={Icons.arrow}>Vieni a trovarci</RedCTA>
      </div>

      <div style={{ height: 30 }} />
      <Footer />
    </div>
  );
}

// ─── CONTATTI ──────────────────────────────────────────────────────

function ContactScreen({ accent = PR_COLORS.red }) {
  const days = [
    { d: 'Lun – Ven', h: '08:30 – 13:00 · 15:30 – 19:30' },
    { d: 'Sabato', h: '08:30 – 13:00' },
    { d: 'Domenica', h: 'Chiuso', mute: true },
  ];

  return (
    <div style={{ background: PR_COLORS.bg, color: PR_COLORS.text, minHeight: '100%', paddingBottom: 40 }}>
      <TopBar right={<IconButton>{Icons.menu}</IconButton>} />

      {/* HEADER */}
      <div style={{ padding: '8px 18px 22px' }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.3em',
          color: accent, marginBottom: 14, textTransform: 'uppercase',
        }}>— Contatti</div>
        <h1 style={{
          margin: 0, fontFamily: 'Manrope, system-ui', fontWeight: 800,
          fontSize: 38, lineHeight: 0.98, letterSpacing: '-0.035em',
          color: PR_COLORS.text,
        }}>
          Passa, chiama,<br/>scrivi. <span style={{
            background: 'linear-gradient(180deg,#fff 0%, #b8b8c0 60%, #6e6e78 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Come preferisci.</span>
        </h1>
      </div>

      {/* QUICK ACTIONS */}
      <div style={{ padding: '0 18px 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <ActionTile icon={Icons.phone} label="Chiama" value="06 1234 5678" accent={accent} primary />
        <ActionTile icon={Icons.wa} label="WhatsApp" value="+39 333 000 0000" accent={accent} />
        <ActionTile icon={Icons.mail} label="Email" value="info@prenestinaricambi.it" accent={accent} small />
        <ActionTile icon={Icons.pin} label="Indirizzo" value="Via — , Aprilia (LT)" accent={accent} small />
      </div>

      {/* MAP */}
      <div style={{ padding: '0 18px 22px' }}>
        <div style={{
          ...chromeBorder(),
          borderRadius: 14, overflow: 'hidden', position: 'relative', height: 220,
        }}>
          <FakeMap accent={accent}/>
          <div style={{
            position: 'absolute', left: 14, right: 14, bottom: 14,
            display: 'flex', gap: 10, alignItems: 'center',
            padding: '12px 14px', borderRadius: 10,
            background: 'rgba(10,10,12,0.85)',
            backdropFilter: 'blur(8px)',
            border: `1px solid ${PR_COLORS.line}`,
          }}>
            <div style={{ color: accent }}>{Icons.pin}</div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: 'Manrope, system-ui', fontWeight: 700, fontSize: 13,
                color: PR_COLORS.text,
              }}>Prenestina Ricambi</div>
              <div style={{
                fontFamily: 'Inter Tight, system-ui', fontSize: 11.5,
                color: PR_COLORS.textDim, marginTop: 2,
              }}>Aprilia (LT) · indirizzo da confermare</div>
            </div>
            <div style={{
              padding: '8px 12px', borderRadius: 8,
              background: accent, color: '#fff',
              fontFamily: 'Manrope, system-ui', fontWeight: 700, fontSize: 11,
              letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>Apri</div>
          </div>
        </div>
      </div>

      {/* HOURS */}
      <SectionHead kicker="Orari" title="Quando ci trovi aperti." />
      <div style={{ padding: '6px 18px 30px' }}>
        <div style={{
          ...chromeBorder(),
          borderRadius: 14, padding: '4px 18px',
        }}>
          {days.map((d, i) => (
            <div key={i} style={{
              padding: '14px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              borderBottom: i < days.length - 1 ? `1px solid ${PR_COLORS.lineSoft}` : 'none',
            }}>
              <span style={{
                fontFamily: 'Manrope, system-ui', fontWeight: 700, fontSize: 13.5,
                color: d.mute ? PR_COLORS.textMute : PR_COLORS.text,
              }}>{d.d}</span>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11.5,
                color: d.mute ? PR_COLORS.textMute : PR_COLORS.textDim,
                letterSpacing: '0.02em',
              }}>{d.h}</span>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 14, padding: '12px 14px',
          background: 'rgba(200,32,44,0.08)',
          border: `1px solid rgba(200,32,44,0.25)`,
          borderRadius: 10,
          display: 'flex', gap: 10, alignItems: 'center',
        }}>
          <div style={{ color: accent }}>{Icons.clock}</div>
          <span style={{
            fontFamily: 'Inter Tight, system-ui', fontSize: 12.5,
            color: PR_COLORS.textDim, lineHeight: 1.4,
          }}>Per ordini urgenti fuori orario, scrivici su WhatsApp.</span>
        </div>
      </div>

      <ChromeRule style={{ margin: '0 18px 26px' }}/>

      {/* FORM */}
      <SectionHead kicker="Richiesta ricambio" title="Dicci cosa cerchi." />
      <div style={{ padding: '6px 18px 30px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Field label="Nome e cognome" placeholder="Mario Rossi" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <Field label="Telefono" placeholder="333 000 0000" />
          <Field label="Targa" placeholder="AB 123 CD" mono />
        </div>
        <Field label="Cosa ti serve" placeholder="Es. pastiglie freno anteriori, filtro olio…" multi />
        <RedCTA full icon={Icons.arrow}>Invia richiesta</RedCTA>
        <p style={{
          margin: '4px 2px 0', fontFamily: 'Inter Tight, system-ui',
          fontSize: 11, color: PR_COLORS.textMute, lineHeight: 1.5,
        }}>Ti rispondiamo entro 1h negli orari di apertura.</p>
      </div>

      <Footer />
    </div>
  );
}

function ActionTile({ icon, label, value, accent, primary, small }) {
  return (
    <div style={{
      ...chromeBorder(),
      borderRadius: 12, padding: '14px 14px',
      gridColumn: small ? 'span 1' : 'span 1',
      display: 'flex', flexDirection: 'column', gap: 10,
      background: primary ? `linear-gradient(180deg, rgba(200,32,44,0.18) 0%, ${PR_COLORS.surface} 80%)` : undefined,
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 8,
        background: primary ? accent : PR_COLORS.bg,
        border: primary ? 'none' : `1px solid ${PR_COLORS.line}`,
        color: primary ? '#fff' : accent,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{icon}</div>
      <div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 9.5,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: PR_COLORS.textMute, marginBottom: 4,
        }}>{label}</div>
        <div style={{
          fontFamily: 'Manrope, system-ui', fontWeight: 700,
          fontSize: small ? 12 : 14, color: PR_COLORS.text,
          letterSpacing: '-0.01em', wordBreak: 'break-word',
        }}>{value}</div>
      </div>
    </div>
  );
}

function Field({ label, placeholder, multi, mono }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 9.5,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: PR_COLORS.textMute,
      }}>{label}</span>
      <div style={{
        background: PR_COLORS.surface, borderRadius: 10,
        border: `1px solid ${PR_COLORS.line}`,
        padding: multi ? '12px 14px' : '14px 14px',
        minHeight: multi ? 80 : undefined,
        fontFamily: mono ? 'JetBrains Mono, monospace' : 'Inter Tight, system-ui',
        fontSize: 13.5, color: PR_COLORS.textMute,
      }}>{placeholder}</div>
    </label>
  );
}

function FakeMap({ accent }) {
  // A stylized monochrome map mockup — grid + roads + pin
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `linear-gradient(180deg, #14141a 0%, #0e0e13 100%)`,
    }}>
      {/* grid */}
      <svg width="100%" height="100%" viewBox="0 0 360 220" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <pattern id="g" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="#1f1f27" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="360" height="220" fill="url(#g)"/>
        {/* roads */}
        <path d="M0 80 L 360 60" stroke="#33333d" strokeWidth="14" fill="none"/>
        <path d="M0 80 L 360 60" stroke="#23232b" strokeWidth="10" fill="none"/>
        <path d="M120 0 L 140 220" stroke="#33333d" strokeWidth="10" fill="none"/>
        <path d="M120 0 L 140 220" stroke="#23232b" strokeWidth="6" fill="none"/>
        <path d="M0 160 Q 180 130 360 180" stroke="#2a2a33" strokeWidth="8" fill="none"/>
        {/* parks/blocks */}
        <rect x="180" y="100" width="80" height="50" fill="#161620" rx="4"/>
        <rect x="40" y="130" width="60" height="40" fill="#161620" rx="4"/>
      </svg>
      {/* pin */}
      <div style={{
        position: 'absolute', left: '52%', top: '38%',
        transform: 'translate(-50%, -100%)',
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50% 50% 50% 0',
          transform: 'rotate(-45deg)',
          background: accent,
          boxShadow: `0 0 24px ${accent}, 0 4px 10px rgba(0,0,0,0.6)`,
          border: '2px solid #fff',
        }} />
        <div style={{
          position: 'absolute', left: '50%', top: 6,
          width: 10, height: 10, borderRadius: '50%',
          background: '#fff',
          transform: 'translateX(-50%) rotate(0deg)',
        }} />
      </div>
    </div>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────

function Footer() {
  return (
    <>
      <ChromeRule style={{ margin: '0 18px 22px' }}/>
      <div style={{ padding: '0 18px 12px' }}>
        <div style={{ marginBottom: 14 }}>
          <PRLogoFull width={150}/>
        </div>
        <div style={{
          fontFamily: 'Inter Tight, system-ui', fontSize: 11.5,
          color: PR_COLORS.textMute, lineHeight: 1.6,
        }}>
          Ricambi auto e moto · Aprilia (LT)<br/>
          P.IVA — · © 2026
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          <IconButton>{Icons.insta}</IconButton>
          <IconButton>{Icons.fb}</IconButton>
          <IconButton>{Icons.wa}</IconButton>
        </div>
      </div>
    </>
  );
}

Object.assign(window, {
  HomeScreen, AboutScreen, ContactScreen, PR_COLORS, PRLogoFull, PRLogoMark,
});
