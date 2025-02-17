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
  
  /* ---------------------------------------------------------------------------
     Animación continua (auto-scroll)
  --------------------------------------------------------------------------- */
  const animate = (time: number) => {
    const dt = time - lastFrameTime.current;
    lastFrameTime.current = time;
    
    if (!isDragging && autoScrollActive.current) {
      setOffset((prev) => {
        let nuevo = prev + scrollDelta * (dt / 1000);
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
    e.preventDefault();
    setIsDragging(true);
    autoScrollActive.current = false;
    if ('touches' in e.nativeEvent) {
      pointerStart.current = e.nativeEvent.touches[0].clientX;
    } else {
      pointerStart.current = (e as React.MouseEvent).clientX;
    }
    offsetStart.current = offset;
    velocity.current = 0;
    lastFrameTime.current = performance.now();

    window.addEventListener('mousemove', handlePointerMove as any);
    window.addEventListener('mouseup', handlePointerUp as any);
    window.addEventListener('touchmove', handlePointerMove as any, { passive: false });
    window.addEventListener('touchend', handlePointerUp as any);
  };

  const handlePointerMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    let clientX: number;
    if (e instanceof TouchEvent) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const dx = clientX - pointerStart.current;
    const nuevoOffset = offsetStart.current + dx;
    setOffset(() => {
      let ajustado = nuevoOffset;
      if (direction === 'left') {
        while (ajustado > 0) ajustado -= totalWidth;
        while (ajustado <= -totalWidth) ajustado += totalWidth;
      } else {
        while (ajustado < -totalWidth) ajustado += totalWidth;
        while (ajustado >= 0) ajustado -= totalWidth;
      }
      return ajustado;
    });
    const now = performance.now();
    const dt = now - lastFrameTime.current;
    if (dt > 0) {
      velocity.current = dx / dt;
    }
    lastFrameTime.current = now;
  };

  const handlePointerUp = (e: MouseEvent | TouchEvent) => {
    setIsDragging(false);
    window.removeEventListener('mousemove', handlePointerMove as any);
    window.removeEventListener('mouseup', handlePointerUp as any);
    window.removeEventListener('touchmove', handlePointerMove as any);
    window.removeEventListener('touchend', handlePointerUp as any);

    let currentVelocity = velocity.current * 1000; // convertir a px/seg
    const friction = 0.95;
    const inercial = () => {
      if (Math.abs(currentVelocity) > 0.1) {
        setOffset(prev => {
          let nuevo = prev + currentVelocity * (16 / 1000);
          if (direction === 'left') {
            if (nuevo <= -totalWidth) nuevo += totalWidth;
            else if (nuevo > 0) nuevo -= totalWidth;
          } else {
            if (nuevo >= 0) nuevo -= totalWidth;
            else if (nuevo < -totalWidth) nuevo += totalWidth;
          }
          return nuevo;
        });
        currentVelocity *= friction;
        requestAnimationFrame(inercial);
      } else {
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
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
      style={{ userSelect: isDragging ? 'none' : 'auto' }}
    >
      <div
        className="kit-slide-track"
        style={{
          transform: `translateX(${offset}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out'
        }}
      >
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

      <button className="nav-arrow left-arrow" onClick={handlePrev}>
        ◀
      </button>
      <button className="nav-arrow right-arrow" onClick={handleNext}>
        ▶
      </button>

      <div className="dot-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default KitShikVision;
