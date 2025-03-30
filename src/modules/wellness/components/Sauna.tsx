import React from 'react';
import '../../../GoogleDocViewer.css';
import { GiHotSurface } from 'react-icons/gi';

const Sauna: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Sauna Therapy</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <GiHotSurface 
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
        }}>Heat therapy for health and recovery.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Benefits</h4>
          <ul>
            <li><strong>Recovery:</strong> Promotes muscle relaxation and healing</li>
            <li><strong>Cardiovascular:</strong> Improves heart health and circulation</li>
            <li><strong>Detoxification:</strong> Aids in toxin elimination</li>
            <li><strong>Sleep:</strong> Enhances sleep quality</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Guidelines</h4>
          <ul>
            <li>Temperature: 150-195°F (65-90°C)</li>
            <li>Duration: 10-20 minutes</li>
            <li>Frequency: 2-4 times per week</li>
            <li>Hydration: Drink water before and after</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sauna; 