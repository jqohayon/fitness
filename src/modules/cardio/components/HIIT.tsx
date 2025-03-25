import React from 'react';
import { FaFire } from 'react-icons/fa';
import '../../../GoogleDocViewer.css';

const HIIT: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>High-Intensity Interval Training (HIIT)</h1>
      <div className="method-icon">
        <FaFire size={48} />
      </div>
      
      <div className="method-description">
        <p>HIIT alternates between intense bursts of activity and short periods of rest or lower-intensity exercise. 
           This training method is highly effective for burning calories and improving cardiovascular fitness.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of HIIT</h2>
        <ul>
          <li>Efficient calorie burning</li>
          <li>Improves metabolic rate</li>
          <li>Increases endurance quickly</li>
          <li>Can be done with minimal equipment</li>
          <li>Time-efficient workouts</li>
          <li>Continues burning calories post-workout</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Success</h2>
        <ul>
          <li>Start with shorter intervals</li>
          <li>Focus on proper form</li>
          <li>Allow adequate recovery time</li>
          <li>Stay hydrated throughout</li>
          <li>Listen to your body</li>
          <li>Gradually increase intensity</li>
        </ul>
      </div>
    </div>
  );
};

export default HIIT; 