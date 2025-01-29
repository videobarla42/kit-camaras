import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Usar React.lazy para cargar los componentes de manera diferida
const Kits_8_DS_2CE56D0T_IRPF_C = lazy(() => import('./pages/kits/kits_8_DS-2CE56D0T-IRPF(C)/kits_8_DS-2CE56D0T-IRPF(C).tsx'));
const Kit_4_DS_2CE56D0T_IRPF_C = lazy(() => import('./pages/kits/kit_4_DS-2CE56D0T-IRPF(C)/kit_4_DS-2CE56D0T-IRPF(C).tsx'));
const Kit_16_DS_2CE56D0T_IRPF_C = lazy(() => import('./pages/kits/kit_16_DS-2CE56D0T-IRPF(C)/kit_16_DS-2CE56D0T-IRPF(C).tsx'));

const App: React.FC = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <ul className="navList">
            <li className="navItem">
              <Link to="/" className="link">Comprar Kit de 8 Cámaras de Seguridad HIKVISION</Link>
            </li>
            <li className="navItem">
              <Link to="/kit_4-camaras-seguridad" className="link">Comprar Kit de 4 Cámaras de Seguridad HIKVISION</Link>
            </li>
            <li className="navItem">
              <Link to="/kit_16-camaras-seguridad" className="link">Comprar Kit de 16 Cámaras de Seguridad HIKVISION</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Kits_8_DS_2CE56D0T_IRPF_C />} />
            <Route path="/kit_4-camaras-seguridad" element={<Kit_4_DS_2CE56D0T_IRPF_C />} />
            <Route path="/kit_16-camaras-seguridad" element={<Kit_16_DS_2CE56D0T_IRPF_C />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
