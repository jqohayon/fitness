import React from 'react';
import '../../../GoogleDocViewer.css';
import { FaPrayingHands } from 'react-icons/fa';

const Yoga: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Yoga</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaPrayingHands 
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
        }}>Unite mind, body, and spirit through mindful movement.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Benefits</h4>
          <ul>
            <li><strong>Flexibility:</strong> Improves range of motion and mobility</li>
            <li><strong>Strength:</strong> Builds functional strength and stability</li>
            <li><strong>Balance:</strong> Enhances coordination and body awareness</li>
            <li><strong>Mental Health:</strong> Reduces stress and anxiety</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Styles</h4>
          <ul>
            <li>Hatha Yoga</li>
            <li>Vinyasa Flow</li>
            <li>Ashtanga</li>
            <li>Yin Yoga</li>
            <li>Restorative Yoga</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Yoga; 