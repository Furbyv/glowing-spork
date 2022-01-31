import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ObjectSearchService } from '../../services/object-search.service';
import { SearchLayoutService } from '../../services/search-layout.service';

@UntilDestroy()
@Component({
  selector: 'app-object-search',
  templateUrl: './object-search.component.html',
  styleUrls: ['./object-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectSearchComponent {
  @Input() isExpanded: boolean = true;
  @Input() maxCharacters: number = 12;
  @Output() toggleMenu = new EventEmitter();

  private state: 'displayMap' | 'displayObject' | 'displayGrid' = 'displayMap';
  private startRequest$$: Subject<boolean> = new Subject<boolean>();

  loading$ = combineLatest([
    this.objectSearchService.wozObjects$,
    this.startRequest$$
  ]).pipe(map(([state]) => state.loading));

  wozobjects$ = this.objectSearchService.wozObjects$.pipe(
    filter(state => state.complete),
    map(state => state.res!),
    map(w => w.wozobjects)
  );

  constructor(
    private objectSearchService: ObjectSearchService,
    private layoutService: SearchLayoutService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.layoutService.state$
      .pipe(untilDestroyed(this))
      .subscribe(state => (this.state = state));
  }

  onToggleMap() {
    this.layoutService.toggleMap();
  }

  onToggleObject() {
    this.layoutService.toggleObject();
  }

  onSearch(value: string) {
    var numberValue = this.ConvertStringToNumber(value);
    this.startRequest$$.next(true);
    this.objectSearchService.findWozObjects(numberValue);
  }

  ConvertStringToNumber(input: string) {
    if (!input) return NaN;
    if (input.trim().length == 0) return NaN;
    return Number(input);
  }

  onObjectSelected(id: number) {
    if (this.state === 'displayMap') {
      this.objectSearchService.goToObject(id);
    } else {
      this.router.navigate([id], {
        relativeTo: this.route
      });
    }
  }

  onObjectDoubleClicked(id: number) {
    this.layoutService.toggleObject();
    this.router.navigate([id], {
      relativeTo: this.route
    });
  }
}
