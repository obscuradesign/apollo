import React from 'react';
import { BuildingMap } from './components/BuildingMap';
import { ApolloLogo } from './components/ApolloLogo';
import { Analytics } from '@vercel/analytics/react';

function App() {
  // Initialize from localStorage, defaulting to false if not found
  const [darkMode, setDarkMode] = React.useState(() => {
    return localStorage.getItem('apollo-theme') === 'dark';
  });

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
      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <ApolloLogo style={{ height: "120px", width: "auto" }} />
      </div>

      {/* This renders your entire map project */}
      <BuildingMap darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Vercel Analytics integration */}
      <Analytics />

    </div>
  );
}

export default App;