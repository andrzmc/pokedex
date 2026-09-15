import { SkinConfig } from '../../styles/skins';
import { ColorSchemeName } from 'react-native';

export interface SkinState {
  skin: SkinConfig;
  isDarkMode: boolean;
  skinName: string;
  appearance: ColorSchemeName | null;
  setSkinName: (value: string) => void;
  setAppearance: (value: ColorSchemeName | null) => void;
}
