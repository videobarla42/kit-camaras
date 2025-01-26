import React from 'react';

// Definimos las props del botón
interface BotonCompraProps {
  texto: string; // Texto que se muestra en el botón
  onClick: () => void; // Función que se ejecuta al hacer clic
  color?: string; // Color de fondo del botón (opcional)
  tamaño?: 'pequeño' | 'mediano' | 'grande'; // Tamaño del botón (opcional)
  deshabilitado?: boolean; // Si el botón está deshabilitado (opcional)
}

const BotonCompra: React.FC<BotonCompraProps> = ({
  texto,
  onClick,
  color = '#007bff', // Color por defecto (azul)
  tamaño = 'mediano', // Tamaño por defecto
  deshabilitado = false, // Por defecto no está deshabilitado
}) => {
  // Estilos base del botón
  const estiloBase: React.CSSProperties = {
    backgroundColor: color,
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: deshabilitado ? 'not-allowed' : 'pointer',
    opacity: deshabilitado ? 0.6 : 1,
    transition: 'background-color 0.3s ease',
  };

  // Estilos según el tamaño
  const estilosTamaño = {
    pequeño: { padding: '8px 16px', fontSize: '14px' },
    mediano: { padding: '12px 24px', fontSize: '16px' },
    grande: { padding: '16px 32px', fontSize: '18px' },
  };

  // Combinar estilos
  const estiloBoton = {
    ...estiloBase,
    ...estilosTamaño[tamaño],
  };

  return (
    <button
      style={estiloBoton}
      onClick={onClick}
      disabled={deshabilitado}
    >
      {texto}
    </button>
  );
};

export default BotonCompra;