# Card Ui

## Description

A reusable and customizable card container component that standardizes content grouping across the application. It supports optional header and footer sections, two shape variants (rounded or flat), an optional press action via `TouchableOpacity`, and a disabled state that reduces opacity and blocks interaction on the card and its children.

## Usage

```jsx
import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';

// Basic usage (defaults to rounded shape, not disabled, no press action)
<CardUi>
  <TypographyUi>This is the card content.</TypographyUi>
</CardUi>

// Card with header, footer, and press action
<CardUi
  header={<TypographyUi size="title" weight="bold">Pikachu</TypographyUi>}
  footer={<TypographyUi size="small">Tap for details</TypographyUi>}
  onPress={() => console.log('Card pressed!')}
>
  <TypographyUi>Electric type Pokémon</TypographyUi>
</CardUi>

// Flat card with disabled state
<CardUi shape="flat" disabled>
  <TypographyUi>This card is not interactive.</TypographyUi>
</CardUi>

// Inherits React Native ViewProps (e.g., custom styles or testIDs)
<CardUi style={{ backgroundColor: '#FFCC00' }} testID="pokemon-card">
  <TypographyUi>Custom styled card</TypographyUi>
</CardUi>
```

## Props

| Name         | Type                               | Required |   Default   | Description                                                                                                         |
| :----------- | :--------------------------------- | :------: | :---------: | :------------------------------------------------------------------------------------------------------------------ |
| **children** | `ReactNode`                        |   Yes    |      -      | The main content to be rendered inside the card body.                                                               |
| **header**   | `ReactNode`                        |    No    |      -      | Optional content rendered at the top of the card, separated by a bottom margin.                                     |
| **footer**   | `ReactNode`                        |    No    |      -      | Optional content rendered at the bottom of the card, separated by a top margin.                                     |
| **shape**    | `'rounded' \| 'flat'`              |    No    | `'rounded'` | Defines the border radius of the card contour.                                                                      |
| **disabled** | `boolean`                          |    No    |   `false`   | When `true`, reduces opacity to 0.5 and blocks interaction on the card and its children via `pointerEvents="none"`. |
| **onPress**  | `TouchableOpacityProps['onPress']` |    No    |      -      | When provided, wraps the card in a `TouchableOpacity` to make it pressable.                                         |
| **style**    | `StyleProp<ViewStyle>`             |    No    |      -      | Additional custom styles to apply on top of the predefined ones.                                                    |
| **...rest**  | `ViewProps`                        |    No    |      -      | Accepts any standard React Native `<View />` properties (e.g., `onLayout`, `pointerEvents`, `testID`).              |
