import React, { useState, useEffect } from 'react';
import './HeaderInicio.css';
import imagen1 from '../../../assets/22.webp'; // Asegúrate de que la ruta sea correcta

const HeaderInicio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [imagen1, imagen1, imagen1, imagen1]; // Puedes usar diferentes imágenes

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
        <h1 className="titulo">Bienvenido a Mi Aplicación</h1>
        <p className="descripcion">
          Explora nuestras increíbles características y descubre cómo podemos ayudarte.
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