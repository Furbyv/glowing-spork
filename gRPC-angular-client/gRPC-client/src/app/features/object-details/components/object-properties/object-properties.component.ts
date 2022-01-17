import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { FullWozObjectReply } from 'src/app/proto/wozobject.pb';
import { GetFullWozObjectService } from '../../services/get-full-object.service';

@Component({
  selector: 'app-object-properties',
  templateUrl: './object-properties.component.html',
  styleUrls: ['./object-properties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectPropertiesComponent implements OnChanges {
  @Input() id: number | undefined = 0;

  saveState$ = this.getFullWozObjectService.saveState$.pipe(
    filter(state => state.complete),
    tap(a => console.log(a)),
    map(state => state.res!.isSuccess)
  );

  loading$ = this.getFullWozObjectService.fullWozObject$.pipe(
    map(state => state.loading)
  );

  wozObject$ = this.getFullWozObjectService.fullWozObject$.pipe(
    filter(state => state.success),
    map(state => state.res!)
  );

  address$ = this.wozObject$.pipe(
    map(
      wozobject =>
        `${wozobject.straatnaam?.value!.replace(/[^a-zA-Z ]/g, '') ??
          ''} ${wozobject.huisnummer ?? 0}${wozobject.huisletter?.value ??
          ''} ${wozobject.huisnummertoevoeging?.value ?? ''}`
    )
  );

  constructor(private getFullWozObjectService: GetFullWozObjectService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.id && this.id) {
      this.onRefresh();
    }
  }

  onRefresh() {
    if (this.id) {
      this.getFullWozObjectService.getFullWozObject(this.id);
    }
  }

  onSave(wozObject: FullWozObjectReply) {
    console.log(wozObject);
    this.getFullWozObjectService.saveWozObject(wozObject);
  }
}
