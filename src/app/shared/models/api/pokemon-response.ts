import { PokemonAbilityResponse } from './pokemon-ability-response';
import { PokemonSpritesResponse } from './pokemon-sprites-response';
import { PokemonStatResponse } from './pokemon-stat-response';
import { PokemonTypeResponse } from './pokemon-type-response';

export interface PokemonResponse {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    abilities: PokemonAbilityResponse[];
    sprites: PokemonSpritesResponse;
    stats: PokemonStatResponse[];
    types: PokemonTypeResponse[];
    weight: number;
}
