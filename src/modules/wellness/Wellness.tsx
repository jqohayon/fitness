import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import IceBath from './components/IceBath';
import Sauna from './components/Sauna';
import Massage from './components/Massage';
import Stretching from './components/Stretching';
import '../../GoogleDocViewer.css';
import { FaSpa } from 'react-icons/fa';
import './Wellness.css';

const Wellness: React.FC = () => {
  return (
    <div className="wellness-container">
      <Routes>
        <Route path="/" element={
          <div className="wellness-content">
            <h2>Wellness</h2>
            <div className="focus-areas">
              <h3>Focus Areas</h3>
              <ul>
                <li>
                  <Link to="/wellness/ice-bath">Ice Bath</Link>
                  <span className="description">Cold therapy for recovery and health benefits</span>
                </li>
                <li>
                  <Link to="/wellness/sauna">Sauna</Link>
                  <span className="description">Heat therapy for health and recovery</span>
                </li>
                <li>
                  <Link to="/wellness/massage">Massage</Link>
                  <span className="description">Therapeutic massage for recovery and wellness</span>
                </li>
                <li>
                  <Link to="/wellness/stretching">Stretching</Link>
                  <span className="description">Flexibility and mobility training</span>
                </li>
              </ul>
            </div>
          </div>
        } />
        <Route path="/ice-bath" element={<IceBath />} />
        <Route path="/sauna" element={<Sauna />} />
        <Route path="/massage" element={<Massage />} />
        <Route path="/stretching" element={<Stretching />} />
      </Routes>
    </div>
  );
};

export default Wellness; 