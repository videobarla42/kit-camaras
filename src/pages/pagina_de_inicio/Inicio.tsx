import React from 'react';
import HeaderInicio from './componentes_inicio/headerinicio'; 
import BannerInicio from '../../pages/pagina_de_inicio/componentes_inicio/BannerInicio';
import './componentes_inicio/BannerInicio.css';
import './Inicio.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KitShikVision from './componentes_inicio/KitShikVision';
import Catalogos from '../pagina_de_inicio/componentes_inicio/Catalogos';
import EligeS24 from '../pagina_de_inicio/componentes_inicio/EligeS24';
import "../pagina_de_inicio/componentes_inicio/kitshikvision-wrapper.css";
import "../pagina_de_inicio/componentes_inicio/kitshikvision-wrapper.css";
import Footer from '../pagina_de_inicio/componentes_inicio/Footer';


// Importar imágenes para los distintos carruseles
import image1 from '../../assets/10.webp';
import image2 from '../../assets/11.webp';
import image3 from '../../assets/12.webp';
import image4 from '../../assets/13.webp';
import image5 from '../../assets/14.webp';
import image6 from '../../assets/15.webp';
import img35 from '../../assets/35.webp';
import img36 from '../../assets/36.webp';
import img37 from '../../assets/37.webp';
import img38 from '../../assets/38.webp';
import img39 from '../../assets/39.webp';
import img41 from '../../assets/41.webp';

const Inicio: React.FC = () => {
  // Definir diferentes conjuntos de imágenes
  const kitImages1 = [image1, image2, image3, image4, image5, image6];
  const kitImages2 = [img35, img36, img37, img38, img39, img41];
  const kitImages3 = [image1, img35, image2, img36, image3, img37]; // Ejemplo mixto

  return (
    <div>
      <div className="inicio-container">
        <HeaderInicio />
        <div className="contenido">
          <h4>Ven a nuestros show rooms!</h4>
        </div>
        <Catalogos />
        <BannerInicio texto="kits de camaras hikvision" />   
      </div>
      
      <div className="kitshikvision-wrapper">
        <KitShikVision images={kitImages1} direction="right" />
        <KitShikVision images={kitImages2} direction="left" />
        <KitShikVision images={kitImages3} direction="right" />
      </div>
      
      <EligeS24 
        title="Elige S24" 
        description="Ofrecemos los mejores sistemas de seguridad para proteger lo que más importa." 
        phone="123-456-7890" 
        imageSrc="/images/security.jpg" 
      />
            <Footer />

    </div>
  );
};

export default Inicio;
