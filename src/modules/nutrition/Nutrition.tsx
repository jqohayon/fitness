import React from 'react';
import '../../GoogleDocViewer.css';
import { FaAppleAlt } from 'react-icons/fa';
import { Routes, Route, Link } from 'react-router-dom';
import './Nutrition.css';
import Proteins from './components/Proteins';
import Carbs from './components/Carbs';
import Fats from './components/Fats';
import Hydration from './components/Hydration';
import Vitamins from './components/Vitamins';
import Minerals from './components/Minerals';
import Timing from './components/Timing';
import Planning from './components/Planning';

const Nutrition: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={
        <div className="doc-container">
          <h2>Nutrition Planning</h2>
          <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
            <FaAppleAlt 
              style={{ 
                fontSize: '2rem',
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
            }}>Fuel your body for optimal performance.</p>
          </div>
          <div className="content-section">
            <div className="emphasis-box">
              <h4 style={{ fontSize: '1.3rem' }}>Nutritional Focus</h4>
              <ul>
                <li><strong>Macronutrients:</strong> Balance proteins, carbs, and healthy fats.</li>
                <li><strong>Meal Timing:</strong> Optimize pre and post-workout nutrition.</li>
                <li><strong>Portion Control:</strong> Learn proper serving sizes and caloric needs.</li>
                <li><strong>Meal Planning:</strong> Structured meal prep for consistent results.</li>
              </ul>
            </div>

            <section className="tools-section">
              <div className="tool-category">
                <h4 style={{ fontSize: '1.3rem' }}>Key Components</h4>
                <div style={{ color: '#9d6be7', fontSize: '1.1em', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="proteins" className="nutrition-focus-item">Proteins</Link>
                  <Link to="carbs" className="nutrition-focus-item">Carbs</Link>
                  <Link to="fats" className="nutrition-focus-item">Fats</Link>
                  <Link to="hydration" className="nutrition-focus-item">Hydration</Link>
                  <Link to="vitamins" className="nutrition-focus-item">Vitamins</Link>
                  <Link to="minerals" className="nutrition-focus-item">Minerals</Link>
                  <Link to="timing" className="nutrition-focus-item">Timing</Link>
                  <Link to="planning" className="nutrition-focus-item">Planning</Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      } />
      <Route path="proteins" element={<Proteins />} />
      <Route path="carbs" element={<Carbs />} />
      <Route path="fats" element={<Fats />} />
      <Route path="hydration" element={<Hydration />} />
      <Route path="vitamins" element={<Vitamins />} />
      <Route path="minerals" element={<Minerals />} />
      <Route path="timing" element={<Timing />} />
      <Route path="planning" element={<Planning />} />
    </Routes>
  );
};

export default Nutrition; 