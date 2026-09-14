# Loader Ui

## Description

An animated loading indicator component shaped like a Pokéball, designed to be displayed while data or operations are loading in the application. It utilizes the native `Animated` API for smooth infinite rotation. The primary theme color is used automatically for the Loader styling.

## Usage

```jsx
import LoaderUi from '@/components/ui/loader';

// Basic usage (defaults to normal size)
<LoaderUi />

// Usage with specific sizes
<LoaderUi size="big" />
<LoaderUi size="small" />

// Inherits React Native ViewProps (e.g. custom styles)
<LoaderUi size="normal" style={{ marginTop: 20 }} />
```

## Props

| Name        | Type                           | Required |  Default   | Description                                                                                          |
| :---------- | :----------------------------- | :------: | :--------: | :--------------------------------------------------------------------------------------------------- |
| **size**    | `'big' \| 'normal' \| 'small'` |    No    | `'normal'` | Defines the size of the animated Pokéball (big: 128px, normal: 96px, small: 64px).                   |
| **style**   | `StyleProp<ViewStyle>`         |    No    |     -      | Additional custom styles to apply to the main container.                                             |
| **...rest** | `ViewProps`                    |    No    |     -      | Accepts any standard React Native `<View />` properties (e.g., `testID`, `pointerEvents`).           |
