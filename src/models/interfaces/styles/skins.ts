export interface SkinConfig {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  info: string;
  warning: string;
  error: string;
  success: string;
  disabled: string;
  text: {
    titles: string;
    subtitles: string;
    paragraph: string;
    inverted: string;
    link: string;
    disabled: string;
    info: string;
    warning: string;
    error: string;
    success: string;
  };
}

export interface SkinOptions {
  default: SkinMode;
  blue: SkinMode;
  green: SkinMode;
  red: SkinMode;
}

export interface SkinMode {
  light: SkinConfig;
  dark: SkinConfig;
}
