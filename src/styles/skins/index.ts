import { ThemeSkins } from '@/models/interfaces/styles/skins';
import { BlueThemeStyle } from './blue';
import { DefaultThemeStyle } from './default';
import { GreenThemeStyle } from './green';
import { RedThemeStyle } from './red';

export const SKIN_THEMES: ThemeSkins = {
  default: DefaultThemeStyle,
  blue: BlueThemeStyle,
  green: GreenThemeStyle,
  red: RedThemeStyle,
};
