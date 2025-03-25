import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { FaHome, FaHandHoldingHeart } from 'react-icons/fa';
import '../Navigation.css';

type NavLinkClassNameProps = {
  isActive: boolean;
};

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      {/* First Row - Core Training */}
      <NavLink to="/" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'} end>
        <FaHome size={24} />
      </NavLink>
      <NavLink to="/strength" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Strength
      </NavLink>
      <NavLink to="/cardio" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Cardio
      </NavLink>
      <NavLink to="/nutrition" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Nutrition
      </NavLink>

      {/* Second Row - Wellness & Support */}
      <div style={{ flexBasis: '100%', height: 0, margin: '-45px 0' }}></div>
      <NavLink to="/wellness" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Wellness
      </NavLink>
      <NavLink to="/goals" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Goals
      </NavLink>
      <NavLink to="/supplementation" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Supplementation
      </NavLink>
      <NavLink to="/contributions" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        <FaHandHoldingHeart size={24} />
      </NavLink>
      <NavLink to="/resources" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Resources
      </NavLink>
    </nav>
  );
};

export default Navigation; 