import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import '../../../../GoogleDocViewer.css';

const FreeWeights: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Free Weights</h1>
      <div className="method-icon">
        <FaDumbbell size={48} />
      </div>
      
      <div className="method-description">
        <p>Free weights are versatile tools for strength training that include dumbbells, barbells, and kettlebells. 
           They provide a natural range of motion and engage stabilizer muscles for functional strength development.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Free Weights</h2>
        <ul>
          <li>Engages multiple muscle groups</li>
          <li>Improves balance and coordination</li>
          <li>Develops functional strength</li>
          <li>Highly versatile workouts</li>
          <li>Greater range of motion</li>
          <li>Builds core stability</li>
        </ul>
      </div>

      <div className="equipment-section">
        <h2>Common Equipment</h2>
        <ul>
          <li>Dumbbells</li>
          <li>Barbells</li>
          <li>Kettlebells</li>
          <li>Weight Plates</li>
          <li>Benches</li>
          <li>Power Racks</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Success</h2>
        <ul>
          <li>Start with lighter weights to perfect form</li>
          <li>Use a spotter for heavy lifts</li>
          <li>Focus on controlled movements</li>
          <li>Progress weight gradually</li>
          <li>Maintain proper breathing</li>
          <li>Rest between sets appropriately</li>
        </ul>
      </div>
    </div>
  );
};

export default FreeWeights; 