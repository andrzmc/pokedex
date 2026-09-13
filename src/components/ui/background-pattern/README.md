# Background Pattern Ui

## Description

A reusable UI component that renders a decorative, absolute-positioned circular pattern. It automatically determines whether the pattern color should be light or dark based on the luminance of the provided `backgroundColor`. It also supports customizable sizing and positioning, making it ideal for card backgrounds and headers.

## Usage

```tsx
import BackgroundPatternUi from '@/components/ui/background-pattern';

// Basic usage (defaults to a size of 125, centered)
<BackgroundPatternUi backgroundColor="#FFCC00" />

// Custom size and position
<BackgroundPatternUi
  backgroundColor="rgb(255, 0, 0)"
  size={200}
  position={{ top: 20, right: -10 }}
/>
```

## Props

| Name                | Type                               | Required | Default | Description                                                                                                                                           |
| :------------------ | :--------------------------------- | :------: | :-----: | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **backgroundColor** | `string`                           |    No    |    -    | The base background color (hex or rgb) used to calculate the luminance. The pattern will automatically be light or dark to contrast with this color.  |
| **position**        | `{ top?: number; right?: number }` |    No    |    -    | Optional placement coordinates. If `top` is omitted, it defaults to vertically centered. If `right` is omitted, it defaults to horizontally centered. |
| **size**            | `number`                           |    No    |  `125`  | The width and height (diameter) of the circular background pattern.                                                                                   |
