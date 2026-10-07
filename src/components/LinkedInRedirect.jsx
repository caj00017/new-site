import { useEffect } from 'react';
import { profile } from '../data/content';

function LinkedInRedirect() {
  useEffect(() => {
    window.location.replace(profile.links.linkedin);
  }, []);

  return (
    <p>
      Redirecting to <a href={profile.links.linkedin}>Christopher Jones on LinkedIn</a>…
    </p>
  );
}

export default LinkedInRedirect;
