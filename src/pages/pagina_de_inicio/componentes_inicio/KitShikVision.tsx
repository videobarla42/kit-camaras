import React from 'react';
import img35 from '../../../assets/35.webp';
import img36 from '../../../assets/36.webp';
import img37 from '../../../assets/37.webp';
import img38 from '../../../assets/38.webp';
import img39 from '../../../assets/39.webp';
import img41 from '../../../assets/41.webp';


const images = [img35, img36, img37, img38, img39, img41];

const KitShikVision: React.FC = () => {
  return (
    <div className="kit-slider">
    <div className="kit-slide-track">
      {images.concat(images).map((img, index) => (
        <div className="kit-slide" key={index}>
          <img src={img} alt={`Imagen ${index}`} />
        </div>
      ))}
    </div>
    <style>{`
      .kit-slider {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 220px; /* Ajusta la altura según tus imágenes */
      }
      .kit-slide-track {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: calc(210px * ${images.length * 2});
        animation: scroll 20s linear infinite reverse;
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
