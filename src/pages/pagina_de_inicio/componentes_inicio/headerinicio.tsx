import React, { useState, useEffect } from 'react';
import './HeaderInicio.css';
import imagen1 from '../../../assets/INICIO_VERTICAL/2.webp';
import imagen2 from '../../../assets/INICIO_VERTICAL/3.webp';
import imagen3 from '../../../assets/INICIO_VERTICAL/4.webp';
import imagen4 from '../../../assets/INICIO_VERTICAL/5.webp';
import imagen5 from '../../../assets/INICIO_VERTICAL/6.webp';
import imagen6 from '../../../assets/INICIO_VERTICAL/7.webp';
import imagen7 from '../../../assets/INICIO_VERTICAL/8.webp';
import imagen8 from '../../../assets/INICIO_VERTICAL/9.webp';
import imagen9 from '../../../assets/INICIO_VERTICAL/4.webp';

const HeaderInicio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9];

  // Array con textos descriptivos para cada imagen
  const descriptions = [
    "Camaras ip",
    "Camaras analogas",
    "Alarmas cableadas",
    "Control de acceso",
    "Camras Roboticas",
    "Camaras Inalambricas",
    "Video porteros",
    "Alarmas inalambricas",
    "Alarmas Cableadas",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="header-inicio">
      <div className="texto-container">
        <h1 className="titulo">Cámaras de seguridad en Bucaramanga y Santander</h1>
        <p className="descripcion">Venta e instalación.</p>
      </div>

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
              {index === currentIndex && (
                <div className="descripcion-imagen">
                  <p>{descriptions[index]}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderInicio;
