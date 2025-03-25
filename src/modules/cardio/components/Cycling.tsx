import React from 'react';
import { FaBicycle } from 'react-icons/fa';
import '../../../GoogleDocViewer.css';

const Cycling: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Cycling</h1>
      <div className="method-icon">
        <FaBicycle size={48} />
      </div>
      
      <div className="method-description">
        <p>Cycling is a low-impact cardiovascular exercise that can be done indoors or outdoors. 
           It's excellent for building endurance and leg strength while being gentle on your joints.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Cycling</h2>
        <ul>
          <li>Low-impact cardiovascular workout</li>
          <li>Builds leg strength and endurance</li>
          <li>Improves balance and coordination</li>
          <li>Can be done indoors or outdoors</li>
          <li>Great for all fitness levels</li>
          <li>Environmentally friendly transportation</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Success</h2>
        <ul>
          <li>Ensure proper bike fit and setup</li>
          <li>Start with shorter rides and gradually increase duration</li>
          <li>Mix up terrain and intensity</li>
          <li>Wear appropriate safety gear</li>
          <li>Stay hydrated during longer rides</li>
          <li>Maintain proper posture while riding</li>
        </ul>
      </div>
    </div>
  );
};

export default Cycling; 