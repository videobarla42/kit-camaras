import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
      {/* Título "Pago contra entrega" */}
      <h1 style={{ marginBottom: '20px', fontSize: '24px', color: '#333' }}>Pago contra entrega</h1>

      {/* Menú de navegación */}
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>Inicio</Link>
          </li>
          <li>
            <Link to="/kit_4" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>Acerca de</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;