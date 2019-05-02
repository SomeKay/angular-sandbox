import {
    pokemonAbilityResponseMock1,
    pokemonAbilityResponseMock2
} from './pokemon-ability-response.mock';
import { PokemonResponse } from './pokemon-response';
import { pokemonSpritesResponseMock } from './pokemon-sprites-response.mock';
import {
    pokemonStatResponseMock1,
    pokemonStatResponseMock2
} from './pokemon-stat-response.mock';
import {
    pokemonTypeResponseMock1,
    pokemonTypeResponseMock2
} from './pokemon-type-response.mock';

export const pokemonResponseMock1: PokemonResponse = {
    id: 100,
    name: 'pokemonFoo',
    sprites: pokemonSpritesResponseMock,
    weight: 200,
    height: 300,
    base_experience: 400,
    is_default: true,
    order: 500,
    abilities: [pokemonAbilityResponseMock1],
    stats: [pokemonStatResponseMock1],
    types: [pokemonTypeResponseMock1]
};

export const pokemonResponseMock2: PokemonResponse = {
    id: 1000,
    name: 'pokemonBar',
    sprites: pokemonSpritesResponseMock,
    weight: 2000,
    height: 3000,
    base_experience: 4000,
    is_default: true,
    order: 5000,
    abilities: [pokemonAbilityResponseMock2],
    stats: [pokemonStatResponseMock2],
    types: [pokemonTypeResponseMock2]
};
