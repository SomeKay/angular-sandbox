import { PokemonSpritesResponse } from './pokemon-sprites-response';

export interface PokemonResponse {
    id: number;
    name: string;
    sprites: PokemonSpritesResponse;
    weight: number;
}
