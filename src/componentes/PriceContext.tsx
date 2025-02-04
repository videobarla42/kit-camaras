// PriceContext.tsx
import React, { createContext, useState, useContext } from 'react';

interface PriceContextType {
  prices: { [key: string]: number };
  updatePrice: (key: string, newPrice: number) => void;
  deletePrice: (key: string) => void;
}

const PriceContext = createContext<PriceContextType | undefined>(undefined);

export const PriceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [prices, setPrices] = useState<{ [key: string]: number }>({
    B: 0, // Valor predeterminado para 'B'
  });

  const updatePrice = (key: string, newPrice: number) => {
    setPrices((prevPrices) => ({
      ...prevPrices,
      [key]: newPrice,
    }));
  };

  const deletePrice = (key: string) => {
    setPrices((prevPrices) => {
      const updatedPrices = { ...prevPrices };
      delete updatedPrices[key];
      return updatedPrices;
    });
  };

  return (
    <PriceContext.Provider value={{ prices, updatePrice, deletePrice }}>
      {children}
    </PriceContext.Provider>
  );
};

export const usePrice = () => {
  const context = useContext(PriceContext);
  if (!context) {
    throw new Error('usePrice debe ser usado dentro de un PriceProvider');
  }
  return context;
};