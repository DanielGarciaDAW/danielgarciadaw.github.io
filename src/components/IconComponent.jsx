export function IconComponent({ icono, link }) {
  return (
    <a className="pf-header-icon"href={link} target="_blank" rel="noopener noreferrer">
      <i className={icono}></i>
    </a>
  );
}

