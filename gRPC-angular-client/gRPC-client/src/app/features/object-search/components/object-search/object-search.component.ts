import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ObjectSearchService } from '../../services/object-search.service';
import { SearchLayoutService } from '../../services/search-layout.service';

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
    private layoutService: SearchLayoutService
  ) {}

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
}
