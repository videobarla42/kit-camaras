import React from 'react';
import './ModalCompra.css'; // Asegúrate de que la ruta sea correcta

interface ModalCompraProps {
  onClose: () => void;
  onConfirm: () => Promise<void>;
  nombre: string;
  setNombre: React.Dispatch<React.SetStateAction<string>>;
  telefono: string;
  setTelefono: React.Dispatch<React.SetStateAction<string>>;
  direccion: string;
  setDireccion: React.Dispatch<React.SetStateAction<string>>;
  ciudadYBarrio: string;
  setCiudadYBarrio: React.Dispatch<React.SetStateAction<string>>;
  abrirWhatsApp: () => void;
  hacerLlamada: () => void;
  horariosEntrega: string;
  tituloModal: string;
  descripcionModal: string; // Nueva propiedad para el texto personalizado
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
  tituloModal,
  descripcionModal, // Usar la nueva propiedad
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="cerrar-modal" onClick={onClose}>
          &times;
        </button>

        <div className="titulo-con-icono">
          <h2>{tituloModal}</h2>
          <p>{descripcionModal}</p> {/* Mostrar el texto personalizado */}
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
