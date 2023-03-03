import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from './utils/primeng.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      PrimeNGModule,
      HttpClientModule,
    ],
    exports: [
      CommonModule,
      ReactiveFormsModule,
      PrimeNGModule,
      HttpClientModule,
    ]
  })
  export class SharedModule { }
