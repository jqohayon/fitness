import React from 'react';
import { GiGymBag } from 'react-icons/gi';
import '../../../GoogleDocViewer.css';

const Machines: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Weight Machines</h1>
      <div className="method-icon">
        <GiGymBag size={48} />
      </div>
      
      <div className="method-description">
        <p>Weight machines provide guided resistance training with fixed movement patterns. 
           They're excellent for beginners, isolation exercises, and controlled progressive overload.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Weight Machines</h2>
        <ul>
          <li>Guided movement patterns</li>
          <li>Safe for beginners</li>
          <li>Excellent for isolation exercises</li>
          <li>Easy to adjust resistance</li>
          <li>Reduced risk of injury</li>
          <li>Great for circuit training</li>
        </ul>
      </div>

      <div className="equipment-section">
        <h2>Common Machines</h2>
        <ul>
          <li>Leg Press</li>
          <li>Chest Press</li>
          <li>Lat Pulldown</li>
          <li>Cable Machines</li>
          <li>Smith Machine</li>
          <li>Seated Row</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Success</h2>
        <ul>
          <li>Adjust settings for your body</li>
          <li>Start with lighter weights</li>
          <li>Focus on form and control</li>
          <li>Progress weight systematically</li>
          <li>Clean equipment after use</li>
          <li>Mix with free weight exercises</li>
        </ul>
      </div>
    </div>
  );
};

export default Machines; 