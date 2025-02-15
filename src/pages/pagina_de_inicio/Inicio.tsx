import React from 'react';
import HeaderInicio from './componentes_inicio/headerinicio'; 
import BannerInicio from '../../pages/pagina_de_inicio/componentes_inicio/BannerInicio'; // Ruta ajustada
import './componentes_inicio/BannerInicio.css'; // Ajusta la ruta del CSS según la ubicación
import './Inicio.css'; // Importa el archivo CSS correspondiente
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KitShikVision from './componentes_inicio/KitShikVision';



// Importación de imágenes
import image1 from '../../assets/10.webp';
import image2 from '../../assets/11.webp';
import image3 from '../../assets/12.webp';
import image4 from '../../assets/13.webp';
import image5 from '../../assets/14.webp';
import image6 from '../../assets/15.webp';

const Inicio: React.FC = () => {
  const imageUrls = [image1, image2, image3, image4, image5, image6];

  return (
    <>
      <div className="inicio-container">
        {/* Header de inicio */}
        <HeaderInicio />
        <div className="contenido">
          <h4>Ven a nuestros show rooms!</h4>
        </div>
        <BannerInicio texto="kits de camaras hikvision" />
      </div>
      <div className="kitshikvision-wrapper">
  <KitShikVision />
</div>

    </>
  );
};

export default Inicio;
