import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import '../../../GoogleDocViewer.css';

const JumpRope: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Jump Rope</h1>
      <div className="method-icon">
        <FaDumbbell size={48} />
      </div>
      
      <div className="method-description">
        <p>Jump rope is a highly effective cardio exercise that improves coordination, agility, and endurance. 
           It's portable, affordable, and can be done almost anywhere.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Jump Rope</h2>
        <ul>
          <li>Improves coordination and rhythm</li>
          <li>Builds cardiovascular endurance</li>
          <li>Strengthens leg muscles</li>
          <li>Enhances agility and footwork</li>
          <li>Burns calories efficiently</li>
          <li>Portable and cost-effective</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Success</h2>
        <ul>
          <li>Choose the right rope length</li>
          <li>Start with basic jumps</li>
          <li>Keep elbows close to body</li>
          <li>Land softly on balls of feet</li>
          <li>Progress to advanced techniques gradually</li>
          <li>Practice regularly for improvement</li>
        </ul>
      </div>
    </div>
  );
};

export default JumpRope; 