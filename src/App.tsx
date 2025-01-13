import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Kits_8_DS_2CE56D0T_IRPF_C from './pages/kits/kits_8_DS-2CE56D0T-IRPF(C)/kits_8_DS-2CE56D0T-IRPF(C).tsx'; // Ruta correcta para Home
import Kit_4_DS_2CE56D0T_IRPF_C from './pages/kits/kit_4_DS-2CE56D0T-IRPF(C)/kit_4_DS-2CE56D0T-IRPF(C).tsx'; // Ruta correcta para el componente 'About'

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link> {/* Ruta para el inicio */}
          </li>
          <li>
            <Link to="/kit_4">Acerca de</Link> {/* Ruta corregida para 'Acerca de' */}
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Kits_8_DS_2CE56D0T_IRPF_C />} />
        <Route path="/kit_4" element={<Kit_4_DS_2CE56D0T_IRPF_C />} />
        {/* Otras rutas */}
      </Routes>
    </div>
  );
};

export default App;
