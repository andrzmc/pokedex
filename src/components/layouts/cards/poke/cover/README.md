# Poke Cover Card Layout

## Description

A layout component that renders the top "cover" section of a Pokémon's detail view. It displays the Pokémon's primary image, ID, name, and its elemental types in pill-shaped badges. The component is dynamically themed based on the Pokémon's dominant color, utilizing `ColorUtilityService` and `ColorUtilityPatternService` to ensure high contrast and legibility. It also includes an interactive image that allows users to toggle between the default and shiny sprite of the Pokémon by tapping on it.

## Usage

```tsx
import PokeCoverCardLayout from '@/components/layouts/cards/poke/cover';

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

// Typically used within a ScreenLayout
<PokeCoverCardLayout {...pokemonData} />;
```

## Props

This component uses the `DetailLayoutProps` interface.

| Name          | Type                                  | Required | Description                                                                                               |
| :------------ | :------------------------------------ | :------: | :-------------------------------------------------------------------------------------------------------- |
| **id**        | `number`                              |   Yes    | The Pokédex number of the Pokémon. Displayed at the top right of the card.                                |
| **name**      | `string`                              |   Yes    | The name of the Pokémon. Displayed prominently below the image.                                           |
| **color**     | `string`                              |   Yes    | The base color string (from PokéAPI) used to calculate the card's background and contrasting font color.  |
| **types**     | `string[]`                            |   Yes    | An array of the Pokémon's elemental types (e.g., `['grass', 'poison']`).                                  |
| **images**    | `{ default: string; shiny: string; }` |   Yes    | The URLs for the Pokémon's default and shiny artwork.                                                     |
| **abilities** | `string[]`                            |   Yes    | The Pokémon's abilities. Note: This prop is available in `DetailLayoutProps` but not used in this layout. |
| **height**    | `number`                              |   Yes    | The Pokémon's height. Note: This prop is available in `DetailLayoutProps` but not used in this layout.    |
| **weight**    | `number`                              |   Yes    | The Pokémon's weight. Note: This prop is available in `DetailLayoutProps` but not used in this layout.    |
