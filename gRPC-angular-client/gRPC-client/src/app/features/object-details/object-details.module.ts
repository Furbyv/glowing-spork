import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { AgGridModule } from 'ag-grid-angular';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpandPhotoDialog } from './components/photos-card/expand-photo-dialog/expand-photo-dialog.component';
import { SubobjectGridComponent } from './components/subobject-grid/subobject-grid.component';
import { ObjectPropertiesComponent } from './components/object-properties/object-properties.component';
import { ObjectTabsComponent } from './components/object-tabs/object-tabs.component';
import { ObjectDetailsComponent } from './pages/object-details.component';
import { PhotosCardComponent } from './components/photos-card/photos-card.component';
import { PhotoImageComponent } from './components/photos-card/photo-image/photo-image.component';
import { ObjectGridComponent } from './components/object-grid/object-grid.component';
import { MapBoxModule } from 'src/app/shared/map-box/map-box.module';

@NgModule({
  declarations: [
    ObjectDetailsComponent,
    ObjectPropertiesComponent,
    ObjectTabsComponent,
    PhotosCardComponent,
    ExpandPhotoDialog,
    SubobjectGridComponent,
    PhotoImageComponent,
    ObjectGridComponent
  ],
  imports: [
    CommonModule,
    MapBoxModule,
    AgGridModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    TranslocoModule
  ]
})
export class ObjectDetailsModule {}
