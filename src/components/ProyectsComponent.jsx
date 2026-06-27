import './ProyectsComponent.css';
import { FaCss3Alt, FaHtml5, FaJava, FaJs, FaLayerGroup, FaPhp, FaReact } from 'react-icons/fa6'
import { SiLaravel, SiSpringboot } from 'react-icons/si'

const projects = [
    {
        title: 'Analyst Engineer Development',
        eyebrow: 'OutSystems · DXC Iberia',
        summary: 'Analyst Engineer Development en el departamento de Legacy.',
        outcome: `En junio de 2025 terminé mis prácticas tras transformar una aplicación clave de una de las bancas más importantes de España.
Desde septiembre formo parte del equipo como una pieza de apoyo sólida en un GMS para una de las federaciones deportivas más grandes del mundo.`,
        glyph: 'outsystems',
        stack: ['OutSystems'],
    },
    {
        title: 'Portfolio web personal',
        eyebrow: 'Frontend',
        summary: 'Diseñado y desarrollado con HTML, CSS, JavaScript y React.',
        outcome: `Una presentación limpia, rápida y responsive para mostrar mi perfil profesional con una base visual sólida.
        La refactorización de la web a React me permitió mejorar la estructura y el rendimiento, además de facilitar futuras actualizaciones.`,
        glyph: 'code',
        stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
        title: 'Proyecto final de grado',
        eyebrow: 'Full Stack',
        summary: 'Desarrollo del TFG con PHP y Laravel, calificado con un 10.',
        outcome: `Apliqué una estructura clara para construir una solución mantenible, funcional y orientada a resolver un caso real.
        Cree un sistema de gestión de habitaciones para aquellos que buscan una solución práctica y eficiente para organizar y administrar sus espacios de manera efectiva,
        dando cabida gestión de grandes hoteles, como a pequeñas propiedades.`,
        glyph: 'stack',
        stack: ['PHP', 'Laravel'],
    },
    {
        title: 'APIs con Java y Spring Boot',
        eyebrow: 'Backend',
        summary: 'Creación de varias APIs para el mismo TFG con Java Spring Boot.',
        outcome: `Servicios preparados para consumo, con una base técnica robusta para escalar lógica de negocio y datos.
        Implementé un sistema de autenticación y autorización con JWT, asegurando que solo los usuarios autorizados puedan acceder a los recursos protegidos.
        Además, integré Swagger para documentar y probar las APIs de manera eficiente, facilitando la colaboración y el mantenimiento del proyecto.`,
        glyph: 'api',
        stack: ['Java', 'Spring Boot'],
    },
]

function OutSystemsTechIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M12 4.2c3.6 0 6.5 2.9 6.5 6.5S15.6 17.2 12 17.2 5.5 14.3 5.5 10.7 8.4 4.2 12 4.2Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path d="M8.8 10.7h6.4M12 7.5v6.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            <circle cx="12" cy="10.7" r="1.3" fill="currentColor" />
        </svg>
    )
}

const technologyIcons = {
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    JavaScript: FaJs,
    React: FaReact,
    PHP: FaPhp,
    Laravel: SiLaravel,
    Java: FaJava,
    'Spring Boot': SiSpringboot,
    OutSystems: OutSystemsTechIcon,
}

function ProjectGlyph({ glyph }) {
    if (glyph === 'outsystems') {
        return <OutSystemsTechIcon />
    }

    if (glyph === 'stack') {
        return <FaLayerGroup aria-hidden="true" />
    }

    if (glyph === 'award') {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2 9 7l-5 1 3.5 3.3-.8 4.7L12 14.9l5.3 1.1-.8-4.7L20 8l-5-1-3-5Z" fill="currentColor" />
                <path d="M9.5 14.5 8 22l4-2 4 2-1.5-7.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
        )
    }

    if (glyph === 'api') {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 7h12M6 12h12M6 17h12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="4" cy="7" r="1.4" fill="currentColor" />
                <circle cx="20" cy="7" r="1.4" fill="currentColor" />
                <circle cx="4" cy="12" r="1.4" fill="currentColor" />
                <circle cx="20" cy="12" r="1.4" fill="currentColor" />
                <circle cx="4" cy="17" r="1.4" fill="currentColor" />
                <circle cx="20" cy="17" r="1.4" fill="currentColor" />
            </svg>
        )
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 8 4 12l4 4M16 8l4 4-4 4M14 5 10 19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function ProyectsComponent() {
    return (
        <section className="pf-projects">
            <div className="pf-section-heading pf-projects-heading">
                <h2 className="pf-projects-title">Experiencia destacada</h2>
                <p className="pf-projects-subtitle">Proyectos reales que resumen lo que he construido y el tipo de valor que aporto.</p>
            </div>

            <div className="pf-projects-grid">
                {projects.map((project) => (
                    <article className="pf-project-card" key={project.title}>
                        <div className="pf-project-card__header">
                            <div className="pf-project-card__glyph">
                                <ProjectGlyph glyph={project.glyph} />
                            </div>
                            <div>
                                <p className="pf-project-card__eyebrow">{project.eyebrow}</p>
                                <h3 className="pf-project-card__title">{project.title}</h3>
                            </div>
                        </div>

                        <div className="pf-project-card__summary-block">
                            <p className="pf-project-card__summary">{project.summary}</p>
                            <p className="pf-project-card__outcome">{project.outcome}</p>
                        </div>

                        <ul className="pf-project-card__stack" aria-label={`Tecnologías de ${project.title}`}>
                            {project.stack.map((tech) => (
                                <li key={tech} className="pf-project-card__tech">
                                    {(() => {
                                        const TechIcon = technologyIcons[tech]

                                        return TechIcon ? <TechIcon aria-hidden="true" /> : null
                                    })()}
                                    <span>{tech}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}
