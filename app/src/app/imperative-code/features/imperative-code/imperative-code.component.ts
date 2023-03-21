import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Pokemon, PokemonService } from 'src/app/declarative-code/features/data-access/pokemon.service';

@Component({
  selector: 'app-imperative-code',
  templateUrl: './imperative-code.component.html',
  styleUrls: ['./imperative-code.component.scss']
})
export class ImperativeCodeComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  public totalCount = 0;
  public loading = false;
  public error= false;
  private limit = 20;
  private params!: LazyLoadEvent;

  constructor(
    private readonly pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.load({});
  }

  load(params: LazyLoadEvent): void {
    if (JSON.stringify(params) === JSON.stringify(this.params)) {
      return;
    }
    this.loading = true;
    if (params.hasOwnProperty('last') && this.params.last && params.first! + params.rows! >= this.limit) {
      this.limit = Math.max(this.limit, this.limit + params.last!);
    }
    this.params = params;
    this.pokemonService.getMany(this.limit).subscribe((response) => {
      this.pokemons = response.results;
      this.totalCount = response.count;
      this.loading = false;

      if (!this.totalCount) {
        this.error = true;
      }
    });
  }

}
