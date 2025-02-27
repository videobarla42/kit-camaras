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
import imagen1 from '@/assets/H3C_PRO/h3c_pro_2.webp';

import headerImage from '@/assets/H3C_PRO/h3c_pro_2.webp';


  // camaras bala 2mpx (números del 50 al 64)
import imagen50 from "@/assets/H3C_PRO/h3c_pro_15.webp";
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
import imagen78 from '@/assets/micro_sd_imou_64_gb/2.webp';
import imagen79 from '@/assets/micro_sd_imou_64_gb/5.webp';

// materiales
import imagen81 from '@/assets/H3C_PRO FUENTE/fuente h3cpro.webp';

 // Importación de las imágenes
 import Image1500 from '@/assets/H3C_PRO/h3c_pro_1.webp';
 import Image1501 from '@/assets/H3C_PRO/h3c_pro_2.webp';
 import Image1502 from '@/assets/H3C_PRO/h3c_pro_3.webp';
 import Image1503 from '@/assets/H3C_PRO/h3c_pro_4.webp';
 import Image1504 from '@/assets/H3C_PRO/h3c_pro_1.webp';


const H3c_pro_2s: React.FC = () => {          
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
    const message = '¡Hola! Me gustaría conocer mas del kit de 2 cámaras bala de 4Mpx de ezviz + memorias micro sd 64gb, Puede Brindarme Mas Informacion?';
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const hacerLlamada = () => {
    const phoneUri = 'tel:+573046615865';
    window.location.href = phoneUri;
  };

 
  const headerLinks = [
    { to: '/H3c_pro_1s', text: 'kit de 1 cámara bala de 4Mpx de ezviz H3cpro $280,000 COP', image: Image1500 },
    { to: '/H3c_pro_2s', text: 'kit de 2 cámaras bala de 4Mpx de ezviz H3cpro $530,000 COP', image: Image1501 },
    { to: '/H3c_pro_4s', text: 'kit de 4 cámaras bala de 4Mpx de ezviz H3cpro $990,000 COP', image: Image1502 },
    { to: '/H3c_pro_6s', text: 'kit de 6 cámaras bala de 4Mpx de ezviz H3cpro $1,495,000 COP', image: Image1503 },
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
  
  const beneficiosData: Beneficio[] = [
    {
      icon: '✔️',
      title: 'Resolución 2K+ (4mpx)',
      description: 'Disfruta de una calidad de video superior en resolución 2K+ para detalles nítidos, tanto de día como de noche.',
    },
    {
      icon: '✔️',
      title: 'Visión nocturna a color',
      description: 'Ve a color incluso en condiciones de baja luz gracias a los focos integrados para una visión nocturna mejorada de hasta 30 metros.',
    },
    {
      icon: '✔️',
      title: 'Detección avanzada con IA',
      description: 'La tecnología de IA identifica de forma precisa a las personas en movimiento y reduce alertas falsas causadas por hojas o insectos.',
    },
    {
      icon: '✔️',
      title: 'Resistencia a condiciones climáticas extremas',
      description: 'Clasificación IP67 para resistir lluvia, tormentas y nieve, asegurando funcionamiento confiable en cualquier condición meteorológica.',
    },
    {
      icon: '✔️',
      title: 'Almacenamiento flexible y seguro',
      description: 'Admite tarjetas microSD de hasta 512 GB y almacenamiento en la nube EZVIZ CloudPlay con encriptación total para proteger tus grabaciones.',
    },
    {
      icon: '✔️',
      title: 'Audio bidireccional',
      description: 'Comunicación clara con micrófono incorporado y altavoces, permite escuchar y hablar en tiempo real con quienes estén cerca de la cámara.',
    },
    {
      icon: '✔️',
      title: 'Integración con sistemas de hogar inteligente',
      description: 'Compatible con Alexa, Google Assistant e IFTTT para control por voz y monitoreo fácil desde dispositivos inteligentes.',
    },
    {
      icon: '✔️',
      title: 'Tecnología de compresión H.265+',
      description: 'Reduce el tamaño de los archivos de video hasta un 50% sin sacrificar la calidad, lo que facilita el almacenamiento y la transmisión.',
    },
    {
      icon: '✔️',
      title: 'Diseño compacto y elegante',
      description: 'Fácil instalación con un diseño compacto para colocarla en exteriores, debajo de aleros o en paredes exteriores con alta conectividad WiFi.',
    },
    {
      icon: '✔️',
      title: 'Seguridad mejorada con sirena y luces',
      description: 'En caso de intrusión, la cámara activa una sirena fuerte y enciende dos focos para disuadir a los intrusos.',
    },
  ];



  const carruseles = [
    {
      title: '2 CÁMARAS EZVIZ H3C WIFI 2K 4MP',
      description:
        'EZVIZ H3C 2K⁺ 4MP, visión nocturna a color. funciones avanzadas detección de movimiento humano, reconocimiento de manos, comunicación bidireccional, y defensa activa. almacenamiento local en tarjetas microSD de hasta 512 GB.',
      features: [
        '2 Cámaras EZVIZ H3C Wifi 2K 4MP + 6 memorias microsd 64gb',
        'Resolución 2K⁺ para una claridad excepcional de día y de noche.',
        'Visión nocturna a color gracias a los focos de luz blanca integrados.',
        'Detección de movimiento humano.',
        'Comunicación bidireccional a través de audio en vivo.',
        'Defensa activa con sirena y focos al detectar intrusos.',
        ' Diseñada para exteriores, soporta condiciones climáticas adversas',
        'Clasificación IP67, resistente a lluvia, tormentas y nieve.',
        'Integración con Alexa y Google Assistant para control por voz.',
        'Almacenamiento local hasta 512 GB en tarjeta microSD.',
        'Almacenamiento en la nube con EZVIZ CloudPlay (requiere suscripción).',
        'Tecnología de compresión H.265+ para conpresion de videos a alta calidad.',
        'Funciones avanzadas de seguridad: protección de datos y zonas de no grabación.',
      ],
      images: [
        { src: imagen50, alt: 'Vista de la cámara EZVIZ H3C Wifi de 2K 4MP desde el frente' },
        { src: imagen51, alt: 'Cámara EZVIZ H3C instalada en exterior con visión nocturna a color' },
        { src: imagen52, alt: 'Vista de la interfaz de la aplicación EZVIZ controlando la cámara' },
        { src: imagen53, alt: 'Cámara EZVIZ H3C Wifi de 2K 4MP mostrando el campo de visión amplio' },
        { src: imagen54, alt: 'Cámara EZVIZ H3C con visión nocturna activada' },
        { src: imagen55, alt: 'Vista de la cámara EZVIZ H3C con enfoque en la calidad de imagen 2K⁺' },
        { src: imagen56, alt: 'Instalación de la cámara EZVIZ H3C en una pared exterior' },
        { src: imagen57, alt: 'Aplicación EZVIZ mostrando alertas de movimiento humano' },
        { src: imagen58, alt: 'Vista completa de la cámara EZVIZ H3C con todos sus accesorios' },
      ],
      botonTexto: 'Pague en casa!',
    },
    {
      title: '2 MICROSD IMOU CLASE 10 64GB PARA VIDEOVIGILANCIA',
      description:
        'La MicroSD IMOU de 64GB Clase 10 ha sido diseñada específicamente para sistemas de videovigilancia, garantizando una alta velocidad de transferencia y un rendimiento confiable. Ideal para cámaras de seguridad, permite grabaciones en alta definición sin interrupciones y ofrece estabilidad incluso en entornos de uso continuo y condiciones extremas.',
      features: [
        '2 MICROSD IMOU CLASE 10 64GB PARA VIDEOVIGILANCIA',
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
      title: '2 FUENTES DE ENERGÍA EZVIZ',
      description:
        'Fuente de energía 12V 1A marca EZVIZ, suministro estable y confiable rendimiento continuo y seguro para tus dispositivos.',
      features: [
        '2 Fuentes de Energía EZVIZ',
        'Salida estable de 12V a 1A para un rendimiento óptimo',
        'Marca Tenda, sinónimo de calidad y confiabilidad',
        'Diseñada específicamente para la alimentación de cámaras de videovigilancia',
        'Compatible con una amplia gama de dispositivos de seguridad',
        'Fácil instalación y conexión para integrar en sistemas existentes'
      ],
      images: [
        { src: imagen81, alt: 'Fuente de Energía EZVIZ 12 - 1A conectada a una cámara de videovigilancia' },
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
    texto="Garantía de 1 año para cámara de seguridad y micro SD de 64 GB."
    backgroundColor="#333333"
    textColor="#FFFFFF"
    fontSize="2rem"
    padding="15px 30px"
  />,
  <Banner
    key="banner2"
    texto="Fuente de energía incluida dentro de la caja original de la cámara."
    backgroundColor="#333333"
    textColor="#FFFFFF"
    fontSize="2rem"
    padding="15px 30px"
  />,
  
    <Banner
      key="banner3"
      texto="terminos y condiciones de la garantia incluidas en el recibo de compra."
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

  const horariosEntrega = `Horarios de entrega: De lunes a viernes: de 8:00 a.m. a 6:00 p.m. (jornada continua).
  Sábados: de 8:00 a.m. a 1:00 p.m.
  Domingos y festivos no hacemos entregas.

  Aceptamos pagos en efectivo, Nequi o Bancolombia.`;

  const descripcionModal = `Complete el formulario para hacer llegar el pedido a su domicilio.
  Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de $530,000 COP. ¡Domicilio gratis!
  Realizamos una llamada de confirmación para verificar la dirección y disponibilidad de los equipos. ¡Entrega inmediata!`;

  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <Header links={headerLinks} extraMessage="Pago Contraentrega + Envío Gratis!" />
      </Suspense>

      <WhatsAppButton
        phoneNumber="3046615865"
        message="¡Hola! Me gustaría conocer mas del kit de 2 cámaras bala de 4Mpx de ezviz + memoria micro sd 64gb, Puede Brindarme Mas Informacion?'"
      />


<Suspense fallback={<div>Cargando...</div>}>
  <HeroHeader
    imagen={headerImage}
    titulo="Solo para Bucaramanga y el área metropolitana"
    subtitulo="Visión nocturna a color + detección de humanos"
    descripcion="Kit de 2 cámaras Bala 2K+ (4mpx) de EZVIZ, 2 MicroSD 64GB + 2 Fuentes de energía."
    precio="530,000"
  >
    <BotonCompra
      texto="¡Compra el Kit!"
      onClick={abrirModal}
      color="#28a745"
      tamaño="mediano"
    />
  </HeroHeader>
</Suspense>



   <Suspense fallback={<div>Cargando...</div>}>
  <Beneficios beneficios={beneficiosData} />
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
            tituloModal="Confirme la Compra del Kit de 2 cámaras Bala 2K+ (4mpx) de EZVIZ, 2 MicroSD 64GB + 2 Fuentes de energía."
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
          precio="530,000"
        />
      </Suspense>



      <Suspense fallback={<div>Cargando...</div>}>
        <Formulario
          titulo="Confirme la Compra del Kit de 2 cámaras Bala 2K+ (4mpx) de EZVIZ, 2 MicroSD 64GB + 2 Fuentes de energía."
          descripcion="Por favor, complete el formulario para hacer llegar el pedido a su domicilio. Pago contra entrega solo en Bucaramanga y su área metropolitana, ¡Domicilio gratis! Realizamos llamada de confirmación para verificar la dirección y la disponibilidad de los equipos. ¡Entrega inmediata!"
          precio="$530,000"
        />
      </Suspense>




      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "Kit de 2 cámaras Bala 2K+ (4mpx) de EZVIZ, 2 MicroSD 64GB + 2 Fuentes de energía.",
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
          ],
        "description": "Kit de 2 Cámaras EZVIZ H3C PRO 2K+ (4MPX) ofrece vigilancia de alta definición con visión nocturna a color, detección inteligente de humanos y audio bidireccional, e incluye 2 MicroSD de 64GB y 2 fuentes de energía para un almacenamiento seguro y funcionamiento continuo. Diseñado para protección 24/7 en interiores y exteriores, cuenta con resistencia IP67 y control remoto a través de la app EZVIZ.",
        "brand": {
          "@type": "Brand",
          "name": "HIKVISION"
        },
        "offers": {
          "@type": "Offer",
          "price": "530000",
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

export default H3c_pro_2s;

