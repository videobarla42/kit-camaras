import React, { Suspense, lazy, useCallback, useEffect } from 'react';
import BotonCompra from '@/componentes/BotonCompra';
import CarruselInicio from './componentes_inicio/CarruselInicio.tsx';
import HeaderInicio from './componentes_inicio/headerinicio.tsx'; 



// Importa las imágenes
import imagen1 from '@/assets/1.webp';
import imagen2 from '@/assets/2.webp';
import imagen3 from '@/assets/3.webp';
import imagen4 from '@/assets/4.webp';

const images = [imagen1, imagen2, imagen3, imagen4];

const HeroHeader = lazy(() => import('@/componentes/HeroHeader'));

const headerImage = 'ruta/a/la/imagen-optimizada.jpg';

const Inicio: React.FC = () => {
  // Precarga del componente
  useEffect(() => {
    import('@/componentes/HeroHeader');
  }, []);

  const abrirModal = useCallback(() => {
    console.log('Modal abierto');
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
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
      </Suspense>
      <CarruselInicio images={images} interval={5000} showDots={true} showArrows={true} autoPlay={true} />
      <HeaderInicio /> {/* Usa el componente aquí */}
      <CarruselInicio images={images} interval={5000} showDots={true} showArrows={true} autoPlay={true} />

    </div>
  );
};

export default React.memo(Inicio);