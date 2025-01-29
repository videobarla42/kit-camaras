import React from 'react';
import useModalCompra from '@/componentes/useModalCompra';
import Carrusel from '@/componentes/Carrusel';
import BotonCompra from '@/componentes/BotonCompra';
import HeroHeader from '@/componentes/HeroHeader';
import Header from '@/componentes/Header';
import Beneficios from '@/componentes/Beneficios';
import Banner from '@/componentes/Banner';
import ModalCompra from '@/componentes/ModalCompra';
import Formulario from '@/componentes/Formulario';

// Importar imágenes
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
import headerImage from '@/assets/1.webp';

const Kit4Camaras: React.FC = () => {
  const {
    modalAbierto,
    abrirModal: abrirModalBase,
    cerrarModal,
    confirmarCompra,
    nombre,
    setNombre,
    telefono,
    setTelefono,
    direccion,
    setDireccion,
    ciudadYBarrio,
    setCiudadYBarrio,
  } = useModalCompra();

  const [carruselSeleccionado, setCarruselSeleccionado] = React.useState<any>(null);

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
    { to: '/', text: 'Kit De 8 Camaras de seguridad HIKVISION' },
    { to: '/kit_4-camaras-seguridad', text: 'Kit De 4 Camaras de seguridad HIKVISION' },
    { to: '/kit_16-camaras-seguridad', text: 'Kit De 16 Camaras de seguridad HIKVISION' },
  ];

  const carruseles = [
    {
      title: '1 Video Grabador DVR de 4 Canales, 4 MPX Lite + IA',
      description: 'DVR AcuSense mini de 4 canales y 4 Mpx lite de HIKVISION con detección de movimiento avanzada (humanos y vehículos) y protección perimetral. Incluye compresión H.265 Pro+, soporte para cámaras IP de hasta 6 MP, y grabación en múltiples resoluciones hasta 4mpx Lite.',
      images: [
        { src: imagen2, alt: 'Video Grabador DVR de 4 Canales HIKVISION' },
        { src: imagen3, alt: 'DVR AcuSense mini de 4 canales HIKVISION' },
        { src: imagen4, alt: 'DVR con detección de movimiento avanzada' },
        { src: imagen5, alt: 'DVR HIKVISION con protección perimetral' },
        { src: imagen6, alt: 'DVR con compresión H.265 Pro+' },
        { src: imagen7, alt: 'DVR con soporte para cámaras IP' },
        { src: imagen8, alt: 'DVR con grabación en múltiples resoluciones' },
        { src: imagen9, alt: 'DVR HIKVISION de 4 canales' }
      ],
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '4 Cámaras de 2 Mpx y 20 MTS de Alcance',
      description: '4 Cámaras Domo TURBOHD 1080p de HIKVISION con lente de 2.8 mm y visión nocturna inteligente EXIR de hasta 20 mts.',
      images: [
        { src: imagen10, alt: 'Cámara Domo TURBOHD 1080p HIKVISION' },
        { src: imagen11, alt: 'Cámara de seguridad HIKVISION' },
        { src: imagen12, alt: 'Cámara con visión nocturna HIKVISION' },
        { src: imagen13, alt: 'Cámara Domo TURBOHD 1080p' },
        { src: imagen14, alt: 'Cámara de seguridad con lente de 2.8 mm' },
        { src: imagen15, alt: 'Cámara con visión nocturna EXIR' },
        { src: imagen16, alt: 'Cámara de seguridad para exteriores' },
        { src: imagen17, alt: 'Cámara Domo HIKVISION' },
        { src: imagen18, alt: 'Cámara de seguridad con visión nocturna' }
      ],
      botonTexto: 'Pague en casa!'
    },
    {
      title: '1 Disco duro ideal para videovigilancia',
      description: 'Disco duro Seagate Skyhawk 1 TB para videovigilancia, grabación 24/7, tecnología AllFrame, velocidad 110 MB/s, interfaz SATA, caché 64 MB, soporta 64 cámaras.',
      images: [
        { src: imagen19, alt: 'Disco duro Seagate Skyhawk 1 TB' },
        { src: imagen20, alt: 'Disco duro para videovigilancia' },
        { src: imagen21, alt: 'Disco duro con tecnología AllFrame' },
        { src: imagen22, alt: 'Disco duro Seagate Skyhawk' },
        { src: imagen23, alt: 'Disco duro para grabación 24/7' }
      ],
      botonTexto: 'Obtenga el Kit!'
    },
    {
      title: '4 Fuentes de Energía',
      description: '4 fuentes de alimentación de AC 110-240v, 12 voltios a 1 amperio de alta calidad, conector de alimentación de 2.1mm, con LED indicador de funcionamiento.',
      images: [
        { src: imagen24, alt: 'Fuente de alimentación para cámaras de seguridad' }
      ],
      botonTexto: 'Comprar!'
    },
    {
      title: '4 pares de Video Baluns',
      description: '4 Pares de VIDEO BALUM TURBO 4 EN 1 transmisión de señales de video a través de cables UTP, señal clara y estable a larga distancia.',
      images: [
        { src: imagen25, alt: 'Video Balun para transmisión de señales de video' }
      ],
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '4 pares de Borneras',
      description: '4 pares de borneras eléctricas para la conexión y distribución de energía de las cámaras.',
      images: [
        { src: imagen26, alt: 'Borneras eléctricas para cámaras de seguridad' }
      ],
      botonTexto: 'Obtener!'
    },
    {
      title: '100 mts de cable UTP',
      description: 'Cable UTP Cat 5e para interior incluido en el kit.',
      images: [
        { src: imagen27, alt: 'Cable UTP Cat 5e para cámaras de seguridad' }
      ],
      botonTexto: 'Pídalo Ahora!'
    }
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
      texto="Garantía de 2 años para disco Seagate Skyhawk de 1 TB"
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
      texto="Los accesorios del kit no tienen garantía."
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner5"
      texto="Domicilios sin costo!"
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
    />
  ];

  const abrirModal = (index?: number) => {
    if (typeof index === 'number') {
      setCarruselSeleccionado(carruseles[index]);
    }
    abrirModalBase();
  };

  const horariosEntrega = `Horarios de entrega: De lunes a viernes: de 8:00 a.m. a 6:00 p.m. (jornada continua).
  Sábados: de 8:00 a.m. a 1:00 p.m.
  Domingos y festivos no hacemos entregas.

  Aceptamos pagos en efectivo, Nequi o Bancolombia.`;

  const descripcionModal = `Complete el formulario para hacer llegar el pedido a su domicilio.
  Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de $780,000 COP. ¡Domicilio gratis!
  Realizamos una llamada de confirmación para verificar la dirección y disponibilidad de los equipos. ¡Entrega inmediata!`;

  return (
    <div>
      <Header links={headerLinks} extraMessage="Pago Contraentrega + Envío Gratis!" />
      
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
        texto="Descripción del kit!"
        backgroundColor="#8B0000"
        textColor="#FFFFFF"
        fontSize="2rem"
        padding="15px 30px"
      />

      {carruseles.map((carrusel, index) => (
        <React.Fragment key={index}>
          <section style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2>{carrusel.title}</h2>
            <Carrusel images={carrusel.images} />
            <p>{carrusel.description}</p>
            <BotonCompra
              texto={carrusel.botonTexto}
              onClick={() => abrirModal(index)}
              color="#007bff"
              tamaño="mediano"
            />
          </section>
          {index < banners.length && banners[index]}
        </React.Fragment>
      ))}

      {modalAbierto && (
        <ModalCompra
          onClose={cerrarModal}
          onConfirm={confirmarCompra}
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
          tituloModal="Confirme la Compra del Kit de 4 Cámaras"
          descripcionModal={descripcionModal}
        />
      )}
      <HeroHeader
        imagen={headerImage}
        titulo=""
        subtitulo=""
        descripcion=""
        precio="780,000"
      >

      </HeroHeader>
      <Formulario
      titulo="Confirme la Compra del kit de 4 cámaras"
      descripcion="Por favor, complete el formulario para hacer llegar el pedido a su domicilio. Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de $780,000. ¡Domicilio gratis! Realizamos una llamada de confirmación para verificar la dirección y la disponibilidad de los equipos. ¡Entrega inmediata!"
      precio="$780,000"
    />

    {/* Schema Markup */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Kit de 4 Cámaras de Seguridad HIKVISION",
        "image": [
          imagen1,
          imagen2,
          imagen3,
          imagen4,
          imagen5,
          imagen6,
          imagen7,
          imagen8,
          imagen9,
          imagen10,
          imagen11,
          imagen12,
          imagen13,
          imagen14,
          imagen15,
          imagen16,
          imagen17,
          imagen18,
          imagen19,
          imagen20,
          imagen21,
          imagen22,
          imagen23,
          imagen24,
          imagen25,
          imagen26,
          imagen27
        ],
        "description": "Kit de 4 cámaras Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, ideales para todo tipo de negocio, casa u oficina.",
        "brand": {
          "@type": "Brand",
          "name": "HIKVISION"
        },
        "offers": {
          "@type": "Offer",
          "price": "780000",
          "priceCurrency": "COP",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Tu Empresa"
          }
        }
      })}
    </script>
    </div>
  );
};

export default Kit4Camaras;