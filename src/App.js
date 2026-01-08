import React, { useState } from 'react';
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
