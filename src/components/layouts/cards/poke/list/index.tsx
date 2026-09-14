import BackgroundPatternUi from '@/components/ui/background-pattern';
import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';
import { CatalogItem } from '@/models/interfaces/catalog';
import { StackPokeParamList } from '@/models/types/navigation';
import {
  ColorUtilityPatternService,
  ColorUtilityService,
} from '@/services/utilities/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const PokeListCardLayout: FC<CatalogItem> = props => {
  const { value, label, color, image, tags } = props;

  const POKE_CARD_COLOR = ColorUtilityService(color || '');
  const POKE_FONT_COLOR = ColorUtilityPatternService(POKE_CARD_COLOR);

  const { navigate } = useNavigation<NavigationProp<StackPokeParamList>>();

  return (
    <CardUi
      style={[styles.container, { backgroundColor: POKE_CARD_COLOR }]}
      onPress={() => navigate('Detail', { id: value })}
    >
      <BackgroundPatternUi
        backgroundColor={POKE_CARD_COLOR}
        size={250}
        position={{ top: 10, right: -50 }}
      />
      <View style={styles.contentInfo}>
        <TypographyUi
          size="small"
          weight="bold"
          style={{ color: POKE_FONT_COLOR }}
        >
          {`#${String(value).padStart(3, '0')}`}
        </TypographyUi>
        <TypographyUi
          weight="bold"
          size="subtitle"
          style={{ color: POKE_FONT_COLOR }}
        >
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </TypographyUi>
        <View style={styles.tagsContainer}>
          {tags?.map((tag, index) => (
            <View
              key={index}
              style={[
                styles.tagBadge,
                {
                  backgroundColor: ColorUtilityPatternService(
                    POKE_CARD_COLOR,
                    0.15,
                  ),
                },
              ]}
            >
              <TypographyUi
                size="small"
                style={{
                  color: ColorUtilityPatternService(POKE_FONT_COLOR),
                }}
                weight="medium"
              >
                {String(tag).charAt(0).toUpperCase() + String(tag).slice(1)}
              </TypographyUi>
            </View>
          ))}
        </View>
      </View>
      {image ? (
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
        />
      ) : null}
    </CardUi>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentInfo: {
    flex: 1,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 'auto',
  },
  tagBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
  },
  image: {
    width: 110,
    height: 110,
  },
});

export default PokeListCardLayout;
