import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, of, startWith, switchMap } from 'rxjs';
import { SwitchMapService } from '../data-access/switch-map.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent {

  searchControl = new FormControl();
  searchResults$: Observable<string[]> = of([]);

  constructor(private moviesService: SwitchMapService) {
    this.searchResults$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.moviesService.search(query)),
    );
  }

  ngOnInit(): void { }

  public trackByMovie(i: number, item: string): number {
    return i;
  }

}
