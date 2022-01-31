import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'woz-photo-image',
  templateUrl: 'photo-image.component.html',
  styleUrls: ['photo-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoImageComponent implements OnChanges {
  @Input() images: (SafeUrl | null)[] = [];
  selectedImage: number = 0;
  currentSlide: number = 0;
  photoClass: string = 'photo';

  ngOnChanges(changes: SimpleChanges): void {
    this.currentSlide = 0;
    console.log(this.images.length);
  }

  next() {
    if (this.currentSlide + 1 === this.images.length) return;
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prev() {
    if (this.currentSlide === 0) return;

    this.currentSlide =
      (this.currentSlide - 1 + this.images.length) % this.images.length;
  }

  getImage(): SafeUrl | null {
    return this.images[this.currentSlide];
  }
}
