// Load synchronously before the page paints. An external script is allowed by
// the site's script-src 'self' policy, which blocks inline scripts.
(() => {
  let theme;
  try {
    theme = localStorage.getItem('theme');
  } catch {
    // Storage may be unavailable; fall back to the device preference.
  }
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = theme;
})();
