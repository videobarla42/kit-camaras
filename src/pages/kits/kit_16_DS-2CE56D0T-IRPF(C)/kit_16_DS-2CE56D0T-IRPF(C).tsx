import React, { Suspense, lazy } from 'react';
import useModalCompra from '@/componentes/useModalCompra';

// Lazy load de componentes
const Carrusel = lazy(() => import('@/componentes/Carrusel'));
const BotonCompra = lazy(() => import('@/componentes/BotonCompra'));
const HeroHeader = lazy(() => import('@/componentes/HeroHeader'));
const Header = lazy(() => import('@/componentes/Header'));
const Beneficios = lazy(() => import('@/componentes/Beneficios'));
const Banner = lazy(() => import('@/componentes/Banner'));
const ModalCompra = lazy(() => import('@/componentes/ModalCompra'));
const Formulario = lazy(() => import('@/componentes/Formulario'));

// Importar imágenes
import imagen36 from '@/assets/36.webp';
import imagen26 from '@/assets/26.webp';
import imagen37 from '@/assets/37.webp';
import imagen38 from '@/assets/38.webp';
import imagen39 from '@/assets/39.webp';
import imagen46 from '@/assets/46.webp';
import imagen41 from '@/assets/41.webp';
import imagen11 from '@/assets/11.webp';
import imagen12 from '@/assets/12.webp';
import imagen13 from '@/assets/13.webp';
import imagen14 from '@/assets/14.webp';
import imagen15 from '@/assets/15.webp';
import imagen16 from '@/assets/16.webp';
import imagen17 from '@/assets/17.webp';
import imagen18 from '@/assets/18.webp';
import imagen42 from '@/assets/42.webp';
import imagen43 from '@/assets/43.webp';
import imagen44 from '@/assets/44.webp';
import imagen19 from '@/assets/19.webp';
import imagen20 from '@/assets/20.webp';
import imagen21 from '@/assets/21.webp';
import imagen22 from '@/assets/22.webp';
import imagen23 from '@/assets/23.webp';
import headerImage from '@/assets/36.webp'; // Asegúrate de que la ruta sea correcta

