import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import {
  CarouselComponent,
  CarouselItemElement,
} from './carousel/carousel.component';

@NgModule({
  declarations: [CarouselComponent, CarouselItemDirective, CarouselItemElement],
  imports: [CommonModule, MaterialModule],
  exports: [CarouselComponent],
})
export class SharedModule {}
