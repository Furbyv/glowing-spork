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
import * as thisProto from './notes.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import { GRPC_NOTES_CLIENT_SETTINGS } from './notes.pbconf';
/**
 * Service client implementation for notes.Notes
 */
@Injectable({ providedIn: 'any' })
export class NotesClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /notes.Notes/GetNotes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.NoteReply>>
     */
    getNotes: (
      requestData: thisProto.GetNotesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.NoteReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/notes.Notes/GetNotes',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetNotesRequest,
        responseClass: thisProto.NoteReply
      });
    },
    /**
     * Unary RPC for /notes.Notes/AddNotes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AddOrEditNotesReply>>
     */
    addNotes: (
      requestData: thisProto.AddNotesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AddOrEditNotesReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/notes.Notes/AddNotes',
        requestData,
        requestMetadata,
        requestClass: thisProto.AddNotesRequest,
        responseClass: thisProto.AddOrEditNotesReply
      });
    },
    /**
     * Unary RPC for /notes.Notes/EditNote
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AddOrEditNotesReply>>
     */
    editNote: (
      requestData: thisProto.EditNoteRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AddOrEditNotesReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/notes.Notes/EditNote',
        requestData,
        requestMetadata,
        requestClass: thisProto.EditNoteRequest,
        responseClass: thisProto.AddOrEditNotesReply
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_NOTES_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('notes.Notes', settings);
  }

  /**
   * Unary RPC for /notes.Notes/GetNotes
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.NoteReply>
   */
  getNotes(
    requestData: thisProto.GetNotesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.NoteReply> {
    return this.$raw
      .getNotes(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /notes.Notes/AddNotes
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AddOrEditNotesReply>
   */
  addNotes(
    requestData: thisProto.AddNotesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AddOrEditNotesReply> {
    return this.$raw
      .addNotes(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /notes.Notes/EditNote
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AddOrEditNotesReply>
   */
  editNote(
    requestData: thisProto.EditNoteRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AddOrEditNotesReply> {
    return this.$raw
      .editNote(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
