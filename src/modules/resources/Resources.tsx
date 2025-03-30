import React from 'react';
import '../../GoogleDocViewer.css';
import { FaBook } from 'react-icons/fa';
import './Resources.css';

const Resources: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{ color: '#6a1b9a' }}>Resources</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaBook 
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
        }}>Your comprehensive guide to fitness knowledge.</p>
      </div>
      <div className="content-section" style={{ background: 'rgba(106, 27, 154, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Learning Resources</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Books:</strong> Essential reading for fitness knowledge.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Articles:</strong> Latest research and fitness trends.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Videos:</strong> Visual guides and tutorials.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Apps:</strong> Digital tools for tracking and planning.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Courses:</strong> Structured learning programs.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Communities:</strong> Support and motivation networks.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Resource Categories</h4>
            <div style={{ 
              fontSize: '1.1em', 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              color: '#9d6be7'
            }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
                <span className="resource-focus-item">Books</span>
                <span className="resource-focus-item">Articles</span>
                <span className="resource-focus-item">Videos</span>
                <span className="resource-focus-item">Apps</span>
              </div>
              <span className="resource-focus-item">Courses</span>
              <span className="resource-focus-item">Communities</span>
              <span className="resource-focus-item">Research</span>
              <span className="resource-focus-item">Tools</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources; 