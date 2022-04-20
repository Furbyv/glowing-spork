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
 * Message implementation for overviewrequests.FilterRequest
 */
export class FilterRequest implements GrpcMessage {
  static id = 'overviewrequests.FilterRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FilterRequest();
    FilterRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FilterRequest) {
    _instance.startdate = _instance.startdate || undefined;
    _instance.enddate = _instance.enddate || undefined;
    _instance.tijdvakid = _instance.tijdvakid || 0;
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
    _instance: FilterRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.startdate = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.startdate,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.enddate = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.enddate,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.tijdvakid = _reader.readInt32();
          break;
        case 4:
          (_instance.gemeentecodes = _instance.gemeentecodes || []).push(
            ...(_reader.readPackedInt32() || [])
          );
          break;
        case 5:
          (_instance.woonplaatsen = _instance.woonplaatsen || []).push(
            _reader.readString()
          );
          break;
        case 6:
          (_instance.straatnamen = _instance.straatnamen || []).push(
            _reader.readString()
          );
          break;
        case 7:
          (_instance.wijkcodes = _instance.wijkcodes || []).push(
            _reader.readString()
          );
          break;
        case 8:
          (_instance.buurtcodes = _instance.buurtcodes || []).push(
            _reader.readString()
          );
          break;
        case 9:
          (_instance.soortgroepids = _instance.soortgroepids || []).push(
            ...(_reader.readPackedInt32() || [])
          );
          break;
        case 10:
          (_instance.soortobjectcodes = _instance.soortobjectcodes || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    FilterRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FilterRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.startdate) {
      _writer.writeMessage(
        1,
        _instance.startdate as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.enddate) {
      _writer.writeMessage(
        2,
        _instance.enddate as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.tijdvakid) {
      _writer.writeInt32(3, _instance.tijdvakid);
    }
    if (_instance.gemeentecodes && _instance.gemeentecodes.length) {
      _writer.writePackedInt32(4, _instance.gemeentecodes);
    }
    if (_instance.woonplaatsen && _instance.woonplaatsen.length) {
      _writer.writeRepeatedString(5, _instance.woonplaatsen);
    }
    if (_instance.straatnamen && _instance.straatnamen.length) {
      _writer.writeRepeatedString(6, _instance.straatnamen);
    }
    if (_instance.wijkcodes && _instance.wijkcodes.length) {
      _writer.writeRepeatedString(7, _instance.wijkcodes);
    }
    if (_instance.buurtcodes && _instance.buurtcodes.length) {
      _writer.writeRepeatedString(8, _instance.buurtcodes);
    }
    if (_instance.soortgroepids && _instance.soortgroepids.length) {
      _writer.writePackedInt32(9, _instance.soortgroepids);
    }
    if (_instance.soortobjectcodes && _instance.soortobjectcodes.length) {
      _writer.writeRepeatedString(10, _instance.soortobjectcodes);
    }
  }

  private _startdate?: googleProtobuf000.Timestamp;
  private _enddate?: googleProtobuf000.Timestamp;
  private _tijdvakid?: number;
  private _gemeentecodes?: number[];
  private _woonplaatsen?: string[];
  private _straatnamen?: string[];
  private _wijkcodes?: string[];
  private _buurtcodes?: string[];
  private _soortgroepids?: number[];
  private _soortobjectcodes?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FilterRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<FilterRequest.AsObject>) {
    _value = _value || {};
    this.startdate = _value.startdate
      ? new googleProtobuf000.Timestamp(_value.startdate)
      : undefined;
    this.enddate = _value.enddate
      ? new googleProtobuf000.Timestamp(_value.enddate)
      : undefined;
    this.tijdvakid = _value.tijdvakid;
    this.gemeentecodes = (_value.gemeentecodes || []).slice();
    this.woonplaatsen = (_value.woonplaatsen || []).slice();
    this.straatnamen = (_value.straatnamen || []).slice();
    this.wijkcodes = (_value.wijkcodes || []).slice();
    this.buurtcodes = (_value.buurtcodes || []).slice();
    this.soortgroepids = (_value.soortgroepids || []).slice();
    this.soortobjectcodes = (_value.soortobjectcodes || []).slice();
    FilterRequest.refineValues(this);
  }
  get startdate(): googleProtobuf000.Timestamp | undefined {
    return this._startdate;
  }
  set startdate(value: googleProtobuf000.Timestamp | undefined) {
    this._startdate = value;
  }
  get enddate(): googleProtobuf000.Timestamp | undefined {
    return this._enddate;
  }
  set enddate(value: googleProtobuf000.Timestamp | undefined) {
    this._enddate = value;
  }
  get tijdvakid(): number | undefined {
    return this._tijdvakid;
  }
  set tijdvakid(value: number | undefined) {
    this._tijdvakid = value;
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
    FilterRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FilterRequest.AsObject {
    return {
      startdate: this.startdate ? this.startdate.toObject() : undefined,
      enddate: this.enddate ? this.enddate.toObject() : undefined,
      tijdvakid: this.tijdvakid,
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
  ): FilterRequest.AsProtobufJSON {
    return {
      startdate: this.startdate ? this.startdate.toProtobufJSON(options) : null,
      enddate: this.enddate ? this.enddate.toProtobufJSON(options) : null,
      tijdvakid: this.tijdvakid,
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
export module FilterRequest {
  /**
   * Standard JavaScript object representation for FilterRequest
   */
  export interface AsObject {
    startdate?: googleProtobuf000.Timestamp.AsObject;
    enddate?: googleProtobuf000.Timestamp.AsObject;
    tijdvakid?: number;
    gemeentecodes?: number[];
    woonplaatsen?: string[];
    straatnamen?: string[];
    wijkcodes?: string[];
    buurtcodes?: string[];
    soortgroepids?: number[];
    soortobjectcodes?: string[];
  }

  /**
   * Protobuf JSON representation for FilterRequest
   */
  export interface AsProtobufJSON {
    startdate?: googleProtobuf000.Timestamp.AsProtobufJSON | null;
    enddate?: googleProtobuf000.Timestamp.AsProtobufJSON | null;
    tijdvakid?: number;
    gemeentecodes?: number[];
    woonplaatsen?: string[];
    straatnamen?: string[];
    wijkcodes?: string[];
    buurtcodes?: string[];
    soortgroepids?: number[];
    soortobjectcodes?: string[];
  }
}
