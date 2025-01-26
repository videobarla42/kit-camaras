import React, { useState } from 'react';
import './Carrusel.css';

// Definimos el tipo de las props
interface CarruselProps {
  images: string[]; // Array de URLs o rutas de las imágenes
}

const Carrusel: React.FC<CarruselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
  const [modalIndex, setModalIndex] = useState(0); // Índice de la imagen en el modal

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

  // Función para abrir el modal con la imagen seleccionada
  const openModal = (index: number) => {
    setModalIndex(index); // Establecer el índice de la imagen seleccionada
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Función para navegar a la siguiente imagen en el modal
  const nextModalSlide = () => {
    setModalIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para navegar a la imagen anterior en el modal
  const prevModalSlide = () => {
    setModalIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Función para determinar la clase de cada slide
  const getSlideClass = (index: number): string => {
    if (index === currentIndex) {
      return 'active'; // Slide central
    } else if (index === (currentIndex - 1 + images.length) % images.length) {
      return 'left'; // Slide izquierdo
    } else if (index === (currentIndex + 1) % images.length) {
      return 'right'; // Slide derecho
    } else {
      return ''; // Ocultar otros slides
    }
  };

  return (
    <div className="carrusel-container">
      <div className="carrusel-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carrusel-slide ${getSlideClass(index)}`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              onClick={() => openModal(index)} // Abrir modal al hacer clic
              style={{ cursor: 'pointer' }} // Cambiar el cursor a pointer
            />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="carrusel-button prev"
      >
        &larr;
      </button>
      
      <button
        onClick={nextSlide}
        className="carrusel-button next"
      >
        &rarr;
      </button>

      {/* Modal para mostrar la imagen en pantalla completa */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal} // Cerrar modal al hacer clic fuera de la imagen
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Evitar que el modal se cierre al hacer clic en la imagen
          >
            <img
              src={images[modalIndex]}
              alt="Imagen en pantalla completa"
            />
            {/* Botón para la imagen anterior */}
            <button
              className="modal-button prev"
              onClick={(e) => {
                e.stopPropagation(); // Evitar que el modal se cierre
                prevModalSlide();
              }}
            >
              &larr;
            </button>
            {/* Botón para la siguiente imagen */}
            <button
              className="modal-button next"
              onClick={(e) => {
                e.stopPropagation(); // Evitar que el modal se cierre
                nextModalSlide();
              }}
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrusel;