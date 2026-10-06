import NavigatorTemplate from '@/components/templates/navigator';
import SkinProvider from '@/context/providers/skin/skin.provider';
import { persistor, store } from '@/context/store';
import { PokeApiGraphQlService } from '@/services/graphql/pokeapi';
import { ApolloProvider } from '@apollo/client/react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApolloProvider client={PokeApiGraphQlService}>
          <SafeAreaProvider>
            <SkinProvider>
              <NavigatorTemplate />
            </SkinProvider>
          </SafeAreaProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
