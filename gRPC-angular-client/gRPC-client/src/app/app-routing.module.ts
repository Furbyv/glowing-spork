import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectSearchComponent } from './features/object-search/component/object-search.component';

const routes: Routes = [
  { path: 'search-object', component: ObjectSearchComponent },
  { path: '', redirectTo: '/search-object', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
