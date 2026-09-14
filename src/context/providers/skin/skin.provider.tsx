import { SkinContext } from '@/context/providers/skin/skin.context';
import { SkinConfig, SkinMode } from '@/models/interfaces/styles/skins';
import { SKIN_THEMES } from '@/styles/skins';
import React, { FC, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

const SkinProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
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
  }, [theme]);

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
      value={{ theme: theme!, setTheme, skin: skin!, setSkin }}
    >
      {theme && skin ? children : null}
    </SkinContext.Provider>
  );
};

export default SkinProvider;
