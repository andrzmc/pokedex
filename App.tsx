import { PokeApiGraphQlService } from '@/services/graphql/pokeapi';
import { ApolloProvider } from '@apollo/client/react';
import React from 'react';
import { StatusBar, Text, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ApolloProvider client={PokeApiGraphQlService}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Text>jajaj</Text>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

export default App;
