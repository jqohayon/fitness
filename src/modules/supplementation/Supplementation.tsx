import React from 'react';
import '../../GoogleDocViewer.css';
import { FaCapsules } from 'react-icons/fa';
import './Supplementation.css';

const Supplementation: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#FF9800' }}>Supplementation</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaCapsules 
          style={{ 
            fontSize: '2.5rem',
            color: '#FF9800',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#FFB74D',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Enhance your performance safely and effectively.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(255, 152, 0, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #FF9800' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#FF9800' }}>Key Supplements</h4>
          <ul style={{ color: '#FFB74D' }}>
            <li><strong style={{ color: '#FF9800' }}>Protein:</strong> Essential for muscle repair and growth.</li>
            <li><strong style={{ color: '#FF9800' }}>Creatine:</strong> Improves strength and power output.</li>
            <li><strong style={{ color: '#FF9800' }}>BCAAs:</strong> Supports muscle recovery and reduces fatigue.</li>
            <li><strong style={{ color: '#FF9800' }}>Pre-Workout:</strong> Enhances energy and focus during training.</li>
            <li><strong style={{ color: '#FF9800' }}>Multivitamins:</strong> Ensures optimal nutrient intake.</li>
            <li><strong style={{ color: '#FF9800' }}>Omega-3:</strong> Supports joint health and recovery.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem', color: '#FF9800' }}>Supplement Categories</h4>
            <div style={{ 
              fontSize: '1.1em', 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              color: '#FFB74D'
            }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
                <span className="supplement-focus-item">Protein</span>
                <span className="supplement-focus-item">Creatine</span>
                <span className="supplement-focus-item">BCAAs</span>
                <span className="supplement-focus-item">Pre-Workout</span>
              </div>
              <span className="supplement-focus-item">Vitamins</span>
              <span className="supplement-focus-item">Minerals</span>
              <span className="supplement-focus-item">Amino Acids</span>
              <span className="supplement-focus-item">Herbs</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Supplementation; 