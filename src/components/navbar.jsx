import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className={isActive('/')}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/students" className={isActive('/students')}>
            Estudiantes
          </Link>
        </li>
        <li>
          <Link to="/qr" className={isActive('/qr')}>
            QR
          </Link>
        </li>
        <li>
          <Link to="/error" className={isActive('/error')}>
            Error
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;