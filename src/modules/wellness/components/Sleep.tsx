import React from 'react';
import '../../../GoogleDocViewer.css';
import { FaMoon } from 'react-icons/fa';

const Sleep: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Sleep Optimization</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaMoon 
          style={{ 
            fontSize: '2.5rem',
            color: '#ffffff',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#ffffff',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Quality sleep for optimal performance and recovery.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Benefits</h4>
          <ul>
            <li><strong>Recovery:</strong> Muscle repair and growth hormone release</li>
            <li><strong>Performance:</strong> Improved energy and focus</li>
            <li><strong>Health:</strong> Enhanced immune function and metabolism</li>
            <li><strong>Mental Clarity:</strong> Better memory and learning</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Sleep Hygiene Tips</h4>
          <ul>
            <li>Consistent sleep schedule</li>
            <li>Dark, cool sleeping environment</li>
            <li>Limit blue light exposure</li>
            <li>Regular exercise routine</li>
            <li>Stress management practices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sleep; 