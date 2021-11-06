// package: wozobject
// file: wozobject.proto

import * as wozobject_pb from "./wozobject_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WozObjectsGetWozObject = {
  readonly methodName: string;
  readonly service: typeof WozObjects;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wozobject_pb.WozObjectRequestById;
  readonly responseType: typeof wozobject_pb.WozObjectsReply;
};

type WozObjectsGetFullWozObject = {
  readonly methodName: string;
  readonly service: typeof WozObjects;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof wozobject_pb.WozObjectRequestById;
  readonly responseType: typeof wozobject_pb.FullWozObjectReply;
};

export class WozObjects {
  static readonly serviceName: string;
  static readonly GetWozObject: WozObjectsGetWozObject;
  static readonly GetFullWozObject: WozObjectsGetFullWozObject;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class WozObjectsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getWozObject(
    requestMessage: wozobject_pb.WozObjectRequestById,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wozobject_pb.WozObjectsReply|null) => void
  ): UnaryResponse;
  getWozObject(
    requestMessage: wozobject_pb.WozObjectRequestById,
    callback: (error: ServiceError|null, responseMessage: wozobject_pb.WozObjectsReply|null) => void
  ): UnaryResponse;
  getFullWozObject(requestMessage: wozobject_pb.WozObjectRequestById, metadata?: grpc.Metadata): ResponseStream<wozobject_pb.FullWozObjectReply>;
}

