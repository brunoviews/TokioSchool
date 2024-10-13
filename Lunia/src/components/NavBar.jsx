import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <h1 className="logo">Lunia Gaming Zone</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/galeria">Personajes</Link></li>
          <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/registro">Registro</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
