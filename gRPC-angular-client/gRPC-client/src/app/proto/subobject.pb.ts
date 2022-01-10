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
 * Message implementation for subobject.SubobjectsRequestById
 */
export class SubobjectsRequestById implements GrpcMessage {
  static id = 'subobject.SubobjectsRequestById';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SubobjectsRequestById();
    SubobjectsRequestById.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SubobjectsRequestById) {
    _instance.wozobjectnummer = _instance.wozobjectnummer || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SubobjectsRequestById,
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

    SubobjectsRequestById.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SubobjectsRequestById,
    _writer: BinaryWriter
  ) {
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(1, _instance.wozobjectnummer);
    }
  }

  private _wozobjectnummer?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SubobjectsRequestById to deeply clone from
   */
  constructor(_value?: RecursivePartial<SubobjectsRequestById.AsObject>) {
    _value = _value || {};
    this.wozobjectnummer = _value.wozobjectnummer;
    SubobjectsRequestById.refineValues(this);
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
    SubobjectsRequestById.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SubobjectsRequestById.AsObject {
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
  ): SubobjectsRequestById.AsProtobufJSON {
    return {
      wozobjectnummer: this.wozobjectnummer
    };
  }
}
export module SubobjectsRequestById {
  /**
   * Standard JavaScript object representation for SubobjectsRequestById
   */
  export interface AsObject {
    wozobjectnummer?: string;
  }

  /**
   * Protobuf JSON representation for SubobjectsRequestById
   */
  export interface AsProtobufJSON {
    wozobjectnummer?: string;
  }
}

/**
 * Message implementation for subobject.WozSubObjectsReply
 */
