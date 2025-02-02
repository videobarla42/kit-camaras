import React, { useState } from 'react';
import Modal from 'react-modal'; // Asegúrate de instalar react-modal si no lo tienes
import './EscojerCamaras.css'; // Puedes personalizar con tu propio archivo CSS

const EscojerCamaras: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Botón que abre el modal */}
      <button 
        onClick={openModal} 
        className="button"
      >
        ¿Cómo escoger una cámara de seguridad?
      </button>

      {/* Modal que contiene los pasos */}
      <Modal 
        isOpen={isOpen} 
        onRequestClose={closeModal} 
        contentLabel="Escojer Cámara" 
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Pasos para escoger una cámara de seguridad</h2>
        <ol>
          <li><strong>Determina el área a cubrir:</strong> Mide el espacio donde deseas instalar las cámaras. ¿Es una habitación pequeña, un pasillo largo, o una zona exterior grande? El tamaño y el tipo de área influirán en la elección.</li>
          <li><strong>Elige entre cámaras interiores y exteriores:</strong> Las cámaras para interiores suelen ser más pequeñas y ligeras, mientras que las exteriores están diseñadas para resistir el clima y las condiciones externas.</li>
          <li><strong>Revisa la resolución:</strong> Para una buena calidad de imagen, asegúrate de elegir cámaras con alta resolución (HD, Full HD, 4K si es necesario). Cuanto mayor sea la resolución, más detalles podrás ver.</li>
          <li><strong>Considera el ángulo de visión:</strong> Las cámaras con un campo de visión más amplio pueden cubrir más área. Asegúrate de que la cámara elegida pueda capturar toda la zona que deseas monitorear.</li>
          <li><strong>Revisa las opciones de grabación:</strong> Algunas cámaras tienen almacenamiento en la nube, mientras que otras usan tarjetas SD o grabadoras locales. Elige la opción que mejor se adapte a tus necesidades.</li>
          <li><strong>Conectividad:</strong> Decide si prefieres cámaras con cable o cámaras inalámbricas. Las cámaras inalámbricas ofrecen flexibilidad, pero las cámaras con cable pueden ser más estables y seguras.</li>
          <li><strong>Revisa las características adicionales:</strong> Como visión nocturna, detección de movimiento, alertas automáticas o integración con otros dispositivos de seguridad, como alarmas o timbres inteligentes.</li>
        </ol>
        
        <button onClick={closeModal} className="close-button">Cerrar</button>
      </Modal>
    </div>
  );
};

export default EscojerCamaras;
