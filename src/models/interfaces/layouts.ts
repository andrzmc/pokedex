import { ReactNode } from "react";
import { ViewProps } from "react-native";
import { ScreenLayoutAlignment } from "../types/layouts";

export interface ScreenLayoutProps extends ViewProps {
  children: ReactNode;
  alignment?: ScreenLayoutAlignment;
  scrollable?: boolean;
}