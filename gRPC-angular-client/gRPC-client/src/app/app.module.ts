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
import { ObjectSearchModule } from './features/object-search/object-search.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { GrpcCoreModule } from '@ngx-grpc/core';
import { GrpcWebClientModule } from '@ngx-grpc/grpc-web-client';
import { AgGridModule } from 'ag-grid-angular';
import { TaxOverviewModule } from './features/tax-overview/tax-overview.module';
import { StartPageModule } from './features/start-page/start-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    TranslocoRootModule,
    LayoutModule,
    StartPageModule,
    AgGridModule.withComponents([]),
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({
      settings: { host: 'https://localhost:5001' }
    })
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
