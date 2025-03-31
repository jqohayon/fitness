import React from 'react';
import '../../../../GoogleDocViewer.css';
import { FaGem } from 'react-icons/fa';
import './Nutrition.css';

const Minerals: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#6a1b9a' }}>Minerals</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaGem 
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
        }}>Essential minerals for optimal health and performance.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(106, 27, 154, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Key Minerals</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Iron:</strong> Oxygen transport and energy production.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Calcium:</strong> Bone health and muscle function.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Magnesium:</strong> Muscle relaxation and energy production.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Zinc:</strong> Immune function and protein synthesis.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Benefits</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Performance:</strong> Supports muscle contraction and energy.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Recovery:</strong> Aids in tissue repair and adaptation.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Health:</strong> Maintains bone density and immune function.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Balance:</strong> Regulates fluid and electrolyte balance.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Food Sources</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Iron:</strong> Red meat, leafy greens, and legumes.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Calcium:</strong> Dairy, fortified plant milk, and leafy greens.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Magnesium:</strong> Nuts, seeds, and whole grains.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Zinc:</strong> Meat, shellfish, and legumes.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Supplementation</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Iron:</strong> Consider for athletes with low levels.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Calcium:</strong> May be needed if dairy intake is low.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Magnesium:</strong> Can help with sleep and recovery.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Zinc:</strong> May support immune function and recovery.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Minerals; 