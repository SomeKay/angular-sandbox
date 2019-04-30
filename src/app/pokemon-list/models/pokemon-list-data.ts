import { Pokemon } from 'src/app/shared/models/pokemon';

export interface PokemonListData {
    pokemonList: Array<Pokemon>;
    nextUrl: string;
    previousUrl: string;
}
