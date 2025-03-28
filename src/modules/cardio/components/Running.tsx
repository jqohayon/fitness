import React from 'react';
import { FaRunning } from 'react-icons/fa';
import '../../../GoogleDocViewer.css';

const Running: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Running</h1>
      <div className="method-icon">
        <FaRunning size={48} />
      </div>
      
      <div className="method-description">
        <p>Running is one of the most accessible and effective forms of cardiovascular exercise. 
           It can be done anywhere, requires minimal equipment, and offers numerous health benefits.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Running</h2>
        <ul>
          <li>Improves cardiovascular health and endurance</li>
          <li>Strengthens muscles and bones</li>
          <li>Helps with weight management</li>
          <li>Reduces stress and improves mental health</li>
          <li>Enhances sleep quality</li>
          <li>Boosts immune system</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Success</h2>
        <ul>
          <li>Start gradually and build up distance/speed</li>
          <li>Invest in proper running shoes</li>
          <li>Stay hydrated before, during, and after runs</li>
          <li>Include warm-up and cool-down periods</li>
          <li>Listen to your body and rest when needed</li>
          <li>Vary your running routes and intensity</li>
        </ul>
      </div>
    </div>
  );
};

export default Running; 