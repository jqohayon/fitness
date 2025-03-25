import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import DynamicBackground from './components/layout/DynamicBackground';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import './App.css';

// Import modules
import {
  Strength,
  Calisthenics,
  Bodyweight,
  FreeWeights,
  OlympicLifting,
  Machines,
  CircuitTraining
} from './modules/strength';

// Import other modules (to be created)
import { Cardio } from './modules/cardio';
import { Nutrition } from './modules/nutrition';
import { Wellness } from './modules/wellness';
import { Supplementation } from './modules/supplementation';
import { Goals } from './modules/goals';
import { Resources } from './modules/resources';
import { Contributions } from './modules/contributions';

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
          <Route path="/contributions" element={<Contributions />} />
          
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