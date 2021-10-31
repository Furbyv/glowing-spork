import { Injectable } from '@angular/core';
import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import { Subject, ReplaySubject, Observable, combineLatest } from 'rxjs';
import { switchMap, map, shareReplay } from 'rxjs/operators';
import {
  WozObjectRequestById,
  WozObjectReply,
  WozObjectsReply,
} from 'src/app/proto/wozobject_pb';
import { WozObjectsClient } from 'src/app/proto/wozobject_pb_service';
import { grpcToObservable } from 'src/app/shared/grpc-utility';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ObjectSearchService {
  private wozObjectRequest$$: Subject<WozObjectRequestById> =
    new ReplaySubject<WozObjectRequestById>(1);

  private client = new WozObjectsClient(environment.baseUrl);

  findWozObjects(id: number): void {
    const request = new WozObjectRequestById();
    request.setWozobjectnummer(id);
    this.wozObjectRequest$$.next(request);
  }

  wozObjects$: Observable<AsyncState<WozObjectReply.AsObject[]>> =
    combineLatest([this.wozObjectRequest$$]).pipe(
      switchMap(([request]) =>
        grpcToObservable<WozObjectsReply>(
          this.client.getWozObject.bind(this.client),
          request
        )
      ),
      map((w) => w.toObject().wozobjectsList),
      shareReplay({ bufferSize: 1, refCount: true }),
      toAsyncState()
    );
}
