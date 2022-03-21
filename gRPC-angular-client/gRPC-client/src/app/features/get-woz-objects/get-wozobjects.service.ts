import { Injectable } from '@angular/core';
import { toAsyncState } from '@ngneat/loadoff';
import { ReplaySubject, Subject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { WozObjectRequestByIds } from 'src/app/protos/wozobject.pb';
import { WozObjectsClient } from 'src/app/protos/wozobject.pbsc';

//Not a singleton, provide seperately in each module/component
@Injectable()
export class GetWozObjectsService {
  private getWozObjectsRequest$$: Subject<WozObjectRequestByIds> = new ReplaySubject<WozObjectRequestByIds>(1);

  wozobjects$ = this.getWozObjectsRequest$$.pipe(
    switchMap((req) => this.wozObjectsClient.getWozObjects(req)),
    map((response) => response.wozobjects),
    toAsyncState(),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(private wozObjectsClient: WozObjectsClient) {}

  getWozObjects(wozobjectnummers: number[]) {
    var request = new WozObjectRequestByIds();
    request.wozobjectnummers = wozobjectnummers.map((w) => w.toString());
    this.getWozObjectsRequest$$.next(request);
  }
}
