import React from 'react';
import './Beneficios.css'; // Asegúrate de que el CSS se encuentre en la ruta correcta

// Definimos la interfaz para cada beneficio
export interface Beneficio {
  icon: string;
  title: string;
  description: string;
}

// Definimos las props del componente, que incluyen un arreglo de beneficios
interface BeneficiosProps {
  beneficios: Beneficio[];
}

const Beneficios: React.FC<BeneficiosProps> = ({ beneficios }) => {
  return (
    <div className="beneficios-container">
      {/* Título de la sección */}
      <h3 className="beneficios-titulo">Beneficios del Kit</h3>

      {/* Lista de beneficios */}
      <div className="beneficios-lista">
        {beneficios.map((beneficio, index) => (
          <div key={index} className="beneficio-item">
            <span className="beneficio-icono">{beneficio.icon}</span>
            <div className="beneficio-contenido">
              <h4>{beneficio.title}</h4>
              <p>{beneficio.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beneficios;
