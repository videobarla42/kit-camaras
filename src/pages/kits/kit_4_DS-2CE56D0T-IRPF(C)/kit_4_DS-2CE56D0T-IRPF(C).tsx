import React, { useState } from 'react';
import Carrusel from '@/componentes/Carrusel';
import BotonCompra from '@/componentes/BotonCompra';
import HeroHeader from '@/componentes/HeroHeader';
import Header from '@/componentes/Header';
import Beneficios from '@/componentes/Beneficios.tsx';
import Banner from '@/componentes/Banner';
import Formulario from '@/componentes/Formulario';

// Importar imágenes locales
import imagen1 from '@/assets/1.png';
import imagen2 from '@/assets/2.png';
import imagen3 from '@/assets/3.png';
import imagen4 from '@/assets/4.png';
import imagen5 from '@/assets/5.png';
import imagen6 from '@/assets/6.png';
import imagen7 from '@/assets/7.png';
import imagen8 from '@/assets/8.png';
import imagen9 from '@/assets/9.png';
import headerImage from '@/assets/1.png';

const Kit4Camaras: React.FC = () => {
  const [modalAbierto, setModalAbierto] = useState(false);

  // Estados para el formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudadYBarrio, setCiudadYBarrio] = useState('');

  const abrirModal = () => {
    console.log('Abriendo modal...');
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  const headerLinks = [
    { to: '/', text: 'Inicio' },
    { to: '/kit_4', text: 'Acerca de' },
  ];

  // Array de carruseles
  const carruseles = [
    {
      title: 'DVR iDS-7104HQHI-M1/S 4 Mpx Lite',
      description: 'DVR AcuSense mini 1U H.265 de 4 canales 1080P con detección de movimiento avanzada (humanos y vehículos) y protección perimetral. Incluye compresión H.265 Pro+, soporte para cámaras IP de hasta 6 MP, y grabación en múltiples resoluciones hasta 4mpx Lite.',
      images: [imagen1, imagen2, imagen3],
      botonTexto: 'Comprar DVR AcuSense'
    },
    {
      title: '4 Camaras de 2 Mpx X 1 Año de Garantia',
      description: '4 Cámaras Domo TURBOHD 1080p de HIKVISION con lente de 2.8 mm y visión nocturna inteligente EXIR de hasta 20 mts.',
      images: [imagen4, imagen5, imagen6],
      botonTexto: 'Comprar Sistema Completo'
    },
    {
      title: 'Disco duro para videovigilancia WD Purple - 1 TB',
      description: 'Disco duro WD Purple 1 TB para videovigilancia, grabación 24/7, tecnología AllFrame, velocidad 110 MB/s, interfaz SATA, caché 64 MB, soporta 64 cámaras.',
      images: [imagen7, imagen8, imagen9],
      botonTexto: 'Comprar Cámaras Adicionales'
    },
    {
      title: '4 Fuentes De Energia 12v - 1amp',
      description: 'fuente de alimentación de AC 110- 240v, 12 voltios a 1 amperio de alta calidad, conector de alimentación de 2.1mm, con led indicador de funcionamiento, el articulo puede ser ligeramente distinto al de la foto.',
      images: [imagen7, imagen8, imagen9],
      botonTexto: 'Comprar Cámaras Adicionales'
    },
    {
      title: '4 pares de Video Baluns 12v - 1amp',
      description: '4 Pares de VIDEO BALUM TURBO 4 EN 1 transmisión de señales de video a través de cables UTP, señal clara y estable a larga distancia.',
      images: [imagen7, imagen8, imagen9],
      botonTexto: 'Comprar Cámaras Adicionales'
    },
    {
      title: '4 pares de Borneras',
      description: '4 pares de borneras electricas para la conexión y distribución de energia de las camaras.',
      images: [imagen7, imagen8, imagen9],
      botonTexto: 'Comprar Cámaras Adicionales'
    },
    {
      title: '100 mts de cable utp',
      description: 'cable utp cat 5e en aleacion para interior inluidos en el kit.',
      images: [imagen7, imagen8, imagen9],
      botonTexto: 'Comprar Cámaras Adicionales'
    },
  ];

  // Array de banners
  const banners = [
    <Banner
      key="banner1"
      texto="Oferta especial: 50% de descuento"
      backgroundColor="#FF5722"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner2"
      texto="Oferta especial: 50% de descuento"
      backgroundColor="#FF5722"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner3"
      texto="Oferta especial: 50% de descuento"
      backgroundColor="#FF5722"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
    key="banner1"
    texto="Oferta especial: 50% de descuento"
    backgroundColor="#FF5722"
    textColor="#FFFFFF"
    fontSize="2rem"
    padding="15px 30px"
  />,
  <Banner
  key="banner1"
  texto="Oferta especial: 50% de descuento"
  backgroundColor="#FF5722"
  textColor="#FFFFFF"
  fontSize="2rem"
  padding="15px 30px"
/>,
 <Banner
 key="banner1"
 texto="Oferta especial: 50% de descuento"
 backgroundColor="#FF5722"
 textColor="#FFFFFF"
 fontSize="2rem"
 padding="15px 30px"
/>,
 <Banner
 key="banner1"
 texto="Oferta especial: 50% de descuento"
 backgroundColor="#FF5722"
 textColor="#FFFFFF"
 fontSize="2rem"
 padding="15px 30px"
/>,
  ];

  const handleConfirmarCompra = () => {
    console.log('Datos de la compra:', { nombre, telefono, direccion, ciudadYBarrio });
    alert('Compra confirmada y datos guardados');
  };

  const abrirWhatsApp = () => {
    console.log('Abrir WhatsApp');
    // Aquí puedes agregar la lógica para abrir WhatsApp
  };

  const hacerLlamada = () => {
    console.log('Llamar');
    // Aquí puedes agregar la lógica para hacer una llamada
  };

  const horariosEntrega = 'Horarios de entrega: Lunes a Viernes de 9:00 AM a 6:00 PM';

  return (
    <div>
      <Header links={headerLinks} extraMessage="Pago Contraentrega + Envio Gratis!" />
      <HeroHeader
        imagen={headerImage}
        titulo="solo para Bucaramanga y el área metropolitana"
        subtitulo="tecnologia acusense deteccion humanos y vehiculos!"
        descripcion="kit de 4 cámaras Full HD 1080p (2mpx) de HIKVISION con grabacion a 4 mpx lite, ideales para todo tipo de negocio, casa u oficina."
      >
        <BotonCompra
          texto="Comprar Kit de 4 Cámaras"
          onClick={abrirModal}
          color="#28a745"
          tamaño="mediano"
        />
      </HeroHeader>

      <Beneficios />

      <Banner
      key="banner1"
      texto="Oferta especial: 50% de descuento"
      backgroundColor="#FF5722"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,

      {/* Renderizar carruseles y banners intercalados */}
      {carruseles.map((carrusel, index) => (
        <React.Fragment key={index}>
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2>{carrusel.title}</h2>
            <Carrusel images={carrusel.images} />
            <BotonCompra
              texto={carrusel.botonTexto}
              onClick={abrirModal}
              color="#28a745"
              tamaño="mediano"
            />
            <p>{carrusel.description}</p>
          </div>
          {/* Mostrar un banner después de cada carrusel, excepto el último */}
          {index < banners.length && banners[index]}
        </React.Fragment>
      ))}

<HeroHeader
        imagen={headerImage}
        titulo="solo para Bucaramanga y el área metropolitana"
        subtitulo="tecnologia acusense deteccion humanos y vehiculos!"
        descripcion="kit de 4 cámaras Full HD 1080p (2mpx) de HIKVISION con grabacion a 4 mpx lite, ideales para todo tipo de negocio, casa u oficina."
      >
        <BotonCompra
          texto="Comprar Kit de 4 Cámaras"
          onClick={abrirModal}
          color="#28a745"
          tamaño="mediano"
        />
      </HeroHeader>

      <Formulario
        onClose={cerrarModal}
        onConfirm={handleConfirmarCompra}
        nombre={nombre}
        setNombre={setNombre}
        telefono={telefono}
        setTelefono={setTelefono}
        direccion={direccion}
        setDireccion={setDireccion}
        ciudadYBarrio={ciudadYBarrio}
        setCiudadYBarrio={setCiudadYBarrio}
        abrirWhatsApp={abrirWhatsApp}
        hacerLlamada={hacerLlamada}
        horariosEntrega={horariosEntrega}
      />
    </div>
  );
};

export default Kit4Camaras;