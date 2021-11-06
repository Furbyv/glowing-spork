import { Component } from '@angular/core';

@Component({
  selector: 'app-photos-card',
  templateUrl: 'photos-card.component.html',
  styleUrls: ['photos-card.component.scss'],
})
export class PhotosCardComponent {
  photos = [
    { src: 'https://cloud.funda.nl/valentina_media/151/205/843_2160.jpg' },
    { src: 'https://cloud.funda.nl/valentina_media/151/205/843_2160.jpg' },
    { src: 'https://cloud.funda.nl/valentina_media/151/205/843_2160.jpg' },
  ];
}
