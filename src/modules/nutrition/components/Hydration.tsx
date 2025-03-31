import React from 'react';
import '../../../../GoogleDocViewer.css';
import { FaTint } from 'react-icons/fa';
import './Nutrition.css';

const Hydration: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#6a1b9a' }}>Hydration</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaTint 
          style={{ 
            fontSize: '2.5rem',
            color: '#6a1b9a',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#9d6be7',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Stay hydrated for optimal performance and recovery.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(106, 27, 154, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Importance of Hydration</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Performance:</strong> Maintains strength and endurance.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Recovery:</strong> Aids in muscle repair and nutrient delivery.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Temperature:</strong> Regulates body temperature during exercise.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Focus:</strong> Supports mental clarity and concentration.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Hydration Guidelines</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Daily Intake:</strong> 2-3 liters of water per day.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Pre-Workout:</strong> 500ml 2-3 hours before exercise.</li>
            <li><strong style={{ color: '#6a1b9a' }}>During Exercise:</strong> 200-300ml every 15-20 minutes.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Post-Workout:</strong> Replace fluid losses within 2 hours.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Electrolytes</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Sodium:</strong> Maintains fluid balance and nerve function.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Potassium:</strong> Supports muscle contractions and heart health.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Magnesium:</strong> Aids in energy production and muscle function.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Calcium:</strong> Essential for muscle contractions and bone health.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Signs of Dehydration</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Thirst:</strong> Feeling thirsty indicates dehydration.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Urine Color:</strong> Dark yellow or amber colored urine.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Fatigue:</strong> Decreased energy and performance.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Headache:</strong> Dehydration can cause headaches.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hydration; 