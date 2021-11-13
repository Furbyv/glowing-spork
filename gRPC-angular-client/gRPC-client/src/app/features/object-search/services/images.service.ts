import { Injectable } from '@angular/core';
import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  Observer,
  ReplaySubject,
  Subject,
} from 'rxjs';
import {
  combineAll,
  concatMap,
  map,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs/operators';
import {
  UploadImageReply,
  UploadImageRequest,
  WozObjectImageReply,
  WozObjectImageRequest,
} from 'src/app/proto/wozobject_pb';
import { WozObjectsClient } from 'src/app/proto/wozobject_pb_service';
import {
  grpcArrayStreamtoAsyncObservable,
  grpcArrayStreamtoObservable,
  grpcStreamtoAsyncStateObservable,
  grpcToObservable,
} from 'src/app/shared/grpc-utility';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class ImagesService {
  private refresh$$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  private client = new WozObjectsClient(environment.baseUrl);
  private imageRequest$$: Subject<WozObjectImageRequest> =
    new ReplaySubject<WozObjectImageRequest>(1);

  private imageUploadRequest$$: Subject<{ data: Uint8Array; id: number }> =
    new ReplaySubject<{ data: Uint8Array; id: number }>(1);

  uploadRequest$ = this.imageUploadRequest$$.pipe(
    map((request) => {
      const req = new UploadImageRequest();
      req.setImageData(request.data);
      req.setIsMain(false);
      req.setWozobjectnummer(request.id);
      return req;
    }),
    switchMap((req) =>
      grpcToObservable<UploadImageReply>(
        this.client.uploadWozObjectImage.bind(this.client),
        req
      )
    ),
    toAsyncState(),
    shareReplay({ bufferSize: 1, refCount: true }),
    tap((_) => this.refresh$$.next(true))
  );

  getImage(id: number, onlyMain: boolean): void {
    const request = new WozObjectImageRequest();
    request.setWozobjectnummer(id);
    request.setOnlyMain(onlyMain);
    this.imageRequest$$.next(request);
  }

  images$: Observable<AsyncState<WozObjectImageReply[]>> = combineLatest(
    this.imageRequest$$,
    this.refresh$$
  ).pipe(
    concatMap(([request]) =>
      grpcArrayStreamtoAsyncObservable<WozObjectImageReply>(
        this.client.getWozObjectImages.bind(this.client),
        request
      )
    ),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  convertByteArrayToImage(imageData: Uint8Array | string): SafeUrl {
    const image = 'data:image/png;base64,' + imageData;
    return this.sanitizer.bypassSecurityTrustUrl(image);
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

  constructor(private sanitizer: DomSanitizer) {}
}
