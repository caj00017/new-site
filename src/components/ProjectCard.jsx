// src/components/ProjectCard.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProjectCard({ project, featured = false }) {
  const { name, tagline, meta, status, summary, highlights, tech, image, links, credit } = project;

  return (
    <article className={`project-card ${featured ? 'is-featured' : ''}`}>
      <div className="project-banner" aria-hidden="true" />

      <div className="project-body">
        <header className="project-head">
          <div>
            <h3 className="project-name">{name}</h3>
            <p className="project-tagline">{tagline}</p>
          </div>
          {status && <span className="status-pill">{status}</span>}
        </header>

        <p className="project-meta">{meta}</p>
        <p className="project-summary">{summary}</p>

        {image && (
          <div className="project-shot">
            <img src={image} alt={`${name} screenshot`} loading="lazy" />
          </div>
        )}

        {highlights?.length > 0 && (
          <ul className="project-highlights">
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        {tech?.length > 0 && (
          <ul className="tech-list">
            {tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        {links?.length > 0 && (
          <div className="project-links">
            {links.map((l) =>
              l.href.startsWith('/') ? (
                <Link
                  key={l.href}
                  to={l.href}
                  className={l.primary ? 'btn btn-primary' : 'btn btn-ghost'}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={l.primary ? 'btn btn-primary' : 'btn btn-ghost'}
                >
                  {l.label}
                </a>
              )
            )}
          </div>
        )}

        {credit && <p className="project-credit">{credit}</p>}
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  featured: PropTypes.bool,
};

export default ProjectCard;
