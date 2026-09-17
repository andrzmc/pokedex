import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';
import useSkin from '@/services/hooks/useSkin';
import { SKIN_OPTIONS } from '@/styles/skins';
import React, { FC } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const SelectorSkinSwitcherTemplate: FC = () => {
  const { skin, skinName, onChangeSkin } = useSkin();

  const handleSelectorStyle = (key: string) => {
    return {
      borderWidth: skinName === key ? 2 : 0,
      borderColor: skinName === key ? skin.tertiary : 'transparent',
    };
  };

  return (
    <CardUi
      title="Style"
      subtitle="Choose the base color of the pokédex"
      padding={{ left: 0, right: 0 }}
    >
      <View style={styles.options}>
        {Object.entries(SKIN_OPTIONS).map(([key, item]) => (
          <TouchableOpacity
            key={key}
            style={styles.option}
            onPress={() => onChangeSkin(key)}
          >
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: item.light.primary,
                },
                handleSelectorStyle(key),
              ]}
            />
            <TypographyUi size="small" style={styles.text}>
              {key}
            </TypographyUi>
          </TouchableOpacity>
        ))}
      </View>
    </CardUi>
  );
};

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginVertical: 8,
  },
  option: {
    alignItems: 'center',
    gap: 4,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  text: {
    textTransform: 'capitalize',
  },
});

export default SelectorSkinSwitcherTemplate;
