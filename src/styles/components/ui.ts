import { StyleSheet } from 'react-native';
import { TextFontSizeStyles, TextWeightStyles } from '../global/text';

export const TypographyUiStyles = StyleSheet.create({
  ...TextFontSizeStyles,
  ...TextWeightStyles,
});

export const CardUiStyles = StyleSheet.create({
  container: {
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
