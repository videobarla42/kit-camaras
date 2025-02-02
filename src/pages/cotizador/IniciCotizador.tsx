import React from 'react';
import CameraSelector from './CameraSelector'; // Asegúrate de que la ruta sea correcta.
import './IniciCotizador.css'; // Importa el archivo CSS.

const IniciCotizador: React.FC = () => {
  return (
    <div className="iniciccotizador">
      <h1>Bienvenido al Cotizador de Cámaras, escoja el numero de camaras y capacidad de disco duro a su gusto! </h1>
      <CameraSelector onAddToCart={() => {}} />
    </div>
  );
};

export default IniciCotizador;

