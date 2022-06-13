import { Injectable } from '@angular/core';
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { TaxationRequest } from 'src/app/protos/taxation.pb';
import { TaxationObjectsClient } from 'src/app/protos/taxation.pbsc';
import { convertWozObjectsToGeoJson } from 'src/app/shared/woz-object-utility';
import { TimePeriodService } from '../../time-period/services/time-period.service';

@Injectable({ providedIn: 'root' })
export class TaxationService {
  private request$$: Subject<number> = new ReplaySubject<number>(1);
  taxations$ = combineLatest([this.request$$, this.timeperiodService.selectedTimeFrame$]).pipe(
    switchMap(([rq, tf]) =>
      this.taxationClient.getTaxationsObject(new TaxationRequest({ prijspeilid: '' + tf.id, wozobjectnummer: '' + rq }))
    ),
    shareReplay({ bufferSize: 0, refCount: true })
  );

  singleTaxation$ = this.taxations$.pipe(map((t) => (t.taxations ? t.taxations[0] : null)));

  constructor(private taxationClient: TaxationObjectsClient, private timeperiodService: TimePeriodService) {}

  getTaxations(wozobjectnummer: number) {
    this.request$$.next(wozobjectnummer);
  }

  taxationGeoJson$: Observable<GeoJSON.FeatureCollection> = this.singleTaxation$.pipe(
    map((t) => t?.freezeWozObject),
    map((wozObject) => (wozObject ? convertWozObjectsToGeoJson([wozObject]) : [])),
    map((features) => ({ type: 'FeatureCollection', features }))
  );

  comparablesGeoJson$: Observable<GeoJSON.FeatureCollection> = this.singleTaxation$.pipe(
    filter((t) => !!t),
    map((t) => t?.comparableObjects?.map((c) => c.transaction!)),
    map((t) => (t ? convertWozObjectsToGeoJson(t) : [])),
    map((features) => ({ type: 'FeatureCollection', features }))
  );
}
