import { SkinContext } from '@/context/providers/skin/skin.context';
import {
  onChangeAppearance,
  onChangeSkinName,
} from '@/context/store/reducers/settings';
import { SKIN_OPTIONS } from '@/styles/skins';
import { useContext } from 'react';
import { ColorSchemeName } from 'react-native';
import { useDispatch } from 'react-redux';

const useSkin = () => {
  const { skin, skinName, appearance, isDarkMode } = useContext(SkinContext);

  const dispatch = useDispatch();

  const onChangeSkin = (event: string) => {
    const data = Object.entries(SKIN_OPTIONS)
      .map(([key, _]) => key)
      .includes(event);
    dispatch(onChangeSkinName(event && data ? event : 'default'));
  };

  const onChangeSkinAppearance = (event: ColorSchemeName | null) => {
    dispatch(onChangeAppearance(event));
  };

  return {
    skin,
    skinName,
    appearance,
    isDarkMode,
    onChangeSkin,
    onChangeSkinAppearance,
  };
};

export default useSkin;
