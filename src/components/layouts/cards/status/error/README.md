# Error Status Card Layout

## Description

A layout component designed to display error states in a Pokemon-themed, user-friendly way. It renders a customizable card featuring a confused Psyduck sprite and an error message. The component dynamically adjusts its padding, spacing, and image size based on the provided typography size, making it adaptable for full-screen errors, small inline errors, or list placeholders.

## Usage

```jsx
import ErrorStatusCardLayout from '@/components/layouts/cards/status/error';

// Basic usage (defaults to paragraph size)
<ErrorStatusCardLayout message="Failed to load Pokemon data." />

// Full screen or large error
<ErrorStatusCardLayout message="Network Error" size="title" />

// Small inline error
<ErrorStatusCardLayout message="Not found" size="small" />
```

## Props

| Name        | Type             | Required |    Default    | Description                                                                                             |
| :---------- | :--------------- | :------: | :-----------: | :------------------------------------------------------------------------------------------------------ |
| **message** | `string`         |   Yes    |       -       | The error message text to display below the image. If empty or undefined, the component returns `null`. |
| **size**    | `TypographySize` |    No    | `'paragraph'` | Defines the overall scale of the component (image size, padding, spacing, and text size).               |
