import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importa los estilos CSS específicos para el header

interface HeaderProps {
  links: { to: string; text: string }[]; // Prop para los enlaces del header
  extraMessage?: string; // Prop opcional para el mensaje adicional
}

const Header: React.FC<HeaderProps> = ({ links, extraMessage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar si el menú está abierto

  // Función para alternar el menú desplegable
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav>
        {/* Botón de hamburguesa para abrir/cerrar el menú */}
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú desplegable */}
        <ul className={`navList ${isMenuOpen ? 'open' : ''}`}>
          {links.map((link, index) => (
            <li key={index} className="navItem">
              <Link to={link.to} className="link" onClick={toggleMenu}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mostrar el mensaje adicional si está definido */}
        {extraMessage && <div className="extraMessage">{extraMessage}</div>}
      </nav>
    </header>
  );
};

export default Header;