import React from 'react';
import { FaWalking } from 'react-icons/fa';
import '../../../GoogleDocViewer.css';

const Walking: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Walking</h1>
      <div className="method-icon">
        <FaWalking size={48} />
      </div>
      
      <div className="method-description">
        <p>Walking is a fundamental and accessible form of cardiovascular exercise that can be done by almost anyone. 
           It's perfect for beginners and can be progressively challenging for all fitness levels.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Walking</h2>
        <ul>
          <li>Low-impact cardiovascular exercise</li>
          <li>Improves heart health</li>
          <li>Helps with weight management</li>
          <li>Reduces stress and anxiety</li>
          <li>Strengthens bones and muscles</li>
          <li>Can be social and enjoyable</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Success</h2>
        <ul>
          <li>Wear comfortable, supportive shoes</li>
          <li>Start with shorter walks and build up</li>
          <li>Maintain good posture</li>
          <li>Vary your walking routes</li>
          <li>Add inclines for challenge</li>
          <li>Track your progress</li>
        </ul>
      </div>
    </div>
  );
};

export default Walking; 