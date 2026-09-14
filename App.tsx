import ThemeProvider from '@/context/providers/skin/skin.provider';
import RootNavigation from '@/screens/navigation';
import { PokeApiGraphQlService } from '@/services/graphql/pokeapi';
import { ApolloProvider } from '@apollo/client/react';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <ApolloProvider client={PokeApiGraphQlService}>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

export default App;
