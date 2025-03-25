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

// Import training method components
import Calisthenics from './components/career/strength/Calisthenics';
import Bodyweight from './components/career/strength/Bodyweight';
import FreeWeights from './components/career/strength/FreeWeights';
import OlympicLifting from './components/career/strength/OlympicLifting';
import Machines from './components/career/strength/Machines';
import CircuitTraining from './components/career/strength/CircuitTraining';

import Running from './components/career/cardio/Running';
import Cycling from './components/career/cardio/Cycling';
import Swimming from './components/career/cardio/Swimming';
import HIIT from './components/career/cardio/HIIT';
import JumpRope from './components/career/cardio/JumpRope';
import Walking from './components/career/cardio/Walking';
import CardioMachines from './components/career/cardio/Machines';

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
          
          {/* Strength Training Routes */}
          <Route path="/strength/calisthenics" element={<Calisthenics />} />
          <Route path="/strength/bodyweight" element={<Bodyweight />} />
          <Route path="/strength/free-weights" element={<FreeWeights />} />
          <Route path="/strength/olympic-lifting" element={<OlympicLifting />} />
          <Route path="/strength/machines" element={<Machines />} />
          <Route path="/strength/circuit-training" element={<CircuitTraining />} />
          
          {/* Cardio Training Routes */}
          <Route path="/cardio/running" element={<Running />} />
          <Route path="/cardio/cycling" element={<Cycling />} />
          <Route path="/cardio/swimming" element={<Swimming />} />
          <Route path="/cardio/hiit" element={<HIIT />} />
          <Route path="/cardio/jump-rope" element={<JumpRope />} />
          <Route path="/cardio/walking" element={<Walking />} />
          <Route path="/cardio/machines" element={<CardioMachines />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SocialLinks />
    </div>
  );
}

export default App; 