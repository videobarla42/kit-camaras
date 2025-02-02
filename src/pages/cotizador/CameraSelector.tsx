import { useState } from 'react';
import React from 'react';
import Total from './Total';
import { Trash2, Plus } from 'lucide-react';
import "../cotizador/CameraSelector.css";
import ExplicacionKitCamaras from './ExplicacionKitCamaras'; // Asegúrate de que la ruta sea correcta
import EscojerCamaras from './EscojerCamaras'; // Asegúrate de que la ruta sea correcta



interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CameraSelectorProps {
  onAddToCart: (product: Product, quantity: number, type: 'camera' | 'dvr') => void;
}

import cam1Image from "../../assets/1.webp";
import cam2Image from "../../assets/2.webp";
import dvr1Image from "../../assets/1.webp";
import dvr2Image from "../../assets/2.webp";

const cameras: Product[] = [
  { id: 1, name: 'Cámara 1', price: 700, image: cam1Image },
  { id: 2, name: 'Cámara 2', price: 200, image: cam2Image },
];

const dvrs: Product[] = [
  { id: 3, name: 'DVR 1', price: 300, image: dvr1Image },
  { id: 4, name: 'DVR 2', price: 500, image: dvr2Image },
];

const CameraSelector: React.FC<CameraSelectorProps> = ({ onAddToCart }) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isDvrOpen, setIsDvrOpen] = useState(false);
  const [showTotalModal, setShowTotalModal] = useState(false);
  const [selectedCameras, setSelectedCameras] = useState<Array<{ product: Product, quantity: number }>>([]);
  const [selectedDvrs, setSelectedDvrs] = useState<Array<{ product: Product, quantity: number }>>([]);

  const handleAddToCart = () => {
    [...selectedCameras, ...selectedDvrs].forEach(({ product, quantity }) => {
      onAddToCart(product, quantity, product.id <= 2 ? 'camera' : 'dvr');
    });
    setShowTotalModal(true);
  };

  const handleSelectCamera = (camera: Product) => {
    setSelectedCameras([...selectedCameras, { product: camera, quantity: 1 }]);
    setIsCameraOpen(false);
  };

  const handleSelectDvr = (dvr: Product) => {
    setSelectedDvrs([...selectedDvrs, { product: dvr, quantity: 1 }]);
    setIsDvrOpen(false);
  };

  const handleDeleteCamera = (index: number) => {
    setSelectedCameras(selectedCameras.filter((_, i) => i !== index));
  };

  const handleDeleteDvr = (index: number) => {
    setSelectedDvrs(selectedDvrs.filter((_, i) => i !== index));
  };

  const updateCameraQuantity = (index: number, quantity: number) => {
    const newCameras = [...selectedCameras];
    newCameras[index].quantity = Math.max(1, quantity);
    setSelectedCameras(newCameras);
  };

  const updateDvrQuantity = (index: number, quantity: number) => {
    const newDvrs = [...selectedDvrs];
    newDvrs[index].quantity = Math.max(1, quantity);
    setSelectedDvrs(newDvrs);
  };

  const calculateTotal = () => {
    const cameraTotal = selectedCameras.reduce((sum, { product, quantity }) =>
      sum + product.price * quantity, 0);
    const dvrTotal = selectedDvrs.reduce((sum, { product, quantity }) =>
      sum + product.price * quantity, 0);
    return cameraTotal + dvrTotal;
  };

  return (
    
    
    <div className="camera-selector p-4">
            <ExplicacionKitCamaras /> 
            <EscojerCamaras />

      {/* Mostrar título solo si no hay cámaras seleccionadas */}
      {selectedCameras.length === 0 && <h2>Selecciona los equipos y materiales que necesite.  </h2>}

      <div className="custom-select relative mb-4">
      <button 
  onClick={() => setIsCameraOpen(!isCameraOpen)}
  className="add-camera-button"
>
  <span>Agregue cámaras     </span>
  <i className="fas fa-plus add-icon"></i> {/* Icono de agregar */}
</button>


        {isCameraOpen && (
          <div className="options-list absolute bg-white border mt-1 z-10">
            {cameras.map((camera) => (
              <div
                key={camera.id}
                className="option-item flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectCamera(camera)}
              >
                <img 
                  src={camera.image} 
                  alt={camera.name}
                  className="flex-shrink-0"
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="ml-2">
                  <div>{camera.name}</div>
                  <div>${camera.price}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedCameras.map((item, index) => (
        <div key={index} className="selected-item">
          <div className="image-container">
            <img 
              src={item.product.image} 
              alt={item.product.name}
              loading="lazy"
            />
          </div>

          <div className="details-container">
            <div className="description">
              <div>{item.product.name}</div>
              <div>${item.product.price}</div>
            </div>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateCameraQuantity(index, Number(e.target.value))}
              min={1}
              className="quantity-input"
            />
            <span>Total: ${item.product.price * item.quantity}</span>
            <button 
              onClick={() => handleDeleteCamera(index)}
              className="delete-button"
            >
              <Trash2 className="trash-icon" />
            </button>
          </div>
        </div>
      ))}

      <h2 className="mt-8"></h2>

      <div className="custom-select relative mb-4">
      <button 
  onClick={() => setIsDvrOpen(!isDvrOpen)}
  className="select-dvr-button"
>
  <span>Agregar DVR</span>
  <i className="fas fa-caret-down caret-icon"></i> {/* Icono de caret hacia abajo */}
</button>


        {isDvrOpen && (
          <div className="options-list absolute bg-white border mt-1 z-10">
            {dvrs.map((dvr) => (
              <div
                key={dvr.id}
                className="option-item flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectDvr(dvr)}
              >
                <img 
                  src={dvr.image} 
                  alt={dvr.name}
                  className="flex-shrink-0"
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="ml-2">
                  <div>{dvr.name}</div>
                  <div>${dvr.price}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedDvrs.map((item, index) => (
        <div key={index} className="selected-item">
          <div className="image-container">
            <img 
              src={item.product.image} 
              alt={item.product.name}
              loading="lazy"
            />
          </div>

          <div className="details-container">
            <div className="description">
              <div>{item.product.name}</div>
              <div>${item.product.price}</div>
            </div>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateDvrQuantity(index, Number(e.target.value))}
              min={1}
              className="quantity-input"
            />
            <span>Total: ${item.product.price * item.quantity}</span>
            <button 
              onClick={() => handleDeleteDvr(index)}
              className="delete-button"
            >
              <Trash2 className="trash-icon" />
            </button>
          </div>
        </div>
      ))}

<div className="fixed-footer">
  <div className="total-section">
    <strong>Total general a pagar: ${calculateTotal()}</strong>
  </div>
  <button 
    onClick={handleAddToCart}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
  >
    Agregar al carrito
  </button>
</div>


      {showTotalModal && (
        <Total total={calculateTotal()} onClose={() => setShowTotalModal(false)} />
      )}
    </div>
    
  );
  
};

export default CameraSelector;
