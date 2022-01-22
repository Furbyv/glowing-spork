import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './features/start-page/pages/start-page.component';
import { StartPageModule } from './features/start-page/start-page.module';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  {
    path: 'tax-overview',
    loadChildren: () =>
      import('./features/tax-overview/tax-overview.module').then(
        m => m.TaxOverviewModule
      )
  },
  {
    path: 'search-object',
    loadChildren: () =>
      import('./features/object-search/object-search.module').then(
        m => m.ObjectSearchModule
      )
  },
  {
    path: 'home',
    component: StartPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
