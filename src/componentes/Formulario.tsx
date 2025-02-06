import React, { useState } from 'react';
import './Formulario.css'; // Importa el archivo CSS

interface FormularioProps {
  titulo: string; // Prop para el título
  descripcion: string; // Prop para la descripción
  precio: string; // Prop para el precio
}

const Formulario: React.FC<FormularioProps> = ({ titulo, descripcion, precio }) => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudadYBarrio, setCiudadYBarrio] = useState('');

  // Función para manejar el cierre del formulario
  const handleClose = () => {
    console.log('Formulario cerrado');
  };

  // Función para manejar la confirmación de la compra
  const handleConfirm = () => {
    console.log('Compra confirmada');
  };

  // Función para abrir WhatsApp
  const handleWhatsApp = () => {
    console.log('Abrir WhatsApp');
  };

  // Función para hacer una llamada
  const handleLlamada = () => {
    console.log('Hacer llamada');
  };

  // Horarios de entrega
  const horariosEntrega = `Horarios de entrega: De lunes a viernes: de 8:00 a.m. a 6:00 p.m. (jornada continua).
  Sábados: de 8:00 a.m. a 1:00 p.m.
  Domingos y festivos no hacemos entregas.
  Aceptamos pagos en efectivo, Nequi o Bancolombia.`;

  return (
    <div className="formulario-overlay">
      <div className="formulario-container">
        <div className="header-with-icon">
          <h2>{titulo}</h2> {/* Usar la prop titulo */}
          <p>{descripcion}</p> {/* Usar la prop descripcion */}
          <p>Precio: {precio}</p> {/* Usar la prop precio */}
        </div>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Ciudad y Barrio"
          value={ciudadYBarrio}
          onChange={(e) => setCiudadYBarrio(e.target.value)}
          className="form-input"
        />
        <button className="confirm-button" onClick={handleConfirm}>
          Confirmar Compra
        </button>
        <button className="whatsapp-button" onClick={handleWhatsApp}>
          WhatsApp
        </button>
        <button className="call-button" onClick={handleLlamada}>
          Llamar
        </button>
        <div className="delivery-hours">
          <p>{horariosEntrega}</p>
        </div>
        {/* Footer */}
        <footer className="form-footer">
          <p>© 2025 S24seguridad-electronica - Todos los derechos reservados.</p>
          <p>Contacto: s24hseguridad@gmail.com | Teléfono: +57 3046615865</p>
        </footer>
      </div>
    </div>
  );
};

export default Formulario;