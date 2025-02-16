import React from 'react';
import './KitShikVision.css'; // Aquí puedes tener otros estilos propios del carrusel

interface KitShikVisionProps {
  images: string[];
  direction?: 'left' | 'right';
}

const KitShikVision: React.FC<KitShikVisionProps> = ({ images, direction = 'left' }) => {
  return (
    <div className="kit-slider">
      <div className="kit-slide-track">
        {images.map((img, index) => (
          <div className="kit-slide" key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
        {/* Se puede duplicar el contenido si se requiere efecto de "infinito" */}
        {images.map((img, index) => (
          <div className="kit-slide" key={`dup-${index}`}>
            <img src={img} alt={`Slide duplicado ${index}`} />
          </div>
        ))}
      </div>
      <style>{`
        .kit-slider {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 220px;
        }
        .kit-slide-track {
          display: flex;
          width: calc(210px * ${images.length * 2});
          animation: scroll 20s linear infinite ${direction === 'right' ? 'reverse' : 'normal'};
        }
        .kit-slide {
          flex: none;
        }
        .kit-slide img {
          width: 200px;
          height: auto;
          margin-right: 10px;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default KitShikVision;
