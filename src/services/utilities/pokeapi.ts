import { CatalogResponse } from '@/models/interfaces/catalog';
import { DetailLayoutProps } from '@/models/interfaces/layouts';
import {
  PokeApiCatalog,
  PokeApiDetailInfo,
} from '@/models/interfaces/services/graphql/pokeapi';

export const PokeListMapperService = (
  event: PokeApiCatalog,
): CatalogResponse => ({
  total: event.total.aggregate.count,
  items: event.items.map(item => ({
    value: item.id,
    label: item.name,
    tags: item.type.map(subitem => subitem.pokemon_v2_type.name),
    color: item.color?.pokemon_v2_pokemoncolor?.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.id}.png`,
  })),
});

export const PokeInfoMapperService = (
  event: PokeApiDetailInfo,
): DetailLayoutProps => {
  return {
    ...event.result,
    types: event.result.type.map(subitem => subitem.pokemon_v2_type.name),
    color: event.result.color.pokemon_v2_pokemoncolor.name,
    images: {
      default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${event.result.id}.png`,
      shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${event.result.id}.png`,
    },
    abilities: event.result.abilities.map(
      subitem => subitem.pokemon_v2_ability.name,
    ),
  };
};
