import React, { useState } from 'react';
import Carrusel from '@/componentes/Carrusel';
import BotonCompra from '@/componentes/BotonCompra';
import HeroHeader from '@/componentes/HeroHeader';
import Header from '@/componentes/Header';

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
import headerImage from '@/assets/1.png';

const Kit4Camaras: React.FC = () => {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    console.log('Abriendo modal...'); // Verifica si esta función se ejecuta
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  const headerLinks = [
    { to: '/', text: 'Inicio' },
    { to: '/kit_4', text: 'Acerca de' },
  ];

  const carruseles = [
    {
      title: 'Carrusel 1',
      description: 'Este es el primer carrusel con imágenes de cámaras.',
      images: [imagen1, imagen2, imagen3],
    },
    {
      title: 'Carrusel 2',
      description: 'Este es el segundo carrusel con más imágenes de cámaras.',
      images: [imagen4, imagen5, imagen6],
    },
    {
      title: 'Carrusel 3',
      description: 'Este es el tercer carrusel con imágenes adicionales.',
      images: [imagen7, imagen8, imagen9],
    },
  ];

  const handleConfirmarCompra = (data: {
    nombre: string;
    telefono: string;
    direccion: string;
    barrio: string;
    ciudad: string;
  }) => {
    console.log('Datos de la compra:', data);
    alert('Compra confirmada y datos guardados');
  };

  return (
    <div>
      <Header links={headerLinks} extraMessage="Pago Contraentrega + Envio Gratis!" />
      <HeroHeader
        imagen={headerImage}
        titulo="Acerca de los Kits de Cámaras"
        subtitulo="Subtítulo del Kit de Cámaras" // Agrega el subtítulo
        descripcion="Información sobre los Kits de Cámaras."
      >
        {/* Agrega el botón de compra aquí */}
        <BotonCompra
          texto="Comprar ahora"
          onClick={abrirModal}
          color="#28a745"
          tamaño="mediano"
        />
      </HeroHeader>

      {carruseles.map((carrusel, index) => (
        <div key={index} style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h2>{carrusel.title}</h2>
          <Carrusel images={carrusel.images} />
          <BotonCompra
            texto="Comprar ahora"
            onClick={abrirModal} // Usa la función abrirModal
            color="#28a745"
            tamaño="mediano"
          />
          <p>{carrusel.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Kit4Camaras;