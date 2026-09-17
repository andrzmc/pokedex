import { SkinContext } from '@/context/providers/skin/skin.context';
import { SkinConfig, SkinMode } from '@/models/interfaces/styles/skins';
import { SKIN_OPTIONS } from '@/styles/skins';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { ColorSchemeName, StatusBar, useColorScheme } from 'react-native';

const SkinProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const AVAILABLE_SKINS = SKIN_OPTIONS;

  const [skinName, setSkinName] = useState<string>('default');
  const [skinMode, setSkinMode] = useState<SkinMode>();
  const [skin, setSkin] = useState<SkinConfig>();
  const [skinAppearance, setSkinAppearance] =
    useState<ColorSchemeName | null>();
  const [isDarkAppearance, setIsDarkAppearance] = useState<boolean>();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    handleSkin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skinName, isDarkMode, skinAppearance]);

  const init = () => {
    setSkinName('default');
  };

  const handleSkin = () => {
    let appearance = handleAppearance();

    if (!skinName) return;

    let data = AVAILABLE_SKINS[skinName as keyof typeof AVAILABLE_SKINS];

    setSkinMode(data);
    setSkin(data[appearance]);
  };

  const handleAppearance = () => {
    let data = skinAppearance ? skinAppearance : isDarkMode ? 'dark' : 'light';
    setIsDarkAppearance(data === 'dark');
    return data;
  };

  return (
    <SkinContext.Provider
      value={{
        skin: skin!,
        isDarkMode: isDarkAppearance!,
        skinName: skinName!,
        appearance: skinAppearance!,
        setSkinName: setSkinName,
        setAppearance: setSkinAppearance,
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
