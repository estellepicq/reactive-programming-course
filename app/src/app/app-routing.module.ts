import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatMapComponent } from './components/concatMap/concat-map/concat-map.component';
import { SwitchMapComponent } from './components/switch-map/switch-map/switch-map.component';

const routes: Routes = [
  {
    path: 'switchMap', component: SwitchMapComponent,
  },
  {
    path: 'concatMap', component: ConcatMapComponent,
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
