import React from 'react';
import { FaAppleAlt, FaWeight, FaCalculator, FaClock } from 'react-icons/fa';

const Nutrition: React.FC = () => {
  return (
    <div className="content-section">
      <h2 className="title">Nutrition Planning</h2>
      <div className="intro-text">
        Learn about proper nutrition to fuel your workouts and support your fitness goals.
      </div>

      <div className="emphasis-box">
        <h4><FaAppleAlt className="section-icon" /> Macronutrients</h4>
        <ul>
          <li>Protein Requirements</li>
          <li>Carbohydrate Timing</li>
          <li>Healthy Fats</li>
          <li>Meal Balance</li>
        </ul>
      </div>

      <div className="emphasis-box">
        <h4><FaWeight className="section-icon" /> Goal-Based Nutrition</h4>
        <ul>
          <li>Muscle Building</li>
          <li>Fat Loss</li>
          <li>Performance</li>
          <li>Maintenance</li>
        </ul>
      </div>

      <div className="emphasis-box">
        <h4><FaCalculator className="section-icon" /> Meal Planning</h4>
        <ul>
          <li>Calorie Calculation</li>
          <li>Portion Control</li>
          <li>Meal Prep Tips</li>
          <li>Shopping Lists</li>
        </ul>
      </div>

      <div className="emphasis-box">
        <h4><FaClock className="section-icon" /> Meal Timing</h4>
        <ul>
          <li>Pre-Workout Nutrition</li>
          <li>Post-Workout Recovery</li>
          <li>Intermittent Fasting</li>
          <li>Supplement Timing</li>
        </ul>
      </div>
    </div>
  );
};

export default Nutrition; 