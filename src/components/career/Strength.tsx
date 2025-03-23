import React from 'react';
import '../GoogleDocViewer.css';
import { GiWeightLiftingUp } from 'react-icons/gi';
import './Strength.css';

const Strength: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#E63946' }}>Strength Training</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <GiWeightLiftingUp 
          style={{ 
            fontSize: '2.5rem',
            color: '#E63946',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#FF8B8B',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Build strength, power, and confidence.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(230, 57, 70, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #E63946' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#E63946' }}>Training Benefits</h4>
          <ul style={{ color: '#FF8B8B' }}>
            <li><strong style={{ color: '#E63946' }}>Muscle Growth:</strong> Progressive overload techniques for hypertrophy.</li>
            <li><strong style={{ color: '#E63946' }}>Power Development:</strong> Compound movements for overall strength gains.</li>
            <li><strong style={{ color: '#E63946' }}>Form Mastery:</strong> Proper technique for injury prevention and efficiency.</li>
            <li><strong style={{ color: '#E63946' }}>Program Design:</strong> Structured workouts for consistent progress.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem', color: '#E63946' }}>Key Exercises</h4>
            <div style={{ 
              fontSize: '1.1em', 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              color: '#FF8B8B'
            }}>
              <span className="strength-focus-item">Squats</span>
              <span className="strength-focus-item">Deadlifts</span>
              <span className="strength-focus-item">Bench Press</span>
              <span className="strength-focus-item">Rows</span>
              <span className="strength-focus-item">Pull-ups</span>
              <span className="strength-focus-item">Overhead Press</span>
              <span className="strength-focus-item">Hip Thrust</span>
              <span className="strength-focus-item">Core Work</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Strength; 