import React from 'react';
import '../GoogleDocViewer.css';
import { GiHeartBeats } from 'react-icons/gi';

const CardioMachines: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#FF6B6B' }}>Cardio Machines</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <GiHeartBeats 
          style={{ 
            fontSize: '2.5rem',
            color: '#FF6B6B',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#FF8B8B',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Structured cardio with built-in tracking.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(255, 107, 107, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #FF6B6B' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#FF6B6B' }}>Training Benefits</h4>
          <ul style={{ color: '#FF8B8B' }}>
            <li><strong style={{ color: '#FF6B6B' }}>Consistency:</strong> Track progress and maintain pace.</li>
            <li><strong style={{ color: '#FF6B6B' }}>Variety:</strong> Different machines for different goals.</li>
            <li><strong style={{ color: '#FF6B6B' }}>Convenience:</strong> Weather-independent workouts.</li>
            <li><strong style={{ color: '#FF6B6B' }}>Programs:</strong> Pre-set workouts for different levels.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardioMachines; 