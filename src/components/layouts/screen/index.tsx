import { ScreenLayoutProps } from '@/models/interfaces/layouts';
import { ScreenLayoutStyles } from '@/styles/components/layouts';
import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenLayout: FC<ScreenLayoutProps> = props => {
  const {
    children,
    alignment = 'top',
    scrollable = true,
    style,
    ...rest
  } = props;
  
  const SCREEN_STYLE = [
    scrollable
      ? ScreenLayoutStyles.scrollContent
      : ScreenLayoutStyles.container,
    ScreenLayoutStyles[`alignment_${alignment}`],
  ];

  return (
    <SafeAreaView style={[ScreenLayoutStyles.container, style]} {...rest}>
      {scrollable ? (
        <ScrollView
          contentContainerStyle={SCREEN_STYLE}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={SCREEN_STYLE}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default ScreenLayout;
