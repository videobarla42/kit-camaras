import React, { useState } from 'react';
import './Showrooms.css'; // Asegúrate de incluir los estilos necesarios
import './VisionNocturna.css'; // Asegúrate de incluir los estilos necesarios
import './Visitas.css'; // Asegúrate de incluir los estilos necesarios

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  title: string;
  imageSrc: string;
  description: string;
  contactInfo: {
    whatsapp: string;
    phone: string;
  };
  showForm: boolean;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  closeModal,
  title,
  imageSrc,
  description,
  contactInfo,
  showForm,
}) => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Nombre:', name, 'Teléfono:', phone);
    closeModal();
  };

  if (!showModal) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={closeModal} className="closeButton">
          ❌
        </button>
        <h2 className="modalTitle">{title}</h2>
        <img src={imageSrc} alt="Imagen" className="image" />
        <p>{description}</p>

        {showForm && (
          <>
            <h3>¡Regístrate para más información!</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Número de teléfono:</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="button submitButton">
                Registrar
              </button>
            </form>
          </>
        )}

        <h3>
          <strong>DIRECCIÓN</strong> del showrooms al{' '}
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            className="button whatsappButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>{' '}
          llámanos:{' '}
          <a href={`tel:${contactInfo.phone}`} className="button callButton">
            {contactInfo.phone}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Modal;
