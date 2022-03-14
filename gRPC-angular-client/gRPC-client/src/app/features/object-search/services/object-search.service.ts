import { Injectable } from '@angular/core';
import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import mapboxgl from 'mapbox-gl';
import { Subject, ReplaySubject, Observable, combineLatest } from 'rxjs';
import { switchMap, map, filter, shareReplay, withLatestFrom } from 'rxjs/operators';
import { WozObjectRequestById, WozObjectsReply } from 'src/app/proto/wozobject.pb';
import { WozObjectsClient } from 'src/app/proto/wozobject.pbsc';
import { convertWozObjectsToGeoJson } from 'src/app/shared/woz-object-utility';

@Injectable({ providedIn: 'root' })
export class ObjectSearchService {
  private wozObjectRequest$$: Subject<WozObjectRequestById> = new ReplaySubject<WozObjectRequestById>(1);
  private goToObject$$: Subject<number> = new ReplaySubject<number>(0);

  goToObject(id: number) {
    this.goToObject$$.next(id);
  }

  findWozObjects(id: number): void {
    const request = new WozObjectRequestById();
    request.wozobjectnummer = '' + id;
    this.wozObjectRequest$$.next(request);
  }

  constructor(private wozObjectClient: WozObjectsClient) {}

  wozObjects$: Observable<AsyncState<WozObjectsReply>> = combineLatest([this.wozObjectRequest$$]).pipe(
    switchMap(([request]) => this.wozObjectClient.getWozObject(request)),
    toAsyncState(),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  private wozObjectResults$ = this.wozObjects$.pipe(
    filter((state) => state.success),
    map((state) => state.res!)
  );

  wozObjectGeoJson$: Observable<GeoJSON.FeatureCollection> = this.wozObjectResults$.pipe(
    map((wozObject) => (wozObject.wozobjects ? convertWozObjectsToGeoJson(wozObject.wozobjects) : [])),
    map((features) => ({ type: 'FeatureCollection', features }))
  );

  goToObject$: Observable<mapboxgl.LngLat> = this.goToObject$$.pipe(
    withLatestFrom(this.wozObjectResults$),
    map(([id, objects]) => objects.wozobjects?.filter((w) => w.wozobjectnummer === '' + id)),
    filter((o) => !!o),
    map((o) => o![0]!),
    map((object) => new mapboxgl.LngLat(object.lon?.value!, object.lat?.value!))
  );
}
