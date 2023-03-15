import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImperativeCodeComponent } from 'src/app/components/imperative-code/imperative-code.component';
import { ConcatMapComponent } from './components/concat-map/concat-map/concat-map.component';
import { SwitchMapComponent } from './components/switch-map/switch-map/switch-map.component';

const routes: Routes = [
  {
    path: 'switchMap', title:  'switchMap', component: SwitchMapComponent,
  },
  {
    path: 'concatMap', title:  'concatMap', component: ConcatMapComponent,
  },
  {
    path: 'imperative', title:  'Imperative code', component: ImperativeCodeComponent,
  },
  { 
    path: '', component: SwitchMapComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
