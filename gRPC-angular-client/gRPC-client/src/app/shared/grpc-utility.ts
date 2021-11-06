import { grpc } from '@improbable-eng/grpc-web';
import { Message } from 'google-protobuf';
import { Observable, Observer } from 'rxjs';
import { UnaryResponse } from '../proto/greet_pb_service';
import { ResponseStream } from '../proto/wozobject_pb_service';

interface ServiceError {
  message: string;
  code: number;
  metadata: grpc.Metadata;
}

export function grpcToObservable<T>(
  grpcFn: (...p: any) => UnaryResponse,
  request: Message
): Observable<T> {
  return new Observable((observer: Observer<T>) => {
    grpcFn(request, (err: ServiceError, next: T) => {
      if (err) observer.error(err);
      observer.next(next);
      observer.complete();
    });
  });
}

export function grpcStreamtoObservable<T>(
  grpcStreamFn: (...p: any) => ResponseStream<T>,
  request: Message
): Observable<T> {
  return new Observable<T>((observer: Observer<T>) => {
    const streamCall = grpcStreamFn(request);
    streamCall.on('data', (next) => observer.next(next));
    streamCall.on('end', () => observer.complete());
    //streamCall.on('error', (err: ServiceError) => observer.error(err));
  });
}
