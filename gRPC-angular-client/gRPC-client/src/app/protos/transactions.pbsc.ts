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
import * as thisProto from './transactions.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as columndefinitions002 from './columndefinition.pb';
import * as overviewrequests003 from './overviewrequests.pb';
import { GRPC_TRANSACTIONS_SERVICE_CLIENT_SETTINGS } from './transactions.pbconf';
/**
 * Service client implementation for transactions.TransactionsService
 */
@Injectable({ providedIn: 'any' })
export class TransactionsServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /transactions.TransactionsService/GetTransactionsOverview
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.TransactionsOverview>>
     */
    getTransactionsOverview: (
      requestData: overviewrequests003.FilterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.TransactionsOverview>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/transactions.TransactionsService/GetTransactionsOverview',
        requestData,
        requestMetadata,
        requestClass: overviewrequests003.FilterRequest,
        responseClass: thisProto.TransactionsOverview
      });
    },
    /**
     * Unary RPC for /transactions.TransactionsService/GetTransactionsWozobject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Transactions>>
     */
    getTransactionsWozobject: (
      requestData: thisProto.TransactionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Transactions>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/transactions.TransactionsService/GetTransactionsWozobject',
        requestData,
        requestMetadata,
        requestClass: thisProto.TransactionRequest,
        responseClass: thisProto.Transactions
      });
    }
  };

  constructor(
    @Optional()
    @Inject(GRPC_TRANSACTIONS_SERVICE_CLIENT_SETTINGS)
    settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'transactions.TransactionsService',
      settings
    );
  }

  /**
   * Unary RPC for /transactions.TransactionsService/GetTransactionsOverview
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.TransactionsOverview>
   */
  getTransactionsOverview(
    requestData: overviewrequests003.FilterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.TransactionsOverview> {
    return this.$raw
      .getTransactionsOverview(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /transactions.TransactionsService/GetTransactionsWozobject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Transactions>
   */
  getTransactionsWozobject(
    requestData: thisProto.TransactionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Transactions> {
    return this.$raw
      .getTransactionsWozobject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
