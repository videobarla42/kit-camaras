import React from 'react';
import styles from './WhatsAppButton.module.css';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  // Función para generar el enlace de WhatsApp
  const createWhatsAppLink = () => {
    const formattedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
  };

  return (
    <a
      href={createWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsAppButton} // Aplicar clase CSS
    >
      {/* Ícono de WhatsApp */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Icon"
        className={styles.whatsAppIcon} // Aplicar clase CSS
      />
    </a>
  );
};

export default WhatsAppButton;