// src/components/LabShot.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

// Renders an image, falling back to a labeled placeholder until the file
// exists in /public. Keeps the homelab layout looking intentional before the
// real photos and fastfetch screenshots are dropped in.
function LabShot({ src, alt, kind, caption }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className={`lab-shot lab-shot--ph lab-shot--${kind}`}>
        <span className="lab-shot-ph-icon" aria-hidden="true">
          {kind === 'terminal' ? '▢' : '▣'}
        </span>
        <span className="lab-shot-ph-label">{caption}</span>
        {src && <code className="lab-shot-ph-path">{src}</code>}
      </div>
    );
  }

  if (kind === 'terminal') {
    return (
      <figure className="lab-terminal">
        <div className="lab-terminal-bar">
          <span className="lab-tl" />
          <span className="lab-tl" />
          <span className="lab-tl" />
          <span className="lab-terminal-name">{caption}</span>
        </div>
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      </figure>
    );
  }

  return (
    <figure className="lab-photo">
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
    </figure>
  );
}

LabShot.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  kind: PropTypes.oneOf(['photo', 'terminal']).isRequired,
  caption: PropTypes.string.isRequired,
};

export default LabShot;
