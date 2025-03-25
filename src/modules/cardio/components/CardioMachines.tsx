import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import '../../../GoogleDocViewer.css';

const CardioMachines: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Cardio Machines</h1>
      <div className="method-icon">
        <FaDumbbell size={48} />
      </div>
      
      <div className="method-description">
        <p>Cardio machines provide structured, controlled environments for cardiovascular exercise. 
           They offer various options for all fitness levels and can be used year-round regardless of weather.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Cardio Machines</h2>
        <ul>
          <li>Controlled environment for exercise</li>
          <li>Track metrics accurately</li>
          <li>Various intensity options</li>
          <li>Weather-independent workouts</li>
          <li>Low-impact options available</li>
          <li>Great for interval training</li>
        </ul>
      </div>

      <div className="equipment-section">
        <h2>Common Equipment</h2>
        <ul>
          <li>Treadmill</li>
          <li>Elliptical</li>
          <li>Stationary Bike</li>
          <li>Rowing Machine</li>
          <li>Stair Climber</li>
          <li>Air Bike</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Success</h2>
        <ul>
          <li>Learn proper machine settings</li>
          <li>Start with basic programs</li>
          <li>Maintain proper form</li>
          <li>Clean equipment after use</li>
          <li>Mix up different machines</li>
          <li>Progress gradually</li>
        </ul>
      </div>
    </div>
  );
};

export default CardioMachines; 