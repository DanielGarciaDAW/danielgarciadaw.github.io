import './SkillComponent.css'

export function SkillComponent() {
    return (
        <section className="pf-skill">
            <h2 className="pf-skill-title">Skill</h2>
                <span className="pf-skill-content">
                    <div className="pf-skill-content-contain"> 
                        <ul className="pf-skill-list">
                            <li> <span className="fa-brands fa-html5"/>HTML</li>
                            <li> <span className="fa-brands fa-css3-alt"/>CSS</li>
                            <li> <span className="fa-brands fa-js"/>JavaScript</li>
                            <li> <span className="fa-brands fa-react"/>React</li>
                        </ul>
                    </div>
                    <div className="pf-skill-content-contain">
                        <ul className="pf-skill-list">
                            <li><span className="fa-brands fa-php"/>PHP</li>
                            <li><span className="fa-brands fa-java"/>JAVA</li>
                            <li><span className="fa fa-power-off"/>SPRING BOOT</li>
                            <li><span className="fa-brands fa-laravel"/>LARAVEL</li>
                        </ul>
                    </div>
                </span>
            
        </section>
    );

}