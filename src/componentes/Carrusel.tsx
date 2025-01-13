import React, { useState } from 'react';

// Importamos las imágenes
import imagen1 from '../assets/1.png';
import imagen2 from '../assets/2.png';
import imagen3 from '../assets/3.png';
import imagen4 from '../assets/4.png';

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de imágenes
  const images = [
    imagen1,
    imagen2,
    imagen3,
    // imagen4
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-96 overflow-hidden rounded-lg">
        {/* Imagen actual */}
        <div className="relative w-full h-full">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>

        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors z-10"
        >
          <span className="text-white text-2xl">&larr;</span>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors z-10"
        >
          <span className="text-white text-2xl">&rarr;</span>
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrusel;