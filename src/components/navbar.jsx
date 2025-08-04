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
            <h2>
                <Link to="/" className={isActive('/')}>
                    Inicio
                </Link>
            </h2>
        </li>
        <li>
            <h2>
                <Link to="/students" className={isActive('/students')}>
                    Estudiantes
                </Link>
            </h2>
        </li>
        <li>
            <h2>
                <Link to="/qr" className={isActive('/qr')}>
                    QR
                </Link>
            </h2>
        </li>
        <li>
            <h2>
                <Link to="/error" className={isActive('/error')}>
                    Error
                </Link>
            </h2>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;