import React from 'react';
import { FaHeartbeat, FaRunning, FaBiking, FaSwimmer } from 'react-icons/fa';

const Cardio: React.FC = () => {
  return (
    <div className="content-section">
      <h2 className="title">Cardiovascular Training</h2>
      <div className="intro-text">
        Explore different types of cardio exercises and build endurance for a healthier lifestyle.
      </div>

      <div className="emphasis-box">
        <h4><FaHeartbeat className="section-icon" /> Benefits of Cardio</h4>
        <ul>
          <li>Improved Heart Health</li>
          <li>Better Endurance</li>
          <li>Weight Management</li>
          <li>Stress Reduction</li>
        </ul>
      </div>

      <div className="emphasis-box">
        <h4><FaRunning className="section-icon" /> Running Programs</h4>
        <ul>
          <li>Couch to 5K</li>
          <li>Interval Training</li>
          <li>Distance Running</li>
          <li>Sprint Training</li>
        </ul>
      </div>

      <div className="emphasis-box">
        <h4><FaBiking className="section-icon" /> Cycling Workouts</h4>
        <ul>
          <li>Indoor Cycling</li>
          <li>Road Biking</li>
          <li>Mountain Biking</li>
          <li>HIIT Cycling</li>
        </ul>
      </div>

      <div className="emphasis-box">
        <h4><FaSwimmer className="section-icon" /> Swimming</h4>
        <ul>
          <li>Stroke Techniques</li>
          <li>Pool Workouts</li>
          <li>Open Water Swimming</li>
          <li>Recovery Swims</li>
        </ul>
      </div>
    </div>
  );
};

export default Cardio; 