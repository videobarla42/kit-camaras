import React, { useEffect } from 'react';
import './BotonCompra.css'; // Asegúrate de importar el archivo CSS

interface BotonCompraProps {
  texto: string;
  onClick: () => void;
  color?: string;
  tamaño?: 'pequeño' | 'mediano' | 'grande';
  deshabilitado?: boolean;
  className?: string; // ✅ Agregar className opcionalmente
}

const BotonCompra: React.FC<BotonCompraProps> = ({ texto, onClick, color, tamaño, deshabilitado }) => {
  // Efecto para activar la animación después de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      const botonCompra = document.querySelector('.boton-compra');
      if (botonCompra) {
        botonCompra.classList.add('cargado');
      }
    }, 2000); // 2000 milisegundos = 2 segundos

    return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
  }, []);

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