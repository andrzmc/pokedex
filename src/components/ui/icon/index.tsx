import React, { FC } from 'react';
import { createIconSet } from 'react-native-vector-icons';
import iconMap from '@/config/assets/icons/boxicons.json';
import iconMapFilled from '@/config/assets/icons/boxicons-filled.json';
import iconMapBrands from '@/config/assets/icons/boxicons-brands.json';
import useSkin from '@/services/hooks/useSkin';
import { IconUiProps } from '@/models/interfaces/ui';

const IconUi: FC<IconUiProps> = props => {
  const { name, variant = 'basic', size = 24, color } = props;

  const { skin } = useSkin();

  const BoxIcon = createIconSet(iconMap, 'boxicons', 'boxicons.ttf');
  const BoxIconFilled = createIconSet(
    iconMapFilled,
    'boxicons-filled',
    'boxicons-filled.ttf',
  );
  const BoxIconBrands = createIconSet(
    iconMapBrands,
    'boxicons-brands',
    'boxicons-brands.ttf',
  );

  return (
    <>
      {variant === 'filled' && (
        <BoxIconFilled name={name} size={size} color={color || skin.primary} />
      )}
      {variant === 'brands' && (
        <BoxIconBrands name={name} size={size} color={color || skin.primary} />
      )}
      {variant === 'basic' && (
        <BoxIcon name={name} size={size} color={color || skin.primary} />
      )}
    </>
  );
};

export default IconUi;
