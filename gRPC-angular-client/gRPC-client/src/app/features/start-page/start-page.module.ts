import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { StartPageComponent } from './pages/start-page.component';

@NgModule({
  declarations: [StartPageComponent],
  imports: [CommonModule, FormsModule, MaterialModule, TranslocoModule],
  exports: [StartPageComponent]
})
export class StartPageModule {}
