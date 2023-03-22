import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PaginatedPokemonResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonApiUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private readonly http: HttpClient) { }

  getMany(limit: number): Observable<PaginatedPokemonResponse> {
    let params = new HttpParams();
    params = params.append('limit', limit);
    params = params.append('offset', 0);
    return this.http.get<PaginatedPokemonResponse>(this.pokemonApiUrl, { params }).pipe(
      delay(1000),
       map(() => {throw 'error'}) // Uncomment to see results
    );
  };

}
