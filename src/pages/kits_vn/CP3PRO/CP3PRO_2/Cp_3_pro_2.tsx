import React, { Suspense, lazy } from 'react';
import useModalCompra from '@/componentes/useModalCompra';
import { usePrice } from '@/componentes/PriceContext';
import Descuento from '@/componentes/Descuento';
import WhatsAppButton from '@/componentes/WhatsAppButton';
import styles from './Cp_3_pro_1.module.css';




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
import imagen1 from '@/assets/CP3_PRO/cp_3_pro_2.webp';

import headerImage from '@/assets/CP3_PRO/cp_3_pro_2.webp';


  // camaras bala 2mpx (números del 50 al 64)
import imagen50 from "@/assets/CP3_PRO/cp_3_pro_16.webp";
import imagen51 from '@/assets/CP3_PRO/cp_3_pro_5.webp';
import imagen52 from '@/assets/CP3_PRO/cp_3_pro_6.webp';
import imagen53 from '@/assets/CP3_PRO/cp_3_pro_7.webp';
import imagen54 from '@/assets/CP3_PRO/cp_3_pro_8.webp';
import imagen55 from '@/assets/CP3_PRO/cp_3_pro_9.webp';
import imagen56 from '@/assets/CP3_PRO/cp_3_pro_10.webp';
import imagen57 from '@/assets/CP3_PRO/cp_3_pro_11.webp';
import imagen58 from '@/assets/CP3_PRO/cp_3_pro_12.webp';
import imagen59 from '@/assets/CP3_PRO/cp_3_pro_13.webp';
import imagen60 from '@/assets/CP3_PRO/cp_3_pro_14.webp';
import imagen61 from '@/assets/CP3_PRO/cp_3_pro_16.webp';


// dvr de 4mpx (números del 65 al 79)


// micro sd imou 64 gb (números del 65 al 79)
import imagen78 from '@/assets/micro_sd_imou_64_gb/2.webp';
import imagen79 from '@/assets/micro_sd_imou_64_gb/5.webp';

// materiales
import imagen81 from '@/assets/CP3_PRO_FUENTE/fuente_cp3_pro.webp';

 // Importación de las imágenes
 import Image1500 from '@/assets/CP3_PRO/cp_3_pro_1.webp';
 import Image1501 from '@/assets/CP3_PRO/cp_3_pro_2.webp';
 import Image1502 from '@/assets/CP3_PRO/cp_3_pro_3.webp';
 import Image1503 from '@/assets/CP3_PRO/cp_3_pro_4.webp';
 import Image1504 from '@/assets/INICIO/inicio.webp';



