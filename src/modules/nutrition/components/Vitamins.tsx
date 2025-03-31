import React from 'react';
import '../../../GoogleDocViewer.css';
import { FaCapsules } from 'react-icons/fa';
import './Nutrition.css';

const Vitamins: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#6a1b9a' }}>Vitamins</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaCapsules 
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
        }}>Essential vitamins for optimal health and performance.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(106, 27, 154, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Key Vitamins</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Vitamin D:</strong> Bone health and immune function.</li>
            <li><strong style={{ color: '#6a1b9a' }}>B Vitamins:</strong> Energy production and metabolism.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Vitamin C:</strong> Immune support and recovery.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Vitamin E:</strong> Antioxidant and cell protection.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Benefits</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Energy:</strong> Supports metabolism and ATP production.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Recovery:</strong> Aids in tissue repair and immune function.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Performance:</strong> Enhances endurance and strength.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Health:</strong> Supports overall well-being and longevity.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Food Sources</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Vitamin D:</strong> Fatty fish, eggs, and sunlight.</li>
            <li><strong style={{ color: '#6a1b9a' }}>B Vitamins:</strong> Whole grains, meat, and dairy.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Vitamin C:</strong> Citrus fruits and vegetables.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Vitamin E:</strong> Nuts, seeds, and vegetable oils.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Supplementation</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Multivitamin:</strong> Daily insurance for nutrient needs.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Vitamin D:</strong> Consider during winter months.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Timing:</strong> Take with meals for better absorption.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Quality:</strong> Choose reputable brands and forms.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vitamins; 