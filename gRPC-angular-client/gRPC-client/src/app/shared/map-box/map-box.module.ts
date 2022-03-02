import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from '../material/material.module';
import { LayerSelectComponent } from './layer-select/layer-select.component';
import { MapBoxComponent } from './map-box.component';

@NgModule({
  declarations: [MapBoxComponent, LayerSelectComponent],
  imports: [CommonModule, MaterialModule, TranslocoModule],
  exports: [MapBoxComponent]
})
export class MapBoxModule {}
