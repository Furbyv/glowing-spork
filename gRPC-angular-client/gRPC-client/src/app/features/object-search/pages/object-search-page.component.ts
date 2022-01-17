import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { merge, Observable, ReplaySubject, Subject } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { GetFullWozObjectService } from '../../object-details/services/get-full-object.service';
import { SearchLayoutService } from '../services/search-layout.service';

@Component({
  selector: 'app-object-search-page',
  templateUrl: './object-search-page.component.html',
  styleUrls: ['./object-search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('displayMapState', [
      state(
        'displayMap',
        style({
          opacity: 1,
          height: '100%'
        })
      ),
      state(
        'displayObject',
        style({
          opacity: 0,
          height: 0
        })
      ),
      transition('* => *', animate('300ms ease-out'))
    ]),
    trigger('displayObjectState', [
      state(
        'displayMap',
        style({
          opacity: 0,
          height: '0'
        })
      ),
      state(
        'displayObject',
        style({
          opacity: 1,
          height: '100%'
        })
      ),
      transition('* => *', animate('300ms ease-out'))
    ])
  ]
})
export class ObjectSearchPageComponent {
  public isExpanded = false;

  state$ = this.layoutService.state$;

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
    this.refreshEvent();
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private layoutService: SearchLayoutService
  ) {}

  refreshEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }

  onSelectionChange(id: string) {
    this.layoutService.toggleObject();
    this.router.navigate([id], {
      relativeTo: this.route
    });
  }
}
