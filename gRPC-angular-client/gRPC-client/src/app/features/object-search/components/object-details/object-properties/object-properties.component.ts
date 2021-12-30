import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { GetFullWozObjectService } from '../../../services/get-full-object.service';

@Component({
  selector: 'app-object-properties',
  templateUrl: './object-properties.component.html',
  styleUrls: ['./object-properties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectPropertiesComponent implements OnChanges {
  @Input() id: number | undefined = 0;
  refresh$$: Subject<boolean> = new ReplaySubject<boolean>(1);

  loading$ = this.getFullWozObjectService.fullWozObject$.pipe(
    map((state) => state.loading)
  );

  wozObject$ = this.getFullWozObjectService.fullWozObject$.pipe(
    filter((state) => state.success),
    map((state) => state.res!)
  );

  constructor(private getFullWozObjectService: GetFullWozObjectService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.id && this.id) {
      this.getFullWozObjectService.getFullWozObject(this.id);
    }
  }
}
