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
import * as thisProto from './taxoverview.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as columndefinitions001 from './columndefinition.pb';
import { GRPC_TAXOVERVIEW_CLIENT_SETTINGS } from './taxoverview.pbconf';
/**
 * Service client implementation for taxoverview.Taxoverview
 */
@Injectable({ providedIn: 'any' })
export class TaxoverviewClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /taxoverview.Taxoverview/GetOverviewObjects
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.WozObjectsTaxOverviewReply>>
     */
    getOverviewObjects: (
      requestData: thisProto.WozObjectFilterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.WozObjectsTaxOverviewReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/taxoverview.Taxoverview/GetOverviewObjects',
        requestData,
        requestMetadata,
        requestClass: thisProto.WozObjectFilterRequest,
        responseClass: thisProto.WozObjectsTaxOverviewReply
      });
    },
    /**
     * Unary RPC for /taxoverview.Taxoverview/GetOverviewSubobjects
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SubObjectsTaxOverviewReply>>
     */
    getOverviewSubobjects: (
      requestData: thisProto.SubObjectFilterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SubObjectsTaxOverviewReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/taxoverview.Taxoverview/GetOverviewSubobjects',
        requestData,
        requestMetadata,
        requestClass: thisProto.SubObjectFilterRequest,
        responseClass: thisProto.SubObjectsTaxOverviewReply
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_TAXOVERVIEW_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'taxoverview.Taxoverview',
      settings
    );
  }

  /**
   * Unary RPC for /taxoverview.Taxoverview/GetOverviewObjects
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.WozObjectsTaxOverviewReply>
   */
  getOverviewObjects(
    requestData: thisProto.WozObjectFilterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.WozObjectsTaxOverviewReply> {
    return this.$raw
      .getOverviewObjects(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /taxoverview.Taxoverview/GetOverviewSubobjects
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SubObjectsTaxOverviewReply>
   */
  getOverviewSubobjects(
    requestData: thisProto.SubObjectFilterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SubObjectsTaxOverviewReply> {
    return this.$raw
      .getOverviewSubobjects(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
