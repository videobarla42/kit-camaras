import React from 'react'; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Catalogos.css'; 

// Importa las imágenes desde la carpeta src/assets
import imgServicios from "../../../assets/2.webp";
import imgProductos from '../../../assets/16.webp';

const Catalogos = () => {
  const telefono = "3046615865";

  const catalogoServiciosUrl = `https://wa.me/${telefono}?text=Hola%2C%20vengo%20de%20la%20web%20y%20quiero%20ver%20el%20catálogo%20de%20servicios`;
  const catalogoProductosUrl = `https://wa.me/${telefono}?text=Hola%2C%20vengo%20de%20la%20web%20y%20quiero%20ver%20el%20catálogo%20de%20productos`;

  return (
    <Container fluid className="my-1">
      <Row>
        {/* Catálogo de Servicios */}
        <Col md={6} className="position-relative">
          <img 
            src={imgServicios}  
            alt="Catálogo de Servicios" 
            className="img-fluid catalogo-image"
          />
          <Button 
            variant="primary" 
            href={catalogoServiciosUrl} 
            target="_blank" 
            className="position-absolute top-50 start-50 translate-middle btn-large"
          >
            Catálogo de Servicios
          </Button>
        </Col>

        {/* Catálogo de Productos */}
        <Col md={6} className="position-relative">
          <img 
            src={imgProductos}  
            alt="Catálogo de Productos" 
            className="img-fluid catalogo-image"
          />
          <Button 
            variant="success" 
            href={catalogoProductosUrl} 
            target="_blank" 
            className="position-absolute top-50 start-50 translate-middle btn-large"
          >
            Catálogo de Productos
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Catalogos;
