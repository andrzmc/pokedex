# Icon Ui

## Description

A reusable and strongly-typed icon component for React Native that integrates the `boxicons` library. It provides access to over 4,000 icons grouped into three distinct variants: basic, filled, and brands.

The component is highly typed using TypeScript, meaning the `name` property offers full autocomplete capabilities in your IDE, preventing typos and the need to guess the exact icon prefix. It also integrates natively with the application's global `skin` to inherit dynamic colors.

## Usage

```tsx
import IconUi from '@/components/ui/icon';

// Basic usage (defaults to 'basic' variant and size 24)
// Autocomplete is enabled for the 'name' property.
<IconUi name="bx-balloon" />

// Using a 'filled' variant with a custom size and color
<IconUi
  name="bxs-heart"
  variant="filled"
  size={32}
  color="#FF0000"
/>

// Using a 'brands' variant
<IconUi
  name="bxl-amazon"
  variant="brands"
  size={48}
/>
```

## Props

| Name        | Type                              | Required |    Default     | Description                                                                                                                                           |
| :---------- | :-------------------------------- | :------: | :------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **name**    | `BoxiconName`                     |   Yes    |       -        | The exact name of the icon to render (e.g. `bx-balloon`, `bxs-heart`, `bxl-amazon`). Fully typed for autocomplete.                                    |
| **variant** | `'basic' \| 'filled' \| 'brands'` |    No    |   `'basic'`    | The font family variant to use. Must correspond to the prefix used in `name` (`bx-` for basic, `bxs-` for filled, `bxl-` for brands).                 |
| **size**    | `number`                          |    No    |      `24`      | The size of the icon in logical pixels.                                                                                                               |
| **color**   | `string`                          |    No    | `skin.primary` | The hex or rgb color for the icon. If not provided, it falls back automatically to the `primary` color defined in the current theme skin (`useSkin`). |
