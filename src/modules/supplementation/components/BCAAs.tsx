import React from 'react';
import '../../../GoogleDocViewer.css';
import { FaFlask } from 'react-icons/fa';
import './Supplementation.css';

const BCAAs: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#6a1b9a' }}>BCAAs (Branched-Chain Amino Acids)</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaFlask 
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
        }}>Essential amino acids for muscle recovery and growth.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(106, 27, 154, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>What are BCAAs?</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Leucine:</strong> Stimulates muscle protein synthesis.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Isoleucine:</strong> Supports energy production and metabolism.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Valine:</strong> Helps maintain muscle tissue and energy.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Benefits</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Recovery:</strong> Reduces muscle soreness and fatigue.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Growth:</strong> Supports muscle protein synthesis.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Performance:</strong> May reduce fatigue during exercise.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Preservation:</strong> Helps prevent muscle breakdown.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Dosage</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Timing:</strong> Before, during, or after workouts.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Amount:</strong> 5-10g per serving.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Ratio:</strong> 2:1:1 (Leucine:Isoleucine:Valine).</li>
            <li><strong style={{ color: '#6a1b9a' }}>Frequency:</strong> 1-2 servings per day.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Considerations</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Protein:</strong> May be unnecessary if protein intake is sufficient.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Cost:</strong> Consider cost-effectiveness vs. whole protein.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Quality:</strong> Choose reputable brands with third-party testing.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Taste:</strong> Available in various flavors and forms.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BCAAs; 