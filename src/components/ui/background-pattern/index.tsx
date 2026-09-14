import { BackgroundPatternUiProps } from '@/models/interfaces/ui';
import { ColorUtilityPatternService } from '@/services/utilities/colors';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const BackgroundPatternUi: FC<BackgroundPatternUiProps> = props => {
  const { backgroundColor, position, size = 125 } = props;

  const hasTop = position?.top !== undefined;
  const hasRight = position?.right !== undefined;
  const hasLeft = position?.left !== undefined;
  const hasBottom = position?.bottom !== undefined;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: ColorUtilityPatternService(backgroundColor, 0.15),
          width: size,
          height: size,
          borderRadius: size / 2,
          ...(hasTop ? { top: position.top } : {}),
          ...(hasBottom ? { bottom: position.bottom } : {}),
          ...(!hasTop && !hasBottom
            ? { top: '50%', marginTop: -size / 2 }
            : {}),
          ...(hasLeft ? { left: position.left } : {}),
          ...(hasRight ? { right: position.right } : {}),
          ...(!hasLeft && !hasRight ? { alignSelf: 'center' } : {}),
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
