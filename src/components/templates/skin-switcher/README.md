# Skin Switcher Template

## Description

A template component that provides a complete user interface for managing the application's visual theme and appearance. It acts as a wrapper that combines two sub-components:

- **Appearance Switcher:** Allows the user to toggle the app's appearance mode between Light, Dark, and System default.
- **Selector Switcher:** Allows the user to select the primary color skin (e.g., Default, Blue, Green, Red) to customize the app's look and feel.

This component integrates directly with the `useSkin` hook to read and update the application's global skin state.

## Usage

```jsx
import SkinSwitcherTemplate from '@/components/templates/skin-switcher';

// Basic usage
<SkinSwitcherTemplate />;
```

## Props

This component does not accept any props. It relies entirely on the internal `useSkin` hook to manage its state and interactions.
