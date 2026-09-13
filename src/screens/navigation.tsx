import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainHomeScreen from './home/main';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={MainHomeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
