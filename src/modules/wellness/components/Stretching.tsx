import React from 'react';
import '../../../GoogleDocViewer.css';
import { GiMuscleUp } from 'react-icons/gi';

const Stretching: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Stretching</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <GiMuscleUp 
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
        }}>Flexibility and mobility training.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Benefits</h4>
          <ul>
            <li><strong>Flexibility:</strong> Improves range of motion</li>
            <li><strong>Recovery:</strong> Reduces muscle tension</li>
            <li><strong>Performance:</strong> Enhances athletic ability</li>
            <li><strong>Injury Prevention:</strong> Reduces risk of injury</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Types</h4>
          <ul>
            <li>Dynamic Stretching</li>
            <li>Static Stretching</li>
            <li>PNF Stretching</li>
            <li>Yoga</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stretching; 