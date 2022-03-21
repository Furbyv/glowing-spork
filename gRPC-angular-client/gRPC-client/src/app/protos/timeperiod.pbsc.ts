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
import * as thisProto from './timeperiod.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import { GRPC_TIME_PERIODS_CLIENT_SETTINGS } from './timeperiod.pbconf';
/**
 * Service client implementation for timeperiods.TimePeriods
 */
@Injectable({ providedIn: 'any' })
export class TimePeriodsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /timeperiods.TimePeriods/GetTimePeriods
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.TimePeriodsReply>>
     */
    getTimePeriods: (
      requestData: googleProtobuf001.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.TimePeriodsReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/timeperiods.TimePeriods/GetTimePeriods',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf001.Empty,
        responseClass: thisProto.TimePeriodsReply
      });
    },
    /**
     * Unary RPC for /timeperiods.TimePeriods/AddTimePeriod
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AddTimePeriodReply>>
     */
    addTimePeriod: (
      requestData: thisProto.TimePeriodRecord,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AddTimePeriodReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/timeperiods.TimePeriods/AddTimePeriod',
        requestData,
        requestMetadata,
        requestClass: thisProto.TimePeriodRecord,
        responseClass: thisProto.AddTimePeriodReply
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_TIME_PERIODS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'timeperiods.TimePeriods',
      settings
    );
  }

  /**
   * Unary RPC for /timeperiods.TimePeriods/GetTimePeriods
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.TimePeriodsReply>
   */
  getTimePeriods(
    requestData: googleProtobuf001.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.TimePeriodsReply> {
    return this.$raw
      .getTimePeriods(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /timeperiods.TimePeriods/AddTimePeriod
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AddTimePeriodReply>
   */
  addTimePeriod(
    requestData: thisProto.TimePeriodRecord,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AddTimePeriodReply> {
    return this.$raw
      .addTimePeriod(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
