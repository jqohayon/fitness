import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../../GoogleDocViewer.css';
import { FaCapsules } from 'react-icons/fa';
import './Supplementation.css';
import Protein from './components/Protein';
import Creatine from './components/Creatine';

const Supplementation: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={
        <div className="doc-container">
          <h2 style={{ color: '#6a1b9a' }}>Supplementation</h2>
          <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
            <FaCapsules 
              style={{ 
                fontSize: '2.5rem',
                color: '#6a1b9a',
                transition: 'all 0.3s ease'
              }}
            />
            <p style={{
              color: '#9d6be7',
              fontSize: '1.2rem',
              marginTop: '8px',
              marginBottom: '0',
              fontStyle: 'italic'
            }}>Enhance your performance safely and effectively.</p>
          </div>
          <div className="content-section" style={{ background: 'rgba(106, 27, 154, 0.1)' }}>
            <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
              <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Key Supplements</h4>
              <ul style={{ color: '#9d6be7' }}>
                <li><strong style={{ color: '#6a1b9a' }}>Protein:</strong> Essential for muscle repair and growth.</li>
                <li><strong style={{ color: '#6a1b9a' }}>Creatine:</strong> Improves strength and power output.</li>
                <li><strong style={{ color: '#6a1b9a' }}>BCAAs:</strong> Supports muscle recovery and reduces fatigue.</li>
                <li><strong style={{ color: '#6a1b9a' }}>Pre-Workout:</strong> Enhances energy and focus during training.</li>
                <li><strong style={{ color: '#6a1b9a' }}>Multivitamins:</strong> Ensures optimal nutrient intake.</li>
                <li><strong style={{ color: '#6a1b9a' }}>Omega-3:</strong> Supports joint health and recovery.</li>
              </ul>
            </div>

            <section className="tools-section">
              <div className="tool-category">
                <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Supplement Categories</h4>
                <div style={{ 
                  fontSize: '1.1em', 
                  display: 'flex', 
                  gap: '1.5rem', 
                  justifyContent: 'center', 
                  flexWrap: 'wrap',
                  color: '#9d6be7'
                }}>
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
                    <Link to="/supplementation/protein" className="supplement-focus-item">Protein</Link>
                    <Link to="/supplementation/creatine" className="supplement-focus-item">Creatine</Link>
                    <Link to="/supplementation/bcaas" className="supplement-focus-item">BCAAs</Link>
                    <Link to="/supplementation/pre-workout" className="supplement-focus-item">Pre-Workout</Link>
                  </div>
                  <Link to="/supplementation/vitamins" className="supplement-focus-item">Vitamins</Link>
                  <Link to="/supplementation/minerals" className="supplement-focus-item">Minerals</Link>
                  <Link to="/supplementation/amino-acids" className="supplement-focus-item">Amino Acids</Link>
                  <Link to="/supplementation/herbs" className="supplement-focus-item">Herbs</Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      } />
      <Route path="/supplementation/protein" element={<Protein />} />
      <Route path="/supplementation/creatine" element={<Creatine />} />
      {/* Add more routes as we create more components */}
    </Routes>
  );
};

export default Supplementation; 