'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const themes = [
  { name: 'Default', colors: { primary: '#3B82F6', background: '#fff', text: '#111' } },
  { name: 'Ocean', colors: { primary: '#0891B2', background: '#e0f7fa', text: '#065f46' } },
  { name: 'Forest', colors: { primary: '#059669', background: '#f0fdf4', text: '#065f46' } },
  { name: 'Sunset', colors: { primary: '#EA580C', background: '#fff7ed', text: '#b91c1c' } },
  { name: 'Purple', colors: { primary: '#7C3AED', background: '#f3e8ff', text: '#6d28d9' } }
];

const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeIdx, setThemeIdx] = useState(0);
  const [logo, setLogo] = useState<string | null>(null);
  const [appName, setAppName] = useState('Themed App');

  useEffect(() => {
    const stored = localStorage.getItem('themeConfig');
    if (stored) {
      const { themeIdx, logo, appName } = JSON.parse(stored);
      setThemeIdx(themeIdx || 0);
      setLogo(logo || null);
      setAppName(appName || 'Themed App');
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', themes[themeIdx].colors.primary);
    document.documentElement.style.setProperty('--color-background', themes[themeIdx].colors.background);
    document.documentElement.style.setProperty('--color-text', themes[themeIdx].colors.text);
    localStorage.setItem('themeConfig', JSON.stringify({ themeIdx, logo, appName }));
  }, [themeIdx, logo, appName]);

  return (
    <ThemeContext.Provider value={{ themeIdx, setThemeIdx, logo, setLogo, appName, setAppName, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
