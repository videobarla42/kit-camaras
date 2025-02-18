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
import image1 from '../../assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)1.webp';
import image2 from '../../assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)2.webp';
import image3 from '../../assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)3.webp';
import image4 from '../../assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)1.webp';
import image5 from '../../assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)2.webp';
import image6 from '../../assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)3.webp';
import image7 from '../../assets/H3C_PRO/h3c_pro_1.webp';
import image8 from '../../assets/H3C_PRO/h3c_pro_2.webp';
import image9 from '../../assets/H3C_PRO/h3c_pro_3.webp';
import image10 from '../../assets/H3C_PRO/h3c_pro_4.webp';
import image11 from '../../assets/CP3_PRO/cp_3_pro_1.webp';
import image12 from '../../assets/CP3_PRO/cp_3_pro_2.webp';
import image13 from '../../assets/CP3_PRO/cp_3_pro_3.webp';
import image14 from '../../assets/CP3_PRO/cp_3_pro_4.webp';




const Inicio: React.FC = () => {
  // Ajusta la base URL dependiendo del entorno
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://www.s24seguridadelectronica.com' 
    : 'https://organic-space-invention-69v7xvgx69wh4r77-5173.app.github.dev';

  // Definir diferentes conjuntos de imágenes y enlaces
  const kitImages1 = [image1, image2, image3, image4, image5, image6];
  const kitLinks1 = [
    `${baseUrl}/#/kit_4-camaras-seguridad-bala`,
    `${baseUrl}/#/kits_8-camaras-seguridad`,
    `${baseUrl}/#/kits_16-camaras-seguridad`,
    `${baseUrl}/#/kit_4-camaras-seguridad-bala`,
    `${baseUrl}/#/kit_8-camaras-seguridad-bala`,
    `${baseUrl}/#/kit_16-camaras-seguridad-bala`,
  ];

  // Definir imágenes para el segundo y tercer carrusel (cada uno con 6 imágenes)
  const kitImages2 = [image7, image8, image9, image10 ];
  const kitLinks2 = [
    `${baseUrl}/#/H3c_pro_1s`,
    `${baseUrl}/#/H3c_pro_2s`,
    `${baseUrl}/#/H3c_pro_4s`,
    `${baseUrl}/#/H3c_pro_6s`,
  ];
  
  const kitImages3 = [image11, image12, image13, image14 ];
  const kitLinks3 = [
    `${baseUrl}/#/Cp_3_pro_1`,
    `${baseUrl}/#/Cp_3_pro_2`,
    `${baseUrl}/#/Cp_3_pro_4`,
    `${baseUrl}/#/Cp_3_pro_6`,
  ];
  
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
