import { ReactNode } from 'react';
import { TextProps, ViewProps, TouchableOpacityProps } from 'react-native';
import {
  TypographyColor,
  TypographySize,
  TypographyWeight,
  CardShape,
  LoaderSize,
} from '../types/ui';

export interface TypographyUiProps extends TextProps {
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: TypographyColor;
  children: ReactNode;
}

export interface CardUiProps extends ViewProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  shape?: CardShape;
  disabled?: boolean;
  onPress?: TouchableOpacityProps['onPress'];
}

export interface WrapperCardUiProps extends ViewProps {
  children?: ReactNode;
  onPress?: TouchableOpacityProps['onPress'];
  disabled?: boolean;
}

export interface BackgroundPatternUiProps {
  backgroundColor?: string;
  position?: { top?: number; right?: number };
  size?: number;
}

export interface LoaderUiProps extends ViewProps {
  size?: LoaderSize;
}
