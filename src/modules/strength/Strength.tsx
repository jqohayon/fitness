import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../GoogleDocViewer.css';
import { GiWeightLiftingUp } from 'react-icons/gi';
import './Strength.css';
import Calisthenics from './components/Calisthenics';

const Strength: React.FC = () => {
  const navigate = useNavigate();

  const trainingMethods = [
    { name: 'Calisthenics', path: '/strength/calisthenics' },
    { name: 'Bodyweight', path: '/strength/bodyweight' },
    { name: 'Free Weights', path: '/strength/free-weights' },
    { name: 'Olympic Lifting', path: '/strength/olympic-lifting' },
    { name: 'Machines', path: '/strength/machines' },
    { name: 'Circuit Training', path: '/strength/circuit-training' }
  ];

  return (
    <div className="doc-container">
      <h2 style={{ color: '#ffffff' }}>Strength Training</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <GiWeightLiftingUp 
          style={{ 
            fontSize: '2.5rem',
            color: '#ffffff',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#ffffff',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Build strength, power, and confidence.</p>
      </div>
      <div className="content-section" style={{ 
        background: 'rgba(106, 27, 154, 0.1)',
        padding: '2rem',
        borderRadius: '8px',
        marginTop: '2rem'
      }}>
        <div className="emphasis-box" style={{ 
          borderLeft: '4px solid #6a1b9a',
          padding: '1.5rem',
          background: 'rgba(106, 27, 154, 0.05)',
          borderRadius: '4px',
          marginBottom: '2rem'
        }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a', marginBottom: '1rem' }}>Training Benefits</h4>
          <ul style={{ color: '#9d6be7', margin: 0, paddingLeft: '1rem' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Muscle Growth:</strong> Progressive overload techniques for hypertrophy.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Power Development:</strong> Compound movements for overall strength gains.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Form Mastery:</strong> Proper technique for injury prevention and efficiency.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Program Design:</strong> Structured workouts for consistent progress.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Training Methods</h4>
            <div style={{ 
              fontSize: '1.1em', 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              color: '#9d6be7'
            }}>
              {trainingMethods.map((method) => (
                <button
                  key={method.path}
                  className="strength-focus-item"
                  onClick={() => navigate(method.path)}
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
                  {method.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Strength; 