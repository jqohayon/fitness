import React from 'react';
import '../GoogleDocViewer.css';
import { GiWeightLiftingUp } from 'react-icons/gi';

const FreeWeights: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#E63946' }}>Free Weights Training</h2>
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
        }}>Build strength with free weights.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(230, 57, 70, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #E63946' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#E63946' }}>Training Benefits</h4>
          <ul style={{ color: '#FF8B8B' }}>
            <li><strong style={{ color: '#E63946' }}>Compound Movements:</strong> Work multiple muscle groups.</li>
            <li><strong style={{ color: '#E63946' }}>Stability:</strong> Develop balance and coordination.</li>
            <li><strong style={{ color: '#E63946' }}>Progressive Overload:</strong> Easy to increase resistance.</li>
            <li><strong style={{ color: '#E63946' }}>Functional Strength:</strong> Real-world movement patterns.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FreeWeights; 