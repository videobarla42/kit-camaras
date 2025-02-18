import React, { useState, useEffect, useRef } from 'react';
import './KitShikVision.css';

interface KitShikVisionProps {
  images: string[];
  links?: string[];
  direction?: 'left' | 'right';
}

const KitShikVision: React.FC<KitShikVisionProps> = ({
  images,
  links = [],
  direction = 'left'
}) => {
  // Parámetros fijos: ancho de imagen + margen (200px + 10px)
  const slideWidth = 210;
  const totalWidth = slideWidth * images.length; // ancho de un bloque de imágenes

  /* ---------------------------------------------------------------------------
     Estados y refs para el auto-scroll y la interacción del usuario
  --------------------------------------------------------------------------- */
  // Para el scroll infinito, usaremos dos copias de las imágenes
  const [offset, setOffset] = useState<number>(direction === 'left' ? 0 : -totalWidth);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Calcula la velocidad automática (en px/seg). La animación original tardaba 350s en recorrer totalWidth.
  const autoScrollSpeed = totalWidth / 350;
  // Según la dirección, el delta será negativo (mover a la izquierda) o positivo (mover a la derecha)
  const scrollDelta = direction === 'left' ? -autoScrollSpeed : autoScrollSpeed;

  // Control del auto-scroll (se pausa al interactuar)
  const autoScrollActive = useRef<boolean>(true);
  // Para la animación con requestAnimationFrame
  const lastFrameTime = useRef<number>(performance.now());
  const animationFrameId = useRef<number | null>(null);
  // Para retomar el auto-scroll tras la interacción
  const resumeTimeoutId = useRef<number | null>(null);

  // Para el drag/arrastre
  const pointerStart = useRef<number>(0);
  const offsetStart = useRef<number>(offset);
  // Se estima la velocidad del arrastre (px/ms)
  const velocity = useRef<number>(0);
  const lastMovePosition = useRef<number>(0);
  
  /* ---------------------------------------------------------------------------
     Animación continua (auto-scroll)
  --------------------------------------------------------------------------- */
  const animate = (time: number) => {
    const dt = time - lastFrameTime.current;
    lastFrameTime.current = time;
    
    // Si no se está arrastrando y el auto-scroll está activo, se actualiza el offset
    if (!isDragging && autoScrollActive.current) {
      setOffset((prev) => {
        let nuevo = prev + scrollDelta * (dt / 1000);
        // Ajuste para el loop infinito:
        if (direction === 'left') {
          if (nuevo <= -totalWidth) {
            nuevo += totalWidth;
          }
        } else {
          if (nuevo >= 0) {
            nuevo -= totalWidth;
          }
        }
        return nuevo;
      });
    }
    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    lastFrameTime.current = performance.now();
    animationFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      if (resumeTimeoutId.current) clearTimeout(resumeTimeoutId.current);
    };
  }, [isDragging, scrollDelta, totalWidth]);

  /* ---------------------------------------------------------------------------
     Handlers para arrastre (drag/touch)
  --------------------------------------------------------------------------- */
  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    // Evitamos comportamientos por defecto (por ejemplo, scrolling de página)
    e.preventDefault();
    setIsDragging(true);
    autoScrollActive.current = false;
    // Registramos la posición de inicio (soporta mouse o touch)
    if ('touches' in e.nativeEvent) {
      pointerStart.current = e.nativeEvent.touches[0].clientX;
      lastMovePosition.current = e.nativeEvent.touches[0].clientX;
    } else {
      pointerStart.current = (e as React.MouseEvent).clientX;
      lastMovePosition.current = (e as React.MouseEvent).clientX;
    }
    offsetStart.current = offset;
    velocity.current = 0;
    lastFrameTime.current = performance.now();

    // Agregamos listeners al documento para poder detectar movimientos fuera del componente
    window.addEventListener('mousemove', handlePointerMove as any);
    window.addEventListener('mouseup', handlePointerUp as any);
    window.addEventListener('touchmove', handlePointerMove as any, { passive: false });
    window.addEventListener('touchend', handlePointerUp as any);
  };

  const handlePointerMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    
    // Prevenir el desplazamiento de página
    e.preventDefault();
    
    let clientX: number;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    
    const now = performance.now();
    const dt = now - lastFrameTime.current;

    // Calcular la velocidad solo si ha pasado tiempo suficiente
    if (dt > 10) { // Evitar divisiones por números muy pequeños
      velocity.current = (clientX - lastMovePosition.current) / dt;
      lastFrameTime.current = now;
      lastMovePosition.current = clientX;
    }
    
    const dx = clientX - pointerStart.current;
    const nuevoOffset = offsetStart.current + dx;
  
    setOffset(() => {
      let ajustado = nuevoOffset;
      if (direction === 'left') {
        while (ajustado > 0) ajustado -= totalWidth;
        while (ajustado <= -totalWidth) ajustado += totalWidth;
      } else {
        while (ajustado >= 0) ajustado -= totalWidth;
        while (ajustado < -totalWidth) ajustado += totalWidth;
      }
      return ajustado;
    });
  };
  
  const handlePointerUp = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    
    setIsDragging(false);
  
    window.removeEventListener('mousemove', handlePointerMove as any);
    window.removeEventListener('mouseup', handlePointerUp as any);
    window.removeEventListener('touchmove', handlePointerMove as any);
    window.removeEventListener('touchend', handlePointerUp as any);
  
    // Utilizamos velocity.current para determinar la dirección y magnitud del movimiento inercial
    let currentVelocity = velocity.current * 1000; // Convertir a px/s
    
    // Limitar la velocidad máxima para evitar movimientos extremos
    const maxVelocity = 2000; // px/s
    if (Math.abs(currentVelocity) > maxVelocity) {
      currentVelocity = Math.sign(currentVelocity) * maxVelocity;
    }
    
    const friction = 0.95;
  
    const inercial = () => {
      if (Math.abs(currentVelocity) > 0.1) {
        setOffset((prev) => {
          let nuevo = prev + currentVelocity * (16 / 1000);
          if (direction === 'left') {
            if (nuevo > 0) nuevo -= totalWidth;
            if (nuevo <= -totalWidth) nuevo += totalWidth;
          } else {
            if (nuevo >= 0) nuevo -= totalWidth;
            if (nuevo < -totalWidth) nuevo += totalWidth;
          }
          return nuevo;
        });
        currentVelocity *= friction;
        requestAnimationFrame(inercial);
      } else {
        // Una vez que la inercia termina, alinear al slide más cercano
        setOffset(prev => {
          const slideIndex = Math.round(-prev / slideWidth);
          return -slideIndex * slideWidth;
        });
        
        if (resumeTimeoutId.current) clearTimeout(resumeTimeoutId.current);
        resumeTimeoutId.current = window.setTimeout(() => {
          autoScrollActive.current = true;
        }, 2000);
      }
    };
    inercial();
  };

  /* ---------------------------------------------------------------------------
     Controles: flechas y puntos
  --------------------------------------------------------------------------- */
  const handlePrev = () => {
    autoScrollActive.current = false;
    // Al hacer clic se desplaza un slide (hacia la derecha)
    setOffset(prev => {
      let nuevo = prev + slideWidth;
      if (direction === 'left') {
        if (nuevo > 0) nuevo -= totalWidth;
      } else {
        if (nuevo < -totalWidth) nuevo += totalWidth;
      }
      return nuevo;
    });
    if (resumeTimeoutId.current) clearTimeout(resumeTimeoutId.current);
    resumeTimeoutId.current = window.setTimeout(() => {
      autoScrollActive.current = true;
    }, 2000);
  };

  const handleNext = () => {
    autoScrollActive.current = false;
    // Desplaza un slide (hacia la izquierda)
    setOffset(prev => {
      let nuevo = prev - slideWidth;
      if (direction === 'left') {
        if (nuevo <= -totalWidth) nuevo += totalWidth;
      } else {
        if (nuevo >= 0) nuevo -= totalWidth;
      }
      return nuevo;
    });
    if (resumeTimeoutId.current) clearTimeout(resumeTimeoutId.current);
    resumeTimeoutId.current = window.setTimeout(() => {
      autoScrollActive.current = true;
    }, 2000);
  };

  const handleDotClick = (index: number) => {
    autoScrollActive.current = false;
    if (direction === 'left') {
      setOffset(-index * slideWidth);
    } else {
      setOffset(-totalWidth + index * slideWidth);
    }
    if (resumeTimeoutId.current) clearTimeout(resumeTimeoutId.current);
    resumeTimeoutId.current = window.setTimeout(() => {
      autoScrollActive.current = true;
    }, 2000);
  };

  /* ---------------------------------------------------------------------------
     Cálculo del índice activo (para resaltar el punto correspondiente)
  --------------------------------------------------------------------------- */
  useEffect(() => {
    let currentIndex: number;
    if (direction === 'left') {
      currentIndex = Math.round(-offset / slideWidth) % images.length;
    } else {
      currentIndex = Math.round((offset + totalWidth) / slideWidth) % images.length;
    }
    if (currentIndex < 0) currentIndex += images.length;
    setActiveIndex(currentIndex);
  }, [offset, slideWidth, images.length, direction, totalWidth]);

  /* ---------------------------------------------------------------------------
     Renderizado del componente
  --------------------------------------------------------------------------- */
  return (
    <div
      className="kit-slider"
      onMouseDown={handlePointerDown as any}
      onTouchStart={handlePointerDown as any}
      style={{ userSelect: isDragging ? 'none' : 'auto' }}
    >
      <div
        className="kit-slide-track"
        style={{
          transform: `translateX(${offset}px)`,
          // Durante el arrastre se deshabilita la transición para mayor control
          transition: isDragging ? 'none' : 'transform 0.3s ease-out'
        }}
      >
        {/* Se renderizan dos copias para lograr el loop infinito */}
        {[...images, ...images].map((img, index) => (
          <div className="kit-slide" key={index}>
            <a
              href={links[index % images.length] || '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img} alt={`Slide ${index % images.length}`} />
            </a>
          </div>
        ))}
      </div>

      {/* Flechas de navegación */}
      <button className="nav-arrow left-arrow" onClick={handlePrev}>
        ❮
      </button>
      <button className="nav-arrow right-arrow" onClick={handleNext}>
        ❯
      </button>

      {/* Indicadores (puntos) */}
      <div className="dot-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>

      {/* Estilos internos */}
      <style>{`
        .kit-slider {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 220px;
          touch-action: none; /* Previene comportamientos táctiles nativos */
        }
        .kit-slide-track {
          display: flex;
          will-change: transform;
        }
        .kit-slide {
          flex: none;
        }
        .kit-slide a {
          display: block;
        }
        .kit-slide img {
          width: 200px;
          height: auto;
          margin-right: 10px;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .kit-slide img:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.7);
          border: none;
          padding: 10px;
          cursor: pointer;
          font-size: 18px;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          z-index: 10;
        }
        .left-arrow {
          left: 10px;
        }
        .right-arrow {
          right: 10px;
        }
        .dot-indicators {
          position: absolute;
          bottom: 10px;
          width: 100%;
          text-align: center;
          z-index: 10;
        }
        .dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          margin: 0 5px;
          background: rgba(255,255,255,0.7);
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
        }
        .dot.active {
          background: rgba(0,0,0,0.7);
          transform: scale(1.2);
        }
          
      `}</style>
    </div>
  );
};

export default KitShikVision;