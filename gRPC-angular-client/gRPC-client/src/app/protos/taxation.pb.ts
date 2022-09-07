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
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as transactions003 from './transactions.pb';
import * as wozobject004 from './wozobject.pb';
import * as timeperiods005 from './timeperiod.pb';
import * as subobject006 from './subobject.pb';
import * as comparables007 from './comparables.pb';
/**
 * Message implementation for taxations.TaxationRequest
 */
export class TaxationRequest implements GrpcMessage {
  static id = 'taxations.TaxationRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TaxationRequest();
    TaxationRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TaxationRequest) {
    _instance.wozobjectnummer = _instance.wozobjectnummer || '0';
    _instance.prijspeilid = _instance.prijspeilid || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TaxationRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.wozobjectnummer = _reader.readInt64String();
          break;
        case 2:
          _instance.prijspeilid = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    TaxationRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TaxationRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(1, _instance.wozobjectnummer);
    }
    if (_instance.prijspeilid) {
      _writer.writeInt64String(2, _instance.prijspeilid);
    }
  }

  private _wozobjectnummer?: string;
  private _prijspeilid?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TaxationRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<TaxationRequest.AsObject>) {
    _value = _value || {};
    this.wozobjectnummer = _value.wozobjectnummer;
    this.prijspeilid = _value.prijspeilid;
    TaxationRequest.refineValues(this);
  }
  get wozobjectnummer(): string | undefined {
    return this._wozobjectnummer;
  }
  set wozobjectnummer(value: string | undefined) {
    this._wozobjectnummer = value;
  }
  get prijspeilid(): string | undefined {
    return this._prijspeilid;
  }
  set prijspeilid(value: string | undefined) {
    this._prijspeilid = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TaxationRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TaxationRequest.AsObject {
    return {
      wozobjectnummer: this.wozobjectnummer,
      prijspeilid: this.prijspeilid
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
  ): TaxationRequest.AsProtobufJSON {
    return {
      wozobjectnummer: this.wozobjectnummer,
      prijspeilid: this.prijspeilid
    };
  }
}
export module TaxationRequest {
  /**
   * Standard JavaScript object representation for TaxationRequest
   */
  export interface AsObject {
    wozobjectnummer?: string;
    prijspeilid?: string;
  }

  /**
   * Protobuf JSON representation for TaxationRequest
   */
  export interface AsProtobufJSON {
    wozobjectnummer?: string;
    prijspeilid?: string;
  }
}

/**
 * Message implementation for taxations.TaxationsObject
 */
export class TaxationsObject implements GrpcMessage {
  static id = 'taxations.TaxationsObject';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TaxationsObject();
    TaxationsObject.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TaxationsObject) {
    _instance.wozobjectnummer = _instance.wozobjectnummer || '0';
    _instance.prijspeilid = _instance.prijspeilid || '0';
    _instance.taxations = _instance.taxations || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TaxationsObject,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.wozobjectnummer = _reader.readInt64String();
          break;
        case 2:
          _instance.prijspeilid = _reader.readInt64String();
          break;
        case 3:
          const messageInitializer3 = new Taxation();
          _reader.readMessage(
            messageInitializer3,
            Taxation.deserializeBinaryFromReader
          );
          (_instance.taxations = _instance.taxations || []).push(
            messageInitializer3
          );
          break;
        default:
          _reader.skipField();
      }
    }

    TaxationsObject.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TaxationsObject,
    _writer: BinaryWriter
  ) {
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(1, _instance.wozobjectnummer);
    }
    if (_instance.prijspeilid) {
      _writer.writeInt64String(2, _instance.prijspeilid);
    }
    if (_instance.taxations && _instance.taxations.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.taxations as any,
        Taxation.serializeBinaryToWriter
      );
    }
  }

  private _wozobjectnummer?: string;
  private _prijspeilid?: string;
  private _taxations?: Taxation[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TaxationsObject to deeply clone from
   */
  constructor(_value?: RecursivePartial<TaxationsObject.AsObject>) {
    _value = _value || {};
    this.wozobjectnummer = _value.wozobjectnummer;
    this.prijspeilid = _value.prijspeilid;
    this.taxations = (_value.taxations || []).map(m => new Taxation(m));
    TaxationsObject.refineValues(this);
  }
  get wozobjectnummer(): string | undefined {
    return this._wozobjectnummer;
  }
  set wozobjectnummer(value: string | undefined) {
    this._wozobjectnummer = value;
  }
  get prijspeilid(): string | undefined {
    return this._prijspeilid;
  }
  set prijspeilid(value: string | undefined) {
    this._prijspeilid = value;
  }
  get taxations(): Taxation[] | undefined {
    return this._taxations;
  }
  set taxations(value: Taxation[] | undefined) {
    this._taxations = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TaxationsObject.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TaxationsObject.AsObject {
    return {
      wozobjectnummer: this.wozobjectnummer,
      prijspeilid: this.prijspeilid,
      taxations: (this.taxations || []).map(m => m.toObject())
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
  ): TaxationsObject.AsProtobufJSON {
    return {
      wozobjectnummer: this.wozobjectnummer,
      prijspeilid: this.prijspeilid,
      taxations: (this.taxations || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module TaxationsObject {
  /**
   * Standard JavaScript object representation for TaxationsObject
   */
  export interface AsObject {
    wozobjectnummer?: string;
    prijspeilid?: string;
    taxations?: Taxation.AsObject[];
  }

  /**
   * Protobuf JSON representation for TaxationsObject
   */
  export interface AsProtobufJSON {
    wozobjectnummer?: string;
    prijspeilid?: string;
    taxations?: Taxation.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for taxations.Taxation
 */
export class Taxation implements GrpcMessage {
  static id = 'taxations.Taxation';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Taxation();
    Taxation.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Taxation) {
    _instance.id = _instance.id || '0';
    _instance.period = _instance.period || undefined;
    _instance.status = _instance.status || '';
    _instance.active = _instance.active || false;
    _instance.freezeWozObject = _instance.freezeWozObject || undefined;
    _instance.freezeDeelobjects = _instance.freezeDeelobjects || [];
    _instance.comparableObjects = _instance.comparableObjects || [];
    _instance.taxCode = _instance.taxCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Taxation,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt64String();
          break;
        case 2:
          _instance.period = new timeperiods005.TimePeriodRecord();
          _reader.readMessage(
            _instance.period,
            timeperiods005.TimePeriodRecord.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.status = _reader.readString();
          break;
        case 4:
          _instance.active = _reader.readBool();
          break;
        case 5:
          _instance.freezeWozObject = new wozobject004.FullWozObjectReply();
          _reader.readMessage(
            _instance.freezeWozObject,
            wozobject004.FullWozObjectReply.deserializeBinaryFromReader
          );
          break;
        case 6:
          const messageInitializer6 = new subobject006.WozSubObjectReply();
          _reader.readMessage(
            messageInitializer6,
            subobject006.WozSubObjectReply.deserializeBinaryFromReader
          );
          (_instance.freezeDeelobjects =
            _instance.freezeDeelobjects || []).push(messageInitializer6);
          break;
        case 7:
          const messageInitializer7 = new comparables007.ComparableObject();
          _reader.readMessage(
            messageInitializer7,
            comparables007.ComparableObject.deserializeBinaryFromReader
          );
          (_instance.comparableObjects =
            _instance.comparableObjects || []).push(messageInitializer7);
          break;
        case 8:
          _instance.taxCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Taxation.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Taxation, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt64String(1, _instance.id);
    }
    if (_instance.period) {
      _writer.writeMessage(
        2,
        _instance.period as any,
        timeperiods005.TimePeriodRecord.serializeBinaryToWriter
      );
    }
    if (_instance.status) {
      _writer.writeString(3, _instance.status);
    }
    if (_instance.active) {
      _writer.writeBool(4, _instance.active);
    }
    if (_instance.freezeWozObject) {
      _writer.writeMessage(
        5,
        _instance.freezeWozObject as any,
        wozobject004.FullWozObjectReply.serializeBinaryToWriter
      );
    }
    if (_instance.freezeDeelobjects && _instance.freezeDeelobjects.length) {
      _writer.writeRepeatedMessage(
        6,
        _instance.freezeDeelobjects as any,
        subobject006.WozSubObjectReply.serializeBinaryToWriter
      );
    }
    if (_instance.comparableObjects && _instance.comparableObjects.length) {
      _writer.writeRepeatedMessage(
        7,
        _instance.comparableObjects as any,
        comparables007.ComparableObject.serializeBinaryToWriter
      );
    }
    if (_instance.taxCode) {
      _writer.writeString(8, _instance.taxCode);
    }
  }

  private _id?: string;
  private _period?: timeperiods005.TimePeriodRecord;
  private _status?: string;
  private _active?: boolean;
  private _freezeWozObject?: wozobject004.FullWozObjectReply;
  private _freezeDeelobjects?: subobject006.WozSubObjectReply[];
  private _comparableObjects?: comparables007.ComparableObject[];
  private _taxCode?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Taxation to deeply clone from
   */
  constructor(_value?: RecursivePartial<Taxation.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.period = _value.period
      ? new timeperiods005.TimePeriodRecord(_value.period)
      : undefined;
    this.status = _value.status;
    this.active = _value.active;
    this.freezeWozObject = _value.freezeWozObject
      ? new wozobject004.FullWozObjectReply(_value.freezeWozObject)
      : undefined;
    this.freezeDeelobjects = (_value.freezeDeelobjects || []).map(
      m => new subobject006.WozSubObjectReply(m)
    );
    this.comparableObjects = (_value.comparableObjects || []).map(
      m => new comparables007.ComparableObject(m)
    );
    this.taxCode = _value.taxCode;
    Taxation.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get period(): timeperiods005.TimePeriodRecord | undefined {
    return this._period;
  }
  set period(value: timeperiods005.TimePeriodRecord | undefined) {
    this._period = value;
  }
  get status(): string | undefined {
    return this._status;
  }
  set status(value: string | undefined) {
    this._status = value;
  }
  get active(): boolean | undefined {
    return this._active;
  }
  set active(value: boolean | undefined) {
    this._active = value;
  }
  get freezeWozObject(): wozobject004.FullWozObjectReply | undefined {
    return this._freezeWozObject;
  }
  set freezeWozObject(value: wozobject004.FullWozObjectReply | undefined) {
    this._freezeWozObject = value;
  }
  get freezeDeelobjects(): subobject006.WozSubObjectReply[] | undefined {
    return this._freezeDeelobjects;
  }
  set freezeDeelobjects(value: subobject006.WozSubObjectReply[] | undefined) {
    this._freezeDeelobjects = value;
  }
  get comparableObjects(): comparables007.ComparableObject[] | undefined {
    return this._comparableObjects;
  }
  set comparableObjects(value: comparables007.ComparableObject[] | undefined) {
    this._comparableObjects = value;
  }
  get taxCode(): string | undefined {
    return this._taxCode;
  }
  set taxCode(value: string | undefined) {
    this._taxCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Taxation.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Taxation.AsObject {
    return {
      id: this.id,
      period: this.period ? this.period.toObject() : undefined,
      status: this.status,
      active: this.active,
      freezeWozObject: this.freezeWozObject
        ? this.freezeWozObject.toObject()
        : undefined,
      freezeDeelobjects: (this.freezeDeelobjects || []).map(m => m.toObject()),
      comparableObjects: (this.comparableObjects || []).map(m => m.toObject()),
      taxCode: this.taxCode
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
  ): Taxation.AsProtobufJSON {
    return {
      id: this.id,
      period: this.period ? this.period.toProtobufJSON(options) : null,
      status: this.status,
      active: this.active,
      freezeWozObject: this.freezeWozObject
        ? this.freezeWozObject.toProtobufJSON(options)
        : null,
      freezeDeelobjects: (this.freezeDeelobjects || []).map(m =>
        m.toProtobufJSON(options)
      ),
      comparableObjects: (this.comparableObjects || []).map(m =>
        m.toProtobufJSON(options)
      ),
      taxCode: this.taxCode
    };
  }
}
export module Taxation {
  /**
   * Standard JavaScript object representation for Taxation
   */
  export interface AsObject {
    id?: string;
    period?: timeperiods005.TimePeriodRecord.AsObject;
    status?: string;
    active?: boolean;
    freezeWozObject?: wozobject004.FullWozObjectReply.AsObject;
    freezeDeelobjects?: subobject006.WozSubObjectReply.AsObject[];
    comparableObjects?: comparables007.ComparableObject.AsObject[];
    taxCode?: string;
  }

  /**
   * Protobuf JSON representation for Taxation
   */
  export interface AsProtobufJSON {
    id?: string;
    period?: timeperiods005.TimePeriodRecord.AsProtobufJSON | null;
    status?: string;
    active?: boolean;
    freezeWozObject?: wozobject004.FullWozObjectReply.AsProtobufJSON | null;
    freezeDeelobjects?: subobject006.WozSubObjectReply.AsProtobufJSON[] | null;
    comparableObjects?: comparables007.ComparableObject.AsProtobufJSON[] | null;
    taxCode?: string;
  }
}
