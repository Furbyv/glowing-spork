import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from '../material/material.module';
import { MapBoxComponent } from './map-box.component';

@NgModule({
  declarations: [MapBoxComponent],
  imports: [CommonModule, MaterialModule, TranslocoModule],
  exports: [MapBoxComponent]
})
export class MapBoxModule {}
