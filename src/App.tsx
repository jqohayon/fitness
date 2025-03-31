import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './modules/home/Home';
import Cardio from './modules/cardio/Cardio';
import Supplementation from './modules/supplementation/Supplementation';
import Nutrition from './modules/nutrition/Nutrition';
import BCAAs from './modules/supplementation/components/BCAAs';
import PreWorkout from './modules/supplementation/components/PreWorkout';
import AminoAcids from './modules/supplementation/components/AminoAcids';
import Herbs from './modules/supplementation/components/Herbs';
import Proteins from './modules/nutrition/components/Proteins';
import Carbs from './modules/nutrition/components/Carbs';
import Fats from './modules/nutrition/components/Fats';
import Hydration from './modules/nutrition/components/Hydration';
import Vitamins from './modules/nutrition/components/Vitamins';
import Minerals from './modules/nutrition/components/Minerals';
import Timing from './modules/nutrition/components/Timing';
import Planning from './modules/nutrition/components/Planning';
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
import { Wellness } from './modules/wellness';
import { Goals } from './modules/goals';
import { Resources } from './modules/resources';
import Contributions from './components/career/Contributions';

// Import Wellness components
import IceBath from './modules/wellness/components/IceBath';
import Sauna from './modules/wellness/components/Sauna';
import Massage from './modules/wellness/components/Massage';
import Stretching from './modules/wellness/components/Stretching';
import Meditation from './modules/wellness/components/Meditation';
import Breathing from './modules/wellness/components/Breathing';
import Yoga from './modules/wellness/components/Yoga';
import Recovery from './modules/wellness/components/Recovery';
import Sleep from './modules/wellness/components/Sleep';
import Balance from './modules/wellness/components/Balance';

// Import Supplementation components
import Protein from './modules/supplementation/components/Protein';
import Creatine from './modules/supplementation/components/Creatine';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/supplementation" element={<Supplementation />} />
          <Route path="/supplementation/bcaas" element={<BCAAs />} />
          <Route path="/supplementation/pre-workout" element={<PreWorkout />} />
          <Route path="/supplementation/amino-acids" element={<AminoAcids />} />
          <Route path="/supplementation/herbs" element={<Herbs />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/nutrition/proteins" element={<Proteins />} />
          <Route path="/nutrition/carbs" element={<Carbs />} />
          <Route path="/nutrition/fats" element={<Fats />} />
          <Route path="/nutrition/hydration" element={<Hydration />} />
          <Route path="/nutrition/vitamins" element={<Vitamins />} />
          <Route path="/nutrition/minerals" element={<Minerals />} />
          <Route path="/nutrition/timing" element={<Timing />} />
          <Route path="/nutrition/planning" element={<Planning />} />
          <Route path="/strength" element={<Strength />} />
          <Route path="/strength/calisthenics" element={<Calisthenics />} />
          <Route path="/strength/bodyweight" element={<Bodyweight />} />
          <Route path="/strength/free-weights" element={<FreeWeights />} />
          <Route path="/strength/olympic-lifting" element={<OlympicLifting />} />
          <Route path="/strength/machines" element={<Machines />} />
          <Route path="/strength/circuit-training" element={<CircuitTraining />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/wellness/ice-bath" element={<IceBath />} />
          <Route path="/wellness/sauna" element={<Sauna />} />
          <Route path="/wellness/massage" element={<Massage />} />
          <Route path="/wellness/stretching" element={<Stretching />} />
          <Route path="/wellness/meditation" element={<Meditation />} />
          <Route path="/wellness/breathing" element={<Breathing />} />
          <Route path="/wellness/yoga" element={<Yoga />} />
          <Route path="/wellness/recovery" element={<Recovery />} />
          <Route path="/wellness/sleep" element={<Sleep />} />
          <Route path="/wellness/balance" element={<Balance />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contributions" element={<Contributions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 