import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../GoogleDocViewer.css';
import { GiWeightLiftingUp } from 'react-icons/gi';
import './Strength.css';

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
      <h2 style={{ 
        color: '#E63946',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '2.5rem',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>Strength Training</h2>
      <hr style={{ 
        border: 'none',
        height: '2px',
        background: 'linear-gradient(to right, transparent, #E63946, transparent)',
        margin: '1rem 0'
      }} />
      <div style={{ 
        textAlign: 'center', 
        marginTop: '1rem', 
        marginBottom: '2rem',
        fontFamily: 'Poppins, sans-serif'
      }}>
        <GiWeightLiftingUp 
          style={{ 
            fontSize: '3rem',
            color: '#E63946',
            transition: 'all 0.3s ease',
            marginBottom: '1rem'
          }}
        />
        <p style={{
          color: '#FF8B8B',
          fontSize: '1.2rem',
          marginTop: '0.5rem',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Build strength, power, and confidence.</p>
      </div>
      <div className="content-section" style={{ 
        background: 'rgba(230, 57, 70, 0.1)',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}>
        <div className="emphasis-box" style={{ 
          borderLeft: '4px solid #E63946',
          padding: '1.5rem',
          marginBottom: '2rem',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h4 style={{ 
            fontSize: '1.3rem', 
            color: '#E63946',
            fontFamily: 'Poppins, sans-serif',
            marginBottom: '1rem'
          }}>Training Benefits</h4>
          <ul style={{ 
            color: '#FF8B8B',
            fontFamily: 'Poppins, sans-serif'
          }}>
            <li><strong style={{ color: '#E63946' }}>Muscle Growth:</strong> Progressive overload techniques for hypertrophy.</li>
            <li><strong style={{ color: '#E63946' }}>Power Development:</strong> Compound movements for overall strength gains.</li>
            <li><strong style={{ color: '#E63946' }}>Form Mastery:</strong> Proper technique for injury prevention and efficiency.</li>
            <li><strong style={{ color: '#E63946' }}>Program Design:</strong> Structured workouts for consistent progress.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ 
              fontSize: '1.3rem', 
              color: '#E63946',
              fontFamily: 'Poppins, sans-serif',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>Training Methods</h4>
            <div style={{ 
              fontSize: '1.1em', 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              color: '#FF8B8B',
              fontFamily: 'Poppins, sans-serif'
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
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
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