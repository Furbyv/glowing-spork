import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: 'start-page.component.html',
  styleUrls: ['start-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartPageComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToObjectSearch() {
    this.router.navigate(['search-object'], {
      relativeTo: this.route
    });
  }
}
