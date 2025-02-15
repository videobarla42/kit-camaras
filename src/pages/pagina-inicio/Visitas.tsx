import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import supabase from './supabase/supabaseClient'; // Asegúrate de tener correctamente configurado supabase
import 'bootstrap/dist/css/bootstrap.min.css';
import './Visitas.css'; // Asegúrate de que el archivo esté bien importado

interface FormData {
  name: string;
  phone: string;
}

const Visitas: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');

    const { name, phone } = formData;

    if (!name || !phone) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (phone.length < 10) {
      setError('El teléfono debe tener al menos 10 caracteres.');
      return;
    }

    setLoading(true);

    try {
      const { error: dbError } = await supabase
        .from('contrate')
        .insert([{ name, phone }]);

      if (dbError) {
        console.error('Error al guardar los datos:', dbError);
        setError(`Error al guardar los datos: ${dbError.message}`);
        return;
      }

      setSuccessMessage('¡Registro exitoso! Te contactaremos en la menor brevedad posible.');
      setFormData({ name: '', phone: '' });

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      setError('Ha ocurrido un error, por favor intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center mt-4">
          <Col xs="auto">
            <Button variant="primary" onClick={openModal} className="button-visit">
              Pide Un Técnico Hoy!
            </Button>
          </Col>
        </Row>
      </Container>

      {showModal && (
        <div className="overlay">
          <div className="modal">
            <button onClick={closeModal} className="closeButton">❌</button>
            <h2 className="modalTitle">¡Apunta tu número!</h2>
            <p className="text-center mb-4 fs-5">
              Te llamamos en el menor tiempo posible para confirmar dirección y hora de la visita
            </p>
            <p className="mt-2 small-text">
              Para visitas fuera del horario gratuito, por favor{' '}
              <a
                href="https://wa.me/573046615865"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
              >
                preguntar precios!
              </a>.
            </p>

            {error && <Alert variant="danger">{error}</Alert>}
            {successMessage && <Alert variant="success">{successMessage}</Alert>}

            <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
              <Form.Group controlId="name" className="mb-3">
                <Form.Label className="fs-5">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ingresa tu nombre"
                  className="fs-5"
                />
              </Form.Group>
              <Form.Group controlId="phone" className="mb-3">
                <Form.Label className="fs-5">Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Ingresa tu número de teléfono"
                  className="fs-5"
                />
              </Form.Group>
              <Button type="submit" disabled={loading} className="w-100 btn-lg fs-5" variant="primary">
                {loading ? 'Registrando...' : 'Enviar!'}
              </Button>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Visitas;
