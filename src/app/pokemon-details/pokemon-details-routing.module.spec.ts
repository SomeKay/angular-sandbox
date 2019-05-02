import { routes } from './pokemon-details-routing.module';

describe('pokemonDetails.PokemonDetailsRoutingModule', () => {
    it('should define the routes', () => {
        expect(routes).toMatchSnapshot();
    });
});
