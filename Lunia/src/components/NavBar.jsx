import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <h1 className="logo">Lunia</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/galeria">Personajes</Link></li>
          <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
