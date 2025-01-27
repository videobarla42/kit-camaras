import React, { useState } from 'react';
import Carrusel from '@/componentes/Carrusel';
import BotonCompra from '@/componentes/BotonCompra';
import HeroHeader from '@/componentes/HeroHeader';
import Header from '@/componentes/Header';
import Beneficios from '@/componentes/Beneficios.tsx';
import Banner from '@/componentes/Banner';
import Formulario from '@/componentes/Formulario';

// Importar imágenes locales en formato .webp
import imagen1 from '@/assets/1.webp';
import imagen2 from '@/assets/2.webp';
import imagen3 from '@/assets/3.webp';
import imagen4 from '@/assets/4.webp';
import imagen5 from '@/assets/5.webp';
import imagen6 from '@/assets/6.webp';
import imagen7 from '@/assets/7.webp';
import imagen8 from '@/assets/8.webp';
import imagen9 from '@/assets/9.webp';
import imagen10 from '@/assets/10.webp';
import imagen11 from '@/assets/11.webp';
import imagen12 from '@/assets/12.webp';
import imagen13 from '@/assets/13.webp';
import imagen14 from '@/assets/14.webp';
import imagen15 from '@/assets/15.webp';
import imagen16 from '@/assets/16.webp';
import imagen17 from '@/assets/17.webp';
import imagen18 from '@/assets/18.webp';
import imagen19 from '@/assets/19.webp';
import imagen20 from '@/assets/20.webp';
import imagen21 from '@/assets/21.webp';
import imagen22 from '@/assets/22.webp';
import imagen23 from '@/assets/23.webp';
import imagen24 from '@/assets/24.webp';
import imagen25 from '@/assets/25.webp';
import imagen26 from '@/assets/26.webp';
import headerImage from '@/assets/1.webp'; // También actualizada a .webp

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
      title: '1 Video Grabador DVR de 4 Canales, 4 MPX Lite + IA',
      description: 'DVR AcuSense mini de 4 canales Y 4 Mpx lite de HIKVISION con detección de movimiento avanzada (humanos y vehículos) y protección perimetral. Incluye compresión H.265 Pro+, soporte para cámaras IP de hasta 6 MP, y grabación en múltiples resoluciones hasta 4mpx Lite.',
      images: [imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8],
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '4 Camaras de 2 Mpx y 20 MTS de Alcance',
      description: '4 Cámaras Domo TURBOHD 1080p de HIKVISION con lente de 2.8 mm y visión nocturna inteligente EXIR de hasta 20 mts.',
      images: [imagen9, imagen10, imagen11, imagen12, imagen13, imagen14, imagen15, imagen16, imagen17],
      botonTexto: 'Page en casa!'
    },
    {
      title: '1 Disco duro para videovigilancia WD Purple - 1 TB',
      description: 'Disco duro WD Purple 1 TB para videovigilancia, grabación 24/7, tecnología AllFrame, velocidad 110 MB/s, interfaz SATA, caché 64 MB, soporta 64 cámaras.',
      images: [imagen18, imagen19, imagen20, imagen21, imagen22],
      botonTexto: 'Obtener el Kit!'
    },
    {
      title: '4 Fuentes De Energia 12v - 1amp',
      description: 'fuente de alimentación de AC 110- 240v, 12 voltios a 1 amperio de alta calidad, conector de alimentación de 2.1mm, con led indicador de funcionamiento, el articulo puede ser ligeramente distinto al de la foto.',
      images: [imagen23],
      botonTexto: 'Compra Con el Kit!'
    },
    {
      title: '4 pares de Video Baluns 12v - 1amp',
      description: '4 Pares de VIDEO BALUM TURBO 4 EN 1 transmisión de señales de video a través de cables UTP, señal clara y estable a larga distancia.',
      images: [imagen24],
      botonTexto: 'Obtenlo Ahora!'
    },
    {
      title: '4 pares de Borneras',
      description: '4 pares de borneras electricas para la conexión y distribución de energia de las camaras.',
      images: [imagen25],
      botonTexto: 'Ahorre el Domicilio!'
    },
    {
      title: '100 mts de cable utp',
      description: 'cable utp cat 5e en aleacion para interior inluidos en el kit.',
      images: [imagen26],
      botonTexto: 'Pidelo en Casa!'
    },
  ];

  // Array de banners
  const banners = [
    <Banner
      key="banner1"
      texto="Garantía de 1 año para cámaras de seguridad y videograbador DVR"
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner2"
      texto="Garantia de 3 años para disco duro WD Purpura"
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner3"
      texto="Accesorios del kit de cámaras"
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner4"
      texto="accesorios del kit no tienen garantia."
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner5"
      texto="domicilios sin costo!"
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner6"
      texto="Entrega inmediata para Bucaramanga y su área metropolitana."
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner7"
      texto="¡Entrega Inmediata!"
      backgroundColor="#8B0000"
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
          texto="Compra el Kit de Cámaras!"
          onClick={abrirModal}
          color="#28a745"
          tamaño="mediano"
        />
      </HeroHeader>

      <Beneficios />

      <Banner
        key="banner0"
        texto="Descripcion del kit de cámaras"
        backgroundColor="#8B0000"
        textColor="#FFFFFF"
        fontSize="2rem"
        padding="15px 30px"
      />

      {/* Renderizar carruseles y banners intercalados */}
      {carruseles.map((carrusel, index) => (
  <React.Fragment key={index}>
    <div style={{ marginBottom: '40px', textAlign: 'center' }}>
      <h2>{carrusel.title}</h2>
      <Carrusel images={carrusel.images} />
      {/* Mover el texto descriptivo antes del botón */}
      <p>{carrusel.description}</p>
      <BotonCompra
        texto={carrusel.botonTexto}
        onClick={abrirModal}
        color="#28a745"
        tamaño="mediano"
      />
    </div>
    {/* Mostrar un banner después de cada carrusel, excepto el último */}
    {index < banners.length && banners[index]}
  </React.Fragment>
))}

      <HeroHeader
        imagen={headerImage}
        titulo=""
        subtitulo=""
        descripcion=""
      >
      
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