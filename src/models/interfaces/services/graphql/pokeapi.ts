export interface PokeApiCatalog {
    total: Total;
    items: Item[];
}

export interface Item {
    id:         number;
    name:       string;
    type:       Type[];
    color:      Color;
    images:     Image[];
    __typename: string;
}

export interface Color {
    pokemon_v2_pokemoncolor: PokemonV2;
    __typename:              string;
}

export interface PokemonV2 {
    name:       string;
    __typename: string;
}

export interface Image {
    sprites:    Sprites;
    __typename: string;
}

export interface GenerationV {
    "black-white": Sprites;
}

export interface GenerationIv {
    platinum:               Sprites;
    "diamond-pearl":        Sprites;
    "heartgold-soulsilver": Sprites;
}

export interface Versions {
    "generation-i":    GenerationI;
    "generation-v":    GenerationV;
    "generation-ii":   GenerationIi;
    "generation-iv":   GenerationIv;
    "generation-vi":   { [key: string]: Home };
    "generation-iii":  GenerationIii;
    "generation-vii":  GenerationVii;
    "generation-viii": GenerationViii;
}

export interface Other {
    home:               Home;
    showdown:           Sprites;
    dream_world:        DreamWorld;
    "official-artwork": OfficialArtwork;
}

export interface Sprites {
    other?:             Other;
    versions?:          Versions;
    back_shiny:         string;
    back_female:        null;
    front_shiny:        string;
    back_default:       string;
    front_female:       null;
    front_default:      string;
    back_shiny_female:  null;
    front_shiny_female: null;
    animated?:          Sprites;
}

export interface GenerationI {
    yellow:     RedBlue;
    "red-blue": RedBlue;
}

export interface RedBlue {
    back_gray:         string;
    front_gray:        string;
    back_default:      string;
    front_default:     string;
    back_transparent:  string;
    front_transparent: string;
}

export interface GenerationIi {
    gold:    Gold;
    silver:  Gold;
    crystal: Crystal;
}

export interface Crystal {
    back_shiny:              string;
    front_shiny:             string;
    back_default:            string;
    front_default:           string;
    back_transparent:        string;
    front_transparent:       string;
    back_shiny_transparent:  string;
    front_shiny_transparent: string;
}

export interface Gold {
    back_shiny:         string;
    front_shiny:        string;
    back_default:       string;
    front_default:      string;
    front_transparent?: string;
}

export interface GenerationIii {
    emerald:             OfficialArtwork;
    "ruby-sapphire":     Gold;
    "firered-leafgreen": Gold;
}

export interface OfficialArtwork {
    front_shiny:   string;
    front_default: string;
}

export interface Home {
    front_shiny:        string;
    front_female:       null;
    front_default:      string;
    front_shiny_female: null;
}

export interface GenerationVii {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
    front_female:  null;
    front_default: string;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface Type {
    pokemon_v2_type: PokemonV2;
    __typename:      string;
}

export interface Total {
    aggregate:  Aggregate;
    __typename: string;
}

export interface Aggregate {
    count:      number;
    __typename: string;
}
