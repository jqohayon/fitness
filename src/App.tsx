import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import DynamicBackground from './components/layout/DynamicBackground';
import Home from './components/Home';
import Resources from './components/career/Resources';
import Strength from './components/career/Strength';
import Cardio from './components/career/Cardio';
import Nutrition from './components/career/Nutrition';
import Wellness from './components/career/Wellness';
import Supplementation from './components/career/Supplementation';
import Goals from './components/career/Goals';
import SocialLinks from './components/SocialLinks';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navigation />
      <DynamicBackground />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/strength" element={<Strength />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/supplementation" element={<Supplementation />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SocialLinks />
    </div>
  );
}

export default App; 