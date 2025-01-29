import React, { useState } from 'react';
import './Formulario.css'; // Importa el archivo CSS

interface FormularioProps {
  titulo: string; // Prop para el título
  descripcion: string; // Prop para la descripción
  precio: string; // Prop para el precio
}

const Formulario: React.FC<FormularioProps> = ({
  titulo,
  descripcion,
  precio,
}) => {
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
  const horariosEntrega = 'Horarios de entrega: Lunes a Viernes de 9:00 AM a 6:00 PM';

  return (
    <div className="formulario-overlay">
      <div className="formulario-content">
        <button className="cerrar-formulario" onClick={handleClose}>
          &times;
        </button>

        <div className="titulo-con-icono">
          <h2>{titulo}</h2> {/* Usar la prop titulo */}
          <p>{descripcion}</p> {/* Usar la prop descripcion */}
          <p>Precio: {precio}</p> {/* Usar la prop precio */}
        </div>

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="formulario-input"
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="formulario-input"
        />
        <input
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          className="formulario-input"
        />
        <input
          type="text"
          placeholder="Ciudad y Barrio"
          value={ciudadYBarrio}
          onChange={(e) => setCiudadYBarrio(e.target.value)}
          className="formulario-input"
        />

        <button className="confirmar" onClick={handleConfirm}>
          Confirmar Compra
        </button>

        <button className="whatsapp-button" onClick={handleWhatsApp}>
          WhatsApp
        </button>

        <button className="llamar-button" onClick={handleLlamada}>
          Llamar
        </button>

        <div className="horarios-entrega">
          <p>{horariosEntrega}</p>
        </div>

        {/* Footer */}
        <footer className="formulario-footer">
          <p>© 2025 S24seguridad-electronica - Todos los derechos reservados.</p>
          <p>Contacto: s24hseguridad@gmail.com | Teléfono: +57 3046615865</p>
        </footer>
      </div>
    </div>
  );
};

export default Formulario;