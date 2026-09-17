import { SkinContext } from '@/context/providers/skin/skin.context';
import { SKIN_OPTIONS } from '@/styles/skins';
import { useContext } from 'react';
import { ColorSchemeName } from 'react-native';

const useSkin = () => {
  const { skin, skinName, appearance, isDarkMode, setSkinName, setAppearance } =
    useContext(SkinContext);

  const onChangeSkin = (event: string) => {
    const data = Object.entries(SKIN_OPTIONS)
      .map(([key, _]) => key)
      .includes(event);
    setSkinName(event && data ? event : 'default');
  };

  const onChangeAppearance = (event: ColorSchemeName | null) => {
    setAppearance(event);
  };

  return {
    skin,
    skinName,
    appearance,
    isDarkMode,
    onChangeSkin,
    onChangeAppearance,
  };
};

export default useSkin;
