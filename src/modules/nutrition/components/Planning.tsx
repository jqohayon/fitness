import React from 'react';
import '../../../../GoogleDocViewer.css';
import { FaCalendarAlt } from 'react-icons/fa';
import './Nutrition.css';

const Planning: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#6a1b9a' }}>Nutrition Planning</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaCalendarAlt 
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
        }}>Strategic nutrition planning for optimal performance and results.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(106, 27, 154, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Meal Planning</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Weekly Prep:</strong> Plan and prepare meals ahead.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Portions:</strong> Calculate and portion meals.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Variety:</strong> Include different food groups.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Flexibility:</strong> Adjust based on activity level.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Macro Tracking</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Goals:</strong> Set daily macro targets.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Apps:</strong> Use tracking applications.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Adjustments:</strong> Monitor and modify as needed.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Consistency:</strong> Track regularly for results.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Shopping Strategy</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>List:</strong> Create detailed shopping list.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Schedule:</strong> Plan shopping trips.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Storage:</strong> Proper food storage methods.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Budget:</strong> Plan within your budget.</li>
          </ul>
        </div>

        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Long-term Planning</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Goals:</strong> Set nutrition objectives.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Progress:</strong> Track changes over time.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Adjustments:</strong> Modify based on results.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Sustainability:</strong> Create maintainable habits.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Planning; 