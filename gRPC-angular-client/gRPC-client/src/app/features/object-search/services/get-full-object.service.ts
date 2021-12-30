import { Injectable } from '@angular/core';
import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { shareReplay, switchMap, tap } from 'rxjs/operators';
import {
  FullWozObjectReply,
  FullWozObjectSaveReply,
  WozObjectRequestById,
} from 'src/app/proto/wozobject_pb';
import { WozObjectsClient } from 'src/app/proto/wozobject_pb_service';
import {
  grpcStreamtoObservable,
  grpcToAsyncObservable,
} from 'src/app/shared/grpc-utility';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class GetFullWozObjectService {
  private wozObjectRequest$$: Subject<WozObjectRequestById> =
    new ReplaySubject<WozObjectRequestById>(1);
  private saveWozObjectRequest$$: Subject<FullWozObjectReply> =
    new ReplaySubject<FullWozObjectReply>(1);

  private client = new WozObjectsClient(environment.baseUrl);

  getFullWozObject(id: number): void {
    const request = new WozObjectRequestById();
    request.setWozobjectnummer(id);
    this.wozObjectRequest$$.next(request);
  }

  fullWozObject$: Observable<AsyncState<FullWozObjectReply>> =
    this.wozObjectRequest$$.pipe(
      tap((a) => console.log('boo')),
      switchMap((request) =>
        grpcStreamtoObservable<FullWozObjectReply>(
          this.client.getFullWozObject.bind(this.client),
          request
        )
      ),
      tap((a) => console.log('boo2')),
      toAsyncState(),
      shareReplay({ bufferSize: 1, refCount: true })
    );

  saveState$: Observable<AsyncState<FullWozObjectSaveReply>> = combineLatest([
    this.saveWozObjectRequest$$,
  ]).pipe(
    switchMap(([request]) =>
      grpcToAsyncObservable<FullWozObjectSaveReply>(
        this.client.saveFullWozObject.bind(this.client),
        request
      )
    )
  );

  saveWozObject(wozObject: FullWozObjectReply) {
    this.saveWozObjectRequest$$.next(wozObject);
  }
}
