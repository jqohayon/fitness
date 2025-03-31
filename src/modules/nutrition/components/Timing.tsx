import React from 'react';
import '../../../../GoogleDocViewer.css';
import { FaClock } from 'react-icons/fa';
import './Nutrition.css';

const Timing: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#6a1b9a' }}>Nutrition Timing</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaClock 
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
        }}>Optimize your nutrition timing for better performance and recovery.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(106, 27, 154, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Pre-Workout</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Timing:</strong> 2-3 hours before exercise.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Macros:</strong> Carbs and protein, low fat.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Hydration:</strong> Drink water throughout the day.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Snacks:</strong> 30-60 minutes before if needed.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>During Workout</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Hydration:</strong> Regular sips of water.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Electrolytes:</strong> For sessions over 60 minutes.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Carbs:</strong> For endurance activities.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Timing:</strong> Every 15-30 minutes.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Post-Workout</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Window:</strong> Within 30 minutes.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Protein:</strong> 20-30g for muscle repair.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Carbs:</strong> Replenish glycogen stores.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Hydration:</strong> Replace fluid losses.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Daily Timing</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Meals:</strong> Every 3-4 hours.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Snacks:</strong> Between meals if needed.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Protein:</strong> Distribute throughout day.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Carbs:</strong> Higher around workouts.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timing; 