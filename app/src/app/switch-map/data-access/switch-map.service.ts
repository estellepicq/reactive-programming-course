import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { MOVIES } from './movies.mock';

@Injectable({
  providedIn: 'root'
})
export class SwitchMapService {

  constructor() { }

  search(query: string): Observable<string[]> {

    const filteredMovies = MOVIES.filter(movie =>
      movie.toLowerCase().includes(query.toLowerCase())
    );
    // simulate an API request with a delay
    return of(filteredMovies).pipe(delay(500));
  }
}
