import React from 'react';
import { useLocation } from 'react-router-dom';
import './DynamicBackground.css';

const DynamicBackground: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  // Determine which background elements to show based on the current route
  const isWellness = path === '/wellness';
  const isStrength = path === '/strength';
  const isCardio = path === '/cardio';

  return (
    <>
      {/* Wellness theme - nature elements */}
      {isWellness && (
        <>
          <div className="leaf leaf-1"></div>
          <div className="leaf leaf-2"></div>
          <div className="leaf leaf-3"></div>
          <div className="leaf leaf-4"></div>
          <div className="leaf leaf-5"></div>
          <div className="leaf leaf-6"></div>
        </>
      )}

      {/* Strength theme - dynamic equipment */}
      {isStrength && (
        <>
          <div className="equipment equipment-1"></div>
          <div className="equipment equipment-2"></div>
          <div className="equipment equipment-3"></div>
          <div className="equipment equipment-4"></div>
          <div className="equipment equipment-5"></div>
          <div className="equipment equipment-6"></div>
        </>
      )}

      {/* Cardio theme - energy waves */}
      {isCardio && (
        <>
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
          <div className="wave wave-4"></div>
          <div className="wave wave-5"></div>
          <div className="wave wave-6"></div>
        </>
      )}

      {/* Default clouds for other pages */}
      {!isWellness && !isStrength && !isCardio && (
        <>
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
          <div className="cloud cloud-4"></div>
          <div className="cloud cloud-5"></div>
          <div className="cloud cloud-6"></div>
        </>
      )}
    </>
  );
};

export default DynamicBackground; 