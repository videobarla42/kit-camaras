import React, { Suspense, lazy } from 'react';
import useModalCompra from '@/componentes/useModalCompra';
import { usePrice } from '@/componentes/PriceContext';
import Descuento from '@/componentes/Descuento';
import WhatsAppButton from '@/componentes/WhatsAppButton';




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
import imagen1 from '@/assets/H3C_PRO/h3c_pro_1.webp';

import headerImage from '@/assets/H3C_PRO/h3c_pro_1.webp';


  // camaras bala 2mpx (números del 50 al 64)
import imagen50 from "@/assets/H3C_PRO/h3c_pro_5.webp";
import imagen51 from '@/assets/H3C_PRO/h3c_pro_6.webp';
import imagen52 from '@/assets/H3C_PRO/h3c_pro_7.webp';
import imagen53 from '@/assets/H3C_PRO/h3c_pro_8.webp';
import imagen54 from '@/assets/H3C_PRO/h3c_pro_9.webp';
import imagen55 from '@/assets/H3C_PRO/h3c_pro_10.webp';
import imagen56 from '@/assets/H3C_PRO/h3c_pro_11.webp';
import imagen57 from '@/assets/H3C_PRO/h3c_pro_12.webp';
import imagen58 from '@/assets/H3C_PRO/h3c_pro_13.webp';


// dvr de 4mpx (números del 65 al 79)


// micro sd imou 64 gb (números del 65 al 79)
import imagen78 from '@/assets/micro_sd_imou_64_gb/1.webp';
import imagen79 from '@/assets/micro_sd_imou_64_gb/5.webp';

// materiales
import imagen81 from '@/assets/H3C_PRO FUENTE/fuente h3cpro.webp';

 // Importación de las imágenes
 import Image1500 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)1.webp';
 import Image1501 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)2.webp';
 import Image1502 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)3.webp';
 import Image1503 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)1.webp';
 import Image1504 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)2.webp';
 import Image1505 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)3.webp';



