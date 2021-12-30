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
import * as thisProto from './wozobject.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import { GRPC_WOZ_OBJECTS_CLIENT_SETTINGS } from './wozobject.pbconf';
/**
 * Service client implementation for wozobject.WozObjects
 */
@Injectable({ providedIn: 'any' })
export class WozObjectsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /wozobject.WozObjects/GetWozObject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.WozObjectsReply>>
     */
    getWozObject: (
      requestData: thisProto.WozObjectRequestById,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.WozObjectsReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/wozobject.WozObjects/GetWozObject',
        requestData,
        requestMetadata,
        requestClass: thisProto.WozObjectRequestById,
        responseClass: thisProto.WozObjectsReply
      });
    },
    /**
     * Server streaming RPC for /wozobject.WozObjects/GetFullWozObject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.FullWozObjectReply>>
     */
    getFullWozObject: (
      requestData: thisProto.WozObjectRequestById,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.FullWozObjectReply>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/wozobject.WozObjects/GetFullWozObject',
        requestData,
        requestMetadata,
        requestClass: thisProto.WozObjectRequestById,
        responseClass: thisProto.FullWozObjectReply
      });
    },
    /**
     * Server streaming RPC for /wozobject.WozObjects/GetWozObjectImages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.WozObjectImageReply>>
     */
    getWozObjectImages: (
      requestData: thisProto.WozObjectImageRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.WozObjectImageReply>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/wozobject.WozObjects/GetWozObjectImages',
        requestData,
        requestMetadata,
        requestClass: thisProto.WozObjectImageRequest,
        responseClass: thisProto.WozObjectImageReply
      });
    },
    /**
     * Unary RPC for /wozobject.WozObjects/UploadWozObjectImage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UploadImageReply>>
     */
    uploadWozObjectImage: (
      requestData: thisProto.UploadImageRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UploadImageReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/wozobject.WozObjects/UploadWozObjectImage',
        requestData,
        requestMetadata,
        requestClass: thisProto.UploadImageRequest,
        responseClass: thisProto.UploadImageReply
      });
    },
    /**
     * Unary RPC for /wozobject.WozObjects/SaveFullWozObject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.FullWozObjectSaveReply>>
     */
    saveFullWozObject: (
      requestData: thisProto.FullWozObjectReply,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.FullWozObjectSaveReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/wozobject.WozObjects/SaveFullWozObject',
        requestData,
        requestMetadata,
        requestClass: thisProto.FullWozObjectReply,
        responseClass: thisProto.FullWozObjectSaveReply
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_WOZ_OBJECTS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('wozobject.WozObjects', settings);
  }

  /**
   * Unary RPC for /wozobject.WozObjects/GetWozObject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.WozObjectsReply>
   */
  getWozObject(
    requestData: thisProto.WozObjectRequestById,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.WozObjectsReply> {
    return this.$raw
      .getWozObject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming RPC for /wozobject.WozObjects/GetFullWozObject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FullWozObjectReply>
   */
  getFullWozObject(
    requestData: thisProto.WozObjectRequestById,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.FullWozObjectReply> {
    return this.$raw
      .getFullWozObject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming RPC for /wozobject.WozObjects/GetWozObjectImages
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.WozObjectImageReply>
   */
  getWozObjectImages(
    requestData: thisProto.WozObjectImageRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.WozObjectImageReply> {
    return this.$raw
      .getWozObjectImages(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /wozobject.WozObjects/UploadWozObjectImage
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UploadImageReply>
   */
  uploadWozObjectImage(
    requestData: thisProto.UploadImageRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UploadImageReply> {
    return this.$raw
      .uploadWozObjectImage(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /wozobject.WozObjects/SaveFullWozObject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FullWozObjectSaveReply>
   */
  saveFullWozObject(
    requestData: thisProto.FullWozObjectReply,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.FullWozObjectSaveReply> {
    return this.$raw
      .saveFullWozObject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
