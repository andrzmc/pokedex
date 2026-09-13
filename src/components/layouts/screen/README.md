# Screen Layout

## Description

A reusable and customizable wrapper component that provides a standardized layout structure for all screens across the application. It acts as a wrapper around the `SafeAreaView` (and optionally `ScrollView`), ensuring content is safely displayed within device boundaries while offering vertical alignment and scroll capabilities out-of-the-box.

## Usage

```jsx
import ScreenLayout from '@/components/layouts/screen';

// Basic usage (defaults to scrollable and top alignment)
<ScreenLayout>
  <Text>Main content of the screen goes here.</Text>
</ScreenLayout>

// Custom alignment and disabled scroll (e.g., for a map or a fixed form screen)
<ScreenLayout scrollable={false} alignment="center">
  <Text>This content is perfectly centered and won't scroll.</Text>
</ScreenLayout>

// Inherits React Native ViewProps (e.g., passing custom styles or testIDs)
<ScreenLayout style={{ backgroundColor: 'white' }} testID="home-screen">
  <Text>Screen content</Text>
</ScreenLayout>
```

## Props

| Name           | Type                            | Required | Default | Description                                                                                              |
| :------------- | :------------------------------ | :------: | :-----: | :------------------------------------------------------------------------------------------------------- |
| **children**   | `ReactNode`                     |   Yes    |    -    | The content elements to be rendered inside the layout.                                                   |
| **alignment**  | `'center' \| 'top' \| 'bottom'` |    No    | `'top'` | Defines the vertical alignment of the content.                                                           |
| **scrollable** | `boolean`                       |    No    | `true`  | When `true`, wraps the content in a `ScrollView` with `flexGrow: 1`. When `false`, uses a static `View`. |
| **style**      | `StyleProp<ViewStyle>`          |    No    |    -    | Additional custom styles to apply to the main `SafeAreaView` container.                                  |
| **...rest**    | `ViewProps`                     |    No    |    -    | Accepts any standard React Native `<View />` properties (e.g., `onLayout`, `pointerEvents`).             |
