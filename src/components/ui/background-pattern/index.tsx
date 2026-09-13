import { BackgroundPatternUiProps } from '@/models/interfaces/ui';
import { ColorUtilityPatternService } from '@/services/utilities/colors';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const BackgroundPatternUi: FC<BackgroundPatternUiProps> = props => {
  const { backgroundColor, position, size = 125 } = props;

  const hasTop = position?.top !== undefined;
  const hasRight = position?.right !== undefined;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: ColorUtilityPatternService(backgroundColor),
          width: size,
          height: size,
          borderRadius: size / 2,
          top: hasTop ? position.top : '50%',
          marginTop: hasTop ? 0 : -size / 2,
          ...(hasRight ? { right: position.right } : { alignSelf: 'center' }),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: -1,
  },
});

export default BackgroundPatternUi;
