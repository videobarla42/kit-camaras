const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Carrusel-yCr2AJiE.js","assets/index-Djq4r2Gq.js","assets/index-BKbpXI_f.css","assets/Carrusel-CskF5U_j.css","assets/BotonCompra-CvKtbwos.js","assets/BotonCompra-DYBh_oda.css","assets/HeroHeader-Byuwn4K2.js","assets/HeroHeader-wBMnJh0S.css","assets/Beneficios-DistYcQn.js","assets/Beneficios-BuDlr5qB.css","assets/Banner-2R8t_SUM.js","assets/Banner-DgQO4x5Q.css","assets/ModalCompra-CKtU3PHW.js","assets/ModalCompra-BJ1vTwW6.css","assets/Formulario-BV8avRcI.js","assets/Formulario-DxauIE3V.css"])))=>i.map(i=>d[i]);
import{R as l,r,j as e,u as ya,I as h,a as P,b as V,c as I,d as O,e as H,_ as p}from"./index-Djq4r2Gq.js";import{u as Da,W as ha}from"./WhatsAppButton-BedMk7P8.js";import{i as j,a as F,b as R,c as B,d as T,e as E,f as N,g as A,h as K,j as M,k as _,l as z,m as k}from"./DS-2CE16D0T-IRPF(2.8mm)(C)19-Cts3q0M_.js";import{i as w,a as L,b as U,c as q,d as G,e as Q,f as $,g as W,h as X,j as Y,k as J,l as Z,m as aa,n as ea,o as ia}from"./10-Bl6mcPyr.js";import{i as na}from"./iDS-71HQHI-M1S14-CLt1MlOR.js";import{i as oa,a as ra,b as ta}from"./7-CUUBVW-O.js";var pa={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},sa=l.createContext&&l.createContext(pa),Pa=["attr","size","title"];function Va(a,i){if(a==null)return{};var n=Oa(a,i),o,t;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);for(t=0;t<c.length;t++)o=c[t],!(i.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(n[o]=a[o])}return n}function Oa(a,i){if(a==null)return{};var n={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(i.indexOf(o)>=0)continue;n[o]=a[o]}return n}function f(){return f=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(a[o]=n[o])}return a},f.apply(this,arguments)}function ca(a,i){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);i&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),n.push.apply(n,o)}return n}function C(a){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?ca(Object(n),!0).forEach(function(o){Ha(a,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):ca(Object(n)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(n,o))})}return a}function Ha(a,i,n){return i=ja(i),i in a?Object.defineProperty(a,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[i]=n,a}function ja(a){var i=Fa(a,"string");return typeof i=="symbol"?i:i+""}function Fa(a,i){if(typeof a!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var o=n.call(a,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)}function ua(a){return a&&a.map((i,n)=>l.createElement(i.tag,C({key:n},i.attr),ua(i.child)))}function Ra(a){return i=>l.createElement(Ba,f({attr:C({},a.attr)},i),ua(a.child))}function Ba(a){var i=n=>{var{attr:o,size:t,title:c}=a,g=Va(a,Pa),u=t||n.size||"1em",d;return n.className&&(d=n.className),a.className&&(d=(d?d+" ":"")+a.className),l.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,g,{className:d,style:C(C({color:a.color||n.color},n.style),a.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),a.children)};return sa!==void 0?l.createElement(sa.Consumer,null,n=>i(n)):i(pa)}function Ta(a){return Ra({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}const Ea=({text:a,backgroundColor:i="#ff9800",textColor:n="#000",position:o="bottom-left",onClick:t})=>{const[c,g]=r.useState(!0),u=()=>{g(window.scrollY===0)};r.useEffect(()=>(window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)),[]);const d=v=>{v.stopPropagation(),g(!1)},S=`position-${o}`;return e.jsx(e.Fragment,{children:c&&e.jsxs("div",{className:`descuento-container ${S}`,style:{backgroundColor:i,color:n,cursor:t?"pointer":"default"},onClick:t,children:[e.jsx("button",{className:"close-icon",onClick:d,children:e.jsx(Ta,{})}),e.jsx("div",{children:a})]})})},da="/assets/DS-2CE16D0T-IRPF(2.8mm)(C)4-Buy0mBJ3.webp",Na=r.lazy(()=>p(()=>import("./Carrusel-yCr2AJiE.js"),__vite__mapDeps([0,1,2,3]))),la=r.lazy(()=>p(()=>import("./BotonCompra-CvKtbwos.js"),__vite__mapDeps([4,1,2,5]))),ma=r.lazy(()=>p(()=>import("./HeroHeader-Byuwn4K2.js"),__vite__mapDeps([6,1,2,7]))),Aa=r.lazy(()=>p(()=>import("./index-Djq4r2Gq.js").then(a=>a.H),__vite__mapDeps([1,2]))),Ka=r.lazy(()=>p(()=>import("./Beneficios-DistYcQn.js"),__vite__mapDeps([8,1,2,9]))),m=r.lazy(()=>p(()=>import("./Banner-2R8t_SUM.js"),__vite__mapDeps([10,1,2,11]))),Ma=r.lazy(()=>p(()=>import("./ModalCompra-CKtU3PHW.js"),__vite__mapDeps([12,1,2,13]))),_a=r.lazy(()=>p(()=>import("./Formulario-BV8avRcI.js"),__vite__mapDeps([14,1,2,15]))),Xa=()=>{const{modalAbierto:a,abrirModal:i,cerrarModal:n,confirmarCompra:o,nombre:t,setNombre:c,telefono:g,setTelefono:u,direccion:d,setDireccion:S,ciudadYBarrio:v,setCiudadYBarrio:ga}=Da(),[za,Ia]=l.useState(null),{prices:ka}=ya(),ba=()=>{const xa=`https://wa.me/3046615865?text=${encodeURIComponent("Hola, Me Interesa el kit de 4 cámaras Tipo bala 2Mpx + 4Mpx Lite de HIKVISION, Puede Brindarme Mas Informacion?")}`;window.open(xa,"_blank")},fa=()=>{const s="tel:+573046615865";window.location.href=s},Ca=()=>{console.log("Se hizo clic en el descuento")},Sa=[{to:"/",text:"Kit 4 Cámaras de seguridad Domo HIKVISION $780,000 COP",image:h},{to:"/kits_8-camaras-seguridad",text:"Kit 8 Cámaras de seguridad Domo HIKVISION $1,175,000 COP",image:P},{to:"/kit_16-camaras-seguridad",text:"Kit 16 Cámaras de seguridad Domo HIKVISION $1,990,000 COP",image:V},{to:"/kit_4-camaras-seguridad-bala",text:"Kit 4 Cámaras de seguridad Bala HIKVISION $860,000 COP",image:I},{to:"/kit_8-camaras-seguridad-bala",text:"Kit 8 Cámaras de seguridad Bala HIKVISION $1,370,000 COP",image:O},{to:"/kit_16-camaras-seguridad-bala",text:"Kit 16 Cámaras de seguridad HIKVISION $2,340,000 COP",image:H}],va=[{icon:"✔️",title:"Tecnología avanzada de detección de movimiento",description:"Clasificación precisa basada en aprendizaje profundo e identificación de humanos y vehículos."},{icon:"✔️",title:"Protección perimetral mejorada",description:"Detección facial con análisis inteligente para monitoreo y seguridad."},{icon:"✔️",title:"Eficiencia en grabación y almacenamiento",description:"Compresión H.265 Pro+ que reduce espacio de almacenamiento sin comprometer calidad."},{icon:"✔️",title:"Flexibilidad en conexiones",description:"Compatibilidad con HDTVI, AHD, HDCVI, CVBS e IP, soportando hasta 6 canales IP."},{icon:"✔️",title:"Almacenamiento robusto",description:"Capacidad de hasta 10 TB por disco y soporte para hasta 32 usuarios remotos simultáneamente."},{icon:"✔️",title:"Durabilidad garantizada",description:"Operación estable en temperaturas extremas y construcción resistente."},{icon:"✔️",title:"Alta calidad de imagen",description:"Resolución Full HD 1080P para detalles precisos en monitoreo y grabación."},{icon:"✔️",title:"Visión nocturna infrarroja",description:"Rango IR de hasta 20 m para vigilancia en total oscuridad."},{icon:"✔️",title:"Resistencia a condiciones extremas",description:"Operación estable en temperaturas de -40°C a 60°C y construcción resistente a la humedad."},{icon:"✔️",title:"Funciones inteligentes",description:"Ajuste automático de ganancia (AGC) para imágenes claras en condiciones de poca luz."}],x=[{title:"1 DVR de 4 Canales,  4 Mpx Lite - HIKVISION",description:"DVR AcuSense mini de 4 canales con tecnología avanzada de detección de movimiento (humanos y vehículos) y protección perimetral inteligente. Ofrece grabación de múltiples resoluciones hasta 4 Mpx Lite y soporte para cámaras IP de hasta 6 MP.",features:["DVR AcuSense Mini de 4 canales 4 Mpx Lite de HIKVISION","Compresión H.265 Pro+ para eficiencia en la grabación de video","Soporte para cámaras IP de hasta 6 MP, brindando alta resolución","Grabación en múltiples resoluciones hasta 4MP Lite, adaptándose a diferentes necesidades de grabación","Clasificación de objetivos humanos y vehículos mediante Deep Learning (Detección de Movimiento 2.0)","Protección perimetral avanzada con análisis humano/vehículo hasta 2 canales","Detección facial y captura de imágenes de rostro","Entrada de vídeo IP con soporte para cámaras H.265+/H.265/H.264+/H.264","Admite hasta 6 cámaras IP con una resolución máxima de 6 MP","Entradas de video analógico HDTVI, AHD, CVI y CVBS con diversas opciones de resolución","Salida de video HDMI y VGA simultáneas, con resoluciones de hasta 1080p","Entrada de audio RCA y soporte para audio bidireccional a través de cable coaxial","Compresión de video H.265 Pro+/Pro, H.264+/H.264, optimizando el almacenamiento","Soporta grabación en calidad de hasta 3K/5MP Lite a 12 fps","Análisis de movimiento y búsqueda rápida de eventos por objeto o tipo de evento","Análisis de video inteligente para reducir alarmas falsas causadas por objetos no relevantes","Banda ancha total de 72 Mbps para un rendimiento fluido","Conexión remota a través de múltiples protocolos como TCP/IP, PPPoE, NTP, y ONVIF","Conexión Wi-Fi posible mediante adaptador USB","Capacidad de almacenamiento de hasta 10 TB por disco SATA","Consumo energético eficiente de ≤ 8 W (sin disco duro)","Temperatura de trabajo de -10 °C a +55 °C, adecuada para diversas condiciones ambientales","Diseño compacto con dimensiones de 200 × 200 × 48 mm y peso de ≤ 1 kg (sin HDD)","Referencia: iDS-7104HQHI-M1/S"],images:[{src:w,alt:"DVR HIKVISION DS-7104HQHI-M1S1 de 4 Canales para grabación en video"},{src:L,alt:"DVR HIKVISION DS-7104HQHI-M1S1 AcuSense mini de 4 canales con detección avanzada"},{src:U,alt:"DVR HIKVISION DS-7104HQHI-M1S1 con detección de movimiento avanzada y video grabado"},{src:q,alt:"DVR HIKVISION DS-7104HQHI-M1S1 con protección perimetral y monitoreo de seguridad"},{src:G,alt:"DVR HIKVISION DS-7104HQHI-M1S1 con compresión de video H.265 Pro+ para alta calidad"},{src:Q,alt:"DVR HIKVISION DS-7104HQHI-M1S1 con soporte para cámaras IP y grabación en red"},{src:$,alt:"DVR HIKVISION DS-7104HQHI-M1S1 con grabación en múltiples resoluciones para mejor calidad"},{src:W,alt:"DVR HIKVISION DS-7104HQHI-M1S1 de 4 canales con tecnología avanzada de grabación"},{src:X,alt:"DVR HIKVISION DS-7104HQHI-M1S1 de 4 canales, ideal para sistemas de seguridad"},{src:Y,alt:"DVR HIKVISION DS-7104HQHI-M1S1 de 4 canales, fácil integración con cámaras HIKVISION"},{src:J,alt:"DVR HIKVISION DS-7104HQHI-M1S1 de 4 canales con grabación estable y de alta calidad"},{src:na,alt:"DVR HIKVISION DS-7104HQHI-M1S1 de 4 canales, solución ideal para vigilancia inteligente"}],botonTexto:"Domicilio Gratis!"},{title:"4 Cámaras de 2 Mpx - HIKVISION",description:"Cámaras Bala TURBOHD 1080p de HIKVISION con lente de 2.8 mm y visión nocturna inteligente EXIR de hasta 20 mts.",features:["4 CAMARAS BALA 2 MPX DE HIKVISION","Visión Nocturna Inteligente EXIR hasta 20 mts","Diseño Resistente a Agua y Polvo (IP67)","4 Señales Switchable (TVI/AHD/CVI/CVBS)","Sensor CMOS de 2 MP con resolución máxima de 1920x1080 (Full HD)","Lente fijo de 2.8 mm (ángulo de visión 101° horizontal, 60° vertical)","Iluminación mínima de 0.01 Lux @ (F2.0, AGC ON) y 0 Lux con IR","Rango de temperatura de operación: -40ºC a 60ºC","Ángulo de ajuste completo (Pan: 0°-360°, Tilt: 0°-90°, Rotation: 0°-360°)","Alimentación de 12 VDC con consumo máximo de 2.2 W","Carcasa de policarbonato resistente para uso exterior (IP67)","Modo día/noche con ICR automático, mejorado con WDR digital","Garantía de 2 años","Dimensiones: 70 mm x 137.8 mm, peso 150 g"],images:[{src:da,alt:"Cámara Bala TURBOHD 1080p HIKVISION con lente de 2.8mm, visión nocturna Smart IR hasta 20m, protección IP66 y soporte 4 tecnologías"},{src:j,alt:"Cámara de seguridad Bala HIKVISION DS-2CE16D0T-IRPF(C) con resolución 1080p, lente 2.8mm, visión nocturna Smart IR para exteriores IP66"},{src:F,alt:"Cámara de seguridad Bala HIKVISION DS-2CE16D0T-IRPF(C) con visión nocturna Smart IR de 20 metros, compatible con TVI, AHD, CVI, CVBS"},{src:R,alt:"Cámara Bala TURBOHD 1080p HIKVISION con visión nocturna Smart IR, lente de 2.8mm, protección IP66 y alta resolución 2MP"},{src:B,alt:"Cámara de seguridad Bala HIKVISION DS-2CE16D0T-IRPF(C) con visión nocturna Smart IR, lente fijo de 2.8mm para exteriores IP66"},{src:T,alt:"Cámara de seguridad Bala HIKVISION DS-2CE16D0T-IRPF(C) con visión nocturna Smart IR hasta 20 metros, lente fijo de 2.8mm"},{src:E,alt:"Cámara Bala HIKVISION DS-2CE16D0T-IRPF(C) con resolución 1080p y lente 2.8mm para exteriores con visión nocturna Smart IR"},{src:N,alt:"Cámara Bala HIKVISION DS-2CE16D0T-IRPF(C) con visión nocturna Smart IR y soporte para TVI, AHD, CVI y CVBS"},{src:A,alt:"Cámara Bala HIKVISION DS-2CE16D0T-IRPF(C) con visión nocturna Smart IR de 20m, protección IP66 y alta calidad de imagen"},{src:K,alt:"Cámara Bala HIKVISION DS-2CE16D0T-IRPF(C) con lente 2.8mm y visión nocturna Smart IR para exteriores IP66"},{src:M,alt:"Cámara Bala HIKVISION DS-2CE16D0T-IRPF(C) para exteriores, visión nocturna Smart IR, lente de 2.8mm, IP66, soporta 4 tecnologías"},{src:_,alt:"Cámara de seguridad Bala HIKVISION DS-2CE16D0T-IRPF(C) con visión nocturna Smart IR, soporte para TVI, AHD, CVI y CVBS"},{src:z,alt:"Cámara Bala HIKVISION DS-2CE16D0T-IRPF(C) para exteriores, visión nocturna Smart IR, lente de 2.8mm y protección IP66"},{src:k,alt:"Cámara Bala HIKVISION DS-2CE16D0T-IRPF(C) con lente de 2.8mm, visión nocturna Smart IR y alta resolución 1080p"}],botonTexto:"Pague en casa!"},{title:"1 Disco duro ideal para videovigilancia",description:"Disco duro Seagate Skyhawk 1 TB para videovigilancia, grabación 24/7, tecnología AllFrame, velocidad 110 MB/s, interfaz SATA, caché 64 MB, soporta 64 cámaras.",features:["Tecnología AllFrame para un rendimiento de grabación optimizado y sin interrupciones en sistemas de videovigilancia 24/7","Velocidad de transferencia de datos de hasta 110 MB/s, garantizando una lectura y escritura rápidas","Interfaz SATA III para una conexión rápida y estable con NVR y DVR","Caché de 64 MB para mejorar la velocidad de acceso y la eficiencia en la transferencia de datos","Diseño optimizado para videovigilancia 24/7, soportando hasta 64 cámaras conectadas simultáneamente","Velocidad de rotación de 5900 RPM, ofreciendo un equilibrio entre rendimiento y eficiencia energética","Capacidad de 1 TB para almacenar grandes cantidades de vídeo de alta calidad","Temperatura de funcionamiento de 0 a 75 ºC, adecuado para entornos exigentes y de alta demanda","Bajo consumo de energía con 5.6W en operación y 0.5W en modo inactivo","Garantía de 2 años para mayor tranquilidad en la inversión a largo plazo","Compatible con una amplia gama de sistemas de videovigilancia NVR y DVR"],images:[{src:Z,alt:"Disco duro Seagate ST1000VX013 1 TB Skyhawk 5400 con tecnología AllFrame para videovigilancia"},{src:aa,alt:"Disco duro Seagate ST1000VX013 1 TB Skyhawk para videovigilancia, con interfaz eSATA y conectividad USB"},{src:ea,alt:"Disco duro Seagate ST1000VX013 1 TB Skyhawk con unidad híbrida, optimizado para grabación 24/7 y compatible con escritorio"}],botonTexto:"Obtenga el Kit!"},{title:"4 Fuentes de Energía",description:"fuentes de alimentación de AC 110-240v, 12 voltios a 1 amperio de alta calidad, conector de alimentación de 2.1mm, con LED indicador de funcionamiento.",features:["4 FUENTES DE ENERGIA","Fuente de alimentación de alta calidad, diseñada para proporcionar un rendimiento estable y confiable","Conector de alimentación de 2.1mm, compatible con la mayoría de las cámaras de seguridad en el mercado","LED indicador de funcionamiento que muestra claramente el estado de la fuente de alimentación","Salidas de 12V y 1A, ofreciendo la potencia adecuada para cámaras de seguridad y otros dispositivos de bajo consumo","Protección contra sobrecarga y cortocircuito, garantizando un uso seguro y sin interrupciones","Diseño compacto y duradero, ideal para instalaciones en interiores y exteriores","Operación silenciosa y eficiente, asegurando que no interfiera con el entorno de videovigilancia","Ideal para sistemas de videovigilancia 24/7, proporcionando una fuente de alimentación confiable y continua"],images:[{src:oa,alt:"Fuente de alimentación para cámaras de seguridad"}],botonTexto:"Comprar!"},{title:"4 pares de Video Baluns",description:"VIDEO BALUM TURBO 4 EN 1 transmisión de señales de video a través de cables UTP, señal clara y estable a larga distancia.",features:["4 PARES DE VIDEO BALUNS","Transmisión eficiente de señales de video a través de cables de par trenzado, eliminando la necesidad de cables coaxiales costosos","Señal clara y estable, sin interferencias, para una calidad de video superior en sistemas de videovigilancia","Capacidad para transmitir video a largas distancias (hasta 300 metros), ideal para instalaciones en exteriores y grandes propiedades","Fácil instalación, sin necesidad de ajustes complicados, ahorrando tiempo y esfuerzo en la configuración del sistema","Compatible con cámaras de seguridad CCTV y NVR/DVR, lo que permite integrarlo a sistemas existentes sin problemas","Reduce el riesgo de interferencias electromagnéticas (EMI) gracias a su diseño de alta calidad","Diseño compacto y duradero, resistente a las condiciones ambientales, ideal para instalación en diversas situaciones","Ahorro de costos al utilizar cables de par trenzado en lugar de cables coaxiales tradicionales"],images:[{src:ra,alt:"Video Balun para transmisión de señales de video"}],botonTexto:"Domicilio Gratis!"},{title:"4 Pares de Borneras Eléctricas",description:"borneras eléctricas para la conexión y distribución eficiente de energía en sistemas de videovigilancia.",features:["Conexión y distribución de energía de manera segura y eficiente entre dispositivos eléctricos, como cámaras de seguridad y otros equipos","Diseño compacto y robusto, ideal para entornos de trabajo exigentes, proporcionando fiabilidad en las instalaciones de videovigilancia","Compatible con una amplia gama de sistemas de seguridad, permitiendo una integración fácil en instalaciones existentes","Fabricada con materiales de alta calidad que aseguran una excelente conductividad eléctrica y resistencia a la corrosión","Fácil instalación y mantenimiento, con terminales que aseguran conexiones firmes y seguras","Ideal para mantener una distribución ordenada de cables en sistemas de seguridad, evitando enredos y mejorando la estética de la instalación","Solución económica y duradera para gestionar la alimentación de múltiples cámaras de seguridad sin complicaciones","Diseño modular que permite adaptarse a diferentes configuraciones de energía y distribución, ofreciendo versatilidad en su uso"],images:[{src:ta,alt:"Borneras eléctricas para cámaras de seguridad"}],botonTexto:"Obtener!"},{title:"50 mts de Cable UTP Cat 5e",description:"Cable UTP Cat 5e de alta calidad para conexiones de red de cámaras de seguridad y otros dispositivos electrónicos, incluido en el kit.",features:["50 metros de cable utp cat 5e.","Cable UTP Cat 5e de alta calidad, diseñado para garantizar una transmisión de datos rápida y confiable","Ideal para conexiones de cámaras de seguridad, ofreciendo estabilidad y calidad en la señal de video y datos","Soporta distancias largas de hasta 250mts para la conexion de camaras de seguridad analogicas y 100 metros para trasmision de camaras ip, permitiendo flexibilidad en la instalación de equipos de videovigilancia","Compatible con sistemas de CCTV y otros dispositivos de red, garantizando versatilidad en su uso","Diseño robusto, adecuado para instalaciones interiores, asegurando un rendimiento confiable en entornos controlados","Fácil de instalar y manejar.","Ideal para proyectos de videovigilancia, ofreciendo una opción económica y duradera para conexiones de red"],images:[{src:ia,alt:"Cable UTP Cat 5e para cámaras de seguridad"}],botonTexto:"Pídalo Ahora!"}],y=[e.jsx(m,{texto:"Garantía de 1 año para cámaras de seguridad y DVR",backgroundColor:"#8B0000",textColor:"#FFFFFF",fontSize:"2rem",padding:"15px 30px"},"banner1"),e.jsx(m,{texto:"Garantía de 2 años para disco Seagate Skyhawk de 1 TB",backgroundColor:"#8B0000",textColor:"#FFFFFF",fontSize:"2rem",padding:"15px 30px"},"banner2"),e.jsx(m,{texto:"Accesorios del kit de cámaras",backgroundColor:"#8B0000",textColor:"#FFFFFF",fontSize:"2rem",padding:"15px 30px"},"banner3"),e.jsx(m,{texto:"Los accesorios del kit no tienen garantía.",backgroundColor:"#8B0000",textColor:"#FFFFFF",fontSize:"2rem",padding:"15px 30px"},"banner4"),e.jsx(m,{texto:"Domicilios sin costo!",backgroundColor:"#8B0000",textColor:"#FFFFFF",fontSize:"2rem",padding:"15px 30px"},"banner5"),e.jsx(m,{texto:"Envio contra entrega para Bucaramanga y su área metropolitana.",backgroundColor:"#8B0000",textColor:"#FFFFFF",fontSize:"2rem",padding:"15px 30px"},"banner6"),e.jsx(m,{texto:"¡Entrega Inmediata!",backgroundColor:"#8B0000",textColor:"#FFFFFF",fontSize:"2rem",padding:"15px 30px"},"banner7")],D=s=>{typeof s=="number"&&Ia(x[s]),i()};return e.jsxs("div",{children:[e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Cargando..."}),children:e.jsx(Aa,{links:Sa,extraMessage:"Pago Contraentrega + Envío Gratis!"})}),e.jsx(ha,{phoneNumber:"3046615865",message:"¡Hola! Me gustaría conocer mas del kit de 4 cámaras Tipo bala 2Mpx + 4Mpx Lite de HIKVISION, Puede Brindarme Mas información.?'"}),e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Cargando..."}),children:e.jsx(ma,{imagen:I,titulo:"Solo para Bucaramanga y el área metropolitana",subtitulo:"Con detección de humanos y vehículos",descripcion:"Kit de 4 cámaras Bala Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, incluye deteccion de rostros.",precio:"870,000",children:e.jsx(la,{texto:"Compra el Kit de Cámaras!",onClick:D,color:"#28a745",tamaño:"mediano"})})}),e.jsx(Ea,{text:e.jsxs(e.Fragment,{children:[e.jsx("h6",{children:"¡Aprovecha nuestro descuento especial!"}),e.jsx("p",{children:"$29.99"})]}),onClick:Ca}),e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Cargando..."}),children:e.jsx(Ka,{beneficios:va})}),e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Cargando..."}),children:e.jsx(m,{texto:"Descripción del kit!",backgroundColor:"#8B0000",textColor:"#FFFFFF",fontSize:"2rem",padding:"15px 30px"},"banner0")}),x.map((s,b)=>e.jsxs(l.Fragment,{children:[e.jsxs("section",{style:{marginBottom:"40px",textAlign:"center"},children:[e.jsx("h2",{children:s.title}),e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Cargando..."}),children:e.jsx(Na,{images:s.images,title:s.title,description:s.description,features:s.features})}),e.jsx("p",{children:s.description}),e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Cargando..."}),children:e.jsx(la,{texto:s.botonTexto,onClick:()=>D(b),color:"#007bff",tamaño:"mediano"})})]}),b<y.length&&y[b]]},b)),a&&e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Cargando..."}),children:e.jsx(Ma,{onClose:n,onConfirm:o,nombre:t,setNombre:c,telefono:g,setTelefono:u,direccion:d,setDireccion:S,ciudadYBarrio:v,setCiudadYBarrio:ga,abrirWhatsApp:ba,hacerLlamada:fa,horariosEntrega:`Horarios de entrega: De lunes a viernes: de 8:00 a.m. a 6:00 p.m. (jornada continua).
  Sábados: de 8:00 a.m. a 1:00 p.m.
  Domingos y festivos no hacemos entregas.

  Aceptamos pagos en efectivo, Nequi o Bancolombia.`,tituloModal:"Confirme la Compra el Kit de 4 cámaras Bala De 2mpx",descripcionModal:`Complete el formulario para hacer llegar el pedido a su domicilio.
  Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de $870,000 COP. ¡Domicilio gratis!
  Realizamos una llamada de confirmación para verificar la dirección y disponibilidad de los equipos. ¡Entrega inmediata!`})}),e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Cargando..."}),children:e.jsx(ma,{imagen:I,titulo:"",subtitulo:"",descripcion:"",precio:"870,000"})}),e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Cargando..."}),children:e.jsx(_a,{titulo:"confirma la Compra del kit de 4 cámaras Bala, 2mpx + grabacion a 4mpx lite",descripcion:"Por favor, complete el formulario para hacer llegar el pedido a su domicilio. Pago contra entrega solo en Bucaramanga y su área metropolitana, ¡Domicilio gratis! Realizamos llamada de confirmación para verificar la dirección y la disponibilidad de los equipos. ¡Entrega inmediata!",precio:"$870,000"})}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org/","@type":"Product",name:"Kit de 4 Cámaras de Seguridad HIKVISION",image:[I,I,da,j,F,R,B,T,E,N,A,K,M,_,z,k,w,L,U,q,G,Q,$,W,X,Y,J,na,Z,aa,ea,oa,ra,ta,ia,h,P,V,I,O,H],description:"Kit de 4 cámaras Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, ideales para todo tipo de negocio, casa u oficina.",brand:{"@type":"Brand",name:"HIKVISION"},offers:{"@type":"Offer",price:"860000",priceCurrency:"COP",availability:"https://schema.org/InStock",seller:{"@type":"Organization",name:"S24 seguridad electronica"}}})})]})};export{Xa as default};
