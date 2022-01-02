import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Map, NavigationControl } from 'mapbox-gl';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  Feature,
  MapboxSearchService
} from 'src/app/features/mapbox/mapbox-search.service';

@Component({
  selector: 'app-object-amp',
  templateUrl: './object-map.component.html',
  styleUrls: ['./object-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectMapComponent implements OnChanges {
  private addressQuery$$: Subject<string> = new ReplaySubject<string>(0);
  @Input() address: string | undefined;
  private map: Map | undefined;

  mapboxFeatures$: Observable<Feature> = this.addressQuery$$.pipe(
    switchMap(query => this.mapboxSearchService.search_word(query)),
    map(features => features[0])
  );

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.address && this.address) {
      this.addressQuery$$.next(this.address);
    }
  }

  constructor(private mapboxSearchService: MapboxSearchService) {}
}
