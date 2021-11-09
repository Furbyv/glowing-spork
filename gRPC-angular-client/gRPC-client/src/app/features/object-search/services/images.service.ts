import { Injectable } from '@angular/core';
import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import {
  WozObjectImageReply,
  WozObjectImageRequest,
} from 'src/app/proto/wozobject_pb';
import { WozObjectsClient } from 'src/app/proto/wozobject_pb_service';
import { grpcArrayStreamtoObservable } from 'src/app/shared/grpc-utility';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class ImagesService {
  private imageRequest$$: Subject<WozObjectImageRequest> =
    new ReplaySubject<WozObjectImageRequest>(1);

  private client = new WozObjectsClient(environment.baseUrl);

  getImage(id: number, onlyMain: boolean): void {
    const request = new WozObjectImageRequest();
    request.setWozobjectnummer(id);
    request.setOnlyMain(onlyMain);
    this.imageRequest$$.next(request);
  }

  images$: Observable<AsyncState<SafeUrl[]>> = this.imageRequest$$.pipe(
    switchMap((request) =>
      grpcArrayStreamtoObservable<WozObjectImageReply>(
        this.client.getWozObjectImages.bind(this.client),
        request
      )
    ),
    map((w) =>
      w.map((reply) => this.convertByteArrayToImage(reply.toObject().imageData))
    ),
    toAsyncState(),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  convertByteArrayToImage(imageData: Uint8Array | string): SafeUrl {
    const image = 'data:image/png;base64,' + imageData;
    return this.sanitizer.bypassSecurityTrustUrl(image);
  }

  defaultImage = this.sanitizer.bypassSecurityTrustUrl(
    'src/assets/default_image.jpg'
  );

  constructor(private sanitizer: DomSanitizer) {}
}
