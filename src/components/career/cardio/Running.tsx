import React from 'react';
import '../GoogleDocViewer.css';
import { GiHeartBeats } from 'react-icons/gi';

const Running: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#FF6B6B' }}>Running</h2>
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
        }}>Build endurance and cardiovascular fitness.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(255, 107, 107, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #FF6B6B' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#FF6B6B' }}>Training Benefits</h4>
          <ul style={{ color: '#FF8B8B' }}>
            <li><strong style={{ color: '#FF6B6B' }}>Endurance:</strong> Build stamina and cardiovascular capacity.</li>
            <li><strong style={{ color: '#FF6B6B' }}>Weight Management:</strong> Effective calorie burning.</li>
            <li><strong style={{ color: '#FF6B6B' }}>Mental Health:</strong> Reduce stress and improve mood.</li>
            <li><strong style={{ color: '#FF6B6B' }}>Bone Health:</strong> Strengthen bones and joints.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Running; 