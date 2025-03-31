import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import '../../../GoogleDocViewer.css';

const Protein: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Protein Supplements</h1>
      <div className="method-icon">
        <FaDumbbell size={48} />
      </div>
      
      <div className="method-description">
        <p>Protein supplements are essential for muscle repair, growth, and recovery. 
           They provide a convenient way to meet your daily protein requirements and support your fitness goals.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Protein Supplements</h2>
        <ul>
          <li>Supports muscle growth and repair</li>
          <li>Enhances post-workout recovery</li>
          <li>Helps maintain lean muscle mass</li>
          <li>Supports weight management</li>
          <li>Convenient protein source</li>
          <li>Quick and easy to consume</li>
        </ul>
      </div>

      <div className="exercises-section">
        <h2>Types of Protein Supplements</h2>
        <ul>
          <li>Whey Protein</li>
          <li>Casein Protein</li>
          <li>Plant-Based Protein</li>
          <li>Protein Bars</li>
          <li>Protein RTDs</li>
          <li>Protein Powders</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Protein Supplementation</h2>
        <ul>
          <li>Choose high-quality brands</li>
          <li>Consider your dietary restrictions</li>
          <li>Time your intake appropriately</li>
          <li>Stay within recommended dosages</li>
          <li>Mix with water or milk</li>
          <li>Monitor your overall protein intake</li>
        </ul>
      </div>
    </div>
  );
};

export default Protein; 