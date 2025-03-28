import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../GoogleDocViewer.css';
import { GiHeartBeats } from 'react-icons/gi';
import './Cardio.css';

const Cardio: React.FC = () => {
  const navigate = useNavigate();

  const trainingMethods = [
    { name: 'Running', path: '/cardio/running' },
    { name: 'Cycling', path: '/cardio/cycling' },
    { name: 'Swimming', path: '/cardio/swimming' },
    { name: 'HIIT', path: '/cardio/hiit' },
    { name: 'Jump Rope', path: '/cardio/jump-rope' },
    { name: 'Walking', path: '/cardio/walking' },
    { name: 'Machines', path: '/cardio/machines' }
  ];

  return (
    <div className="doc-container">
      <h2 style={{ color: '#FF6B6B' }}>Cardiovascular Training</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <GiHeartBeats 
          style={{ 
            fontSize: '2.5rem',
            color: '#FF6B6B',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#FF8B8B',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Elevate your endurance and heart health.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(255, 107, 107, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #FF6B6B' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#FF6B6B' }}>Training Benefits</h4>
          <ul style={{ color: '#FF8B8B' }}>
            <li><strong style={{ color: '#FF6B6B' }}>Endurance:</strong> Build stamina and cardiovascular fitness.</li>
            <li><strong style={{ color: '#FF6B6B' }}>Heart Health:</strong> Improve cardiovascular function and efficiency.</li>
            <li><strong style={{ color: '#FF6B6B' }}>Fat Loss:</strong> Optimize calorie burn and metabolism.</li>
            <li><strong style={{ color: '#FF6B6B' }}>Recovery:</strong> Active recovery and conditioning techniques.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem', color: '#FF6B6B' }}>Training Methods</h4>
            <div style={{ 
              fontSize: '1.1em', 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              color: '#FF8B8B'
            }}>
              {trainingMethods.map((method) => (
                <button
                  key={method.path}
                  className="cardio-focus-item"
                  onClick={() => navigate(method.path)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem 1rem',
                    color: 'inherit',
                    font: 'inherit',
                    textAlign: 'center'
                  }}
                >
                  {method.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cardio; 