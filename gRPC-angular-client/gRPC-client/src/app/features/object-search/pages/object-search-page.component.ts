import { MediaMatcher } from '@angular/cdk/layout';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-object-search-page',
  templateUrl: './object-search-page.component.html',
  styleUrls: ['./object-search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectSearchPageComponent {
  public isExpanded = false;

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {}
}
