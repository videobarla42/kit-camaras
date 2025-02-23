import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  links: { to: string; text: string; image: string }[];
  extraMessage?: string;
  theme?: string; // Puede ser 'orange', 'blue', 'green', etc.
}

const Header: React.FC<HeaderProps> = ({ links, extraMessage, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Genera la clase del tema si se pasa la propiedad
  const themeClass = theme ? `header-${theme}` : '';

  return (
    <header className={`header ${themeClass}`}>
      <nav>
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navList ${isMenuOpen ? 'open' : ''}`}>
          {isMenuOpen && (
            <button className="closeButton" onClick={toggleMenu}>
              &times;
            </button>
          )}
          {links.map((link, index) => (
            <li key={index} className="navItem">
              <Link to={link.to} className="link" onClick={toggleMenu}>
                {link.image && (
                  <img src={link.image} alt={link.text} className="linkImage" />
                )}
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        {extraMessage && <div className="extraMessage">{extraMessage}</div>}
      </nav>
    </header>
  );
};

export default Header;
