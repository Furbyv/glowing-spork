import { Injectable } from '@angular/core';
import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { shareReplay, switchMap, tap } from 'rxjs/operators';
import {
  FullWozObjectReply,
  FullWozObjectSaveReply,
  WozObjectRequestById
} from 'src/app/proto/wozobject.pb';
import { WozObjectsClient } from 'src/app/proto/wozobject.pbsc';

import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class GetFullWozObjectService {
  private wozObjectRequest$$: Subject<WozObjectRequestById> = new ReplaySubject<
    WozObjectRequestById
  >(1);
  private saveWozObjectRequest$$: Subject<
    FullWozObjectReply
  > = new ReplaySubject<FullWozObjectReply>(1);

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
    shareReplay({ bufferSize: 1, refCount: true })
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
}
