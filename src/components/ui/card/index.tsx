import React, { FC } from 'react';
import { View } from 'react-native';
import { CardUiProps } from '@/models/interfaces/ui';
import { CardUiStyles } from '@/styles/components/ui';
import WrapperCardUi from './wrapper';

export const CardUi: FC<CardUiProps> = props => {
  const {
    children,
    header,
    footer,
    shape = 'rounded',
    disabled = false,
    onPress,
    style,
    ...rest
  } = props;

  const CARD_STYLE = [
    CardUiStyles.container,
    CardUiStyles[`shape_${shape}`],
    disabled && CardUiStyles.disabled,
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
      {children}
      {footer && <View style={CardUiStyles.footer}>{footer}</View>}
    </WrapperCardUi>
  );
};
