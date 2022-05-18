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
import * as thisProto from './taxation.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as transactions003 from './transactions.pb';
import * as wozobject004 from './wozobject.pb';
import * as timeperiods005 from './timeperiod.pb';
import * as subobject006 from './subobject.pb';
import * as comparables007 from './comparables.pb';
import { GRPC_TAXATION_OBJECTS_CLIENT_SETTINGS } from './taxation.pbconf';
/**
 * Service client implementation for taxations.TaxationObjects
 */
@Injectable({ providedIn: 'any' })
export class TaxationObjectsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /taxations.TaxationObjects/GetTaxationsObject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.TaxationsObject>>
     */
    getTaxationsObject: (
      requestData: thisProto.TaxationRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.TaxationsObject>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/taxations.TaxationObjects/GetTaxationsObject',
        requestData,
        requestMetadata,
        requestClass: thisProto.TaxationRequest,
        responseClass: thisProto.TaxationsObject
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_TAXATION_OBJECTS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'taxations.TaxationObjects',
      settings
    );
  }

  /**
   * Unary RPC for /taxations.TaxationObjects/GetTaxationsObject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.TaxationsObject>
   */
  getTaxationsObject(
    requestData: thisProto.TaxationRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.TaxationsObject> {
    return this.$raw
      .getTaxationsObject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
