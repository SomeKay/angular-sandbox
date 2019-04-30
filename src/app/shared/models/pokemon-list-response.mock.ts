import { PokemonListResponse } from './pokemon-list-response';
import { pokemonMock1, pokemonMock2 } from './pokemon.mock';

export const pokemonListResponseMock: PokemonListResponse = {
    results: [pokemonMock1, pokemonMock2],
    count: 2,
    previous: 'previousFoo',
    next: 'nextFoo'
};
