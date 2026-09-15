import ScreenLayout from '@/components/layouts/screen';
import SkinSwitcherTemplate from '@/components/templates/skin-switcher';
import IconUi from '@/components/ui/icon';
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
      <SkinSwitcherTemplate />
    </ScreenLayout>
  );
};

export default MainSettingsScreen;
