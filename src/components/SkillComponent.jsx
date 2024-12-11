import './SkillComponent.css'
import { ButtonComponent } from './ButtonComponent';

export function SkillComponent({ onLanguageSelect }) {

    const handleButtonClick = (language) => {
        onLanguageSelect(language); // Llama a la función pasada desde App
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
        </section>
    );
}
