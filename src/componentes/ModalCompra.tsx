import React from 'react';
import './ModalCompra.css'; // Asegúrate de que la ruta sea correcta

interface ModalCompraProps {
  onClose: () => void;
  onConfirm: () => void;
  nombre: string;
  setNombre: (value: string) => void;
  telefono: string;
  setTelefono: (value: string) => void;
  direccion: string;
  setDireccion: (value: string) => void;
  ciudadYBarrio: string;
  setCiudadYBarrio: (value: string) => void;
  abrirWhatsApp: () => void;
  hacerLlamada: () => void;
  horariosEntrega: string;
}

const ModalCompra: React.FC<ModalCompraProps> = ({
  onClose,
  onConfirm,
  nombre,
  setNombre,
  telefono,
  setTelefono,
  direccion,
  setDireccion,
  ciudadYBarrio,
  setCiudadYBarrio,
  abrirWhatsApp,
  hacerLlamada,
  horariosEntrega,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="cerrar-modal" onClick={onClose}>
          &times;
        </button>

        <div className="titulo-con-icono">
          <h2>Confirma la Compra del kit de 4 cámaras con inteligencia artificial</h2>
          <p>
            complete el formulario para hacer llegar el pedido a su domicilio.
            Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de \$780,000. ¡Domicilio gratis!
            Realizamos una llamada de confirmación para verificar la dirección y la disponibilidad de los equipos. ¡Entrega inmediata!
          </p>
        </div>

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="modal-input"
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="modal-input"
        />
        <input
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          className="modal-input"
        />
        <input
          type="text"
          placeholder="Ciudad y Barrio"
          value={ciudadYBarrio}
          onChange={(e) => setCiudadYBarrio(e.target.value)}
          className="modal-input"
        />

        <div className="modal-botones">
          <button className="confirmar" onClick={onConfirm}>
            Confirmar Compra
          </button>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button className="whatsapp-button" onClick={abrirWhatsApp}>
            WhatsApp
          </button>
          <button className="llamar-button" onClick={hacerLlamada}>
            Llamar
          </button>
        </div>

        <div className="horarios-entrega">
          <p>{horariosEntrega}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalCompra;