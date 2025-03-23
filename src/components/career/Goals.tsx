import React from 'react';
import { FaFlag } from 'react-icons/fa';
import '../styles/Goals.css';

const Goals: React.FC = () => {
  return (
    <div className="goals-container">
      <div className="goals-header">
        <FaFlag className="goals-icon" />
        <h1>Fitness Goals</h1>
        <p>Transform your fitness aspirations into achievable milestones</p>
      </div>

      <div className="goals-content">
        <div className="emphasis-box">
          <h2>Setting Your Path to Success</h2>
          <ul>
            <li><strong>SMART Goals:</strong> Make your goals Specific, Measurable, Achievable, Relevant, and Time-bound</li>
            <li><strong>Track Progress:</strong> Monitor and celebrate your achievements along the way</li>
            <li><strong>Stay Adaptable:</strong> Adjust your goals as needed while maintaining forward momentum</li>
            <li><strong>Be Accountable:</strong> Share your goals and progress with others for support and motivation</li>
          </ul>
        </div>

        <div className="goals-categories">
          <h2>Goal Categories</h2>
          <div className="category-grid">
            <div className="category-item">
              <h3>Strength</h3>
              <p>Build muscular strength through progressive overload and compound exercises</p>
            </div>
            <div className="category-item">
              <h3>Weight Management</h3>
              <p>Set and achieve healthy weight goals through balanced nutrition and exercise</p>
            </div>
            <div className="category-item">
              <h3>Power</h3>
              <p>Develop explosive strength and speed through dynamic training</p>
            </div>
            <div className="category-item">
              <h3>Endurance</h3>
              <p>Improve cardiovascular fitness and stamina for longer, stronger performance</p>
            </div>
            <div className="category-item">
              <h3>Flexibility</h3>
              <p>Enhance range of motion and mobility through stretching and mobility work</p>
            </div>
            <div className="category-item">
              <h3>Tactical</h3>
              <p>Develop functional fitness and agility for real-world movement and performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals; 