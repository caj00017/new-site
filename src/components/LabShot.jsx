// src/components/LabShot.jsx
import PropTypes from 'prop-types';

// Show the original dashboard without cropping, with full-size access for detail.
function LabShot({ src, alt, caption, width, height }) {
  return (
    <figure className="lab-screenshot">
      <a href={src} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} width={width} height={height} loading="lazy" />
      </a>
      <figcaption>
        <span>{caption}</span>
        <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`${caption}: view full size`}>
          View full size ↗
        </a>
      </figcaption>
    </figure>
  );
}

LabShot.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default LabShot;
