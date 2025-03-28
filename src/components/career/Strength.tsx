import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../GoogleDocViewer.css';
import { GiWeightLiftingUp } from 'react-icons/gi';
import './Strength.css';

const Strength: React.FC = () => {
  const navigate = useNavigate();

  const trainingMethods = [
    { name: 'Calisthenics', path: '/strength/calisthenics' },
    { name: 'Bodyweight', path: '/strength/bodyweight' },
    { name: 'Free Weights', path: '/strength/free-weights' },
    { name: 'Olympic Lifting', path: '/strength/olympic-lifting' },
    { name: 'Machines', path: '/strength/machines' },
    { name: 'Circuit Training', path: '/strength/circuit-training' }
  ];

  return (
    <div className="strength-container">
      <h2>Strength Training</h2>
      <div className="strength-divider" />
      <GiWeightLiftingUp className="strength-icon" />
      <p className="strength-quote">Build strength, power, and confidence.</p>
      
      <div className="content-grid">
        <div className="content-card">
          <h4>Training Benefits</h4>
          <ul>
            <li><strong>Muscle Growth:</strong> Progressive overload techniques for hypertrophy.</li>
            <li><strong>Power Development:</strong> Compound movements for overall strength gains.</li>
            <li><strong>Form Mastery:</strong> Proper technique for injury prevention and efficiency.</li>
            <li><strong>Program Design:</strong> Structured workouts for consistent progress.</li>
          </ul>
        </div>

        <div className="content-card">
          <h4>Training Methods</h4>
          <div className="training-methods">
            {trainingMethods.map((method) => (
              <button
                key={method.path}
                className="strength-focus-item"
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

export default Strength; 