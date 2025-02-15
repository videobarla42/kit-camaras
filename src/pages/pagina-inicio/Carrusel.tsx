import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import "./Carrusel.css";

interface CarruselProps {
  images: string[];
  secondaryImages?: { images: string[]; titles?: string[]; descriptions?: string[] }[];
  titles: string[];
  descriptions: string[];
  links: string[];
}

const Carrusel: React.FC<CarruselProps> = ({ images, secondaryImages = [], titles, descriptions, links }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSecondaryImages, setSelectedSecondaryImages] = useState<string[]>([]);
  const [selectedTitles, setSelectedTitles] = useState<string[] | null>(null);
  const [selectedDescriptions, setSelectedDescriptions] = useState<string[] | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [sliderSettings, setSliderSettings] = useState<any>({});
  const sliderRef = useRef<Slider | null>(null);
  const thumbnailSliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const defaultSettings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: thumbnailSliderRef.current || undefined,
      customPaging: (i: number) => (
        <div>
          <img src={images[i]} alt={`Miniatura ${i + 1}`} className="custom-thumbnail" />
        </div>
      ),
      dotsClass: "slick-dots slick-thumb",
    };

    setSliderSettings(defaultSettings);

    const handleResize = () => {
      setSliderSettings((prevSettings: any) => ({
        ...prevSettings,
        slidesToShow: 1,
        slidesToScroll: 1,
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  const openModal = (index: number) => {
    if (secondaryImages[index]) {
      setSelectedSecondaryImages(secondaryImages[index].images || []);
      setSelectedTitles(secondaryImages[index].titles ?? []);
      setSelectedDescriptions(secondaryImages[index].descriptions ?? []);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);
  const toggleFullScreen = () => setIsExpanded((prevState) => !prevState);

  return (
    <div>
      <div className="slider-container" ref={sliderRef as any}>
        {sliderSettings.slidesToShow && (
          <Slider {...sliderSettings} ref={sliderRef}>
            {images.map((image, index) => (
              <div key={index} onClick={() => window.location.href = links[index]}>
                <img src={image} alt={`Imagen Principal ${index + 1}`} />
                <h3>{titles[index]}</h3>
                <p>{descriptions[index]}</p>
              </div>
            ))}
          </Slider>
        )}
      </div>

      <div className="thumbnail-slider-container">
        <Slider
          slidesToShow={Math.min(images.length, 4)}
          slidesToScroll={1}
          asNavFor={sliderRef.current || undefined}
          focusOnSelect={true}
          arrows={false}
          dots={false}
          ref={thumbnailSliderRef}
        >
          {images.map((image, index) => (
            <div key={index} className="thumbnail-slide">
              <img src={image} alt={`Miniatura ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal-content" overlayClassName="modal-overlay">
        <div className="modal-close-button">
          <button onClick={closeModal}>❌ Cerrar</button>
        </div>

        <Slider {...sliderSettings}>
          {selectedSecondaryImages.length === 0 ? (
            <p>Cargando...</p>
          ) : (
            selectedSecondaryImages.map((secondaryImage, index) => (
              <div key={index} className="modal-slide">
                <div className="modal-image" onClick={toggleFullScreen}>
                  <img src={secondaryImage} alt={`Imagen Secundaria ${index + 1}`} className={isExpanded ? "expanded" : ""} />
                </div>
                <div className="modal-text">
                  <h3>{selectedTitles?.[index]}</h3>
                  <p>{selectedDescriptions?.[index]}</p>
                </div>
              </div>
            ))
          )}
        </Slider>

        <a href="https://wa.me/573046615865" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
          Precio al WhatsApp
        </a>
      </Modal>
    </div>
  );
};

export default Carrusel;
