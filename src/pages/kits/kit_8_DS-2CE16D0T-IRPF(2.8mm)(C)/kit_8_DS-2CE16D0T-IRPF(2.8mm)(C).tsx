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
      title: 'DVR de 8 Canales, 4 Mpx Lite - HIKVISION',
      description: 'DVR AcuSense mini de 8 canales con tecnología avanzada de detección de movimiento (humanos y vehículos) y protección perimetral inteligente. Ofrece grabación de múltiples resoluciones hasta 4 Mpx Lite y soporte para cámaras IP de hasta 6 MP.',
      features: [
        'DVR AcuSense Mini de 8 canales 4 Mpx Lite de HIKVISION',
        '8 canales de entrada de video analógico con soporte para conexión coaxitron',
        'Detección de movimiento 2.0 basada en Deep Learning para clasificación precisa de humanos y vehículos',
        'Protección perimetral con análisis de intrusiones en hasta 4 canales',
        'Captura y detección facial para mayor seguridad',
        'Compresión de video eficiente H.265 Pro+ que reduce el almacenamiento requerido',
        'Compatibilidad con múltiples formatos de entrada: HDTVI, AHD, CVI, CVBS e IP',
        'Salida de video simultánea HDMI y VGA con resoluciones de hasta 1920×1080/60Hz',
        'Entrada de audio por coaxial y salida RCA para una transmisión de sonido clara',
        'Hasta 12 entradas de cámara IP con resolución de hasta 6 MP y codificación 3K/5M Lite a 12 fps',
        'Soporte para cámaras IP con codecs H.265+/H.265/H.264+/H.264',
        'Reproducción sincrónica de hasta 8 canales para monitoreo eficiente',
        'Codificación de video en resoluciones 3K Lite, 5 MP Lite, 4 MP Lite y 1080p',
        'Conexión remota mediante múltiples protocolos: TCP/IP, PPPoE, Hik-Connect, DNS, DDNS, entre otros',
        'Consumo energético eficiente (≤ 12 W sin HDD)',
        'Temperatura de funcionamiento de -10 °C a +55 °C',
        'Capacidad de almacenamiento de hasta 10 TB por disco mediante interfaz SATA'
      ],

      images: [
        { src: imagen65, alt: 'DVR HIKVISION iDS-7108HQHI-M1S1 de 8 canales para grabación de video de alta calidad' },
        { src: imagen66, alt: 'DVR HIKVISION iDS-7108HQHI-M1S1 AcuSense mini de 8 canales con análisis inteligente' },
        { src: imagen67, alt: 'DVR HIKVISION iDS-7108HQHI-M1S1 con detección de movimiento avanzada para seguridad mejorada' },
        { src: imagen68, alt: 'DVR HIKVISION iDS-7108HQHI-M1S1 con protección perimetral para monitoreo eficiente' },
        { src: imagen69, alt: 'DVR HIKVISION iDS-7108HQHI-M1S1 con compresión H.265 Pro+ para optimizar almacenamiento' },
        { src: imagen70, alt: 'DVR HIKVISION iDS-7108HQHI-M1S1 con soporte para cámaras IP para integrar monitoreo en red' },
        { src: imagen71, alt: 'DVR HIKVISION iDS-7108HQHI-M1S1 con grabación en múltiples resoluciones para calidad superior' },
        { src: imagen72, alt: 'DVR HIKVISION iDS-7108HQHI-M1S1 de 8 canales ideal para sistemas de videovigilancia grandes' },
        { src: imagen73, alt: 'DVR HIKVISION iDS-7108HQHI-M1S1 de 8 canales con tecnología avanzada para grabación continua' },
        { src: imagen74, alt: 'DVR HIKVISION iDS-7108HQHI-M1S1 de 8 canales, solución ideal para monitoreo en instalaciones comerciales' },
        { src: imagen75, alt: 'DVR HIKVISION iDS-7108HQHI-M1S1 de 8 canales con capacidades de grabación avanzadas' },
        { src: imagen76, alt: 'DVR HIKVISION iDS-7108HQHI-M1S1 de 8 canales para grabación y visualización remota' },
        { src: imagen77, alt: 'DVR HIKVISION iDS-7108HQHI-M1S1 de 8 canales con rendimiento optimizado para sistemas de seguridad' },
    ],
    
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '8 Cámaras de 2 Mpx - HIKVISION',
      description: 'Cámaras Bala TURBOHD 1080p de HIKVISION con lente de 2.8 mm y visión nocturna inteligente EXIR de hasta 20 mts.',
      features: [
        '8 CAMARAS BALA 2 MPX DE HIKVISION',
        'Visión Nocturna Inteligente EXIR hasta 20 mts',
        'Diseño Resistente a Agua y Polvo (IP67)',
        '4 Señales Switchable (TVI/AHD/CVI/CVBS)',
        'Sensor CMOS de 2 MP con resolución máxima de 1920x1080 (Full HD)',
        'Lente fijo de 2.8 mm (ángulo de visión 101° horizontal, 60° vertical)',
        'Iluminación mínima de 0.01 Lux @ (F2.0, AGC ON) y 0 Lux con IR',
        'Rango de temperatura de operación: -40ºC a 60ºC',
        'Ángulo de ajuste completo (Pan: 0°-360°, Tilt: 0°-90°, Rotation: 0°-360°)',
        'Alimentación de 12 VDC con consumo máximo de 2.2 W',
        'Carcasa de policarbonato resistente para uso exterior (IP67)',
        'Modo día/noche con ICR automático, mejorado con WDR digital',
        'Garantía de 2 años',
        'Dimensiones: 70 mm x 137.8 mm, peso 150 g',
      ],
      images: [
        { src: imagen51, alt: 'Cámara Bala TURBOHD 1080p HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con lente de 2.8 mm y visión nocturna Smart IR' },
        { src: imagen52, alt: 'Cámara Bala HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) 1080p con 20 mts de visión nocturna y tecnología Smart IR para exteriores' },
        { src: imagen53, alt: 'Cámara Bala HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con visión nocturna EXIR, lente de 2.8 mm y resolución 1080p' },
        { src: imagen54, alt: 'Cámara Bala TURBOHD 1080p HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) para exteriores con visión nocturna de 20 mts' },
        { src: imagen55, alt: 'Cámara de seguridad Bala HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con lente de 2.8 mm y 20 mts de visión nocturna Smart IR' },
        { src: imagen56, alt: 'Cámara Bala HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con visión nocturna Smart IR y protección IP66 para exteriores' },
        { src: imagen57, alt: 'Cámara de seguridad Bala HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con visión nocturna EXIR y protección IP67 para exteriores' },
        { src: imagen58, alt: 'Cámara Bala HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) para exteriores con visión nocturna y ángulo de apertura de 82.2°' },
        { src: imagen59, alt: 'Cámara de seguridad Bala HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con visión nocturna de 20 mts y lente de 2.8 mm' },
        { src: imagen60, alt: 'Cámara de seguridad Bala HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con visión nocturna Smart IR para vigilancia exterior' },
        { src: imagen61, alt: 'Cámara Bala HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) 1080p con lente de 2.8 mm y visión nocturna de 20 mts Smart IR' },
        { src: imagen62, alt: 'Cámara de seguridad Bala HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con visión nocturna Smart IR para vigilancia exterior' },
        { src: imagen63, alt: 'Cámara de seguridad Bala HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) para exteriores con 20 mts de visión nocturna y protección IP67' },
        { src: imagen64, alt: 'Cámara Bala HIKVISION DS-2CE16D0T-IRPF(2.8mm)(C) con lente de 2.8 mm y visión nocturna Smart IR para vigilancia exterior' },
    ], 
    
      botonTexto: 'Pague en casa!'
    },
    {
      title: '1 Disco duro ideal para videovigilancia',
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
      botonTexto: 'Obtenga el Kit!'
    },
    {
      title: '8 Fuentes de Energía',
      description: 'fuentes de alimentación de AC 110-240v, 12 voltios a 1 amperio de alta calidad, conector de alimentación de 2.1mm, con LED indicador de funcionamiento.',
      features: [
        '8 FUENTES DE ENERGIA',
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
        { src: imagen81, alt: 'Fuente de alimentación para cámaras de seguridad' }
      ],
      botonTexto: 'Comprar!'
    },
    {
      title: '8 pares de Video Baluns',
      description: 'VIDEO BALUM TURBO 4 EN 1 transmisión de señales de video a través de cables UTP, señal clara y estable a larga distancia.',
      features: [
        '8 PARES DE VIDEO BALUNS',
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
        { src: imagen82, alt: 'Video Balun para transmisión de señales de video' }
      ],
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '4 pares de Borneras',
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
        { src: imagen83, alt: 'Borneras eléctricas para cámaras de seguridad' }
      ],
      botonTexto: 'Obtener!'
    },
    {
      title: '100 mts de cable UTP',
      description: 'Cable UTP Cat 5e para interior incluido en el kit.',
      features: [
        '100 metros de cable utp cat 5e.',
        'Cable UTP Cat 5e de alta calidad, diseñado para garantizar una transmisión de datos rápida y confiable',
        'Ideal para conexiones de cámaras de seguridad, ofreciendo estabilidad y calidad en la señal de video y datos',
        'Soporta distancias largas de hasta 250mts para la conexion de camaras de seguridad analogicas y 100 metros para trasmision de camaras ip, permitiendo flexibilidad en la instalación de equipos de videovigilancia',
        'Compatible con sistemas de CCTV y otros dispositivos de red, garantizando versatilidad en su uso',
        'Diseño robusto, adecuado para instalaciones interiores, asegurando un rendimiento confiable en entornos controlados',
        'Fácil de instalar y manejar.',
        'Ideal para proyectos de videovigilancia, ofreciendo una opción económica y duradera para conexiones de red'
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
  Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de $1,390.000 COP. ¡Domicilio gratis!
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
          descripcion="Kit de 8 cámaras Bala Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, incluye deteccion de rostros."
          precio="1,390.000"
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
          precio="1,390.000"
        />
      </Suspense>

      <Suspense fallback={<div>Cargando...</div>}>
        <Formulario
          titulo="confirma la Compra del kit de 8 cámaras Bala, 2mpx + grabacion a 4mpx lite"
          descripcion="Por favor, complete el formulario para hacer llegar el pedido a su domicilio. Pago contra entrega solo en Bucaramanga y su área metropolitana, ¡Domicilio gratis! Realizamos llamada de confirmación para verificar la dirección y la disponibilidad de los equipos. ¡Entrega inmediata!"
          precio="$1,390.000"
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