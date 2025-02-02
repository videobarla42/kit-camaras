import React, { useState } from 'react';
import './ExplicacionKitCamaras.css'; // Asegúrate de que el archivo CSS esté en el mismo directorio o ajusta la ruta

const ExplicacionKitCamaras = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="explicacion-kit-camaras">
      {/* Botón para abrir el modal */}
      <button className="explicacion-btn" onClick={openModal}>
        ¿Qué incluye un kit de cámaras?
      </button>

      {/* Modal de descripción */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Componentes de un Kit de Cámaras Análogas</h2>
            <p>Un kit de cámaras análogas generalmente incluye los siguientes componentes:</p>
            <ul>
              <li><strong>Cámaras de seguridad:</strong> Cámaras con lentes fijos o varifocales para captar video en tiempo real.</li>
              <li><strong>Cable coaxial:</strong> Cable utilizado para conectar las cámaras a un DVR para transmisión de video.</li>
              <li><strong>Grabadora DVR:</strong> Dispositivo para grabar y gestionar las imágenes de las cámaras de seguridad.</li>
              <li><strong>Fuente de alimentación:</strong> Suministra energía a las cámaras y al DVR.</li>
              <li><strong>Discos duros:</strong> Almacenan las grabaciones de las cámaras de seguridad.</li>
              <li><strong>Control remoto:</strong> Herramienta para controlar el DVR y realizar ajustes.</li>
              <li><strong>Soportes de montaje:</strong> Ayudan a instalar las cámaras en diversas ubicaciones.</li>
            </ul>
            <p>Este kit es ideal para sistemas de vigilancia básicos o medianos.</p>
            <button onClick={closeModal} className="close-btn">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExplicacionKitCamaras;
