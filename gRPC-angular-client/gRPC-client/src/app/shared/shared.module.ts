import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { TranslocoModule } from '@ngneat/transloco';
import { SaveButtonComponent } from './save-button/save-button.component';
import { NoObjectComponent } from './no-object/no-object.component';

@NgModule({
  declarations: [SaveButtonComponent, NoObjectComponent],
  imports: [CommonModule, MaterialModule, TranslocoModule],
  exports: [SaveButtonComponent, NoObjectComponent]
})
export class SharedModule {}
