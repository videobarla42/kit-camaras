import React, { useState, useEffect } from 'react';
import './HeaderInicio.css';
import imagen1 from '../../../assets/22.webp';
import imagen2 from '../../../assets/23.webp';
import imagen3 from '../../../assets/24.webp';
import imagen4 from '../../../assets/25.webp';
import imagen5 from '../../../assets/26.webp';
import imagen6 from '../../../assets/27.webp';
import imagen7 from '../../../assets/28.webp';
import imagen8 from '../../../assets/29.webp';
import imagen9 from '../../../assets/30.webp';

const HeaderInicio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9]; // Ahora tienes más imágenes

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="header-inicio">
      {/* Contenedor para el texto */}
      <div className="texto-container">
        <h1 className="titulo">camaras de seguridad en bucaramanga y santander</h1>
        <p className="descripcion">
          venta e instalacion.
        </p>
      </div>

      {/* Contenedor para las imágenes */}
      <div className="imagenes-container">
        {images.map((image, index) => {
          let className = 'phone-frame';
          if (index === currentIndex) {
            className += ' center';
          } else if (index === (currentIndex - 1 + images.length) % images.length) {
            className += ' left';
          } else if (index === (currentIndex + 1) % images.length) {
            className += ' right';
          } else {
            className += ' hidden';
          }

          return (
            <div key={index} className={className}>
              <img src={image} alt={`Imagen ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderInicio;
