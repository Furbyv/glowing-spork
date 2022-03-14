import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MaterialModule } from '../material/material.module';
import { LayerSelectComponent } from './layer-select/layer-select.component';
import { MapBoxComponent } from './map-box.component';

@NgModule({
  declarations: [MapBoxComponent, LayerSelectComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslocoModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiZnJhbmt2ZSIsImEiOiJja3h4ZDg1cXoyNTNpMnNtcGdmeThxeTY5In0.-OgEUsCLZv5yV35LiNa-Pg',
      geocoderAccessToken: '',
    }),
  ],
  exports: [MapBoxComponent],
})
export class MapBoxModule {}
