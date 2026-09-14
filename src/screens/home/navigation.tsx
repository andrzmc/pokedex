import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainHomeScreen from './main';
import DetailHomeScreen from './detail';
import ProfileNavigation from '../profile/navigation';

const RootNavigation = () => {
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
      <Stack.Screen name="Home" component={MainHomeScreen} />
      <Stack.Screen name="Detail" component={DetailHomeScreen} />
      <Stack.Screen name="Profile" component={ProfileNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
