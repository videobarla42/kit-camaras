import React, { Suspense, lazy, useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './componentes/Header'; 
import './App.css';
import { PriceProvider } from '@/componentes/PriceContext';
import Prueba from '@/pages/kits/kit_4_DS-2CE16D0T-IRPF(2.8mm)(C)/prueba';
import PriceContext from '@/pages/kits/kit_4_DS-2CE16D0T-IRPF(2.8mm)(C)/prueba';
import Inicio from "./pages/pagina_de_inicio/Inicio";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';








// Importación de páginas con lazy loading
const Kits_8_DS_2CE56D0T_IRPF_C = lazy(() => import('./pages/kits/kits_8_DS-2CE56D0T-IRPF(C)/kits_8_DS-2CE56D0T-IRPF(C)'));
const Kit_4_DS_2CE56D0T_IRPF_C = lazy(() => import('./pages/kits/kit_4_DS-2CE56D0T-IRPF(C)/Kit_4_DS_2CE56D0T_IRPF_C'));
const Kit_16_DS_2CE56D0T_IRPF_C = lazy(() => import('./pages/kits/kit_16_DS-2CE56D0T-IRPF(C)/kit_16_DS-2CE56D0T-IRPF(C)'));
const IniciCotizador = lazy(() => import('./pages/cotizador/IniciCotizador'));
const Kit_4_DS_2CE16D0T_IRPF_C = lazy(() => import('./pages/kits/kit_4_DS-2CE16D0T-IRPF(2.8mm)(C)/kit_4_DS-2CE16D0T-IRPF(2.8mm)(C)'));
const Kit_8_DS_2CE16D0T_IRPF_C = lazy(() => import('./pages/kits/kit_8_DS-2CE16D0T-IRPF(2.8mm)(C)/kit_8_DS-2CE16D0T-IRPF(2.8mm)(C)'));
const Kit_16_DS_2CE16D0T_IRPF_C = lazy(() => import('./pages/kits/kit_16_DS-2CE16D0T-IRPF(2.8mm)(C)/kit_16_DS-2CE16D0T-IRPF(2.8mm)(C)'));

const Cp_3_pro_1 = lazy(() => import('./pages/kits/CP3PRO/CP3PRO_1/Cp_3_pro_1'));
const Cp_3_pro_2 = lazy(() => import('./pages/kits/CP3PRO/CP3PRO_1/Cp_3_pro_1'));
const Cp_3_pro_4 = lazy(() => import('./pages/kits/CP3PRO/CP3PRO_1/Cp_3_pro_1'));
const Cp_3_pro_6 = lazy(() => import('./pages/kits/CP3PRO/CP3PRO_1/Cp_3_pro_1'));

const H3c_pro_1s = lazy(() => import('./pages/kits/H3C_PRO/H3c_pro_1s'));
const H3c_pro_2s = lazy(() => import('./pages/kits/H3C_PRO/H3c_pro_2s'));
const H3c_pro_4s = lazy(() => import('./pages/kits/H3C_PRO/H3c_pro_4s'));
const H3c_pro_6s = lazy(() => import('./pages/kits/H3C_PRO/H3c_pro_6s'));


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

  // Definición de los links para el header, ahora con las rutas de imágenes corregidas
  const menuLinks = [
    { to: '/', text: 'Kits de Cámaras de Seguridad HIKVISION', image: './assets/camara-icon.png' },
    { to: '/kit_4-camaras-seguridad', text: 'S24', image: './assets/box-icon.png' },
    { to: '/kits_8-camaras-seguridad', text: 'Kit de 8 Cámaras de Seguridad Tipo domo 1080p HIKVISION', image: './assets/video-icon.png' },
    { to: '/kit_16-camaras-seguridad', text: '16 cámaras de seguridad Tipo domo 1080p HIKVISION', image: './assets/video-icon.png' },
    { to: '/kit_4-camaras-seguridad-bala', text: '4 cámaras de seguridad tipo bala 1080p HIKVISION', image: './assets/eye-icon.png' },
    { to: '/kit_8-camaras-seguridad-bala', text: '8 cámaras de seguridad tipo bala 1080p HIKVISION', image: './assets/eye-icon.png' },
    { to: '/kit_16-camaras-seguridad-bala', text: '16 cámaras de seguridad tipo bala 1080p HIKVISION', image: './assets/eye-icon.png' },
    { to: '/cotizador', text: 'Cotizador de Cámaras', image: './assets/calculator-icon.png' },
    { to: '/inicio', text: 'inicio', image: './assets/calculator-icon.png' },

    { to: '/Cp_3_pro_1', text: 'Cp_3_pro_1', image: './assets/calculator-icon.png' },
    { to: '/Cp_3_pro_2', text: 'Cp_3_pro_2', image: './assets/calculator-icon.png' },
    { to: '/Cp_3_pro_4', text: 'Cp_3_pro_4', image: './assets/calculator-icon.png' },
    { to: '/Cp_3_pro_6', text: 'Cp_3_pro_6', image: './assets/calculator-icon.png' },

    { to: '/H3c_pro_1s', text: 'H3c_pro_1s', image: './assets/calculator-icon.png' },
    { to: '/H3c_pro_2s', text: 'H3c_pro_2s', image: './assets/calculator-icon.png' },
    { to: '/H3c_pro_4s', text: 'H3c_pro_4s', image: './assets/calculator-icon.png' },
    { to: '/H3c_pro_6s', text: 'H3c_pro_6s', image: './assets/calculator-icon.png' },

    
    
    


  ];

  return (
    <PriceProvider>
      <div>
        {/* Renderiza el Header con los links y mensaje extra */}
        <Header links={menuLinks} extraMessage={extraMessage} />
        <div className="content">
          {/* Suspense para cargar las rutas solo cuando sea necesario */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
            <Route path="/" element={<Kit_4_DS_2CE56D0T_IRPF_C />} />
            <Route path="/kits_8-camaras-seguridad" element={<Kits_8_DS_2CE56D0T_IRPF_C/>} />
              <Route path="/kit_16-camaras-seguridad" element={<Kit_16_DS_2CE56D0T_IRPF_C/>} />
              <Route path="/cotizador" element={<IniciCotizador />} />
              <Route path="/kit_4-camaras-seguridad-bala" element={<Kit_4_DS_2CE16D0T_IRPF_C/>} />
              <Route path="/kit_8-camaras-seguridad-bala" element={<Kit_8_DS_2CE16D0T_IRPF_C/>} />
              <Route path="/kit_16-camaras-seguridad-bala" element={<Kit_16_DS_2CE16D0T_IRPF_C/>} />
              <Route path="/prueba" element={<Prueba />} />
              <Route path="/PriceContext" element={<PriceContext />} />
              <Route path="/inicio" element={<Inicio />} />

              <Route path="/Cp_3_pro_1" element={<Cp_3_pro_1 />} />
              <Route path="/Cp_3_pro_2" element={<Cp_3_pro_2 />} />
              <Route path="/Cp_3_pro_4" element={<Cp_3_pro_4 />} />
              <Route path="/Cp_3_pro_6" element={<Cp_3_pro_6 />} />

              <Route path="/h3c_pro_1s" element={<H3c_pro_1s />} />
              <Route path="/h3c_pro_2s" element={<H3c_pro_2s />} />
              <Route path="/h3c_pro_4s" element={<H3c_pro_4s />} />
              <Route path="/h3c_pro_6s" element={<H3c_pro_6s />} />





              
              
            </Routes>
          </Suspense>
        </div>
      </div>
    </PriceProvider>
  );
};

export default App;