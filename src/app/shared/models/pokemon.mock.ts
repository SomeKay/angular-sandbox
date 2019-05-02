import { Pokemon } from './pokemon';
import {
    pokemonAbilityMock1,
    pokemonAbilityMock2
} from './pokemon-ability.mock';
import { pokemonSpritesMock } from './pokemon-sprites.mock';
import { pokemonStatMock1, pokemonStatMock2 } from './pokemon-stat.mock';
import { pokemonTypeMock1, pokemonTypeMock2 } from './pokemon-type.mock';

export const pokemonMock1: Pokemon = {
    id: 100,
    name: 'pokemonFoo',
    sprites: pokemonSpritesMock,
    weight: 200,
    height: 300,
    baseExperience: 400,
    isDefault: true,
    order: 500,
    abilities: [pokemonAbilityMock1],
    stats: [pokemonStatMock1],
    types: [pokemonTypeMock1]
};

export const pokemonMock2: Pokemon = {
    id: 200,
    name: 'pokemonBar',
    sprites: pokemonSpritesMock,
    weight: 400,
    height: 300,
    baseExperience: 400,
    isDefault: true,
    order: 500,
    abilities: [pokemonAbilityMock2],
    stats: [pokemonStatMock2],
    types: [pokemonTypeMock2]
};
