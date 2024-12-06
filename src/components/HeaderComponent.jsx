import { IconComponent } from './IconComponent';

export function HeaderComponent() {
    return (
        <header>
            <ul className="pf-nav-bar">
                <li>
                    <IconComponent
                        icono="fa-solid fa-file-pdf"
                        link="public/assets/DanielGarcia.pdf" />
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
                <li>
                    <IconComponent
                        icono="fa-brands fa-twitter"
                        link="" />
                </li>

            </ul>
        </header>
    );
}
