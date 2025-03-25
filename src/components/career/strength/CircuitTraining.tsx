import React from 'react';
import '../GoogleDocViewer.css';
import { GiWeightLiftingUp } from 'react-icons/gi';

const CircuitTraining: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#E63946' }}>Circuit Training</h2>
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
        }}>Build strength with high-intensity circuits.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(230, 57, 70, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #E63946' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#E63946' }}>Training Benefits</h4>
          <ul style={{ color: '#FF8B8B' }}>
            <li><strong style={{ color: '#E63946' }}>Efficiency:</strong> Full body workout in less time.</li>
            <li><strong style={{ color: '#E63946' }}>Cardiovascular:</strong> Improve heart health while building strength.</li>
            <li><strong style={{ color: '#E63946' }}>Variety:</strong> Keep workouts engaging and challenging.</li>
            <li><strong style={{ color: '#E63946' }}>Fat Burning:</strong> High-intensity intervals boost metabolism.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CircuitTraining; 