import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';
import { DefaultThemeStyle } from '@/styles/themes/default';
import React, { FC } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ErrorStatusCardLayoutProps } from '@/models/interfaces/layouts';

const ErrorStatusCardLayout: FC<ErrorStatusCardLayoutProps> = props => {
  const { message, size = 'paragraph' } = props;

  const COLOR = DefaultThemeStyle.light.error;

  const SIZE_CONFIG = {
    title: { imageSize: 96, padding: 32, spacing: 16 },
    subtitle: { imageSize: 72, padding: 24, spacing: 12 },
    paragraph: { imageSize: 48, padding: 16, spacing: 8 },
    small: { imageSize: 32, padding: 12, spacing: 4 },
  };

  const DIMENSIONS = SIZE_CONFIG[size] || SIZE_CONFIG.paragraph;

  return message ? (
    <CardUi
      shape="rounded"
      style={[
        styles.card,
        {
          padding: DIMENSIONS.padding,
          borderColor: COLOR,
        },
      ]}
    >
      <View style={[styles.content, { gap: DIMENSIONS.spacing }]}>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
          }}
          style={{ width: DIMENSIONS.imageSize, height: DIMENSIONS.imageSize }}
          resizeMode="contain"
        />
        <TypographyUi
          color="error"
          size={size}
          weight="bold"
          style={styles.text}
        >
          {message}
        </TypographyUi>
      </View>
    </CardUi>
  ) : null;
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderStyle: 'dashed',
    alignSelf: 'stretch',
    margin: 8,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default ErrorStatusCardLayout;
