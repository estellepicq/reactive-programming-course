import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { BehaviorSubject, catchError, map, of, switchMap, tap } from 'rxjs';
import { PokemonService } from '../data-access/pokemon.service';

@Component({
  selector: 'app-declarative-code',
  templateUrl: './declarative-code.component.html',
  styleUrls: ['./declarative-code.component.scss']
})
export class DeclarativeCodeComponent {

  public totalItemsLoaded = 0;
  public isLoading = false;
  public hasError = false;
  private lazyLoadEvent!: LazyLoadEvent;

  limite$ = new BehaviorSubject(0)
  pokemonsData$ = this.limite$.pipe(
    switchMap((currentLimit) => 
       this.pokemonService.getMany(currentLimit)
    ),
    map(response => ({ results: response.results, totalCount: response.count })),
    tap((res) => {
      this.totalItemsLoaded = res.results.length
      this.isLoading = false
    }),
    catchError(() => {
      this.hasError = true;
      return of({ results: [], totalCount: 0 });
    })
  )

  constructor(
    private readonly pokemonService: PokemonService
  ) { }

  load(lazyLoadEvent: LazyLoadEvent): void {
    if (!lazyLoadEvent || JSON.stringify(lazyLoadEvent) === JSON.stringify(this.lazyLoadEvent)) {
      return;
    }
  
    const visibleItems = Math.min(lazyLoadEvent.first! + lazyLoadEvent.rows!, this.totalItemsLoaded);

    if (visibleItems >= this.totalItemsLoaded) {
      this.limite$.next(this.limite$.value + 20);
      this.isLoading = true;
    }
  
    this.lazyLoadEvent = lazyLoadEvent;
  }

}
