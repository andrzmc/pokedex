export interface PokeApiCatalog {
  total: Total;
  items: Item[];
}

export interface PokeApiDetailInfo {
  result: Info;
}

export interface Item {
  id: number;
  name: string;
  type: Type[];
  color: Color;
  __typename: string;
}

export interface Info extends Item {
  height: number;
  weight: number;
  abilities: Ability[];
}

export interface Ability {
  pokemon_v2_ability: PokemonV2;
  is_hidden: boolean;
  __typename: string;
}

export interface Color {
  pokemon_v2_pokemoncolor: PokemonV2;
  __typename: string;
}

export interface PokemonV2 {
  name: string;
  __typename: string;
}

export interface Type {
  pokemon_v2_type: PokemonV2;
  __typename: string;
}

export interface Total {
  aggregate: Aggregate;
  __typename: string;
}

export interface Aggregate {
  count: number;
  __typename: string;
}
