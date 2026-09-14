import { SkinContext } from '@/context/providers/skin/skin.context';
import { SkinConfig, SkinMode } from '@/models/interfaces/styles/skins';
import { SKIN_THEMES } from '@/styles/skins';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';

const SkinProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const AVAILABLE_SKINS = SKIN_THEMES;

  const [theme, setTheme] = useState<SkinMode>();
  const [skin, setSkin] = useState<SkinConfig>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleSkinByTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, isDarkMode]);

  const init = () => {
    if (theme) return;

    setTheme(AVAILABLE_SKINS.default);
  };

  const handleSkinByTheme = () => {
    if (!theme) return;
    setSkin(theme[isDarkMode ? 'dark' : 'light']);
  };

  return (
    <SkinContext.Provider
      value={{
        theme: theme!,
        setTheme,
        skin: skin!,
        setSkin,
        isDarkMode: isDarkMode!,
      }}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {theme && skin ? children : null}
    </SkinContext.Provider>
  );
};

export default SkinProvider;
