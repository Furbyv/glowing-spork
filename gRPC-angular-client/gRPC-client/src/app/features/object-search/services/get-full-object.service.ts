import { Injectable } from '@angular/core';
import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import {
  FullWozObjectReply,
  WozObjectRequestById,
} from 'src/app/proto/wozobject_pb';
import { WozObjectsClient } from 'src/app/proto/wozobject_pb_service';
import { grpcStreamtoObservable } from 'src/app/shared/grpc-utility';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class GetFullWozObjectService {
  private wozObjectRequest$$: Subject<WozObjectRequestById> =
    new ReplaySubject<WozObjectRequestById>(1);
  private client = new WozObjectsClient(environment.baseUrl);

  getFullWozObject(id: number): void {
    const request = new WozObjectRequestById();
    request.setWozobjectnummer(id);
    this.wozObjectRequest$$.next(request);
  }

  fullWozObject$: Observable<AsyncState<FullWozObjectReply.AsObject>> =
    this.wozObjectRequest$$.pipe(
      switchMap((request) =>
        grpcStreamtoObservable<FullWozObjectReply>(
          this.client.getFullWozObject.bind(this.client),
          request
        )
      ),
      map((w) => w.toObject()),
      toAsyncState(),
      shareReplay({ bufferSize: 1, refCount: true })
    );
}
