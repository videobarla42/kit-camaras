import React from 'react';

// Definimos las props del HeroHeader
interface HeroHeaderProps {
  imagen: string; // Ruta de la imagen estática
  titulo: string; // Título del header
  descripcion: string; // Descripción del header
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ imagen, titulo, descripcion }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      {/* Título */}
      <h1>{titulo}</h1>

      {/* Imagen estática */}
      <img
        src={imagen}
        alt="Header"
        style={{ width: '100%', maxWidth: '800px', borderRadius: '15px', margin: '20px 0' }}
      />

      {/* Descripción */}
      <p>{descripcion}</p>
    </div>
  );
};

export default HeroHeader;