import React, { useState } from 'react';
import './ProyectsComponent.css';

export function ProyectsComponent({ selectedLanguage }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    // Información de cada lenguaje
    const languageInfo = {
        HTML: (
            <div className="pf-projects-content-contain">
                <p><strong>HTML</strong> es el lenguaje estándar para la creación de páginas web.</p>
                <figcaption>
                    <img
                        src="../assets/comprimidas/HTML.png"
                        alt="Imagen de html"
                        onClick={() => handleImageClick('../assets/comprimidas/HTML.png')}
                        className="clickable-image"
                    />
                </figcaption>
            </div>
        ),
        CSS: "CSS se utiliza para describir la presentación de un documento escrito en HTML.",
        JavaScript: "JavaScript es un lenguaje de programación que permite crear contenido interactivo.",
        React: "React es una biblioteca de JavaScript para construir interfaces de usuario."
    };

    const handleImageClick = (imageSrc) => {
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage('');
    };

    return (
        <>
            <section className="pf-projects">
                <h2 className="pf-projects-title">Projects</h2>
                {selectedLanguage ? (
                    <div className="pf-projects-content">
                        <h3>Proyectos relacionados con {selectedLanguage}</h3>
                        {selectedLanguage in languageInfo ? (
                            <>{languageInfo[selectedLanguage]}</>
                        ) : (
                            <p>No hay información disponible para {selectedLanguage}.</p>
                        )}
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
