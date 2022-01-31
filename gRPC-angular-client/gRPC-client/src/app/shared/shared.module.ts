import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import {
  CarouselComponent,
  CarouselItemElement
} from './carousel/carousel.component';
import { TranslocoModule } from '@ngneat/transloco';
import { SaveButtonComponent } from './save-button/save-button.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement,
    SaveButtonComponent
  ],
  imports: [CommonModule, MaterialModule, TranslocoModule],
  exports: [
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement,
    SaveButtonComponent
  ]
})
export class SharedModule {}
