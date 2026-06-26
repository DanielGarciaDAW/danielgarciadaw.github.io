export function IconComponent({ label, link }) {
  return (
    <a className="pf-header-icon" href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <span>{label}</span>
    </a>
  );
}

