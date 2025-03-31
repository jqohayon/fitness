import React from 'react';
import { FaDrumstickBite } from 'react-icons/fa';
import '../../../GoogleDocViewer.css';

const Proteins: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Proteins</h1>
      <div className="method-icon">
        <FaDrumstickBite size={48} />
      </div>
      
      <div className="method-description">
        <p>Proteins are essential macronutrients that play a crucial role in muscle repair, growth, 
           and overall body function. They are made up of amino acids, which are the building blocks of life.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Protein</h2>
        <ul>
          <li>Supports muscle growth and repair</li>
          <li>Helps maintain lean body mass</li>
          <li>Supports immune function</li>
          <li>Promotes satiety</li>
          <li>Essential for hormone production</li>
          <li>Supports tissue repair</li>
        </ul>
      </div>

      <div className="exercises-section">
        <h2>Protein Sources</h2>
        <ul>
          <li>Lean Meats (chicken, turkey, fish)</li>
          <li>Eggs and Dairy</li>
          <li>Plant-based Proteins (legumes, tofu)</li>
          <li>Protein Powders</li>
          <li>Greek Yogurt</li>
          <li>Nuts and Seeds</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Protein Intake</h2>
        <ul>
          <li>Calculate your daily protein needs</li>
          <li>Distribute protein across meals</li>
          <li>Include variety in protein sources</li>
          <li>Consider timing around workouts</li>
          <li>Monitor portion sizes</li>
          <li>Stay hydrated</li>
        </ul>
      </div>
    </div>
  );
};

export default Proteins; 