import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './pages/start-page.component';

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent
  },
  {
    path: 'search-object',
    loadChildren: () =>
      import('../object-search/object-search.module').then(
        m => m.ObjectSearchModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartPageRoutingModule {}
