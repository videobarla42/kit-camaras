import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Kits_8_DS_2CE56D0T_IRPF_C from './pages/kits/kits_8_DS-2CE56D0T-IRPF(C)/kits_8_DS-2CE56D0T-IRPF(C).tsx'; // Ruta correcta para Home
import Kit_4_DS_2CE56D0T_IRPF_C from './pages/kits/kit_4_DS-2CE56D0T-IRPF(C)/kit_4_DS-2CE56D0T-IRPF(C).tsx'; // Ruta correcta para el componente 'About'
import './App.css'; // Importa el archivo CSS

const App: React.FC = () => {
  return (
    <div>
      {/* Header flotante */}
      <header className="header">
        <nav>
          <ul className="navList">
            <li className="navItem">
              <Link to="/" className="link">kit de 8 camaras</Link> {/* Ruta para el inicio */}
            </li>
            <li className="navItem">
              <Link to="/kit_4" className="link">kit de 4 camaras</Link> {/* Ruta corregida para 'Acerca de' */}
            </li>
          </ul>
        </nav>
      </header>

      {/* Contenido principal */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Kits_8_DS_2CE56D0T_IRPF_C />} />
          <Route path="/kit_4" element={<Kit_4_DS_2CE56D0T_IRPF_C />} />
          {/* Otras rutas */}
        </Routes>
      </div>
    </div>
  );
};

export default App;