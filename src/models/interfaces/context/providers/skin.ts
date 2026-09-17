import { SkinConfig } from '../../styles/skins';
import { ColorSchemeName } from 'react-native';

export interface SkinState {
  skin: SkinConfig;
  isDarkMode: boolean;
  skinName: string;
  appearance: ColorSchemeName | null;
}
