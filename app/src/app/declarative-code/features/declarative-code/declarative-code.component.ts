import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { BehaviorSubject, catchError, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';
import { PokemonService } from '../data-access/pokemon.service';
@Component({
  selector: 'app-declarative-code',
  templateUrl: './declarative-code.component.html',
  styleUrls: ['./declarative-code.component.scss']
})
export class DeclarativeCodeComponent {

  private lazyLoadEvent!: LazyLoadEvent;

  isLoading = false
  hasError = false

  paginationState$ = new BehaviorSubject({ currentPage: 0, totalItems: 0 });
  pokemonsData$ = this.paginationState$.pipe(
    map((paginationState) => paginationState.currentPage * 20),
     distinctUntilChanged(),
    switchMap((currentLimit) => 
       this.pokemonService.getMany(currentLimit)
    ),
    map(response => ({ results: response.results, totalCount: response.count })),
    tap((res) => {
      const totalItemsLoaded = res.results.length
      this.paginationState$.next({ ...this.paginationState$.value, totalItems: totalItemsLoaded });
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
  
    const visibleItems = Math.min(lazyLoadEvent.first! + lazyLoadEvent.rows!, this.paginationState$.value.totalItems);

    if (visibleItems >= this.paginationState$.value.totalItems) {
      this.paginationState$.next({ ...this.paginationState$.value, currentPage: this.paginationState$.value.currentPage + 1 });
      this.isLoading = true
    }
  
    this.lazyLoadEvent = lazyLoadEvent;
  }

}
