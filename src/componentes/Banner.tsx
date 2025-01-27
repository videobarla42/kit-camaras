import React from 'react';
import './Banner.css'; // Importa los estilos CSS

// Definimos las props del Banner
interface BannerProps {
  texto: string; // Texto que se mostrará en el banner
  backgroundColor?: string; // Color de fondo del banner (opcional)
  textColor?: string; // Color del texto (opcional)
  fontSize?: string; // Tamaño del texto (opcional)
  padding?: string; // Padding del banner (opcional)
}

const Banner: React.FC<BannerProps> = ({
  texto,
  backgroundColor = '#4CAF50', // Color de fondo por defecto (verde)
  textColor = '#FFFFFF', // Color del texto por defecto (blanco)
  fontSize = '1.5rem', // Tamaño del texto por defecto
  padding = '10px 20px', // Padding por defecto
}) => {
  return (
    <div
      className="banner-container"
      style={{
        backgroundColor,
        color: textColor,
        fontSize,
        padding,
      }}
    >
      {texto}
    </div>
  );
};

export default Banner;