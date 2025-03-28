import React from 'react';
import { GiWeightLiftingUp } from 'react-icons/gi';
import '../../../GoogleDocViewer.css';

const OlympicLifting: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Olympic Lifting</h1>
      <div className="method-icon">
        <GiWeightLiftingUp size={48} />
      </div>
      
      <div className="method-description">
        <p>Olympic weightlifting consists of the snatch and clean & jerk movements. 
           These complex lifts develop explosive power, strength, and coordination while engaging the entire body.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Olympic Lifting</h2>
        <ul>
          <li>Develops explosive power</li>
          <li>Improves overall strength</li>
          <li>Enhances athletic performance</li>
          <li>Increases flexibility and mobility</li>
          <li>Builds coordination and balance</li>
          <li>Engages the entire body</li>
        </ul>
      </div>

      <div className="movements-section">
        <h2>Core Movements</h2>
        <ul>
          <li>Snatch</li>
          <li>Clean & Jerk</li>
          <li>Power Clean</li>
          <li>Hang Clean</li>
          <li>Front Squat</li>
          <li>Overhead Squat</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Success</h2>
        <ul>
          <li>Learn proper technique first</li>
          <li>Start with PVC pipe or empty bar</li>
          <li>Focus on mobility work</li>
          <li>Progress slowly and safely</li>
          <li>Consider working with a coach</li>
          <li>Maintain consistent practice</li>
        </ul>
      </div>
    </div>
  );
};

export default OlympicLifting; 