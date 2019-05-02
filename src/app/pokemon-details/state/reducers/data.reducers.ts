import { PokemonDetailsData } from '../../models/pokemon-details-data';
import { DataActions, DataActionTypes } from '../actions/data.actions';

export type State = PokemonDetailsData;

export const initialState: State = {
    pokemon: undefined
};

export function reducer(
    state: State = initialState,
    action: DataActions
): State {
    switch (action.type) {
        case DataActionTypes.FETCH_POKEMON_DETAILS: {
            return {
                pokemon: undefined
            };
        }

        case DataActionTypes.FETCH_POKEMON_DETAILS_SUCCESS: {
            const p = action.payload;

            return {
                pokemon: {
                    id: p.id,
                    weight: p.weight,
                    name: p.name,
                    height: p.height,
                    order: p.order,
                    isDefault: p.is_default,
                    baseExperience: p.base_experience,
                    sprites: {
                        frontDefault: p.sprites.front_default,
                        backDefault: p.sprites.back_default,
                        frontShiny: p.sprites.front_shiny,
                        backShiny: p.sprites.back_shiny
                    },
                    abilities: p.abilities.map(a => ({
                        name: a.ability.name,
                        url: a.ability.url,
                        slot: a.slot,
                        isHidden: a.is_hidden
                    })),
                    types: p.types.map(t => ({
                        name: t.type.name,
                        url: t.type.url,
                        slot: t.slot
                    })),
                    stats: p.stats.map(s => ({
                        name: s.stat.name,
                        url: s.stat.url,
                        baseStat: s.base_stat,
                        effort: s.effort
                    }))
                }
            };
        }

        default: {
            return state;
        }
    }
}

export const getState = (state: State) => state;
