import { pokemonResponseMock1 } from 'src/app/shared/models/api/pokemon-response.mock';
import { FetchPokemonDetailsSuccess } from '../actions/data.actions';
import * as dataReducers from './data.reducers';

describe('pokemonDetails.DataReducers', () => {
    it('should have initial state', () => {
        expect(dataReducers.initialState).toEqual({
            pokemon: undefined
        });
    });

    it('should store the pokemon details', () => {
        const action = new FetchPokemonDetailsSuccess(pokemonResponseMock1);
        const state = dataReducers.reducer(dataReducers.initialState, action);

        expect(state.pokemon).toEqual({
            name: pokemonResponseMock1.name,
            height: pokemonResponseMock1.height,
            weight: pokemonResponseMock1.weight,
            id: pokemonResponseMock1.id,
            order: pokemonResponseMock1.order,
            sprites: {
                frontDefault: pokemonResponseMock1.sprites.front_default,
                frontShiny: pokemonResponseMock1.sprites.front_shiny,
                backDefault: pokemonResponseMock1.sprites.back_default,
                backShiny: pokemonResponseMock1.sprites.back_shiny
            },
            baseExperience: pokemonResponseMock1.base_experience,
            isDefault: pokemonResponseMock1.is_default,
            abilities: pokemonResponseMock1.abilities.map(a => ({
                name: a.ability.name,
                url: a.ability.url,
                slot: a.slot,
                isHidden: a.is_hidden
            })),
            types: pokemonResponseMock1.types.map(t => ({
                name: t.type.name,
                url: t.type.url,
                slot: t.slot
            })),
            stats: pokemonResponseMock1.stats.map(s => ({
                name: s.stat.name,
                url: s.stat.url,
                baseStat: s.base_stat,
                effort: s.effort
            }))
        });
    });

    it('should return default state if action is not recognized', () => {
        const action: any = { foo: 'bar' };
        const state = dataReducers.reducer(dataReducers.initialState, action);

        expect(state).toEqual(dataReducers.initialState);
    });
});
