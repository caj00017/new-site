import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TypeIt from 'typeit';

function TypedHeading({ children, id }) {
  const headingRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const heading = headingRef.current;
    let instance;
    // Defer setup so StrictMode can clean up its initial effect before typing starts.
    const frame = requestAnimationFrame(() => {
      instance = new TypeIt(heading, { speed: 28, waitUntilVisible: true }).go();
    });

    return () => {
      cancelAnimationFrame(frame);
      instance?.destroy();
      heading.textContent = children;
    };
  }, [children]);

  return (
    <h1 id={id} ref={headingRef} aria-label={children}>
      {children}
    </h1>
  );
}

TypedHeading.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default TypedHeading;
