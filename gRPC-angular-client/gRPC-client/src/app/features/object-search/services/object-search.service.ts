import { Injectable } from '@angular/core';
import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import { Subject, ReplaySubject, Observable, combineLatest } from 'rxjs';
import { switchMap, map, shareReplay } from 'rxjs/operators';
import {
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
}
