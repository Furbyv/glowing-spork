import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoObjectComponent } from '../../shared/no-object/no-object.component';
import { TaxOverviewPageComponent } from './pages/tax-overview-page.component';
import { TaxationDetailsPageComponent } from '../taxation-details/pages/taxation-details-page/taxation-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: TaxOverviewPageComponent,
    children: [
      {
        path: '',
        component: NoObjectComponent,
      },
      {
        path: ':id',
        component: TaxationDetailsPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxOverviewRoutingModule {}
