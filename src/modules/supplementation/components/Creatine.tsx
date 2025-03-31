import React from 'react';
import { FaBolt } from 'react-icons/fa';
import '../../../GoogleDocViewer.css';

const Creatine: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Creatine Supplements</h1>
      <div className="method-icon">
        <FaBolt size={48} />
      </div>
      
      <div className="method-description">
        <p>Creatine is one of the most researched and effective supplements for improving strength, 
           power, and muscle growth. It helps enhance energy production during high-intensity activities.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Creatine</h2>
        <ul>
          <li>Increases strength and power</li>
          <li>Enhances muscle growth</li>
          <li>Improves exercise performance</li>
          <li>Supports brain health</li>
          <li>May reduce fatigue</li>
          <li>Well-researched safety profile</li>
        </ul>
      </div>

      <div className="exercises-section">
        <h2>Types of Creatine</h2>
        <ul>
          <li>Creatine Monohydrate</li>
          <li>Creatine HCL</li>
          <li>Creatine Ethyl Ester</li>
          <li>Buffered Creatine</li>
          <li>Micronized Creatine</li>
          <li>Creatine Nitrate</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Creatine Supplementation</h2>
        <ul>
          <li>Start with a loading phase</li>
          <li>Stay consistent with timing</li>
          <li>Take with carbohydrates</li>
          <li>Stay hydrated</li>
          <li>Follow recommended dosages</li>
          <li>Monitor your progress</li>
        </ul>
      </div>
    </div>
  );
};

export default Creatine; 