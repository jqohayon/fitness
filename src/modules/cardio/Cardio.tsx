import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRunning, FaBicycle, FaSwimmer, FaFire, FaDumbbell, FaWalking } from 'react-icons/fa';
import './Cardio.css';

const Cardio: React.FC = () => {
  const navigate = useNavigate();

  const trainingMethods = [
    { name: 'Running', path: '/cardio/running', icon: <FaRunning /> },
    { name: 'Cycling', path: '/cardio/cycling', icon: <FaBicycle /> },
    { name: 'Swimming', path: '/cardio/swimming', icon: <FaSwimmer /> },
    { name: 'HIIT', path: '/cardio/hiit', icon: <FaFire /> },
    { name: 'Jump Rope', path: '/cardio/jump-rope', icon: <FaDumbbell /> },
    { name: 'Walking', path: '/cardio/walking', icon: <FaWalking /> },
    { name: 'Cardio Machines', path: '/cardio/machines', icon: <FaDumbbell /> }
  ];

  return (
    <div className="cardio-container">
      <h1>Cardio Training Methods</h1>
      <div className="cardio-description">
        <p>Cardiovascular training is essential for improving heart health, endurance, and overall fitness. 
           Explore different cardio methods to find what works best for you.</p>
      </div>
      
      <div className="cardio-benefits">
        <h2>Benefits of Cardio Training</h2>
        <ul>
          <li>Improved heart health and circulation</li>
          <li>Increased endurance and stamina</li>
          <li>Weight management and fat loss</li>
          <li>Stress reduction and mood improvement</li>
          <li>Better sleep quality</li>
          <li>Enhanced recovery ability</li>
        </ul>
      </div>

      <div className="cardio-methods">
        <h2>Training Methods</h2>
        <div className="methods-grid">
          {trainingMethods.map((method) => (
            <button
              key={method.name}
              className="method-button"
              onClick={() => navigate(method.path)}
            >
              <span className="method-icon">{method.icon}</span>
              <span className="method-name">{method.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardio; 