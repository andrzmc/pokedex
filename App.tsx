import NavigatorTemplate from '@/components/templates/navigator';
import SkinProvider from '@/context/providers/skin/skin.provider';
import { PokeApiGraphQlService } from '@/services/graphql/pokeapi';
import { ApolloProvider } from '@apollo/client/react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <ApolloProvider client={PokeApiGraphQlService}>
      <SafeAreaProvider>
        <SkinProvider>
          <NavigatorTemplate />
        </SkinProvider>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

export default App;
