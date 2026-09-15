import { BoxiconName } from '@/models/types/ui';
import { ColorSchemeName } from 'react-native';

export interface SkinConfig {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  info: string;
  warning: string;
  error: string;
  success: string;
  disabled: string;
  text: SkinsTextConfig;
}

export interface SkinOptions {
  default: SkinMode;
  blue: SkinMode;
  green: SkinMode;
  red: SkinMode;
}

export interface SkinMode {
  light: SkinConfig;
  dark: SkinConfig;
}

export interface SkinsTextConfig {
  title: string;
  subtitle: string;
  paragraph: string;
  inverted: string;
  link: string;
  disabled: string;
  info: string;
  warning: string;
  error: string;
  success: string;
}

export interface SkinsAppaerance {
  light: ColorSchemeName | null;
  dark: ColorSchemeName | null;
  system: ColorSchemeName | null;
}

export interface SkinsAppaeranceIcon {
  light: BoxiconName;
  dark: BoxiconName;
  system: BoxiconName;
}
