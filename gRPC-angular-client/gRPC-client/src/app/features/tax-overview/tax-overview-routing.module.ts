import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectDetailsComponent } from '../object-details/pages/object-details.component';
import { TaxOverviewPageComponent } from './pages/tax-overview-page.component';

const routes: Routes = [
  {
    path: '',
    component: TaxOverviewPageComponent,
    children: [
      {
        path: 'overview',
        component: TaxOverviewPageComponent
      },
      {
        path: ':id',
        component: ObjectDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxOverviewRoutingModule {}
