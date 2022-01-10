import { Injectable } from '@angular/core';
import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import {
  SubobjectsRequestById,
  WozSubObjectReply,
  WozSubObjectsReply
} from 'src/app/proto/subobject.pb';
import { SubObjectsClient } from 'src/app/proto/subobject.pbsc';

@Injectable({ providedIn: 'root' })
export class SubObjectsService {
  private subobjectsRequest$$: Subject<
    SubobjectsRequestById
  > = new ReplaySubject<SubobjectsRequestById>(1);

  subObjects$: Observable<
    AsyncState<WozSubObjectReply[]>
  > = this.subobjectsRequest$$.pipe(
    switchMap(request => this.subObjectClient.getSubObjects(request)),
    map(reply => reply.wozsubobjects ?? []),
    toAsyncState(),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(private subObjectClient: SubObjectsClient) {}

  getSubObjects(wozId: number): void {
    const request = new SubobjectsRequestById();
    request.wozobjectnummer = '' + wozId;
    this.subobjectsRequest$$.next(request);
  }
}
