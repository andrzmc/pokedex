import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainSettingsScreen from './main';

const SettingsNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        fullScreenGestureEnabled: true,
      }}
    >
      <Stack.Screen name="Home" component={MainSettingsScreen} />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;
