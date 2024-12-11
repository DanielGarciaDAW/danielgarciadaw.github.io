import './PresentationComponent.css'

export function PresentationComponent() {
    return (
        <section className="pf-presentation-content" style={{ '--td': '1.2s' }}>
            <div className="pf-presentation">
                <h1 className="pf-presentation-title block-reveal"
                    style={{ '--bc': '#fc2f68', '--d': '.1s' }}>
                    Daniel García
                </h1>
                <p className="pf-presentation-dev block-reveal"
                    style={{ '--bc': '#f9ebc4', '--d': '.5s' }}>
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