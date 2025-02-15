import React from 'react';
import Slider from 'react-slick';
import './CarouselKits.css'; // Asegúrate de tener este archivo de estilos
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



interface CarouselKitsProps {
  images: string[]; // Recibe un arreglo de URLs de las imágenes
}

const CarouselKits: React.FC<CarouselKitsProps> = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Muestra 3 imágenes por vez
    slidesToScroll: 3, // Desplaza 3 imágenes a la vez
    responsive: [
      {
        breakpoint: 768, // Cambia el número de imágenes mostradas en pantallas pequeñas
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`carousel-image-${index}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselKits;
