// ─── PAGES B: Contact, Documents, Liens utiles, Mentions légales ──────────────

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
const ContactPage = ({ accent }) => {
  const [form, setForm] = React.useState({ nom: '', email: '', tel: '', objet: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const e = {};
    if (!form.nom.trim()) e.nom = 'Champ requis';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Email invalide';
    if (!form.objet) e.objet = 'Champ requis';
    if (form.message.trim().length < 20) e.message = 'Message trop court (20 caractères min.)';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  };

  const field = (key, label, type = 'text', placeholder = '') => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 12.5, color: '#555', fontWeight: 500 }}>{label}</label>
      <input type={type} value={form[key]} placeholder={placeholder}
        onChange={e => { setForm(f => ({ ...f, [key]: e.target.value })); setErrors(er => ({ ...er, [key]: null })); }}
        style={{
          padding: '10px 13px', borderRadius: 4, border: errors[key] ? '1.5px solid #e05252' : '1.5px solid #e0e0d8',
          fontFamily: 'Inter, sans-serif', fontSize: 13.5, color: C.dark, outline: 'none',
          transition: 'border-color 0.15s', background: '#fafafa',
        }}
        onFocus={e => e.target.style.borderColor = C.green}
        onBlur={e => e.target.style.borderColor = errors[key] ? '#e05252' : '#e0e0d8'}
      />
      {errors[key] && <span style={{ fontSize: 11.5, color: '#e05252' }}>{errors[key]}</span>}
    </div>
  );

  const offices = [
    { city: 'Abidjan — Plateau (siège)', addr: 'Avenue Houdaille, Immeuble SIDAM, 6ème étage — 18 BP 1210 Abidjan 18', tel: '(+225) 27 21 23 64 87', hours: 'Lun–Ven 7h30–16h30' },
    { city: 'Abidjan — Yopougon', addr: 'Site CIE Yopougon, Bâtiment Administratif', tel: '(+225) 27 23 XX XX XX', hours: 'Lun–Ven 7h30–16h30' },
    { city: 'Bingerville', addr: 'Résidence AKANDJÉ, Bureau des ventes', tel: '(+225) 27 22 XX XX XX', hours: 'Mar–Sam 9h–17h' },
  ];

  return (
    <>
      <PageHero eyebrow="Contact" title="Nous sommes à votre écoute." breadcrumb={['Accueil', 'Contact']} />
      <section style={{ background: '#f5f5f0', padding: '60px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 400px', gap: 40 }}>

          {/* Form */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '40px' }}>
            <h2 style={{ fontSize: 22, fontWeight: 500, color: C.dark, letterSpacing: '-0.5px', marginBottom: 8 }}>Envoyer un message</h2>
            <p style={{ fontSize: 13.5, color: C.gray, marginBottom: 28 }}>Notre équipe vous répond dans un délai de 24 à 48 heures ouvrables.</p>

            {sent ? (
              <div style={{ background: '#e8f7ee', borderRadius: 6, padding: '28px', textAlign: 'center', border: `1px solid ${C.green}22` }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <I.Check s={20} c="#fff"/>
                </div>
                <div style={{ fontSize: 16, fontWeight: 500, color: C.dark, marginBottom: 8 }}>Message envoyé avec succès</div>
                <p style={{ fontSize: 13.5, color: C.gray, lineHeight: 1.6 }}>Merci pour votre message. Un conseiller MA2E vous contactera dans les meilleurs délais.</p>
                <button onClick={() => { setSent(false); setForm({ nom: '', email: '', tel: '', objet: '', message: '' }); }} style={{ marginTop: 20, background: 'none', border: `1px solid ${C.green}`, borderRadius: 4, padding: '9px 18px', fontSize: 13, color: C.green, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
                  Nouveau message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {field('nom', 'Nom complet *', 'text', 'Jean Kouassi')}
                  {field('email', 'Adresse e-mail *', 'email', 'jean.kouassi@sodeci.ci')}
                </div>
                {field('tel', 'Téléphone', 'tel', '+225 07 XX XX XX XX')}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 12.5, color: '#555', fontWeight: 500 }}>Objet de votre message *</label>
                  <select value={form.objet} onChange={e => { setForm(f => ({ ...f, objet: e.target.value })); setErrors(er => ({ ...er, objet: null })); }} style={{ padding: '10px 13px', borderRadius: 4, border: errors.objet ? '1.5px solid #e05252' : '1.5px solid #e0e0d8', fontFamily: 'Inter, sans-serif', fontSize: 13.5, color: form.objet ? C.dark : '#999', background: '#fafafa', outline: 'none' }}>
                    <option value="">Sélectionner un objet</option>
                    <option>Adhésion — Nouvelle demande</option>
                    <option>Épargne — Information</option>
                    <option>Crédit — Demande de devis</option>
                    <option>Immobilier — Information logements</option>
                    <option>Plateforme E-MA2E — Assistance</option>
                    <option>Réclamation</option>
                    <option>Autre</option>
                  </select>
                  {errors.objet && <span style={{ fontSize: 11.5, color: '#e05252' }}>{errors.objet}</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 12.5, color: '#555', fontWeight: 500 }}>Votre message *</label>
                  <textarea value={form.message} rows={5} placeholder="Décrivez votre demande en quelques lignes..."
                    onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: null })); }}
                    style={{ padding: '10px 13px', borderRadius: 4, border: errors.message ? '1.5px solid #e05252' : '1.5px solid #e0e0d8', fontFamily: 'Inter, sans-serif', fontSize: 13.5, color: C.dark, resize: 'vertical', outline: 'none', background: '#fafafa', lineHeight: 1.6 }}
                    onFocus={e => e.target.style.borderColor = C.green}
                    onBlur={e => e.target.style.borderColor = errors.message ? '#e05252' : '#e0e0d8'}
                  />
                  {errors.message && <span style={{ fontSize: 11.5, color: '#e05252' }}>{errors.message}</span>}
                </div>
                <p style={{ fontSize: 11.5, color: '#bbb', lineHeight: 1.6 }}>En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre <span style={{ color: C.green, cursor: 'pointer' }}>politique de confidentialité</span>.</p>
                <button type="submit" disabled={loading} style={{ background: loading ? '#aaa' : C.green, color: '#fff', border: 'none', borderRadius: 4, padding: '13px', fontSize: 14, fontFamily: 'Inter, sans-serif', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background 0.15s' }}>
                  {loading ? 'Envoi en cours...' : <><span>Envoyer le message</span> <I.Arrow c="#fff"/></>}
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Contact info */}
            <div style={{ background: '#fff', borderRadius: 8, padding: '28px' }}>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: C.dark, marginBottom: 20 }}>Coordonnées directes</h3>
              {[
                { icon: <I.Phone s={15} c={C.green}/>, label: 'Standard', val: '(+225) 27 21 23 64 87' },
                { icon: <I.Mail s={15} c={accent}/>, label: 'Email', val: 'contact@ma2e.ci' },
                { icon: <I.Pin s={15} c={C.green}/>, label: 'Siège', val: 'Avenue Houdaille, Immeuble SIDAM, 6ème étage — Plateau, Abidjan' },
                { icon: <I.Clock s={14} c={accent}/>, label: 'Horaires', val: 'Lun–Ven · 7h30–16h30' },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 6, background: '#f5f5f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{row.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, color: '#aaa', marginBottom: 2 }}>{row.label}</div>
                    <div style={{ fontSize: 13.5, color: C.dark }}>{row.val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #e8e8e0', background: '#f5f5f0', height: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, background: '#e0e0d8', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <I.Pin s={18} c="#aaa"/>
              </div>
              <div style={{ fontSize: 12, color: '#bbb', fontFamily: 'monospace', textAlign: 'center', lineHeight: 1.5 }}>
                Carte interactive<br/>Plateau · Abidjan, CI
              </div>
            </div>

            {/* Offices */}
            {offices.map(o => (
              <div key={o.city} style={{ background: '#fff', borderRadius: 8, padding: '20px 24px', borderLeft: `3px solid ${C.green}` }}>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: C.dark, marginBottom: 6 }}>{o.city}</div>
                <div style={{ fontSize: 12.5, color: C.gray, marginBottom: 4 }}>{o.addr}</div>
                <div style={{ fontSize: 12, color: '#aaa' }}>{o.tel} · {o.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ─── DOCUMENTS PAGE ───────────────────────────────────────────────────────────
const DocumentsPage = ({ accent }) => {
  const [filter, setFilter] = React.useState('Tous');
  const categories = ['Tous', 'Formulaires', 'Rapports', 'Institutionnel', 'Immobilier'];

  const docs = [
    { cat: 'Formulaires', title: "Formulaire d'adhésion", desc: 'Dossier complet pour devenir adhérent MA2E.', size: '245 Ko', date: 'Janv. 2026', type: 'PDF' },
    { cat: 'Formulaires', title: 'Demande de crédit ordinaire', desc: 'Formulaire de demande pour les crédits à taux réduit.', size: '180 Ko', date: 'Janv. 2026', type: 'PDF' },
    { cat: 'Formulaires', title: 'Demande de crédit express', desc: 'Dossier simplifié pour les demandes urgentes.', size: '120 Ko', date: 'Janv. 2026', type: 'PDF' },
    { cat: 'Formulaires', title: 'Demande d\'épargne logement', desc: 'Ouverture d\'un compte épargne logement.', size: '155 Ko', date: 'Janv. 2026', type: 'PDF' },
    { cat: 'Formulaires', title: 'Formulaire de retrait d\'épargne', desc: 'Demande de retrait total ou partiel.', size: '98 Ko', date: 'Janv. 2026', type: 'PDF' },
    { cat: 'Rapports', title: 'Rapport annuel 2025', desc: 'Bilan d\'activités, comptes financiers et perspectives.', size: '4,2 Mo', date: 'Mars 2026', type: 'PDF' },
    { cat: 'Rapports', title: 'Rapport annuel 2024', desc: 'Exercice 2024 — données consolidées.', size: '3,8 Mo', date: 'Avr. 2025', type: 'PDF' },
    { cat: 'Rapports', title: "Rapport d'audit 2025", desc: 'Rapport du commissaire aux comptes.', size: '1,1 Mo', date: 'Fév. 2026', type: 'PDF' },
    { cat: 'Institutionnel', title: 'Statuts de la MA2E', desc: 'Textes constitutifs et règlements intérieurs.', size: '520 Ko', date: 'Réf. 2021', type: 'PDF' },
    { cat: 'Institutionnel', title: 'Agrément BCEAO', desc: 'Attestation d\'agrément en qualité de SFD.', size: '210 Ko', date: 'Réf. 2011', type: 'PDF' },
    { cat: 'Institutionnel', title: 'Conditions générales des produits', desc: 'Conditions applicables à l\'ensemble des produits financiers.', size: '680 Ko', date: 'Janv. 2026', type: 'PDF' },
    { cat: 'Immobilier', title: 'Brochure résidence AKANDJÉ', desc: 'Plans, prix et conditions de souscription — 2ᵉ tranche.', size: '3,4 Mo', date: 'Mars 2026', type: 'PDF' },
    { cat: 'Immobilier', title: 'Formulaire de réservation logement', desc: 'Dossier de réservation pour les logements AKANDJÉ.', size: '290 Ko', date: 'Mars 2026', type: 'PDF' },
  ];

  const filtered = filter === 'Tous' ? docs : docs.filter(d => d.cat === filter);

  return (
    <>
      <PageHero eyebrow="Documents" title="Téléchargez vos formulaires et rapports." breadcrumb={['Accueil', 'Documents']} />
      <section style={{ background: '#f5f5f0', padding: '60px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 36, flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{
                padding: '7px 18px', borderRadius: 20, border: '1px solid #ddd', background: filter === cat ? C.dark : '#fff',
                color: filter === cat ? '#fff' : '#555', fontSize: 13, fontFamily: 'Inter, sans-serif', cursor: 'pointer',
                transition: 'all 0.15s',
              }}>{cat}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {filtered.map(doc => (
              <div key={doc.title} style={{ background: '#fff', borderRadius: 8, padding: '22px', display: 'flex', flexDirection: 'column', gap: 10, transition: 'box-shadow 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.07)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 6, background: doc.cat === 'Formulaires' ? '#e8f7ee' : doc.cat === 'Rapports' ? '#fef5e9' : doc.cat === 'Institutionnel' ? '#f0f0ff' : '#fff5f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <I.Document s={16} c={doc.cat === 'Formulaires' ? C.green : doc.cat === 'Rapports' ? accent : doc.cat === 'Institutionnel' ? '#7c5cbf' : C.orange}/>
                  </div>
                  <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 3, background: '#f5f5f0', color: '#888' }}>{doc.cat}</span>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: C.dark, marginBottom: 5, lineHeight: 1.35 }}>{doc.title}</div>
                  <p style={{ fontSize: 12.5, color: C.gray, lineHeight: 1.55 }}>{doc.desc}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #f5f5f0' }}>
                  <div style={{ fontSize: 11.5, color: '#bbb' }}>{doc.type} · {doc.size} · {doc.date}</div>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.green, fontSize: 12.5, fontFamily: 'Inter, sans-serif', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 5, padding: 0, transition: 'gap 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.gap = '8px'}
                    onMouseLeave={e => e.currentTarget.style.gap = '5px'}>
                    <I.Download s={13} c={C.green}/> Télécharger
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ─── LIENS UTILES ─────────────────────────────────────────────────────────────
const LinksPage = ({ accent }) => {
  const groups = [
    { title: 'Tutelles & régulateurs', items: [
      { name: 'BCEAO', desc: 'Banque Centrale des États de l\'Afrique de l\'Ouest — autorité de contrôle des SFD.', url: 'bceao.int' },
      { name: 'UEMOA', desc: 'Union Économique et Monétaire Ouest Africaine — cadre réglementaire régional.', url: 'uemoa.int' },
      { name: 'MEFP', desc: 'Ministère de l\'Économie et des Finances — Côte d\'Ivoire.', url: 'mef.gouv.ci' },
    ]},
    { title: 'Entreprises partenaires', items: [
      { name: 'SODECI', desc: 'Société de Distribution d\'Eau de Côte d\'Ivoire — premier employeur adhérent.', url: 'sodeci.ci' },
      { name: 'CIE', desc: 'Compagnie Ivoirienne d\'Électricité — partenaire fondateur.', url: 'cie.ci' },
      { name: 'GS2E', desc: 'Groupement des Sociétés Eau et Électricité — coordination sectorielle.', url: 'gs2e.ci' },
      { name: 'CIPREL', desc: 'Compagnie Ivoirienne de Production d\'Électricité — partenaire affilié.', url: 'ciprel.ci' },
    ]},
    { title: 'Organismes de microfinance', items: [
      { name: 'APIMF-CI', desc: 'Association Professionnelle des Institutions de Microfinance de Côte d\'Ivoire.', url: 'apimf.ci' },
      { name: 'CGAP', desc: 'Consultative Group to Assist the Poor — ressources et recherches en microfinance.', url: 'cgap.org' },
      { name: 'BMS-SA', desc: 'Banque Malienne de Solidarité — partenaire régional de refinancement.', url: 'bms-sa.com' },
    ]},
  ];

  return (
    <>
      <PageHero eyebrow="Liens utiles" title="Nos partenaires et institutions de référence." breadcrumb={['Accueil', 'Liens utiles']} />
      <section style={{ background: '#f5f5f0', padding: '60px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {groups.map(group => (
            <div key={group.title} style={{ marginBottom: 48 }}>
              <div style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: accent, marginBottom: 20 }}>{group.title}</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {group.items.map(item => (
                  <div key={item.name} style={{ background: '#fff', borderRadius: 8, padding: '24px', transition: 'transform 0.15s, box-shadow 0.15s', cursor: 'pointer' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.07)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                      <div style={{ fontSize: 16, fontWeight: 500, color: C.dark }}>{item.name}</div>
                      <I.External s={13} c="#ccc"/>
                    </div>
                    <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.6, marginBottom: 14 }}>{item.desc}</p>
                    <span style={{ fontSize: 12, color: C.green }}>{item.url}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

// ─── LEGAL PAGE ───────────────────────────────────────────────────────────────
const LegalPage = ({ accent }) => {
  const [tab, setTab] = React.useState('mentions');
  const tabs = [
    { key: 'mentions', label: 'Mentions légales' },
    { key: 'cgu', label: "Conditions d'utilisation" },
    { key: 'donnees', label: 'Données personnelles' },
    { key: 'cookies', label: 'Cookies' },
  ];

  const Section = ({ title, children }) => (
    <div style={{ marginBottom: 36 }}>
      <h3 style={{ fontSize: 16, fontWeight: 500, color: C.dark, marginBottom: 12, paddingBottom: 10, borderBottom: '1px solid #f0f0e8' }}>{title}</h3>
      {children}
    </div>
  );
  const P = ({ children }) => <p style={{ fontSize: 13.5, color: C.gray, lineHeight: 1.75, marginBottom: 10 }}>{children}</p>;
  const Li = ({ children }) => <li style={{ fontSize: 13.5, color: C.gray, lineHeight: 1.75, marginBottom: 6 }}>{children}</li>;

  const content = {
    mentions: (
      <>
        <Section title="Éditeur du site">
          <P><strong style={{ color: C.dark }}>MA2E</strong> — Mutuelle des Agents de l'Eau et de l'Électricité<br/>Forme juridique : Institution de Microfinance (IMF) — Société Financière Décentralisée (SFD)<br/>Siège social : Immeuble SODECI, Plateau, Abidjan — Côte d'Ivoire<br/>N° d'immatriculation RCCM : CI-ABJ-2009-B-XXXXX<br/>N° d'agrément BCEAO : 2009/CI/ABJ/003</P>
        </Section>
        <Section title="Direction de la publication">
          <P>Le Directeur Général de la MA2E assure la direction de la publication du présent site internet. Toute question relative au contenu peut être adressée à <strong>contact@ma2e.ci</strong>.</P>
        </Section>
        <Section title="Hébergement">
          <P>Le site ma2e.ci est hébergé sur des serveurs situés en Côte d'Ivoire, dans le respect de la loi n° 2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel.</P>
        </Section>
        <Section title="Propriété intellectuelle">
          <P>L'ensemble des contenus figurant sur le site (textes, images, logos, structure) est la propriété exclusive de la MA2E ou de ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.</P>
        </Section>
        <Section title="Limitation de responsabilité">
          <P>Les informations publiées sur ce site sont fournies à titre indicatif. La MA2E s'efforce de les maintenir à jour mais ne saurait être tenue responsable des erreurs ou omissions. Les simulations de crédit ont une valeur indicative et ne constituent pas un engagement contractuel.</P>
        </Section>
      </>
    ),
    cgu: (
      <>
        <Section title="Objet et champ d'application">
          <P>Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du site internet ma2e.ci et de la plateforme E-MA2E. Tout accès au site vaut acceptation des présentes CGU.</P>
        </Section>
        <Section title="Accès aux services">
          <P>Le site ma2e.ci est accessible librement. L'accès à l'espace adhérent (E-MA2E) est réservé aux membres en règle disposant de leurs identifiants personnels. La MA2E se réserve le droit de suspendre tout accès en cas de comportement frauduleux ou de violation des présentes CGU.</P>
        </Section>
        <Section title="Obligations de l'utilisateur">
          <ul style={{ paddingLeft: 20 }}>
            <Li>Ne pas utiliser le site à des fins illicites ou préjudiciables.</Li>
            <Li>Ne pas tenter d'accéder à des espaces non autorisés.</Li>
            <Li>Conserver la confidentialité de ses identifiants de connexion.</Li>
            <Li>Signaler immédiatement toute utilisation frauduleuse de son compte.</Li>
            <Li>Fournir des informations exactes et à jour lors des demandes en ligne.</Li>
          </ul>
        </Section>
        <Section title="Responsabilité de la MA2E">
          <P>La MA2E met en œuvre tous les moyens raisonnables pour assurer la disponibilité et la sécurité du site. Elle ne saurait être tenue responsable des interruptions dues à des cas de force majeure, pannes techniques ou maintenances planifiées.</P>
        </Section>
        <Section title="Droit applicable">
          <P>Les présentes CGU sont régies par le droit ivoirien. Tout litige sera soumis aux juridictions compétentes d'Abidjan, en Côte d'Ivoire.</P>
        </Section>
      </>
    ),
    donnees: (
      <>
        <Section title="Responsable du traitement">
          <P>La MA2E, représentée par son Directeur Général, est responsable du traitement de vos données personnelles conformément à la loi ivoirienne n° 2013-450 du 19 juin 2013 et au règlement UEMOA sur la protection des données.</P>
        </Section>
        <Section title="Données collectées">
          <P>Dans le cadre de nos services, nous collectons les données suivantes :</P>
          <ul style={{ paddingLeft: 20 }}>
            <Li><strong style={{ color: C.dark }}>Données d'identité :</strong> nom, prénom, date de naissance, pièce d'identité.</Li>
            <Li><strong style={{ color: C.dark }}>Données de contact :</strong> adresse, numéro de téléphone, adresse e-mail.</Li>
            <Li><strong style={{ color: C.dark }}>Données financières :</strong> bulletins de salaire, relevés de compte, historiques de transactions.</Li>
            <Li><strong style={{ color: C.dark }}>Données de navigation :</strong> adresse IP, pages visitées, cookies de session.</Li>
          </ul>
        </Section>
        <Section title="Finalités du traitement">
          <ul style={{ paddingLeft: 20 }}>
            <Li>Gestion de la relation adhérent et des contrats de services financiers.</Li>
            <Li>Instruction et suivi des demandes de crédit et d'épargne.</Li>
            <Li>Conformité aux obligations légales et réglementaires (BCEAO, lutte anti-blanchiment).</Li>
            <Li>Amélioration des services et communication institutionnelle (avec votre consentement).</Li>
          </ul>
        </Section>
        <Section title="Durée de conservation">
          <P>Vos données sont conservées pour la durée nécessaire à l'exécution du contrat, augmentée des délais légaux de prescription (10 ans pour les données financières conformément au droit ivoirien).</P>
        </Section>
        <Section title="Vos droits">
          <P>Vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Pour exercer ces droits, contactez notre Délégué à la Protection des Données à <strong>dpo@ma2e.ci</strong>.</P>
        </Section>
      </>
    ),
    cookies: (
      <>
        <Section title="Qu'est-ce qu'un cookie ?">
          <P>Un cookie est un petit fichier texte déposé sur votre appareil lors de votre navigation. Il nous permet de mémoriser vos préférences et d'analyser l'utilisation du site afin de l'améliorer continuellement.</P>
        </Section>
        <Section title="Cookies utilisés">
          <div style={{ display: 'grid', gap: 10 }}>
            {[
              { type: 'Cookies essentiels', desc: 'Nécessaires au fonctionnement du site et à la sécurité de votre session. Ne peuvent pas être désactivés.', required: true },
              { type: 'Cookies analytiques', desc: 'Permettent de mesurer l\'audience et d\'améliorer les performances du site. Activés avec votre consentement.', required: false },
              { type: 'Cookies de préférences', desc: 'Mémorisent vos préférences de navigation (langue, thème). Activés avec votre consentement.', required: false },
            ].map(c => (
              <div key={c.type} style={{ background: '#f5f5f0', borderRadius: 6, padding: '16px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: c.required ? C.green : '#e0e0d8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <I.Check s={10} c={c.required ? '#fff' : '#999'}/>
                </div>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 500, color: C.dark, marginBottom: 4 }}>{c.type} {c.required && <span style={{ fontSize: 10, padding: '1px 6px', background: C.green + '22', color: C.green, borderRadius: 3, marginLeft: 6 }}>Obligatoire</span>}</div>
                  <p style={{ fontSize: 12.5, color: C.gray, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Gestion de vos préférences">
          <P>Vous pouvez modifier vos préférences de cookies à tout moment via les paramètres de votre navigateur ou en nous contactant à <strong>contact@ma2e.ci</strong>. Le refus de certains cookies peut affecter votre expérience de navigation.</P>
        </Section>
      </>
    ),
  };

  return (
    <>
      <PageHero eyebrow="Informations légales" title="Transparence et conformité réglementaire." breadcrumb={['Accueil', 'Mentions légales']} />
      <section style={{ background: '#f5f5f0', padding: '52px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 32, alignItems: 'start' }}>
          {/* Side nav */}
          <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', position: 'sticky', top: 84 }}>
            {tabs.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)} style={{
                display: 'block', width: '100%', textAlign: 'left', padding: '13px 20px', background: tab === t.key ? '#f0faf5' : 'none',
                border: 'none', borderLeft: tab === t.key ? `3px solid ${C.green}` : '3px solid transparent',
                cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: 13.5,
                color: tab === t.key ? C.dark : '#666', fontWeight: tab === t.key ? 500 : 400, transition: 'all 0.12s',
              }}>{t.label}</button>
            ))}
          </div>

          {/* Content */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '36px 40px' }}>
            <div style={{ fontSize: 11, color: '#bbb', marginBottom: 28 }}>Dernière mise à jour : 1ᵉʳ janvier 2026</div>
            {content[tab]}
          </div>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { ContactPage, DocumentsPage, LinksPage, LegalPage });
