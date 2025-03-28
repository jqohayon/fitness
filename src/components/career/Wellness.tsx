import React from 'react';
import '../GoogleDocViewer.css';
import { FaSpa } from 'react-icons/fa';
import './Wellness.css';

const Wellness: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#4ABED9' }}>Wellness</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaSpa 
          style={{ 
            fontSize: '2.5rem',
            color: '#4ABED9',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#7CD5ED',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Mind, body, and spirit in harmony.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(74, 190, 217, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #4ABED9' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#4ABED9' }}>Holistic Benefits</h4>
          <ul style={{ color: '#7CD5ED' }}>
            <li><strong style={{ color: '#4ABED9' }}>Mental Clarity:</strong> Practice mindfulness and meditation for improved focus and reduced stress.</li>
            <li><strong style={{ color: '#4ABED9' }}>Recovery:</strong> Learn proper rest and recovery techniques for optimal performance.</li>
            <li><strong style={{ color: '#4ABED9' }}>Sleep Quality:</strong> Develop healthy sleep habits for better recovery and energy levels.</li>
            <li><strong style={{ color: '#4ABED9' }}>Stress Management:</strong> Implement strategies to balance fitness goals with overall wellbeing.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem', color: '#4ABED9' }}>Focus Areas</h4>
            <div style={{ 
              fontSize: '1.1em', 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              color: '#7CD5ED'
            }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
                <span className="wellness-focus-item">Meditation</span>
                <span className="wellness-focus-item">Ice Bath</span>
                <span className="wellness-focus-item">Breathing</span>
                <span className="wellness-focus-item">Yoga</span>
              </div>
              <span className="wellness-focus-item">Massage</span>
              <span className="wellness-focus-item">Recovery</span>
              <span className="wellness-focus-item">Sleep</span>
              <span className="wellness-focus-item">Balance</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Wellness; 