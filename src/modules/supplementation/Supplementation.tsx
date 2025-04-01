import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../GoogleDocViewer.css';
import { FaCapsules } from 'react-icons/fa';
import './Supplementation.css';
import Protein from './components/Protein';
import Creatine from './components/Creatine';

const Supplementation: React.FC = () => {
  const navigate = useNavigate();

  const supplements = [
    { name: 'Protein', path: '/supplementation/protein' },
    { name: 'Creatine', path: '/supplementation/creatine' },
    { name: 'BCAAs', path: '/supplementation/bcaas' },
    { name: 'Pre-Workout', path: '/supplementation/pre-workout' },
    { name: 'Amino Acids', path: '/supplementation/amino-acids' },
    { name: 'Herbs', path: '/supplementation/herbs' }
  ];

  return (
    <div className="doc-container">
      <h2>Supplementation</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaCapsules 
          style={{ 
            fontSize: '2.5rem',
            color: '#6a1b9a',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#ffffff',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Enhance your performance with strategic supplementation.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(106, 27, 154, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Key Supplements</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Protein:</strong> Essential for muscle growth and recovery.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Creatine:</strong> Improves strength and power output.</li>
            <li><strong style={{ color: '#6a1b9a' }}>BCAAs:</strong> Supports muscle preservation and recovery.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Pre-Workout:</strong> Enhances energy and focus.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Amino Acids:</strong> Supports various bodily functions.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Herbs:</strong> Natural supplements for health and performance.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Supplement Categories</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {supplements.map((supplement) => (
              <button
                key={supplement.name}
                onClick={() => navigate(supplement.path)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#6a1b9a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#9d6be7'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6a1b9a'}
              >
                {supplement.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplementation; 