import React from 'react';
import PropTypes from 'prop-types';

export function LanguageCard({ imageSrc, altText, description, onImageClick }) {
    return (
        <div className="pf-projects-content-contain">
            <p>{description}</p>
            <figcaption>
                <img
                    src={imageSrc}
                    alt={altText}
                    onClick={() => onImageClick(imageSrc)}
                    className="clickable-image"
                />
            </figcaption>
        </div>
    );
}

LanguageCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onImageClick: PropTypes.func.isRequired,
};
