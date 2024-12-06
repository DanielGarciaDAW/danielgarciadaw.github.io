import './PresentationComponent.css'

export function PresentationComponent() {
    return (
        <section className="pf-presentation" style={{ '--td': '1.2s' }}>
            <h1 className="pf-presentation-title block-reveal"
                style={{ '--bc': '#623bbd', '--d': '.1s' }}>
                Daniel García
            </h1>
            <p className="pf-presentation-description block-reveal"
                style={{ '--bc': '#b23bbd', '--d': '.5s' }}>
                Full Stack Developer
            </p>
        </section>

    );

}