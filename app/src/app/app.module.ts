import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcatMapComponent } from './concat-map/concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map/switch-map.component';
import { SharedModule } from './shared/shared.module';
import { ImperativeCodeComponent } from './imperative-code/features/imperative-code/imperative-code.component';
import { DeclarativeCodeComponent } from './declarative-code/features/declarative-code/declarative-code.component';
import { ManualSubsComponent } from './manual-subs/manual-subs.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchMapComponent,
    ConcatMapComponent,
    ImperativeCodeComponent,
    DeclarativeCodeComponent,
    ManualSubsComponent,
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
