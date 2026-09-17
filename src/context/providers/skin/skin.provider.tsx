import { SkinContext } from '@/context/providers/skin/skin.context';
import { RootState } from '@/context/store';
import { SkinConfig, SkinMode } from '@/models/interfaces/styles/skins';
import { SKIN_OPTIONS } from '@/styles/skins';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

const SkinProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const AVAILABLE_SKINS = SKIN_OPTIONS;

  const settingsStore = useSelector((state: RootState) => state.settings);

  const [skinMode, setSkinMode] = useState<SkinMode>();
  const [skin, setSkin] = useState<SkinConfig>();
  const [isDarkAppearance, setIsDarkAppearance] = useState<boolean>();

  useEffect(() => {
    handleSkin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settingsStore?.skinName, settingsStore.appareance, isDarkMode]);

  const handleSkin = () => {
    let appearance = handleAppearance();

    let data =
      AVAILABLE_SKINS[settingsStore?.skinName as keyof typeof AVAILABLE_SKINS];

    setSkinMode(data);
    setSkin(data[appearance]);
  };

  const handleAppearance = () => {
    let data = settingsStore?.appareance
      ? settingsStore.appareance
      : isDarkMode
      ? 'dark'
      : 'light';
    setIsDarkAppearance(data === 'dark');
    return data;
  };

  return (
    <SkinContext.Provider
      value={{
        skin: skin!,
        isDarkMode: isDarkAppearance!,
        skinName: settingsStore?.skinName!,
        appearance: settingsStore?.appareance!,
      }}
    >
      <StatusBar
        barStyle={isDarkAppearance ? 'light-content' : 'dark-content'}
      />
      {skinMode && skin ? children : null}
    </SkinContext.Provider>
  );
};

export default SkinProvider;
