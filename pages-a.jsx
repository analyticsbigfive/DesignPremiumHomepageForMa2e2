// ─── PAGES A: La Mutuelle, Services, Actualités, FAQ ─────────────────────────

// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────
const AboutPage = ({ accent }) => {
  const team = [
    { name: 'Ahmadou Bakayoko', role: 'Président du Conseil d\'Administration', initial: 'AB' },
    { name: 'Gouedan Franck Olivier', role: 'Directeur Général', initial: 'GF' },
    { name: 'Koné Madoussou Sombo', role: 'Directeur Administratif & Financier', initial: 'KM' },
    { name: 'Touré Adama', role: 'Responsable Système d\'Information', initial: 'TA' },
    { name: 'N\'Guessan Adjoua', role: 'Responsable Clientèle', initial: 'NA' },
    { name: 'Diabaté Moussa', role: 'Responsable Crédit', initial: 'DM' },
  ];
  const milestones = [
    { year: 'Sept. 2006', text: 'Création de la MA2E à l\'initiative du Président Marcel Zadi Kessy, avec les agents de SODECI et CIE comme membres fondateurs.' },
    { year: 'Août 2009', text: 'Obtention de l\'agrément d\'exercice auprès des autorités de tutelle. La MA2E devient officiellement une institution de microfinance reconnue.' },
    { year: 'Janv. 2010', text: 'Démarrage officiel des activités financières — lancement des premiers produits d\'épargne et de crédit.' },
    { year: '2012', text: 'Extension aux agents de GS2E et CIPREL. Franchissement du cap des 1 000 adhérents actifs.' },
    { year: '2017', text: 'Lancement du programme immobilier AKANDJÉ à Bingerville — villas et duplex à prix maîtrisés.' },
    { year: 'Déc. 2022', text: 'Ouverture officielle de la plateforme numérique E-MA2E. Accès en ligne aux services financiers pour tous les adhérents.' },
    { year: '2024', text: '7 335 adhérents actifs. 9 produits financiers. 2,4 milliards FCFA de crédits accordés.' },
  ];
  const organes = [
    { title: 'Assemblée générale', desc: 'Organe souverain réunissant l\'ensemble des adhérents. Elle se tient annuellement pour approuver les comptes et définir les orientations stratégiques.' },
    { title: 'Conseil d\'administration', desc: 'Composé de 9 membres élus, il assure la gouvernance et le contrôle de la direction générale sur une durée de 3 ans renouvelables.' },
    { title: 'Comité de surveillance', desc: 'Instance indépendante de 3 membres chargée du contrôle interne, de l\'audit et de la vérification de la conformité réglementaire.' },
    { title: 'Direction générale', desc: 'Équipe exécutive responsable de la gestion opérationnelle, de l\'implémentation de la stratégie et du reporting aux organes de gouvernance.' },
  ];

  return (
    <>
      <PageHero eyebrow="La mutuelle" title="15 ans au service des agents de l'eau et de l'électricité." breadcrumb={['Accueil', 'La mutuelle']} />

      {/* Missions & Vision */}
      <section id="missions" style={{ background: '#fff', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: accent, marginBottom: 14 }}>Missions & Vision</div>
            <h2 style={{ fontSize: 30, fontWeight: 500, color: C.dark, letterSpacing: '-0.5px', lineHeight: 1.3, marginBottom: 20 }}>
              Construire la sécurité financière de nos adhérents.
            </h2>
            <p style={{ fontSize: 14.5, color: C.gray, lineHeight: 1.75, marginBottom: 28 }}>
              La MA2E a pour mission de mobiliser l'épargne de ses membres et de leur offrir des services financiers adaptés, accessibles et pérennes. Notre vision est de devenir la référence de la microfinance institutionnelle en Côte d'Ivoire.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                ['Accessibilité', 'Des services financiers à portée de tous les adhérents.'],
                ['Transparence', 'Une gestion rigoureuse et des comptes publiés annuellement.'],
                ['Proximité', 'Des équipes disponibles sur les sites SODECI, CIE et GS2E.'],
                ['Performance', 'Des taux compétitifs et un encours en croissance constante.'],
              ].map(([t, d]) => (
                <div key={t} style={{ padding: '16px', background: '#f5f5f0', borderRadius: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#e8f7ee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <I.Check s={11} c={C.green}/>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 500, color: C.dark }}>{t}</span>
                  </div>
                  <p style={{ fontSize: 12, color: C.gray, lineHeight: 1.55 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Stats panel */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { v: '7 335', l: 'Adhérents actifs', c: C.green },
              { v: '2,4 Mds', l: 'FCFA crédits accordés', c: accent },
              { v: '14 ans', l: "d'activité", c: C.dark },
              { v: '9', l: 'Produits financiers', c: C.mid },
            ].map(s => (
              <div key={s.l} style={{ background: '#f5f5f0', borderRadius: 8, padding: '28px 24px', borderTop: `3px solid ${s.c}` }}>
                <div style={{ fontSize: 28, fontWeight: 500, color: C.dark, letterSpacing: '-0.5px', marginBottom: 6 }}>{s.v}</div>
                <div style={{ fontSize: 12.5, color: C.gray }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section id="histoire" style={{ background: '#f5f5f0', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: accent, marginBottom: 12 }}>Notre histoire</div>
            <h2 style={{ fontSize: 30, fontWeight: 500, color: C.dark, letterSpacing: '-0.5px' }}>Un parcours de croissance continue.</h2>
          </div>
          <div style={{ position: 'relative', paddingLeft: 32 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: '#ddd' }}/>
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: 'flex', gap: 28, marginBottom: i < milestones.length - 1 ? 36 : 0, position: 'relative' }}>
                <div style={{ position: 'absolute', left: -39, top: 4, width: 16, height: 16, borderRadius: '50%', background: i === milestones.length - 1 ? accent : C.green, border: '3px solid #f5f5f0', flexShrink: 0 }}/>
                <div style={{ minWidth: 52, fontSize: 13, fontWeight: 500, color: C.green, paddingTop: 2 }}>{m.year}</div>
                <div style={{ background: '#fff', borderRadius: 6, padding: '16px 20px', flex: 1 }}>
                  <p style={{ fontSize: 13.5, color: '#444', lineHeight: 1.65 }}>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gouvernance */}
      <section id="gouvernance" style={{ background: '#fff', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: accent, marginBottom: 12 }}>Gouvernance</div>
            <h2 style={{ fontSize: 30, fontWeight: 500, color: C.dark, letterSpacing: '-0.5px' }}>Des organes transparents et indépendants.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {organes.map((o, i) => (
              <div key={o.title} style={{ background: '#f5f5f0', borderRadius: 8, padding: '28px', borderLeft: `3px solid ${i % 2 === 0 ? C.green : accent}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 500, color: C.dark, marginBottom: 10 }}>{o.title}</h3>
                <p style={{ fontSize: 13.5, color: C.gray, lineHeight: 1.65 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section id="equipe" style={{ background: '#f5f5f0', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: accent, marginBottom: 12 }}>Équipe dirigeante</div>
            <h2 style={{ fontSize: 30, fontWeight: 500, color: C.dark, letterSpacing: '-0.5px' }}>Des professionnels engagés pour vous.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {team.map(p => (
              <div key={p.name} style={{ background: '#fff', borderRadius: 8, padding: '28px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: `linear-gradient(135deg, ${C.dark}, ${C.mid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>{p.initial}</span>
                </div>
                <div>
                  <div style={{ fontSize: 14.5, fontWeight: 500, color: C.dark, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 12.5, color: C.gray }}>{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ─── SERVICES PAGE ────────────────────────────────────────────────────────────
const ServicesPage = ({ accent, navigate }) => {
  const [activeTab, setActiveTab] = React.useState('epargne');

  const services = {
    epargne: {
      title: 'Épargne rémunérée',
      icon: <I.TrendUp s={24} c={C.green}/>,
      color: C.green,
      desc: 'Constituez votre épargne avec des taux attractifs et une gestion transparente. Cinq formules adaptées à chaque horizon d\'investissement.',
      products: [
        { name: 'Épargne express', rate: 'Disponible à vue', min: '10 000 FCFA', duration: 'Libre', desc: 'Épargne liquide, disponible à tout moment. Idéale pour une réserve de précaution.' },
        { name: 'Épargne ordinaire', rate: 'Taux préférentiel', min: '50 000 FCFA', duration: 'À terme', desc: 'Épargne à terme avec rémunération compétitive pour des projets planifiés.' },
        { name: 'Épargne logement', rate: 'Taux majoré', min: '100 000 FCFA', duration: '24 mois min.', desc: 'Préparez votre projet immobilier et accédez facilement au crédit habitat.' },
        { name: 'Dépôt à terme simple', rate: 'Taux négocié', min: '500 000 FCFA', duration: 'Durée fixe', desc: 'Placement à taux fixe sur une durée déterminée. Rendement garanti.' },
        { name: 'Dépôt à terme progressif', rate: 'Taux croissant', min: '50 000 FCFA', duration: 'Versements réguliers', desc: 'Épargnez progressivement avec des versements périodiques et un taux croissant.' },
      ],
    },
    credit: {
      title: 'Crédit à taux réduit',
      icon: <I.Credit s={24} c={accent}/>,
      color: accent,
      desc: 'Quatre produits de crédit adaptés à vos besoins : de l\'urgence à l\'immobilier. Déblocage rapide, taux préférentiels réservés aux adhérents en règle.',
      products: [
        { name: 'Crédit ordinaire', rate: 'Taux réduit', min: '100 000 FCFA', duration: 'Jusqu\'à 60 mois', desc: 'Pour tous vos projets : équipement, scolarité, santé, événements familiaux.' },
        { name: 'Crédit express', rate: 'Taux majoré', min: '50 000 FCFA', duration: 'Jusqu\'à 12 mois', desc: 'Déblocage en 48h pour les besoins urgents. Dossier simplifié, réponse rapide.' },
        { name: 'Crédit immobilier', rate: 'Taux préférentiel', min: '5 000 000 FCFA', duration: 'Jusqu\'à 180 mois', desc: 'Financement pour l\'acquisition d\'un logement dans la résidence AKANDJÉ.' },
        { name: 'Crédit immobilier différé', rate: 'Taux préférentiel', min: '5 000 000 FCFA', duration: 'Jusqu\'à 180 mois', desc: 'Crédit immobilier avec période de différé pendant la phase de construction.' },
      ],
    },
    immobilier: {
      title: 'Projet immobilier AKANDJÉ',
      icon: <I.Home s={24} c={accent}/>,
      color: accent,
      desc: 'Accédez à la propriété dans des conditions préférentielles. Résidence AKANDJÉ à Bingerville — logements de qualité à prix maîtrisés, réservés aux adhérents MA2E.',
      products: [
        { name: 'Villa 3 pièces', rate: 'Prix préférentiel', min: 'Apport 20%', duration: 'Crédit 180 mois', desc: 'Villa individuelle avec jardin. Résidence sécurisée à Bingerville.' },
        { name: 'Villa 4 pièces', rate: 'Prix préférentiel', min: 'Apport 20%', duration: 'Crédit 180 mois', desc: 'Grand volume, parking couvert, espace vert. Idéale pour les familles.' },
        { name: 'Villa 5 pièces', rate: 'Prix préférentiel', min: 'Apport 25%', duration: 'Crédit 180 mois', desc: 'Maison de standing, double salon, 4 chambres, grand garage.' },
        { name: 'Duplex 4–5 pièces', rate: 'Prix préférentiel', min: 'Apport 25%', duration: 'Crédit 180 mois', desc: 'Duplex avec terrasse. 2ᵉ tranche en cours de commercialisation.' },
      ],
    },
    ema2e: {
      title: 'Plateforme E-MA2E',
      icon: <I.Smartphone s={24} c={C.green}/>,
      color: C.green,
      desc: 'La plateforme numérique MA2E vous donne accès à tous vos services financiers depuis n\'importe quel appareil, 24h/24 et 7j/7. Sécurisée et ergonomique.',
      products: [
        { name: 'Espace adhérent', rate: 'Gratuit', min: 'Être adhérent MA2E', duration: 'Accès permanent', desc: 'Consultez vos soldes, historiques et documents depuis le web ou mobile.' },
        { name: 'Dépôt express', rate: 'Gratuit', min: '5 000 FCFA', duration: 'Instantané', desc: 'Alimentez votre compte d\'épargne en ligne via mobile money ou virement.' },
        { name: 'Demandes en ligne', rate: 'Gratuit', min: 'Être adhérent', duration: 'Réponse 48h', desc: 'Soumettez vos demandes de crédit, épargne ou documents directement depuis l\'appli.' },
        { name: 'Relevés & attestations', rate: 'Gratuit', min: 'Être adhérent', duration: 'Téléchargement immédiat', desc: 'Relevés de compte, attestation de solde et autres documents officiels en PDF.' },
      ],
    },
  };

  const tabs = [
    { key: 'epargne', label: 'Épargne' },
    { key: 'credit', label: 'Crédit' },
    { key: 'immobilier', label: 'Immobilier' },
    { key: 'ema2e', label: 'E-MA2E' },
  ];

  const s = services[activeTab];

  return (
    <>
      <PageHero eyebrow="Nos services" title="Des solutions financières pensées pour vous." breadcrumb={['Accueil', 'Nos services']} />
      <section style={{ background: '#fff', padding: '52px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 48, borderBottom: '2px solid #f0f0e8', paddingBottom: 0 }}>
            {tabs.map(t => (
              <button key={t.key} onClick={() => setActiveTab(t.key)} style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: '10px 20px',
                fontSize: 14, fontFamily: 'Inter, sans-serif', color: activeTab === t.key ? C.dark : '#888',
                fontWeight: activeTab === t.key ? 500 : 400, borderBottom: activeTab === t.key ? `2px solid ${C.green}` : '2px solid transparent',
                marginBottom: -2, transition: 'all 0.15s', whiteSpace: 'nowrap',
              }}>{t.label}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 48 }}>
            {/* Left info */}
            <div>
              <div style={{ width: 52, height: 52, borderRadius: 10, background: activeTab === 'epargne' || activeTab === 'ema2e' ? '#e8f7ee' : '#fef5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>{s.icon}</div>
              <h2 style={{ fontSize: 22, fontWeight: 500, color: C.dark, letterSpacing: '-0.5px', marginBottom: 14 }}>{s.title}</h2>
              <p style={{ fontSize: 13.5, color: C.gray, lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>
              <button onClick={() => navigate('contact')} style={{ background: C.green, color: '#fff', border: 'none', borderRadius: 4, padding: '11px 20px', fontSize: 13, fontFamily: 'Inter, sans-serif', cursor: 'pointer', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 7, transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#009045'}
                onMouseLeave={e => e.currentTarget.style.background = C.green}>
                Nous contacter <I.Arrow c="#fff" />
              </button>
            </div>

            {/* Products grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {s.products.map((p, i) => (
                <div key={p.name} style={{ background: '#f5f5f0', borderRadius: 8, padding: '22px', borderTop: `3px solid ${i === 0 ? s.color : '#e0e0d8'}` }}>
                  <div style={{ fontSize: 15, fontWeight: 500, color: C.dark, marginBottom: 8 }}>{p.name}</div>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 12, padding: '3px 10px', borderRadius: 3, background: '#fff', color: s.color, border: `1px solid ${s.color}22`, fontWeight: 500 }}>{p.rate}</span>
                    <span style={{ fontSize: 12, padding: '3px 10px', borderRadius: 3, background: '#fff', color: '#888', border: '1px solid #e0e0d8' }}>{p.duration}</span>
                  </div>
                  <p style={{ fontSize: 12.5, color: C.gray, lineHeight: 1.6, marginBottom: 12 }}>{p.desc}</p>
                  <div style={{ fontSize: 11.5, color: '#999' }}>Mise de départ : <strong style={{ color: '#555' }}>{p.min}</strong></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ─── NEWS PAGE ────────────────────────────────────────────────────────────────
const NewsPage = ({ accent }) => {
  const news = [
    { cat: 'Plateforme', date: '18 avril 2026', title: 'Lancement officiel de la nouvelle plateforme E-MA2E', excerpt: 'La MA2E inaugure sa plateforme numérique entièrement repensée. Accès aux services 24h/24, dépôts en ligne et suivi des dossiers en temps réel.', featured: true },
    { cat: 'Immobilier', date: '5 mars 2026', title: 'Ouverture de la 2ᵉ tranche AKANDJÉ — Bingerville', excerpt: 'Après le succès de la 1ère tranche, la résidence AKANDJÉ ouvre 48 nouveaux logements. Villas 4 pièces et duplex disponibles dès maintenant.' },
    { cat: 'Gouvernance', date: '20 février 2026', title: "Assemblée générale ordinaire 2025 — Résultats & résolutions", excerpt: 'L\'AG a approuvé les comptes 2025, validé le rapport de gestion et élu 3 nouveaux membres au Conseil d\'Administration.' },
    { cat: 'Crédit', date: '10 janvier 2026', title: 'Baisse des taux sur le crédit ordinaire en 2026', excerpt: 'Suite aux décisions du Conseil, le TEG du crédit ordinaire passe à 6,8% pour l\'exercice 2026. Une bonne nouvelle pour nos adhérents.' },
    { cat: 'Événement', date: '15 décembre 2025', title: 'Cérémonie de remise de clés — résidence AKANDJÉ', excerpt: '64 familles ont reçu les clés de leur logement lors de la cérémonie officielle présidée par le DG de SODECI et le Directeur de la MA2E.' },
    { cat: 'Formation', date: '3 novembre 2025', title: 'Atelier de sensibilisation financière pour les adhérents', excerpt: 'Plus de 300 adhérents ont participé aux ateliers d\'éducation financière organisés sur les sites SODECI, CIE et GS2E en octobre–novembre 2025.' },
  ];

  const catColors = { Plateforme: C.green, Immobilier: '#7c5cbf', Gouvernance: C.dark, Crédit: accent, Événement: '#e05252', Formation: '#2a9d8f' };

  return (
    <>
      <PageHero eyebrow="Actualités" title="Suivez la vie de votre mutuelle." breadcrumb={['Accueil', 'Actualités']} />
      <section style={{ background: '#f5f5f0', padding: '60px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Featured */}
          {news.filter(n => n.featured).map(n => (
            <div key={n.title} style={{ background: '#fff', borderRadius: 8, padding: '36px 40px', marginBottom: 24, display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center', borderLeft: `4px solid ${C.green}` }}>
              <div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: 10, padding: '3px 10px', borderRadius: 3, background: C.green, color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>{n.cat}</span>
                  <span style={{ fontSize: 12, color: '#bbb', display: 'flex', alignItems: 'center', gap: 5 }}><I.Calendar s={12} c="#ccc"/> {n.date}</span>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 500, color: C.dark, letterSpacing: '-0.5px', marginBottom: 12 }}>{n.title}</h2>
                <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.65 }}>{n.excerpt}</p>
              </div>
              <button style={{ background: C.green, color: '#fff', border: 'none', borderRadius: 4, padding: '11px 20px', fontSize: 13, fontFamily: 'Inter, sans-serif', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, whiteSpace: 'nowrap', flexShrink: 0, transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#009045'}
                onMouseLeave={e => e.currentTarget.style.background = C.green}>
                Lire l'article <I.Arrow c="#fff" />
              </button>
            </div>
          ))}

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {news.filter(n => !n.featured).map(n => (
              <div key={n.title} style={{ background: '#fff', borderRadius: 8, padding: '24px', cursor: 'pointer', transition: 'transform 0.15s, box-shadow 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 3, background: (catColors[n.cat] || '#888') + '18', color: catColors[n.cat] || '#888', letterSpacing: '0.8px' }}>{n.cat}</span>
                  <span style={{ fontSize: 11.5, color: '#ccc', display: 'flex', alignItems: 'center', gap: 4 }}><I.Calendar s={11} c="#ddd"/> {n.date}</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 500, color: C.dark, lineHeight: 1.4, marginBottom: 10 }}>{n.title}</h3>
                <p style={{ fontSize: 12.5, color: C.gray, lineHeight: 1.6, marginBottom: 16 }}>{n.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: C.green, fontSize: 12.5, fontWeight: 500 }}>
                  Lire <I.Arrow s={12} c={C.green}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ─── FAQ PAGE ─────────────────────────────────────────────────────────────────
const FAQPage = ({ accent }) => {
  const [open, setOpen] = React.useState(null);

  const categories = [
    {
      title: 'Adhésion & compte',
      items: [
        { q: 'Qui peut adhérer à la MA2E ?', a: 'Tout agent en activité ou en retraite de SODECI, CIE, GS2E ou CIPREL peut adhérer à la MA2E. L\'adhésion est volontaire et soumise à une cotisation d\'entrée de 5 000 FCFA.' },
        { q: 'Comment ouvrir un compte à la MA2E ?', a: 'Il suffit de se présenter à l\'un de nos guichets avec une pièce d\'identité en cours de validité, un bulletin de salaire récent et de compléter le formulaire d\'adhésion disponible dans la section Documents.' },
        { q: 'Puis-je adhérer en ligne via la plateforme E-MA2E ?', a: 'L\'inscription en ligne est disponible pour une pré-inscription. La finalisation du dossier nécessite une visite physique pour la vérification des pièces et la signature du contrat.' },
        { q: 'Quels sont les frais d\'adhésion ?', a: 'La cotisation d\'entrée est de 5 000 FCFA, non remboursable. Une cotisation annuelle de 2 400 FCFA est prélevée sur votre compte, à raison de 200 FCFA par mois.' },
      ],
    },
    {
      title: 'Épargne',
      items: [
        { q: 'Quels sont les taux de rémunération appliqués ?', a: 'Les taux varient selon le produit : 4,5% pour l\'épargne express, 5,5% pour l\'épargne ordinaire et 6% pour l\'épargne logement. Ces taux sont révisés annuellement par le Conseil d\'Administration.' },
        { q: 'Comment retirer mon épargne ?', a: 'Les retraits sont possibles selon les conditions du produit souscrit. L\'épargne express est disponible à tout moment. L\'épargne ordinaire et logement est soumise à un préavis de 30 jours.' },
        { q: 'Mon épargne est-elle garantie ?', a: 'Oui, les dépôts à la MA2E sont sécurisés conformément aux dispositions réglementaires de la BCEAO. La MA2E dispose d\'un ratio de liquidité et de solvabilité conforme aux normes en vigueur.' },
      ],
    },
    {
      title: 'Crédit',
      items: [
        { q: 'Quel est le délai d\'octroi d\'un crédit ?', a: 'Pour le crédit express, le délai est de 48 heures ouvrables après remise du dossier complet. Pour le crédit ordinaire, comptez 5 à 7 jours ouvrables. Le crédit immobilier nécessite un examen plus approfondi (15 à 21 jours).' },
        { q: 'Quels documents sont requis pour une demande de crédit ?', a: 'Le dossier standard comprend : formulaire de demande, pièce d\'identité, 3 derniers bulletins de salaire, relevés de compte MA2E des 3 derniers mois. Des pièces complémentaires peuvent être demandées selon le montant.' },
        { q: 'Puis-je rembourser mon crédit par anticipation ?', a: 'Oui, le remboursement anticipé partiel ou total est possible à tout moment, sans pénalité. Les intérêts sont calculés prorata temporis sur la période effective du crédit.' },
        { q: 'Quel est le montant maximum d\'un crédit ?', a: 'Le plafond dépend du type de crédit et du profil de l\'adhérent. Pour le crédit ordinaire, le maximum est de 10 millions FCFA. Pour le crédit immobilier, il peut aller jusqu\'à 50 millions FCFA, sous réserve d\'étude de dossier.' },
      ],
    },
    {
      title: 'Plateforme E-MA2E',
      items: [
        { q: 'Comment accéder à la plateforme E-MA2E ?', a: 'Rendez-vous sur ema2e.ma2e.ci ou téléchargez l\'application mobile (disponible sur App Store et Google Play). Votre identifiant vous est communiqué lors de l\'adhésion ou peut être demandé à l\'accueil.' },
        { q: 'La plateforme est-elle sécurisée ?', a: 'Oui, la plateforme utilise un chiffrement SSL et une authentification à deux facteurs. Vos données sont hébergées en Côte d\'Ivoire conformément à la loi sur la protection des données personnelles.' },
        { q: 'Que faire si j\'ai oublié mon mot de passe ?', a: 'Utilisez la fonction "Mot de passe oublié" sur la page de connexion. Un code de réinitialisation vous sera envoyé par SMS au numéro enregistré sur votre dossier.' },
      ],
    },
  ];

  const allItems = categories.flatMap((cat, ci) => cat.items.map((item, ii) => ({ ...item, id: `${ci}-${ii}`, cat: cat.title })));

  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions fréquentes." breadcrumb={['Accueil', 'FAQ']} />
      <section style={{ background: '#f5f5f0', padding: '60px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {categories.map((cat, ci) => (
            <div key={cat.title} style={{ marginBottom: 40 }}>
              <div style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: accent, marginBottom: 16 }}>{cat.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {cat.items.map((item, ii) => {
                  const id = `${ci}-${ii}`;
                  const isOpen = open === id;
                  return (
                    <div key={id} style={{ background: '#fff', borderRadius: 6, overflow: 'hidden', border: isOpen ? `1px solid ${C.green}22` : '1px solid transparent' }}>
                      <button onClick={() => setOpen(isOpen ? null : id)} style={{
                        width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
                        padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
                        fontFamily: 'Inter, sans-serif',
                      }}>
                        <span style={{ fontSize: 14, fontWeight: isOpen ? 500 : 400, color: isOpen ? C.dark : '#333' }}>{item.q}</span>
                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: isOpen ? C.green : '#f5f5f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.15s' }}>
                          {isOpen ? <I.Minus s={12} c="#fff"/> : <I.Plus s={12} c="#888"/>}
                        </div>
                      </button>
                      {isOpen && (
                        <div style={{ padding: '0 20px 18px', borderTop: '1px solid #f5f5f0' }}>
                          <p style={{ fontSize: 13.5, color: C.gray, lineHeight: 1.7, paddingTop: 14 }}>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div style={{ background: `linear-gradient(135deg, ${C.dark}, ${C.mid})`, borderRadius: 8, padding: '32px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 8 }}>Vous n'avez pas trouvé votre réponse ?</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Notre équipe est disponible du lundi au vendredi, de 8h à 17h.</p>
            </div>
            <button style={{ background: accent, color: '#fff', border: 'none', borderRadius: 4, padding: '11px 22px', fontSize: 13, fontFamily: 'Inter, sans-serif', cursor: 'pointer', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0, transition: 'filter 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.filter = 'brightness(0.9)'}
              onMouseLeave={e => e.currentTarget.style.filter = 'none'}>
              Nous contacter <I.Arrow c="#fff" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { AboutPage, ServicesPage, NewsPage, FAQPage });
