import React from 'react';
import '../../../../src/GoogleDocViewer.css';
import { FaOilCan } from 'react-icons/fa';
import './Supplementation.css';

const Fats: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#6a1b9a' }}>Healthy Fats</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaOilCan 
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
        }}>Essential fats for optimal health and performance.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(106, 27, 154, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Types of Fats</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Monounsaturated:</strong> Found in olive oil, avocados, and nuts.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Polyunsaturated:</strong> Omega-3 and Omega-6 fatty acids.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Saturated:</strong> Found in animal products and coconut oil.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Trans Fats:</strong> Should be avoided, found in processed foods.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Benefits</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Hormone Production:</strong> Essential for testosterone and other hormones.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Brain Health:</strong> Supports cognitive function and mood.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Joint Health:</strong> Reduces inflammation and supports mobility.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Energy:</strong> Long-lasting energy source for endurance activities.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Recommended Sources</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Fish:</strong> Salmon, mackerel, and sardines.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Nuts:</strong> Almonds, walnuts, and cashews.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Oils:</strong> Olive oil, avocado oil, and coconut oil.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Seeds:</strong> Chia seeds, flax seeds, and hemp seeds.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Intake Guidelines</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Daily Intake:</strong> 20-35% of total calories.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Omega-3:</strong> 250-500mg EPA/DHA daily.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Timing:</strong> Include with meals for better absorption.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Balance:</strong> Focus on unsaturated fats, limit saturated.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fats; 