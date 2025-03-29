import React from 'react';
import '../../GoogleDocViewer.css';
import { FaSpa } from 'react-icons/fa';
import './Wellness.css';

const Wellness: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#ffffff' }}>Wellness</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaSpa 
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
        }}>Mind, body, and spirit in harmony.</p>
      </div>
      <div className="content-section" style={{ 
        background: 'rgba(106, 27, 154, 0.1)',
        padding: '2rem',
        borderRadius: '8px',
        marginTop: '2rem'
      }}>
        <div className="emphasis-box" style={{ 
          borderLeft: '4px solid #6a1b9a',
          padding: '1.5rem',
          background: 'rgba(106, 27, 154, 0.05)',
          borderRadius: '4px',
          marginBottom: '2rem'
        }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a', marginBottom: '1rem' }}>Holistic Benefits</h4>
          <ul style={{ color: '#9d6be7', margin: 0, paddingLeft: '1rem' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Mental Clarity:</strong> Practice mindfulness and meditation for improved focus and reduced stress.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Recovery:</strong> Learn proper rest and recovery techniques for optimal performance.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Sleep Quality:</strong> Develop healthy sleep habits for better recovery and energy levels.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Stress Management:</strong> Implement strategies to balance fitness goals with overall wellbeing.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a', marginBottom: '1.5rem' }}>Focus Areas</h4>
            <div style={{ 
              fontSize: '1.1em', 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              color: '#9d6be7'
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