import { TypographyUi } from '@/components/ui/typography';
import { DetailLayoutProps } from '@/models/interfaces/layouts';
import {
  ColorUtilityPatternService,
  ColorUtilityService,
} from '@/services/utilities/colors';
import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

const PokeInfoCardLayout: FC<DetailLayoutProps> = props => {
  const { color, abilities, height, weight } = props;

  const POKE_CARD_COLOR = ColorUtilityService(color || '');
  const POKE_FONT_COLOR = ColorUtilityPatternService(POKE_CARD_COLOR);

  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <TypographyUi size="title" weight="bold">
            {`${weight / 10} kg`}
          </TypographyUi>
          <TypographyUi size="small" style={styles.statLabel} weight="medium">
            Weight
          </TypographyUi>
        </View>

        <View style={styles.divider} />

        <View style={styles.statItem}>
          <TypographyUi size="title" weight="bold">
            {`${height / 10} m`}
          </TypographyUi>
          <TypographyUi size="small" style={styles.statLabel} weight="medium">
            Height
          </TypographyUi>
        </View>
      </View>

      <View style={styles.abilitiesContainer}>
        <TypographyUi size="subtitle" weight="bold" style={styles.sectionTitle}>
          Abilities
        </TypographyUi>
        <View style={styles.abilitiesList}>
          {abilities?.map((ability, index) => (
            <View
              key={index}
              style={[
                styles.abilityPill,
                {
                  backgroundColor: POKE_CARD_COLOR,
                },
              ]}
            >
              <TypographyUi
                size="paragraph"
                weight="medium"
                style={{ color: POKE_FONT_COLOR }}
              >
                {ability.charAt(0).toUpperCase() +
                  ability.slice(1).replace(/-/g, ' ')}
              </TypographyUi>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 24,
    borderRadius: 24,
    marginBottom: 32,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    marginTop: 6,
  },
  divider: {
    width: 1,
    height: 48,
  },
  abilitiesContainer: {
    alignItems: 'center',
  },
  sectionTitle: {
    marginBottom: 16,
  },
  abilitiesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
  },
  abilityPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
});

export default PokeInfoCardLayout;
