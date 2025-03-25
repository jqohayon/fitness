import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDumbbell, FaRunning, FaWeight } from 'react-icons/fa';
import { GiWeightLiftingUp, GiMuscleUp, GiGymBag } from 'react-icons/gi';
import './Strength.css';

const Strength: React.FC = () => {
  const navigate = useNavigate();

  const trainingMethods = [
    { name: 'Free Weights', path: '#/strength/free-weights', icon: <FaDumbbell /> },
    { name: 'Olympic Lifting', path: '#/strength/olympic-lifting', icon: <GiWeightLiftingUp /> },
    { name: 'Machines', path: '#/strength/machines', icon: <GiGymBag /> },
    { name: 'Calisthenics', path: '#/strength/calisthenics', icon: <GiMuscleUp /> },
    { name: 'Bodyweight', path: '#/strength/bodyweight', icon: <FaRunning /> },
    { name: 'Circuit Training', path: '#/strength/circuit-training', icon: <FaWeight /> }
  ];

  return (
    <div className="strength-container">
      <h1>Strength Training Methods</h1>
      <div className="strength-description">
        <p>Strength training is essential for building muscle, increasing bone density, and improving overall fitness. 
           Explore different methods to find what works best for your goals.</p>
      </div>
      
      <div className="strength-benefits">
        <h2>Benefits of Strength Training</h2>
        <ul>
          <li>Builds muscle mass and strength</li>
          <li>Increases bone density</li>
          <li>Improves joint function and stability</li>
          <li>Boosts metabolism</li>
          <li>Enhances athletic performance</li>
          <li>Reduces risk of injury</li>
        </ul>
      </div>

      <div className="strength-methods">
        <h2>Training Methods</h2>
        <div className="methods-grid">
          {trainingMethods.map((method) => (
            <div
              key={method.name}
              className="method-button"
              onClick={() => {
                alert(`Clicking ${method.name}`);
                navigate(method.path);
              }}
              style={{
                cursor: 'pointer',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                textAlign: 'center',
                backgroundColor: '#f5f5f5',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            >
              <span className="method-icon">{method.icon}</span>
              <span className="method-name">{method.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Strength; 