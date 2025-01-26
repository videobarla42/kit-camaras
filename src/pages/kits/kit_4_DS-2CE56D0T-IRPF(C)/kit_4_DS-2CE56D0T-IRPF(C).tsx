import React from 'react';
import Carrusel from '@/componentes/Carrusel';
import BotonCompra from '@/componentes/BotonCompra';
import HeroHeader from '@/componentes/HeroHeader'; // Importar el componente HeroHeader
import Header from '@/componentes/Header'; // Importar el componente Header

// Importar imágenes locales
import imagen1 from '@/assets/1.png';
import imagen2 from '@/assets/2.png';
import imagen3 from '@/assets/3.png';
import imagen4 from '@/assets/4.png';
import imagen5 from '@/assets/5.png';
import imagen6 from '@/assets/6.png';
import imagen7 from '@/assets/7.png';
import imagen8 from '@/assets/8.png';
import imagen9 from '@/assets/9.png';
import headerImage from '@/assets/1.png'; // Imagen estática para el header

const kit_4_DS_2CE56D0T_IRPF_C: React.FC = () => {
  // Array de objetos, cada uno representa un carrusel con título, descripción e imágenes
  const carruseles = [
    {
      title: 'Carrusel 1',
      description: 'Este es el primer carrusel con imágenes de cámaras.',
      images: [imagen1, imagen2, imagen3], // Imágenes locales
    },
    {
      title: 'Carrusel 2',
      description: 'Este es el segundo carrusel con más imágenes de cámaras.',
      images: [imagen4, imagen5, imagen6], // Imágenes locales
    },
    {
      title: 'Carrusel 3',
      description: 'Este es el tercer carrusel con imágenes adicionales.',
      images: [imagen7, imagen8, imagen9], // Imágenes locales
    },
  ];

  // Función que se ejecuta al hacer clic en el botón de compra
  const handleCompra = (titulo: string) => {
    alert(`Has comprado el producto: ${titulo}`);
  };

  return (
    <div>
      {/* Componente Header */}
      <Header />

      {/* Componente HeroHeader */}
      <HeroHeader
        imagen={headerImage} // Ruta de la imagen estática
        titulo="Acerca de los Kits de Cámaras"
        descripcion="Información sobre los Kits de Cámaras."
      />

      {/* Mapeamos el array de carruseles */}
      {carruseles.map((carrusel, index) => (
        <div key={index} style={{ marginBottom: '40px', textAlign: 'center' }}>
          {/* Título del carrusel */}
          <h2>{carrusel.title}</h2>

          {/* Componente Carrusel con las imágenes */}
          <Carrusel images={carrusel.images} />

          {/* Botón de compra */}
          <BotonCompra
            texto="Comprar ahora"
            onClick={() => handleCompra(carrusel.title)}
            color="#28a745" // Verde
            tamaño="mediano"
          />

          {/* Descripción del carrusel */}
          <p>{carrusel.description}</p>
        </div>
      ))}
    </div>
  );
};

export default kit_4_DS_2CE56D0T_IRPF_C;