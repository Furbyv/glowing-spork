import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { LayoutModule } from './layout/layout.module';
import { ObjectSearchComponent } from './features/object-search/components/object-search/object-search.component';
import { ObjectSearchListComponent } from './features/object-search/components/object-search-list/object-search-list/object-search-list.component';
import { ObjectSearchListItemComponent } from './features/object-search/components/object-search-list-item/object-search-list-item/object-search-list-item.component';

@NgModule({
  declarations: [AppComponent, ObjectSearchComponent, ObjectSearchListComponent, ObjectSearchListItemComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    TranslocoRootModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
