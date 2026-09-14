import { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import { ScreenLayoutAlignment } from '../types/layouts';
import { TypographySize } from '../types/ui';

export interface ErrorStatusCardLayoutProps {
  message: string;
  size?: TypographySize;
}

export interface ScreenLayoutProps extends ViewProps {
  children: ReactNode;
  alignment?: ScreenLayoutAlignment;
  scrollable?: boolean;
}

export interface DetailLayoutProps {
  types: string[];
  color: string;
  images: {
    default: string;
    shiny: string;
  };
  abilities: string[];
  height: number;
  weight: number;
  id: number;
  name: string;
}
