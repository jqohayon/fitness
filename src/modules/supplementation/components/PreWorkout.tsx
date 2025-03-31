import React from 'react';
import '../../../../GoogleDocViewer.css';
import { FaBolt } from 'react-icons/fa';
import './Supplementation.css';

const PreWorkout: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#6a1b9a' }}>Pre-Workout Supplements</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaBolt 
          style={{ 
            fontSize: '2.5rem',
            color: '#6a1b9a',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#9d6be7',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Enhance your training performance and energy levels.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(106, 27, 154, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Key Ingredients</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Caffeine:</strong> Improves focus and energy.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Beta-Alanine:</strong> Reduces muscle fatigue.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Citrulline:</strong> Enhances blood flow and pumps.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Creatine:</strong> Supports strength and power.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Benefits</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Energy:</strong> Increased focus and alertness.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Performance:</strong> Enhanced strength and endurance.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Pumps:</strong> Improved blood flow and muscle fullness.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Recovery:</strong> Reduced muscle fatigue and soreness.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Dosage</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Timing:</strong> 20-30 minutes before training.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Amount:</strong> Follow product label instructions.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Frequency:</strong> 3-4 times per week maximum.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Cycling:</strong> Consider cycling to maintain effectiveness.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Safety Considerations</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Caffeine:</strong> Monitor tolerance and sensitivity.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Quality:</strong> Choose third-party tested products.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Health:</strong> Consult healthcare provider if needed.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Stimulants:</strong> Avoid combining with other stimulants.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PreWorkout; 