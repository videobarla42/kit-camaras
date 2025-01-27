import React from 'react';
import './Beneficios.css'; // Importa los estilos CSS

// Definimos las props del componente (opcional, si necesitas personalizarlo)
interface BeneficiosProps {
  // Puedes añadir props personalizadas si es necesario
}

const Beneficios: React.FC<BeneficiosProps> = () => {
  return (
    <div className="beneficios-container">
      {/* Título de la sección */}
      <h1 className="beneficios-titulo">Beneficios del Kit</h1>

      {/* Lista de beneficios */}
      <div className="beneficios-lista">
        {/* Beneficio 1 */}
        <div className="beneficio-item">
          <span className="beneficio-icono">✔️</span>
          <div className="beneficio-contenido">
            <h3>Tecnología avanzada de detección de movimiento</h3>
            <p>
              Clasificación precisa basada en aprendizaje profundo e identificación de humanos y vehículos.
            </p>
          </div>
        </div>

        {/* Beneficio 2 */}
        <div className="beneficio-item">
          <span className="beneficio-icono">✔️</span>
          <div className="beneficio-contenido">
            <h3>Protección perimetral mejorada</h3>
            <p>
              Detección facial con análisis inteligente para monitoreo y seguridad.
            </p>
          </div>
        </div>

        {/* Beneficio 3 */}
        <div className="beneficio-item">
          <span className="beneficio-icono">✔️</span>
          <div className="beneficio-contenido">
            <h3>Eficiencia en grabación y almacenamiento</h3>
            <p>
              Compresión H.265 Pro+ que reduce espacio de almacenamiento sin comprometer calidad.
            </p>
          </div>
        </div>

        {/* Beneficio 4 */}
        <div className="beneficio-item">
          <span className="beneficio-icono">✔️</span>
          <div className="beneficio-contenido">
            <h3>Flexibilidad en conexiones</h3>
            <p>
              Compatibilidad con HDTVI, AHD, HDCVI, CVBS e IP, soportando hasta 6 canales IP.
            </p>
          </div>
        </div>

        {/* Beneficio 5 */}
        <div className="beneficio-item">
          <span className="beneficio-icono">✔️</span>
          <div className="beneficio-contenido">
            <h3>Almacenamiento robusto</h3>
            <p>
              Capacidad de hasta 10 TB por disco y soporte para hasta 32 usuarios remotos simultáneamente.
            </p>
          </div>
        </div>

        {/* Beneficio 6 */}
        <div className="beneficio-item">
          <span className="beneficio-icono">✔️</span>
          <div className="beneficio-contenido">
            <h3>Durabilidad garantizada</h3>
            <p>
              Operación estable en temperaturas extremas y construcción resistente.
            </p>
          </div>
        </div>

        {/* Beneficio 7 */}
        <div className="beneficio-item">
          <span className="beneficio-icono">✔️</span>
          <div className="beneficio-contenido">
            <h3>Alta calidad de imagen</h3>
            <p>
              Resolución Full HD 1080P para detalles precisos en monitoreo y grabación.
            </p>
          </div>
        </div>

        {/* Beneficio 8 */}
        <div className="beneficio-item">
          <span className="beneficio-icono">✔️</span>
          <div className="beneficio-contenido">
            <h3>Visión nocturna infrarroja</h3>
            <p>
              Rango IR de hasta 20 m para vigilancia en total oscuridad.
            </p>
          </div>
        </div>

        {/* Beneficio 9 */}
        <div className="beneficio-item">
          <span className="beneficio-icono">✔️</span>
          <div className="beneficio-contenido">
            <h3>Resistencia a condiciones extremas</h3>
            <p>
              Operación estable en temperaturas de -40°C a 60°C y construcción resistente a la humedad.
            </p>
          </div>
        </div>

        {/* Beneficio 10 */}
        <div className="beneficio-item">
          <span className="beneficio-icono">✔️</span>
          <div className="beneficio-contenido">
            <h3>Funciones inteligentes</h3>
            <p>
              Ajuste automático de ganancia (AGC) para imágenes claras en condiciones de poca luz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;