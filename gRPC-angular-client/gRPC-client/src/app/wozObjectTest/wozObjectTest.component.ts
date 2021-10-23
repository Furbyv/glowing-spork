import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { WozObjectReply, WozObjectRequestById } from '../proto/wozobject_pb';
import { WozObjectsClient } from '../proto/wozobject_pb_service';
import { grpcToObservable } from '../shared/grpc-utility';

@Component({
  selector: 'app-wozObjectTest',
  templateUrl: './wozObjectTest.component.html',
  styleUrls: ['./wozObjectTest.component.scss'],
})
export class WozObjectTest implements OnInit {
  private wozObjectRequest$$: Subject<WozObjectRequestById> =
    new ReplaySubject<WozObjectRequestById>(1);
  private client = new WozObjectsClient(environment.baseUrl);
  ngOnInit(): void {
    this.setNewWozObject(1);
  }

  setNewWozObject(id: number): void {
    const request = new WozObjectRequestById();
    request.setWozobjectnummer(id);
    this.wozObjectRequest$$.next(request);
  }

  wozObject$: Observable<WozObjectReply> = combineLatest([
    this.wozObjectRequest$$,
  ]).pipe(
    switchMap(([request]) =>
      grpcToObservable<WozObjectReply>(
        this.client.getWozObject.bind(this.client),
        request
      )
    ),
    shareReplay({ bufferSize: 1, refCount: true })
  );
}
