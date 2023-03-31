import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";

export interface ManualSubsState {
    name: string;
  }
   
  @Injectable()
  export class ManualSubsStore extends ComponentStore<ManualSubsState> {
    readonly name$: Observable<string> = this.select(state => state.name);
    
    readonly valueChangeEffect = this.effect<string>(obs => obs);

    constructor() {
      super();
    }
   
  }