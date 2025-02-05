// prueba.tsx
import React from 'react';
import { usePrice } from '@/componentes/PriceContext';

const Prueba: React.FC = () => {
  // Extraemos el objeto 'prices' desde el contexto
  const { prices } = usePrice();

  return (
    <div>
      <h2>Precio del Componente B</h2>
      <p>${prices['B'] || 'No definido'}</p>
    </div>
  );
};

export default Prueba;
