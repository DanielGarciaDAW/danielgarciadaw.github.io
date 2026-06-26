import './PresentationComponent.css'

export function PresentationComponent() {
    return (
        <section className="pf-presentation-content">
            <div className="pf-presentation">
                <p className="pf-presentation-kicker">Portafolio</p>
                <h1 className="pf-presentation-title">
                    Daniel García
                </h1>
                <p className="pf-presentation-dev">
                    Full Stack Developer
                </p>
            </div>
            <div className="pf-presentation-description">
                <h4>"Apasionado de la programación,
                actualmente estudiante del Ciclo Superior de Desarrollo de Aplicaciones Web
                Me encanta crear soluciones innovadoras y funcionales, y disfruto
                aprendiendo nuevas tecnologías para mejorar mis habilidades."</h4>
            </div>
        </section>
    );

}