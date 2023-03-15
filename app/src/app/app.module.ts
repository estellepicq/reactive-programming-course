import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcatMapComponent } from './components/concat-map/concat-map/concat-map.component';
import { SwitchMapComponent } from './components/switch-map/switch-map/switch-map.component';
import { SharedModule } from './shared/shared.module';
import { ImperativeCodeComponent } from './components/imperative-code/imperative-code.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchMapComponent,
    ConcatMapComponent,
    ImperativeCodeComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
