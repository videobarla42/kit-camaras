import { useState } from 'react';

const useModalCompra = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudadYBarrio, setCiudadYBarrio] = useState('');

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  const confirmarCompra = async () => {
    try {
      console.log('Compra confirmada y datos guardados');
      cerrarModal();
    } catch (error) {
      console.error('Error al confirmar la compra:', error);
      alert('Error al confirmar la compra');
    }
  };

  return {
    modalAbierto,
    abrirModal,
    cerrarModal,
    confirmarCompra,
    nombre,
    setNombre,
    telefono,
    setTelefono,
    direccion,
    setDireccion,
    ciudadYBarrio,
    setCiudadYBarrio,
  };
};

export default useModalCompra;
