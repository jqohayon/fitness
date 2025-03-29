import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../GoogleDocViewer.css';
import { GiHeartBeats } from 'react-icons/gi';
import './Cardio.css';

const Cardio: React.FC = () => {
  const navigate = useNavigate();

  const trainingMethods = [
    { name: 'Running', path: '/cardio/running' },
    { name: 'Cycling', path: '/cardio/cycling' },
    { name: 'Swimming', path: '/cardio/swimming' },
    { name: 'HIIT', path: '/cardio/hiit' },
    { name: 'Jump Rope', path: '/cardio/jump-rope' },
    { name: 'Walking', path: '/cardio/walking' },
    { name: 'Machines', path: '/cardio/machines' }
  ];

  return (
    <div className="cardio-container">
      <h2>Cardiovascular Training</h2>
      <div className="cardio-divider" />
      <GiHeartBeats className="cardio-icon" />
      <p className="cardio-quote">Elevate your endurance and heart health.</p>
      
      <div className="content-grid">
        <div className="content-card">
          <h4>Training Benefits</h4>
          <ul>
            <li><strong>Endurance:</strong> Build stamina and cardiovascular fitness.</li>
            <li><strong>Heart Health:</strong> Improve cardiovascular function and efficiency.</li>
            <li><strong>Fat Loss:</strong> Optimize calorie burn and metabolism.</li>
            <li><strong>Recovery:</strong> Active recovery and conditioning techniques.</li>
          </ul>
        </div>

        <div className="content-card">
          <h4>Training Methods</h4>
          <div className="training-methods">
            {trainingMethods.map((method) => (
              <button
                key={method.path}
                className="cardio-focus-item"
                onClick={() => navigate(method.path)}
              >
                {method.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardio; 