import React from 'react';
import '../../../GoogleDocViewer.css';
import { FaOm } from 'react-icons/fa';

const Meditation: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Meditation</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaOm 
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
        }}>Find peace and clarity through mindful practice.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Benefits</h4>
          <ul>
            <li><strong>Mental Clarity:</strong> Improves focus and concentration</li>
            <li><strong>Stress Reduction:</strong> Lowers cortisol levels and anxiety</li>
            <li><strong>Emotional Balance:</strong> Enhances emotional regulation</li>
            <li><strong>Sleep Quality:</strong> Promotes better sleep patterns</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Techniques</h4>
          <ul>
            <li>Mindful Breathing</li>
            <li>Body Scan</li>
            <li>Loving-Kindness</li>
            <li>Transcendental</li>
            <li>Zen</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Meditation; 