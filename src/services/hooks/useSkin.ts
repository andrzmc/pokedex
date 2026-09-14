import { SkinContext } from '@/context/providers/skin/skin.context';
import { useContext } from 'react';

const useSkin = () => {
  const { skin } = useContext(SkinContext);

  return {
    skin,
  };
};

export default useSkin;
