import React from 'react';
import { FaRunning } from 'react-icons/fa';
import '../../../GoogleDocViewer.css';

const Bodyweight: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Bodyweight Training</h1>
      <div className="method-icon">
        <FaRunning size={48} />
      </div>
      
      <div className="method-description">
        <p>Bodyweight training uses your own body mass as resistance for strength development. 
           It's highly accessible, requires minimal equipment, and can be adapted for any fitness level.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Bodyweight Training</h2>
        <ul>
          <li>No equipment necessary</li>
          <li>Can be done anywhere</li>
          <li>Improves functional movement</li>
          <li>Builds relative strength</li>
          <li>Enhances body awareness</li>
          <li>Suitable for all levels</li>
        </ul>
      </div>

      <div className="exercises-section">
        <h2>Basic Exercises</h2>
        <ul>
          <li>Squats</li>
          <li>Push-ups</li>
          <li>Lunges</li>
          <li>Planks</li>
          <li>Mountain Climbers</li>
          <li>Burpees</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Success</h2>
        <ul>
          <li>Focus on proper form</li>
          <li>Progress through variations</li>
          <li>Maintain consistent practice</li>
          <li>Listen to your body</li>
          <li>Mix up exercises</li>
          <li>Stay motivated with challenges</li>
        </ul>
      </div>
    </div>
  );
};

export default Bodyweight; 