import { FaFilePdf, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import PropTypes from 'prop-types'

const iconMap = {
  CV: FaFilePdf,
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
}

export function IconComponent({ label, link }) {
  const Icon = iconMap[label]

  return (
    <a className="pf-header-icon" href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {Icon ? <Icon aria-hidden="true" /> : <span>{label}</span>}
    </a>
  );
}

IconComponent.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

