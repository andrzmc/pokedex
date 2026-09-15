import BackgroundPatternUi from '@/components/ui/background-pattern';
import { CardUi } from '@/components/ui/card';
import IconUi from '@/components/ui/icon';
import { TypographyUi } from '@/components/ui/typography';
import { DetailLayoutProps } from '@/models/interfaces/layouts';
import {
  ColorUtilityIsLightService,
  ColorUtilityPatternService,
  ColorUtilityService,
} from '@/services/utilities/colors';
import { useNavigation } from '@react-navigation/native';
import React, { FC, useState } from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const PokeCoverCardLayout: FC<DetailLayoutProps> = props => {
  const { id, color, images, name, types } = props;
  const [isShiny, setIsShiny] = useState(false);
  const { goBack } = useNavigation();

  const POKE_CARD_COLOR = ColorUtilityService(color || '');
  const POKE_FONT_COLOR = ColorUtilityPatternService(POKE_CARD_COLOR);

  const displayImage =
    isShiny && images?.shiny ? images.shiny : images?.default;

  return (
    <>
      <StatusBar
        barStyle={
          ColorUtilityIsLightService(POKE_CARD_COLOR)
            ? 'dark-content'
            : 'light-content'
        }
      />
      <CardUi style={[{ backgroundColor: POKE_CARD_COLOR }, styles.container]}>
        <BackgroundPatternUi
          backgroundColor={POKE_CARD_COLOR}
          size={400}
          position={{ top: -250, left: -130 }}
        />
        <BackgroundPatternUi
          backgroundColor={POKE_CARD_COLOR}
          size={400}
          position={{ top: 250, right: -130 }}
        />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => goBack()} activeOpacity={0.8}>
            <IconUi
              name="bx-arrow-left-stroke"
              size={32}
              color={POKE_FONT_COLOR}
            />
          </TouchableOpacity>
          <TypographyUi
            size="subtitle"
            weight="bold"
            style={{ color: POKE_FONT_COLOR }}
          >
            {`#${String(id).padStart(3, '0')}`}
          </TypographyUi>
        </View>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => setIsShiny(!isShiny)}
          activeOpacity={0.8}
        >
          {displayImage ? (
            <Image
              source={{ uri: displayImage }}
              style={styles.image}
              resizeMode="contain"
            />
          ) : null}
        </TouchableOpacity>

        <View style={styles.footer}>
          <TypographyUi
            weight="bold"
            size="title"
            style={{ color: POKE_FONT_COLOR }}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </TypographyUi>

          <View style={styles.typesContainer}>
            {types?.map((tag, index) => (
              <View
                key={index}
                style={[
                  styles.typePill,
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
                  weight="medium"
                  style={{
                    color: ColorUtilityPatternService(POKE_FONT_COLOR),
                  }}
                >
                  {String(tag).charAt(0).toUpperCase() + String(tag).slice(1)}
                </TypographyUi>
              </View>
            ))}
          </View>
        </View>
      </CardUi>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    padding: 24,
    paddingTop: 80,
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 220,
    width: '100%',
    zIndex: 2,
  },
  image: {
    width: 220,
    height: 220,
  },
  footer: {
    alignItems: 'center',
    zIndex: 2,
  },
  typesContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  typePill: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
});

export default PokeCoverCardLayout;
