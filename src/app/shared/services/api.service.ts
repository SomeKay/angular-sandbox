import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../models/api/pokemon-list-response';
import { PokemonResponse } from '../models/api/pokemon-response';

@Injectable()
export class ApiService {
    private apiPrefix = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) {}

    getPokemonList(
        url?: string
    ): Observable<HttpResponse<PokemonListResponse>> {
        if (!url) {
            url = `${this.apiPrefix}/pokemon`;
        }

        return this.http.get<PokemonListResponse>(url, { observe: 'response' });
    }

    getPokemonDetails(name: string): Observable<HttpResponse<PokemonResponse>> {
        const url = `${this.apiPrefix}/pokemon/${name}`;

        return this.http.get<PokemonResponse>(url, { observe: 'response' });
    }
}
