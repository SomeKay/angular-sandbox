import { Pokemon } from 'src/app/shared/models/pokemon';

export interface PokemonListData {
    lastRequestUrl: string;
    pokemonList: Array<Pokemon>;
    nextUrl: string;
    previousUrl: string;
}
