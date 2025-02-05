import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// Importación de las imágenes
import Image51 from '@/assets/1.webp';
import Image52 from '@/assets/2.webp';
import Image53 from '@/assets/3.webp';
import Image54 from '@/assets/4.webp';
import Image55 from '@/assets/5.webp';

interface HeaderProps {
  links: { to: string; text: string; image: string }[];
  extraMessage?: string;
}

const Header: React.FC<HeaderProps> = ({ links, extraMessage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav>
        {/* Botón de hamburguesa para abrir el menú */}
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú desplegable */}
        <ul className={`navList ${isMenuOpen ? 'open' : ''}`}>
          {/* Botón de cierre (X) */}
          {isMenuOpen && (
            <button className="closeButton" onClick={closeMenu}>
              X
            </button>
          )}

          {/* Elementos del menú */}
          {links.map((link, index) => (
            <li key={index} className="navItem">
              <Link to={link.to} className="link" onClick={closeMenu}>
                {link.image && <img src={link.image} alt={link.text} className="linkImage" />}
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mensaje adicional */}
        {extraMessage && <div className="extraMessage">{extraMessage}</div>}
      </nav>
    </header>
  );
};

export default Header;