import React from 'react';
import { FaBreadSlice } from 'react-icons/fa';
import '../../../GoogleDocViewer.css';

const Carbs: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Carbohydrates</h1>
      <div className="method-icon">
        <FaBreadSlice size={48} />
      </div>
      
      <div className="method-description">
        <p>Carbohydrates are the body's primary source of energy, essential for fueling workouts 
           and supporting overall performance. They come in various forms, each serving different purposes.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Carbohydrates</h2>
        <ul>
          <li>Primary energy source</li>
          <li>Supports brain function</li>
          <li>Enhances athletic performance</li>
          <li>Promotes muscle glycogen storage</li>
          <li>Supports recovery</li>
          <li>Provides fiber for digestion</li>
        </ul>
      </div>

      <div className="exercises-section">
        <h2>Carbohydrate Sources</h2>
        <ul>
          <li>Whole Grains</li>
          <li>Fruits and Vegetables</li>
          <li>Legumes</li>
          <li>Dairy Products</li>
          <li>Starchy Vegetables</li>
          <li>Sports Drinks</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Carbohydrate Intake</h2>
        <ul>
          <li>Choose complex carbs over simple</li>
          <li>Time carbs around workouts</li>
          <li>Include fiber-rich sources</li>
          <li>Monitor portion sizes</li>
          <li>Consider activity level</li>
          <li>Balance with other macros</li>
        </ul>
      </div>
    </div>
  );
};

export default Carbs; 