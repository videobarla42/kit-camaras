import React, { useState } from 'react';
import { PriceProvider, usePrice } from './PriceContext';

const PriceManager: React.FC = () => {
  const { prices, updatePrice, deletePrice } = usePrice();
  const [newKey, setNewKey] = useState('');
  const [newPrice, setNewPrice] = useState<number | ''>('');

  const handleAddOrUpdatePrice = () => {
    if (newKey && newPrice !== '') {
      updatePrice(newKey, Number(newPrice));
      setNewKey('');
      setNewPrice('');
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gestión de Precios</h1>

      {/* Formulario para añadir o actualizar precios */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Clave del precio"
          value={newKey}
          onChange={(e) => setNewKey(e.target.value)}
          className="p-2 border rounded-md w-full mb-2"
        />
        <input
          type="number"
          placeholder="Nuevo precio"
          value={newPrice}
          onChange={(e) => setNewPrice(Number(e.target.value))}
          className="p-2 border rounded-md w-full mb-2"
        />
        <button
          onClick={handleAddOrUpdatePrice}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          {prices[newKey] ? 'Actualizar Precio' : 'Añadir Precio'}
        </button>
      </div>

      {/* Lista de precios */}
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="text-xl font-semibold mb-2">Precios actuales</h2>
        {Object.entries(prices).length > 0 ? (
          <ul>
            {Object.entries(prices).map(([key, price]) => (
              <li key={key} className="flex justify-between items-center py-2 border-b">
                <span>{key}: ${price}</span>
                <button
                  onClick={() => deletePrice(key)}
                  className="text-red-500 hover:underline"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay precios registrados.</p>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <PriceProvider>
    <PriceManager />
  </PriceProvider>
);

export default App;
