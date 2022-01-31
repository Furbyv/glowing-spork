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
import { convertWozObjectsToGeoJson } from 'src/app/shared/woz-object-utility';

@Injectable({ providedIn: 'root' })
export class ObjectSearchService {
  private wozObjectRequest$$: Subject<WozObjectRequestById> = new ReplaySubject<
    WozObjectRequestById
  >(1);
  private goToObject$$: Subject<number> = new ReplaySubject<number>(0);
  goToObject$ = this.goToObject$$.asObservable();

  goToObject(id: number) {
    this.goToObject$$.next(id);
  }

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
        ? convertWozObjectsToGeoJson(wozObject.wozobjects)
        : []
    )
  );
}
