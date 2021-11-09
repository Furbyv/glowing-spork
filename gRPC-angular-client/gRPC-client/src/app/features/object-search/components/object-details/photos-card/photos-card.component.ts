import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { filter, map, startWith } from 'rxjs/operators';
import { ImagesService } from '../../../services/images.service';

@Component({
  selector: 'app-photos-card',
  templateUrl: 'photos-card.component.html',
  styleUrls: ['photos-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosCardComponent implements OnChanges {
  @Input() id: number | undefined;

  photos = [
    { src: 'https://cloud.funda.nl/valentina_media/151/205/843_2160.jpg' },
    { src: 'https://cloud.funda.nl/valentina_media/151/205/843_2160.jpg' },
    { src: 'https://cloud.funda.nl/valentina_media/151/205/843_2160.jpg' },
  ];

  loading$ = this.imagesService.images$.pipe(
    map((state) => state.loading),
    startWith(true)
  );

  images$ = this.imagesService.images$.pipe(
    filter((state) => state.success),
    map((state) => state.res!),
    map((images) =>
      images.length ? images : [this.imagesService.defaultImage]
    )
  );

  ngOnChanges(changes: SimpleChanges) {
    if (changes.id && this.id) {
      this.imagesService.getImage(this.id, false);
    }
  }

  constructor(private imagesService: ImagesService) {}
}
