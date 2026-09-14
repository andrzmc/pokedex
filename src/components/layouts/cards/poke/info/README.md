# Poke Info Card Layout

## Description

A modern, card-based layout component that displays the detailed statistics and physical attributes of a Pokémon. It renders the Pokémon's height and weight alongside a list of its abilities. The component utilizes `ColorUtilityService` and `ColorUtilityPatternService` to dynamically theme the text and styling accents based on the Pokémon's primary color, ensuring a cohesive and visually pleasing design that matches the cover layout.

## Usage

```tsx
import PokeInfoCardLayout from '@/components/layouts/cards/poke/info';

const pokemonData = {
  id: 25,
  name: 'pikachu',
  color: 'yellow',
  types: ['electric'],
  images: {
    default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/25.png',
  },
  abilities: ['static', 'lightning-rod'],
  height: 4,
  weight: 60,
};

// Typically rendered below the PokeCoverCardLayout
<PokeInfoCardLayout {...pokemonData} />;
```

## Props

This component uses the `DetailLayoutProps` interface.

| Name          | Type                                  | Required | Description                                                                                               |
| :------------ | :------------------------------------ | :------: | :-------------------------------------------------------------------------------------------------------- |
| **color**     | `string`                              |   Yes    | The base color string (from PokéAPI) used to calculate the themed text and pill border colors.            |
| **abilities** | `string[]`                            |   Yes    | An array of the Pokémon's abilities (e.g., `['chlorophyll', 'overgrow']`). Rendered as stylized pills.    |
| **height**    | `number`                              |   Yes    | The Pokémon's height in decimeters (as returned by the PokéAPI). Converted and displayed in meters.       |
| **weight**    | `number`                              |   Yes    | The Pokémon's weight in hectograms (as returned by the PokéAPI). Converted and displayed in kilograms.    |
| **id**        | `number`                              |   Yes    | The Pokédex number of the Pokémon. Note: This prop is available in `DetailLayoutProps` but not used here. |
| **name**      | `string`                              |   Yes    | The name of the Pokémon. Note: This prop is available in `DetailLayoutProps` but not used here.           |
| **types**     | `string[]`                            |   Yes    | The Pokémon's elemental types. Note: This prop is available in `DetailLayoutProps` but not used here.     |
| **images**    | `{ default: string; shiny: string; }` |   Yes    | The Pokémon's artwork URLs. Note: This prop is available in `DetailLayoutProps` but not used here.        |
