import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import IceBath from './components/IceBath';
import Sauna from './components/Sauna';
import Massage from './components/Massage';
import Stretching from './components/Stretching';
import Meditation from './components/Meditation';
import Breathing from './components/Breathing';
import Yoga from './components/Yoga';
import Recovery from './components/Recovery';
import Sleep from './components/Sleep';
import Balance from './components/Balance';
import '../../GoogleDocViewer.css';
import { FaSpa } from 'react-icons/fa';
import './Wellness.css';

const Wellness: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Wellness</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaSpa 
          style={{ 
            fontSize: '2.5rem',
            color: '#6a1b9a',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#ffffff',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Mind, body, and spirit in harmony.</p>
      </div>

      <Routes>
        <Route index element={
          <div className="content-section">
            <div className="emphasis-box">
              <h4>Overview</h4>
              <ul>
                <li><strong>Mental Clarity:</strong> Practice mindfulness and meditation for improved focus and reduced stress.</li>
                <li><strong>Recovery:</strong> Learn proper rest and recovery techniques for optimal performance.</li>
                <li><strong>Sleep Quality:</strong> Develop healthy sleep habits for better recovery and energy levels.</li>
                <li><strong>Stress Management:</strong> Implement strategies to balance fitness goals with overall wellbeing.</li>
              </ul>
            </div>

            <section className="tools-section">
              <div className="tool-category">
                <h4>Focus Areas</h4>
                <div className="focus-areas">
                  <Link to="/wellness/meditation" className="wellness-focus-item">Meditation</Link>
                  <Link to="/wellness/ice-bath" className="wellness-focus-item">Ice Bath</Link>
                  <Link to="/wellness/breathing" className="wellness-focus-item">Breathing</Link>
                  <Link to="/wellness/yoga" className="wellness-focus-item">Yoga</Link>
                  <Link to="/wellness/massage" className="wellness-focus-item">Massage</Link>
                  <Link to="/wellness/recovery" className="wellness-focus-item">Recovery</Link>
                  <Link to="/wellness/sleep" className="wellness-focus-item">Sleep</Link>
                  <Link to="/wellness/balance" className="wellness-focus-item">Balance</Link>
                </div>
              </div>
            </section>
          </div>
        } />
        <Route path="ice-bath" element={<IceBath />} />
        <Route path="sauna" element={<Sauna />} />
        <Route path="massage" element={<Massage />} />
        <Route path="stretching" element={<Stretching />} />
        <Route path="meditation" element={<Meditation />} />
        <Route path="breathing" element={<Breathing />} />
        <Route path="yoga" element={<Yoga />} />
        <Route path="recovery" element={<Recovery />} />
        <Route path="sleep" element={<Sleep />} />
        <Route path="balance" element={<Balance />} />
      </Routes>
    </div>
  );
};

export default Wellness; 