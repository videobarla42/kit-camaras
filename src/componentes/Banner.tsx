import React from 'react';
import './Banner.css'; // Importa los estilos CSS

// Definimos las props del Banner
interface BannerProps {
  texto?: string; // Texto que se mostrará en el banner (opcional si se usa `mensaje`)
  mensaje?: string; // Alternativa a `texto` (opcional)
  backgroundColor?: string; // Color de fondo del banner (opcional)
  textColor?: string; // Color del texto (opcional)
  fontSize?: string; // Tamaño del texto (opcional)
  padding?: string; // Padding del banner (opcional)
}

const Banner: React.FC<BannerProps> = ({
  texto,
  mensaje,
  backgroundColor = '#4CAF50', // Color de fondo por defecto (verde)
  textColor = '#FFFFFF', // Color del texto por defecto (blanco)
  fontSize = '1.5rem', // Tamaño del texto por defecto
  padding = '10px 20px', // Padding por defecto
}) => {
  // Usar `mensaje` si está definido, de lo contrario usar `texto`
  const displayText = mensaje || texto || ''; // Valor por defecto vacío si no se proporciona texto

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
      {displayText}
    </div>
  );
};

export default Banner;