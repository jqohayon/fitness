import React from 'react';
import '../../GoogleDocViewer.css';
import { GiJumpingRope } from 'react-icons/gi';

const JumpRope: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#FF6B6B' }}>Jump Rope</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <GiJumpingRope 
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
        }}>Portable cardio for coordination and endurance.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(255, 107, 107, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #FF6B6B' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#FF6B6B' }}>Training Benefits</h4>
          <ul style={{ color: '#FF8B8B' }}>
            <li><strong style={{ color: '#FF6B6B' }}>Portability:</strong> Workout anywhere, anytime.</li>
            <li><strong style={{ color: '#FF6B6B' }}>Coordination:</strong> Improve balance and agility.</li>
            <li><strong style={{ color: '#FF6B6B' }}>Bone Health:</strong> Strengthen bones and joints.</li>
            <li><strong style={{ color: '#FF6B6B' }}>Calorie Burn:</strong> High-intensity cardio workout.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JumpRope; 