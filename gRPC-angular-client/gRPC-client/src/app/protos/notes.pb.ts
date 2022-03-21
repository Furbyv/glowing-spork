/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for notes.GetNotesRequest
 */
export class GetNotesRequest implements GrpcMessage {
  static id = 'notes.GetNotesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetNotesRequest();
    GetNotesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetNotesRequest) {
    _instance.wozobjectnummer = _instance.wozobjectnummer || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetNotesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.wozobjectnummer = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    GetNotesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetNotesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(1, _instance.wozobjectnummer);
    }
  }

  private _wozobjectnummer?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetNotesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetNotesRequest.AsObject>) {
    _value = _value || {};
    this.wozobjectnummer = _value.wozobjectnummer;
    GetNotesRequest.refineValues(this);
  }
  get wozobjectnummer(): string | undefined {
    return this._wozobjectnummer;
  }
  set wozobjectnummer(value: string | undefined) {
    this._wozobjectnummer = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetNotesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetNotesRequest.AsObject {
    return {
      wozobjectnummer: this.wozobjectnummer
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetNotesRequest.AsProtobufJSON {
    return {
      wozobjectnummer: this.wozobjectnummer
    };
  }
}
export module GetNotesRequest {
  /**
   * Standard JavaScript object representation for GetNotesRequest
   */
  export interface AsObject {
    wozobjectnummer?: string;
  }

  /**
   * Protobuf JSON representation for GetNotesRequest
   */
  export interface AsProtobufJSON {
    wozobjectnummer?: string;
  }
}

/**
 * Message implementation for notes.NoteReply
 */
export class NoteReply implements GrpcMessage {
  static id = 'notes.NoteReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new NoteReply();
    NoteReply.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: NoteReply) {
    _instance.notes = _instance.notes || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: NoteReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new NoteRecord();
          _reader.readMessage(
            messageInitializer1,
            NoteRecord.deserializeBinaryFromReader
          );
          (_instance.notes = _instance.notes || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    NoteReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: NoteReply, _writer: BinaryWriter) {
    if (_instance.notes && _instance.notes.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.notes as any,
        NoteRecord.serializeBinaryToWriter
      );
    }
  }

  private _notes?: NoteRecord[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of NoteReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<NoteReply.AsObject>) {
    _value = _value || {};
    this.notes = (_value.notes || []).map(m => new NoteRecord(m));
    NoteReply.refineValues(this);
  }
  get notes(): NoteRecord[] | undefined {
    return this._notes;
  }
  set notes(value: NoteRecord[] | undefined) {
    this._notes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    NoteReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): NoteReply.AsObject {
    return {
      notes: (this.notes || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): NoteReply.AsProtobufJSON {
    return {
      notes: (this.notes || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module NoteReply {
  /**
   * Standard JavaScript object representation for NoteReply
   */
  export interface AsObject {
    notes?: NoteRecord.AsObject[];
  }

  /**
   * Protobuf JSON representation for NoteReply
   */
  export interface AsProtobufJSON {
    notes?: NoteRecord.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for notes.EditNoteRequest
 */
export class EditNoteRequest implements GrpcMessage {
  static id = 'notes.EditNoteRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EditNoteRequest();
    EditNoteRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EditNoteRequest) {
    _instance.editNote = _instance.editNote || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EditNoteRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.editNote = new NoteRecord();
          _reader.readMessage(
            _instance.editNote,
            NoteRecord.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    EditNoteRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EditNoteRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.editNote) {
      _writer.writeMessage(
        1,
        _instance.editNote as any,
        NoteRecord.serializeBinaryToWriter
      );
    }
  }

  private _editNote?: NoteRecord;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EditNoteRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<EditNoteRequest.AsObject>) {
    _value = _value || {};
    this.editNote = _value.editNote
      ? new NoteRecord(_value.editNote)
      : undefined;
    EditNoteRequest.refineValues(this);
  }
  get editNote(): NoteRecord | undefined {
    return this._editNote;
  }
  set editNote(value: NoteRecord | undefined) {
    this._editNote = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EditNoteRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EditNoteRequest.AsObject {
    return {
      editNote: this.editNote ? this.editNote.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): EditNoteRequest.AsProtobufJSON {
    return {
      editNote: this.editNote ? this.editNote.toProtobufJSON(options) : null
    };
  }
}
export module EditNoteRequest {
  /**
   * Standard JavaScript object representation for EditNoteRequest
   */
  export interface AsObject {
    editNote?: NoteRecord.AsObject;
  }

  /**
   * Protobuf JSON representation for EditNoteRequest
   */
  export interface AsProtobufJSON {
    editNote?: NoteRecord.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for notes.NoteRecord
 */
export class NoteRecord implements GrpcMessage {
  static id = 'notes.NoteRecord';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new NoteRecord();
    NoteRecord.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: NoteRecord) {
    _instance.id = _instance.id || '0';
    _instance.wozobjectnummer = _instance.wozobjectnummer || '0';
    _instance.user = _instance.user || '';
    _instance.userid = _instance.userid || '0';
    _instance.noteDate = _instance.noteDate || undefined;
    _instance.noteText = _instance.noteText || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: NoteRecord,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt64String();
          break;
        case 2:
          _instance.wozobjectnummer = _reader.readInt64String();
          break;
        case 3:
          _instance.user = _reader.readString();
          break;
        case 4:
          _instance.userid = _reader.readInt64String();
          break;
        case 5:
          _instance.noteDate = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.noteDate,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.noteText = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    NoteRecord.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: NoteRecord, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt64String(1, _instance.id);
    }
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(2, _instance.wozobjectnummer);
    }
    if (_instance.user) {
      _writer.writeString(3, _instance.user);
    }
    if (_instance.userid) {
      _writer.writeInt64String(4, _instance.userid);
    }
    if (_instance.noteDate) {
      _writer.writeMessage(
        5,
        _instance.noteDate as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.noteText) {
      _writer.writeString(6, _instance.noteText);
    }
  }

  private _id?: string;
  private _wozobjectnummer?: string;
  private _user?: string;
  private _userid?: string;
  private _noteDate?: googleProtobuf000.Timestamp;
  private _noteText?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of NoteRecord to deeply clone from
   */
  constructor(_value?: RecursivePartial<NoteRecord.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.wozobjectnummer = _value.wozobjectnummer;
    this.user = _value.user;
    this.userid = _value.userid;
    this.noteDate = _value.noteDate
      ? new googleProtobuf000.Timestamp(_value.noteDate)
      : undefined;
    this.noteText = _value.noteText;
    NoteRecord.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get wozobjectnummer(): string | undefined {
    return this._wozobjectnummer;
  }
  set wozobjectnummer(value: string | undefined) {
    this._wozobjectnummer = value;
  }
  get user(): string | undefined {
    return this._user;
  }
  set user(value: string | undefined) {
    this._user = value;
  }
  get userid(): string | undefined {
    return this._userid;
  }
  set userid(value: string | undefined) {
    this._userid = value;
  }
  get noteDate(): googleProtobuf000.Timestamp | undefined {
    return this._noteDate;
  }
  set noteDate(value: googleProtobuf000.Timestamp | undefined) {
    this._noteDate = value;
  }
  get noteText(): string | undefined {
    return this._noteText;
  }
  set noteText(value: string | undefined) {
    this._noteText = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    NoteRecord.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): NoteRecord.AsObject {
    return {
      id: this.id,
      wozobjectnummer: this.wozobjectnummer,
      user: this.user,
      userid: this.userid,
      noteDate: this.noteDate ? this.noteDate.toObject() : undefined,
      noteText: this.noteText
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): NoteRecord.AsProtobufJSON {
    return {
      id: this.id,
      wozobjectnummer: this.wozobjectnummer,
      user: this.user,
      userid: this.userid,
      noteDate: this.noteDate ? this.noteDate.toProtobufJSON(options) : null,
      noteText: this.noteText
    };
  }
}
export module NoteRecord {
  /**
   * Standard JavaScript object representation for NoteRecord
   */
  export interface AsObject {
    id?: string;
    wozobjectnummer?: string;
    user?: string;
    userid?: string;
    noteDate?: googleProtobuf000.Timestamp.AsObject;
    noteText?: string;
  }

  /**
   * Protobuf JSON representation for NoteRecord
   */
  export interface AsProtobufJSON {
    id?: string;
    wozobjectnummer?: string;
    user?: string;
    userid?: string;
    noteDate?: googleProtobuf000.Timestamp.AsProtobufJSON | null;
    noteText?: string;
  }
}

/**
 * Message implementation for notes.AddNotesRequest
 */
export class AddNotesRequest implements GrpcMessage {
  static id = 'notes.AddNotesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddNotesRequest();
    AddNotesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddNotesRequest) {
    _instance.userid = _instance.userid || '0';
    _instance.note = _instance.note || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddNotesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userid = _reader.readInt64String();
          break;
        case 2:
          _instance.note = new NoteRecord();
          _reader.readMessage(
            _instance.note,
            NoteRecord.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AddNotesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddNotesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userid) {
      _writer.writeInt64String(1, _instance.userid);
    }
    if (_instance.note) {
      _writer.writeMessage(
        2,
        _instance.note as any,
        NoteRecord.serializeBinaryToWriter
      );
    }
  }

  private _userid?: string;
  private _note?: NoteRecord;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddNotesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddNotesRequest.AsObject>) {
    _value = _value || {};
    this.userid = _value.userid;
    this.note = _value.note ? new NoteRecord(_value.note) : undefined;
    AddNotesRequest.refineValues(this);
  }
  get userid(): string | undefined {
    return this._userid;
  }
  set userid(value: string | undefined) {
    this._userid = value;
  }
  get note(): NoteRecord | undefined {
    return this._note;
  }
  set note(value: NoteRecord | undefined) {
    this._note = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddNotesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddNotesRequest.AsObject {
    return {
      userid: this.userid,
      note: this.note ? this.note.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AddNotesRequest.AsProtobufJSON {
    return {
      userid: this.userid,
      note: this.note ? this.note.toProtobufJSON(options) : null
    };
  }
}
export module AddNotesRequest {
  /**
   * Standard JavaScript object representation for AddNotesRequest
   */
  export interface AsObject {
    userid?: string;
    note?: NoteRecord.AsObject;
  }

  /**
   * Protobuf JSON representation for AddNotesRequest
   */
  export interface AsProtobufJSON {
    userid?: string;
    note?: NoteRecord.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for notes.AddOrEditNotesReply
 */
export class AddOrEditNotesReply implements GrpcMessage {
  static id = 'notes.AddOrEditNotesReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddOrEditNotesReply();
    AddOrEditNotesReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddOrEditNotesReply) {
    _instance.succes = _instance.succes || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddOrEditNotesReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.succes = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    AddOrEditNotesReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddOrEditNotesReply,
    _writer: BinaryWriter
  ) {
    if (_instance.succes) {
      _writer.writeBool(1, _instance.succes);
    }
  }

  private _succes?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddOrEditNotesReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddOrEditNotesReply.AsObject>) {
    _value = _value || {};
    this.succes = _value.succes;
    AddOrEditNotesReply.refineValues(this);
  }
  get succes(): boolean | undefined {
    return this._succes;
  }
  set succes(value: boolean | undefined) {
    this._succes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddOrEditNotesReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddOrEditNotesReply.AsObject {
    return {
      succes: this.succes
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AddOrEditNotesReply.AsProtobufJSON {
    return {
      succes: this.succes
    };
  }
}
export module AddOrEditNotesReply {
  /**
   * Standard JavaScript object representation for AddOrEditNotesReply
   */
  export interface AsObject {
    succes?: boolean;
  }

  /**
   * Protobuf JSON representation for AddOrEditNotesReply
   */
  export interface AsProtobufJSON {
    succes?: boolean;
  }
}
