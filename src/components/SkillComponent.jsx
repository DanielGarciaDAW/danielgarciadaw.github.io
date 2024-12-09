import './SkillComponent.css'
import { ButtonComponent } from './ButtonComponent';
import React, { useState } from 'react';


export function SkillComponent() {
    const [selectedLanguage, setSelectedLanguage] = useState(null); // Guarda el lenguaje seleccionado

    // Callback que será llamado por el hijo
    const handleButtonClick = (language) => {
        setSelectedLanguage(language); // Almacena el lenguaje seleccionado
    };

    // Información de cada lenguaje
    const languageInfo = {
        HTML: "HTML es el lenguaje estándar para la creación de páginas web.",
        CSS: "CSS se utiliza para describir la presentación de un documento escrito en HTML.",
        JavaScript: "JavaScript es un lenguaje de programación que permite crear contenido interactivo.",
        React: "React es una biblioteca de JavaScript para construir interfaces de usuario."
    };

    return (
        <section className="pf-skill">
            <h2 className="pf-skill-title">Skill</h2>
            <span className="pf-skill-content">
                <div className="pf-skill-content-contain">
                    <ul className="pf-skill-list">
                        <ButtonComponent lenguaje="HTML" icon="fa-html5" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="CSS" icon="fa-css3-alt" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="JavaScript" icon="fa-js" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="React" icon="fa-js" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="PHP" icon="fa-php" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="JAVA" icon="fa-java" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="SPRING BOOT" icon="fa-power-off" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="LARAVEL" icon="fa-laravel" onClick={handleButtonClick} />
                    </ul>
                </div>
            </span>
            {/* ESTO HAY QEU SACARLO DE AQUÏ HACIA EL MAIN*/}
            {selectedLanguage && (
                <div className="language-card">
                    <h3>{selectedLanguage}</h3>
                    <p>{languageInfo[selectedLanguage]}</p>
                </div>
            )}

        </section>
    );

}