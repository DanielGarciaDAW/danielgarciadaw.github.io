import React, { useState } from 'react';
import './ProyectsComponent.css';

export function ProyectsComponent({ selectedLanguage }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

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
            "../assets/comprimidas/HTML.png",
        ],
        CSS: [
            "../assets/comprimidas/CSS.png",
        ],
        JavaScript: [
            "../assets/comprimidas/JAVASCRIPT.png",
            "../assets/comprimidas/JAVASCRIPT1.png",
            "../assets/comprimidas/JAVASCRIPT2.png",
            "../assets/comprimidas/JAVASCRIPT3.png",
        ],
        React: [
            "../assets/comprimidas/REACT.png",
            "../assets/comprimidas/REACT1.png",
            "../assets/comprimidas/REACT2.png",
            "../assets/comprimidas/REACT3.png",
        ],
        PHP: [
            "../assets/comprimidas/PHP.png",
            "../assets/comprimidas/PHP1.png",
            "../assets/comprimidas/PHP2.png",
            "../assets/comprimidas/PHP3.png",
        ],
        JAVA: [
            "../assets/comprimidas/JAVA.png",
            "../assets/comprimidas/JAVA1.png",
            "../assets/comprimidas/JAVA2.png",
        ]
    };

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
                <h2 className="pf-projects-title">Projects</h2>
                {selectedLanguage ? (
                    <div className="pf-projects-content">
                        <h3>Proyectos relacionados con {selectedLanguage}</h3>
                        <div className="pf-projects-content-contain">
                            <p>{currentDescriptions[currentImageIndex] || "Descripción no disponible."}</p>
                            <p>Descripción del proyecto relacionado con {selectedLanguage}</p>

                            {/* Imagen que cambia */}
                            <div className="image-container">
                                <img
                                    src={currentImages[currentImageIndex]}
                                    alt={`Imagen de ${selectedLanguage}`}
                                    className="clickable-image"
                                    onClick={() => handleImageClick(currentImages[currentImageIndex])}
                                />
                            </div>

                            {/* Botones de desplazamiento */}
                            {showNavigation && (
                                <div className="image-navigation">
                                    <button className="nav-button" onClick={handlePrevious}>
                                        <i className="fas fa-chevron-left"></i>
                                    </button>
                                    <button className="nav-button" onClick={handleNext}>
                                        <i className="fas fa-chevron-right"></i>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="pf-projects-content">
                        <h3>Selecciona una skill</h3>
                    </div>
                )}
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>×</button>
                        <img src={modalImage} alt="Imagen ampliada" />
                    </div>
                </div>
            )}
        </>
    );
}
