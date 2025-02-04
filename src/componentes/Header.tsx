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

  return (
    <header className="header">
      <nav>
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navList ${isMenuOpen ? 'open' : ''}`}>
          {links.map((link, index) => (
            <li key={index} className="navItem">
              <Link to={link.to} className="link" onClick={toggleMenu}>
                {link.image && (
                  <img
                    src={link.image}
                    alt={link.text}
                    onError={(e) => {
                      e.currentTarget.src = 'Image1500'; // Fallback si la imagen falla
                    }}
                    className="linkImage"
                  />
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