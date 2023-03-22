import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { BehaviorSubject, catchError, combineLatest, distinctUntilChanged, EMPTY, ignoreElements, map, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { Pokemon, PokemonService } from 'src/app/shared/data-access/pokemon.service';

@Component({
  selector: 'app-declarative-code',
  templateUrl: './declarative-code.component.html',
  styleUrls: ['./declarative-code.component.scss']
})
export class DeclarativeCodeComponent {

  private lazyLoadEvent!: LazyLoadEvent;

  private loading$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  private paginationState$ = new BehaviorSubject({ currentPage: 0, totalItems: 0 });

  private pokemons$: Observable<{results: Pokemon[], count: number}> = this.paginationState$.pipe(
    map((paginationState) => paginationState.currentPage * 20),
    distinctUntilChanged(),
    switchMap((currentLimit) =>
      this.pokemonService.getMany(currentLimit)
    ),
    tap((res) => {
      if (res) {
        const totalItemsLoaded = res.results.length;
        this.paginationState$.next({ ...this.paginationState$.value, totalItems: totalItemsLoaded });
        this.loading$.next(false);
      }
    })
  );

  private pokemonsData$ = this.pokemons$.pipe(startWith(null), catchError(() => EMPTY));

  private error$: Observable<any> = this.pokemons$.pipe(
    ignoreElements(),
    startWith(null),
    catchError((err) => of(err)),
  )

  public vm$ = combineLatest([this.pokemonsData$, this.error$, this.loading$]).pipe(
    map(([pokemonsData, err, loading]) => ({
      results: pokemonsData?.results,
      count: pokemonsData?.count,
      err,
      loading
    }))
  );

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
      this.loading$.next(true);
    }

    this.lazyLoadEvent = lazyLoadEvent;
  }

}
