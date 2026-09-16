import React, { FC } from 'react';
import { TypographyUi } from '@/components/ui/typography';
import IconUi from '@/components/ui/icon';
import {
  ColorSchemeName,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import useSkin from '@/services/hooks/useSkin';
import { SKIN_APPEARANCE, SKIN_ICON_APPEARANCE } from '@/styles/skins';

const AppaeranceSkinSwitcherTemplate: FC = () => {
  const { skin, onChangeAppearance } = useSkin();

  return (
    <View style={styles.container}>
      <TypographyUi size="title" weight="bold" color="title">
        Apariencia
      </TypographyUi>
      <TypographyUi size="subtitle" color="subtitle">
        Elige cómo quieres que luzca pokédex
      </TypographyUi>

      <View style={styles.appearanceRow}>
        {Object.entries(SKIN_APPEARANCE).map(([key, value]) => (
          <TouchableOpacity
            key={key}
            style={[styles.appearanceCard, { borderColor: skin.tertiary }]}
            onPress={() => onChangeAppearance(value as ColorSchemeName | null)}
          >
            <IconUi
              name={
                SKIN_ICON_APPEARANCE[key as keyof typeof SKIN_ICON_APPEARANCE]
              }
              size={32}
            />
            <TypographyUi weight="bold">{key}</TypographyUi>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default AppaeranceSkinSwitcherTemplate;

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  appearanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  appearanceCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 12,
  },
  appearanceCardActive: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 12,
  },
});
