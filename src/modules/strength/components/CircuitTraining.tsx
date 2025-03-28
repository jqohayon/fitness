import React from 'react';
import { FaWeight } from 'react-icons/fa';
import '../../../GoogleDocViewer.css';

const CircuitTraining: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Circuit Training</h1>
      <div className="method-icon">
        <FaWeight size={48} />
      </div>
      
      <div className="method-description">
        <p>Circuit training combines strength exercises with minimal rest periods to build strength and endurance simultaneously. 
           It's an efficient way to get a full-body workout while maintaining an elevated heart rate.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Circuit Training</h2>
        <ul>
          <li>Combines strength and cardio</li>
          <li>Time-efficient workouts</li>
          <li>Burns more calories</li>
          <li>Improves endurance</li>
          <li>Reduces workout monotony</li>
          <li>Highly adaptable format</li>
        </ul>
      </div>

      <div className="format-section">
        <h2>Circuit Format</h2>
        <ul>
          <li>Multiple exercise stations</li>
          <li>Minimal rest between exercises</li>
          <li>Rest between circuit rounds</li>
          <li>Mix of strength and cardio</li>
          <li>Time or rep-based sets</li>
          <li>Progressive overload options</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Success</h2>
        <ul>
          <li>Plan your circuit layout</li>
          <li>Start with basic exercises</li>
          <li>Maintain proper form</li>
          <li>Adjust intensity as needed</li>
          <li>Stay hydrated throughout</li>
          <li>Track your progress</li>
        </ul>
      </div>
    </div>
  );
};

export default CircuitTraining; 