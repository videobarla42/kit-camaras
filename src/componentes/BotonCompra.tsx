import React, { useState } from 'react';
import './BotonCompra.css'; // Importa el archivo CSS
import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = 'https://lkwdiodhcjapfqxnbuxy.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrd2Rpb2RoY2phcGZxeG5idXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NzM5ODcsImV4cCI6MjA0MjI0OTk4N30.F-XZ9jVs5DckvgJzVXWTRB4HTEoleIr7Gk2mL_Ez-4g'; // Replace with your Supabase API key
const supabase = createClient(supabaseUrl, supabaseKey);

// Definimos las props del botón
interface BotonCompraProps {
  texto: string; // Texto que se muestra en el botón
  onClick: () => void; // Función que se ejecuta al hacer clic
  color?: string; // Color de fondo del botón (opcional)
  tamaño?: 'pequeño' | 'mediano' | 'grande'; // Tamaño del botón (opcional)
  deshabilitado?: boolean; // Si el botón está deshabilitado (opcional)
}

// Constante con los horarios de entrega
const horariosEntrega = `
  Entrega de equipos en los siguientes horarios:

  De lunes a viernes: de 8:00 a.m. a 6:00 p.m. (jornada continua).
  Sábados: de 8:00 a.m. a 1:00 p.m.
  Domingos y festivos no hacemos entregas.

  Recibimos pagos en efectivo, Nequi o Bancolombia.
`;

const BotonCompra: React.FC<BotonCompraProps> = ({ texto = 'Comprar' }) => {
  const [modalAbierto, setModalAbierto] = useState(false); // Estado para controlar la visibilidad del modal
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudadYBarrio, setCiudadYBarrio] = useState(''); // Nuevo estado para ciudad y barrio

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  const confirmarCompra = async () => {
    try {
      // Insertar datos en la tabla "kits" de Supabase
      const { data, error } = await supabase
        .from('kits')
        .insert([
          {
            nombre,
            telefono,
            direccion,
            'ciudad y barrio': ciudadYBarrio, // Envía ciudad y barrio como un solo campo
          },
        ]);

      if (error) {
        throw error;
      }

      console.log('Compra confirmada y datos guardados:', data);
      alert('Compra confirmada y datos guardados');
      cerrarModal(); // Cierra el modal después de confirmar la compra
    } catch (error) {
      console.error('Error al confirmar la compra:', error);
      alert('Error al confirmar la compra');
    }
  };

  const abrirWhatsApp = () => {
    const phone = '3046615865';
    const message = 'Hola, estoy interesado en el kit de 4 cámaras.';
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const hacerLlamada = () => {
    const phoneUri = 'tel:+573046615865';
    window.location.href = phoneUri;
  };

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button className="boton-compra" onClick={abrirModal}>
        {texto}
      </button>

      {/* Modal de compra */}
      {modalAbierto && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Botón de cierre (X) */}
            <button className="cerrar-modal" onClick={cerrarModal}>
              &times;
            </button>

            {/* Título */}
            <div className="titulo-con-icono">
              <h2>Confirmar Compra, kit de 4 cámaras con inteligencia artificial</h2>
              <p>
                Por favor, complete el formulario para hacer llegar el pedido a su domicilio.
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
              <button className="confirmar" onClick={confirmarCompra}>
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

            {/* Horarios de entrega */}
            <div className="horarios-entrega">
              <p>{horariosEntrega}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BotonCompra;