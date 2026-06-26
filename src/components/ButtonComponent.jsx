import './ButtonComponent.css';
import { useState } from 'react';

export function ButtonComponent({lenguaje, onClick}) {

    const [click, setClick] = useState(false);

    const badgeMap = {
        HTML: 'HTML',
        CSS: 'CSS',
        JavaScript: 'JS',
        React: 'RE',
        PHP: 'PHP',
        JAVA: 'JV',
        'SPRING BOOT': 'SB',
        LARAVEL: 'LV',
    };

    const handleClick = () => {
        setClick(true);
        onClick(lenguaje);
        setTimeout(() => setClick(false), 500);
    };

    const buttonFx = click
        ? 'pf-skill-button pf-skill-button--active'
        : 'pf-skill-button';

    return (
        <li>
            <button type="button" className={buttonFx} onClick={handleClick}>
                <span className="pf-skill-badge">{badgeMap[lenguaje] || lenguaje.slice(0, 2).toUpperCase()}</span>
                <span className="pf-skill-label">{lenguaje}</span>
            </button>
        </li>
    );
}