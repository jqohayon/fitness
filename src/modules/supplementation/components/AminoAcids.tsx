import React from 'react';
import '../../../GoogleDocViewer.css';
import { FaAtom } from 'react-icons/fa';
import './Supplementation.css';

const AminoAcids: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#6a1b9a' }}>Amino Acids</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaAtom 
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
        }}>Building blocks of protein for muscle growth and recovery.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(106, 27, 154, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Types of Amino Acids</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Essential:</strong> Must be obtained from diet.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Non-Essential:</strong> Body can produce naturally.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Conditional:</strong> Essential during stress or illness.</li>
            <li><strong style={{ color: '#6a1b9a' }}>BCAAs:</strong> Special group of essential aminos.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Benefits</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Growth:</strong> Supports muscle protein synthesis.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Recovery:</strong> Aids in tissue repair.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Performance:</strong> Enhances energy and endurance.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Health:</strong> Supports immune function.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Key Amino Acids</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>L-Glutamine:</strong> Most abundant amino acid.</li>
            <li><strong style={{ color: '#6a1b9a' }}>L-Arginine:</strong> Supports nitric oxide production.</li>
            <li><strong style={{ color: '#6a1b9a' }}>L-Carnitine:</strong> Aids in fat metabolism.</li>
            <li><strong style={{ color: '#6a1b9a' }}>L-Taurine:</strong> Supports heart and brain health.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Supplementation</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Timing:</strong> Before, during, or after workouts.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Forms:</strong> Powder, capsules, or tablets.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Combination:</strong> Often included in protein powders.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Quality:</strong> Choose pharmaceutical grade when possible.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AminoAcids; 