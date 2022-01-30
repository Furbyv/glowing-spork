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
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MapBoxMapComponent } from './components/mapbox/map-box-map.component';
import { ObjectSearchPageComponent } from './pages/object-search-page.component';
import { ObjectDetailsModule } from '../object-details/object-details.module';
import { SmallActionBarComponent } from './components/object-search/small-action-bar/small-action-bar.component';
import { LargeActionBarComponent } from './components/object-search/large-action-bar/large-action-bar.component';
import { NoObjectComponent } from '../object-details/no-object/no-object.component';
import { SearchLayoutService } from './services/search-layout.service';

@NgModule({
  declarations: [
    ObjectSearchComponent,
    ObjectSearchPageComponent,
    ObjectSearchListComponent,
    ObjectSearchListItemComponent,
    SmallActionBarComponent,
    LargeActionBarComponent,
    MapBoxMapComponent,
    NoObjectComponent
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
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1IjoiZnJhbmt2ZSIsImEiOiJja3h4ZDg1cXoyNTNpMnNtcGdmeThxeTY5In0.-OgEUsCLZv5yV35LiNa-Pg',
      geocoderAccessToken: ''
    })
  ],
  exports: [ObjectSearchListComponent],
  providers: [SearchLayoutService]
})
export class ObjectSearchModule {}
