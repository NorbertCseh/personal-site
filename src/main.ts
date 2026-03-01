type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/**
 * Initializes the theme toggle functionality.
 */
function initThemeToggle(): void {
  const themeToggle = document.getElementById(
    'theme-toggle',
  ) as HTMLButtonElement | null;
  if (!themeToggle) return;

  const getSystemTheme = (): Theme =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  const applyTheme = (theme: Theme): void => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Accessibility updates
    themeToggle.setAttribute(
      'aria-pressed',
      theme === 'dark' ? 'true' : 'false',
    );
    themeToggle.setAttribute(
      'aria-label',
      `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`,
    );
  };

  // Initial load
  const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
  const initialTheme = savedTheme || getSystemTheme();
  applyTheme(initialTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute(
      'data-theme',
    ) as Theme;
    const newTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });
}

/**
 * Initializes the scroll reveal animation for sections.
 */
function initSectionReveal(): void {
  const sections = document.querySelectorAll('.cv-section');
  if (sections.length === 0) return;

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Housekeeping: stop observing once visible
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
}

/**
 * Initializes the print button functionality.
 */
function initPrint(): void {
  const printButton = document.querySelector(
    '.print-button',
  ) as HTMLButtonElement | null;
  if (!printButton) return;

  printButton.addEventListener('click', () => {
    window.print();
  });
}

// Run initializations
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initSectionReveal();
  initPrint();
});
