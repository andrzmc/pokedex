import { SkinMode, SkinConfig } from '@/models/interfaces/styles/skins';
import { createContext } from 'react';

export const SkinContext = createContext<{
  theme: SkinMode;
  setTheme: (theme: SkinMode) => void;
  skin: SkinConfig;
  setSkin: (skin: SkinConfig) => void;
  isDarkMode: boolean;
}>(
  {} as {
    theme: SkinMode;
    setTheme: (theme: SkinMode) => void;
    skin: SkinConfig;
    setSkin: (skin: SkinConfig) => void;
    isDarkMode: boolean;
  },
);
