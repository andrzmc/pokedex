import React, { FC, useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { LoaderUiProps } from '@/models/interfaces/ui';
import useSkin from '@/services/hooks/useSkin';

const LoaderUi: FC<LoaderUiProps> = props => {
  const { size = 'normal', style, ...rest } = props;

  const { skin } = useSkin();

  const SIZE_MAP = {
    big: 128,
    normal: 96,
    small: 64,
  };

  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const dimension = SIZE_MAP[size] || SIZE_MAP.normal;
  const borderW = dimension / 12;

  return (
    <View style={[styles.container, style]} {...rest}>
      <Animated.View
        style={[
          styles.pokeball,
          {
            width: dimension,
            height: dimension,
            borderRadius: dimension / 2,
            borderColor: skin.primary,
            borderWidth: borderW,
            transform: [{ rotate: spin }],
          },
        ]}
      >
        <View
          style={[
            styles.topHalf,
            {
              backgroundColor: skin.primary,
              height: dimension / 2,
            },
          ]}
        />
        <View
          style={[
            styles.divider,
            {
              backgroundColor: skin.primary,
              height: borderW,
            },
          ]}
        />
        <View
          style={[
            styles.centerButton,
            {
              width: dimension / 3,
              height: dimension / 3,
              borderRadius: dimension / 6,
              borderColor: skin.primary,
              borderWidth: borderW,
            },
          ]}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  pokeball: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  topHalf: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  divider: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  centerButton: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: '#FFFFFF',
  },
});

export default LoaderUi;
