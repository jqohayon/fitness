import React from 'react';
import '../../../GoogleDocViewer.css';
import { GiSnowflake1 } from 'react-icons/gi';

const IceBath: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Ice Bath Therapy</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <GiSnowflake1 
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
        }}>Cold therapy for recovery and health benefits.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Benefits</h4>
          <ul>
            <li><strong>Recovery:</strong> Reduces inflammation and muscle soreness</li>
            <li><strong>Immune System:</strong> Boosts immune function</li>
            <li><strong>Mental Health:</strong> Improves mood and stress resilience</li>
            <li><strong>Metabolism:</strong> Enhances fat burning and energy levels</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Guidelines</h4>
          <ul>
            <li>Temperature: 50-59°F (10-15°C)</li>
            <li>Duration: 2-10 minutes</li>
            <li>Frequency: 2-3 times per week</li>
            <li>Safety: Always have someone nearby</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IceBath; 