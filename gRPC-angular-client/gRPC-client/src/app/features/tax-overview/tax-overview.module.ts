import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
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

@NgModule({
  declarations: [
    TaxOverviewPageComponent,
    TaxOverviewDrawerComponent,
    TaxOverviewGridComponent,
    SmallActionBarComponent,
    LargeActionBarComponent,
    FilterDialogComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    ObjectDetailsModule,
    TranslocoModule,
    TaxOverviewRoutingModule,
    NotesModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1IjoiZnJhbmt2ZSIsImEiOiJja3h4ZDg1cXoyNTNpMnNtcGdmeThxeTY5In0.-OgEUsCLZv5yV35LiNa-Pg',
      geocoderAccessToken: ''
    })
  ],
  providers: [SearchLayoutService]
})
export class TaxOverviewModule {}
