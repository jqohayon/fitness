import React from 'react';
import '../../../GoogleDocViewer.css';
import { FaBalanceScale } from 'react-icons/fa';

const Balance: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Life Balance</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaBalanceScale 
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
        }}>Maintain harmony between fitness and life.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Key Areas</h4>
          <ul>
            <li><strong>Work-Life:</strong> Balance career and personal time</li>
            <li><strong>Social Life:</strong> Maintain relationships and community</li>
            <li><strong>Mental Health:</strong> Emotional wellbeing and stress management</li>
            <li><strong>Physical Health:</strong> Exercise, nutrition, and recovery</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Strategies</h4>
          <ul>
            <li>Time Management</li>
            <li>Boundary Setting</li>
            <li>Self-Care Practices</li>
            <li>Goal Prioritization</li>
            <li>Regular Reflection</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Balance; 