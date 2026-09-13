import { StyleSheet } from 'react-native';
import { TextFontSizeStyles, TextWeightStyles } from '../global/text';
import { DefaultThemeStyle } from '../themes/default';

export const TypographyUiStyles = StyleSheet.create({
  // Sizes
  ...TextFontSizeStyles,
  // Weights
  ...TextWeightStyles,
  // Colors
  color_normal: {
    color: DefaultThemeStyle.light.text.paragraph,
  },
  color_info: {
    color: DefaultThemeStyle.light.info,
  },
  color_success: {
    color: DefaultThemeStyle.light.success,
  },
  color_error: {
    color: DefaultThemeStyle.light.error,
  },
  color_warning: {
    color: DefaultThemeStyle.light.warning,
  },
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
