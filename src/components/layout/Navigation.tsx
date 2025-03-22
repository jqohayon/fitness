import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import '../Navigation.css';

type NavLinkClassNameProps = {
  isActive: boolean;
};

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
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
      <NavLink to="/wellness" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Wellness
      </NavLink>
      <NavLink to="/resources" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Resources
      </NavLink>
    </nav>
  );
};

export default Navigation; 