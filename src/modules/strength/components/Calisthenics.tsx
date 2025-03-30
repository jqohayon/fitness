import React from 'react';
import '../../../GoogleDocViewer.css';
import { GiWeightLiftingUp } from 'react-icons/gi';

const Calisthenics: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Calisthenics Training</h2>
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
        }}>Build strength using your body weight.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Training Benefits</h4>
          <ul>
            <li><strong>Body Control:</strong> Master your body movements and coordination.</li>
            <li><strong>Functional Strength:</strong> Develop practical, real-world strength.</li>
            <li><strong>Flexibility:</strong> Improve range of motion and mobility.</li>
            <li><strong>Progressive Overload:</strong> Scale exercises to your fitness level.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calisthenics; 