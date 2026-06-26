import "./HeaderComponent.css";
import { ContactLink } from "./ContactLink";
import { LogoComponent } from './LogoComponent';
import { IconComponent } from './IconComponent';


export function HeaderComponent() {
    return (
        <header className="pf-header" aria-label="Cabecera principal del portafolio">
            <div className="pf-header-brand">
                <LogoComponent />
                <p className="pf-header-tagline">Portfolio profesional</p>
            </div>

            <div className="pf-header-nav">
                <ContactLink />

                <ul className="pf-header-nav-bar">
                    <li>
                        <IconComponent
                            label="CV"
                            link={`${import.meta.env.BASE_URL}assets/DanielGarcia.pdf`} />
                    </li>
                    <li>
                        <IconComponent
                            label="in"
                            link="https://lnkd.in/dAxxxUyS" />
                    </li>
                    <li>
                        <IconComponent
                            label="GH"
                            link="https://github.com/DanielGarciaDaw" />
                    </li>
                </ul>
            </div>
        </header>
    );
}