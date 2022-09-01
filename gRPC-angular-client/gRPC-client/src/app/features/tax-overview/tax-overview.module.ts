import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { ObjectDetailsModule } from '../object-details/object-details.module';
import { TaxOverviewPageComponent } from './pages/tax-overview-page.component';
import { TaxOverviewRoutingModule } from './tax-overview-routing.module';
import { TaxOverviewDrawerComponent } from './layout/tax-overview-drawer/tax-overview-drawer.component';
import { NotesModule } from '../notes/notes.module';
import { MapBoxModule } from 'src/app/shared/map-box/map-box.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ActionDrawerModule } from 'src/app/layout/action-drawer/action-drawer.module';
import { DrawerLayoutService } from 'src/app/layout/action-drawer/drawer-layout.service';
import { TaxationDetailsModule } from '../taxation-details/taxation-details.module';

@NgModule({
  declarations: [TaxOverviewPageComponent, TaxOverviewDrawerComponent],
  imports: [
    CommonModule,
    AgGridModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    ObjectDetailsModule,
    TaxationDetailsModule,
    ActionDrawerModule,
    TranslocoModule,
    TaxOverviewRoutingModule,
    NotesModule,
    MapBoxModule,
  ],
  providers: [DrawerLayoutService],
})
export class TaxOverviewModule {}
