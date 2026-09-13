import { POKE_API_GRAPHQL_SERVICE_CONFIG } from '@/config/services/pokeapi';
import { gql, HttpLink } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import { ApolloClient } from '@apollo/client';

export const PokeApiGraphQlService = new ApolloClient({
  link: new HttpLink({ uri: POKE_API_GRAPHQL_SERVICE_CONFIG }),
  cache: new InMemoryCache(),
});

export const GET_POKE_LIST_QUERY = gql`
  query GetPokemonCatalog($limit: Int!, $offset: Int!) {
    total: pokemon_v2_pokemon_aggregate {
      aggregate {
        count
      }
    }
    items: pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      order_by: { id: asc }
    ) {
      id
      name
      type: pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      color: pokemon_v2_pokemonspecy {
        pokemon_v2_pokemoncolor {
          name
        }
      }
    }
  }
`;

export const GET_POKE_INFO_QUERY = gql`
  query GetPokemonFullDetails($id: Int!) {
    result: pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      height
      weight
      color: pokemon_v2_pokemonspecy {
        pokemon_v2_pokemoncolor {
          name
        }
      }
      type: pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      abilities: pokemon_v2_pokemonabilities {
        is_hidden
        pokemon_v2_ability {
          name
        }
      }
    }
  }
`;
