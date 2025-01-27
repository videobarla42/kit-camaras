import React from 'react';

interface BotonCompraProps {
  texto: string;
  onClick: () => void;
  color?: string;
  tamaño?: 'pequeño' | 'mediano' | 'grande';
  deshabilitado?: boolean;
}

const BotonCompra: React.FC<BotonCompraProps> = ({ texto, onClick, color, tamaño, deshabilitado }) => {
  return (
    <button
      className={`boton-compra ${tamaño}`}
      onClick={onClick}
      style={{ backgroundColor: color }}
      disabled={deshabilitado}
    >
      {texto}
    </button>
  );
};

export default BotonCompra;