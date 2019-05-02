import { PokemonResponse } from './pokemon-response';

export interface PokemonListResponse {
    results: PokemonResponse[];
    count: number;
    previous: string;
    next: string;
}
