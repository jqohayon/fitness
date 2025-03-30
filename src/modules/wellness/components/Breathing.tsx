import React from 'react';
import '../../../GoogleDocViewer.css';
import { FaWind } from 'react-icons/fa';

const Breathing: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Breathing Techniques</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaWind 
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
        }}>Master your breath for better performance and recovery.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Benefits</h4>
          <ul>
            <li><strong>Performance:</strong> Improves oxygen delivery and endurance</li>
            <li><strong>Recovery:</strong> Enhances relaxation and stress reduction</li>
            <li><strong>Focus:</strong> Increases mental clarity and concentration</li>
            <li><strong>Sleep:</strong> Promotes better sleep quality</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Techniques</h4>
          <ul>
            <li>Box Breathing (4-4-4-4)</li>
            <li>Diaphragmatic Breathing</li>
            <li>Wim Hof Method</li>
            <li>Alternate Nostril Breathing</li>
            <li>Deep Belly Breathing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breathing; 