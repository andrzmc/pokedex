import ScreenLayout from '@/components/layouts/screen';
import IconUi from '@/components/ui/icon';
import { TypographyUi } from '@/components/ui/typography';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const MainSettingsScreen = () => {
  const { goBack } = useNavigation();

  return (
    <ScreenLayout
      header={{
        title: 'Settings',
        childrenLeft: (
          <IconUi name="bx-arrow-left-stroke" size={32} onPress={goBack} />
        ),
      }}
      scrollable
    >
      <TypographyUi>Settings</TypographyUi>
    </ScreenLayout>
  );
};

export default MainSettingsScreen;
