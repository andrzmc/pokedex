import { ReactNode } from "react";
import { TextProps } from "react-native";
import { TypographyColor, TypographySize, TypographyWeight } from "../types/ui";

export interface TypographyUiProps extends TextProps {
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: TypographyColor;
  children: ReactNode;
}