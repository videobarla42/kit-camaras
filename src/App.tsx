import React, { Suspense, lazy, useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './componentes/Header'; 
import './App.css';

const Kits_8_DS_2CE56D0T_IRPF_C = lazy(() => import('./pages/kits/kits_8_DS-2CE56D0T-IRPF(C)/kits_8_DS-2CE56D0T-IRPF(C).tsx'));
const Kit_4_DS_2CE56D0T_IRPF_C = lazy(() => import('./pages/kits/kit_4_DS-2CE56D0T-IRPF(C)/kit_4_DS-2CE56D0T-IRPF(C).tsx'));
const Kit_16_DS_2CE56D0T_IRPF_C = lazy(() => import('./pages/kits/kit_16_DS-2CE56D0T-IRPF(C)/kit_16_DS-2CE56D0T-IRPF(C).tsx'));
const Inicio = lazy(() => import('./pages/pagina_de_inicio/inicio'));
const IniciCotizador = lazy(() => import('./pages/cotizador/IniciCotizador.tsx'));
const Kit_4_DS_2CE16D0T_IRPF_C = lazy(() => import('./pages/kits/kit_4_DS-2CE16D0T-IRPF(2.8mm)(C)/kit_4_DS-2CE16D0T-IRPF(2.8mm)(C).tsx'));
const Kit_8_DS_2CE16D0T_IRPF_C = lazy(() => import('./pages/kits/kit_8_DS-2CE16D0T-IRPF(2.8mm)(C)/kit_8_DS-2CE16D0T-IRPF(2.8mm)(C).tsx'));
const Kit_16_DS_2CE16D0T_IRPF_C = lazy(() => import('./pages/kits/kit_16_DS-2CE16D0T-IRPF(2.8mm)(C)/kit_16_DS-2CE16D0T-IRPF(2.8mm)(C).tsx'));


const App: React.FC = () => {
  const location = useLocation();

  // Define los mensajes personalizados por ruta
  const extraMessage = useMemo(() => {
    switch (location.pathname) {
      case '/':
        return 'Inicio'; // Ajusta el mensaje según lo deseado
      case '/cotizador':
        return '¡Cotiza tus cámaras con facilidad!';
      default:
        return 'Pagos contraentrega + Envío Gratis!';
    }
  }, [location.pathname]);

  const menuLinks = [
    { to: '/', text: 'Kits de Cámaras de Seguridad HIKVISION' },
    { to: '/kit_4-camaras-seguridad', text: 'S24' },
    { to: '/kits_8-camaras-seguridad', text: 'Kit de 8 Cámaras de Seguridad Tipo domo 1080p HIKVISION                         ' },
    { to: '/kit_16-camaras-seguridad', text: '16 camaras de seguridad Tipo domo 1080p HIKVISION ' },
    { to: '/kit_4-camaras-seguridad-bala', text: '4 camaras de seguridad tipo bala 1080p HIKVISION ' },
    { to: '/kit_8-camaras-seguridad-bala', text: '8 camaras de seguridad tipo bala 1080p HIKVISION ' },
    { to: '/kit_16-camaras-seguridad-bala', text: '16 camaras de seguridad tipo bala 1080p HIKVISION ' },
    { to: '/cotizador', text: 'Cotizador de Cámaras' },
  ];

  return (
    <div>
      <Header links={menuLinks} extraMessage={extraMessage} />
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Kit_4_DS_2CE56D0T_IRPF_C />} />
            <Route path="/kits_8-camaras-seguridad" element={<Kits_8_DS_2CE56D0T_IRPF_C />} />
            <Route path="/kit_16-camaras-seguridad" element={<Kit_16_DS_2CE56D0T_IRPF_C />} />
            <Route path="/cotizador" element={<IniciCotizador />} />
            <Route path="/kit_4-camaras-seguridad-bala" element={<Kit_4_DS_2CE16D0T_IRPF_C />} />
            <Route path="/kit_8-camaras-seguridad-bala" element={<Kit_8_DS_2CE16D0T_IRPF_C />} />
            <Route path="/kit_16-camaras-seguridad-bala" element={<Kit_16_DS_2CE16D0T_IRPF_C />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
