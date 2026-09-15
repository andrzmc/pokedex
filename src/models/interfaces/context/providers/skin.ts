import { SkinConfig } from '../../styles/skins';

export interface SkinState {
  skin: SkinConfig;
  isDarkMode: boolean;
  skinName: string;
  setSkinName: (skinName: string) => void;
}
