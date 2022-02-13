/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions,
  uint8ArrayToBase64
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for wozobject.WozObjectRequestById
 */
export class WozObjectRequestById implements GrpcMessage {
  static id = 'wozobject.WozObjectRequestById';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WozObjectRequestById();
    WozObjectRequestById.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WozObjectRequestById) {
    _instance.wozobjectnummer = _instance.wozobjectnummer || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WozObjectRequestById,
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

    WozObjectRequestById.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WozObjectRequestById,
    _writer: BinaryWriter
  ) {
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(1, _instance.wozobjectnummer);
    }
  }

  private _wozobjectnummer?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WozObjectRequestById to deeply clone from
   */
  constructor(_value?: RecursivePartial<WozObjectRequestById.AsObject>) {
    _value = _value || {};
    this.wozobjectnummer = _value.wozobjectnummer;
    WozObjectRequestById.refineValues(this);
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
    WozObjectRequestById.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WozObjectRequestById.AsObject {
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
  ): WozObjectRequestById.AsProtobufJSON {
    return {
      wozobjectnummer: this.wozobjectnummer
    };
  }
}
export module WozObjectRequestById {
  /**
   * Standard JavaScript object representation for WozObjectRequestById
   */
  export interface AsObject {
    wozobjectnummer?: string;
  }

  /**
   * Protobuf JSON representation for WozObjectRequestById
   */
  export interface AsProtobufJSON {
    wozobjectnummer?: string;
  }
}

/**
 * Message implementation for wozobject.WozObjectRequestByIds
 */
