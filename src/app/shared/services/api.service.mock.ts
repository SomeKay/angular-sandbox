import { ApiService } from './api.service';

export class MockApiService extends ApiService {
    constructor() {
        super({} as any);
    }

    public getPokemonList = jest.fn();
    public getPokemonDetails = jest.fn();
}
