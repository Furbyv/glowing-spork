import { grpc } from '@improbable-eng/grpc-web';

interface ServiceError {
  message: string;
  code: number;
  metadata: grpc.Metadata;
}

// export function grpcToObservable<T>(
//   grpcFn: (...p: any) => UnaryResponse,
//   request: Message
// ): Observable<T> {
//   return new Observable((observer: Observer<T>) => {
//     grpcFn(request, (err: ServiceError, next: T) => {
//       if (err) observer.error(err);
//       observer.next(next);
//       observer.complete();
//     });
//   });
// }

// export function grpcToAsyncObservable<T>(
//   grpcFn: (...p: any) => UnaryResponse,
//   request: Message
// ): Observable<AsyncState<T>> {
//   return new Observable((observer: Observer<AsyncState<T>>) => {
//     observer.next(
//       createAsyncState({
//         loading: true,
//         complete: false,
//       })
//     );
//     grpcFn(request, (err: ServiceError, next: T) => {
//       if (err) observer.error(err);
//       observer.next(
//         createAsyncState({ loading: false, complete: true, res: next })
//       );
//       observer.complete();
//     });
//   });
// }

// export function grpcStreamtoObservable<T>(
//   grpcStreamFn: (...p: any) => ResponseStream<T>,
//   request: Message
// ): Observable<T> {
//   return new Observable<T>((observer: Observer<T>) => {
//     const streamCall = grpcStreamFn(request);
//     streamCall.on('data', (next) => observer.next(next));
//     streamCall.on('end', () => observer.complete());
//     //streamCall.on('error', (err: ServiceError) => observer.error(err));
//   });
// }

// export function grpcStreamtoAsyncStateObservable<T>(
//   grpcStreamFn: (...p: any) => ResponseStream<T>,
//   request: Message
// ): Observable<AsyncState<T>> {
//   return new Observable<AsyncState<T>>((observer: Observer<AsyncState<T>>) => {
//     observer.next(
//       createAsyncState({
//         loading: true,
//         complete: false,
//       })
//     );
//     const streamCall = grpcStreamFn(request);
//     streamCall.on('data', (next:any) =>
//       observer.next(
//         createAsyncState({ loading: false, complete: true, res: next })
//       )
//     );
//     streamCall.on('end', () => observer.complete());
//     //streamCall.on('error', (err: ServiceError) => observer.error(err));
//   });
// }

// // state = createAsyncState({ loading: false, complete: true, res: data })

// export function grpcArrayStreamtoObservable<T>(
//   grpcStreamFn: (...p: any) => ResponseStream<T>,
//   request: Message
// ): Observable<T[]> {
//   return new Observable<T[]>((observer: Observer<T[]>) => {
//     const reply: T[] = [];
//     const streamCall = grpcStreamFn(request);
//     streamCall.on('data', (response:any) => reply.push(response));
//     streamCall.on('end', () => {
//       observer.next(reply);
//       return observer.complete();
//     });
//   });
// }

// export function grpcArrayStreamtoAsyncObservable<T>(
//   grpcStreamFn: (...p: any) => ResponseStream<T>,
//   request: Message
// ): Observable<AsyncState<T[]>> {
//   return new Observable<AsyncState<T[]>>(
//     (observer: Observer<AsyncState<T[]>>) => {
//       const reply: T[] = [];
//       const streamCall = grpcStreamFn(request);
//       const state = createAsyncState({
//         loading: true,
//         complete: false,
//         res: reply,
//       });
//       observer.next(state);
//       streamCall.on('data', (response:any) => reply.push(response));
//       streamCall.on('end', () => {
//         state.res = reply;
//         state.loading = false;
//         state.success = true;
//         state.complete = true;
//         observer.next(state);
//         return observer.complete();
//       });
//     }
//   );
//}
