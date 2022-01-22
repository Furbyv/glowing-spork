import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { StartPageComponent } from './pages/start-page.component';
import { StartPageRoutingModule } from './start-page-routing.module';

@NgModule({
  declarations: [StartPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    TranslocoModule,
    StartPageRoutingModule
  ],
  exports: [StartPageComponent]
})
export class StartPageModule {}
