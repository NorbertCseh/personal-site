type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const themeToggle = document.querySelector<HTMLButtonElement>('#theme-toggle');
document.documentElement.classList.add('js-enabled');

const getSystemTheme = (): Theme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const applyTheme = (theme: Theme): void => {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle?.setAttribute('aria-pressed', String(theme === 'dark'));
  themeToggle?.setAttribute(
    'aria-label',
    `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`,
  );
};

let savedTheme: string | null = null;
try {
  savedTheme = localStorage.getItem(STORAGE_KEY);
} catch {
  savedTheme = null;
}
const initialTheme: Theme =
  savedTheme === 'dark' || savedTheme === 'light'
    ? savedTheme
    : getSystemTheme();
applyTheme(initialTheme);

themeToggle?.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';
  try {
    localStorage.setItem(STORAGE_KEY, nextTheme);
  } catch {}
  applyTheme(nextTheme);
});

document
  .querySelector<HTMLButtonElement>('.print-button')
  ?.addEventListener('click', () => {
    window.print();
  });

const sections = document.querySelectorAll<HTMLElement>('.cv-section');
if (
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' },
  );
  sections.forEach((section) => observer.observe(section));
} else {
  sections.forEach((section) => section.classList.add('visible'));
}
