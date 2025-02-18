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
  // Definir diferentes conjuntos de imágenes y enlaces
  const kitImages1 = [image1, image2, image3, image4, image5, image6];
  const kitLinks1 = [
    "https://organic-space-invention-69v7xvgx69wh4r77-5173.app.github.dev/#/kit_4-camaras-seguridad-bala",
    "https://organic-space-invention-69v7xvgx69wh4r77-5173.app.github.dev/#/kit_4-camaras-seguridad-bala",
    "https://organic-space-invention-69v7xvgx69wh4r77-5173.app.github.dev/#/kit_4-camaras-seguridad-bala",
    "https://organic-space-invention-69v7xvgx69wh4r77-5173.app.github.dev/#/kit_4-camaras-seguridad-bala",
    "https://organic-space-invention-69v7xvgx69wh4r77-5173.app.github.dev/#/kit_4-camaras-seguridad-bala",
    "https://organic-space-invention-69v7xvgx69wh4r77-5173.app.github.dev/#/kit_4-camaras-seguridad-bala",
  ];

  const kitImages2 = [img35, img36, img37, img38, img39, img41];
  const kitLinks2 = kitLinks1; // Usando los mismos enlaces de ejemplo

  const kitImages3 = [image1, img35, image2, img36, image3, img37];
  const kitLinks3 = kitLinks1;

  return (
    <div>
      <div className="inicio-container">
        <HeaderInicio />
        <div className="contenido">
          <h4>Pide Un Tecnico Hoy!</h4>
        </div>
        <BannerInicio texto="kits de camaras hikvision" />   
      </div>
      
      <div className="kitshikvision-wrapper">
  <div className="kitshikvision-section">
    <h3 className="kit-title">Kits de 4 Cámaras Hikvision</h3>
    <KitShikVision
      images={kitImages1}
      links={kitLinks1}
      direction="right"
      dampingFactor={0.01} // Movimiento muy suave
    />
  </div>
  <div className="kitshikvision-section">
    <h3 className="kit-title">Kits de 8 Cámaras Hikvision</h3>
    <KitShikVision
      images={kitImages2}
      links={kitLinks2}
      direction="left"
      dampingFactor={0.01} // Movimiento muy suave
    />
  </div>
  <div className="kitshikvision-section">
    <h3 className="kit-title">Kits Variados Hikvision</h3>
    <KitShikVision
      images={kitImages3}
      links={kitLinks3}
      direction="right"
      dampingFactor={0.01} // Movimiento muy suave
    />
  </div>
</div>



<Catalogos />

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
