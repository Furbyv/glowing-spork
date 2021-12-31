import { Injectable } from '@angular/core';
import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { concatMap, shareReplay, switchMap } from 'rxjs/operators';
import {
  FullWozObjectReply,
  FullWozObjectSaveReply,
  WozObjectRequestById
} from 'src/app/proto/wozobject.pb';
import { WozObjectsClient } from 'src/app/proto/wozobject.pbsc';

@Injectable({ providedIn: 'root' })
export class GetFullWozObjectService {
  private wozObjectRequest$$: Subject<WozObjectRequestById> = new ReplaySubject<
    WozObjectRequestById
  >(1);
  private saveWozObjectRequest$$: Subject<FullWozObjectReply> = new Subject<
    FullWozObjectReply
  >();

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
    toAsyncState()
    //shareReplay({ bufferSize: 1, refCount: true })
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
