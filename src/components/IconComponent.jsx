export function IconComponent({ icono, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <i className={icono}></i>
    </a>
  );
}

