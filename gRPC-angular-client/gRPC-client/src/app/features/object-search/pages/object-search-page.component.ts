import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { merge, Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { GetFullWozObjectService } from '../services/get-full-object.service';

@UntilDestroy()
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
  private stateToggle$$: Subject<
    'displayMap' | 'displayObject'
  > = new ReplaySubject<'displayMap' | 'displayObject'>(0);
  public isExpanded = false;

  private wozObjectstate$ = this.getwozObjectService.wozObjectRequest$.pipe(
    map(req => (req.wozobjectnummer ? 'displayObject' : 'displayMap'))
  );

  state$: Observable<'displayMap' | 'displayObject'> = merge(
    this.wozObjectstate$,
    this.stateToggle$$.asObservable()
  ).pipe(startWith('displayMap'));

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
    this.refreshEvent();
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getwozObjectService: GetFullWozObjectService
  ) {}

  refreshEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }

  toggleMap() {
    this.stateToggle$$.next('displayMap');
    this.refreshEvent();
  }

  onSelectionChange(id: string) {
    this.stateToggle$$.next('displayObject');
    this.router.navigate([id], {
      relativeTo: this.route
    });
  }
}
