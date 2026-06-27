import { useEffect, useState } from 'react'
import './PresentationComponent.css'

const strengthPills = [
    { label: 'Autodidacta', hoverLabel: '100%' },
    { label: 'Proactivo', hoverLabel: 'Incansable' },
    { label: '1 año con OutSystems', hoverLabel: 'ODC y O11' },
    { label: 'IA Agents', hoverLabel: 'OpenCode' },
]

export function PresentationComponent() {
    const [isMounted, setIsMounted] = useState(false)
    const profileImage = `${import.meta.env.BASE_URL}assets/comprimidas/FotoPerfil.jpg`

    useEffect(() => {
        const frame = requestAnimationFrame(() => setIsMounted(true))

        return () => cancelAnimationFrame(frame)
    }, [])

    return (
        <section className="pf-presentation-content">
            <div className={`pf-presentation ${isMounted ? 'pf-presentation--visible' : ''}`}>
                <p className="pf-presentation-kicker">Portafolio</p>
                <h1 className="pf-presentation-title">
                    Daniel García
                </h1>
                <p className="pf-presentation-dev">Desarrollador Full Stack</p>
                <div className="pf-presentation-pill-list" aria-label="Fortalezas profesionales">
                    {strengthPills.map((pill) => (
                        <span className="pf-presentation-pill" key={pill.label} data-hover-label={pill.hoverLabel}>
                            <span className="pf-presentation-pill__icon" aria-hidden="true" />
                            <span className="pf-presentation-pill__label">{pill.label}</span>
                            <span className="pf-presentation-pill__hover-label">{pill.hoverLabel}</span>
                        </span>
                    ))}
                </div>
            </div>
            <div className={`pf-presentation-description ${isMounted ? 'pf-presentation-description--visible' : ''}`}>
                <img
                    className="pf-presentation-photo"
                    src={profileImage}
                    alt="Foto de perfil de Daniel García"
                    loading="lazy"
                />
            </div>
            <p className={`pf-presentation-bottom ${isMounted ? 'pf-presentation-bottom--visible' : ''}`}>
                Desarrollo productos con foco en claridad, rendimiento y entrega: frontend, backend, OutSystems e IA aplicada al flujo
                de trabajo. Llevo un año trabajando con OutSystems y estoy incorporando IA Agents como GitHub Copilot, Warp y OpenCode
                para ganar velocidad, criterio y eficiencia en cada iteración.
            </p>
        </section>
    );

}