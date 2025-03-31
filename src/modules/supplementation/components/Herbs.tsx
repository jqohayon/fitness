import React from 'react';
import '../../../GoogleDocViewer.css';
import { FaLeaf } from 'react-icons/fa';
import './Supplementation.css';

const Herbs: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#6a1b9a' }}>Herbal Supplements</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaLeaf 
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
        }}>Natural supplements for health and performance.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(106, 27, 154, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Common Herbs</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Ashwagandha:</strong> Stress reduction and testosterone support.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Ginseng:</strong> Energy and cognitive function.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Turmeric:</strong> Anti-inflammatory properties.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Maca:</strong> Hormone balance and energy.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Benefits</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Adaptogens:</strong> Help manage stress and fatigue.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Recovery:</strong> Support immune function and healing.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Performance:</strong> Enhance energy and focus.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Health:</strong> Support overall well-being.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Usage Guidelines</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Dosage:</strong> Follow product recommendations.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Timing:</strong> Take consistently with meals.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Duration:</strong> May take weeks for full effects.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Cycling:</strong> Consider cycling for optimal benefits.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Safety Considerations</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Quality:</strong> Choose reputable brands.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Interactions:</strong> Check for medication interactions.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Pregnancy:</strong> Consult healthcare provider.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Testing:</strong> Look for third-party testing.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Herbs; 