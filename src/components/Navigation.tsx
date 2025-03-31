import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/strength', label: 'Strength' },
    { path: '/cardio', label: 'Cardio' },
    { path: '/nutrition', label: 'Nutrition' },
    { path: '/supplementation', label: 'Supplementation' },
    { path: '/wellness', label: 'Wellness' },
    { path: '/goals', label: 'Goals' },
    { path: '/resources', label: 'Resources' },
    { path: '/contributions', label: 'Contributions' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation; 