// precios.tsx
import React from 'react';
import { usePrice } from './PriceContext';

const Precios: React.FC = () => {
  const { prices, updatePrice, deletePrice } = usePrice();

  const handleUpdatePrice = (key: string, newPrice: string) => {
    const numericPrice = parseFloat(newPrice);
    if (!isNaN(numericPrice)) {
      updatePrice(key, numericPrice);
    } else {
      alert('Por favor, ingresa un número válido.');
    }
  };

  const handleDeletePrice = (key: string) => {
    deletePrice(key);
  };

  return (
    <div>
      <h2>Administrar Precios</h2>
      {Object.keys(prices).map((key) => (
        <div key={key}>
          <span>{key}: ${prices[key]}</span>
          <input
            type="number"
            placeholder="Nuevo precio"
            onBlur={(e) => handleUpdatePrice(key, e.target.value)}
          />
          <button onClick={() => handleDeletePrice(key)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Precios;