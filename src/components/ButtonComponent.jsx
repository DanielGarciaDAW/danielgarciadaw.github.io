import './ButtonComponent.css';
import React, {useState} from 'react';

export function ButtonComponent({lenguaje, icon, onClick}) {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true); // Alterna el estado para el efecto
        onClick(lenguaje);
        setTimeout(() => setClick(false), 500);
    };

    const buttonFx = click
        ? "button_slide slide_right rotate-scale-down"
        : "button_slide slide_right";

    return (
        <li className={buttonFx} onClick={handleClick}>
            <span className={`fa-brands ${icon}`}/> {lenguaje}
        </li>
    );
}