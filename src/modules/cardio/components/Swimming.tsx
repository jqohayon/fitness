import React from 'react';
import { FaSwimmer } from 'react-icons/fa';
import '../../../GoogleDocViewer.css';

const Swimming: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Swimming</h1>
      <div className="method-icon">
        <FaSwimmer size={48} />
      </div>
      
      <div className="method-description">
        <p>Swimming is a full-body workout that combines cardiovascular exercise with resistance training. 
           It's one of the best low-impact exercises for overall fitness and health.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Swimming</h2>
        <ul>
          <li>Full-body workout</li>
          <li>Zero-impact on joints</li>
          <li>Improves cardiovascular health</li>
          <li>Builds muscle strength and endurance</li>
          <li>Enhances flexibility</li>
          <li>Great for stress relief</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Success</h2>
        <ul>
          <li>Learn proper breathing techniques</li>
          <li>Start with basic strokes and progress gradually</li>
          <li>Use appropriate swimming gear</li>
          <li>Practice regularly to build endurance</li>
          <li>Mix up different strokes for variety</li>
          <li>Consider taking lessons to improve form</li>
        </ul>
      </div>
    </div>
  );
};

export default Swimming; 