import { Pokemon } from './pokemon';

export interface PokemonListResponse {
    results: Pokemon[];
    count: number;
    previous: string;
    next: string;
}
