import React, { Suspense, lazy } from 'react';
import useModalCompra from '@/componentes/useModalCompra';
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
import imagen1 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)3.webp';

import headerImage from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)3.webp';





  // camaras domo 2mpx (números del 50 al 64)
  import imagen50 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)19.webp';
  import imagen51 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)5.webp';
  import imagen52 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)6.webp';
  import imagen53 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)7.webp';
  import imagen54 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)8.webp';
  import imagen55 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)9.webp';
  import imagen56 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)10.webp';
  import imagen57 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)11.webp';
  import imagen58 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)12.webp';
  import imagen59 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)13.webp';
  import imagen60 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)14.webp';
  import imagen61 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)15.webp';
  import imagen62 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)16.webp';
  import imagen63 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)17.webp';


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
import imagen76 from '@/assets/iDS-71040816HQHI-M1S1/iDS-71HQHI-M1S16.webp';


// disco duro (números del 65 al 79)
import imagen78 from '@/assets/SEGATE/ST-1000-VX00-15203.webp';
import imagen79 from '@/assets/SEGATE/ST-1000-VX00-15202.webp';
import imagen80 from '@/assets/SEGATE/ST-1000-VX00-15201.webp';


// materiales
import imagen81 from '@/assets/MATERIALES/3.webp';
import imagen82 from '@/assets/MATERIALES/6.webp';
import imagen83 from '@/assets/MATERIALES/9.webp';
import imagen84 from '@/assets/MATERIALES/10.webp';



 // Importación de las imágenes
 import Image1500 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)1.webp';
 import Image1501 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)2.webp';
 import Image1502 from '@/assets/DS-2CE56D0T-IRPF(2.8mm)(C)/DS-2CE56D0T-IRPF(2.8mm)(C)3.webp';
 import Image1503 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)1.webp';
 import Image1504 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)2.webp';
 import Image1505 from '@/assets/DS-2CE16D0T-IRPF(2.8mm)(C)/DS-2CE16D0T-IRPF(2.8mm)(C)3.webp';

 
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
    const message = 'Hola, Me Interesa el kit de 16 cámaras Domo de 2Mpx + 4mpx Lite de HIKVISION, Puede Brindarme Mas Informacion?';
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

    interface Beneficio {
      icon: string;
      title: string;
      description: string;
    }

    const beneficiosData: Beneficio[] = [
      {
        icon: '✔️',
        title: 'Tecnología avanzada de detección de movimiento',
        description: 'Clasificación precisa basada en aprendizaje profundo e identificación de humanos y vehículos.',
      },
      {
        icon: '✔️',
        title: 'Protección perimetral mejorada',
        description: 'Detección facial con análisis inteligente para monitoreo y seguridad.',
      },
      {
        icon: '✔️',
        title: 'Eficiencia en grabación y almacenamiento',
        description: 'Compresión H.265 Pro+ que reduce espacio de almacenamiento sin comprometer calidad.',
      },
      {
        icon: '✔️',
        title: 'Flexibilidad en conexiones',
        description: 'Compatibilidad con HDTVI, AHD, HDCVI, CVBS e IP, soportando hasta 6 canales IP.',
      },
      {
        icon: '✔️',
        title: 'Almacenamiento robusto',
        description: 'Capacidad de hasta 10 TB por disco y soporte para hasta 32 usuarios remotos simultáneamente.',
      },
      {
        icon: '✔️',
        title: 'Durabilidad garantizada',
        description: 'Operación estable en temperaturas extremas y construcción resistente.',
      },
      {
        icon: '✔️',
        title: 'Alta calidad de imagen',
        description: 'Resolución Full HD 1080P para detalles precisos en monitoreo y grabación.',
      },
      {
        icon: '✔️',
        title: 'Visión nocturna infrarroja',
        description: 'Rango IR de hasta 20 m para vigilancia en total oscuridad.',
      },
      {
        icon: '✔️',
        title: 'Resistencia a condiciones extremas',
        description: 'Operación estable en temperaturas de -40°C a 60°C y construcción resistente a la humedad.',
      },
      {
        icon: '✔️',
        title: 'Funciones inteligentes',
        description: 'Ajuste automático de ganancia (AGC) para imágenes claras en condiciones de poca luz.',
      },
    ];
  



    const carruseles = [
      {
        title: 'DVR de 16 Canales, 4 Mpx Lite - HIKVISION',
        description: 'DVR AcuSense mini de 16 canales con tecnología avanzada de detección de movimiento (humanos y vehículos) y protección perimetral inteligente. Ofrece grabación de múltiples resoluciones hasta 4 Mpx Lite y soporte para cámaras IP de hasta 6 MP.',
        features: [
          'DVR AcuSense Mini de 16 canales 4 Mpx Lite de HIKVISION',
          'Compresión de video eficiente H.265 Pro+ para optimización de almacenamiento',
          'Detección de movimiento 2.0 basada en Deep Learning para mayor precisión',
          'Protección perimetral inteligente con detección de intrusiones y cruce de líneas',
          'Compatibilidad con múltiples entradas de video: HDTVI, AHD, CVI, CVBS e IP',
          'Entrada de audio por coaxial para transmisión clara y estable',
          'Hasta 24 entradas IP con resolución de hasta 6 MP',
          'Codificación de video hasta 3K/5M Lite a 12 fps para imágenes nítidas',
          'Detección facial para captura de imágenes y mayor seguridad',
          'Análisis avanzado de movimiento para mejorar la precisión de las alertas',
          'Soporte para discos duros de hasta 10 TB para almacenamiento eficiente',
          'Conexión de red rápida mediante interfaz RJ45 10/100/1000M'
        ],
        
        images: [
          { src: imagen65, alt: 'DVR HIKVISION 7116HQHI-M1S1 de 16 canales para grabación de video de alta calidad y monitoreo avanzado' },
          { src: imagen66, alt: 'DVR HIKVISION 7116HQHI-M1S1 AcuSense mini de 16 canales con tecnología de análisis inteligente y detección precisa de eventos' },
          { src: imagen67, alt: 'DVR HIKVISION 7116HQHI-M1S1 con detección de movimiento avanzada para protección y seguridad eficiente' },
          { src: imagen68, alt: 'DVR HIKVISION 7116HQHI-M1S1 con protección perimetral para mejorar la seguridad y monitoreo en tiempo real' },
          { src: imagen69, alt: 'DVR HIKVISION 7116HQHI-M1S1 con compresión H.265 Pro+ que optimiza el almacenamiento y la calidad de grabación' },
          { src: imagen70, alt: 'DVR HIKVISION 7116HQHI-M1S1 con soporte para cámaras IP para integrar sistemas de videovigilancia de red' },
          { src: imagen71, alt: 'DVR HIKVISION 7116HQHI-M1S1 con grabación en múltiples resoluciones para visualización nítida en diversas configuraciones' },
          { src: imagen72, alt: 'DVR HIKVISION 7116HQHI-M1S1 de 16 canales, ideal para grandes instalaciones de seguridad y monitoreo 24/7' },
          { src: imagen73, alt: 'DVR HIKVISION 7116HQHI-M1S1 de 16 canales, perfecto para sistemas de videovigilancia en empresas y residencias de gran tamaño' },
          { src: imagen74, alt: 'DVR HIKVISION 7116HQHI-M1S1 de 16 canales con capacidades avanzadas para grabación y monitoreo remoto' },
          { src: imagen75, alt: 'DVR HIKVISION 7116HQHI-M1S1 de 16 canales con confiabilidad mejorada y soluciones de seguridad de alto rendimiento' },
          { src: imagen76, alt: 'DVR HIKVISION 7116HQHI-M1S1 de 16 canales, ideal para sistemas de videovigilancia integrados en entornos empresariales' },
      ],
      
        botonTexto: 'Domicilio Gratis!'
      },
      {
        title: '16 Cámaras de 2 Mpx - HIKVISION',
        description: 'Cámaras Domo TURBOHD 1080p de HIKVISION con lente de 2.8 mm y visión nocturna inteligente EXIR de hasta 20 mts.',
        features: [
          '16 CAMARAS DOMO 2 MPX DE HIKVISION',
          'Cámara tipo domo fija para interiores/exteriores',
          'Modelo: DS-2CE56D0T-IRPF(C)',
          'Resolución máxima de 2 Megapíxeles (1920 x 1080)',
          'Lente fijo de 2.8 mm (ángulo de visión 106°)',
          'Visión Nocturna Inteligente EXIR hasta 20 mts',
          'Soporta las 4 tecnologías del mercado: TVI, AHD, CVI, CVBS',
          'Tecnología Smart IR para ajuste automático de la iluminación',
          'Soporta resolución 1080p a 30 fps (TVI, AHD, CVI)',
          'Wide Dynamic Range (WDR) Digital para imágenes más claras',
          'Mejoras de imagen: BLC, HLC, 2D DNR',
          'Modo Día/Noche con ICR automático',
          'Control automático de ganancia (AGC)',
          'Temperatura de operación: -40°C a 60°C',
          'Montura de lente tipo M12',
          'Dimensiones: 89.9 mm x 70.1 mm, peso 130 g',
          'Alimentación de 12 VDC ± 25%, consumo máximo de 2.2 W',
          'Carcasa de plástico resistente para uso interior'
        ],
        images: [
          { src: imagen50, alt: 'Cámara de seguridad HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) 1080p con visión nocturna Smart IR, lente de 2.8 mm y tecnología avanzada para exteriores' },
          { src: imagen51, alt: 'Cámara HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con visión nocturna Smart IR, lente de 2.8 mm, ideal para vigilancia exterior 24/7' },
          { src: imagen52, alt: 'Cámara Domo TURBOHD 1080p HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con visión nocturna de 20 mts y lente de 3.6 mm para exteriores' },
          { src: imagen53, alt: 'Cámara de seguridad HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con lente de 2.8 mm y visión nocturna Smart IR para vigilancia exterior' },
          { src: imagen54, alt: 'Cámara de seguridad HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con visión nocturna EXIR, lente de 3.6 mm y alcance de 20 mts para vigilancia nocturna' },
          { src: imagen55, alt: 'Cámara de seguridad para exteriores HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con lente de 3.6 mm, visión nocturna Smart IR y resistencia a la intemperie' },
          { src: imagen56, alt: 'Cámara Domo HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con lente de 2.8 mm, visión nocturna Smart IR y alta calidad de imagen 1080p' },
          { src: imagen57, alt: 'Cámara de seguridad HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con visión nocturna Smart IR y lente de 3.6 mm, ideal para vigilancia nocturna en exteriores' },
          { src: imagen68, alt: 'Cámara de seguridad HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con visión nocturna Smart IR, perfecta para vigilancia exterior en zonas oscuras, lente de 3.6 mm' },
          { src: imagen69, alt: 'Cámara de seguridad HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) para vigilancia 24/7 con visión nocturna y lente de 2.8 mm para interiores y exteriores' },
          { src: imagen60, alt: 'Cámara de seguridad HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con visión nocturna Smart IR y lente de 3.6 mm para vigilancia en condiciones de poca luz' },
          { src: imagen61, alt: 'Cámara de seguridad HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con visión nocturna Smart IR de alto rendimiento, lente de 2.8 mm para exteriores' },
          { src: imagen62, alt: 'Cámara de seguridad HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con visión nocturna Smart IR, ideal para vigilancia en exteriores y zonas oscuras, lente de 3.6 mm' },
      ],
      
      
        botonTexto: 'Page en casa!'
      },
      {
        title: '1 Disco duro Ideal para videovigilancia',
        description: 'Disco duro Seagate Skyhawk 1 TB para videovigilancia, grabación 24/7, tecnología AllFrame, velocidad 110 MB/s, interfaz SATA, caché 64 MB, soporta 64 cámaras.',
        features: [
          'Tecnología AllFrame para un rendimiento de grabación optimizado y sin interrupciones en sistemas de videovigilancia 24/7',
          'Velocidad de transferencia de datos de hasta 110 MB/s, garantizando una lectura y escritura rápidas',
          'Interfaz SATA III para una conexión rápida y estable con NVR y DVR',
          'Caché de 64 MB para mejorar la velocidad de acceso y la eficiencia en la transferencia de datos',
          'Diseño optimizado para videovigilancia 24/7, soportando hasta 64 cámaras conectadas simultáneamente',
          'Velocidad de rotación de 5900 RPM, ofreciendo un equilibrio entre rendimiento y eficiencia energética',
          'Capacidad de 1 TB para almacenar grandes cantidades de vídeo de alta calidad',
          'Temperatura de funcionamiento de 0 a 75 ºC, adecuado para entornos exigentes y de alta demanda',
          'Bajo consumo de energía con 5.6W en operación y 0.5W en modo inactivo',
          'Garantía de 2 años para mayor tranquilidad en la inversión a largo plazo',
          'Compatible con una amplia gama de sistemas de videovigilancia NVR y DVR'
        ],
        images: [
          { src: imagen78, alt: 'Disco duro Seagate ST1000VX013 1 TB Skyhawk 5400 con tecnología AllFrame para videovigilancia' },
          { src: imagen79, alt: 'Disco duro Seagate ST1000VX013 1 TB Skyhawk para videovigilancia, con interfaz eSATA y conectividad USB' },
          { src: imagen80, alt: 'Disco duro Seagate ST1000VX013 1 TB Skyhawk con unidad híbrida, optimizado para grabación 24/7 y compatible con escritorio' },
      ],
        botonTexto: 'Obten el Kit!'
      },
      {
        title: '16 Fuentes De Energía',
        description: 'fuentes de alimentación de AC 110-240v, 12 voltios a 1 amperio de alta calidad, conector de alimentación de 2.1mm, con LED indicador de funcionamiento. El artículo puede ser ligeramente distinto al de la foto.',
        features: [
          '16 FUENTES DE ENERGIA',
          'Fuente de alimentación de alta calidad, diseñada para proporcionar un rendimiento estable y confiable',
          'Conector de alimentación de 2.1mm, compatible con la mayoría de las cámaras de seguridad en el mercado',
          'LED indicador de funcionamiento que muestra claramente el estado de la fuente de alimentación',
          'Salidas de 12V y 1A, ofreciendo la potencia adecuada para cámaras de seguridad y otros dispositivos de bajo consumo',
          'Protección contra sobrecarga y cortocircuito, garantizando un uso seguro y sin interrupciones',
          'Diseño compacto y duradero, ideal para instalaciones en interiores y exteriores',
          'Operación silenciosa y eficiente, asegurando que no interfiera con el entorno de videovigilancia',
          'Ideal para sistemas de videovigilancia 24/7, proporcionando una fuente de alimentación confiable y continua'
        ],
        images: [
          { src: imagen81, alt: 'Fuente de alimentación para cámaras de seguridad' },
        ],
        botonTexto: 'Comprar!'
      },
      {
        title: '16 pares de Video Baluns',
        description: 'VIDEO BALUM TURBO 4 EN 1 transmisión de señales de video a través de cables UTP, señal clara y estable a larga distancia.',
        features: [
          '16 PARES DE VIDEO BALUNS',
          'Transmisión eficiente de señales de video a través de cables de par trenzado, eliminando la necesidad de cables coaxiales costosos',
          'Señal clara y estable, sin interferencias, para una calidad de video superior en sistemas de videovigilancia',
          'Capacidad para transmitir video a largas distancias (hasta 300 metros), ideal para instalaciones en exteriores y grandes propiedades',
          'Fácil instalación, sin necesidad de ajustes complicados, ahorrando tiempo y esfuerzo en la configuración del sistema',
          'Compatible con cámaras de seguridad CCTV y NVR/DVR, lo que permite integrarlo a sistemas existentes sin problemas',
          'Reduce el riesgo de interferencias electromagnéticas (EMI) gracias a su diseño de alta calidad',
          'Diseño compacto y duradero, resistente a las condiciones ambientales, ideal para instalación en diversas situaciones',
          'Ahorro de costos al utilizar cables de par trenzado en lugar de cables coaxiales tradicionales'
        ],
        images: [
          { src: imagen82, alt: 'Video Balun para transmisión de señales de video' },
        ],
        botonTexto: 'Domicilio Gratis!'
      },
      {
        title: '16 pares de Borneras',
        description: 'borneras eléctricas para la conexión y distribución de energía de las cámaras.',
        features: [
          'Conexión y distribución de energía de manera segura y eficiente entre dispositivos eléctricos, como cámaras de seguridad y otros equipos',
          'Diseño compacto y robusto, ideal para entornos de trabajo exigentes, proporcionando fiabilidad en las instalaciones de videovigilancia',
          'Compatible con una amplia gama de sistemas de seguridad, permitiendo una integración fácil en instalaciones existentes',
          'Fabricada con materiales de alta calidad que aseguran una excelente conductividad eléctrica y resistencia a la corrosión',
          'Fácil instalación y mantenimiento, con terminales que aseguran conexiones firmes y seguras',
          'Ideal para mantener una distribución ordenada de cables en sistemas de seguridad, evitando enredos y mejorando la estética de la instalación',
          'Solución económica y duradera para gestionar la alimentación de múltiples cámaras de seguridad sin complicaciones',
          'Diseño modular que permite adaptarse a diferentes configuraciones de energía y distribución, ofreciendo versatilidad en su uso'
        ],
        images: [
          { src: imagen83, alt: 'Borneras eléctricas para cámaras de seguridad' },
        ],
        botonTexto: 'Obtener!'
      },
      {
        title: '200 mts de cable UTP',
        description: 'Cable UTP Cat 5e en aleación para interior incluidos en el kit.',
        features: [
          '200 metros de cable utp cat 5e.',
          'Cable UTP Cat 5e de alta calidad, diseñado para garantizar una transmisión de datos rápida y confiable',
          'Ideal para conexiones de cámaras de seguridad, ofreciendo estabilidad y calidad en la señal de video y datos',
          'Soporta distancias largas de hasta 250mts para la conexion de camaras de seguridad analogicas y 100 metros para trasmision de camaras ip, permitiendo flexibilidad en la instalación de equipos de videovigilancia',
          'Compatible con sistemas de CCTV y otros dispositivos de red, garantizando versatilidad en su uso',
          'Diseño robusto, adecuado para instalaciones interiores, asegurando un rendimiento confiable en entornos controlados',
          'Fácil de instalar y manejar.',
          'Ideal para proyectos de videovigilancia, ofreciendo una opción económica y duradera para conexiones de red'
        ],
        images: [
          { src: imagen84, alt: 'Cable UTP Cat 5e para cámaras de seguridad' },
        ],
        botonTexto: 'Pidelo Ahora!'
      }
    ];
    

  function Carruseles() {
    return (
      <div>
        {carruseles.map((carrusel, index) => (
          <div key={index}>
            <h3>{carrusel.title}</h3>
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
  Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de $2,140.000 COP. ¡Domicilio gratis!
  Realizamos una llamada de confirmación para verificar la dirección y disponibilidad de los equipos. ¡Entrega inmediata!`;

  return (
    <div>
      {/* Encabezado */}
      <Header links={headerLinks} extraMessage="Pago Contraentrega + Envío Gratis!" />
      <WhatsAppButton
  phoneNumber="3046615865"
  message="¡Hola! Me gustaría conocer mas del kit de 16 cámaras Tipo Domo 2Mpx + 4Mpx Lite de HIKVISION, Puede Brindarme Mas información.?'"
/>
      {/* Hero Header */}
      <HeroHeader
        imagen={headerImage}
        titulo="Solo para Bucaramanga y el área metropolitana"
        subtitulo="Tecnología avanzada: detección de humanos y vehículos"
        descripcion="Kit de 16 cámaras Domo Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, incluye deteccion de rostros."
        precio="2,140.000"
      >
        <BotonCompra
          texto="Compra el Kit de Cámaras!"
          onClick={abrirModal}
          color="#28a745"
          tamaño="mediano"
        />
      </HeroHeader>

        <Suspense fallback={<div>Cargando...</div>}>
       <Beneficios beneficios={beneficiosData} />
     </Suspense>


      {/* Banner de Descripción del Kit */}
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
        precio="2,140.000"
      >

      </HeroHeader>

      {/* Formulario de Confirmación */}
      <Formulario
        titulo="confirma la Compra del kit de 16 cámaras Domo, 2mpx + grabacion a 4mpx lite"
        descripcion="Por favor, complete el formulario para hacer llegar el pedido a su domicilio. Pago contra entrega solo en Bucaramanga y su área metropolitana, ¡Domicilio gratis! Realizamos llamada de confirmación para verificar la dirección y la disponibilidad de los equipos. ¡Entrega inmediata!"
        precio="$2,140.000"
      />

      
   {/* Schema Markup */}
   <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Kit de 16 Cámaras de Seguridad HIKVISION",
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