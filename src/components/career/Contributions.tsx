import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../GoogleDocViewer.css';
import './Contributions.css';
import { FaHandHoldingHeart } from 'react-icons/fa';

const Contributions: React.FC = () => {
  const navigate = useNavigate();

  const strengthMethods = [
    { name: 'Calisthenics', path: '/strength/calisthenics' },
    { name: 'Bodyweight', path: '/strength/bodyweight' },
    { name: 'Free Weights', path: '/strength/free-weights' },
    { name: 'Olympic Lifting', path: '/strength/olympic-lifting' },
    { name: 'Machines', path: '/strength/machines' },
    { name: 'Circuit Training', path: '/strength/circuit-training' }
  ];

  const cardioMethods = [
    { name: 'Running', path: '/cardio/running' },
    { name: 'Cycling', path: '/cardio/cycling' },
    { name: 'Swimming', path: '/cardio/swimming' },
    { name: 'HIIT', path: '/cardio/hiit' },
    { name: 'Jump Rope', path: '/cardio/jump-rope' },
    { name: 'Walking', path: '/cardio/walking' },
    { name: 'Machines', path: '/cardio/machines' }
  ];

  return (
    <div className="doc-container">
      <h2>Training Methods</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaHandHoldingHeart 
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
        }}>Explore our comprehensive training methods.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4 style={{ fontSize: '1.3rem' }}>Strength Training Methods</h4>
          <div style={{ 
            fontSize: '1.1em', 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            color: '#9d6be7'
          }}>
            {strengthMethods.map((method) => (
              <button
                key={method.path}
                onClick={() => navigate(method.path)}
                className="training-method-button"
              >
                {method.name}
              </button>
            ))}
          </div>
        </div>

        <div className="emphasis-box">
          <h4 style={{ fontSize: '1.3rem' }}>Cardiovascular Training Methods</h4>
          <div style={{ 
            fontSize: '1.1em', 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            color: '#9d6be7'
          }}>
            {cardioMethods.map((method) => (
              <button
                key={method.path}
                onClick={() => navigate(method.path)}
                className="training-method-button"
              >
                {method.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions; 