export class WozObjectRequestByIds implements GrpcMessage {
  static id = 'wozobject.WozObjectRequestByIds';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WozObjectRequestByIds();
    WozObjectRequestByIds.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WozObjectRequestByIds) {
    _instance.wozobjectnummers = _instance.wozobjectnummers || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WozObjectRequestByIds,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.wozobjectnummers = _instance.wozobjectnummers || []).push(
            ...(_reader.readPackedInt64String() || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    WozObjectRequestByIds.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WozObjectRequestByIds,
    _writer: BinaryWriter
  ) {
    if (_instance.wozobjectnummers && _instance.wozobjectnummers.length) {
      _writer.writePackedInt64String(1, _instance.wozobjectnummers);
    }
  }

  private _wozobjectnummers?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WozObjectRequestByIds to deeply clone from
   */
  constructor(_value?: RecursivePartial<WozObjectRequestByIds.AsObject>) {
    _value = _value || {};
    this.wozobjectnummers = (_value.wozobjectnummers || []).slice();
    WozObjectRequestByIds.refineValues(this);
  }
  get wozobjectnummers(): string[] | undefined {
    return this._wozobjectnummers;
  }
  set wozobjectnummers(value: string[] | undefined) {
    this._wozobjectnummers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WozObjectRequestByIds.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WozObjectRequestByIds.AsObject {
    return {
      wozobjectnummers: (this.wozobjectnummers || []).slice()
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
  ): WozObjectRequestByIds.AsProtobufJSON {
    return {
      wozobjectnummers: (this.wozobjectnummers || []).slice()
    };
  }
}
export module WozObjectRequestByIds {
  /**
   * Standard JavaScript object representation for WozObjectRequestByIds
   */
  export interface AsObject {
    wozobjectnummers?: string[];
  }

  /**
   * Protobuf JSON representation for WozObjectRequestByIds
   */
  export interface AsProtobufJSON {
    wozobjectnummers?: string[];
  }
}

/**
 * Message implementation for wozobject.WozObjectsReply
 */
export class WozObjectsReply implements GrpcMessage {
  static id = 'wozobject.WozObjectsReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WozObjectsReply();
    WozObjectsReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WozObjectsReply) {
    _instance.wozobjects = _instance.wozobjects || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WozObjectsReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new WozObjectReply();
          _reader.readMessage(
            messageInitializer1,
            WozObjectReply.deserializeBinaryFromReader
          );
          (_instance.wozobjects = _instance.wozobjects || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    WozObjectsReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WozObjectsReply,
    _writer: BinaryWriter
  ) {
    if (_instance.wozobjects && _instance.wozobjects.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.wozobjects as any,
        WozObjectReply.serializeBinaryToWriter
      );
    }
  }

  private _wozobjects?: WozObjectReply[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WozObjectsReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<WozObjectsReply.AsObject>) {
    _value = _value || {};
    this.wozobjects = (_value.wozobjects || []).map(m => new WozObjectReply(m));
    WozObjectsReply.refineValues(this);
  }
  get wozobjects(): WozObjectReply[] | undefined {
    return this._wozobjects;
  }
  set wozobjects(value: WozObjectReply[] | undefined) {
    this._wozobjects = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WozObjectsReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WozObjectsReply.AsObject {
    return {
      wozobjects: (this.wozobjects || []).map(m => m.toObject())
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
  ): WozObjectsReply.AsProtobufJSON {
    return {
      wozobjects: (this.wozobjects || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module WozObjectsReply {
  /**
   * Standard JavaScript object representation for WozObjectsReply
   */
  export interface AsObject {
    wozobjects?: WozObjectReply.AsObject[];
  }

  /**
   * Protobuf JSON representation for WozObjectsReply
   */
  export interface AsProtobufJSON {
    wozobjects?: WozObjectReply.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for wozobject.FullWozObjectSaveReply
 */
export class FullWozObjectSaveReply implements GrpcMessage {
  static id = 'wozobject.FullWozObjectSaveReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FullWozObjectSaveReply();
    FullWozObjectSaveReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FullWozObjectSaveReply) {
    _instance.isSuccess = _instance.isSuccess || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FullWozObjectSaveReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.isSuccess = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    FullWozObjectSaveReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FullWozObjectSaveReply,
    _writer: BinaryWriter
  ) {
    if (_instance.isSuccess) {
      _writer.writeBool(1, _instance.isSuccess);
    }
  }

  private _isSuccess?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FullWozObjectSaveReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<FullWozObjectSaveReply.AsObject>) {
    _value = _value || {};
    this.isSuccess = _value.isSuccess;
    FullWozObjectSaveReply.refineValues(this);
  }
  get isSuccess(): boolean | undefined {
    return this._isSuccess;
  }
  set isSuccess(value: boolean | undefined) {
    this._isSuccess = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FullWozObjectSaveReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FullWozObjectSaveReply.AsObject {
    return {
      isSuccess: this.isSuccess
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
  ): FullWozObjectSaveReply.AsProtobufJSON {
    return {
      isSuccess: this.isSuccess
    };
  }
}
export module FullWozObjectSaveReply {
  /**
   * Standard JavaScript object representation for FullWozObjectSaveReply
   */
  export interface AsObject {
    isSuccess?: boolean;
  }

  /**
   * Protobuf JSON representation for FullWozObjectSaveReply
   */
  export interface AsProtobufJSON {
    isSuccess?: boolean;
  }
}

/**
 * Message implementation for wozobject.WozObjectReply
 */
export class WozObjectReply implements GrpcMessage {
  static id = 'wozobject.WozObjectReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WozObjectReply();
    WozObjectReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WozObjectReply) {
    _instance.wozobjectnummer = _instance.wozobjectnummer || '0';
    _instance.gemeentenaam = _instance.gemeentenaam || undefined;
    _instance.straatnaam = _instance.straatnaam || undefined;
    _instance.huisnummer = _instance.huisnummer || 0;
    _instance.huisletter = _instance.huisletter || undefined;
    _instance.huisnummertoevoeging =
      _instance.huisnummertoevoeging || undefined;
    _instance.postcode = _instance.postcode || undefined;
    _instance.soortobjectcode = _instance.soortobjectcode || undefined;
    _instance.lat = _instance.lat || undefined;
    _instance.lon = _instance.lon || undefined;
    _instance.imageData = _instance.imageData || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WozObjectReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.wozobjectnummer = _reader.readInt64String();
          break;
        case 2:
          _instance.gemeentenaam = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.gemeentenaam,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.straatnaam = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.straatnaam,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.huisnummer = _reader.readInt32();
          break;
        case 5:
          _instance.huisletter = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.huisletter,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.huisnummertoevoeging = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.huisnummertoevoeging,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.postcode = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.postcode,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.soortobjectcode = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.soortobjectcode,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.lat = new googleProtobuf000.DoubleValue();
          _reader.readMessage(
            _instance.lat,
            googleProtobuf000.DoubleValue.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.lon = new googleProtobuf000.DoubleValue();
          _reader.readMessage(
            _instance.lon,
            googleProtobuf000.DoubleValue.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.imageData = new googleProtobuf000.BytesValue();
          _reader.readMessage(
            _instance.imageData,
            googleProtobuf000.BytesValue.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    WozObjectReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WozObjectReply,
    _writer: BinaryWriter
  ) {
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(1, _instance.wozobjectnummer);
    }
    if (_instance.gemeentenaam) {
      _writer.writeMessage(
        2,
        _instance.gemeentenaam as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.straatnaam) {
      _writer.writeMessage(
        3,
        _instance.straatnaam as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.huisnummer) {
      _writer.writeInt32(4, _instance.huisnummer);
    }
    if (_instance.huisletter) {
      _writer.writeMessage(
        5,
        _instance.huisletter as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.huisnummertoevoeging) {
      _writer.writeMessage(
        6,
        _instance.huisnummertoevoeging as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.postcode) {
      _writer.writeMessage(
        7,
        _instance.postcode as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.soortobjectcode) {
      _writer.writeMessage(
        8,
        _instance.soortobjectcode as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.lat) {
      _writer.writeMessage(
        9,
        _instance.lat as any,
        googleProtobuf000.DoubleValue.serializeBinaryToWriter
      );
    }
    if (_instance.lon) {
      _writer.writeMessage(
        10,
        _instance.lon as any,
        googleProtobuf000.DoubleValue.serializeBinaryToWriter
      );
    }
    if (_instance.imageData) {
      _writer.writeMessage(
        11,
        _instance.imageData as any,
        googleProtobuf000.BytesValue.serializeBinaryToWriter
      );
    }
  }

  private _wozobjectnummer?: string;
  private _gemeentenaam?: googleProtobuf000.StringValue;
  private _straatnaam?: googleProtobuf000.StringValue;
  private _huisnummer?: number;
  private _huisletter?: googleProtobuf000.StringValue;
  private _huisnummertoevoeging?: googleProtobuf000.StringValue;
  private _postcode?: googleProtobuf000.StringValue;
  private _soortobjectcode?: googleProtobuf000.StringValue;
  private _lat?: googleProtobuf000.DoubleValue;
  private _lon?: googleProtobuf000.DoubleValue;
  private _imageData?: googleProtobuf000.BytesValue;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WozObjectReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<WozObjectReply.AsObject>) {
    _value = _value || {};
    this.wozobjectnummer = _value.wozobjectnummer;
    this.gemeentenaam = _value.gemeentenaam
      ? new googleProtobuf000.StringValue(_value.gemeentenaam)
      : undefined;
    this.straatnaam = _value.straatnaam
      ? new googleProtobuf000.StringValue(_value.straatnaam)
      : undefined;
    this.huisnummer = _value.huisnummer;
    this.huisletter = _value.huisletter
      ? new googleProtobuf000.StringValue(_value.huisletter)
      : undefined;
    this.huisnummertoevoeging = _value.huisnummertoevoeging
      ? new googleProtobuf000.StringValue(_value.huisnummertoevoeging)
      : undefined;
    this.postcode = _value.postcode
      ? new googleProtobuf000.StringValue(_value.postcode)
      : undefined;
    this.soortobjectcode = _value.soortobjectcode
      ? new googleProtobuf000.StringValue(_value.soortobjectcode)
      : undefined;
    this.lat = _value.lat
      ? new googleProtobuf000.DoubleValue(_value.lat)
      : undefined;
    this.lon = _value.lon
      ? new googleProtobuf000.DoubleValue(_value.lon)
      : undefined;
    this.imageData = _value.imageData
      ? new googleProtobuf000.BytesValue(_value.imageData)
      : undefined;
    WozObjectReply.refineValues(this);
  }
  get wozobjectnummer(): string | undefined {
    return this._wozobjectnummer;
  }
  set wozobjectnummer(value: string | undefined) {
    this._wozobjectnummer = value;
  }
  get gemeentenaam(): googleProtobuf000.StringValue | undefined {
    return this._gemeentenaam;
  }
  set gemeentenaam(value: googleProtobuf000.StringValue | undefined) {
    this._gemeentenaam = value;
  }
  get straatnaam(): googleProtobuf000.StringValue | undefined {
    return this._straatnaam;
  }
  set straatnaam(value: googleProtobuf000.StringValue | undefined) {
    this._straatnaam = value;
  }
  get huisnummer(): number | undefined {
    return this._huisnummer;
  }
  set huisnummer(value: number | undefined) {
    this._huisnummer = value;
  }
  get huisletter(): googleProtobuf000.StringValue | undefined {
    return this._huisletter;
  }
  set huisletter(value: googleProtobuf000.StringValue | undefined) {
    this._huisletter = value;
  }
  get huisnummertoevoeging(): googleProtobuf000.StringValue | undefined {
    return this._huisnummertoevoeging;
  }
  set huisnummertoevoeging(value: googleProtobuf000.StringValue | undefined) {
    this._huisnummertoevoeging = value;
  }
  get postcode(): googleProtobuf000.StringValue | undefined {
    return this._postcode;
  }
  set postcode(value: googleProtobuf000.StringValue | undefined) {
    this._postcode = value;
  }
  get soortobjectcode(): googleProtobuf000.StringValue | undefined {
    return this._soortobjectcode;
  }
  set soortobjectcode(value: googleProtobuf000.StringValue | undefined) {
    this._soortobjectcode = value;
  }
  get lat(): googleProtobuf000.DoubleValue | undefined {
    return this._lat;
  }
  set lat(value: googleProtobuf000.DoubleValue | undefined) {
    this._lat = value;
  }
  get lon(): googleProtobuf000.DoubleValue | undefined {
    return this._lon;
  }
  set lon(value: googleProtobuf000.DoubleValue | undefined) {
    this._lon = value;
  }
  get imageData(): googleProtobuf000.BytesValue | undefined {
    return this._imageData;
  }
  set imageData(value: googleProtobuf000.BytesValue | undefined) {
    this._imageData = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WozObjectReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WozObjectReply.AsObject {
    return {
      wozobjectnummer: this.wozobjectnummer,
      gemeentenaam: this.gemeentenaam
        ? this.gemeentenaam.toObject()
        : undefined,
      straatnaam: this.straatnaam ? this.straatnaam.toObject() : undefined,
      huisnummer: this.huisnummer,
      huisletter: this.huisletter ? this.huisletter.toObject() : undefined,
      huisnummertoevoeging: this.huisnummertoevoeging
        ? this.huisnummertoevoeging.toObject()
        : undefined,
      postcode: this.postcode ? this.postcode.toObject() : undefined,
      soortobjectcode: this.soortobjectcode
        ? this.soortobjectcode.toObject()
        : undefined,
      lat: this.lat ? this.lat.toObject() : undefined,
      lon: this.lon ? this.lon.toObject() : undefined,
      imageData: this.imageData ? this.imageData.toObject() : undefined
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
  ): WozObjectReply.AsProtobufJSON {
    return {
      wozobjectnummer: this.wozobjectnummer,
      gemeentenaam: this.gemeentenaam
        ? this.gemeentenaam.toProtobufJSON(options)
        : null,
      straatnaam: this.straatnaam
        ? this.straatnaam.toProtobufJSON(options)
        : null,
      huisnummer: this.huisnummer,
      huisletter: this.huisletter
        ? this.huisletter.toProtobufJSON(options)
        : null,
      huisnummertoevoeging: this.huisnummertoevoeging
        ? this.huisnummertoevoeging.toProtobufJSON(options)
        : null,
      postcode: this.postcode ? this.postcode.toProtobufJSON(options) : null,
      soortobjectcode: this.soortobjectcode
        ? this.soortobjectcode.toProtobufJSON(options)
        : null,
      lat: this.lat ? this.lat.toProtobufJSON(options) : null,
      lon: this.lon ? this.lon.toProtobufJSON(options) : null,
      imageData: this.imageData ? this.imageData.toProtobufJSON(options) : null
    };
  }
}
export module WozObjectReply {
  /**
   * Standard JavaScript object representation for WozObjectReply
   */
  export interface AsObject {
    wozobjectnummer?: string;
    gemeentenaam?: googleProtobuf000.StringValue.AsObject;
    straatnaam?: googleProtobuf000.StringValue.AsObject;
    huisnummer?: number;
    huisletter?: googleProtobuf000.StringValue.AsObject;
    huisnummertoevoeging?: googleProtobuf000.StringValue.AsObject;
    postcode?: googleProtobuf000.StringValue.AsObject;
    soortobjectcode?: googleProtobuf000.StringValue.AsObject;
    lat?: googleProtobuf000.DoubleValue.AsObject;
    lon?: googleProtobuf000.DoubleValue.AsObject;
    imageData?: googleProtobuf000.BytesValue.AsObject;
  }

  /**
   * Protobuf JSON representation for WozObjectReply
   */
  export interface AsProtobufJSON {
    wozobjectnummer?: string;
    gemeentenaam?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    straatnaam?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    huisnummer?: number;
    huisletter?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    huisnummertoevoeging?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    postcode?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    soortobjectcode?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    lat?: googleProtobuf000.DoubleValue.AsProtobufJSON | null;
    lon?: googleProtobuf000.DoubleValue.AsProtobufJSON | null;
    imageData?: googleProtobuf000.BytesValue.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for wozobject.FullWozObjectReply
 */
export class FullWozObjectReply implements GrpcMessage {
  static id = 'wozobject.FullWozObjectReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FullWozObjectReply();
    FullWozObjectReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FullWozObjectReply) {
    _instance.wozobjectnummer = _instance.wozobjectnummer || '0';
    _instance.gemeentenaam = _instance.gemeentenaam || undefined;
    _instance.straatnaam = _instance.straatnaam || undefined;
    _instance.huisnummer = _instance.huisnummer || 0;
    _instance.huisletter = _instance.huisletter || undefined;
    _instance.huisnummertoevoeging =
      _instance.huisnummertoevoeging || undefined;
    _instance.postcode = _instance.postcode || undefined;
    _instance.soortobjectcode = _instance.soortobjectcode || undefined;
    _instance.wijkcode = _instance.wijkcode || undefined;
    _instance.buurtcode = _instance.buurtcode || undefined;
    _instance.woonplaats = _instance.woonplaats || undefined;
    _instance.locatieomschrijving = _instance.locatieomschrijving || undefined;
    _instance.indicatieligging = _instance.indicatieligging || undefined;
    _instance.omschrijving = _instance.omschrijving || undefined;
    _instance.lat = _instance.lat || undefined;
    _instance.lon = _instance.lon || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FullWozObjectReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.wozobjectnummer = _reader.readInt64String();
          break;
        case 2:
          _instance.gemeentenaam = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.gemeentenaam,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.straatnaam = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.straatnaam,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.huisnummer = _reader.readInt32();
          break;
        case 5:
          _instance.huisletter = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.huisletter,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.huisnummertoevoeging = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.huisnummertoevoeging,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.postcode = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.postcode,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.soortobjectcode = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.soortobjectcode,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.wijkcode = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.wijkcode,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.buurtcode = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.buurtcode,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.woonplaats = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.woonplaats,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.locatieomschrijving = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.locatieomschrijving,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 13:
          _instance.indicatieligging = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.indicatieligging,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 14:
          _instance.omschrijving = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.omschrijving,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 15:
          _instance.lat = new googleProtobuf000.DoubleValue();
          _reader.readMessage(
            _instance.lat,
            googleProtobuf000.DoubleValue.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.lon = new googleProtobuf000.DoubleValue();
          _reader.readMessage(
            _instance.lon,
            googleProtobuf000.DoubleValue.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    FullWozObjectReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FullWozObjectReply,
    _writer: BinaryWriter
  ) {
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(1, _instance.wozobjectnummer);
    }
    if (_instance.gemeentenaam) {
      _writer.writeMessage(
        2,
        _instance.gemeentenaam as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.straatnaam) {
      _writer.writeMessage(
        3,
        _instance.straatnaam as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.huisnummer) {
      _writer.writeInt32(4, _instance.huisnummer);
    }
    if (_instance.huisletter) {
      _writer.writeMessage(
        5,
        _instance.huisletter as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.huisnummertoevoeging) {
      _writer.writeMessage(
        6,
        _instance.huisnummertoevoeging as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.postcode) {
      _writer.writeMessage(
        7,
        _instance.postcode as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.soortobjectcode) {
      _writer.writeMessage(
        8,
        _instance.soortobjectcode as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.wijkcode) {
      _writer.writeMessage(
        9,
        _instance.wijkcode as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.buurtcode) {
      _writer.writeMessage(
        10,
        _instance.buurtcode as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.woonplaats) {
      _writer.writeMessage(
        11,
        _instance.woonplaats as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.locatieomschrijving) {
      _writer.writeMessage(
        12,
        _instance.locatieomschrijving as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.indicatieligging) {
      _writer.writeMessage(
        13,
        _instance.indicatieligging as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.omschrijving) {
      _writer.writeMessage(
        14,
        _instance.omschrijving as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.lat) {
      _writer.writeMessage(
        15,
        _instance.lat as any,
        googleProtobuf000.DoubleValue.serializeBinaryToWriter
      );
    }
    if (_instance.lon) {
      _writer.writeMessage(
        16,
        _instance.lon as any,
        googleProtobuf000.DoubleValue.serializeBinaryToWriter
      );
    }
  }

  private _wozobjectnummer?: string;
  private _gemeentenaam?: googleProtobuf000.StringValue;
  private _straatnaam?: googleProtobuf000.StringValue;
  private _huisnummer?: number;
  private _huisletter?: googleProtobuf000.StringValue;
  private _huisnummertoevoeging?: googleProtobuf000.StringValue;
  private _postcode?: googleProtobuf000.StringValue;
  private _soortobjectcode?: googleProtobuf000.StringValue;
  private _wijkcode?: googleProtobuf000.StringValue;
  private _buurtcode?: googleProtobuf000.StringValue;
  private _woonplaats?: googleProtobuf000.StringValue;
  private _locatieomschrijving?: googleProtobuf000.StringValue;
  private _indicatieligging?: googleProtobuf000.StringValue;
  private _omschrijving?: googleProtobuf000.StringValue;
  private _lat?: googleProtobuf000.DoubleValue;
  private _lon?: googleProtobuf000.DoubleValue;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FullWozObjectReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<FullWozObjectReply.AsObject>) {
    _value = _value || {};
    this.wozobjectnummer = _value.wozobjectnummer;
    this.gemeentenaam = _value.gemeentenaam
      ? new googleProtobuf000.StringValue(_value.gemeentenaam)
      : undefined;
    this.straatnaam = _value.straatnaam
      ? new googleProtobuf000.StringValue(_value.straatnaam)
      : undefined;
    this.huisnummer = _value.huisnummer;
    this.huisletter = _value.huisletter
      ? new googleProtobuf000.StringValue(_value.huisletter)
      : undefined;
    this.huisnummertoevoeging = _value.huisnummertoevoeging
      ? new googleProtobuf000.StringValue(_value.huisnummertoevoeging)
      : undefined;
    this.postcode = _value.postcode
      ? new googleProtobuf000.StringValue(_value.postcode)
      : undefined;
    this.soortobjectcode = _value.soortobjectcode
      ? new googleProtobuf000.StringValue(_value.soortobjectcode)
      : undefined;
    this.wijkcode = _value.wijkcode
      ? new googleProtobuf000.StringValue(_value.wijkcode)
      : undefined;
    this.buurtcode = _value.buurtcode
      ? new googleProtobuf000.StringValue(_value.buurtcode)
      : undefined;
    this.woonplaats = _value.woonplaats
      ? new googleProtobuf000.StringValue(_value.woonplaats)
      : undefined;
    this.locatieomschrijving = _value.locatieomschrijving
      ? new googleProtobuf000.StringValue(_value.locatieomschrijving)
      : undefined;
    this.indicatieligging = _value.indicatieligging
      ? new googleProtobuf000.StringValue(_value.indicatieligging)
      : undefined;
    this.omschrijving = _value.omschrijving
      ? new googleProtobuf000.StringValue(_value.omschrijving)
      : undefined;
    this.lat = _value.lat
      ? new googleProtobuf000.DoubleValue(_value.lat)
      : undefined;
    this.lon = _value.lon
      ? new googleProtobuf000.DoubleValue(_value.lon)
      : undefined;
    FullWozObjectReply.refineValues(this);
  }
  get wozobjectnummer(): string | undefined {
    return this._wozobjectnummer;
  }
  set wozobjectnummer(value: string | undefined) {
    this._wozobjectnummer = value;
  }
  get gemeentenaam(): googleProtobuf000.StringValue | undefined {
    return this._gemeentenaam;
  }
  set gemeentenaam(value: googleProtobuf000.StringValue | undefined) {
    this._gemeentenaam = value;
  }
  get straatnaam(): googleProtobuf000.StringValue | undefined {
    return this._straatnaam;
  }
  set straatnaam(value: googleProtobuf000.StringValue | undefined) {
    this._straatnaam = value;
  }
  get huisnummer(): number | undefined {
    return this._huisnummer;
  }
  set huisnummer(value: number | undefined) {
    this._huisnummer = value;
  }
  get huisletter(): googleProtobuf000.StringValue | undefined {
    return this._huisletter;
  }
  set huisletter(value: googleProtobuf000.StringValue | undefined) {
    this._huisletter = value;
  }
  get huisnummertoevoeging(): googleProtobuf000.StringValue | undefined {
    return this._huisnummertoevoeging;
  }
  set huisnummertoevoeging(value: googleProtobuf000.StringValue | undefined) {
    this._huisnummertoevoeging = value;
  }
  get postcode(): googleProtobuf000.StringValue | undefined {
    return this._postcode;
  }
  set postcode(value: googleProtobuf000.StringValue | undefined) {
    this._postcode = value;
  }
  get soortobjectcode(): googleProtobuf000.StringValue | undefined {
    return this._soortobjectcode;
  }
  set soortobjectcode(value: googleProtobuf000.StringValue | undefined) {
    this._soortobjectcode = value;
  }
  get wijkcode(): googleProtobuf000.StringValue | undefined {
    return this._wijkcode;
  }
  set wijkcode(value: googleProtobuf000.StringValue | undefined) {
    this._wijkcode = value;
  }
  get buurtcode(): googleProtobuf000.StringValue | undefined {
    return this._buurtcode;
  }
  set buurtcode(value: googleProtobuf000.StringValue | undefined) {
    this._buurtcode = value;
  }
  get woonplaats(): googleProtobuf000.StringValue | undefined {
    return this._woonplaats;
  }
  set woonplaats(value: googleProtobuf000.StringValue | undefined) {
    this._woonplaats = value;
  }
  get locatieomschrijving(): googleProtobuf000.StringValue | undefined {
    return this._locatieomschrijving;
  }
  set locatieomschrijving(value: googleProtobuf000.StringValue | undefined) {
    this._locatieomschrijving = value;
  }
  get indicatieligging(): googleProtobuf000.StringValue | undefined {
    return this._indicatieligging;
  }
  set indicatieligging(value: googleProtobuf000.StringValue | undefined) {
    this._indicatieligging = value;
  }
  get omschrijving(): googleProtobuf000.StringValue | undefined {
    return this._omschrijving;
  }
  set omschrijving(value: googleProtobuf000.StringValue | undefined) {
    this._omschrijving = value;
  }
  get lat(): googleProtobuf000.DoubleValue | undefined {
    return this._lat;
  }
  set lat(value: googleProtobuf000.DoubleValue | undefined) {
    this._lat = value;
  }
  get lon(): googleProtobuf000.DoubleValue | undefined {
    return this._lon;
  }
  set lon(value: googleProtobuf000.DoubleValue | undefined) {
    this._lon = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FullWozObjectReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FullWozObjectReply.AsObject {
    return {
      wozobjectnummer: this.wozobjectnummer,
      gemeentenaam: this.gemeentenaam
        ? this.gemeentenaam.toObject()
        : undefined,
      straatnaam: this.straatnaam ? this.straatnaam.toObject() : undefined,
      huisnummer: this.huisnummer,
      huisletter: this.huisletter ? this.huisletter.toObject() : undefined,
      huisnummertoevoeging: this.huisnummertoevoeging
        ? this.huisnummertoevoeging.toObject()
        : undefined,
      postcode: this.postcode ? this.postcode.toObject() : undefined,
      soortobjectcode: this.soortobjectcode
        ? this.soortobjectcode.toObject()
        : undefined,
      wijkcode: this.wijkcode ? this.wijkcode.toObject() : undefined,
      buurtcode: this.buurtcode ? this.buurtcode.toObject() : undefined,
      woonplaats: this.woonplaats ? this.woonplaats.toObject() : undefined,
      locatieomschrijving: this.locatieomschrijving
        ? this.locatieomschrijving.toObject()
        : undefined,
      indicatieligging: this.indicatieligging
        ? this.indicatieligging.toObject()
        : undefined,
      omschrijving: this.omschrijving
        ? this.omschrijving.toObject()
        : undefined,
      lat: this.lat ? this.lat.toObject() : undefined,
      lon: this.lon ? this.lon.toObject() : undefined
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
  ): FullWozObjectReply.AsProtobufJSON {
    return {
      wozobjectnummer: this.wozobjectnummer,
      gemeentenaam: this.gemeentenaam
        ? this.gemeentenaam.toProtobufJSON(options)
        : null,
      straatnaam: this.straatnaam
        ? this.straatnaam.toProtobufJSON(options)
        : null,
      huisnummer: this.huisnummer,
      huisletter: this.huisletter
        ? this.huisletter.toProtobufJSON(options)
        : null,
      huisnummertoevoeging: this.huisnummertoevoeging
        ? this.huisnummertoevoeging.toProtobufJSON(options)
        : null,
      postcode: this.postcode ? this.postcode.toProtobufJSON(options) : null,
      soortobjectcode: this.soortobjectcode
        ? this.soortobjectcode.toProtobufJSON(options)
        : null,
      wijkcode: this.wijkcode ? this.wijkcode.toProtobufJSON(options) : null,
      buurtcode: this.buurtcode ? this.buurtcode.toProtobufJSON(options) : null,
      woonplaats: this.woonplaats
        ? this.woonplaats.toProtobufJSON(options)
        : null,
      locatieomschrijving: this.locatieomschrijving
        ? this.locatieomschrijving.toProtobufJSON(options)
        : null,
      indicatieligging: this.indicatieligging
        ? this.indicatieligging.toProtobufJSON(options)
        : null,
      omschrijving: this.omschrijving
        ? this.omschrijving.toProtobufJSON(options)
        : null,
      lat: this.lat ? this.lat.toProtobufJSON(options) : null,
      lon: this.lon ? this.lon.toProtobufJSON(options) : null
    };
  }
}
export module FullWozObjectReply {
  /**
   * Standard JavaScript object representation for FullWozObjectReply
   */
  export interface AsObject {
    wozobjectnummer?: string;
    gemeentenaam?: googleProtobuf000.StringValue.AsObject;
    straatnaam?: googleProtobuf000.StringValue.AsObject;
    huisnummer?: number;
    huisletter?: googleProtobuf000.StringValue.AsObject;
    huisnummertoevoeging?: googleProtobuf000.StringValue.AsObject;
    postcode?: googleProtobuf000.StringValue.AsObject;
    soortobjectcode?: googleProtobuf000.StringValue.AsObject;
    wijkcode?: googleProtobuf000.StringValue.AsObject;
    buurtcode?: googleProtobuf000.StringValue.AsObject;
    woonplaats?: googleProtobuf000.StringValue.AsObject;
    locatieomschrijving?: googleProtobuf000.StringValue.AsObject;
    indicatieligging?: googleProtobuf000.StringValue.AsObject;
    omschrijving?: googleProtobuf000.StringValue.AsObject;
    lat?: googleProtobuf000.DoubleValue.AsObject;
    lon?: googleProtobuf000.DoubleValue.AsObject;
  }

  /**
   * Protobuf JSON representation for FullWozObjectReply
   */
  export interface AsProtobufJSON {
    wozobjectnummer?: string;
    gemeentenaam?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    straatnaam?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    huisnummer?: number;
    huisletter?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    huisnummertoevoeging?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    postcode?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    soortobjectcode?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    wijkcode?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    buurtcode?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    woonplaats?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    locatieomschrijving?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    indicatieligging?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    omschrijving?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    lat?: googleProtobuf000.DoubleValue.AsProtobufJSON | null;
    lon?: googleProtobuf000.DoubleValue.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for wozobject.WozObjectImageRequest
 */
export class WozObjectImageRequest implements GrpcMessage {
  static id = 'wozobject.WozObjectImageRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WozObjectImageRequest();
    WozObjectImageRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WozObjectImageRequest) {
    _instance.wozobjectnummer = _instance.wozobjectnummer || '0';
    _instance.onlyMain = _instance.onlyMain || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WozObjectImageRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.wozobjectnummer = _reader.readInt64String();
          break;
        case 2:
          _instance.onlyMain = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    WozObjectImageRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WozObjectImageRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(1, _instance.wozobjectnummer);
    }
    if (_instance.onlyMain) {
      _writer.writeBool(2, _instance.onlyMain);
    }
  }

  private _wozobjectnummer?: string;
  private _onlyMain?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WozObjectImageRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<WozObjectImageRequest.AsObject>) {
    _value = _value || {};
    this.wozobjectnummer = _value.wozobjectnummer;
    this.onlyMain = _value.onlyMain;
    WozObjectImageRequest.refineValues(this);
  }
  get wozobjectnummer(): string | undefined {
    return this._wozobjectnummer;
  }
  set wozobjectnummer(value: string | undefined) {
    this._wozobjectnummer = value;
  }
  get onlyMain(): boolean | undefined {
    return this._onlyMain;
  }
  set onlyMain(value: boolean | undefined) {
    this._onlyMain = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WozObjectImageRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WozObjectImageRequest.AsObject {
    return {
      wozobjectnummer: this.wozobjectnummer,
      onlyMain: this.onlyMain
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
  ): WozObjectImageRequest.AsProtobufJSON {
    return {
      wozobjectnummer: this.wozobjectnummer,
      onlyMain: this.onlyMain
    };
  }
}
export module WozObjectImageRequest {
  /**
   * Standard JavaScript object representation for WozObjectImageRequest
   */
  export interface AsObject {
    wozobjectnummer?: string;
    onlyMain?: boolean;
  }

  /**
   * Protobuf JSON representation for WozObjectImageRequest
   */
  export interface AsProtobufJSON {
    wozobjectnummer?: string;
    onlyMain?: boolean;
  }
}

/**
 * Message implementation for wozobject.WozObjectImageReply
 */
export class WozObjectImageReply implements GrpcMessage {
  static id = 'wozobject.WozObjectImageReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WozObjectImageReply();
    WozObjectImageReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WozObjectImageReply) {
    _instance.imageData = _instance.imageData || new Uint8Array();
    _instance.isMain = _instance.isMain || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WozObjectImageReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.imageData = _reader.readBytes();
          break;
        case 2:
          _instance.isMain = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    WozObjectImageReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WozObjectImageReply,
    _writer: BinaryWriter
  ) {
    if (_instance.imageData && _instance.imageData.length) {
      _writer.writeBytes(1, _instance.imageData);
    }
    if (_instance.isMain) {
      _writer.writeBool(2, _instance.isMain);
    }
  }

  private _imageData?: Uint8Array;
  private _isMain?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WozObjectImageReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<WozObjectImageReply.AsObject>) {
    _value = _value || {};
    this.imageData = _value.imageData;
    this.isMain = _value.isMain;
    WozObjectImageReply.refineValues(this);
  }
  get imageData(): Uint8Array | undefined {
    return this._imageData;
  }
  set imageData(value: Uint8Array | undefined) {
    this._imageData = value;
  }
  get isMain(): boolean | undefined {
    return this._isMain;
  }
  set isMain(value: boolean | undefined) {
    this._isMain = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WozObjectImageReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WozObjectImageReply.AsObject {
    return {
      imageData: this.imageData ? this.imageData.subarray(0) : new Uint8Array(),
      isMain: this.isMain
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
  ): WozObjectImageReply.AsProtobufJSON {
    return {
      imageData: this.imageData ? uint8ArrayToBase64(this.imageData) : '',
      isMain: this.isMain
    };
  }
}
export module WozObjectImageReply {
  /**
   * Standard JavaScript object representation for WozObjectImageReply
   */
  export interface AsObject {
    imageData?: Uint8Array;
    isMain?: boolean;
  }

  /**
   * Protobuf JSON representation for WozObjectImageReply
   */
  export interface AsProtobufJSON {
    imageData?: string;
    isMain?: boolean;
  }
}

/**
 * Message implementation for wozobject.UploadImageRequest
 */
export class UploadImageRequest implements GrpcMessage {
  static id = 'wozobject.UploadImageRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UploadImageRequest();
    UploadImageRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UploadImageRequest) {
    _instance.wozobjectnummer = _instance.wozobjectnummer || '0';
    _instance.imageData = _instance.imageData || new Uint8Array();
    _instance.isMain = _instance.isMain || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UploadImageRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.wozobjectnummer = _reader.readInt64String();
          break;
        case 2:
          _instance.imageData = _reader.readBytes();
          break;
        case 3:
          _instance.isMain = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    UploadImageRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UploadImageRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(1, _instance.wozobjectnummer);
    }
    if (_instance.imageData && _instance.imageData.length) {
      _writer.writeBytes(2, _instance.imageData);
    }
    if (_instance.isMain) {
      _writer.writeBool(3, _instance.isMain);
    }
  }

  private _wozobjectnummer?: string;
  private _imageData?: Uint8Array;
  private _isMain?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UploadImageRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UploadImageRequest.AsObject>) {
    _value = _value || {};
    this.wozobjectnummer = _value.wozobjectnummer;
    this.imageData = _value.imageData;
    this.isMain = _value.isMain;
    UploadImageRequest.refineValues(this);
  }
  get wozobjectnummer(): string | undefined {
    return this._wozobjectnummer;
  }
  set wozobjectnummer(value: string | undefined) {
    this._wozobjectnummer = value;
  }
  get imageData(): Uint8Array | undefined {
    return this._imageData;
  }
  set imageData(value: Uint8Array | undefined) {
    this._imageData = value;
  }
  get isMain(): boolean | undefined {
    return this._isMain;
  }
  set isMain(value: boolean | undefined) {
    this._isMain = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UploadImageRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UploadImageRequest.AsObject {
    return {
      wozobjectnummer: this.wozobjectnummer,
      imageData: this.imageData ? this.imageData.subarray(0) : new Uint8Array(),
      isMain: this.isMain
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
  ): UploadImageRequest.AsProtobufJSON {
    return {
      wozobjectnummer: this.wozobjectnummer,
      imageData: this.imageData ? uint8ArrayToBase64(this.imageData) : '',
      isMain: this.isMain
    };
  }
}
export module UploadImageRequest {
  /**
   * Standard JavaScript object representation for UploadImageRequest
   */
  export interface AsObject {
    wozobjectnummer?: string;
    imageData?: Uint8Array;
    isMain?: boolean;
  }

  /**
   * Protobuf JSON representation for UploadImageRequest
   */
  export interface AsProtobufJSON {
    wozobjectnummer?: string;
    imageData?: string;
    isMain?: boolean;
  }
}

/**
 * Message implementation for wozobject.UploadImageReply
 */
export class UploadImageReply implements GrpcMessage {
  static id = 'wozobject.UploadImageReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UploadImageReply();
    UploadImageReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UploadImageReply) {
    _instance.succes = _instance.succes || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UploadImageReply,
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

    UploadImageReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UploadImageReply,
    _writer: BinaryWriter
  ) {
    if (_instance.succes) {
      _writer.writeBool(1, _instance.succes);
    }
  }

  private _succes?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UploadImageReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<UploadImageReply.AsObject>) {
    _value = _value || {};
    this.succes = _value.succes;
    UploadImageReply.refineValues(this);
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
    UploadImageReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UploadImageReply.AsObject {
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
  ): UploadImageReply.AsProtobufJSON {
    return {
      succes: this.succes
    };
  }
}
export module UploadImageReply {
  /**
   * Standard JavaScript object representation for UploadImageReply
   */
  export interface AsObject {
    succes?: boolean;
  }

  /**
   * Protobuf JSON representation for UploadImageReply
   */
  export interface AsProtobufJSON {
    succes?: boolean;
  }
}
