import { PokemonSprites } from './pokemon-sprites';

export interface Pokemon {
    id?: number;
    name: string;
    sprites?: PokemonSprites;
    weight?: number;
}
