import React from 'react';

// Definimos el tipo de las props para que sea flexible
interface BannerInicioProps {
  texto: string;
}

const BannerInicio: React.FC<BannerInicioProps> = ({ texto }) => {
  return (
    <div className="banner-inicio">
      <div className="banner-texto">
        <h4>{texto}</h4>
      </div>
    </div>
  );
};

export default BannerInicio;
