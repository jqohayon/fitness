import React from 'react';
import { GiMuscleUp } from 'react-icons/gi';
import '../../../../GoogleDocViewer.css';

const Calisthenics: React.FC = () => {
  return (
    <div className="training-method-container">
      <h1>Calisthenics</h1>
      <div className="method-icon">
        <GiMuscleUp size={48} />
      </div>
      
      <div className="method-description">
        <p>Calisthenics is a form of strength training that uses body weight exercises to build strength, 
           flexibility, and control. It emphasizes mastery of fundamental movements and progression to advanced skills.</p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Calisthenics</h2>
        <ul>
          <li>Builds functional strength</li>
          <li>Improves body control</li>
          <li>Enhances flexibility</li>
          <li>Minimal equipment needed</li>
          <li>Can be done anywhere</li>
          <li>Develops body awareness</li>
        </ul>
      </div>

      <div className="movements-section">
        <h2>Core Movements</h2>
        <ul>
          <li>Push-ups</li>
          <li>Pull-ups</li>
          <li>Dips</li>
          <li>Muscle-ups</li>
          <li>Handstands</li>
          <li>Planche progressions</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>Tips for Success</h2>
        <ul>
          <li>Master basic movements first</li>
          <li>Progress gradually to harder variations</li>
          <li>Focus on form and control</li>
          <li>Include mobility work</li>
          <li>Be patient with skill development</li>
          <li>Train consistently</li>
        </ul>
      </div>
    </div>
  );
};

export default Calisthenics; 