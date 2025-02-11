import React, { useEffect, useState } from "react";
import "@/componentes/Descuento.css"; 
import { FaTimes } from "react-icons/fa";

interface DescuentoProps {
  text: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  onClick?: () => void;
}

const Descuento: React.FC<DescuentoProps> = ({
  text,
  backgroundColor = "#ff9800",
  textColor = "#000",
  position = "bottom-left",
  onClick,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    setIsVisible(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation(); // Evita que el clic cierre también el mensaje
    setIsVisible(false);
  };

  const positionClass = `position-${position}`;

  return (
    <>
      {isVisible && (
        <div
          className={`descuento-container ${positionClass}`}
          style={{
            backgroundColor,
            color: textColor,
            cursor: onClick ? "pointer" : "default",
          }}
          onClick={onClick}
        >
          {/* Ícono de cierre en la parte superior izquierda */}
          <button className="close-icon" onClick={handleClose}>
            <FaTimes />
          </button>
          <div>{text}</div>
        </div>
      )}
    </>
  );
};

export default Descuento;