const Kits16Camaras: React.FC = () => {
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
    const message = 'Hola, estoy interesado en el kit de 16 cámaras.';
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


  interface ImagenProps {
      src: string;
      alt: string;
    }
    const Imagen: React.FC<ImagenProps> = ({ src, alt }) => {
      return (
        <Suspense fallback={<div>Cargando imagen...</div>}>
          <img src={src} alt={alt} />
        </Suspense>
      );
    };


  const carruseles = [
    {
      title: '1 Video Grabador DVR de 16 Canales, 4 MPX Lite + IA',
      description: 'DVR AcuSense mini de 16 canales Y 4 Mpx lite de HIKVISION con detección de movimiento avanzada (humanos y vehículos) y protección perimetral. Incluye compresión H.265 Pro+, soporte para cámaras IP de hasta 6 MP, y grabación en múltiples resoluciones hasta 4mpx Lite.',
      images: [
        { src: imagen37, alt: 'Video Grabador DVR de 16 Canales HIKVISION' },
        { src: imagen38, alt: 'DVR AcuSense mini de 16 canales HIKVISION' },
        { src: imagen39, alt: 'DVR con detección de movimiento avanzada' },
        { src: imagen46, alt: 'DVR con compresión H.265 Pro+' },
      ],
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '16 Cámaras de 2 Mpx y 20 MTS de Alcance',
      description: 'Cámaras Domo TURBOHD 1080p de HIKVISION con lente de 2.8 mm y visión nocturna inteligente EXIR de hasta 20 mts.',
      images: [
        { src: imagen41, alt: 'Cámara Domo TURBOHD 1080p HIKVISION' },
        { src: imagen11, alt: 'Cámara de seguridad HIKVISION' },
        { src: imagen12, alt: 'Cámara con visión nocturna HIKVISION' },
        { src: imagen13, alt: 'Cámara Domo TURBOHD 1080p' },
        { src: imagen14, alt: 'Cámara de seguridad con lente de 2.8 mm' },
        { src: imagen15, alt: 'Cámara con visión nocturna EXIR' },
        { src: imagen16, alt: 'Cámara de seguridad para exteriores' },
        { src: imagen17, alt: 'Cámara Domo HIKVISION' },
        { src: imagen18, alt: 'Cámara de seguridad con visión nocturna' },
      ],
      botonTexto: 'Page en casa!'
    },
    {
      title: '1 Disco duro Ideal para videovigilancia',
      description: 'Disco duro Seagate Skyhawk 1 TB para videovigilancia, grabación 24/7, tecnología AllFrame, velocidad 110 MB/s, interfaz SATA, caché 64 MB, soporta 64 cámaras.',
      images: [
        { src: imagen19, alt: 'Disco duro Seagate Skyhawk 1 TB' },
        { src: imagen20, alt: 'Disco duro para videovigilancia' },
        { src: imagen21, alt: 'Disco duro con tecnología AllFrame' },
        { src: imagen22, alt: 'Disco duro Seagate Skyhawk' },
        { src: imagen23, alt: 'Disco duro para grabación 24/7' },
      ],
      botonTexto: 'Obten el Kit!'
    },
    {
      title: '16 Fuentes De Energía',
      description: '16 fuentes de alimentación de AC 110-240v, 12 voltios a 1 amperio de alta calidad, conector de alimentación de 2.1mm, con LED indicador de funcionamiento. El artículo puede ser ligeramente distinto al de la foto.',
      images: [
        { src: imagen42, alt: 'Fuente de alimentación para cámaras de seguridad' },
      ],
      botonTexto: 'Comprar!'
    },
    {
      title: '16 pares de Video Baluns',
      description: '16 Pares de VIDEO BALUM TURBO 4 EN 1 transmisión de señales de video a través de cables UTP, señal clara y estable a larga distancia.',
      images: [
        { src: imagen43, alt: 'Video Balun para transmisión de señales de video' },
      ],
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '16 pares de Borneras',
      description: '16 pares de borneras eléctricas para la conexión y distribución de energía de las cámaras.',
      images: [
        { src: imagen44, alt: 'Borneras eléctricas para cámaras de seguridad' },
      ],
      botonTexto: 'Obtener!'
    },
    {
      title: '200 mts de cable UTP',
      description: 'Cable UTP Cat 5e en aleación para interior incluidos en el kit.',
      images: [
        { src: imagen26, alt: 'Cable UTP Cat 5e para cámaras de seguridad' },
      ],
      botonTexto: 'Pidelo Ahora!'
    },
  ];

  function Carruseles() {
    return (
      <div>
        {carruseles.map((carrusel, index) => (
          <div key={index}>
            <h2>{carrusel.title}</h2>
            <p>{carrusel.description}</p>
            <div>
              {carrusel.images.map((image, idx) => (
                <Imagen key={idx} src={image.src} alt={image.alt} />
              ))}
            </div>
            <button>{carrusel.botonTexto}</button>
          </div>
        ))}
      </div>
    );
  }


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
    />,
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
  Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de $1,990,000 COP. ¡Domicilio gratis!
  Realizamos una llamada de confirmación para verificar la dirección y disponibilidad de los equipos. ¡Entrega inmediata!`;

  return (
    <div>
      {/* Encabezado */}
      <Header links={headerLinks} extraMessage="Pago Contraentrega + Envío Gratis!" />

      {/* Hero Header */}
      <HeroHeader
        imagen={headerImage}
        titulo="Solo para Bucaramanga y el área metropolitana"
        subtitulo="Tecnología avanzada: detección de humanos y vehículos"
        descripcion="Kit de 16 cámaras Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, ideales para todo tipo de negocio, casa u oficina."
        precio="1,990,000"
      >
        <BotonCompra
          texto="Compra el Kit de Cámaras!"
          onClick={abrirModal}
          color="#28a745"
          tamaño="mediano"
        />
      </HeroHeader>

      {/* Beneficios */}
      <Beneficios />

      {/* Banner de Descripción del Kit */}
      <Banner
        key="banner0"
        texto="Descripción del kit!"
        backgroundColor="#8B0000"
        textColor="#FFFFFF"
        fontSize="2rem"
        padding="15px 30px"
      />

      {/* Carruseles y Banners Intercalados */}
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

      {/* Modal de Compra */}
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
          tituloModal="Confirme La Compra Del Kit De 16 Cámaras"
          descripcionModal={descripcionModal}
        />
      )}

       <HeroHeader
        imagen={headerImage}
        titulo=""
        subtitulo=""
        descripcion=""
        precio="1,990,000"
      >

      </HeroHeader>

      {/* Formulario de Confirmación */}
      <Formulario
        titulo="Confirmar Compra, kit de 16 cámaras con inteligencia artificial"
        descripcion="Complete el formulario para hacer llegar el pedido a su domicilio. Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de $1,990,000. ¡Domicilio gratis! Realizamos una llamada de confirmación para verificar la dirección y la disponibilidad de los equipos. ¡Entrega inmediata!"
        precio="$1,990,000"
      />

      
   {/* Schema Markup */}
   <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Kit de 16 Cámaras de Seguridad HIKVISION",
        "image": [
          imagen26,
          imagen36,
          imagen37,
          imagen38,
          imagen39,
          imagen41,
          imagen46,
          imagen42,
          imagen43,
          imagen44,
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
          imagen19,
          imagen20,
          imagen21,
        ],
      
        "description": "Kit de 16 cámaras Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, ideales para todo tipo de negocio, casa u oficina.",
        "brand": {
          "@type": "Brand",
          "name": "HIKVISION"
        },
        "offers": {
          "@type": "Offer",
          "price": "1990000",
          "priceCurrency": "COP",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "S24 seguridad electronica"
          }
        }
      })}
    </script>
    </div>
  );
};

export default Kits16Camaras;