const Cp_3_pro_2: React.FC = () => {          
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
    const phone = '3158859744';
    const message = 'Hola, Me Interesa el kit de 2 camaras tenda CP3PRO 3mpx + Memorias micro sd, Puede Brindarme Mas Informacion?';
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const hacerLlamada = () => {
    const phoneUri = 'tel:+573158859744';
    window.location.href = phoneUri;
  };

 
  const headerLinks = [
    { to: '/Cp_3_pro_1_vn', text: 'Kit 1 Cámara de seguridad de 3 MPX TENDA $189,000 COP', image: Image1500 },
    { to: '/Cp_3_pro_2_vn', text: 'Kit 2 Cámaras de seguridad de 3 MPX TENDA $360,000 COP', image: Image1501 },
    { to: '/Cp_3_pro_4_vn', text: 'Kit 4 Cámaras de seguridad de 3 MPX TENDA $690,000 COP', image: Image1502 },
    { to: '/Cp_3_pro_6_vn', text: 'Kit 6 Cámaras de seguridad de 3 MPX TENDA $999,000 COP', image: Image1503 },
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

  

  interface Beneficio {
    icon: string;
    title: string;
    description: string;
  }
  
  const beneficiosData = [
    {
      icon: "✔️",
      title: "Cobertura 360° sin zonas ciegas",
      description:
        "Diseño panorámico/inclinable que ofrece 360° horizontal y 155° vertical para una vigilancia completa de tu espacio.",
    },
    {
      icon: "✔️",
      title: "Conectividad ultrarrápida con WiFi 6",
      description:
        "Disfruta de una transmisión de video fluida y estable, incluso a través de múltiples paredes, gracias a la tecnología WiFi6.",
    },
    {
      icon: "✔️",
      title: "Detección inteligente con IA",
      description:
        "Identifica en tiempo real la presencia de humanos, mascotas y el llanto del bebé, enviando alertas precisas a tu móvil.",
    },
    {
      icon: "✔️",
      title: "Seguimiento automático de movimiento",
      description:
        "El algoritmo Smart Tracking sigue de forma automática los movimientos, asegurando que ningún detalle pase desapercibido.",
    },
    {
      icon: "✔️",
      title: "Comunicación bidireccional y llamada de un toque",
      description:
        "Interactúa fácilmente con familiares o empleados mediante audio bidireccional y el práctico botón de llamada de un toque.",
    },
    {
      icon: "✔️",
      title: "Alarma de luz y sonido",
      description:
        "Disuade intrusos con alarmas visuales y sonoras que se activan al detectar movimientos sospechosos.",
    },
    {
      icon: "✔️",
      title: "Opciones de almacenamiento flexibles",
      description:
        "Graba y almacena tus videos en tarjeta Micro SD, en la nube o mediante NVR, garantizando el acceso seguro a tus archivos.",
    },
    {
      icon: "✔️",
      title: "Protección avanzada de privacidad",
      description:
        "Transmisión cifrada con AES de 128 bits y obturador de privacidad para asegurar que solo tú tengas control total.",
    },
    {
      icon: "✔️",
      title: "Instalación fácil y versátil",
      description:
        "Compatible con montaje en escritorio, pared o techo, facilitando una instalación rápida y adaptada a tus necesidades.",
    },
    {
      icon: "✔️",
      title: "Calidad de imagen superior",
      description:
        "Captura imágenes claras y nítidas en resolución 3 MP para un monitoreo detallado y confiable.",
    },
  ];
  

  const carruseles = [
    {
      title: '2 Cámaras de seguridad Roboticas de 3 MP',
      description:
      'CP3 Pro de Tenda de 3 mpx con detección inteligente de humanos, mascotas, llanto y funciones avanzadas como llamada de un toque, seguimiento automático, alarmas de luz y sonido, esta cámara es la solución integral para hogares, oficinas y tiendas. Además, permite múltiples opciones de almacenamiento y garantiza la seguridad de los datos mediante cifrado avanzado.',
      features: [
        'El kit consta de 2 Cámaras de seguridad Roboticas de 3 MP + memoria sd 64 gb + Fuentes de energia',
        'Resolución de 3 megapíxeles para imágenes nítidas y detalladas',
        'Tecnología Wi-Fi 6 para conexión estable y baja latencia',
        'Detección inteligente de movimiento, humanos, mascotas y llanto con IA',
        'Función de llamada de un toque para comunicación directa',
        'Seguimiento automático (Smart Tracking) para captar movimientos',
        'Alarmas activas de luz y sonido ante intrusiones',
        'Tres opciones de almacenamiento: tarjeta MicroSD, nube (con 3 meses gratuitos) y NVR',
        'Transmisión de datos cifrada con AES de 128 bits y certificado en la nube',
        'Obturador de privacidad para proteger la intimidad',
        'Fácil instalación con soporte para montaje en escritorio, techo o pared',
        'Cobertura panorámica: 360° horizontal y 155° vertical (90° arriba, 65° abajo)',
       
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
        { src: imagen59, alt: 'Vista frontal de la cámara CP3 Pro con diseño moderno' },
        { src: imagen60, alt: 'Detalle del montaje versátil de la CP3 Pro en escritorio, techo o pared' },
        { src: imagen61, alt: 'Interfaz de la aplicación TDSEE controlando la cámara CP3 Pro' },
      ],
      botonTexto: 'Pague en casa!',
    },
    {
      title: 'MICROSD IMOU 64 GB',
      description:
        'MicroSD IMOU de 64GB Clase 10 diseñada para sistemas de videovigilancia.',
      features: [
        '2 microsd de 64 gb marca imou',
        'Capacidad total de 64GB para un amplio almacenamiento de grabaciones',
        'Clase 10: Alta velocidad de lectura y escritura para videovigilancia fluida',
        'Optimizada para sistemas de seguridad y cámaras de videovigilancia',
        'Diseñada para soportar grabación continua sin pérdida de datos',
        'Resistente a condiciones adversas y diseñada para uso prolongado',
        ', garantiza un rendimiento confiable. Ideal para cámaras de seguridad, permite grabaciones en alta definición sin interrupciones y ofrece estabilidad incluso en entornos de uso continuo y condiciones extremas.',
        'Fácil instalación y compatibilidad con múltiples dispositivos de seguridad'
      ],
      images: [
        { src: imagen78, alt: 'MicroSD IMOU 64GB insertada en un dispositivo de videovigilancia' },
        { src: imagen79, alt: 'Primer plano de la MicroSD IMOU 64GB Clase 10' },
      ],
      botonTexto: 'Domicilio Gratis!',
    },
    {
      title: ' 2 Fuentes de Energía Tenda',
      description:
        'Fuentes de energía 5V 1A marca Tenda, suministro estable y confiable rendimiento continuo y seguro.',
      features: [
        ' 2 Fuentes de Energía Tenda ',
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
          <div key={index} className={styles.productoContainer}>
            <h3 className={styles.titulo}>{producto.title}</h3>
            <p className={styles.descripcion}>{producto.description}</p>
            <Carrusel
              images={producto.images}
              title={producto.title}
              description={producto.description}
              features={producto.features || []}
            />
<button className={styles["boton-texto"]}>{producto.botonTexto}</button>
</div>
        ))}
      </div>
    );
  };

  const banners = [
    <Banner
  key="banner1"
  texto="Garantía de 1 año para cámara de seguridad y micro SD de 64 GB."
  backgroundColor="#333333"
  textColor="#FFFFFF"
  fontSize="2rem"
  padding="15px 30px"
/>,
<Banner
  key="banner2"
  texto="Fuentes de energía incluidas dentro de la caja original de cada cámara."
  backgroundColor="#333333"
  textColor="#FFFFFF"
  fontSize="2rem"
  padding="15px 30px"
/>,

    <Banner
      key="banner3"
      texto="Los terminos y condiciones de la garantia incluidas en el recibo de compra."
      backgroundColor="#333333"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner4"
      texto="Los terminos y condiciones de la garantia incluidas en el recibo de compra."
      backgroundColor="#333333"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner5"
      texto="Domicilios sin costo!"
      backgroundColor="#333333"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner6"
      texto="Envio contra entrega para Bucaramanga y su área metropolitana."
      backgroundColor="333333"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner7"
      texto="¡Entrega Inmediata!"
      backgroundColor="#333333"
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

  const containerStyle = {
    backgroundColor: 'orange',
    padding: '20px' // Puedes ajustar el padding u otros estilos a tu gusto
  };


  const horariosEntrega = `Horarios de entrega: De lunes a viernes: de 8:00 a.m. a 6:00 p.m. (jornada continua).
  Sábados: de 8:00 a.m. a 1:00 p.m.
  Domingos y festivos no hacemos entregas.

  Aceptamos pagos en efectivo, Nequi o Bancolombia.`;

  const descripcionModal = `Complete el formulario para hacer llegar el pedido a su domicilio.
  Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de $360,000 COP. ¡Domicilio gratis!
  Realizamos una llamada de confirmación para verificar la dirección y disponibilidad de los equipos. ¡Entrega inmediata!`;

  return (
    <div className={styles.container}>

  <div>
  <Suspense fallback={<div>Cargando...</div>}>
  <Header 
    links={headerLinks} 
    extraMessage="Pago Contraentrega + Envío Gratis!" 
    theme="orange" 
  />
</Suspense>


      <WhatsAppButton
        phoneNumber="3158859744"
        message="¡Hola! Me gustaría conocer mas del Kit de una 2 cámaras roboticas (3mpx) de TENDA + 2 MICRO SD 64 GB IMOU, Puede Brindarme Mas información.?'"
      />



<Suspense fallback={<div>Cargando...</div>}>
  <HeroHeader
    imagen={headerImage}
    titulo={<span className={styles.heroTitle}>Solo para Bucaramanga y el área metropolitana</span>}
    subtitulo={<span className={styles.heroSubtitle}>Boton de llamada + detección de llanto, incluye detección de humanos!</span>}
    descripcion={<span className={styles.heroDescription}>Kit de 2 cámaras Roboticas 3mpx TENDA + 2 micro sd 64gb.</span>}
    precio="360,000"
  >
    <BotonCompra
      texto="Compra el Kit!"
      onClick={abrirModal}
      color="#FFA500"
      tamaño="mediano"
    />
  </HeroHeader>
</Suspense>





<div className={styles.contenedorBeneficios}>
  <Suspense fallback={<div>Cargando...</div>}>
    <Beneficios beneficios={beneficiosData} className={styles.customBeneficios} />
  </Suspense>
</div>




      <Suspense fallback={<div>Cargando...</div>}>
        <Banner
          key="banner0"
          texto="Descripción del kit!"
          backgroundColor="#ffffff"
          textColor="orange"
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
                color="#FFA500"
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
            tituloModal="Confirme la Compra del Kit de 2 cámaras roboticas (3mpx) TENDA + 2 MICRO SD 64 GB IMOU"
            descripcionModal={descripcionModal}
          />
        </Suspense>
      )}

