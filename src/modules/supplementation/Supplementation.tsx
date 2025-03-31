import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../GoogleDocViewer.css';
import { FaCapsules } from 'react-icons/fa';
import './Supplementation.css';
import Protein from './components/Protein';
import Creatine from './components/Creatine';

const Supplementation: React.FC = () => {
  const navigate = useNavigate();

  const supplements = [
    { name: 'Protein', path: '/supplementation/protein' },
    { name: 'Creatine', path: '/supplementation/creatine' },
    { name: 'BCAAs', path: '/supplementation/bcaas' },
    { name: 'Pre-Workout', path: '/supplementation/pre-workout' },
    { name: 'Vitamins', path: '/supplementation/vitamins' },
    { name: 'Minerals', path: '/supplementation/minerals' },
    { name: 'Amino Acids', path: '/supplementation/amino-acids' },
    { name: 'Herbs', path: '/supplementation/herbs' }
  ];

  return (
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
              {supplements.map((supplement) => (
                <button
                  key={supplement.path}
                  className="supplement-focus-item"
                  onClick={() => navigate(supplement.path)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem 1rem',
                    color: 'inherit',
                    font: 'inherit',
                    textAlign: 'center'
                  }}
                >
                  {supplement.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Supplementation; 