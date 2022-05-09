import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { ObjectDetailsModule } from '../object-details/object-details.module';
import { TaxOverviewPageComponent } from './pages/tax-overview-page.component';
import { TaxOverviewRoutingModule } from './tax-overview-routing.module';
import { TaxOverviewDrawerComponent } from './layout/tax-overview-drawer/tax-overview-drawer.component';
import { SmallActionBarComponent } from './layout/small-action-bar/small-action-bar.component';
import { LargeActionBarComponent } from './layout/large-action-bar/large-action-bar.component';
import { FilterDialogComponent } from './components/filter-dialog/filter-dialog.component';
import { TaxOverviewGridComponent } from './components/tax-overview-grid/tax-overview-grid.component';
import { SearchLayoutService } from '../object-search/services/search-layout.service';
import { NotesModule } from '../notes/notes.module';
import { MapBoxModule } from 'src/app/shared/map-box/map-box.module';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    TaxOverviewPageComponent,
    TaxOverviewGridComponent,
    TaxOverviewDrawerComponent,
    SmallActionBarComponent,
    LargeActionBarComponent,
    FilterDialogComponent,
  ],
  imports: [
    CommonModule,
    AgGridModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    ObjectDetailsModule,
    TranslocoModule,
    TaxOverviewRoutingModule,
    NotesModule,
    MapBoxModule,
  ],
  providers: [SearchLayoutService],
})
export class TaxOverviewModule {}
