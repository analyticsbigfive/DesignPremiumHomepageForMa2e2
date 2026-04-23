// ─── SHARED v2: Editorial nav, Logo, Icons, Footer ───────────────────────────

const C = {
  green: '#00A651', dark: '#003d1f', mid: '#00703a',
  orange: '#F7941D', cream: '#f5f5f0', gray: '#666', text: '#1a1a1a',
};

// ─── ICONS (unchanged) ────────────────────────────────────────────────────────
const I = {
  Arrow: ({ s=14, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 7h10M8 3l4 4-4 4"/>
    </svg>
  ),
  ArrowLong: ({ s=20, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 20 12" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 6h18M13 1l6 5-6 5"/>
    </svg>
  ),
  ChevDown: ({ s=11, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 12 12" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2,4 6,8 10,4"/>
    </svg>
  ),
  ChevRight: ({ s=12, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 12 12" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4,2 8,6 4,10"/>
    </svg>
  ),
  TrendUp: ({ s=18, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2,13 7,8 11,11 16,5"/><polyline points="11,5 16,5 16,10"/>
    </svg>
  ),
  Credit: ({ s=18, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="16" height="10" rx="1.5"/><line x1="1" y1="8" x2="17" y2="8"/><line x1="4" y1="12" x2="7" y2="12"/>
    </svg>
  ),
  Home: ({ s=18, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8L9 2l7 6v8a1 1 0 01-1 1H3a1 1 0 01-1-1z"/><path d="M6 17v-6h6v6"/>
    </svg>
  ),
  Shield: ({ s=16, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1L2 4v4c0 3.3 2.5 6 6 7 3.5-1 6-3.7 6-7V4z"/>
    </svg>
  ),
  Document: ({ s=16, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 1H3a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V6z"/><path d="M9 1v5h5"/>
      <line x1="4" y1="10" x2="12" y2="10"/><line x1="4" y1="13" x2="8" y2="13"/>
    </svg>
  ),
  Download: ({ s=14, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 2v7M4 6l3 3 3-3"/><line x1="2" y1="12" x2="12" y2="12"/>
    </svg>
  ),
  Phone: ({ s=16, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2h3l1.5 3-1.5 1.5c.8 1.6 2 2.8 3.5 3.5L11 8.5 14 10v3a1 1 0 01-1 1C5.6 13.5 2.5 6.4 2 3a1 1 0 011-1z"/>
    </svg>
  ),
  Mail: ({ s=16, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="14" height="10" rx="1.5"/><polyline points="1,3 8,10 15,3"/>
    </svg>
  ),
  Pin: ({ s=16, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1a4 4 0 014 4c0 3-4 9-4 9S4 8 4 5a4 4 0 014-4z"/><circle cx="8" cy="5" r="1.5"/>
    </svg>
  ),
  Users: ({ s=18, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="6" r="3"/><path d="M1 16c0-3.3 2.7-5 6-5s6 1.7 6 5"/>
      <circle cx="14" cy="6" r="2"/><path d="M14 11c1.5 0 3 .8 3 3"/>
    </svg>
  ),
  Globe: ({ s=16, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6"/><path d="M2 8h12M8 2c-2 2-3 4-3 6s1 4 3 6M8 2c2 2 3 4 3 6s-1 4-3 6"/>
    </svg>
  ),
  Clock: ({ s=14, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="7" r="5.5"/><path d="M7 4v3.5l2 1.5"/>
    </svg>
  ),
  Plus: ({ s=14, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round">
      <line x1="7" y1="2" x2="7" y2="12"/><line x1="2" y1="7" x2="12" y2="7"/>
    </svg>
  ),
  Minus: ({ s=14, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round">
      <line x1="2" y1="7" x2="12" y2="7"/>
    </svg>
  ),
  Check: ({ s=14, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2,7 5,10 12,3"/>
    </svg>
  ),
  Zap: ({ s=16, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9,1 4,9 8,9 7,15 12,7 8,7"/>
    </svg>
  ),
  Calendar: ({ s=16, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="14" height="11" rx="1.5"/><line x1="1" y1="7" x2="15" y2="7"/>
      <line x1="5" y1="1" x2="5" y2="5"/><line x1="11" y1="1" x2="11" y2="5"/>
    </svg>
  ),
  External: ({ s=13, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 13 13" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 2H2a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V8"/>
      <path d="M8 1h4v4"/><line x1="12" y1="1" x2="6" y2="7"/>
    </svg>
  ),
  Smartphone: ({ s=16, c='currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="1" width="8" height="14" rx="1.5"/><circle cx="8" cy="13" r="0.5" fill={c}/>
    </svg>
  ),
};

// ─── LOGO — matches real MA2E brand mark ──────────────────────────────────────
const Logo = ({ dark = false, size = 'md' }) => {
  const scale = size === 'lg' ? 1.4 : size === 'sm' ? 0.8 : 1;
  const w = Math.round(72 * scale), h = Math.round(40 * scale), fs = Math.round(22 * scale);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flexShrink: 0 }}>
      {/* Green badge with MA2E wordmark */}
      <div style={{
        width: w, height: h, borderRadius: 4, background: C.green,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, padding: '0 6px',
      }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: fs, color: '#fff', letterSpacing: '-1px', lineHeight: 1 }}>MA</span>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: fs, color: C.orange, letterSpacing: '-1px', lineHeight: 1 }}>2</span>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: fs, color: '#fff', letterSpacing: '-1px', lineHeight: 1 }}>E</span>
      </div>
      {/* Tagline */}
      <div style={{ fontSize: Math.round(7 * scale), letterSpacing: '0.3px', color: dark ? 'rgba(255,255,255,0.45)' : C.green, fontStyle: 'italic', lineHeight: 1, paddingLeft: 1 }}>
        Mutuelle des Agents de l'Eau et de l'Electricité
      </div>
    </div>
  );
};

// ─── PAGE HERO (inner pages) — editorial style ────────────────────────────────
const PageHero = ({ eyebrow, title, accent = C.orange, breadcrumb = [] }) => (
  <div style={{ background: C.dark, padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }}>
    {/* Subtle grid texture */}
    <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px)', pointerEvents: 'none' }}/>
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
      {breadcrumb.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
          {breadcrumb.map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10 }}>—</span>}
              <span style={{ fontSize: 11, letterSpacing: '0.5px', color: i === breadcrumb.length - 1 ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.3)' }}>{item}</span>
            </React.Fragment>
          ))}
        </div>
      )}
      {eyebrow && (
        <div style={{ fontSize: 11, letterSpacing: '2.5px', textTransform: 'uppercase', color: accent, marginBottom: 16, fontWeight: 500 }}>{eyebrow}</div>
      )}
      <h1 style={{ fontSize: 40, fontWeight: 500, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.2, maxWidth: 680, textWrap: 'pretty' }}>{title}</h1>
    </div>
  </div>
);

// ─── NAV ─────────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Accueil', page: 'home' },
  { label: 'La mutuelle', page: 'about', sub: [
    { label: 'Notre histoire', page: 'about', hash: 'histoire' },
    { label: 'Missions & Vision', page: 'about', hash: 'missions' },
    { label: 'Gouvernance', page: 'about', hash: 'gouvernance' },
    { label: 'Équipe dirigeante', page: 'about', hash: 'equipe' },
  ]},
  { label: 'Nos services', page: 'services', sub: [
    { label: 'Épargne rémunérée', page: 'services', hash: 'epargne' },
    { label: 'Crédit à taux réduit', page: 'services', hash: 'credit' },
    { label: 'Projet immobilier', page: 'services', hash: 'immobilier' },
    { label: 'Plateforme E-MA2E', page: 'services', hash: 'ema2e' },
  ]},
  { label: 'Actualités', page: 'news' },
  { label: 'FAQ', page: 'faq' },
  { label: 'Contact', page: 'contact' },
];

const Nav = ({ currentPage, navigate }) => {
  const [openDD, setOpenDD] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const go = (page, hash) => { navigate(page, hash); setOpenDD(null); };

  return (
    <nav style={{
      background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
      borderBottom: `1px solid ${scrolled ? '#e8e8e0' : '#f0f0e8'}`,
      position: 'sticky', top: 0, zIndex: 200,
      backdropFilter: 'blur(8px)',
      transition: 'border-color 0.2s, background 0.2s',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', height: 68, display: 'flex', alignItems: 'center', gap: 0 }}>
        <button onClick={() => go('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginRight: 48, flexShrink: 0 }}>
          <Logo />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', flex: 1, gap: 0 }}>
          {NAV_ITEMS.map(item => (
            <div key={item.label} style={{ position: 'relative' }}
              onMouseEnter={() => item.sub && setOpenDD(item.label)}
              onMouseLeave={() => setOpenDD(null)}>
              <button onClick={() => go(item.page)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '8px 14px', fontSize: 13.5, fontFamily: 'Inter, sans-serif',
                color: currentPage === item.page ? C.dark : '#555',
                fontWeight: currentPage === item.page ? 500 : 400,
                display: 'flex', alignItems: 'center', gap: 4,
                position: 'relative', whiteSpace: 'nowrap',
                transition: 'color 0.12s',
              }}
              onMouseEnter={e => { if (currentPage !== item.page) e.currentTarget.style.color = C.dark; }}
              onMouseLeave={e => { if (currentPage !== item.page) e.currentTarget.style.color = '#555'; }}
              >
                {item.label}
                {item.sub && <I.ChevDown c={currentPage === item.page ? C.dark : '#bbb'}/>}
                {/* Active indicator */}
                {currentPage === item.page && (
                  <span style={{ position: 'absolute', bottom: -1, left: 14, right: 14, height: 2, background: C.green, borderRadius: 1 }}/>
                )}
              </button>

              {item.sub && openDD === item.label && (
                <div style={{ position: 'absolute', top: 'calc(100% + 1px)', left: 0, background: '#fff', border: '1px solid #e8e8e0', borderTop: `2px solid ${C.green}`, minWidth: 210, zIndex: 300, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}>
                  {item.sub.map(s => (
                    <button key={s.label} onClick={() => go(s.page, s.hash)} style={{
                      display: 'flex', alignItems: 'center', gap: 8, width: '100%', textAlign: 'left',
                      padding: '11px 18px', background: 'none', border: 'none', cursor: 'pointer',
                      fontSize: 13, fontFamily: 'Inter, sans-serif', color: '#444',
                      borderBottom: '1px solid #f5f5f0', transition: 'background 0.1s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#f8f8f4'; e.currentTarget.style.color = C.dark; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#444'; }}
                    >
                      <I.ChevRight s={10} c="#ccc"/> {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={() => go('documents')} style={{
            background: 'none', border: 'none', padding: '6px 12px', fontSize: 13, fontFamily: 'Inter, sans-serif',
            cursor: 'pointer', color: '#666', display: 'flex', alignItems: 'center', gap: 5, transition: 'color 0.12s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = C.dark}
          onMouseLeave={e => e.currentTarget.style.color = '#666'}>
            <I.Download s={13} c="currentColor"/> Documents
          </button>
          <div style={{ width: 1, height: 18, background: '#e0e0d8' }}/>
          <button style={{
            background: C.orange, color: '#fff', border: 'none',
            padding: '9px 20px', fontSize: 13, fontFamily: 'Inter, sans-serif', cursor: 'pointer',
            fontWeight: 500, display: 'flex', alignItems: 'center', gap: 7, letterSpacing: '-0.1px',
            transition: 'background 0.12s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#e8830a'}
          onMouseLeave={e => e.currentTarget.style.background = C.orange}>
            Espace adhérent <I.Arrow c="#fff" s={13}/>
          </button>
        </div>
      </div>
    </nav>
  );
};

// ─── FLASH BAR ────────────────────────────────────────────────────────────────
const FlashBar = () => {
  const [v, setV] = React.useState(true);
  if (!v) return null;
  return (
    <div style={{ background: C.orange, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, position: 'relative', zIndex: 201 }}>
      <span style={{ background: 'rgba(255,255,255,0.25)', color: '#fff', fontSize: 9, fontWeight: 500, padding: '2px 8px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Flash info</span>
      <span style={{ color: '#fff', fontSize: 13 }}>Depuis le 01/12/2022, ouverture officielle de la plateforme E-MA2E — Coût du service : 500 F/mois</span>
      <button onClick={() => setV(false)} style={{ position: 'absolute', right: 20, background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: 18, lineHeight: 1, padding: 0 }}>×</button>
    </div>
  );
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const Footer = ({ navigate }) => {
  const go = (page) => { navigate(page); window.scrollTo(0, 0); };
  return (
    <footer style={{ background: C.dark }}>
      {/* Top CTA band */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '52px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: C.orange, marginBottom: 14 }}>Rejoindre la MA2E</div>
            <div style={{ fontSize: 30, fontWeight: 500, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
              Vous êtes agent SODECI, CIE, GS2E ou CIPREL ?<br/>
              <span style={{ color: 'rgba(255,255,255,0.45)' }}>Adhésion ouverte — rejoignez vos 7 335 collègues.</span>
            </div>
          </div>
          <button onClick={() => go('contact')} style={{
            background: C.orange, color: '#fff', border: 'none', padding: '14px 28px', fontSize: 14,
            fontFamily: 'Inter, sans-serif', cursor: 'pointer', fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, transition: 'background 0.12s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#e8830a'}
          onMouseLeave={e => e.currentTarget.style.background = C.orange}>
            Devenir adhérent <I.ArrowLong c="#fff" s={18}/>
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ padding: '52px 48px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
            <div>
              <Logo dark />
              <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 12.5, lineHeight: 1.75, marginTop: 18 }}>
                Institution de microfinance agréée par la BCEAO. Au service des agents de l'eau et de l'électricité depuis 2009.
              </p>
            </div>
            {[
              { title: 'La mutuelle', links: [['Notre histoire', 'about'], ['Gouvernance', 'about'], ['Équipe', 'about'], ['Rapport annuel', 'documents']] },
              { title: 'Services', links: [['Épargne', 'services'], ['Crédit', 'services'], ['Immobilier', 'services'], ['E-MA2E', 'services']] },
              { title: 'Infos pratiques', links: [['Actualités', 'news'], ['FAQ', 'faq'], ['Documents', 'documents'], ['Liens utiles', 'links']] },
              { title: 'Légal', links: [['Mentions légales', 'legal'], ['CGU', 'legal'], ['Confidentialité', 'legal'], ['Contact', 'contact']] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 18 }}>{col.title}</div>
                {col.links.map(([label, page]) => (
                  <div key={label} onClick={() => go(page)} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginBottom: 10, cursor: 'pointer', transition: 'color 0.12s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
                    {label}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>© 2026 MA2E — Tous droits réservés</span>
            <div style={{ display: 'flex', gap: 24 }}>
              {[['Mentions légales', 'legal'], ['CGU', 'legal'], ['Confidentialité', 'legal']].map(([l, p]) => (
                <span key={l} onClick={() => go(p)} style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12, cursor: 'pointer', transition: 'color 0.12s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}>
                  {l}
                </span>
              ))}
            </div>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>Agréée BCEAO · N° 2009/CI/ABJ/003</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { C, I, Logo, PageHero, Nav, FlashBar, Footer, NAV_ITEMS });
