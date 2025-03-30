import React from 'react';
import '../../../GoogleDocViewer.css';
import { GiHand } from 'react-icons/gi';

const Massage: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Massage Therapy</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <GiHand 
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
        }}>Therapeutic massage for recovery and wellness.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Benefits</h4>
          <ul>
            <li><strong>Recovery:</strong> Reduces muscle tension and soreness</li>
            <li><strong>Flexibility:</strong> Improves range of motion</li>
            <li><strong>Stress Relief:</strong> Reduces stress and anxiety</li>
            <li><strong>Sleep:</strong> Enhances sleep quality</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Types</h4>
          <ul>
            <li>Swedish Massage</li>
            <li>Deep Tissue Massage</li>
            <li>Sports Massage</li>
            <li>Trigger Point Therapy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Massage; 