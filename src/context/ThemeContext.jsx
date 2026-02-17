import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

const THEME_KEY = 'themeIndex';

const themes = [
  {
    lines: 'linear-gradient(#00000010 1px, transparent 1px), linear-gradient(90deg, #00000010 1px, transparent 1px)',
    background: '#f4a261',
    text: '#264653',
    accent: '#e76f51',
    highlight: '#2a9d8f'
  },
  {
    lines: 'linear-gradient(#e6e1c9 1px, transparent 1px), linear-gradient(90deg, #e6e1c9 1px, transparent 1px)',
    background: '#caf0f8',
    text: '#03045e',
    accent: '#0077b6',
    highlight: '#90e0ef'
  },
  {
    lines: 'linear-gradient(#00000010 1px, transparent 1px), linear-gradient(90deg, #00000010 1px, transparent 1px)',
    background: '#ffe066',
    text: '#3a0ca3',
    accent: '#ff006e',
    highlight: '#8338ec'
  },
  {
    lines: 'linear-gradient(#00000010 1px, transparent 1px), linear-gradient(90deg, #00000010 1px, transparent 1px)',
    background: '#d8f3dc',
    text: '#081c15',
    accent: '#40916c',
    highlight: '#52b788'
  }
];

function applyTheme(idx) {
  const theme = themes[idx];
  const root = document.documentElement;
  root.style.setProperty('--bg', theme.background);
  root.style.setProperty('--text', theme.text);
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--highlight', theme.highlight);
  root.style.setProperty('--lines', theme.lines);
  localStorage.setItem(THEME_KEY, String(idx));
}

function resetToOriginal() {
  const root = document.documentElement;
  root.style.removeProperty('--bg');
  root.style.removeProperty('--text');
  root.style.removeProperty('--accent');
  root.style.removeProperty('--highlight');
  root.style.removeProperty('--lines');
  localStorage.removeItem(THEME_KEY);
}

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(-1);

  // restore theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === null) return;
    const idx = parseInt(saved, 10);
    if (Number.isNaN(idx) || idx < 0 || idx >= themes.length) {
      resetToOriginal();
      return;
    }
    setCurrentTheme(idx);
    applyTheme(idx);
  }, []);

  const cycleTheme = () => {
    if (currentTheme === -1) {
      setCurrentTheme(0);
      applyTheme(0);
      return;
    }

    const next = currentTheme + 1;

    if (next >= themes.length) {
      resetToOriginal();
      setCurrentTheme(-1);
      return;
    }

    setCurrentTheme(next);
    applyTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
