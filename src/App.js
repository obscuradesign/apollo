// src/App.js
import React from 'react';
import { BuildingMap } from './components/BuildingMap';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "black" }}>Apollo: Real-Time SMC MSB Map</h1>
      
      {/* This renders your entire map project */}
      <BuildingMap />
      
    </div>
  );
}

export default App;