import React from 'react';
import '../../../GoogleDocViewer.css';
import { FaBed } from 'react-icons/fa';

const Recovery: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Recovery</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaBed 
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
        }}>Optimize your recovery for better performance.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Key Components</h4>
          <ul>
            <li><strong>Sleep:</strong> Quality and quantity for optimal recovery</li>
            <li><strong>Nutrition:</strong> Proper fueling and supplementation</li>
            <li><strong>Active Recovery:</strong> Light movement and mobility work</li>
            <li><strong>Stress Management:</strong> Mental and emotional recovery</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Recovery Methods</h4>
          <ul>
            <li>Foam Rolling</li>
            <li>Stretching</li>
            <li>Ice/Heat Therapy</li>
            <li>Massage</li>
            <li>Compression</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recovery; 