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

@NgModule({
  declarations: [
    ObjectSearchComponent,
    ObjectSearchListComponent,
    ObjectSearchListItemComponent,
    ObjectDetailsComponent,
    ObjectSearchPageComponent,
    PhotosCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    ObjectSearchRoutingModule,
    TranslocoModule,
  ],
})
export class ObjectSearchModule {}
