import React, { useEffect,useState } from 'react';
import './Carrusel.css';




// Interfaz para cada imagen
interface ImageType {
  src: string;
  alt: string;
}

interface CarruselProps {
  images: { src: string; alt: string }[];
  title: string;
  description: string;
  features: string[];
}

const Carrusel: React.FC<CarruselProps> = ({ images, title, description, features }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

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

  const openModal = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalSlide = () => {
    setModalIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevModalSlide = () => {
    setModalIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getSlideClass = (index: number): string => {
    if (index === currentIndex) {
      return 'active';
    } else if (index === (currentIndex - 1 + images.length) % images.length) {
      return 'left';
    } else if (index === (currentIndex + 1) % images.length) {
      return 'right';
    } else {
      return '';
    }
  };


const [showDetails, setShowDetails] = useState(false);
let lastScrollY = 0;

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
      // Scroll hacia arriba
      setShowDetails(true);
    } else {
      // Scroll hacia abajo
      setShowDetails(false);
    }
    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <div className="carrusel-container">
      <div className="carrusel-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carrusel-slide ${getSlideClass(index)}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => openModal(index)}
              style={{ cursor: 'pointer' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="carrusel-button prev"
        aria-label="Imagen anterior"
      >
        &larr;
      </button>
      
      <button
        onClick={nextSlide}
        className="carrusel-button next"
        aria-label="Siguiente imagen"
      >
        &rarr;
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-counter">
              {modalIndex + 1} / {images.length}
            </div>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Cerrar modal"
            >
              &times;
            </button>
            <img
              src={images[modalIndex].src}
              alt={images[modalIndex].alt}
              loading="lazy"
            />
            
            <button
              className="modal-button prev"
              onClick={(e) => {
                e.stopPropagation();
                prevModalSlide();
              }}
              aria-label="Imagen anterior"
            >
              &larr;
            </button>
            <button
              className="modal-button next"
              onClick={(e) => {
                e.stopPropagation();
                nextModalSlide();
              }}
              aria-label="Siguiente imagen"
            >
              &rarr;
            </button>

            {/* Sección de detalles del producto */}
            {(title || description || features) && (
              <div className="modal-product-details">
                {features && features.length > 0 && (
                  <ul>
                    {features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrusel;
