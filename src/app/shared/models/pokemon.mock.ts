import { PokemonSprites } from './pokemon-sprites';
import { pokemonSpritesMock } from './pokemon-sprites.mock';

export const pokemonMock1: Pokemon = {
    id: 100,
    name: 'pokemonFoo',
    sprites: pokemonSpritesMock,
    weight: 200
};

export const pokemonMock2: Pokemon = {
    id: 200,
    name: 'pokemonBar',
    sprites: pokemonSpritesMock,
    weight: 400
};

export interface Pokemon {
    id: number;
    name: string;
    sprites: PokemonSprites;
    weight: number;
}
