import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ObjectDetailsComponent } from './components/object-details/object-details.component';
import { PhotosCardComponent } from './components/object-details/photos-card/photos-card.component';
import { ObjectSearchListItemComponent } from './components/object-search-list-item/object-search-list-item.component';
import { ObjectSearchListComponent } from './components/object-search-list/object-search-list.component';
import { ObjectSearchComponent } from './components/object-search/object-search.component';
import { ObjectSearchRoutingModule } from './object-search-routing.module';
import { ObjectSearchPageComponent } from './pages/object-search-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpandPhotoDialog } from './components/object-details/photos-card/expand-photo-dialog/expand-photo-dialog.component';
import { ObjectPropertiesComponent } from './components/object-details/object-properties/object-properties.component';
import { ObjectTabsComponent } from './components/object-details/object-tabs/object-tabs.component';
import { ObjectPropertyHeaderComponent } from './components/object-details/object-properties/object-property-header/object-property-header.component';
import { SubobjectGridComponent } from './components/subobject-grid/subobject-grid.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    ObjectSearchComponent,
    ObjectSearchListComponent,
    ObjectSearchListItemComponent,
    ObjectDetailsComponent,
    ObjectSearchPageComponent,
    ObjectPropertiesComponent,
    ObjectTabsComponent,
    ObjectPropertyHeaderComponent,
    PhotosCardComponent,
    ExpandPhotoDialog,
    SubobjectGridComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    ObjectSearchRoutingModule,
    TranslocoModule
  ]
})
export class ObjectSearchModule {}
