import { SkinContext } from '@/context/providers/skin/skin.context';
import { SKIN_OPTIONS } from '@/styles/skins';
import { useContext } from 'react';

const useSkin = () => {
  const { skin, skinName, setSkinName, isDarkMode } = useContext(SkinContext);

  const onChangeSkin = (event: string) => {
    const data = Object.entries(SKIN_OPTIONS)
      .map(([key, _]) => key)
      .includes(event);
    setSkinName(event && data ? event : 'default');
  };

  return {
    skin,
    skinName,
    isDarkMode,
    onChangeSkin,
  };
};

export default useSkin;
