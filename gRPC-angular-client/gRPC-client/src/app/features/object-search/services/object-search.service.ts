import { Injectable } from '@angular/core';
import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import { Subject, ReplaySubject, Observable, combineLatest } from 'rxjs';
import { switchMap, map, filter } from 'rxjs/operators';
import {
  WozObjectReply,
  WozObjectRequestById,
  WozObjectsReply
} from 'src/app/proto/wozobject.pb';
import { WozObjectsClient } from 'src/app/proto/wozobject.pbsc';

@Injectable({ providedIn: 'root' })
export class ObjectSearchService {
  private wozObjectRequest$$: Subject<WozObjectRequestById> = new ReplaySubject<
    WozObjectRequestById
  >(1);

  findWozObjects(id: number): void {
    const request = new WozObjectRequestById();
    request.wozobjectnummer = '' + id;
    this.wozObjectRequest$$.next(request);
  }

  constructor(private wozObjectClient: WozObjectsClient) {}

  wozObjects$: Observable<AsyncState<WozObjectsReply>> = combineLatest([
    this.wozObjectRequest$$
  ]).pipe(
    switchMap(([request]) => this.wozObjectClient.getWozObject(request)),
    toAsyncState()
  );

  wozObjectGeoJson$ = this.wozObjects$.pipe(
    filter(state => state.success),
    map(state => state.res!),
    map(wozObject =>
      wozObject.wozobjects
        ? this.convertWozObjectsToGeoJson(wozObject.wozobjects)
        : []
    )
  );

  convertWozObjectsToGeoJson(wozObjects: WozObjectReply[]): GeoJSON.Feature[] {
    return wozObjects.map(w => {
      const geometry: GeoJSON.Point = {
        type: 'Point',
        coordinates: [w.lon?.value!, w.lat?.value!]
      };
      const feature: GeoJSON.Feature = {
        id: w.wozobjectnummer!,
        type: 'Feature',
        geometry,
        properties: {
          adres: `${w.straatnaam?.value} ${w.huisnummer}${w.huisletter?.value} ${w.huisnummertoevoeging?.value}`
        }
      };
      return feature;
    });
  }
}
