import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Kits_8_DS_2CE56D0T_IRPF_C from './pages/kits/kits_8_DS-2CE56D0T-IRPF(C)/kits_8_DS-2CE56D0T-IRPF(C).tsx'; // Ruta correcta para Home
import Kit_4_DS_2CE56D0T_IRPF_C from './pages/kits/kit_4_DS-2CE56D0T-IRPF(C)/kit_4_DS-2CE56D0T-IRPF(C).tsx'; // Ruta correcta para el componente 'About'

const App: React.FC = () => {
  return (
    <div>
      {/* Eliminamos el menú de navegación duplicado */}
      <Routes>
        <Route path="/" element={<Kits_8_DS_2CE56D0T_IRPF_C />} />
        <Route path="/kit_4" element={<Kit_4_DS_2CE56D0T_IRPF_C />} />
        {/* Otras rutas */}
      </Routes>
    </div>
  );
};

export default App;