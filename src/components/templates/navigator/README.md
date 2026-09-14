# Navigator Template

## Description

The `NavigatorTemplate` is the main routing wrapper for the application. It instantiates the `NavigationContainer` from React Navigation and dynamically injects the application's global skin/theme configuration (colors, dark mode state, and typography). It ensures that all navigation elements (headers, backgrounds, etc.) automatically adapt to the user's selected skin.

## Usage

```jsx
import NavigatorTemplate from '@/components/templates/navigator';
import SkinProvider from '@/context/providers/skin/skin.provider';

function App() {
  return (
    <SkinProvider>
      <NavigatorTemplate />
    </SkinProvider>
  );
}
```

## Props

This component does not accept any external props. It relies internally on the `useSkin` hook to retrieve the current theme configuration and directly renders the `<RootNavigation />` stack.
