import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ObjectSearchService } from '../../services/object-search.service';

@Component({
  selector: 'app-object-search',
  templateUrl: './object-search.component.html',
  styleUrls: ['./object-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectSearchComponent {
  private startRequest$$: Subject<boolean> = new Subject<boolean>();

  @Input() maxCharacters: number = 12;

  loading$ = combineLatest([
    this.objectSearchService.wozObjects$,
    this.startRequest$$,
  ]).pipe(map(([state]) => state.loading));

  wozobjects$ = this.objectSearchService.wozObjects$.pipe(
    filter((state) => state.complete),
    map((state) => state.res!),
    map((w) => w.toObject().wozobjectsList)
  );

  constructor(private objectSearchService: ObjectSearchService) {}

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
