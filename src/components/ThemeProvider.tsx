'use client';

import { useEffect } from 'react';
import type { ThemeColors } from '@/lib/content-types';

interface ThemeProviderProps {
  theme: ThemeColors;
}

export default function ThemeProvider({ theme }: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.primaryColor);
    root.style.setProperty('--secondary-color', theme.secondaryColor);
    root.style.setProperty('--accent-gold', theme.accentGold);
    root.style.setProperty('--dark-bg', theme.darkBg);
    root.style.setProperty('--dark-bg-2', theme.darkBg2);
    root.style.setProperty('--light-bg', theme.lightBg);
    root.style.setProperty('--text-dark', theme.textDark);
    root.style.setProperty('--text-light', theme.textLight);
    root.style.setProperty('--border-color', theme.borderColor);
    root.style.setProperty('--nav-bg-start', theme.navBgStart);
    root.style.setProperty('--nav-bg-end', theme.navBgEnd);
  }, [theme]);

  return null;
}
