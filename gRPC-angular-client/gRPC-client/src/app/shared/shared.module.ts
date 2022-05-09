import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { TranslocoModule } from '@ngneat/transloco';
import { SaveButtonComponent } from './save-button/save-button.component';
import { NoObjectComponent } from './no-object/no-object.component';
import { OverviewGridComponent } from './overview-grid/overview-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SaveButtonComponent, NoObjectComponent, OverviewGridComponent, FilterDialogComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, TranslocoModule, AgGridModule],
  exports: [SaveButtonComponent, NoObjectComponent, OverviewGridComponent, FilterDialogComponent],
})
export class SharedModule {}
