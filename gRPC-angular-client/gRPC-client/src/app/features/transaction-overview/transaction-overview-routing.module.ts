import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectDetailsComponent } from '../object-details/pages/object-details.component';
import { NoObjectComponent } from '../../shared/no-object/no-object.component';
import { TransactionOverviewPageComponent } from './pages/transaction-overview-page.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionOverviewPageComponent,
    children: [
      {
        path: '',
        component: NoObjectComponent,
      },
      {
        path: ':id',
        component: ObjectDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionOverviewRoutingModule {}
