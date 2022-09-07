import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { AgGridModule } from 'ag-grid-angular';
import { MapBoxModule } from 'src/app/shared/map-box/map-box.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ObjectDetailsModule } from '../object-details/object-details.module';
import { TaxcodeSelectComponent } from './components/taxcode-select/taxcode-select.component';
import { TaxationDetailsPageComponent } from './pages/taxation-details-page/taxation-details-page.component';

@NgModule({
  declarations: [TaxationDetailsPageComponent, TaxcodeSelectComponent],
  imports: [
    CommonModule,
    MapBoxModule,
    AgGridModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    TranslocoModule,
    ObjectDetailsModule,
  ],
  exports: [TaxationDetailsPageComponent],
})
export class TaxationDetailsModule {}
