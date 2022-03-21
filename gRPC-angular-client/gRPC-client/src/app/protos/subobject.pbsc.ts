/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './subobject.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import { GRPC_SUB_OBJECTS_CLIENT_SETTINGS } from './subobject.pbconf';
/**
 * Service client implementation for subobject.SubObjects
 */
@Injectable({ providedIn: 'any' })
export class SubObjectsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /subobject.SubObjects/GetSubObjects
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.WozSubObjectsReply>>
     */
    getSubObjects: (
      requestData: thisProto.SubobjectsRequestById,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.WozSubObjectsReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/subobject.SubObjects/GetSubObjects',
        requestData,
        requestMetadata,
        requestClass: thisProto.SubobjectsRequestById,
        responseClass: thisProto.WozSubObjectsReply
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_SUB_OBJECTS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('subobject.SubObjects', settings);
  }

  /**
   * Unary RPC for /subobject.SubObjects/GetSubObjects
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.WozSubObjectsReply>
   */
  getSubObjects(
    requestData: thisProto.SubobjectsRequestById,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.WozSubObjectsReply> {
    return this.$raw
      .getSubObjects(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
