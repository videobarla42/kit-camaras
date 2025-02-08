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
import imagen1 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)2.webp';

import headerImage from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)2.webp';



// Importar imágenes
  // camaras bala 2mpx (números del 50 al 64)
  import imagen50 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)1.webp';
  import imagen51 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)5.webp';
  import imagen52 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)7.webp';
  import imagen53 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)8.webp';
  import imagen54 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)9.webp';
  import imagen55 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)10.webp';
  import imagen56 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)11.webp';
  import imagen57 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)12.webp';
  import imagen58 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)13.webp';
  import imagen59 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)14.webp';
  import imagen60 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)15.webp';
  import imagen61 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)16.webp';
  import imagen62 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)17.webp';
  import imagen63 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)18.webp';
  import imagen64 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)19.webp';
  
  
  // dvr de 4mpx (números del 65 al 79)
  import imagen65 from '@/assets/iDS-71040816HQHI-M1S1/iDS-71HQHI-M1S1.webp';
  import imagen66 from '@/assets/iDS-71040816HQHI-M1S1/iDS-71HQHI-M1S4.webp';
  import imagen67 from '@/assets/iDS-71040816HQHI-M1S1/iDS-71HQHI-M1S5.webp';
  import imagen68 from '@/assets/iDS-71040816HQHI-M1S1/iDS-71HQHI-M1S6.webp';
  import imagen69 from '@/assets/iDS-71040816HQHI-M1S1/iDS-71HQHI-M1S7.webp';
  import imagen70 from '@/assets/iDS-71040816HQHI-M1S1/iDS-71HQHI-M1S8.webp';
  import imagen71 from '@/assets/iDS-71040816HQHI-M1S1/iDS-71HQHI-M1S9.webp';
  import imagen72 from '@/assets/iDS-71040816HQHI-M1S1/iDS-71HQHI-M1S10.webp';
  import imagen73 from '@/assets/iDS-71040816HQHI-M1S1/iDS-71HQHI-M1S11.webp';
  import imagen74 from '@/assets/iDS-71040816HQHI-M1S1/iDS-71HQHI-M1S12.webp';
  import imagen75 from '@/assets/iDS-71040816HQHI-M1S1/iDS-71HQHI-M1S13.webp';
  import imagen76 from '@/assets/iDS-71040816HQHI-M1S1/iDS-71HQHI-M1S14.webp';
  import imagen77 from '@/assets/iDS-71040816HQHI-M1S1/iDS-71HQHI-M1S15.webp';
  
  
  // disco duro (números del 65 al 79)
  import imagen78 from '@/assets/SEGATE/ST-1000-VX00-15203.webp';
  import imagen79 from '@/assets/SEGATE/ST-1000-VX00-15202.webp';
  import imagen80 from '@/assets/SEGATE/ST-1000-VX00-15201.webp';
  
  
  // materiales
  import imagen81 from '@/assets/MATERIALES/2.webp';
  import imagen82 from '@/assets/MATERIALES/5.webp';
  import imagen83 from '@/assets/MATERIALES/8.webp';
  import imagen84 from '@/assets/MATERIALES/10.webp';
  
  
  
  
  
   // Importación de las imágenes
   import Image1500 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)1.webp';
   import Image1501 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)2.webp';
   import Image1502 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)3.webp';
   import Image1503 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)1.webp';
   import Image1504 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)2.webp';
   import Image1505 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)3.webp';



