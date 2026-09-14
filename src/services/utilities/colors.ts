import { processColor } from 'react-native';

export const ColorUtilityService = (value: string) => {
  if (!value) return 'rgb(200, 200, 200)';

  if (value.includes('#')) {
    return value;
  }

  const color = processColor(value);

  if (color == null || typeof color !== 'number') {
    return 'rgb(200, 200, 200)';
  }

  const red = (color >> 16) & 255;
  const green = (color >> 8) & 255;
  const blue = color & 255;

  const newRed = Math.round((red + 255) / 2);
  const newGreen = Math.round((green + 255) / 2);
  const newBlue = Math.round((blue + 255) / 2);

  return `rgb(${newRed}, ${newGreen}, ${newBlue})`;
};

export const ColorUtilityPatternService = (
  color?: string,
  opacity?: number,
): string => {
  if (!color) return 'rgb(200, 200, 200)';

  let r = 0,
    g = 0,
    b = 0;

  if (color.startsWith('#')) {
    let hex = color.substring(1);
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map(c => c + c)
        .join('');
    }
    if (hex.length === 6 || hex.length === 8) {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    }
  } else if (color.startsWith('rgb')) {
    const match = color.match(/\d+/g);
    if (match && match.length >= 3) {
      r = parseInt(match[0], 10);
      g = parseInt(match[1], 10);
      b = parseInt(match[2], 10);
    }
  }

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.8
    ? `rgba(0, 0, 0, ${opacity || 1.0})`
    : `rgba(255, 255, 255, ${opacity || 1.0})`;
};
