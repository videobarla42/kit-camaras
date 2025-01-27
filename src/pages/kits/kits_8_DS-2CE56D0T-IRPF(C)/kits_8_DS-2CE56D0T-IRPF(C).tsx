import React, { useState } from 'react';
import Carrusel from '@/componentes/Carrusel';
import BotonCompra from '@/componentes/BotonCompra';
import HeroHeader from '@/componentes/HeroHeader';
import Header from '@/componentes/Header';
import Beneficios from '@/componentes/Beneficios.tsx';
import Banner from '@/componentes/Banner';
import Formulario from '@/componentes/Formulario';

// Importar imágenes locales en formato .webp
import imagen28 from '@/assets/28.webp';
import imagen29 from '@/assets/29.webp';
import imagen30 from '@/assets/30.webp';
import imagen31 from '@/assets/31.webp';
import imagen26 from '@/assets/26.webp';
import imagen33 from '@/assets/33.webp';
import imagen34 from '@/assets/34.webp';
import imagen35 from '@/assets/35.webp';
import imagen32 from '@/assets/32.webp';
import imagen19 from '@/assets/19.webp';
import imagen20 from '@/assets/20.webp';
import imagen21 from '@/assets/21.webp';
import imagen22 from '@/assets/22.webp';
import imagen23 from '@/assets/23.webp';
import imagen11 from '@/assets/11.webp';
import imagen12 from '@/assets/12.webp';
import imagen13 from '@/assets/13.webp';
import imagen14 from '@/assets/14.webp';
import imagen15 from '@/assets/15.webp';
import imagen16 from '@/assets/16.webp';
import imagen17 from '@/assets/17.webp';
import imagen18 from '@/assets/18.webp';
import headerImage from '@/assets/28.webp'; // También actualizada a .webp

const kits_8_DS_2CE56D0T_IRPF_C: React.FC = () => {
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
    { to: '/', text: 'Kit De 8 Camaras' },
    { to: '/kit_4', text: 'Kit De 4 Camaras' },
  ];

  // Array de carruseles
  const carruseles = [
    {
      title: '1 Video Grabador DVR de 8 Canales, 4 MPX Lite + IA',
      description: 'DVR AcuSense mini de 8 canales Y 4 Mpx lite de HIKVISION con detección de movimiento avanzada (humanos y vehículos) y protección perimetral. Incluye compresión H.265 Pro+, soporte para cámaras IP de hasta 6 MP, y grabación en múltiples resoluciones hasta 4mpx Lite.',
      images: [imagen29, imagen30, imagen31],
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '8 Camaras de 2 Mpx y 20 MTS de Alcance',
      description: '8 Cámaras Domo TURBOHD 1080p de HIKVISION con lente de 2.8 mm y visión nocturna inteligente EXIR de hasta 20 mts.',
      images: [imagen32, imagen11,imagen12,imagen13,imagen14,imagen15,imagen16,imagen17,imagen18],
      botonTexto: 'Page en casa!'
    },
    {
      title: '1 Disco duro para videovigilancia seagate skyhawk - 1 TB',
      description: 'Disco duro seagate skyhawk 1 TB para videovigilancia, grabación 24/7, tecnología AllFrame, velocidad 110 MB/s, interfaz SATA, caché 64 MB, soporta 64 cámaras.',
      images: [imagen19, imagen20, imagen21, imagen22, imagen23],
      botonTexto: 'Obtener el Kit!'
    },
    {
      title: '8 Fuentes De Energia 12v - 1amp',
      description: '8 fuentes de alimentación de AC 110- 240v, 12 voltios a 1 amperio de alta calidad, conector de alimentación de 2.1mm, con led indicador de funcionamiento, el articulo puede ser ligeramente distinto al de la foto.',
      images: [imagen33],
      botonTexto: 'Compra Con el Kit!'
    },
    {
      title: '8 pares de Video Baluns 12v - 1amp',
      description: '8 Pares de VIDEO BALUM TURBO 4 EN 1 transmisión de señales de video a través de cables UTP, señal clara y estable a larga distancia.',
      images: [imagen34],
      botonTexto: 'Obtenlo Ahora!'
    },
    {
      title: '8 pares de Borneras',
      description: '8 pares de borneras electricas para la conexión y distribución de energia de las camaras.',
      images: [imagen35],
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

    // Agregar el resto de los banners
    <Banner
      key="banner2"
      texto="Garantia de 2 años para disco duro WD Purpura"
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    // Continúa con los demás banners
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
        descripcion="kit de 8 cámaras Full HD 1080p (2mpx) de HIKVISION con grabacion a 4 mpx lite, ideales para todo tipo de negocio, casa u oficina."
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
  titulo="Producto X"
  subtitulo="La mejor opción"
  descripcion="Este producto tiene muchas características excelentes."
  precio="1,200,000" // Pasamos un precio aquí
/>


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

export default kits_8_DS_2CE56D0T_IRPF_C;
