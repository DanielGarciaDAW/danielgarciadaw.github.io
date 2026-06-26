import './SkillComponent.css'
import { ButtonComponent } from './ButtonComponent';

export function SkillComponent({ onLanguageSelect }) {


    const handleButtonClick = (language) => {
        onLanguageSelect(language); // Llama a la función pasada desde App
    };

    return (
        <section className="pf-skill">
            <div className="pf-section-heading">
                <h2 className="pf-skill-title">Skill</h2>
                <p className="pf-skill-subtitle">Selecciona una tecnología para ver proyectos relacionados.</p>
            </div>
            <div className="pf-skill-content">               
                    <ul className="pf-skill-list">
                        <ButtonComponent lenguaje="HTML" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="CSS" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="JavaScript" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="React" onClick={handleButtonClick} />
                    </ul>
                    <ul className="pf-skill-list">
                        <ButtonComponent lenguaje="PHP" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="JAVA" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="SPRING BOOT" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="LARAVEL" onClick={handleButtonClick} />
                    </ul>
            </div>
        </section>
    );
}
