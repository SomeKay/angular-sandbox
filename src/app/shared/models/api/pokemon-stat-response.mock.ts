import { PokemonStatResponse } from './pokemon-stat-response';

export const pokemonStatResponseMock1: PokemonStatResponse = {
    base_stat: 100,
    effort: 200,
    stat: {
        name: 'pokemonStatNameFoo',
        url: 'pokemonStatUrlFoo'
    }
};

export const pokemonStatResponseMock2: PokemonStatResponse = {
    base_stat: 300,
    effort: 400,
    stat: {
        name: 'pokemonStatNameBar',
        url: 'pokemonStatUrlBar'
    }
};
