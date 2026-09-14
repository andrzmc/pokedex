import { StyleSheet } from 'react-native';
import { TextFontSizeStyles, TextWeightStyles } from '../global/text';
import { DefaultThemeStyle } from '../skins/default';

export const TypographyUiStyles = StyleSheet.create({
  ...TextFontSizeStyles,
  ...TextWeightStyles,
});

export const CardUiStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: DefaultThemeStyle.light.secondary,
    overflow: 'hidden',
  },
  shape_rounded: {
    borderRadius: 16,
  },
  shape_flat: {
    borderRadius: 0,
  },
  disabled: {
    opacity: 0.5,
  },
  header: {
    marginBottom: 12,
  },
  footer: {
    marginTop: 12,
  },
});
