// src/components/ContactLinks.jsx
import PropTypes from 'prop-types';
import { profile } from '../data/content';

const items = [
  { key: 'github', label: 'GitHub' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'resume', label: 'Résumé' },
  { key: 'handshake', label: 'Handshake' },
  { key: 'email', label: 'Email' },
];

function ContactLinks({ only }) {
  const shown = only ? items.filter((i) => only.includes(i.key)) : items;
  return (
    <div className="contact-links">
      {shown.map((i) => {
        const href = profile.links[i.key];
        const isExternal = href.startsWith('http');
        return (
          <a
            key={i.key}
            href={href}
            className="btn btn-ghost"
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {i.label}
          </a>
        );
      })}
    </div>
  );
}

ContactLinks.propTypes = {
  only: PropTypes.arrayOf(PropTypes.string),
};

export default ContactLinks;
