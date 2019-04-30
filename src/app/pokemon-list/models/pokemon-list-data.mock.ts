import { pokemonMock1, pokemonMock2 } from 'src/app/shared/models/pokemon.mock';
import { PokemonListData } from './pokemon-list-data';

export const pokemonListDataMock: PokemonListData = {
    pokemonList: [pokemonMock1, pokemonMock2],
    nextUrl: 'nextFoo',
    previousUrl: 'prevFoo'
};
