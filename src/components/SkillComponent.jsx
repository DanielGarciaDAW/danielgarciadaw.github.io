import './SkillComponent.css'
import { ButtonComponent } from './ButtonComponent';

export function SkillComponent({ onLanguageSelect }) {


    const handleButtonClick = (language) => {
        onLanguageSelect(language); // Llama a la función pasada desde App
    };

    return (
        <section className="pf-skill">
            <h2 className="pf-skill-title">Skill</h2>
            <div className="pf-skill-content">               
                    <ul className="pf-skill-list">
                        <ButtonComponent lenguaje="HTML" icon="fa-brands fa-html5" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="CSS" icon="fa-brands fa-css3-alt" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="JavaScript" icon="fa-brands fa-js" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="React" icon="fa-brands fa-react" onClick={handleButtonClick} />
                    </ul>
                    <ul className="pf-skill-list">
                        <ButtonComponent lenguaje="PHP" icon="fa-brands fa-php" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="JAVA" icon="fa-brands fa-java" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="SPRING BOOT" icon="fa fa-power-off" onClick={handleButtonClick} />
                        <ButtonComponent lenguaje="LARAVEL" icon="fa-brands fa-laravel" onClick={handleButtonClick} />
                    </ul>
            </div>
        </section>
    );
}
