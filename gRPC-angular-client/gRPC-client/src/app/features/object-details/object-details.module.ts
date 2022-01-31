import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { AgGridModule } from 'ag-grid-angular';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpandPhotoDialog } from './components/photos-card/expand-photo-dialog/expand-photo-dialog.component';
import { ObjectMapComponent } from './components/object-map/object-map.component';
import { SubobjectGridComponent } from './components/subobject-grid/subobject-grid.component';
import { ObjectPropertiesComponent } from './components/object-properties/object-properties.component';
import { ObjectTabsComponent } from './components/object-tabs/object-tabs.component';
import { ObjectDetailsComponent } from './pages/object-details.component';
import { PhotosCardComponent } from './components/photos-card/photos-card.component';

@NgModule({
  declarations: [
    ObjectDetailsComponent,
    ObjectPropertiesComponent,
    ObjectTabsComponent,
    PhotosCardComponent,
    ExpandPhotoDialog,
    SubobjectGridComponent,
    ObjectMapComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    TranslocoModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1IjoiZnJhbmt2ZSIsImEiOiJja3h4ZDg1cXoyNTNpMnNtcGdmeThxeTY5In0.-OgEUsCLZv5yV35LiNa-Pg',
      geocoderAccessToken: ''
    })
  ]
})
export class ObjectDetailsModule {}
