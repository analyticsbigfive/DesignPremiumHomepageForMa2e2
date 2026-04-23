// ─── APP ROUTER ───────────────────────────────────────────────────────────────

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroStyle": "diagonal",
  "accent": "#F7941D"
}/*EDITMODE-END*/;

const App = () => {
  const [page, setPage] = React.useState(() => {
    const saved = localStorage.getItem('ma2e_page');
    return saved || 'home';
  });
  const [hash, setHash] = React.useState(null);
  const [tweaks, setTweaks] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem('ma2e_tweaks')) || TWEAK_DEFAULTS; }
    catch { return TWEAK_DEFAULTS; }
  });

  // Persist page
  React.useEffect(() => {
    localStorage.setItem('ma2e_page', page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  // Persist tweaks
  React.useEffect(() => {
    localStorage.setItem('ma2e_tweaks', JSON.stringify(tweaks));
    window.__setTweaks = setTweaks;
    window.__ma2eTweaks = tweaks;
  }, [tweaks]);

  // Scroll to hash after navigation
  React.useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setHash(null);
    }, 120);
    return () => clearTimeout(t);
  }, [page, hash]);

  const navigate = (p, h) => {
    setPage(p);
    if (h) setHash(h);
  };

  const accent = tweaks.accent || '#F7941D';

  const renderPage = () => {
    switch (page) {
      case 'home':       return <HomePage tweaks={tweaks} navigate={navigate} />;
      case 'about':      return <AboutPage accent={accent} navigate={navigate} />;
      case 'services':   return <ServicesPage accent={accent} navigate={navigate} />;
      case 'news':       return <NewsPage accent={accent} />;
      case 'faq':        return <FAQPage accent={accent} navigate={navigate} />;
      case 'contact':    return <ContactPage accent={accent} />;
      case 'documents':  return <DocumentsPage accent={accent} />;
      case 'links':      return <LinksPage accent={accent} />;
      case 'legal':      return <LegalPage accent={accent} />;
      default:           return <HomePage tweaks={tweaks} navigate={navigate} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <FlashBar />
      <Nav currentPage={page} navigate={navigate} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
