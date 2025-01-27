import React, { useState } from 'react';
import ModalCompra from '@/componentes/ModalCompra';
import Header from '@/componentes/Header';
import HeroHeader from '@/componentes/HeroHeader';
import BotonCompra from '@/componentes/BotonCompra';
import Beneficios from '@/componentes/Beneficios';
import Carrusel from '@/componentes/Carrusel';
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
import imagen27 from '@/assets/27.webp';
import imagen28 from '@/assets/28.webp';
import imagen29 from '@/assets/29.webp';
import imagen30 from '@/assets/30.webp';
import imagen31 from '@/assets/31.webp';
import imagen32 from '@/assets/32.webp';
import imagen33 from '@/assets/33.webp';
import imagen34 from '@/assets/34.webp';
import imagen35 from '@/assets/35.webp';
import imagen36 from '@/assets/36.webp';
import imagen37 from '@/assets/37.webp';
import imagen38 from '@/assets/38.webp';
import imagen39 from '@/assets/39.webp';
import imagen40 from '@/assets/40.webp';
import imagen41 from '@/assets/41.webp';
import imagen42 from '@/assets/42.webp';
import imagen43 from '@/assets/43.webp';
import imagen44 from '@/assets/44.webp';
import imagen45 from '@/assets/45.webp';
import imagen46 from '@/assets/46.webp';
import headerImage from '@/assets/1.webp';

const Kit4Camaras: React.FC = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
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

  const handleConfirmarCompra = async () => {
    try {
      console.log('Datos de la compra:', { nombre, telefono, direccion, ciudadYBarrio });
      alert('Compra confirmada y datos guardados');
      cerrarModal();
    } catch (error) {
      console.error('Error al confirmar la compra:', error);
    }
  };

  const abrirWhatsApp = () => {
    const phone = '3046615865';
    const message = 'Hola, estoy interesado en el kit de 4 cámaras.';
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const hacerLlamada = () => {
    const phoneUri = 'tel:+573046615865';
    window.location.href = phoneUri;
  };

  const headerLinks = [
    { to: '/', text: 'Kit De 8 Camaras' },
    { to: '/kit_4', text: 'Kit De 4 Camaras' },
  ];

  const carruseles = [
    {
      title: '1 Video Grabador DVR de 4 Canales, 4 MPX Lite + IA',
      description: 'DVR AcuSense mini de 4 canales Y 4 Mpx lite de HIKVISION con detección de movimiento avanzada (humanos y vehículos) y protección perimetral. Incluye compresión H.265 Pro+, soporte para cámaras IP de hasta 6 MP, y grabación en múltiples resoluciones hasta 4mpx Lite.',
      images: [imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9],
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '4 Camaras de 2 Mpx y 20 MTS de Alcance',
      description: '4 Cámaras Domo TURBOHD 1080p de HIKVISION con lente de 2.8 mm y visión nocturna inteligente EXIR de hasta 20 mts.',
      images: [imagen10, imagen11, imagen12, imagen13, imagen14, imagen15, imagen16, imagen17, imagen18],
      botonTexto: 'Page en casa!'
    },
    {
      title: '1 Disco duro para videovigilancia seagate skyhawk - 1 TB',
      description: 'Disco duro seagate skyhawk 1 TB para videovigilancia, grabación 24/7, tecnología AllFrame, velocidad 110 MB/s, interfaz SATA, caché 64 MB, soporta 64 cámaras.',
      images: [imagen19, imagen20, imagen21, imagen22, imagen23],
      botonTexto: 'Obtener el Kit!'
    },
    {
      title: '4 Fuentes De Energia 12v - 1amp',
      description: 'fuente de alimentación de AC 110- 240v, 12 voltios a 1 amperio de alta calidad, conector de alimentación de 2.1mm, con led indicador de funcionamiento, el articulo puede ser ligeramente distinto al de la foto.',
      images: [imagen24],
      botonTexto: 'Compra Con el Kit!'
    },
    {
      title: '4 pares de Video Baluns 12v - 1amp',
      description: '4 Pares de VIDEO BALUM TURBO 4 EN 1 transmisión de señales de video a través de cables UTP, señal clara y estable a larga distancia.',
      images: [imagen25],
      botonTexto: 'Obtenlo Ahora!'
    },
    {
      title: '4 pares de Borneras',
      description: '4 pares de borneras electricas para la conexión y distribución de energia de las camaras.',
      images: [imagen26],
      botonTexto: 'Ahorre el Domicilio!'
    },
    {
      title: '100 mts de cable utp',
      description: 'cable utp cat 5e en aleacion para interior inluidos en el kit.',
      images: [imagen27],
      botonTexto: 'Pidelo en Casa!'
    },
  ];

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
      texto="Garantia de 2 años para disco seagate skyhawk de 1 TB"
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

  const horariosEntrega = `Horarios de entrega: Lunes a Viernes de 8:00 AM a 6:00 PM`;

  const descripcionModal = `
    Por favor, complete el formulario para hacer llegar el pedido a su domicilio.
    Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de \$780,000. ¡Domicilio gratis!
    Realizamos una llamada de confirmación para verificar la dirección y la disponibilidad de los equipos. ¡Entrega inmediata!
  `;

  const fields = [
    {
      label: 'Nombre',
      value: nombre,
      onChange: setNombre,
      placeholder: 'Nombre',
    },
    {
      label: 'Teléfono',
      value: telefono,
      onChange: setTelefono,
      placeholder: 'Teléfono',
    },
    {
      label: 'Dirección',
      value: direccion,
      onChange: setDireccion,
      placeholder: 'Dirección',
    },
    {
      label: 'Ciudad y Barrio',
      value: ciudadYBarrio,
      onChange: setCiudadYBarrio,
      placeholder: 'Ciudad y Barrio',
    },
  ];

  return (
    <div>
      <Header links={headerLinks} extraMessage="Pago Contraentrega + Envio Gratis!" />
      <HeroHeader
        imagen={headerImage}
        titulo="Solo para Bucaramanga y el área metropolitana"
        subtitulo="Tecnología avanzada: detección de humanos y vehículos"
        descripcion="Kit de 4 cámaras Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, ideales para todo tipo de negocio, casa u oficina."
        precio="780,000"
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
            <p>{carrusel.description}</p>
            <BotonCompra
              texto={carrusel.botonTexto}
              onClick={abrirModal}
              color="#28a745"
              tamaño="mediano"
            />
          </div>
          {index < banners.length && banners[index]}
        </React.Fragment>
      ))}

      {modalAbierto && (
        <ModalCompra
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
          tituloModal="Confirmar Compra"
          descripcionModal={descripcionModal}
        />
      )}
      <HeroHeader
        imagen={headerImage}
        titulo="Solo para Bucaramanga y el área metropolitana"
        subtitulo="Tecnología avanzada: detección de humanos y vehículos"
        descripcion="Kit de 4 cámaras Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, ideales para todo tipo de negocio, casa u oficina."
        precio="780,000"
      >
        <BotonCompra
          texto="Compra el Kit de Cámaras!"
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