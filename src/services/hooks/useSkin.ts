import { SkinContext } from '@/context/providers/skin/skin.context';
import { useContext } from 'react';

const useSkin = () => {
  const { skin, isDarkMode } = useContext(SkinContext);

  return {
    skin,
    isDarkMode,
  };
};

export default useSkin;
