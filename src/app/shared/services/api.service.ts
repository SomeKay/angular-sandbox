import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonListResponse } from '../models/pokemon-list-response';

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

    getPokemonDetails(name: string): Observable<HttpResponse<Pokemon>> {
        const url = `${this.apiPrefix}/pokemon/${name}`;

        return this.http.get<Pokemon>(url, { observe: 'response' });
    }
}