const Kit4CamarasBala: React.FC = () => {          
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
    const message = 'Hola, Me Interesa el kit de 8 cámaras bala 2mpx + 4 Mpx Lite de HIKVISION, Puede Brindarme Mas Informacion?';
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const hacerLlamada = () => {
    const phoneUri = 'tel:+573046615865';
    window.location.href = phoneUri;
  };

  const headerLinks = [
    { to: '/', text: 'Kit 4 Cámaras de seguridad Domo HIKVISION $780,000 COP', image: Image1500 },
    { to: '/kits_8-camaras-seguridad', text: 'Kit 8 Cámaras de seguridad Domo HIKVISION $1,175,000 COP', image: Image1501 },
    { to: '/kit_16-camaras-seguridad', text: 'Kit 16 Cámaras de seguridad Domo HIKVISION $1,990,000 COP', image: Image1502 },
    { to: '/kit_4-camaras-seguridad-bala', text: 'Kit 4 Cámaras de seguridad Bala HIKVISION $860,000 COP', image: Image1503 },
    { to: '/kit_8-camaras-seguridad-bala', text: 'Kit 8 Cámaras de seguridad Bala HIKVISION $1,370,000 COP', image: Image1504 },
    { to: '/kit_16-camaras-seguridad-bala', text: 'Kit 16 Cámaras de seguridad HIKVISION $2,340,000 COP', image: Image1505 },
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
      title: '1 DVR De 8 Canales, 4 MPX',
      description: 'DVR AcuSense mini de 8 canales y 4 Mpx lite de HIKVISION con detección de movimiento avanzada (humanos y vehículos) y protección perimetral. Incluye compresión H.265 Pro+, soporte para cámaras IP de hasta 6 MP, y grabación en múltiples resoluciones hasta 4mpx Lite.',
      features: [
        'Detección avanzada de movimiento: humanos y vehículos',
        'Protección perimetral de alta precisión',
        'Compresión H.265 Pro+ para ahorro de almacenamiento',
        'Soporte para cámaras IP de hasta 6 MP'
      ],
      images: [
        { src: imagen65, alt: 'Video Grabador DVR de 4 Canales HIKVISION' },
        { src: imagen66, alt: 'DVR AcuSense mini de 4 canales HIKVISION' },
        { src: imagen67, alt: 'DVR con detección de movimiento avanzada' },
        { src: imagen68, alt: 'DVR HIKVISION con protección perimetral' },
        { src: imagen69, alt: 'DVR con compresión H.265 Pro+' },
        { src: imagen70, alt: 'DVR con soporte para cámaras IP' },
        { src: imagen71, alt: 'DVR con grabación en múltiples resoluciones' },
        { src: imagen72, alt: 'DVR HIKVISION de 4 canales' },
        { src: imagen73, alt: 'DVR HIKVISION de 4 canales' },
        { src: imagen74, alt: 'DVR HIKVISION de 4 canales' },
        { src: imagen75, alt: 'DVR HIKVISION de 4 canales' },
        { src: imagen76, alt: 'DVR HIKVISION de 4 canales' },
        { src: imagen77, alt: 'DVR HIKVISION de 4 canales' },
      ],
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '8 Cámaras Bala De 2 Mpx',
      description: '8 Cámaras Bala TURBOHD 1080p de HIKVISION con lente de 2.8 mm y visión nocturna inteligente EXIR de hasta 20 mts.',
      features: [
        'Resolución Full HD 1080p',
        'Lente de 2.8 mm para amplio campo de visión',
        'Visión nocturna inteligente EXIR de hasta 20 metros',
        'Calidad profesional HIKVISION'
      ],
      images: [
        { src: imagen51, alt: 'Cámara Domo TURBOHD 1080p HIKVISION' },
        { src: imagen52, alt: 'Cámara de seguridad HIKVISION' },
        { src: imagen53, alt: 'Cámara con visión nocturna HIKVISION' },
        { src: imagen54, alt: 'Cámara Domo TURBOHD 1080p' },
        { src: imagen55, alt: 'Cámara de seguridad con lente de 2.8 mm' },
        { src: imagen56, alt: 'Cámara con visión nocturna EXIR' },
        { src: imagen57, alt: 'Cámara de seguridad para exteriores' },
        { src: imagen58, alt: 'Cámara Domo HIKVISION' },
        { src: imagen59, alt: 'Cámara de seguridad con visión nocturna' },
        { src: imagen60, alt: 'Cámara de seguridad con visión nocturna' },
        { src: imagen61, alt: 'Cámara de seguridad con visión nocturna' },
        { src: imagen62, alt: 'Cámara de seguridad con visión nocturna' },
        { src: imagen63, alt: 'Cámara de seguridad con visión nocturna' },
        { src: imagen64, alt: 'Cámara de seguridad con visión nocturna' },
      ],
      botonTexto: 'Pague en casa!'
    },
    {
      title: '1 Disco duro ideal para videovigilancia',
      description: 'Disco duro Seagate Skyhawk 1 TB para videovigilancia, grabación 24/7, tecnología AllFrame, velocidad 110 MB/s, interfaz SATA, caché 64 MB, soporta 64 cámaras.',
      features: [
        'Capacidad de 1 TB para videovigilancia',
        'Tecnología AllFrame para rendimiento óptimo',
        'Soporta grabación continua 24/7',
        'Interfaz SATA con velocidad de 110 MB/s'
      ],
      images: [
        { src: imagen78, alt: 'Disco duro Seagate Skyhawk 1 TB' },
        { src: imagen79, alt: 'Disco duro para videovigilancia' },
        { src: imagen80, alt: 'Disco duro con tecnología AllFrame' },
      ],
      botonTexto: 'Obtenga el Kit!'
    },
    {
      title: '4 Fuentes de Energía',
      description: '4 fuentes de alimentación de AC 110-240v, 12 voltios a 1 amperio de alta calidad, conector de alimentación de 2.1mm, con LED indicador de funcionamiento.',
      features: [
        'Compatibilidad con AC 110-240v',
        'Salida de 12 voltios a 1 amperio',
        'Conector de 2.1 mm para cámaras de seguridad',
        'LED indicador de funcionamiento'
      ],
      images: [
        { src: imagen81, alt: 'Fuente de alimentación para cámaras de seguridad' }
      ],
      botonTexto: 'Comprar!'
    },
    {
      title: '4 pares de Video Baluns',
      description: '4 Pares de VIDEO BALUM TURBO 4 EN 1 transmisión de señales de video a través de cables UTP, señal clara y estable a larga distancia.',
      features: [
        'Transmisión de video a larga distancia',
        'Compatible con cables UTP',
        'Señal de video clara y estable',
        'Tecnología TURBO 4 en 1'
      ],
      images: [
        { src: imagen82, alt: 'Video Balun para transmisión de señales de video' }
      ],
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '4 pares de Borneras',
      description: '4 pares de borneras eléctricas para la conexión y distribución de energía de las cámaras.',
      features: [
        'Distribución eficiente de energía',
        'Conexión segura para cámaras de seguridad',
        'Alta resistencia eléctrica',
        'Fácil instalación'
      ],
      images: [
        { src: imagen83, alt: 'Borneras eléctricas para cámaras de seguridad' }
      ],
      botonTexto: 'Obtener!'
    },
    {
      title: '100 mts de cable UTP',
      description: 'Cable UTP Cat 5e para interior incluido en el kit.',
      features: [
        'Categoría 5e para transmisión eficiente',
        'Ideal para sistemas de videovigilancia',
        'Alta velocidad de transferencia de datos',
        'Longitud de 100 metros'
      ],
      images: [
        { src: imagen84, alt: 'Cable UTP Cat 5e para cámaras de seguridad' }
      ],
      botonTexto: 'Pídalo Ahora!'
    }
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
  Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de $1,370.000 COP. ¡Domicilio gratis!
  Realizamos una llamada de confirmación para verificar la dirección y disponibilidad de los equipos. ¡Entrega inmediata!`;

  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <Header links={headerLinks} extraMessage="Pago Contraentrega + Envío Gratis!" />
      </Suspense>

      <Suspense fallback={<div>Cargando...</div>}>
        <HeroHeader
          imagen={headerImage}
          titulo="Solo para Bucaramanga y el área metropolitana"
          subtitulo="Tecnología avanzada: detección de humanos y vehículos"
          descripcion="Kit de 4 cámaras Bala Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, ideales para todo tipo de negocio, casa u oficina."
          precio="1,370.000"
        >
          <BotonCompra
            texto="Compra el Kit de Cámaras!"
            onClick={abrirModal}
            color="#28a745"
            tamaño="mediano"
          />
        </HeroHeader>
      </Suspense>

      <Suspense fallback={<div>Cargando...</div>}>
        <Beneficios />
      </Suspense>

      <Suspense fallback={<div>Cargando...</div>}>
        <Banner
          key="banner0"
          texto="Descripción del kit!"
          backgroundColor="#8B0000"
          textColor="#FFFFFF"
          fontSize="2rem"
          padding="15px 30px"
        />
      </Suspense>
     {carruseles.map((carrusel, index) => (
       <React.Fragment key={index}>
         <section style={{ marginBottom: '40px', textAlign: 'center' }}>
           <h2>{carrusel.title}</h2>
           <Suspense fallback={<div>Cargando...</div>}>
             <Carrusel
               images={carrusel.images}
               title={carrusel.title}
               description={carrusel.description}
               features={carrusel.features}
             />
           </Suspense>
           <p>{carrusel.description}</p>
           <Suspense fallback={<div>Cargando...</div>}>
             <BotonCompra
               texto={carrusel.botonTexto}
               onClick={() => abrirModal(index)}
               color="#007bff"
               tamaño="mediano"
             />
           </Suspense>
         </section>
         {index < banners.length && banners[index]}
       </React.Fragment>
     ))}

      {modalAbierto && (
        <Suspense fallback={<div>Cargando...</div>}>
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
            tituloModal="Compre del Kit de 4 Cámaras Bala de 2mpx"
            descripcionModal={descripcionModal}
          />
        </Suspense>
      )}

      <Suspense fallback={<div>Cargando...</div>}>
        <HeroHeader
          imagen={headerImage}
          titulo=""
          subtitulo=""
          descripcion=""
          precio="1,370.000"
        />
      </Suspense>

      <Suspense fallback={<div>Cargando...</div>}>
        <Formulario
          titulo="confirma la Compra del kit de 8 cámaras Bala, 2mpx + grabacion a 4mpx lite"
          descripcion="Por favor, complete el formulario para hacer llegar el pedido a su domicilio. Pago contra entrega solo en Bucaramanga y su área metropolitana, ¡Domicilio gratis! Realizamos llamada de confirmación para verificar la dirección y la disponibilidad de los equipos. ¡Entrega inmediata!"
          precio="$1,370.000"
        />
      </Suspense>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "Kit de 8 Cámaras de Seguridad HIKVISION",
          "image": [
            imagen1,
            imagen50,
            imagen51,
            imagen52,
            imagen53,
            imagen54,
            imagen55,
            imagen56,
            imagen57,
            imagen58,
            imagen59,
            imagen60,
            imagen61,
            imagen62,
            imagen63,
            imagen64,
            imagen65,
            imagen66,
            imagen67,
            imagen68,
            imagen69,
            imagen70,
            imagen71,
            imagen72,
            imagen73,
            imagen74,
            imagen75,
            imagen76,
            imagen77,
            imagen78,
            imagen79,
            imagen80,
            imagen81,
            imagen82,
            imagen83,
            imagen84,
            Image1500,
            Image1501,
            Image1502,
            Image1503,
            Image1504,
            Image1505,
          ],
        "description": "Kit de 4 cámaras Bala Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, ideales para todo tipo de negocio, casa u oficina.",
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
            "name": "S24 seguridad electronica"
          }
        }
      })}
    </script>
    </div>
  );
};

export default  Kit4CamarasBala;