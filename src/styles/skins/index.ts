import {
  SkinOptions,
  SkinsAppaerance,
  SkinsAppaeranceIcon,
} from '@/models/interfaces/styles/skins';
import { BlueThemeStyle } from './blue';
import { DefaultThemeStyle } from './default';
import { GreenThemeStyle } from './green';
import { RedThemeStyle } from './red';

export const SKIN_OPTIONS: SkinOptions = {
  default: DefaultThemeStyle,
  blue: BlueThemeStyle,
  green: GreenThemeStyle,
  red: RedThemeStyle,
};

export const SKIN_APPEARANCE: SkinsAppaerance = {
  light: 'light',
  dark: 'dark',
  system: null,
};

export const SKIN_ICON_APPEARANCE: SkinsAppaeranceIcon = {
  light: 'bx-sun',
  dark: 'bx-moon',
  system: 'bx-mobile',
};
