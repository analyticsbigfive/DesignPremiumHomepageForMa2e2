// ─── HOME PAGE v2 — Editorial, Basel Area-inspired ────────────────────────────

// ─── TEXT LINK CTA ────────────────────────────────────────────────────────────
const TextLink = ({ children, color = C.green, onClick }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <button onClick={onClick} style={{
      background: 'none', border: 'none', cursor: 'pointer', padding: 0,
      fontFamily: 'Inter, sans-serif', fontSize: 14, color, fontWeight: 500,
      display: 'inline-flex', alignItems: 'center', gap: hov ? 10 : 7,
      transition: 'gap 0.18s', letterSpacing: '-0.1px',
    }}
    onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {children} <I.ArrowLong c={color} s={18}/>
    </button>
  );
};

// ─── IMAGE PLACEHOLDER ────────────────────────────────────────────────────────
const ImgPlaceholder = ({ label, aspect = '4/3', bg = '#e8e8e0', textColor = '#aaa' }) => (
  <div style={{ aspectRatio: aspect, background: bg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%', position: 'relative', overflow: 'hidden' }}>
    {/* Subtle diagonal lines */}
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4 }} preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={`stripe-${label}`} width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="20" stroke={textColor} strokeWidth="0.5" strokeOpacity="0.4"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#stripe-${label})`}/>
    </svg>
    <div style={{ fontSize: 11, color: textColor, fontFamily: 'monospace', textAlign: 'center', lineHeight: 1.6, position: 'relative', padding: '0 16px' }}>{label}</div>
  </div>
);

