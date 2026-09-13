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
