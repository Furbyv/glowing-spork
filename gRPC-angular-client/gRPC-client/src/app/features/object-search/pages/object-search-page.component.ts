import { MediaMatcher } from '@angular/cdk/layout';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    window.dispatchEvent(new Event('resize'));
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  onSelectionChange(id: string) {
    this.router.navigate([id], {
      relativeTo: this.route
    });
  }
}
