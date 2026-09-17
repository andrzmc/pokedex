import React, { FC } from 'react';
import IconUi from '@/components/ui/icon';
import {
  ColorSchemeName,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import useSkin from '@/services/hooks/useSkin';
import { SKIN_APPEARANCE, SKIN_ICON_APPEARANCE } from '@/styles/skins';
import { useSelector } from 'react-redux';
import { RootState } from '@/context/store';

const AppaeranceSkinSwitcherTemplate: FC = () => {
  const { skin, onChangeSkinAppearance } = useSkin();

  const settingsStore = useSelector((state: RootState) => state.settings);

  const handleStylesActive = (value: ColorSchemeName | null) => {
    const isActive = settingsStore.appareance === value;
    return {
      borderColor: isActive ? skin.primary : skin.text.paragraph,
    };
  };

  return (
    <View style={styles.options}>
      {Object.entries(SKIN_APPEARANCE).map(([key, value]) => (
        <TouchableOpacity
          key={key}
          style={[styles.option, handleStylesActive(value)]}
          onPress={() =>
            onChangeSkinAppearance(value as ColorSchemeName | null)
          }
        >
          <IconUi
            name={
              SKIN_ICON_APPEARANCE[key as keyof typeof SKIN_ICON_APPEARANCE]
            }
            size={32}
            color={
              settingsStore.appareance === value
                ? skin.primary
                : skin.text.paragraph
            }
            variant={settingsStore.appareance === value ? 'filled' : 'basic'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AppaeranceSkinSwitcherTemplate;

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  option: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 12,
  },
});
