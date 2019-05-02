import { routes } from './pokemon-list.routing.module';

describe('pokemonList.PokemonListRoutingModule', () => {
    it('should define the routes', () => {
        expect(routes).toMatchSnapshot();
    });
});
