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

@NgModule({
  declarations: [
    ObjectSearchComponent,
    ObjectSearchPageComponent,
    ObjectSearchListComponent,
    ObjectSearchListItemComponent,
    MapBoxMapComponent
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
  ]
})
export class ObjectSearchModule {}
