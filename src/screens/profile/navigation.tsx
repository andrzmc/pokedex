import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainProfileScreen from './main';

const ProfileNavigation = () => {
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
      <Stack.Screen name="Home" component={MainProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
