import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent {

  pokemons = signal([
    'Salamèche',
    'Bulbizarre',
    'Carapuce'
  ]);
  searchText = signal('');

  filteredPokemons = computed(
    () => 
    this.pokemons().filter(p => p.toLowerCase().startsWith(this.searchText()))
  );

  logger = effect(() => {
    console.log('Effect triggered: ', this.searchText());
  });

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchText.set(target.value);
  }

  add() {
    this.pokemons.update((pokemons) => [...pokemons, 'Pikachu']);
    // this.pokemons.mutate((pokemons) => { pokemons.push('Pikachu') });
  }

}
