import { PokemonAbilityResponse } from './pokemon-ability-response';

export const pokemonAbilityResponseMock1: PokemonAbilityResponse = {
    ability: {
        name: 'abilityNameFoo',
        url: 'abilityUrlFoo'
    },
    is_hidden: true,
    slot: 100
};

export const pokemonAbilityResponseMock2: PokemonAbilityResponse = {
    ability: {
        name: 'abilityNameBar',
        url: 'abilityUrlBar'
    },
    is_hidden: false,
    slot: 200
};
