import { POKE_API_GRAPHQL_SERVICE_CONFIG } from '@/config/services/pokeapi';
import { HttpLink } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import { ApolloClient } from '@apollo/client';

export const PokeApiGraphQlService = new ApolloClient({
  link: new HttpLink({ uri: POKE_API_GRAPHQL_SERVICE_CONFIG }),
  cache: new InMemoryCache(),
});