export class WozSubObjectsReply implements GrpcMessage {
  static id = 'subobject.WozSubObjectsReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WozSubObjectsReply();
    WozSubObjectsReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WozSubObjectsReply) {
    _instance.wozsubobjects = _instance.wozsubobjects || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WozSubObjectsReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new WozSubObjectReply();
          _reader.readMessage(
            messageInitializer1,
            WozSubObjectReply.deserializeBinaryFromReader
          );
          (_instance.wozsubobjects = _instance.wozsubobjects || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    WozSubObjectsReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WozSubObjectsReply,
    _writer: BinaryWriter
  ) {
    if (_instance.wozsubobjects && _instance.wozsubobjects.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.wozsubobjects as any,
        WozSubObjectReply.serializeBinaryToWriter
      );
    }
  }

  private _wozsubobjects?: WozSubObjectReply[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WozSubObjectsReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<WozSubObjectsReply.AsObject>) {
    _value = _value || {};
    this.wozsubobjects = (_value.wozsubobjects || []).map(
      m => new WozSubObjectReply(m)
    );
    WozSubObjectsReply.refineValues(this);
  }
  get wozsubobjects(): WozSubObjectReply[] | undefined {
    return this._wozsubobjects;
  }
  set wozsubobjects(value: WozSubObjectReply[] | undefined) {
    this._wozsubobjects = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WozSubObjectsReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WozSubObjectsReply.AsObject {
    return {
      wozsubobjects: (this.wozsubobjects || []).map(m => m.toObject())
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
  ): WozSubObjectsReply.AsProtobufJSON {
    return {
      wozsubobjects: (this.wozsubobjects || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module WozSubObjectsReply {
  /**
   * Standard JavaScript object representation for WozSubObjectsReply
   */
  export interface AsObject {
    wozsubobjects?: WozSubObjectReply.AsObject[];
  }

  /**
   * Protobuf JSON representation for WozSubObjectsReply
   */
  export interface AsProtobufJSON {
    wozsubobjects?: WozSubObjectReply.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for subobject.WozSubObjectReply
 */
export class WozSubObjectReply implements GrpcMessage {
  static id = 'subobject.WozSubObjectReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WozSubObjectReply();
    WozSubObjectReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WozSubObjectReply) {
    _instance.id = _instance.id || 0;
    _instance.nummerwozdeelobject = _instance.nummerwozdeelobject || '0';
    _instance.codewozdeelobject = _instance.codewozdeelobject || undefined;
    _instance.bouwjaar = _instance.bouwjaar || 0;
    _instance.kwaliteit = _instance.kwaliteit || undefined;
    _instance.onderhoud = _instance.onderhoud || undefined;
    _instance.uitstraling = _instance.uitstraling || undefined;
    _instance.doelmatigheid = _instance.doelmatigheid || undefined;
    _instance.voorzieningen = _instance.voorzieningen || undefined;
    _instance.oppervlakte = _instance.oppervlakte || 0;
    _instance.aantalstuks = _instance.aantalstuks || 0;
    _instance.bagidentificatie = _instance.bagidentificatie || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WozSubObjectReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.nummerwozdeelobject = _reader.readInt64String();
          break;
        case 3:
          _instance.codewozdeelobject = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.codewozdeelobject,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.bouwjaar = _reader.readInt32();
          break;
        case 5:
          _instance.kwaliteit = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.kwaliteit,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.onderhoud = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.onderhoud,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.uitstraling = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.uitstraling,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.doelmatigheid = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.doelmatigheid,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.voorzieningen = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.voorzieningen,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.oppervlakte = _reader.readInt32();
          break;
        case 11:
          _instance.aantalstuks = _reader.readInt32();
          break;
        case 12:
          _instance.bagidentificatie = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.bagidentificatie,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    WozSubObjectReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WozSubObjectReply,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.nummerwozdeelobject) {
      _writer.writeInt64String(2, _instance.nummerwozdeelobject);
    }
    if (_instance.codewozdeelobject) {
      _writer.writeMessage(
        3,
        _instance.codewozdeelobject as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.bouwjaar) {
      _writer.writeInt32(4, _instance.bouwjaar);
    }
    if (_instance.kwaliteit) {
      _writer.writeMessage(
        5,
        _instance.kwaliteit as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.onderhoud) {
      _writer.writeMessage(
        6,
        _instance.onderhoud as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.uitstraling) {
      _writer.writeMessage(
        7,
        _instance.uitstraling as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.doelmatigheid) {
      _writer.writeMessage(
        8,
        _instance.doelmatigheid as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.voorzieningen) {
      _writer.writeMessage(
        9,
        _instance.voorzieningen as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.oppervlakte) {
      _writer.writeInt32(10, _instance.oppervlakte);
    }
    if (_instance.aantalstuks) {
      _writer.writeInt32(11, _instance.aantalstuks);
    }
    if (_instance.bagidentificatie) {
      _writer.writeMessage(
        12,
        _instance.bagidentificatie as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
  }

  private _id?: number;
  private _nummerwozdeelobject?: string;
  private _codewozdeelobject?: googleProtobuf000.StringValue;
  private _bouwjaar?: number;
  private _kwaliteit?: googleProtobuf000.StringValue;
  private _onderhoud?: googleProtobuf000.StringValue;
  private _uitstraling?: googleProtobuf000.StringValue;
  private _doelmatigheid?: googleProtobuf000.StringValue;
  private _voorzieningen?: googleProtobuf000.StringValue;
  private _oppervlakte?: number;
  private _aantalstuks?: number;
  private _bagidentificatie?: googleProtobuf000.StringValue;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WozSubObjectReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<WozSubObjectReply.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.nummerwozdeelobject = _value.nummerwozdeelobject;
    this.codewozdeelobject = _value.codewozdeelobject
      ? new googleProtobuf000.StringValue(_value.codewozdeelobject)
      : undefined;
    this.bouwjaar = _value.bouwjaar;
    this.kwaliteit = _value.kwaliteit
      ? new googleProtobuf000.StringValue(_value.kwaliteit)
      : undefined;
    this.onderhoud = _value.onderhoud
      ? new googleProtobuf000.StringValue(_value.onderhoud)
      : undefined;
    this.uitstraling = _value.uitstraling
      ? new googleProtobuf000.StringValue(_value.uitstraling)
      : undefined;
    this.doelmatigheid = _value.doelmatigheid
      ? new googleProtobuf000.StringValue(_value.doelmatigheid)
      : undefined;
    this.voorzieningen = _value.voorzieningen
      ? new googleProtobuf000.StringValue(_value.voorzieningen)
      : undefined;
    this.oppervlakte = _value.oppervlakte;
    this.aantalstuks = _value.aantalstuks;
    this.bagidentificatie = _value.bagidentificatie
      ? new googleProtobuf000.StringValue(_value.bagidentificatie)
      : undefined;
    WozSubObjectReply.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get nummerwozdeelobject(): string | undefined {
    return this._nummerwozdeelobject;
  }
  set nummerwozdeelobject(value: string | undefined) {
    this._nummerwozdeelobject = value;
  }
  get codewozdeelobject(): googleProtobuf000.StringValue | undefined {
    return this._codewozdeelobject;
  }
  set codewozdeelobject(value: googleProtobuf000.StringValue | undefined) {
    this._codewozdeelobject = value;
  }
  get bouwjaar(): number | undefined {
    return this._bouwjaar;
  }
  set bouwjaar(value: number | undefined) {
    this._bouwjaar = value;
  }
  get kwaliteit(): googleProtobuf000.StringValue | undefined {
    return this._kwaliteit;
  }
  set kwaliteit(value: googleProtobuf000.StringValue | undefined) {
    this._kwaliteit = value;
  }
  get onderhoud(): googleProtobuf000.StringValue | undefined {
    return this._onderhoud;
  }
  set onderhoud(value: googleProtobuf000.StringValue | undefined) {
    this._onderhoud = value;
  }
  get uitstraling(): googleProtobuf000.StringValue | undefined {
    return this._uitstraling;
  }
  set uitstraling(value: googleProtobuf000.StringValue | undefined) {
    this._uitstraling = value;
  }
  get doelmatigheid(): googleProtobuf000.StringValue | undefined {
    return this._doelmatigheid;
  }
  set doelmatigheid(value: googleProtobuf000.StringValue | undefined) {
    this._doelmatigheid = value;
  }
  get voorzieningen(): googleProtobuf000.StringValue | undefined {
    return this._voorzieningen;
  }
  set voorzieningen(value: googleProtobuf000.StringValue | undefined) {
    this._voorzieningen = value;
  }
  get oppervlakte(): number | undefined {
    return this._oppervlakte;
  }
  set oppervlakte(value: number | undefined) {
    this._oppervlakte = value;
  }
  get aantalstuks(): number | undefined {
    return this._aantalstuks;
  }
  set aantalstuks(value: number | undefined) {
    this._aantalstuks = value;
  }
  get bagidentificatie(): googleProtobuf000.StringValue | undefined {
    return this._bagidentificatie;
  }
  set bagidentificatie(value: googleProtobuf000.StringValue | undefined) {
    this._bagidentificatie = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WozSubObjectReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WozSubObjectReply.AsObject {
    return {
      id: this.id,
      nummerwozdeelobject: this.nummerwozdeelobject,
      codewozdeelobject: this.codewozdeelobject
        ? this.codewozdeelobject.toObject()
        : undefined,
      bouwjaar: this.bouwjaar,
      kwaliteit: this.kwaliteit ? this.kwaliteit.toObject() : undefined,
      onderhoud: this.onderhoud ? this.onderhoud.toObject() : undefined,
      uitstraling: this.uitstraling ? this.uitstraling.toObject() : undefined,
      doelmatigheid: this.doelmatigheid
        ? this.doelmatigheid.toObject()
        : undefined,
      voorzieningen: this.voorzieningen
        ? this.voorzieningen.toObject()
        : undefined,
      oppervlakte: this.oppervlakte,
      aantalstuks: this.aantalstuks,
      bagidentificatie: this.bagidentificatie
        ? this.bagidentificatie.toObject()
        : undefined
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
  ): WozSubObjectReply.AsProtobufJSON {
    return {
      id: this.id,
      nummerwozdeelobject: this.nummerwozdeelobject,
      codewozdeelobject: this.codewozdeelobject
        ? this.codewozdeelobject.toProtobufJSON(options)
        : null,
      bouwjaar: this.bouwjaar,
      kwaliteit: this.kwaliteit ? this.kwaliteit.toProtobufJSON(options) : null,
      onderhoud: this.onderhoud ? this.onderhoud.toProtobufJSON(options) : null,
      uitstraling: this.uitstraling
        ? this.uitstraling.toProtobufJSON(options)
        : null,
      doelmatigheid: this.doelmatigheid
        ? this.doelmatigheid.toProtobufJSON(options)
        : null,
      voorzieningen: this.voorzieningen
        ? this.voorzieningen.toProtobufJSON(options)
        : null,
      oppervlakte: this.oppervlakte,
      aantalstuks: this.aantalstuks,
      bagidentificatie: this.bagidentificatie
        ? this.bagidentificatie.toProtobufJSON(options)
        : null
    };
  }
}
export module WozSubObjectReply {
  /**
   * Standard JavaScript object representation for WozSubObjectReply
   */
  export interface AsObject {
    id?: number;
    nummerwozdeelobject?: string;
    codewozdeelobject?: googleProtobuf000.StringValue.AsObject;
    bouwjaar?: number;
    kwaliteit?: googleProtobuf000.StringValue.AsObject;
    onderhoud?: googleProtobuf000.StringValue.AsObject;
    uitstraling?: googleProtobuf000.StringValue.AsObject;
    doelmatigheid?: googleProtobuf000.StringValue.AsObject;
    voorzieningen?: googleProtobuf000.StringValue.AsObject;
    oppervlakte?: number;
    aantalstuks?: number;
    bagidentificatie?: googleProtobuf000.StringValue.AsObject;
  }

  /**
   * Protobuf JSON representation for WozSubObjectReply
   */
  export interface AsProtobufJSON {
    id?: number;
    nummerwozdeelobject?: string;
    codewozdeelobject?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    bouwjaar?: number;
    kwaliteit?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    onderhoud?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    uitstraling?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    doelmatigheid?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    voorzieningen?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    oppervlakte?: number;
    aantalstuks?: number;
    bagidentificatie?: googleProtobuf000.StringValue.AsProtobufJSON | null;
  }
}
