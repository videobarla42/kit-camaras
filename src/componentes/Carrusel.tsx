import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importa las imágenes desde la carpeta 'src/assets'
import image1 from '@/assets/1.png';  // Si 'src' está configurado como baseUrl en tsconfig.json
import image2 from '@/assets/2.png';  // Usa las rutas correctas si tienes imágenes diferentes
import image3 from '@/assets/3.png';  // Igual aquí

const Carrusel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrusel;
