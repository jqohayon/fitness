import React from 'react';
import '../../GoogleDocViewer.css';
import { GiWeightLiftingUp } from 'react-icons/gi';

const Machines: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#E63946' }}>Machine Training</h2>
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
        }}>Build strength with guided movement patterns.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(230, 57, 70, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #E63946' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#E63946' }}>Training Benefits</h4>
          <ul style={{ color: '#FF8B8B' }}>
            <li><strong style={{ color: '#E63946' }}>Safety:</strong> Guided movements reduce injury risk.</li>
            <li><strong style={{ color: '#E63946' }}>Isolation:</strong> Target specific muscle groups.</li>
            <li><strong style={{ color: '#E63946' }}>Ease of Use:</strong> Simple to learn and adjust.</li>
            <li><strong style={{ color: '#E63946' }}>Consistency:</strong> Maintain proper form easily.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Machines; 