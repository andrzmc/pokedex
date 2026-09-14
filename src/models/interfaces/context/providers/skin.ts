import { SkinConfig, SkinMode } from '../../styles/skins';

export interface SkinState {
  theme: SkinMode;
  setTheme: (theme: SkinMode) => void;
  skin: SkinConfig;
  setSkin: (skin: SkinConfig) => void;
  isDarkMode: boolean;
}
