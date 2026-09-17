import React, { FC } from 'react';
import { View } from 'react-native';
import { CardUiProps } from '@/models/interfaces/ui';
import { CardUiStyles } from '@/styles/components/ui';
import WrapperCardUi from './wrapper';
import { TypographyUi } from '../typography';

export const CardUi: FC<CardUiProps> = props => {
  const {
    children,
    header,
    footer,
    title,
    subtitle,
    shape = 'rounded',
    padding = { top: 20, right: 20, left: 20, bottom: 20 },
    disabled = false,
    onPress,
    style,
    ...rest
  } = props;

  const CARD_STYLE = [
    CardUiStyles.container,
    CardUiStyles[`shape_${shape}`],
    disabled && CardUiStyles.disabled,
    {
      paddingTop: padding.top,
      paddingRight: padding.right,
      paddingBottom: padding.bottom,
      paddingLeft: padding.left,
    },
    style,
  ];

  return (
    <WrapperCardUi
      onPress={onPress}
      disabled={disabled}
      style={CARD_STYLE}
      {...rest}
    >
      {header && <View style={CardUiStyles.header}>{header}</View>}
      {title && (
        <TypographyUi size="title" color="title">
          {title}
        </TypographyUi>
      )}
      {subtitle && (
        <TypographyUi size="subtitle" color="subtitle">
          {subtitle}
        </TypographyUi>
      )}
      {children}
      {footer && <View style={CardUiStyles.footer}>{footer}</View>}
    </WrapperCardUi>
  );
};
