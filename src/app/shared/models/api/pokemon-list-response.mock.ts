import { PokemonListResponse } from './pokemon-list-response';
import {
    pokemonResponseMock1,
    pokemonResponseMock2
} from './pokemon-response.mock';

export const pokemonListResponseMock: PokemonListResponse = {
    results: [pokemonResponseMock1, pokemonResponseMock2],
    count: 2,
    previous: 'previousFoo',
    next: 'nextFoo'
};
