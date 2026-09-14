import { StyleSheet } from 'react-native';

export const TextFontSizeStyles = StyleSheet.create({
  size_title: {
    fontSize: 28,
    lineHeight: 34,
  },
  size_subtitle: {
    fontSize: 20,
    lineHeight: 28,
  },
  size_paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  size_small: {
    fontSize: 12,
    lineHeight: 16,
  },
});

export const TextWeightStyles = StyleSheet.create({
  weight_normal: {
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  weight_medium: {
    fontFamily: 'Roboto',
    fontWeight: '500',
  },
  weight_bold: {
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
  weight_extrabold: {
    fontFamily: 'Roboto',
    fontWeight: '900',
  },
});
