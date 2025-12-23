type Theme = 'light' | 'dark' | 'auto';

const THEME_KEY = 'theme';

function prefersDark(): boolean {
  try {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch {
    return false;
  }
}

function timeBasedDark(): boolean {
  try {
    const h = new Date().getHours();
    return h >= 19 || h < 7; // dark between 7pm-7am
  } catch {
    return false;
  }
}

export function applyTheme(theme: 'light' | 'dark' | null) {
  try {
    if (theme === 'light') document.documentElement.classList.add('light');
    else document.documentElement.classList.remove('light');
  } catch {}
}

export function getEffectiveTheme(): 'light' | 'dark' {
  try {
    if (document.documentElement.classList.contains('light')) return 'light';
  } catch {}
  return 'dark';
}

export function setUserTheme(value: Theme) {
  try {
    if (value === 'auto') {
      localStorage.removeItem(THEME_KEY);
      // apply system or time based
      const dark = (window.matchMedia ? prefersDark() : timeBasedDark());
      applyTheme(dark ? 'dark' : 'light');
    } else {
      localStorage.setItem(THEME_KEY, value);
      applyTheme(value);
    }
  } catch {}
}

export function initTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY) as Theme | null;

    if (stored === 'light' || stored === 'dark') {
      applyTheme(stored);
    } else {
      // auto: use prefers-color-scheme when available, else use time
      const dark = (window.matchMedia ? prefersDark() : timeBasedDark());
      applyTheme(dark ? 'dark' : 'light');

      // listen to system preference changes
      if (window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = (e: MediaQueryListEvent) => {
          // only respond when user hasn't set an explicit theme
          const now = localStorage.getItem(THEME_KEY);
          if (!now) applyTheme(e.matches ? 'dark' : 'light');
        };
        try { mq.addEventListener('change', handler); } catch { mq.addListener && mq.addListener(handler); }
      }
    }
  } catch {}
}

export default {
  initTheme,
  setUserTheme,
  applyTheme,
  getEffectiveTheme,
};
