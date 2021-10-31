import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectSearchModule } from './features/object-search/object-search.module';

const routes: Routes = [
  { path: '', redirectTo: '/search-object', pathMatch: 'full' },
  {
    path: 'search-object',
    loadChildren: () =>
      import('./features/object-search/object-search.module').then(
        (m) => m.ObjectSearchModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
