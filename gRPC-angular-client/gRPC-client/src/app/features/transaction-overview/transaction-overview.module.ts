import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { ObjectDetailsModule } from '../object-details/object-details.module';
import { NotesModule } from '../notes/notes.module';
import { MapBoxModule } from 'src/app/shared/map-box/map-box.module';
import { TransactionOverviewRoutingModule } from './transaction-overview-routing.module';
import { TransactionOverviewPageComponent } from './pages/transaction-overview-page.component';
import { TransactionOverviewDrawerComponent } from './layout/transaction-overview-drawer.component';
import { ActionDrawerModule } from 'src/app/layout/action-drawer/action-drawer.module';
import { DrawerLayoutService } from 'src/app/layout/action-drawer/drawer-layout.service';

@NgModule({
  declarations: [TransactionOverviewPageComponent, TransactionOverviewDrawerComponent],
  imports: [
    CommonModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    ActionDrawerModule,
    MaterialModule,
    SharedModule,
    ObjectDetailsModule,
    TranslocoModule,
    TransactionOverviewRoutingModule,
    NotesModule,
    MapBoxModule,
  ],
  providers: [DrawerLayoutService],
})
export class TransactionOverviewModule {}
