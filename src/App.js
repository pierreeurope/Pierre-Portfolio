import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import MouseTrail from './components/MouseTrail';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  const [effectsEnabled, setEffectsEnabled] = useState(true);

  const handleToggleEffects = () => {
    setEffectsEnabled(prev => !prev);
  };

  // Dynamic favicon based on tab visibility
  useEffect(() => {
    const setFavicon = (emoji) => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.font = '56px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(emoji, 32, 36);
      
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = canvas.toDataURL();
      document.getElementsByTagName('head')[0].appendChild(link);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setFavicon('⬇️'); // Arrow pointing down to bring them back
      } else {
        setFavicon('😊'); // Happy face when they're here
      }
    };

    // Set initial favicon
    setFavicon('😊');

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <Router>
      <div className="App">
        <MouseTrail enabled={effectsEnabled} />
        <Navigation 
          effectsEnabled={effectsEnabled} 
          onToggleEffects={handleToggleEffects} 
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
