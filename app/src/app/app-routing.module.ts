import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImperativeCodeComponent } from './imperative-code/features/imperative-code/imperative-code.component';
import { DeclarativeCodeComponent } from './declarative-code/features/declarative-code/declarative-code.component';
import { ConcatMapComponent } from './concat-map/concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map/switch-map.component';
import { ManualSubsComponent } from 'src/app/manual-subs/manual-subs.component';

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
    path: 'declarative', title:  'Declarative code', component: DeclarativeCodeComponent,
  },
  {
    path: 'manual-subs', title:  'Manual subscriptions?', component: ManualSubsComponent,
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
