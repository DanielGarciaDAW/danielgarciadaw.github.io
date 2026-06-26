import { useEffect, useState } from 'react';
import './ProyectsComponent.css';

export function ProyectsComponent({ selectedLanguage }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const assetBase = `${import.meta.env.BASE_URL}assets/comprimidas/`;

    const descriptions = {
        HTML: ["Practica presentada para el proyecto final de la asignatura Diseño de Interfaces Web."],
        CSS: ["Pagina de CSS usada para el proyecto de HTML."],
        JavaScript: [
            "Proyecto de Almacenamiento de datos de entrenamientos con JavaScript.", 
        ],
        React: [
            "Código de este portafolio.",
            
        ],
        PHP: [
            "Proyecto de videoclub, almacenamiento de datos con PHP.",
            
        ],
        JAVA: [
            "Proyecto de estadistica de infecciones por COVID-19 en Java (Simulacro).",
        
        ]
    };

    const images = {
        HTML: [
            `${assetBase}HTML.png`,
        ],
        CSS: [
            `${assetBase}CSS.png`,
        ],
        JavaScript: [
            `${assetBase}JAVASCRIPT.png`,
            `${assetBase}JAVASCRIPT1.png`,
            `${assetBase}JAVASCRIPT2.png`,
            `${assetBase}JAVASCRIPT3.png`,
        ],
        React: [
            `${assetBase}REACT.png`,
            `${assetBase}REACT1.png`,
            `${assetBase}REACT2.png`,
            `${assetBase}REACT3.png`,
        ],
        PHP: [
            `${assetBase}PHP.png`,
            `${assetBase}PHP1.png`,
            `${assetBase}PHP2.png`,
            `${assetBase}PHP3.png`,
        ],
        JAVA: [
            `${assetBase}JAVA.png`,
            `${assetBase}JAVA1.png`,
            `${assetBase}JAVA2.png`,
        ]
    };

    useEffect(() => {
        setCurrentImageIndex(0);
        setIsModalOpen(false);
        setModalImage('');
    }, [selectedLanguage]);

    const currentImages = images[selectedLanguage] || [];
    const currentDescriptions = descriptions[selectedLanguage] || [];

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1));
    };

    const handleImageClick = (imageSrc) => {
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage('');
    };

    const showNavigation = currentImages.length > 1;

    return (
        <>
            <section className="pf-projects">
                <div className="pf-section-heading pf-projects-heading">
                    <h2 className="pf-projects-title">Projects</h2>
                    <p className="pf-projects-subtitle">Vista previa del trabajo por tecnología.</p>
                </div>
                {selectedLanguage ? (
                    <div className="pf-projects-content">
                        <div className="pf-projects-card">
                            <div className="pf-projects-card__header">
                                <p className="pf-projects-card__eyebrow">{selectedLanguage}</p>
                                <h3>Proyectos relacionados con {selectedLanguage}</h3>
                            </div>

                            <div className="pf-projects-content-contain">
                                <div className="pf-projects-copy">
                                    <p>{currentDescriptions[currentImageIndex] || "Descripción no disponible."}</p>
                                    <p>Descripción del proyecto relacionado con {selectedLanguage}</p>
                                </div>

                                <button
                                    type="button"
                                    className="image-container"
                                    onClick={() => handleImageClick(currentImages[currentImageIndex])}
                                >
                                    <img
                                        src={currentImages[currentImageIndex]}
                                        alt={`Imagen de ${selectedLanguage}`}
                                        className="clickable-image"
                                        loading="lazy"
                                    />
                                </button>

                                {showNavigation && (
                                    <div className="image-navigation">
                                        <button className="nav-button" onClick={handlePrevious} type="button">
                                            Anterior
                                        </button>
                                        <button className="nav-button" onClick={handleNext} type="button">
                                            Siguiente
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="pf-projects-empty">
                        <h3>Selecciona una skill</h3>
                        <p>Los proyectos y capturas aparecerán aquí para la tecnología que elijas.</p>
                    </div>
                )}
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal} type="button">Cerrar</button>
                        <img src={modalImage} alt="Imagen ampliada" />
                    </div>
                </div>
            )}
        </>
    );
}
