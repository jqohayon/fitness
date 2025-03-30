import React from 'react';
import '../../../GoogleDocViewer.css';
import { FaSnowflake } from 'react-icons/fa';

const IceBath: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Ice Bath Therapy</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaSnowflake 
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
        }}>Cold therapy for recovery and performance.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Benefits</h4>
          <ul>
            <li><strong>Recovery:</strong> Reduces inflammation and muscle soreness</li>
            <li><strong>Performance:</strong> Improves circulation and energy levels</li>
            <li><strong>Mental Toughness:</strong> Builds resilience and discipline</li>
            <li><strong>Sleep:</strong> Enhances sleep quality and recovery</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Guidelines</h4>
          <ul>
            <li>Temperature: 50-59°F (10-15°C)</li>
            <li>Duration: 2-10 minutes</li>
            <li>Frequency: 2-3 times per week</li>
            <li>Timing: Post-workout or morning</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IceBath; 