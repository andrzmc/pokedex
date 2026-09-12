import { TypographyUiProps } from '@/models/interfaces/ui';
import { TypographyUiStyles } from '@/styles/components/ui';
import React, { FC } from 'react';
import { Text } from 'react-native';

export const TypographyUi: FC<TypographyUiProps> = ({
  size = 'paragraph',
  weight = 'normal',
  color = 'normal',
  style,
  children,
  ...rest
}) => {
  const textStyle = [
    TypographyUiStyles[`size_${size}`],
    TypographyUiStyles[`weight_${weight}`],
    TypographyUiStyles[`color_${color}`],
    style,
  ];

  return (
    <Text style={textStyle} {...rest}>
      {children}
    </Text>
  );
};
