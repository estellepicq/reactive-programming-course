import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { ChipModule } from 'primeng/chip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ListboxModule,
    FileUploadModule,
    CheckboxModule,
    BreadcrumbModule,
    InputNumberModule,
    CalendarModule,
    DataViewModule,
    RatingModule,
    ChipModule,
    InputSwitchModule,
    InputTextareaModule,
    DynamicDialogModule,
    StepsModule,
    CardModule,
    SkeletonModule,
    ProgressSpinnerModule,
    VirtualScrollerModule
  ],
  exports: [
    TableModule,
    PaginatorModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ListboxModule,
    FileUploadModule,
    CheckboxModule,
    BreadcrumbModule,
    InputNumberModule,
    CalendarModule,
    DataViewModule,
    RatingModule,
    ChipModule,
    InputSwitchModule,
    InputTextareaModule,
    DynamicDialogModule,
    StepsModule,
    CardModule,
    SkeletonModule,
    ProgressSpinnerModule,
    VirtualScrollerModule
  ],
  providers: [
    DialogService
  ]
})
export class PrimeNGModule { }
