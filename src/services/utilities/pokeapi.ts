import { CatalogResponse } from '@/models/interfaces/catalog';
import { PokeApiCatalog } from '@/models/interfaces/services/graphql/pokeapi';

export const PokeListMapperService = (event: PokeApiCatalog): CatalogResponse => ({
  total: event.total.aggregate.count,
  items: event.items.map(item => ({
    value: item.id,
    label: item.name,
    tags: item.type.map(subitem => subitem.pokemon_v2_type.name),
    background: item.color?.pokemon_v2_pokemoncolor?.name,
  })),
});

