import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../../GoogleDocViewer.css';
import { FaCapsules } from 'react-icons/fa';
import './Supplementation.css';

const Supplementation: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Supplementation</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaCapsules 
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
        }}>Enhance your fitness journey with proper supplementation.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Essential Supplements</h4>
          <ul>
            <li><strong>Protein:</strong> Build and repair muscle tissue</li>
            <li><strong>Creatine:</strong> Improve strength and power output</li>
            <li><strong>BCAAs:</strong> Support muscle recovery and growth</li>
            <li><strong>Multivitamins:</strong> Ensure optimal nutrient intake</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Timing Guidelines</h4>
          <ul>
            <li>Pre-workout: 30-60 minutes before exercise</li>
            <li>Post-workout: Within 30 minutes after exercise</li>
            <li>Daily: With meals for better absorption</li>
            <li>Rest days: Maintain consistent schedule</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Safety Considerations</h4>
          <ul>
            <li>Consult healthcare provider before starting</li>
            <li>Follow recommended dosages</li>
            <li>Stay hydrated</li>
            <li>Monitor for any adverse effects</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Supplementation; 