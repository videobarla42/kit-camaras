import React from 'react';
import './HeroHeader.css'; // Importa los estilos CSS

// Definimos las props del HeroHeader
interface HeroHeaderProps {
  imagen: string; // Ruta de la imagen estática
  titulo: string; // Título del header
  descripcion: string; // Descripción del header
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ imagen, titulo, descripcion }) => {
  return (
    <div className="hero-header">
      {/* Título */}
      <h1 className="hero-title">{titulo}</h1>

      {/* Imagen estática */}
      <img
        src={imagen}
        alt="Header"
        className="hero-image"
      />

      {/* Descripción */}
      <p className="hero-description">{descripcion}</p>
    </div>
  );
};

export default HeroHeader;