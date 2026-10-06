import { useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  const isDark = theme === 'dark';

  function toggleTheme() {
    const nextTheme = isDark ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch {
      // Keep the toggle working even when the browser blocks storage.
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Dark mode"
      aria-pressed={isDark}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {isDark ? (
          <path d="M20.9 13.2A9 9 0 0 1 10.8 3.1a9 9 0 1 0 10.1 10.1Z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
          </>
        )}
      </svg>
    </button>
  );
}

export default ThemeToggle;
