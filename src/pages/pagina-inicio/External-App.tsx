import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import supabase from './supabase/supabaseClient';
import Banner from './Banner';
import Footer from '../pagina_de_inicio/componentes_inicio/Footer';
import VisionNocturna from './VisionNocturna';
import Catalogos from '../pagina_de_inicio/componentes_inicio/Catalogos';
import Carrusel from './Carrusel';
import EligeS24 from '../pagina_de_inicio/componentes_inicio/EligeS24';
import Contrate from './Contrate';
import SeguridadElectronica from './SeguridadElectronica';
import WhatsAppButton from './WhatsAppButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import Showrooms from './Showrooms';

// Configura el contenedor del modal si el documento está disponible
if (typeof document !== 'undefined') {
  Modal.setAppElement('#root');
}

const ExternalApp: React.FC = () => {
  const publicUrl = process.env.PUBLIC_URL || "https://www.s24seguridadelectronica.com"; // Usa un valor por defecto si no está definido
  const registerRef = useRef<HTMLDivElement | null>(null);
  const apiUrl = import.meta.env.VITE_API_URL || '';
  const scrollToRegister = () => {
    registerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const logVisit = async () => {
      try {
        const { error } = await supabase
          .from('user_activity')
          .insert([{ section: 'home', timestamp: new Date().toISOString() }]);
        if (error) throw error;
      } catch (err) {
        console.error('Error registrando la visita:', err);
      }
    };

    logVisit();
  }, []);

  return (
    <div className="bg-light min-vh-100">
      <VisionNocturna 
        logoSrc={`${publicUrl}/s24.png`} 
        imageSrc={`${publicUrl}/111.png`} 
        description="Venta e instalación"
        title="¡Cámaras De Seguridad en Bucaramanga y Santander!" 
      />

      <Banner 
        title="¡Kits de Cámaras Hikvision!"
        description=""
        buttonText="Ir al Registro"
        scrollToRegister={scrollToRegister}
      />

      <Carrusel
        images={[
          `${publicUrl}/portadalxts.png`, 
          `${publicUrl}/2.png`, 
          `${publicUrl}/3.png`, 
          `${publicUrl}/4.png`, 
          `${publicUrl}/5.png`, 
          `${publicUrl}/6.png`
        ]}
        titles={[
          'Lo último de Hikvision', 
          'Cámara con botón de llamada de emergencia', 
          'Sistema de videovigilancia avanzado', 
          'Alarma de seguridad inteligente', 
          'Kit de seguridad completo', 
          'Monitoreo en tiempo real'
        ]}
        descriptions={[
          'Cámaras analógicas con audio doble vía + visión nocturna a todo color', 
          'Reconocimiento de humanos + detección de llanto', 
          'Vigilancia 24/7 con almacenamiento en la nube', 
          'Alertas instantáneas y conectividad con smartphone', 
          'Incluye cámaras, sensores y control central', 
          'Supervisión en vivo desde cualquier lugar'
        ]}
        links={[
          "https://www.s24seguridadelectronica.com", 
          "https://www.s24seguridadelectronica.com/#/kits_8-camaras-seguridad", 
          "https://www.s24seguridadelectronica.com/#/kit_16-camaras-seguridad", 
          "https://www.s24seguridadelectronica.com/#/kit_4-camaras-seguridad-bala", 
          "https://www.s24seguridadelectronica.com/#/kit_8-camaras-seguridad-bala", 
          "https://www.s24seguridadelectronica.com/#/kit_16-camaras-seguridad-bala"
        ]}
      />

      <Catalogos />

      <EligeS24 
        title="Seguridad Total" 
        description="Ofrecemos los mejores sistemas de seguridad para proteger lo que más importa." 
        phone="123-456-7890" 
        imageSrc="/images/security.jpg" 
      />

      <Banner 
        title="¡Lo último en tecnología!"
        description=""
        buttonText="Ir al Registro"
        scrollToRegister={scrollToRegister}
      />

      <Contrate 
        title="¿Estás pensando en contratar nuestros servicios?"
        description="¡Déjanos tu nombre y número de teléfono, te contactamos hoy mismo!"
        phone="1234567890"
        imageSrc={`${publicUrl}/15.png`}
      />

      <SeguridadElectronica />
      <WhatsAppButton />
      <Showrooms />
      <Footer />
    </div>
  );
};

export default ExternalApp;
