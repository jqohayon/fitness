import React from 'react';
import '../../GoogleDocViewer.css';
import { GiWeightLiftingUp } from 'react-icons/gi';

const Calisthenics: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#ffffff' }}>Calisthenics Training</h2>
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
      <div className="content-section" style={{ 
        background: 'rgba(106, 27, 154, 0.2)',
        padding: '2rem',
        borderRadius: '8px',
        marginTop: '2rem'
      }}>
        <div className="emphasis-box" style={{ 
          borderLeft: '4px solid #6a1b9a',
          padding: '1.5rem',
          background: 'rgba(106, 27, 154, 0.15)',
          borderRadius: '4px',
          marginBottom: '2rem'
        }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a', marginBottom: '1rem' }}>Training Benefits</h4>
          <ul style={{ color: '#9d6be7', margin: 0, paddingLeft: '1rem' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Body Control:</strong> Master your body movements and coordination.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Functional Strength:</strong> Develop practical, real-world strength.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Flexibility:</strong> Improve range of motion and mobility.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Progressive Overload:</strong> Scale exercises to your fitness level.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calisthenics; 