import React from 'react';
import { FaFlag } from 'react-icons/fa';
import '../GoogleDocViewer.css';

const Goals: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Fitness Goals</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaFlag 
          style={{ 
            fontSize: '2rem',
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
        }}>Transform your fitness aspirations into achievable milestones</p>
      </div>

      <div className="content-section">
        <div className="emphasis-box">
          <h4 style={{ fontSize: '1.3rem' }}>Setting Your Path to Success</h4>
          <ul>
            <li><strong>SMART Goals:</strong> Make your goals Specific, Measurable, Achievable, Relevant, and Time-bound</li>
            <li><strong>Track Progress:</strong> Monitor and celebrate your achievements along the way</li>
            <li><strong>Stay Adaptable:</strong> Adjust your goals as needed while maintaining forward momentum</li>
            <li><strong>Be Accountable:</strong> Share your goals and progress with others for support and motivation</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem' }}>Goal Categories</h4>
            <div style={{ color: '#9d6be7', fontSize: '1.1em', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div className="emphasis-box" style={{ flex: '1 1 250px', margin: '0.5rem' }}>
                <h4>Strength</h4>
                <p>Build muscular strength through progressive overload and compound exercises</p>
              </div>
              <div className="emphasis-box" style={{ flex: '1 1 250px', margin: '0.5rem' }}>
                <h4>Weight Management</h4>
                <p>Set and achieve healthy weight goals through balanced nutrition and exercise</p>
              </div>
              <div className="emphasis-box" style={{ flex: '1 1 250px', margin: '0.5rem' }}>
                <h4>Power</h4>
                <p>Develop explosive strength and speed through dynamic training</p>
              </div>
              <div className="emphasis-box" style={{ flex: '1 1 250px', margin: '0.5rem' }}>
                <h4>Endurance</h4>
                <p>Improve cardiovascular fitness and stamina for longer, stronger performance</p>
              </div>
              <div className="emphasis-box" style={{ flex: '1 1 250px', margin: '0.5rem' }}>
                <h4>Flexibility</h4>
                <p>Enhance range of motion and mobility through stretching and mobility work</p>
              </div>
              <div className="emphasis-box" style={{ flex: '1 1 250px', margin: '0.5rem' }}>
                <h4>Tactical</h4>
                <p>Develop functional fitness and agility for real-world movement and performance</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Goals; 