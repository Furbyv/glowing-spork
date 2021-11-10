import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import {
  CarouselComponent,
  CarouselItemElement,
} from './carousel/carousel.component';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement,
    UploadDialogComponent,
  ],
  imports: [CommonModule, MaterialModule, TranslocoModule],
  exports: [
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement,
    UploadDialogComponent,
  ],
})
export class SharedModule {}
