import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './EligeS24.css'; // Importa el archivo CSS

// Definir la interfaz para las propiedades del componente
interface EligeS24Props {
  title: string;
  description: string;
  phone: string;
  imageSrc: string;
}

const EligeS24: React.FC<EligeS24Props> = ({ title, description, phone, imageSrc }) => {
  return (
    <Container fluid className="my-5">
      <Row className="align-items-center g-0">
        {/* Sección de texto a la izquierda */}
        <Col md={6} className="p-5 full-width-text">
          <h2 className="display-1">{title}</h2>
          <p className="lead">{description}</p>
          <p className="fs-5">
            Ofrecemos garantía en todos nuestros trabajos y llevamos un registro de cada producto y servicio que adquiere con nosotros. 
            Respondemos rápidamente a cualquier solicitud de garantía, cubrimos todos los costos de operación y transporte de los equipos que requieren revisión desde el lugar donde están instalados.
          </p>
          <p className="fs-5">
            Ofrecemos una amplia gama de sistemas de seguridad de alta calidad. Todos nuestros productos son escogidos directamente en distribución, sin pasar por almacenamiento, lo que nos permite ofrecer equipos siempre actualizados, con fechas de fabricación recientes y lo último en tecnología, para brindar el mayor nivel de protección en su hogar o negocio.
          </p>
          <p className="fs-5">
            Garantizamos una instalación segura y discreta y aseguramos que todo funcione de manera óptima.
          </p>
          <p className="fs-5">
            <strong>¡Tenemos experiencia en ángulos de visión y movimiento!</strong>
          </p>
          <p className="fs-5">
            Personalizamos nuestras soluciones de seguridad a su medida. Formulamos sus equipos de seguridad.  
            <strong>
              <a 
                href={`tel:${phone.replace(/\D/g, '')}`} 
                style={{ textDecoration: 'none', color: 'blue' }}
              >
                ¡Llámanos al {phone}!
              </a>
            </strong> 
            para una cotización.
          </p>
        </Col>

        {/* Sección de imagen a la derecha */}
        <Col md={6} className="p-0">
          <img 
            src={imageSrc} 
            alt="Sistemas de seguridad" 
            className="img-fluid" 
            style={{ 
              borderRadius: '8px',
              height: 'auto',
              objectFit: 'cover',
              width: '100%',
            }} 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default EligeS24;
