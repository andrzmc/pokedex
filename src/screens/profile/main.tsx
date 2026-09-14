import ScreenLayout from '@/components/layouts/screen';
import IconUi from '@/components/ui/icon';
import { TypographyUi } from '@/components/ui/typography';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const MainProfileScreen = () => {
  const { goBack } = useNavigation();

  return (
    <ScreenLayout
      header={{
        title: 'Mi Perfil',
        childrenLeft: <IconUi name="bx-chevron-left" onPress={goBack} />,
      }}
    >
      <TypographyUi>Perfil</TypographyUi>
    </ScreenLayout>
  );
};

export default MainProfileScreen;
