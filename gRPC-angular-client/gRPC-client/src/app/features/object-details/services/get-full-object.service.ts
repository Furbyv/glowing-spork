import { Injectable } from '@angular/core';
import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';
import {
  FullWozObjectReply,
  FullWozObjectSaveReply,
  WozObjectRequestById
} from 'src/app/proto/wozobject.pb';
import { WozObjectsClient } from 'src/app/proto/wozobject.pbsc';
import { convertWozObjectsToGeoJson } from 'src/app/shared/woz-object-utility';

@Injectable({ providedIn: 'root' })
export class GetFullWozObjectService {
  private wozObjectRequest$$: Subject<WozObjectRequestById> = new ReplaySubject<
    WozObjectRequestById
  >(1);
  private saveWozObjectRequest$$: Subject<FullWozObjectReply> = new Subject<
    FullWozObjectReply
  >();
  wozObjectRequest$ = this.wozObjectRequest$$.asObservable();

  constructor(private wozObjectClient: WozObjectsClient) {}

  getFullWozObject(id: number): void {
    const request = new WozObjectRequestById();
    request.wozobjectnummer = '' + id;
    this.wozObjectRequest$$.next(request);
  }

  fullWozObject$: Observable<
    AsyncState<FullWozObjectReply>
  > = this.wozObjectRequest$$.pipe(
    switchMap(request => this.wozObjectClient.getFullWozObject(request)),
    toAsyncState(),
    shareReplay({ bufferSize: 0, refCount: true })
  );

  address$ = this.fullWozObject$.pipe(
    filter(state => state.success),
    map(state => state.res!),
    map(
      wozobject =>
        `${wozobject.straatnaam?.value!.replace(/[^a-zA-Z ]/g, '') ??
          ''} ${wozobject.huisnummer ?? 0}${wozobject.huisletter?.value ??
          ''} ${wozobject.huisnummertoevoeging?.value ?? ''}`
    )
  );

  saveState$: Observable<AsyncState<FullWozObjectSaveReply>> = combineLatest([
    this.saveWozObjectRequest$$
  ]).pipe(
    switchMap(([request]) => this.wozObjectClient.saveFullWozObject(request)),
    toAsyncState()
  );

  saveWozObject(wozObject: FullWozObjectReply) {
    this.saveWozObjectRequest$$.next(wozObject);
  }

  wozObjectGeoJson$ : Observable<GeoJSON.FeatureCollection> = this.fullWozObject$.pipe(
    filter(state => state.success),
    map(state => state.res!),
    map(wozObject => (wozObject ? convertWozObjectsToGeoJson([wozObject]) : [])),
    map(features => ({ type: 'FeatureCollection', features }))
  );
}
