import React from 'react';
import { Link, HashRouter as Router, Routes, Route } from 'react-router-dom';
import Kits_8_DS_2CE56D0T_IRPF_C from './pages/kits/kits_8_DS-2CE56D0T-IRPF(C)/kits_8_DS-2CE56D0T-IRPF(C).tsx';
import Kit_4_DS_2CE56D0T_IRPF_C from './pages/kits/kit_4_DS-2CE56D0T-IRPF(C)/kit_4_DS-2CE56D0T-IRPF(C).tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <Router> {/* Envuelve todo con Router */}
      <div>
        {/* Header flotante */}
        <header className="header">
          <nav>
            <ul className="navList">
              <li className="navItem">
                <Link to="/" className="link">Inicio</Link>
              </li>
              <li className="navItem">
                <Link to="/kit_4" className="link">Acerca de</Link>
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
    </Router>
  );
};

export default App;