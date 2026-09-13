import { TypographyUiProps } from '@/models/interfaces/ui';
import { TypographyUiStyles } from '@/styles/components/ui';
import React, { FC } from 'react';
import { Text } from 'react-native';

export const TypographyUi: FC<TypographyUiProps> = props => {
  const {
    size = 'paragraph',
    weight = 'normal',
    color = 'normal',
    style,
    children,
    ...rest
  } = props;

  return (
    <Text
      style={[
        TypographyUiStyles[`size_${size}`],
        TypographyUiStyles[`weight_${weight}`],
        TypographyUiStyles[`color_${color}`],
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};
