import React from 'react';

interface TotalProps {
  total: number;
  onClose: () => void;
}



const Total: React.FC<TotalProps> = ({ total, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Total de la compra</h2>
        <p>El total es: ${total.toFixed(2)}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Total;
