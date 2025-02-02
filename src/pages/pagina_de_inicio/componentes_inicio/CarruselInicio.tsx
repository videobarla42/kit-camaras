import React, { useState, useEffect } from "react";
import "./CarruselInicio.css";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarruselInicioProps {
  images: string[];
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  autoPlay?: boolean;
}

const CarruselInicio: React.FC<CarruselInicioProps> = ({
  images,
  interval = 3000,
  showDots = true,
  showArrows = true,
  autoPlay = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="carrusel-inner"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-60 object-cover" />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {showArrows && (
        <>
          <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {showDots && (
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarruselInicio;