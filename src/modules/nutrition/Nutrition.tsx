import React from 'react';
import '../../GoogleDocViewer.css';
import { FaAppleAlt } from 'react-icons/fa';
import { Routes, Route, Link } from 'react-router-dom';
import './Nutrition.css';
import Proteins from './components/Proteins';
import Carbs from './components/Carbs';

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
                  <Link to="/nutrition/proteins" className="nutrition-focus-item">Proteins</Link>
                  <Link to="/nutrition/carbs" className="nutrition-focus-item">Carbs</Link>
                  <Link to="/nutrition/fats" className="nutrition-focus-item">Fats</Link>
                  <Link to="/nutrition/hydration" className="nutrition-focus-item">Hydration</Link>
                  <Link to="/nutrition/vitamins" className="nutrition-focus-item">Vitamins</Link>
                  <Link to="/nutrition/minerals" className="nutrition-focus-item">Minerals</Link>
                  <Link to="/nutrition/timing" className="nutrition-focus-item">Timing</Link>
                  <Link to="/nutrition/planning" className="nutrition-focus-item">Planning</Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      } />
      <Route path="/nutrition/proteins" element={<Proteins />} />
      <Route path="/nutrition/carbs" element={<Carbs />} />
      {/* Add more routes as we create more components */}
    </Routes>
  );
};

export default Nutrition; 