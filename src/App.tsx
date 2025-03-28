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

// Placeholder components for unimplemented sections
const Nutrition: React.FC = () => (
  <div className="training-method-container">
    <h1>Nutrition</h1>
    <p>Coming soon! This section will provide comprehensive information about nutrition and diet.</p>
  </div>
);

const Wellness: React.FC = () => (
  <div className="training-method-container">
    <h1>Wellness</h1>
    <p>Coming soon! This section will cover mental and physical wellness practices.</p>
  </div>
);

const Supplementation: React.FC = () => (
  <div className="training-method-container">
    <h1>Supplementation</h1>
    <p>Coming soon! This section will provide information about supplements and their proper use.</p>
  </div>
);

const Goals: React.FC = () => (
  <div className="training-method-container">
    <h1>Goals</h1>
    <p>Coming soon! This section will help you set and track your fitness goals.</p>
  </div>
);

const Resources: React.FC = () => (
  <div className="training-method-container">
    <h1>Resources</h1>
    <p>Coming soon! This section will provide additional resources and references.</p>
  </div>
);

const Contributions: React.FC = () => (
  <div className="training-method-container">
    <h1>Contributions</h1>
    <p>Coming soon! This section will provide information about contributing to the project.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="app">
      <Navigation />
      <DynamicBackground />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/strength" element={<Strength />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/supplementation" element={<Supplementation />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contributions" element={<Contributions />} />
          
          {/* Strength Training Routes */}
          <Route path="/strength/calisthenics" element={<Calisthenics />} />
          <Route path="/strength/bodyweight" element={<Bodyweight />} />
          <Route path="/strength/free-weights" element={<FreeWeights />} />
          <Route path="/strength/olympic-lifting" element={<OlympicLifting />} />
          <Route path="/strength/machines" element={<Machines />} />
          <Route path="/strength/circuit-training" element={<CircuitTraining />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SocialLinks />
    </div>
  );
}

export default App; 