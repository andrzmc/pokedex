# PokeListCardLayout

## Description

A visual card component designed to display basic information about a Pokémon (or a catalog item) in an attractive Pokedex-style layout. It renders the ID, name, types (tags), and the main image of the item. It also dynamically generates a clean background color based on the item's base color using the `ColorUtilityService`.

## Usage

```tsx
import PokeListCardLayout from '@/components/layouts/cards/poke';

const pokemonItem = {
  value: 25,
  label: 'pikachu',
  color: 'yellow',
  tags: ['electric'],
  images: [
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  ],
};

// Inside your render method or functional component:
<PokeListCardLayout {...pokemonItem} />;
```

## Props

| Name       | Type               | Required | Default | Description                                                                                  |
| :--------- | :----------------- | :------: | :-----: | :------------------------------------------------------------------------------------------- |
| **value**  | `number \| string` |   Yes    |    -    | The numerical identifier of the item (e.g., Pokedex ID).                                     |
| **label**  | `string`           |   Yes    |    -    | The name of the Pokémon or catalog item. It is automatically capitalized.                    |
| **color**  | `string`           |    No    |    -    | The base color of the item (e.g., 'yellow', '#FFD700'). Used to generate the background.     |
| **tags**   | `string[]`         |    No    |    -    | An array of strings representing the item's types or characteristics (rendered as badges).   |
| **images** | `string[]`         |    No    |    -    | An array of image URLs. The component displays the first image from the array (`images[0]`). |