// ─── HERO ─────────────────────────────────────────────────────────────────────
const HomeHero = ({ heroStyle, accent, navigate }) => {
  const bg = heroStyle === 'flat' ? C.dark
    : heroStyle === 'dark' ? '#001208'
    : C.dark;

  return (
    <section style={{ background: bg, minHeight: '88vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', overflow: 'hidden' }}>
      {/* Full-bleed image placeholder */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <ImgPlaceholder label={"Photo institutionnelle\n(agents au travail ou bâtiment MA2E)"} aspect="auto" bg="#0a2a14" textColor="rgba(255,255,255,0.15)"/>
      </div>
      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,61,31,0.95) 0%, rgba(0,61,31,0.65) 50%, rgba(0,61,31,0.15) 100%)' }}/>
      {/* Subtle grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 80px)', pointerEvents: 'none' }}/>

      {/* Content */}
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 48px 80px', width: '100%' }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
          <div style={{ width: 6, height: 6, background: accent, borderRadius: '50%' }}/>
          <span style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
            Agréée BCEAO · SODECI · CIE · GS2E · CIPREL
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: 68, fontWeight: 500, color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, maxWidth: 780, marginBottom: 28, textWrap: 'pretty' }}>
          L'épargne qui fait grandir vos{' '}
          <em style={{ fontStyle: 'normal', color: accent }}>projets de vie.</em>
        </h1>

        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, maxWidth: 520, marginBottom: 44 }}>
          La MA2E accompagne les agents de l'eau et de l'électricité depuis 2009 — épargne, crédit, immobilier.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', marginBottom: 64 }}>
          <button onClick={() => navigate('services')} style={{
            background: accent, color: '#fff', border: 'none', padding: '14px 30px',
            fontSize: 14, fontFamily: 'Inter, sans-serif', cursor: 'pointer', fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: 8, transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#e8830a'}
          onMouseLeave={e => e.currentTarget.style.background = accent}>
            Nos services <I.ArrowLong c="#fff" s={18}/>
          </button>
          <button onClick={() => navigate('about')} style={{
            background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
            fontSize: 14, color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: 8,
            transition: 'color 0.15s', padding: 0,
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}>
            Découvrir la mutuelle <I.ArrowLong c="currentColor" s={18}/>
          </button>
        </div>

        {/* Stats bar */}
        <div style={{ display: 'flex', gap: 0, borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 36 }}>
          {[
            { v: '7 335', l: 'Adhérents actifs' },
            { v: '2,4 Mds', l: 'FCFA crédits accordés' },
            { v: '14 ans', l: "d'activité" },
            { v: '9', l: 'Produits financiers' },
          ].map((s, i) => (
            <div key={s.l} style={{ flex: 1, paddingRight: 32, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none', marginRight: i < 3 ? 32 : 0 }}>
              <div style={{ fontSize: 30, fontWeight: 500, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 6, letterSpacing: '0.2px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── SERVICES SECTION ─────────────────────────────────────────────────────────
const HomeServices = ({ accent, navigate }) => {
  const cards = [
    { title: 'Épargne rémunérée', label: 'Épargne', desc: 'Taux compétitifs, gestion transparente. Trois formules pour constituer votre capital selon votre horizon.', img: 'Photo : conseillère MA2E\nauprès d\'un adhérent', hash: 'epargne', color: C.green },
    { title: 'Crédit à taux réduit', label: 'Crédit', desc: 'Financement rapide et accessible pour vos projets personnels, professionnels ou scolaires.', img: 'Photo : adhérent\ndevant sa nouvelle maison', hash: 'credit', color: accent, featured: true },
    { title: 'Projet immobilier', label: 'Immobilier', desc: 'Accédez à la propriété via nos programmes de logements à prix maîtrisés — résidence AKANDJÉ.', img: 'Photo : résidence AKANDJÉ\nBingerville', hash: 'immobilier', color: accent },
  ];

  return (
    <section style={{ background: '#fff', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, paddingBottom: 24, borderBottom: '1px solid #f0f0e8' }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: accent, marginBottom: 14, fontWeight: 500 }}>Nos solutions</div>
            <h2 style={{ fontSize: 40, fontWeight: 500, color: C.dark, letterSpacing: '-0.5px', lineHeight: 1.15 }}>
              Une offre complète<br/>
              <span style={{ color: C.green }}>à chaque étape de votre vie.</span>
            </h2>
          </div>
          <TextLink color={C.green} onClick={() => navigate('services')}>Voir tous les services</TextLink>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2 }}>
          {cards.map((card, i) => (
            <div key={card.title} onClick={() => navigate('services', card.hash)} style={{
              background: card.featured ? C.dark : '#fff',
              cursor: 'pointer', position: 'relative', overflow: 'hidden',
              border: card.featured ? 'none' : '1px solid #f0f0e8',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
              {/* Image */}
              <div style={{ height: 220, overflow: 'hidden' }}>
                <ImgPlaceholder label={card.img} aspect="auto"
                  bg={card.featured ? '#0a2a14' : '#ede8e0'}
                  textColor={card.featured ? 'rgba(255,255,255,0.2)' : '#bbb'}/>
              </div>
              {/* Content */}
              <div style={{ padding: '28px 28px 32px' }}>
                <div style={{ fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: card.color, marginBottom: 12, fontWeight: 500 }}>{card.label}</div>
                <h3 style={{ fontSize: 20, fontWeight: 500, color: card.featured ? '#fff' : C.dark, letterSpacing: '-0.3px', marginBottom: 12, lineHeight: 1.3 }}>{card.title}</h3>
                <p style={{ fontSize: 13.5, color: card.featured ? 'rgba(255,255,255,0.55)' : C.gray, lineHeight: 1.65, marginBottom: 24 }}>{card.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: card.color, fontSize: 13, fontWeight: 500 }}>
                  En savoir plus <I.ArrowLong c={card.color} s={16}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── ABOUT STRIP ──────────────────────────────────────────────────────────────
const HomeAbout = ({ navigate }) => (
  <section style={{ background: C.cream }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 500 }}>
      {/* Image side */}
      <div style={{ background: '#d4d0c8', position: 'relative', minHeight: 460 }}>
        <ImgPlaceholder label={"Photo : Direction générale\nou bâtiment siège MA2E"} aspect="auto" bg="#d0ccc4" textColor="#aaa"/>
        <div style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
          <div style={{ background: C.green, display: 'inline-flex', padding: '10px 18px', gap: 10, alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: '#fff', letterSpacing: '0.5px' }}>Agréée BCEAO depuis 2011</span>
          </div>
        </div>
      </div>
      {/* Text side */}
      <div style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: C.orange, marginBottom: 20, fontWeight: 500 }}>La mutuelle</div>
        <h2 style={{ fontSize: 36, fontWeight: 500, color: C.dark, letterSpacing: '-0.5px', lineHeight: 1.2, marginBottom: 24, textWrap: 'pretty' }}>
          15 ans au service des agents de l'eau et de l'électricité.
        </h2>
        <p style={{ fontSize: 15, color: C.gray, lineHeight: 1.75, marginBottom: 16 }}>
          Initiée par le Président Marcel Zadi Kessy, la MA2E a été créée en septembre 2006 et a obtenu son agrément d'exercice en août 2009. Agréée par la BCEAO, elle réunit aujourd'hui 7 335 adhérents actifs au sein de SODECI, CIE, GS2E et CIPREL.
        </p>
        <p style={{ fontSize: 15, color: C.gray, lineHeight: 1.75, marginBottom: 40 }}>
          Notre modèle mutualiste place l'adhérent au cœur de toutes les décisions — chaque sociétaire est à la fois bénéficiaire et acteur de la gouvernance.
        </p>
        <TextLink color={C.green} onClick={() => navigate('about')}>Notre histoire</TextLink>
      </div>
    </div>
  </section>
);

// ─── PLATFORM SECTION ─────────────────────────────────────────────────────────
const HomePlatform = ({ accent, navigate }) => (
  <section style={{ background: C.dark, padding: '96px 48px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: accent, marginBottom: 20, fontWeight: 500 }}>Plateforme E-MA2E</div>
        <h2 style={{ fontSize: 42, fontWeight: 500, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.15, marginBottom: 24 }}>
          Gérez votre compte 24h/24, où que vous soyez.
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 40 }}>
          Relevés en ligne, dépôts, demandes de crédit, attestations — tout depuis un seul espace sécurisé. Disponible sur web et mobile.
        </p>
        <div style={{ display: 'flex', gap: 20 }}>
          <button style={{ background: C.green, color: '#fff', border: 'none', padding: '13px 26px', fontSize: 14, fontFamily: 'Inter, sans-serif', cursor: 'pointer', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8, transition: 'background 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#009045'}
            onMouseLeave={e => e.currentTarget.style.background = C.green}>
            Se connecter <I.ArrowLong c="#fff" s={18}/>
          </button>
          <button style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', padding: '13px 26px', fontSize: 14, fontFamily: 'Inter, sans-serif', cursor: 'pointer', transition: 'border-color 0.15s, color 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
            Créer un compte
          </button>
        </div>
      </div>

      {/* Feature list */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,0.06)' }}>
        {[
          { icon: <I.Document s={16} c={C.green}/>, title: 'Relevés en ligne', desc: 'Consultez et téléchargez vos relevés à tout moment.' },
          { icon: <I.Smartphone s={16} c={accent}/>, title: 'Mon espace', desc: 'Accédez à votre profil, soldes et historiques.' },
          { icon: <I.Zap s={16} c={accent}/>, title: 'Dépôt express', desc: 'Alimentez votre épargne en quelques secondes.' },
          { icon: <I.Shield s={16} c={C.green}/>, title: 'Demandes rapides', desc: 'Soumettez vos dossiers directement en ligne.' },
        ].map((f, i) => (
          <div key={f.title} style={{ padding: '32px', background: 'rgba(255,255,255,0.04)', transition: 'background 0.15s', cursor: 'default' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}>
            <div style={{ marginBottom: 14 }}>{f.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#fff', marginBottom: 8 }}>{f.title}</div>
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── NEWS STRIP ───────────────────────────────────────────────────────────────
const HomeNews = ({ accent, navigate }) => {
  const items = [
    { cat: 'Plateforme', date: '18 avril 2026', title: 'Lancement officiel de la nouvelle plateforme E-MA2E' },
    { cat: 'Immobilier', date: '5 mars 2026', title: 'Ouverture de la 2ᵉ tranche AKANDJÉ — Bingerville' },
    { cat: 'Gouvernance', date: '20 février 2026', title: "Assemblée générale ordinaire 2025 — résultats" },
  ];
  const catC = { Plateforme: C.green, Immobilier: '#7c5cbf', Gouvernance: C.dark };

  return (
    <section style={{ background: '#fff', padding: '96px 48px', borderTop: '1px solid #f0f0e8' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: accent, marginBottom: 14, fontWeight: 500 }}>Actualités</div>
            <h2 style={{ fontSize: 36, fontWeight: 500, color: C.dark, letterSpacing: '-0.5px' }}>Dernières nouvelles.</h2>
          </div>
          <TextLink color={C.green} onClick={() => navigate('news')}>Toutes les actualités</TextLink>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {items.map((n, i) => (
            <div key={n.title} style={{ cursor: 'pointer', background: i === 0 ? C.cream : '#fff', border: '1px solid #f0f0e8', transition: 'transform 0.15s' }}
              onClick={() => navigate('news')}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
              <div style={{ height: 180, background: i === 0 ? '#d8d4cc' : '#e8e8e0' }}>
                <ImgPlaceholder label={`Photo actualité\n${n.cat}`} aspect="auto" bg={i === 0 ? '#d0ccc4' : '#e0dcd4'} textColor="#bbb"/>
              </div>
              <div style={{ padding: '24px 28px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: catC[n.cat] || '#888', fontWeight: 500 }}>{n.cat}</span>
                  <span style={{ fontSize: 11.5, color: '#ccc' }}>{n.date}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 500, color: C.dark, lineHeight: 1.4, letterSpacing: '-0.2px' }}>{n.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── PARTNERS STRIP ───────────────────────────────────────────────────────────
const PartnersStrip = () => (
  <section style={{ background: C.cream, borderTop: '1px solid #e8e8e0', padding: '28px 48px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
      <span style={{ fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: '#bbb', flexShrink: 0 }}>Partenaires</span>
      {['BCEAO', 'SODECI', 'CIE', 'GS2E', 'CIPREL', 'UEMOA'].map(p => (
        <span key={p} style={{ fontSize: 13, fontWeight: 500, color: '#c0bdb5', letterSpacing: '1px' }}>{p}</span>
      ))}
    </div>
  </section>
);

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
const HomePage = ({ tweaks, navigate }) => (
  <>
    <HomeHero heroStyle={tweaks.heroStyle} accent={tweaks.accent || C.orange} navigate={navigate} />
    <PartnersStrip />
    <HomeServices accent={tweaks.accent || C.orange} navigate={navigate} />
    <HomeAbout navigate={navigate} />
    <HomePlatform accent={tweaks.accent || C.orange} navigate={navigate} />
    <HomeNews accent={tweaks.accent || C.orange} navigate={navigate} />
  </>
);

Object.assign(window, { HomePage });
