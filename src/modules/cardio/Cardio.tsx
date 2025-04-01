import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../GoogleDocViewer.css';
import { GiHeartBeats } from 'react-icons/gi';
import './Cardio.css';
import Running from './components/Running';
import Cycling from './components/Cycling';
import Swimming from './components/Swimming';
import HIIT from './components/HIIT';
import JumpRope from './components/JumpRope';
import Walking from './components/Walking';
import CardioMachines from './components/CardioMachines';

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
      <h2 style={{ color: '#ffffff' }}>Cardiovascular Training</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <GiHeartBeats 
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
        }}>Elevate your endurance and heart health.</p>
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
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a', marginBottom: '1rem' }}>Training Benefits</h4>
          <ul style={{ color: '#9d6be7', margin: 0, paddingLeft: '1rem' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Endurance:</strong> Build stamina and cardiovascular fitness.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Heart Health:</strong> Improve cardiovascular function and efficiency.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Fat Loss:</strong> Optimize calorie burn and metabolism.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#6a1b9a' }}>Recovery:</strong> Active recovery and conditioning techniques.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a', marginBottom: '1.5rem' }}>Training Methods</h4>
            <div style={{ 
              fontSize: '1.1em', 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              color: '#9d6be7'
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