<Suspense fallback={<div>Cargando...</div>}>
  <HeroHeader
    imagen={headerImage}
    titulo={<span className={styles.heroTitle}>Solo para Bucaramanga y el área metropolitana</span>}
    subtitulo={<span className={styles.heroSubtitle}>boton de llamada + detección de llanto, incluye detección de humanos!</span>}
    descripcion={<span className={styles.heroDescription}>Kit de 2 cámaras Roboticas de 3mpx TENDA + 2 micro sd 64gb.</span>}
    precio="360,000"
  >
  </HeroHeader>
</Suspense>


      <Suspense fallback={<div>Cargando...</div>}>
        <Formulario
          titulo="confirma la Compra de la cámara tenda cp3 pro 3mpx + 2 memorias sd de 64 gb"
          descripcion="Por favor, complete el formulario para hacer llegar el pedido a su domicilio. Pago contra entrega solo en Bucaramanga y su área metropolitana, ¡Domicilio gratis! Realizamos llamada de confirmación para verificar la dirección y la disponibilidad de los equipos. ¡Entrega inmediata!"
          precio="$360,000"
        />
      </Suspense>




      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "Kit de 2 cámaras Roboticas de 3mpx TENDA + 2 micro sd 64gb imou",
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
  imagen78,
  imagen79,
  imagen81,
  Image1500,
  Image1501,
  Image1502,
  Image1503,
  Image1504,
          ],
        "description": "Kit de una 2 cámaras roboticas de (3mpx) TENDA + 2 MICRO SD 64 GB IMOU, ideal para todo tipo de negocio, casa u oficina.",
        "brand": {
          "@type": "Brand",
          "name": "TENDA"
        },
        "offers": {
          "@type": "Offer",
          "price": "360,000",
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
    </div>

  );
};

export default  Cp_3_pro_2;