const H3c_pro_6s: React.FC = () => {          
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
  const { prices } = usePrice();

  const abrirWhatsApp = () => {
    const phone = '3046615865';
    const message = 'Hola, Me Interesa el kit de 4 cámaras Tipo bala 2Mpx + 4Mpx Lite de HIKVISION, Puede Brindarme Mas Informacion?';
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
      title: 'CP3 Pro - Cámara de seguridad panorámica/inclinable de 3 MP',
      description:
        'La CP3 Pro de Tenda ofrece una cobertura completa gracias a su giro/inclinación de alta velocidad, abarcando 360° horizontalmente y 155° verticalmente (90° arriba y 65° abajo) para eliminar zonas ciegas. Con tecnología Wi-Fi 6 para una conexión ultrarrápida, detección inteligente de humanos, mascotas y llanto, y funciones avanzadas como llamada de un toque, seguimiento automático y alarmas de luz y sonido, esta cámara es la solución integral para hogares, oficinas y tiendas. Además, permite múltiples opciones de almacenamiento y garantiza la seguridad de los datos mediante cifrado avanzado.',
      features: [
        'Cobertura panorámica: 360° horizontal y 155° vertical (90° arriba, 65° abajo)',
        'Resolución de 3 megapíxeles para imágenes nítidas y detalladas',
        'Tecnología Wi-Fi 6 para conexión estable y baja latencia',
        'Detección inteligente de movimiento, humanos, mascotas y llanto con IA',
        'Función de llamada de un toque para comunicación directa',
        'Seguimiento automático (Smart Tracking) para captar movimientos',
        'Alarmas activas de luz y sonido ante intrusiones',
        'Tres opciones de almacenamiento: tarjeta MicroSD, nube (con 3 meses gratuitos) y NVR',
        'Transmisión de datos cifrada con AES de 128 bits y certificado en la nube',
        'Obturador de privacidad para proteger la intimidad',
        'Fácil instalación con soporte para montaje en escritorio, techo o pared'
      ],
      images: [
        { src: imagen50, alt: 'Cámara CP3 Pro de Tenda mostrando su capacidad panorámica de 360°' },
        { src: imagen51, alt: 'Vista frontal de la cámara CP3 Pro con diseño moderno' },
        { src: imagen52, alt: 'Detalle del montaje versátil de la CP3 Pro en escritorio, techo o pared' },
        { src: imagen53, alt: 'Interfaz de la aplicación TDSEE controlando la cámara CP3 Pro' },
        { src: imagen54, alt: 'Cámara CP3 Pro de Tenda mostrando su capacidad panorámica de 360°' },
        { src: imagen55, alt: 'Vista frontal de la cámara CP3 Pro con diseño moderno' },
        { src: imagen56, alt: 'Detalle del montaje versátil de la CP3 Pro en escritorio, techo o pared' },
        { src: imagen57, alt: 'Interfaz de la aplicación TDSEE controlando la cámara CP3 Pro' },
        { src: imagen58, alt: 'Cámara CP3 Pro de Tenda mostrando su capacidad panorámica de 360°' },
      ],
      botonTexto: 'Pague en casa!',
    },
    {
      title: 'MICROSD IMOU CLASE 10 64GB PARA VIDEOVIGILANCIA',
      description:
        'La MicroSD IMOU de 64GB Clase 10 ha sido diseñada específicamente para sistemas de videovigilancia, garantizando una alta velocidad de transferencia y un rendimiento confiable. Ideal para cámaras de seguridad, permite grabaciones en alta definición sin interrupciones y ofrece estabilidad incluso en entornos de uso continuo y condiciones extremas.',
      features: [
        'Capacidad total de 64GB para un amplio almacenamiento de grabaciones',
        'Clase 10: Alta velocidad de lectura y escritura para videovigilancia fluida',
        'Optimizada para sistemas de seguridad y cámaras de videovigilancia',
        'Diseñada para soportar grabación continua sin pérdida de datos',
        'Resistente a condiciones adversas y diseñada para uso prolongado',
        'Fácil instalación y compatibilidad con múltiples dispositivos de seguridad'
      ],
      images: [
        { src: imagen78, alt: 'MicroSD IMOU 64GB insertada en un dispositivo de videovigilancia' },
        { src: imagen79, alt: 'Primer plano de la MicroSD IMOU 64GB Clase 10' },
      ],
      botonTexto: 'Domicilio Gratis!',
    },
    {
      title: 'Fuente de Energía Tenda 5V 1A para Cámaras de Videovigilancia',
      description:
        'Fuente de energía de la reconocida marca Tenda, diseñada para proporcionar un suministro estable y confiable a cámaras de videovigilancia. Con una salida de 5V a 1A, esta fuente garantiza un rendimiento continuo y seguro para tus dispositivos, facilitando su integración en sistemas de seguridad modernos.',
      features: [
        'Salida estable de 5V a 1A para un rendimiento óptimo',
        'Marca Tenda, sinónimo de calidad y confiabilidad',
        'Diseñada específicamente para la alimentación de cámaras de videovigilancia',
        'Compatible con una amplia gama de dispositivos de seguridad',
        'Fácil instalación y conexión para integrar en sistemas existentes'
      ],
      images: [
        { src: imagen81, alt: 'Fuente de Energía Tenda 5V 1A conectada a una cámara de videovigilancia' },
      ],
      botonTexto: 'Obtenga el Kit!',
    },
  ];
  
  const Carruseles = () => {
    return (
      <div>
        {carruseles.map((producto, index) => (
          <div key={index} className="producto-container">
            <h3>{producto.title}</h3>
            <p>{producto.description}</p>
            {/* Usamos el componente Carrusel pasando imágenes y detalles */}
            <Carrusel
              images={producto.images}
              title={producto.title}
              description={producto.description}
              features={producto.features || []} // Si no hay características, se pasa un array vacío
            />
            <button>{producto.botonTexto}</button>
          </div>
        ))}
      </div>
    );
  };

  const banners = [
    <Banner
      key="banner1"
      texto="Garantía de 1 año para cámaras de seguridad y DVR"
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
      texto="Envio contra entrega para Bucaramanga y su área metropolitana."
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
  Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de $870,000 COP. ¡Domicilio gratis!
  Realizamos una llamada de confirmación para verificar la dirección y disponibilidad de los equipos. ¡Entrega inmediata!`;

  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <Header links={headerLinks} extraMessage="Pago Contraentrega + Envío Gratis!" />
      </Suspense>

      <WhatsAppButton
        phoneNumber="3046615865"
        message="¡Hola! Me gustaría conocer mas del kit de 4 cámaras Tipo bala 2Mpx + 4Mpx Lite de HIKVISION, Puede Brindarme Mas información.?'"
      />



      <Suspense fallback={<div>Cargando...</div>}>
        <HeroHeader
          imagen={headerImage}
          titulo="Solo para Bucaramanga y el área metropolitana"
          subtitulo="Tecnología avanzada: detección de humanos y vehículos"
          descripcion="Kit de 4 cámaras Bala Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, incluye deteccion de rostros."
          precio="870,000"
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
            tituloModal="Confirme la Compra el Kit de 4 cámaras Bala De 2mpx"
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
          precio="870,000"
        />
      </Suspense>



      <Suspense fallback={<div>Cargando...</div>}>
        <Formulario
          titulo="confirma la Compra del kit de 4 cámaras Bala, 2mpx + grabacion a 4mpx lite"
          descripcion="Por favor, complete el formulario para hacer llegar el pedido a su domicilio. Pago contra entrega solo en Bucaramanga y su área metropolitana, ¡Domicilio gratis! Realizamos llamada de confirmación para verificar la dirección y la disponibilidad de los equipos. ¡Entrega inmediata!"
          precio="$870,000"
        />
      </Suspense>




      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "Kit de 4 Cámaras de Seguridad HIKVISION",
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
  imagen78,
  imagen79,
  imagen81,
  Image1500,
  Image1501,
  Image1502,
  Image1503,
  Image1504,
  Image1505,
          ],
        "description": "Kit de 4 cámaras Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, ideales para todo tipo de negocio, casa u oficina.",
        "brand": {
          "@type": "Brand",
          "name": "HIKVISION"
        },
        "offers": {
          "@type": "Offer",
          "price": "860000",
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

export default H3c_pro_6s;

