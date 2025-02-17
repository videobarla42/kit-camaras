import React from 'react';
import './KitShikVision.css'; // Aquí puedes tener otros estilos propios del carrusel

interface KitShikVisionProps {
  images: string[];
  links?: string[]; // Nuevo prop opcional para enlaces
  direction?: 'left' | 'right';
}

const KitShikVision: React.FC<KitShikVisionProps> = ({ images, links = [], direction = 'left' }) => {
  return (
    <div className="kit-slider" style={direction === 'right' ? { transform: 'scaleX(-1)' } : {}}>
      <div className="kit-slide-track">
        {images.map((img, index) => (
          <div className="kit-slide" key={index} style={direction === 'right' ? { transform: 'scaleX(-1)' } : {}}>
            <a href={links[index] || '#'} target="_blank" rel="noopener noreferrer">
              <img src={img} alt={`Slide ${index}`} />
            </a>
          </div>
        ))}
        {images.map((img, index) => (
          <div className="kit-slide" key={`dup-${index}`} style={direction === 'right' ? { transform: 'scaleX(-1)' } : {}}>
            <a href={links[index] || '#'} target="_blank" rel="noopener noreferrer">
              <img src={img} alt={`Slide duplicado ${index}`} />
            </a>
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
          animation: scroll 350s linear infinite;
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
          cursor: pointer; /* Indica que la imagen es clickeable */
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