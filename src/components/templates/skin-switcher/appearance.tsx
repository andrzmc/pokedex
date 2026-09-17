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
import { CardUi } from '@/components/ui/card';

const AppaeranceSkinSwitcherTemplate: FC = () => {
  const { skin, appearance, onChangeAppearance } = useSkin();

  const handleStylesActive = (value: ColorSchemeName | null) => {
    const isActive = appearance === value;
    return {
      borderColor: isActive ? skin.primary : skin.text.paragraph,
    };
  };

  return (
    <CardUi
      title="Appearance"
      subtitle="Choose how you want the pokédex to look"
      padding={{ left: 0, right: 0 }}
    >
      <View style={styles.appearanceRow}>
        {Object.entries(SKIN_APPEARANCE).map(([key, value]) => (
          <TouchableOpacity
            key={key}
            style={[styles.appearanceCard, handleStylesActive(value)]}
            onPress={() => onChangeAppearance(value as ColorSchemeName | null)}
          >
            <IconUi
              name={
                SKIN_ICON_APPEARANCE[key as keyof typeof SKIN_ICON_APPEARANCE]
              }
              size={32}
              color={appearance === value ? skin.primary : skin.text.paragraph}
              variant={appearance === value ? 'filled' : 'basic'}
            />
          </TouchableOpacity>
        ))}
      </View>
    </CardUi>
  );
};

export default AppaeranceSkinSwitcherTemplate;

const styles = StyleSheet.create({
  appearanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  appearanceCard: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 12,
  },
});
