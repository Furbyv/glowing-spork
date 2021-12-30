import { Injectable } from '@angular/core';
import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  Observer,
  ReplaySubject,
  Subject,
  Subscriber,
  Subscription
} from 'rxjs';
import {
  combineAll,
  concatMap,
  map,
  share,
  shareReplay,
  switchMap,
  tap,
  toArray
} from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { WozObjectsClient } from 'src/app/proto/wozobject.pbsc';
import {
  UploadImageRequest,
  WozObjectImageReply,
  WozObjectImageRequest
} from 'src/app/proto/wozobject.pb';

@Injectable({ providedIn: 'root' })
export class ImagesService {
  private refresh$$: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private wozObjectsClient: WozObjectsClient,
    private sanitizer: DomSanitizer
  ) {}

  private imageRequest$$: Subject<WozObjectImageRequest> = new ReplaySubject<
    WozObjectImageRequest
  >(1);

  private imageUploadRequest$$: Subject<{
    data: Uint8Array;
    id: number;
  }> = new ReplaySubject<{ data: Uint8Array; id: number }>(1);

  uploadRequest$ = this.imageUploadRequest$$.pipe(
    map(request => {
      const req = new UploadImageRequest();
      req.imageData = request.data;
      req.isMain = false;
      req.wozobjectnummer = '' + request.id;
      return req;
    }),
    switchMap(req => this.wozObjectsClient.uploadWozObjectImage(req)),
    toAsyncState(),
    shareReplay({ bufferSize: 1, refCount: true }),
    tap(_ => this.refresh$$.next(true))
  );

  getImages(id: number, onlyMain: boolean): WozObjectImageRequest {
    const request = new WozObjectImageRequest();
    request.wozobjectnummer = '' + id;
    request.onlyMain = onlyMain;
    this.imageRequest$$.next(request);
    return request;
  }

  //TODO make this a proper array based on all results
  images$: Observable<AsyncState<WozObjectImageReply[]>> = combineLatest([
    this.imageRequest$$,
    this.refresh$$
  ]).pipe(
    concatMap(([request]) =>
      this.wozObjectsClient.getWozObjectImages(request).pipe(toArray())
    ),
    toAsyncState(),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  convertByteArrayToImage(imageData: Uint8Array): SafeUrl {
    const blob = new Blob([imageData], { type: 'image/png' });
    let objectURL = URL.createObjectURL(blob);
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  defaultImage = this.sanitizer.bypassSecurityTrustUrl(
    'assets/default_image.jpg'
  );

  uploadImages(data: Uint8Array, id: number) {
    this.imageUploadRequest$$.next({ data, id });
  }

  refresh() {
    this.refresh$$.next(true);
  }
}
