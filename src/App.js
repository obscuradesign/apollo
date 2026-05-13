import React from 'react';
import { BuildingMap } from './components/BuildingMap';
import { ApolloLogo } from './components/ApolloLogo';
import { AboutModal } from './components/AboutModal';
import { Analytics } from '@vercel/analytics/react';

function App() {
  // Initialize from localStorage, defaulting to false if not found
  const [darkMode, setDarkMode] = React.useState(() => {
    return localStorage.getItem('apollo-theme') === 'dark';
  });
  const [isAboutOpen, setIsAboutOpen] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('apollo-theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('apollo-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {/* Site header — landmark for screen readers */}
      <header role="banner">
        {/* Visually-hidden h1 for screen readers (WCAG 2.4.6).
            The ApolloLogo SVG serves as the visible heading. */}
        <h1 className="visually-hidden">Apollo: Santa Monica College Real-Time Map</h1>
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
          <ApolloLogo style={{ height: "120px", width: "auto", maxWidth: "100%", objectFit: "contain" }} />
        </div>
      </header>

      {/* Main content — target for the skip-to-map link in index.html */}
      <main id="map-content" role="main">
        <BuildingMap
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenAbout={() => setIsAboutOpen(true)}
        />
      </main>

      {/* Vercel Analytics integration */}
      <Analytics />

      {/* About Modal */}
      {isAboutOpen && <AboutModal onClose={() => setIsAboutOpen(false)} />}

      {/* Accessibility Menu — wired up in Phase 2 */}
      {/* {isAccessibilityOpen && <AccessibilityMenu onClose={() => setIsAccessibilityOpen(false)} />} */}

    </div>
  );
}

export default App;