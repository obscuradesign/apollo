import React from 'react';
import { BuildingMap } from './components/BuildingMap';
import { ApolloLogo } from './components/ApolloLogo';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <ApolloLogo style={{ height: "120px", width: "auto" }} />
      </div>

      {/* This renders your entire map project */}
      <BuildingMap />

      {/* Vercel Analytics integration */}
      <Analytics />

    </div>
  );
}

export default App;