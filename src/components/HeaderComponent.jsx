import "./HeaderComponent.css";
import { ContactLink } from "./ContactLink";
import { LogoComponent } from './LogoComponent';
import { IconComponent } from './IconComponent';


export function HeaderComponent() {
    return (
        <header className="pf-header">
            <div className="pf-header-logo">
                <LogoComponent />
            </div>

            <div className="pf-header-nav">
                <span className="pf-header-email pf-header-button slide_right"><ContactLink /></span>

                <ul className="pf-header-nav-bar">
                    <li>
                        <IconComponent
                            icono="fa-solid fa-file-pdf"
                            link="assets/DanielGarcia.pdf" />
                    </li>
                    <li>
                        <IconComponent
                            icono="fa-brands fa-linkedin"
                            link="https://lnkd.in/dAxxxUyS" />
                    </li>
                    <li>
                        <IconComponent
                            icono="fa-brands fa-github"
                            link="https://github.com/DanielGarciaDaw" />
                    </li>
                </ul>
            </div>
        </header>
    );
}