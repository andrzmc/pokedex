import { SkinContext } from '@/context/providers/skin/skin.context';
import { SkinConfig, SkinMode } from '@/models/interfaces/styles/skins';
import { SKIN_OPTIONS } from '@/styles/skins';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';

const SkinProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const AVAILABLE_SKINS = SKIN_OPTIONS;

  const [skinName, setSkinName] = useState<string>('default');
  const [skinMode, setSkinMode] = useState<SkinMode>();
  const [skin, setSkin] = useState<SkinConfig>();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    handleSkin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skinName, isDarkMode]);

  const init = () => {
    setSkinName('default');
  };

  const handleSkin = () => {
    if (!skinName) return;

    let data = AVAILABLE_SKINS[skinName as keyof typeof AVAILABLE_SKINS];

    setSkinMode(data);
    setSkin(data[isDarkMode ? 'dark' : 'light']);
  };

  return (
    <SkinContext.Provider
      value={{
        skin: skin!,
        isDarkMode: isDarkMode!,
        skinName: skinName!,
        setSkinName: setSkinName,
      }}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {skinMode && skin ? children : null}
    </SkinContext.Provider>
  );
};

export default SkinProvider;
