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
 * Message implementation for taxoverview.WozObjectFilterRequest
 */
export class WozObjectFilterRequest implements GrpcMessage {
  static id = 'taxoverview.WozObjectFilterRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WozObjectFilterRequest();
    WozObjectFilterRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WozObjectFilterRequest) {
    _instance.tijdvakid = _instance.tijdvakid || 0;
    _instance.modelids = _instance.modelids || [];
    _instance.gemeentecodes = _instance.gemeentecodes || [];
    _instance.woonplaatsen = _instance.woonplaatsen || [];
    _instance.straatnamen = _instance.straatnamen || [];
    _instance.wijkcodes = _instance.wijkcodes || [];
    _instance.buurtcodes = _instance.buurtcodes || [];
    _instance.soortgroepids = _instance.soortgroepids || [];
    _instance.soortobjectcodes = _instance.soortobjectcodes || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WozObjectFilterRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.tijdvakid = _reader.readInt32();
          break;
        case 2:
          (_instance.modelids = _instance.modelids || []).push(
            ...(_reader.readPackedInt32() || [])
          );
          break;
        case 3:
          (_instance.gemeentecodes = _instance.gemeentecodes || []).push(
            ...(_reader.readPackedInt32() || [])
          );
          break;
        case 4:
          (_instance.woonplaatsen = _instance.woonplaatsen || []).push(
            _reader.readString()
          );
          break;
        case 5:
          (_instance.straatnamen = _instance.straatnamen || []).push(
            _reader.readString()
          );
          break;
        case 6:
          (_instance.wijkcodes = _instance.wijkcodes || []).push(
            _reader.readString()
          );
          break;
        case 7:
          (_instance.buurtcodes = _instance.buurtcodes || []).push(
            _reader.readString()
          );
          break;
        case 8:
          (_instance.soortgroepids = _instance.soortgroepids || []).push(
            ...(_reader.readPackedInt32() || [])
          );
          break;
        case 9:
          (_instance.soortobjectcodes = _instance.soortobjectcodes || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    WozObjectFilterRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WozObjectFilterRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.tijdvakid) {
      _writer.writeInt32(1, _instance.tijdvakid);
    }
    if (_instance.modelids && _instance.modelids.length) {
      _writer.writePackedInt32(2, _instance.modelids);
    }
    if (_instance.gemeentecodes && _instance.gemeentecodes.length) {
      _writer.writePackedInt32(3, _instance.gemeentecodes);
    }
    if (_instance.woonplaatsen && _instance.woonplaatsen.length) {
      _writer.writeRepeatedString(4, _instance.woonplaatsen);
    }
    if (_instance.straatnamen && _instance.straatnamen.length) {
      _writer.writeRepeatedString(5, _instance.straatnamen);
    }
    if (_instance.wijkcodes && _instance.wijkcodes.length) {
      _writer.writeRepeatedString(6, _instance.wijkcodes);
    }
    if (_instance.buurtcodes && _instance.buurtcodes.length) {
      _writer.writeRepeatedString(7, _instance.buurtcodes);
    }
    if (_instance.soortgroepids && _instance.soortgroepids.length) {
      _writer.writePackedInt32(8, _instance.soortgroepids);
    }
    if (_instance.soortobjectcodes && _instance.soortobjectcodes.length) {
      _writer.writeRepeatedString(9, _instance.soortobjectcodes);
    }
  }

  private _tijdvakid?: number;
  private _modelids?: number[];
  private _gemeentecodes?: number[];
  private _woonplaatsen?: string[];
  private _straatnamen?: string[];
  private _wijkcodes?: string[];
  private _buurtcodes?: string[];
  private _soortgroepids?: number[];
  private _soortobjectcodes?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WozObjectFilterRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<WozObjectFilterRequest.AsObject>) {
    _value = _value || {};
    this.tijdvakid = _value.tijdvakid;
    this.modelids = (_value.modelids || []).slice();
    this.gemeentecodes = (_value.gemeentecodes || []).slice();
    this.woonplaatsen = (_value.woonplaatsen || []).slice();
    this.straatnamen = (_value.straatnamen || []).slice();
    this.wijkcodes = (_value.wijkcodes || []).slice();
    this.buurtcodes = (_value.buurtcodes || []).slice();
    this.soortgroepids = (_value.soortgroepids || []).slice();
    this.soortobjectcodes = (_value.soortobjectcodes || []).slice();
    WozObjectFilterRequest.refineValues(this);
  }
  get tijdvakid(): number | undefined {
    return this._tijdvakid;
  }
  set tijdvakid(value: number | undefined) {
    this._tijdvakid = value;
  }
  get modelids(): number[] | undefined {
    return this._modelids;
  }
  set modelids(value: number[] | undefined) {
    this._modelids = value;
  }
  get gemeentecodes(): number[] | undefined {
    return this._gemeentecodes;
  }
  set gemeentecodes(value: number[] | undefined) {
    this._gemeentecodes = value;
  }
  get woonplaatsen(): string[] | undefined {
    return this._woonplaatsen;
  }
  set woonplaatsen(value: string[] | undefined) {
    this._woonplaatsen = value;
  }
  get straatnamen(): string[] | undefined {
    return this._straatnamen;
  }
  set straatnamen(value: string[] | undefined) {
    this._straatnamen = value;
  }
  get wijkcodes(): string[] | undefined {
    return this._wijkcodes;
  }
  set wijkcodes(value: string[] | undefined) {
    this._wijkcodes = value;
  }
  get buurtcodes(): string[] | undefined {
    return this._buurtcodes;
  }
  set buurtcodes(value: string[] | undefined) {
    this._buurtcodes = value;
  }
  get soortgroepids(): number[] | undefined {
    return this._soortgroepids;
  }
  set soortgroepids(value: number[] | undefined) {
    this._soortgroepids = value;
  }
  get soortobjectcodes(): string[] | undefined {
    return this._soortobjectcodes;
  }
  set soortobjectcodes(value: string[] | undefined) {
    this._soortobjectcodes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WozObjectFilterRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WozObjectFilterRequest.AsObject {
    return {
      tijdvakid: this.tijdvakid,
      modelids: (this.modelids || []).slice(),
      gemeentecodes: (this.gemeentecodes || []).slice(),
      woonplaatsen: (this.woonplaatsen || []).slice(),
      straatnamen: (this.straatnamen || []).slice(),
      wijkcodes: (this.wijkcodes || []).slice(),
      buurtcodes: (this.buurtcodes || []).slice(),
      soortgroepids: (this.soortgroepids || []).slice(),
      soortobjectcodes: (this.soortobjectcodes || []).slice()
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
  ): WozObjectFilterRequest.AsProtobufJSON {
    return {
      tijdvakid: this.tijdvakid,
      modelids: (this.modelids || []).slice(),
      gemeentecodes: (this.gemeentecodes || []).slice(),
      woonplaatsen: (this.woonplaatsen || []).slice(),
      straatnamen: (this.straatnamen || []).slice(),
      wijkcodes: (this.wijkcodes || []).slice(),
      buurtcodes: (this.buurtcodes || []).slice(),
      soortgroepids: (this.soortgroepids || []).slice(),
      soortobjectcodes: (this.soortobjectcodes || []).slice()
    };
  }
}
export module WozObjectFilterRequest {
  /**
   * Standard JavaScript object representation for WozObjectFilterRequest
   */
  export interface AsObject {
    tijdvakid?: number;
    modelids?: number[];
    gemeentecodes?: number[];
    woonplaatsen?: string[];
    straatnamen?: string[];
    wijkcodes?: string[];
    buurtcodes?: string[];
    soortgroepids?: number[];
    soortobjectcodes?: string[];
  }

  /**
   * Protobuf JSON representation for WozObjectFilterRequest
   */
  export interface AsProtobufJSON {
    tijdvakid?: number;
    modelids?: number[];
    gemeentecodes?: number[];
    woonplaatsen?: string[];
    straatnamen?: string[];
    wijkcodes?: string[];
    buurtcodes?: string[];
    soortgroepids?: number[];
    soortobjectcodes?: string[];
  }
}

/**
 * Message implementation for taxoverview.SubObjectFilterRequest
 */
export class SubObjectFilterRequest implements GrpcMessage {
  static id = 'taxoverview.SubObjectFilterRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SubObjectFilterRequest();
    SubObjectFilterRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SubObjectFilterRequest) {
    _instance.tijdvakid = _instance.tijdvakid || 0;
    _instance.modelids = _instance.modelids || [];
    _instance.gemeentecodes = _instance.gemeentecodes || [];
    _instance.woonplaatsen = _instance.woonplaatsen || [];
    _instance.straatnamen = _instance.straatnamen || [];
    _instance.wijkcodes = _instance.wijkcodes || [];
    _instance.buurtcodes = _instance.buurtcodes || [];
    _instance.deelgroepids = _instance.deelgroepids || [];
    _instance.deelcodes = _instance.deelcodes || [];
    _instance.kwaliteit = _instance.kwaliteit || [];
    _instance.onderhoud = _instance.onderhoud || [];
    _instance.uitstraling = _instance.uitstraling || [];
    _instance.doelmatigheid = _instance.doelmatigheid || [];
    _instance.voorzieningen = _instance.voorzieningen || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SubObjectFilterRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.tijdvakid = _reader.readInt32();
          break;
        case 2:
          (_instance.modelids = _instance.modelids || []).push(
            ...(_reader.readPackedInt32() || [])
          );
          break;
        case 3:
          (_instance.gemeentecodes = _instance.gemeentecodes || []).push(
            ...(_reader.readPackedInt32() || [])
          );
          break;
        case 4:
          (_instance.woonplaatsen = _instance.woonplaatsen || []).push(
            _reader.readString()
          );
          break;
        case 5:
          (_instance.straatnamen = _instance.straatnamen || []).push(
            _reader.readString()
          );
          break;
        case 6:
          (_instance.wijkcodes = _instance.wijkcodes || []).push(
            _reader.readString()
          );
          break;
        case 7:
          (_instance.buurtcodes = _instance.buurtcodes || []).push(
            _reader.readString()
          );
          break;
        case 8:
          (_instance.deelgroepids = _instance.deelgroepids || []).push(
            ...(_reader.readPackedInt32() || [])
          );
          break;
        case 9:
          (_instance.deelcodes = _instance.deelcodes || []).push(
            _reader.readString()
          );
          break;
        case 10:
          (_instance.kwaliteit = _instance.kwaliteit || []).push(
            _reader.readString()
          );
          break;
        case 11:
          (_instance.onderhoud = _instance.onderhoud || []).push(
            _reader.readString()
          );
          break;
        case 12:
          (_instance.uitstraling = _instance.uitstraling || []).push(
            _reader.readString()
          );
          break;
        case 13:
          (_instance.doelmatigheid = _instance.doelmatigheid || []).push(
            _reader.readString()
          );
          break;
        case 14:
          (_instance.voorzieningen = _instance.voorzieningen || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SubObjectFilterRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SubObjectFilterRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.tijdvakid) {
      _writer.writeInt32(1, _instance.tijdvakid);
    }
    if (_instance.modelids && _instance.modelids.length) {
      _writer.writePackedInt32(2, _instance.modelids);
    }
    if (_instance.gemeentecodes && _instance.gemeentecodes.length) {
      _writer.writePackedInt32(3, _instance.gemeentecodes);
    }
    if (_instance.woonplaatsen && _instance.woonplaatsen.length) {
      _writer.writeRepeatedString(4, _instance.woonplaatsen);
    }
    if (_instance.straatnamen && _instance.straatnamen.length) {
      _writer.writeRepeatedString(5, _instance.straatnamen);
    }
    if (_instance.wijkcodes && _instance.wijkcodes.length) {
      _writer.writeRepeatedString(6, _instance.wijkcodes);
    }
    if (_instance.buurtcodes && _instance.buurtcodes.length) {
      _writer.writeRepeatedString(7, _instance.buurtcodes);
    }
    if (_instance.deelgroepids && _instance.deelgroepids.length) {
      _writer.writePackedInt32(8, _instance.deelgroepids);
    }
    if (_instance.deelcodes && _instance.deelcodes.length) {
      _writer.writeRepeatedString(9, _instance.deelcodes);
    }
    if (_instance.kwaliteit && _instance.kwaliteit.length) {
      _writer.writeRepeatedString(10, _instance.kwaliteit);
    }
    if (_instance.onderhoud && _instance.onderhoud.length) {
      _writer.writeRepeatedString(11, _instance.onderhoud);
    }
    if (_instance.uitstraling && _instance.uitstraling.length) {
      _writer.writeRepeatedString(12, _instance.uitstraling);
    }
    if (_instance.doelmatigheid && _instance.doelmatigheid.length) {
      _writer.writeRepeatedString(13, _instance.doelmatigheid);
    }
    if (_instance.voorzieningen && _instance.voorzieningen.length) {
      _writer.writeRepeatedString(14, _instance.voorzieningen);
    }
  }

  private _tijdvakid?: number;
  private _modelids?: number[];
  private _gemeentecodes?: number[];
  private _woonplaatsen?: string[];
  private _straatnamen?: string[];
  private _wijkcodes?: string[];
  private _buurtcodes?: string[];
  private _deelgroepids?: number[];
  private _deelcodes?: string[];
  private _kwaliteit?: string[];
  private _onderhoud?: string[];
  private _uitstraling?: string[];
  private _doelmatigheid?: string[];
  private _voorzieningen?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SubObjectFilterRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SubObjectFilterRequest.AsObject>) {
    _value = _value || {};
    this.tijdvakid = _value.tijdvakid;
    this.modelids = (_value.modelids || []).slice();
    this.gemeentecodes = (_value.gemeentecodes || []).slice();
    this.woonplaatsen = (_value.woonplaatsen || []).slice();
    this.straatnamen = (_value.straatnamen || []).slice();
    this.wijkcodes = (_value.wijkcodes || []).slice();
    this.buurtcodes = (_value.buurtcodes || []).slice();
    this.deelgroepids = (_value.deelgroepids || []).slice();
    this.deelcodes = (_value.deelcodes || []).slice();
    this.kwaliteit = (_value.kwaliteit || []).slice();
    this.onderhoud = (_value.onderhoud || []).slice();
    this.uitstraling = (_value.uitstraling || []).slice();
    this.doelmatigheid = (_value.doelmatigheid || []).slice();
    this.voorzieningen = (_value.voorzieningen || []).slice();
    SubObjectFilterRequest.refineValues(this);
  }
  get tijdvakid(): number | undefined {
    return this._tijdvakid;
  }
  set tijdvakid(value: number | undefined) {
    this._tijdvakid = value;
  }
  get modelids(): number[] | undefined {
    return this._modelids;
  }
  set modelids(value: number[] | undefined) {
    this._modelids = value;
  }
  get gemeentecodes(): number[] | undefined {
    return this._gemeentecodes;
  }
  set gemeentecodes(value: number[] | undefined) {
    this._gemeentecodes = value;
  }
  get woonplaatsen(): string[] | undefined {
    return this._woonplaatsen;
  }
  set woonplaatsen(value: string[] | undefined) {
    this._woonplaatsen = value;
  }
  get straatnamen(): string[] | undefined {
    return this._straatnamen;
  }
  set straatnamen(value: string[] | undefined) {
    this._straatnamen = value;
  }
  get wijkcodes(): string[] | undefined {
    return this._wijkcodes;
  }
  set wijkcodes(value: string[] | undefined) {
    this._wijkcodes = value;
  }
  get buurtcodes(): string[] | undefined {
    return this._buurtcodes;
  }
  set buurtcodes(value: string[] | undefined) {
    this._buurtcodes = value;
  }
  get deelgroepids(): number[] | undefined {
    return this._deelgroepids;
  }
  set deelgroepids(value: number[] | undefined) {
    this._deelgroepids = value;
  }
  get deelcodes(): string[] | undefined {
    return this._deelcodes;
  }
  set deelcodes(value: string[] | undefined) {
    this._deelcodes = value;
  }
  get kwaliteit(): string[] | undefined {
    return this._kwaliteit;
  }
  set kwaliteit(value: string[] | undefined) {
    this._kwaliteit = value;
  }
  get onderhoud(): string[] | undefined {
    return this._onderhoud;
  }
  set onderhoud(value: string[] | undefined) {
    this._onderhoud = value;
  }
  get uitstraling(): string[] | undefined {
    return this._uitstraling;
  }
  set uitstraling(value: string[] | undefined) {
    this._uitstraling = value;
  }
  get doelmatigheid(): string[] | undefined {
    return this._doelmatigheid;
  }
  set doelmatigheid(value: string[] | undefined) {
    this._doelmatigheid = value;
  }
  get voorzieningen(): string[] | undefined {
    return this._voorzieningen;
  }
  set voorzieningen(value: string[] | undefined) {
    this._voorzieningen = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SubObjectFilterRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SubObjectFilterRequest.AsObject {
    return {
      tijdvakid: this.tijdvakid,
      modelids: (this.modelids || []).slice(),
      gemeentecodes: (this.gemeentecodes || []).slice(),
      woonplaatsen: (this.woonplaatsen || []).slice(),
      straatnamen: (this.straatnamen || []).slice(),
      wijkcodes: (this.wijkcodes || []).slice(),
      buurtcodes: (this.buurtcodes || []).slice(),
      deelgroepids: (this.deelgroepids || []).slice(),
      deelcodes: (this.deelcodes || []).slice(),
      kwaliteit: (this.kwaliteit || []).slice(),
      onderhoud: (this.onderhoud || []).slice(),
      uitstraling: (this.uitstraling || []).slice(),
      doelmatigheid: (this.doelmatigheid || []).slice(),
      voorzieningen: (this.voorzieningen || []).slice()
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
  ): SubObjectFilterRequest.AsProtobufJSON {
    return {
      tijdvakid: this.tijdvakid,
      modelids: (this.modelids || []).slice(),
      gemeentecodes: (this.gemeentecodes || []).slice(),
      woonplaatsen: (this.woonplaatsen || []).slice(),
      straatnamen: (this.straatnamen || []).slice(),
      wijkcodes: (this.wijkcodes || []).slice(),
      buurtcodes: (this.buurtcodes || []).slice(),
      deelgroepids: (this.deelgroepids || []).slice(),
      deelcodes: (this.deelcodes || []).slice(),
      kwaliteit: (this.kwaliteit || []).slice(),
      onderhoud: (this.onderhoud || []).slice(),
      uitstraling: (this.uitstraling || []).slice(),
      doelmatigheid: (this.doelmatigheid || []).slice(),
      voorzieningen: (this.voorzieningen || []).slice()
    };
  }
}
export module SubObjectFilterRequest {
  /**
   * Standard JavaScript object representation for SubObjectFilterRequest
   */
  export interface AsObject {
    tijdvakid?: number;
    modelids?: number[];
    gemeentecodes?: number[];
    woonplaatsen?: string[];
    straatnamen?: string[];
    wijkcodes?: string[];
    buurtcodes?: string[];
    deelgroepids?: number[];
    deelcodes?: string[];
    kwaliteit?: string[];
    onderhoud?: string[];
    uitstraling?: string[];
    doelmatigheid?: string[];
    voorzieningen?: string[];
  }

  /**
   * Protobuf JSON representation for SubObjectFilterRequest
   */
  export interface AsProtobufJSON {
    tijdvakid?: number;
    modelids?: number[];
    gemeentecodes?: number[];
    woonplaatsen?: string[];
    straatnamen?: string[];
    wijkcodes?: string[];
    buurtcodes?: string[];
    deelgroepids?: number[];
    deelcodes?: string[];
    kwaliteit?: string[];
    onderhoud?: string[];
    uitstraling?: string[];
    doelmatigheid?: string[];
    voorzieningen?: string[];
  }
}

/**
 * Message implementation for taxoverview.WozObjectsTaxOverviewReply
 */
export class WozObjectsTaxOverviewReply implements GrpcMessage {
  static id = 'taxoverview.WozObjectsTaxOverviewReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WozObjectsTaxOverviewReply();
    WozObjectsTaxOverviewReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WozObjectsTaxOverviewReply) {
    _instance.overviewObjects = _instance.overviewObjects || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WozObjectsTaxOverviewReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new WozObjectOverview();
          _reader.readMessage(
            messageInitializer1,
            WozObjectOverview.deserializeBinaryFromReader
          );
          (_instance.overviewObjects = _instance.overviewObjects || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    WozObjectsTaxOverviewReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WozObjectsTaxOverviewReply,
    _writer: BinaryWriter
  ) {
    if (_instance.overviewObjects && _instance.overviewObjects.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.overviewObjects as any,
        WozObjectOverview.serializeBinaryToWriter
      );
    }
  }

  private _overviewObjects?: WozObjectOverview[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WozObjectsTaxOverviewReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<WozObjectsTaxOverviewReply.AsObject>) {
    _value = _value || {};
    this.overviewObjects = (_value.overviewObjects || []).map(
      m => new WozObjectOverview(m)
    );
    WozObjectsTaxOverviewReply.refineValues(this);
  }
  get overviewObjects(): WozObjectOverview[] | undefined {
    return this._overviewObjects;
  }
  set overviewObjects(value: WozObjectOverview[] | undefined) {
    this._overviewObjects = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WozObjectsTaxOverviewReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WozObjectsTaxOverviewReply.AsObject {
    return {
      overviewObjects: (this.overviewObjects || []).map(m => m.toObject())
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
  ): WozObjectsTaxOverviewReply.AsProtobufJSON {
    return {
      overviewObjects: (this.overviewObjects || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module WozObjectsTaxOverviewReply {
  /**
   * Standard JavaScript object representation for WozObjectsTaxOverviewReply
   */
  export interface AsObject {
    overviewObjects?: WozObjectOverview.AsObject[];
  }

  /**
   * Protobuf JSON representation for WozObjectsTaxOverviewReply
   */
  export interface AsProtobufJSON {
    overviewObjects?: WozObjectOverview.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for taxoverview.WozObjectOverview
 */
export class WozObjectOverview implements GrpcMessage {
  static id = 'taxoverview.WozObjectOverview';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WozObjectOverview();
    WozObjectOverview.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WozObjectOverview) {
    _instance.tijdvakid = _instance.tijdvakid || 0;
    _instance.wozobjectnummer = _instance.wozobjectnummer || '0';
    _instance.lat = _instance.lat || undefined;
    _instance.lon = _instance.lon || undefined;
    _instance.gemeentecode = _instance.gemeentecode || 0;
    _instance.straatnaam = _instance.straatnaam || undefined;
    _instance.huisnummer = _instance.huisnummer || 0;
    _instance.huisletter = _instance.huisletter || undefined;
    _instance.huisnummertoevoeging =
      _instance.huisnummertoevoeging || undefined;
    _instance.postcode = _instance.postcode || undefined;
    _instance.wijkcode = _instance.wijkcode || undefined;
    _instance.buurtcode = _instance.buurtcode || undefined;
    _instance.woonplaatsnaam = _instance.woonplaatsnaam || undefined;
    _instance.locatieomschrijving = _instance.locatieomschrijving || undefined;
    _instance.soortobjectcode = _instance.soortobjectcode || undefined;
    _instance.indicatieligging = _instance.indicatieligging || undefined;
    _instance.groepaanduiding = _instance.groepaanduiding || undefined;
    _instance.aanduidingbouwstroom =
      _instance.aanduidingbouwstroom || undefined;
    _instance.statuswozobject = _instance.statuswozobject || undefined;
    _instance.waardegebied = _instance.waardegebied || undefined;
    _instance.model = _instance.model || undefined;
    _instance.woninh = _instance.woninh || 0;
    _instance.wonopp = _instance.wonopp || 0;
    _instance.grondopp = _instance.grondopp || 0;
    _instance.aanbouwopp = _instance.aanbouwopp || 0;
    _instance.schuuropp = _instance.schuuropp || 0;
    _instance.garageopp = _instance.garageopp || 0;
    _instance.bouwjaar = _instance.bouwjaar || 0;
    _instance.kwaliteit = _instance.kwaliteit || undefined;
    _instance.onderhoud = _instance.onderhoud || undefined;
    _instance.uitstraling = _instance.uitstraling || undefined;
    _instance.doelmatigheid = _instance.doelmatigheid || undefined;
    _instance.voorzieningen = _instance.voorzieningen || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WozObjectOverview,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.tijdvakid = _reader.readInt32();
          break;
        case 2:
          _instance.wozobjectnummer = _reader.readInt64String();
          break;
        case 3:
          _instance.lat = new googleProtobuf000.DoubleValue();
          _reader.readMessage(
            _instance.lat,
            googleProtobuf000.DoubleValue.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.lon = new googleProtobuf000.DoubleValue();
          _reader.readMessage(
            _instance.lon,
            googleProtobuf000.DoubleValue.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.gemeentecode = _reader.readInt32();
          break;
        case 6:
          _instance.straatnaam = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.straatnaam,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.huisnummer = _reader.readInt32();
          break;
        case 8:
          _instance.huisletter = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.huisletter,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.huisnummertoevoeging = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.huisnummertoevoeging,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.postcode = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.postcode,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.wijkcode = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.wijkcode,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.buurtcode = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.buurtcode,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 13:
          _instance.woonplaatsnaam = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.woonplaatsnaam,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 14:
          _instance.locatieomschrijving = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.locatieomschrijving,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 15:
          _instance.soortobjectcode = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.soortobjectcode,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.indicatieligging = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.indicatieligging,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 17:
          _instance.groepaanduiding = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.groepaanduiding,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 18:
          _instance.aanduidingbouwstroom = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.aanduidingbouwstroom,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 19:
          _instance.statuswozobject = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.statuswozobject,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 20:
          _instance.waardegebied = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.waardegebied,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 21:
          _instance.model = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.model,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 22:
          _instance.woninh = _reader.readInt32();
          break;
        case 23:
          _instance.wonopp = _reader.readInt32();
          break;
        case 24:
          _instance.grondopp = _reader.readInt32();
          break;
        case 25:
          _instance.aanbouwopp = _reader.readInt32();
          break;
        case 26:
          _instance.schuuropp = _reader.readInt32();
          break;
        case 27:
          _instance.garageopp = _reader.readInt32();
          break;
        case 28:
          _instance.bouwjaar = _reader.readInt32();
          break;
        case 29:
          _instance.kwaliteit = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.kwaliteit,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 30:
          _instance.onderhoud = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.onderhoud,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 31:
          _instance.uitstraling = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.uitstraling,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 32:
          _instance.doelmatigheid = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.doelmatigheid,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 33:
          _instance.voorzieningen = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.voorzieningen,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    WozObjectOverview.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WozObjectOverview,
    _writer: BinaryWriter
  ) {
    if (_instance.tijdvakid) {
      _writer.writeInt32(1, _instance.tijdvakid);
    }
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(2, _instance.wozobjectnummer);
    }
    if (_instance.lat) {
      _writer.writeMessage(
        3,
        _instance.lat as any,
        googleProtobuf000.DoubleValue.serializeBinaryToWriter
      );
    }
    if (_instance.lon) {
      _writer.writeMessage(
        4,
        _instance.lon as any,
        googleProtobuf000.DoubleValue.serializeBinaryToWriter
      );
    }
    if (_instance.gemeentecode) {
      _writer.writeInt32(5, _instance.gemeentecode);
    }
    if (_instance.straatnaam) {
      _writer.writeMessage(
        6,
        _instance.straatnaam as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.huisnummer) {
      _writer.writeInt32(7, _instance.huisnummer);
    }
    if (_instance.huisletter) {
      _writer.writeMessage(
        8,
        _instance.huisletter as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.huisnummertoevoeging) {
      _writer.writeMessage(
        9,
        _instance.huisnummertoevoeging as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.postcode) {
      _writer.writeMessage(
        10,
        _instance.postcode as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.wijkcode) {
      _writer.writeMessage(
        11,
        _instance.wijkcode as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.buurtcode) {
      _writer.writeMessage(
        12,
        _instance.buurtcode as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.woonplaatsnaam) {
      _writer.writeMessage(
        13,
        _instance.woonplaatsnaam as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.locatieomschrijving) {
      _writer.writeMessage(
        14,
        _instance.locatieomschrijving as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.soortobjectcode) {
      _writer.writeMessage(
        15,
        _instance.soortobjectcode as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.indicatieligging) {
      _writer.writeMessage(
        16,
        _instance.indicatieligging as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.groepaanduiding) {
      _writer.writeMessage(
        17,
        _instance.groepaanduiding as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.aanduidingbouwstroom) {
      _writer.writeMessage(
        18,
        _instance.aanduidingbouwstroom as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.statuswozobject) {
      _writer.writeMessage(
        19,
        _instance.statuswozobject as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.waardegebied) {
      _writer.writeMessage(
        20,
        _instance.waardegebied as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.model) {
      _writer.writeMessage(
        21,
        _instance.model as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.woninh) {
      _writer.writeInt32(22, _instance.woninh);
    }
    if (_instance.wonopp) {
      _writer.writeInt32(23, _instance.wonopp);
    }
    if (_instance.grondopp) {
      _writer.writeInt32(24, _instance.grondopp);
    }
    if (_instance.aanbouwopp) {
      _writer.writeInt32(25, _instance.aanbouwopp);
    }
    if (_instance.schuuropp) {
      _writer.writeInt32(26, _instance.schuuropp);
    }
    if (_instance.garageopp) {
      _writer.writeInt32(27, _instance.garageopp);
    }
    if (_instance.bouwjaar) {
      _writer.writeInt32(28, _instance.bouwjaar);
    }
    if (_instance.kwaliteit) {
      _writer.writeMessage(
        29,
        _instance.kwaliteit as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.onderhoud) {
      _writer.writeMessage(
        30,
        _instance.onderhoud as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.uitstraling) {
      _writer.writeMessage(
        31,
        _instance.uitstraling as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.doelmatigheid) {
      _writer.writeMessage(
        32,
        _instance.doelmatigheid as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.voorzieningen) {
      _writer.writeMessage(
        33,
        _instance.voorzieningen as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
  }

  private _tijdvakid?: number;
  private _wozobjectnummer?: string;
  private _lat?: googleProtobuf000.DoubleValue;
  private _lon?: googleProtobuf000.DoubleValue;
  private _gemeentecode?: number;
  private _straatnaam?: googleProtobuf000.StringValue;
  private _huisnummer?: number;
  private _huisletter?: googleProtobuf000.StringValue;
  private _huisnummertoevoeging?: googleProtobuf000.StringValue;
  private _postcode?: googleProtobuf000.StringValue;
  private _wijkcode?: googleProtobuf000.StringValue;
  private _buurtcode?: googleProtobuf000.StringValue;
  private _woonplaatsnaam?: googleProtobuf000.StringValue;
  private _locatieomschrijving?: googleProtobuf000.StringValue;
  private _soortobjectcode?: googleProtobuf000.StringValue;
  private _indicatieligging?: googleProtobuf000.StringValue;
  private _groepaanduiding?: googleProtobuf000.StringValue;
  private _aanduidingbouwstroom?: googleProtobuf000.StringValue;
  private _statuswozobject?: googleProtobuf000.StringValue;
  private _waardegebied?: googleProtobuf000.StringValue;
  private _model?: googleProtobuf000.StringValue;
  private _woninh?: number;
  private _wonopp?: number;
  private _grondopp?: number;
  private _aanbouwopp?: number;
  private _schuuropp?: number;
  private _garageopp?: number;
  private _bouwjaar?: number;
  private _kwaliteit?: googleProtobuf000.StringValue;
  private _onderhoud?: googleProtobuf000.StringValue;
  private _uitstraling?: googleProtobuf000.StringValue;
  private _doelmatigheid?: googleProtobuf000.StringValue;
  private _voorzieningen?: googleProtobuf000.StringValue;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WozObjectOverview to deeply clone from
   */
  constructor(_value?: RecursivePartial<WozObjectOverview.AsObject>) {
    _value = _value || {};
    this.tijdvakid = _value.tijdvakid;
    this.wozobjectnummer = _value.wozobjectnummer;
    this.lat = _value.lat
      ? new googleProtobuf000.DoubleValue(_value.lat)
      : undefined;
    this.lon = _value.lon
      ? new googleProtobuf000.DoubleValue(_value.lon)
      : undefined;
    this.gemeentecode = _value.gemeentecode;
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
    this.wijkcode = _value.wijkcode
      ? new googleProtobuf000.StringValue(_value.wijkcode)
      : undefined;
    this.buurtcode = _value.buurtcode
      ? new googleProtobuf000.StringValue(_value.buurtcode)
      : undefined;
    this.woonplaatsnaam = _value.woonplaatsnaam
      ? new googleProtobuf000.StringValue(_value.woonplaatsnaam)
      : undefined;
    this.locatieomschrijving = _value.locatieomschrijving
      ? new googleProtobuf000.StringValue(_value.locatieomschrijving)
      : undefined;
    this.soortobjectcode = _value.soortobjectcode
      ? new googleProtobuf000.StringValue(_value.soortobjectcode)
      : undefined;
    this.indicatieligging = _value.indicatieligging
      ? new googleProtobuf000.StringValue(_value.indicatieligging)
      : undefined;
    this.groepaanduiding = _value.groepaanduiding
      ? new googleProtobuf000.StringValue(_value.groepaanduiding)
      : undefined;
    this.aanduidingbouwstroom = _value.aanduidingbouwstroom
      ? new googleProtobuf000.StringValue(_value.aanduidingbouwstroom)
      : undefined;
    this.statuswozobject = _value.statuswozobject
      ? new googleProtobuf000.StringValue(_value.statuswozobject)
      : undefined;
    this.waardegebied = _value.waardegebied
      ? new googleProtobuf000.StringValue(_value.waardegebied)
      : undefined;
    this.model = _value.model
      ? new googleProtobuf000.StringValue(_value.model)
      : undefined;
    this.woninh = _value.woninh;
    this.wonopp = _value.wonopp;
    this.grondopp = _value.grondopp;
    this.aanbouwopp = _value.aanbouwopp;
    this.schuuropp = _value.schuuropp;
    this.garageopp = _value.garageopp;
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
    WozObjectOverview.refineValues(this);
  }
  get tijdvakid(): number | undefined {
    return this._tijdvakid;
  }
  set tijdvakid(value: number | undefined) {
    this._tijdvakid = value;
  }
  get wozobjectnummer(): string | undefined {
    return this._wozobjectnummer;
  }
  set wozobjectnummer(value: string | undefined) {
    this._wozobjectnummer = value;
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
  get gemeentecode(): number | undefined {
    return this._gemeentecode;
  }
  set gemeentecode(value: number | undefined) {
    this._gemeentecode = value;
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
  get woonplaatsnaam(): googleProtobuf000.StringValue | undefined {
    return this._woonplaatsnaam;
  }
  set woonplaatsnaam(value: googleProtobuf000.StringValue | undefined) {
    this._woonplaatsnaam = value;
  }
  get locatieomschrijving(): googleProtobuf000.StringValue | undefined {
    return this._locatieomschrijving;
  }
  set locatieomschrijving(value: googleProtobuf000.StringValue | undefined) {
    this._locatieomschrijving = value;
  }
  get soortobjectcode(): googleProtobuf000.StringValue | undefined {
    return this._soortobjectcode;
  }
  set soortobjectcode(value: googleProtobuf000.StringValue | undefined) {
    this._soortobjectcode = value;
  }
  get indicatieligging(): googleProtobuf000.StringValue | undefined {
    return this._indicatieligging;
  }
  set indicatieligging(value: googleProtobuf000.StringValue | undefined) {
    this._indicatieligging = value;
  }
  get groepaanduiding(): googleProtobuf000.StringValue | undefined {
    return this._groepaanduiding;
  }
  set groepaanduiding(value: googleProtobuf000.StringValue | undefined) {
    this._groepaanduiding = value;
  }
  get aanduidingbouwstroom(): googleProtobuf000.StringValue | undefined {
    return this._aanduidingbouwstroom;
  }
  set aanduidingbouwstroom(value: googleProtobuf000.StringValue | undefined) {
    this._aanduidingbouwstroom = value;
  }
  get statuswozobject(): googleProtobuf000.StringValue | undefined {
    return this._statuswozobject;
  }
  set statuswozobject(value: googleProtobuf000.StringValue | undefined) {
    this._statuswozobject = value;
  }
  get waardegebied(): googleProtobuf000.StringValue | undefined {
    return this._waardegebied;
  }
  set waardegebied(value: googleProtobuf000.StringValue | undefined) {
    this._waardegebied = value;
  }
  get model(): googleProtobuf000.StringValue | undefined {
    return this._model;
  }
  set model(value: googleProtobuf000.StringValue | undefined) {
    this._model = value;
  }
  get woninh(): number | undefined {
    return this._woninh;
  }
  set woninh(value: number | undefined) {
    this._woninh = value;
  }
  get wonopp(): number | undefined {
    return this._wonopp;
  }
  set wonopp(value: number | undefined) {
    this._wonopp = value;
  }
  get grondopp(): number | undefined {
    return this._grondopp;
  }
  set grondopp(value: number | undefined) {
    this._grondopp = value;
  }
  get aanbouwopp(): number | undefined {
    return this._aanbouwopp;
  }
  set aanbouwopp(value: number | undefined) {
    this._aanbouwopp = value;
  }
  get schuuropp(): number | undefined {
    return this._schuuropp;
  }
  set schuuropp(value: number | undefined) {
    this._schuuropp = value;
  }
  get garageopp(): number | undefined {
    return this._garageopp;
  }
  set garageopp(value: number | undefined) {
    this._garageopp = value;
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WozObjectOverview.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WozObjectOverview.AsObject {
    return {
      tijdvakid: this.tijdvakid,
      wozobjectnummer: this.wozobjectnummer,
      lat: this.lat ? this.lat.toObject() : undefined,
      lon: this.lon ? this.lon.toObject() : undefined,
      gemeentecode: this.gemeentecode,
      straatnaam: this.straatnaam ? this.straatnaam.toObject() : undefined,
      huisnummer: this.huisnummer,
      huisletter: this.huisletter ? this.huisletter.toObject() : undefined,
      huisnummertoevoeging: this.huisnummertoevoeging
        ? this.huisnummertoevoeging.toObject()
        : undefined,
      postcode: this.postcode ? this.postcode.toObject() : undefined,
      wijkcode: this.wijkcode ? this.wijkcode.toObject() : undefined,
      buurtcode: this.buurtcode ? this.buurtcode.toObject() : undefined,
      woonplaatsnaam: this.woonplaatsnaam
        ? this.woonplaatsnaam.toObject()
        : undefined,
      locatieomschrijving: this.locatieomschrijving
        ? this.locatieomschrijving.toObject()
        : undefined,
      soortobjectcode: this.soortobjectcode
        ? this.soortobjectcode.toObject()
        : undefined,
      indicatieligging: this.indicatieligging
        ? this.indicatieligging.toObject()
        : undefined,
      groepaanduiding: this.groepaanduiding
        ? this.groepaanduiding.toObject()
        : undefined,
      aanduidingbouwstroom: this.aanduidingbouwstroom
        ? this.aanduidingbouwstroom.toObject()
        : undefined,
      statuswozobject: this.statuswozobject
        ? this.statuswozobject.toObject()
        : undefined,
      waardegebied: this.waardegebied
        ? this.waardegebied.toObject()
        : undefined,
      model: this.model ? this.model.toObject() : undefined,
      woninh: this.woninh,
      wonopp: this.wonopp,
      grondopp: this.grondopp,
      aanbouwopp: this.aanbouwopp,
      schuuropp: this.schuuropp,
      garageopp: this.garageopp,
      bouwjaar: this.bouwjaar,
      kwaliteit: this.kwaliteit ? this.kwaliteit.toObject() : undefined,
      onderhoud: this.onderhoud ? this.onderhoud.toObject() : undefined,
      uitstraling: this.uitstraling ? this.uitstraling.toObject() : undefined,
      doelmatigheid: this.doelmatigheid
        ? this.doelmatigheid.toObject()
        : undefined,
      voorzieningen: this.voorzieningen
        ? this.voorzieningen.toObject()
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
  ): WozObjectOverview.AsProtobufJSON {
    return {
      tijdvakid: this.tijdvakid,
      wozobjectnummer: this.wozobjectnummer,
      lat: this.lat ? this.lat.toProtobufJSON(options) : null,
      lon: this.lon ? this.lon.toProtobufJSON(options) : null,
      gemeentecode: this.gemeentecode,
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
      wijkcode: this.wijkcode ? this.wijkcode.toProtobufJSON(options) : null,
      buurtcode: this.buurtcode ? this.buurtcode.toProtobufJSON(options) : null,
      woonplaatsnaam: this.woonplaatsnaam
        ? this.woonplaatsnaam.toProtobufJSON(options)
        : null,
      locatieomschrijving: this.locatieomschrijving
        ? this.locatieomschrijving.toProtobufJSON(options)
        : null,
      soortobjectcode: this.soortobjectcode
        ? this.soortobjectcode.toProtobufJSON(options)
        : null,
      indicatieligging: this.indicatieligging
        ? this.indicatieligging.toProtobufJSON(options)
        : null,
      groepaanduiding: this.groepaanduiding
        ? this.groepaanduiding.toProtobufJSON(options)
        : null,
      aanduidingbouwstroom: this.aanduidingbouwstroom
        ? this.aanduidingbouwstroom.toProtobufJSON(options)
        : null,
      statuswozobject: this.statuswozobject
        ? this.statuswozobject.toProtobufJSON(options)
        : null,
      waardegebied: this.waardegebied
        ? this.waardegebied.toProtobufJSON(options)
        : null,
      model: this.model ? this.model.toProtobufJSON(options) : null,
      woninh: this.woninh,
      wonopp: this.wonopp,
      grondopp: this.grondopp,
      aanbouwopp: this.aanbouwopp,
      schuuropp: this.schuuropp,
      garageopp: this.garageopp,
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
        : null
    };
  }
}
export module WozObjectOverview {
  /**
   * Standard JavaScript object representation for WozObjectOverview
   */
  export interface AsObject {
    tijdvakid?: number;
    wozobjectnummer?: string;
    lat?: googleProtobuf000.DoubleValue.AsObject;
    lon?: googleProtobuf000.DoubleValue.AsObject;
    gemeentecode?: number;
    straatnaam?: googleProtobuf000.StringValue.AsObject;
    huisnummer?: number;
    huisletter?: googleProtobuf000.StringValue.AsObject;
    huisnummertoevoeging?: googleProtobuf000.StringValue.AsObject;
    postcode?: googleProtobuf000.StringValue.AsObject;
    wijkcode?: googleProtobuf000.StringValue.AsObject;
    buurtcode?: googleProtobuf000.StringValue.AsObject;
    woonplaatsnaam?: googleProtobuf000.StringValue.AsObject;
    locatieomschrijving?: googleProtobuf000.StringValue.AsObject;
    soortobjectcode?: googleProtobuf000.StringValue.AsObject;
    indicatieligging?: googleProtobuf000.StringValue.AsObject;
    groepaanduiding?: googleProtobuf000.StringValue.AsObject;
    aanduidingbouwstroom?: googleProtobuf000.StringValue.AsObject;
    statuswozobject?: googleProtobuf000.StringValue.AsObject;
    waardegebied?: googleProtobuf000.StringValue.AsObject;
    model?: googleProtobuf000.StringValue.AsObject;
    woninh?: number;
    wonopp?: number;
    grondopp?: number;
    aanbouwopp?: number;
    schuuropp?: number;
    garageopp?: number;
    bouwjaar?: number;
    kwaliteit?: googleProtobuf000.StringValue.AsObject;
    onderhoud?: googleProtobuf000.StringValue.AsObject;
    uitstraling?: googleProtobuf000.StringValue.AsObject;
    doelmatigheid?: googleProtobuf000.StringValue.AsObject;
    voorzieningen?: googleProtobuf000.StringValue.AsObject;
  }

  /**
   * Protobuf JSON representation for WozObjectOverview
   */
  export interface AsProtobufJSON {
    tijdvakid?: number;
    wozobjectnummer?: string;
    lat?: googleProtobuf000.DoubleValue.AsProtobufJSON | null;
    lon?: googleProtobuf000.DoubleValue.AsProtobufJSON | null;
    gemeentecode?: number;
    straatnaam?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    huisnummer?: number;
    huisletter?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    huisnummertoevoeging?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    postcode?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    wijkcode?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    buurtcode?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    woonplaatsnaam?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    locatieomschrijving?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    soortobjectcode?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    indicatieligging?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    groepaanduiding?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    aanduidingbouwstroom?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    statuswozobject?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    waardegebied?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    model?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    woninh?: number;
    wonopp?: number;
    grondopp?: number;
    aanbouwopp?: number;
    schuuropp?: number;
    garageopp?: number;
    bouwjaar?: number;
    kwaliteit?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    onderhoud?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    uitstraling?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    doelmatigheid?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    voorzieningen?: googleProtobuf000.StringValue.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for taxoverview.SubObjectsTaxOverviewReply
 */
export class SubObjectsTaxOverviewReply implements GrpcMessage {
  static id = 'taxoverview.SubObjectsTaxOverviewReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SubObjectsTaxOverviewReply();
    SubObjectsTaxOverviewReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SubObjectsTaxOverviewReply) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SubObjectsTaxOverviewReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    SubObjectsTaxOverviewReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SubObjectsTaxOverviewReply,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SubObjectsTaxOverviewReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<SubObjectsTaxOverviewReply.AsObject>) {
    _value = _value || {};
    SubObjectsTaxOverviewReply.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SubObjectsTaxOverviewReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SubObjectsTaxOverviewReply.AsObject {
    return {};
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
  ): SubObjectsTaxOverviewReply.AsProtobufJSON {
    return {};
  }
}
export module SubObjectsTaxOverviewReply {
  /**
   * Standard JavaScript object representation for SubObjectsTaxOverviewReply
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for SubObjectsTaxOverviewReply
   */
  export interface AsProtobufJSON {}
}
