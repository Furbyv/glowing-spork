import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ObjectSearchListItemComponent } from './components/object-search-list-item/object-search-list-item.component';
import { ObjectSearchListComponent } from './components/object-search-list/object-search-list.component';
import { ObjectSearchComponent } from './components/object-search/object-search.component';
import { ObjectSearchRoutingModule } from './object-search-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { ObjectSearchPageComponent } from './pages/object-search-page.component';
import { ObjectDetailsModule } from '../object-details/object-details.module';
import { SmallActionBarComponent } from './components/object-search/small-action-bar/small-action-bar.component';
import { LargeActionBarComponent } from './components/object-search/large-action-bar/large-action-bar.component';
import { SearchLayoutService } from './services/search-layout.service';
import { MapBoxModule } from 'src/app/shared/map-box/map-box.module';

@NgModule({
  declarations: [
    ObjectSearchComponent,
    ObjectSearchPageComponent,
    ObjectSearchListComponent,
    ObjectSearchListItemComponent,
    SmallActionBarComponent,
    LargeActionBarComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    ObjectDetailsModule,
    ObjectSearchRoutingModule,
    TranslocoModule,
    MapBoxModule
  ],
  exports: [ObjectSearchListComponent],
  providers: [SearchLayoutService]
})
export class ObjectSearchModule {}
