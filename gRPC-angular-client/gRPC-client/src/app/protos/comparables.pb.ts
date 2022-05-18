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
import * as columndefinitions001 from './columndefinition.pb';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as overviewrequests003 from './overviewrequests.pb';
import * as transactions004 from './transactions.pb';
/**
 * Message implementation for comparables.Comparables
 */
export class Comparables implements GrpcMessage {
  static id = 'comparables.Comparables';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Comparables();
    Comparables.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Comparables) {
    _instance.taxid = _instance.taxid || '0';
    _instance.wozobjectnummer = _instance.wozobjectnummer || '0';
    _instance.prijspeilid = _instance.prijspeilid || '0';
    _instance.comparableObjects = _instance.comparableObjects || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Comparables,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.taxid = _reader.readInt64String();
          break;
        case 2:
          _instance.wozobjectnummer = _reader.readInt64String();
          break;
        case 3:
          _instance.prijspeilid = _reader.readInt64String();
          break;
        case 4:
          const messageInitializer4 = new ComparableObject();
          _reader.readMessage(
            messageInitializer4,
            ComparableObject.deserializeBinaryFromReader
          );
          (_instance.comparableObjects =
            _instance.comparableObjects || []).push(messageInitializer4);
          break;
        default:
          _reader.skipField();
      }
    }

    Comparables.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Comparables,
    _writer: BinaryWriter
  ) {
    if (_instance.taxid) {
      _writer.writeInt64String(1, _instance.taxid);
    }
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(2, _instance.wozobjectnummer);
    }
    if (_instance.prijspeilid) {
      _writer.writeInt64String(3, _instance.prijspeilid);
    }
    if (_instance.comparableObjects && _instance.comparableObjects.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.comparableObjects as any,
        ComparableObject.serializeBinaryToWriter
      );
    }
  }

  private _taxid?: string;
  private _wozobjectnummer?: string;
  private _prijspeilid?: string;
  private _comparableObjects?: ComparableObject[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Comparables to deeply clone from
   */
  constructor(_value?: RecursivePartial<Comparables.AsObject>) {
    _value = _value || {};
    this.taxid = _value.taxid;
    this.wozobjectnummer = _value.wozobjectnummer;
    this.prijspeilid = _value.prijspeilid;
    this.comparableObjects = (_value.comparableObjects || []).map(
      m => new ComparableObject(m)
    );
    Comparables.refineValues(this);
  }
  get taxid(): string | undefined {
    return this._taxid;
  }
  set taxid(value: string | undefined) {
    this._taxid = value;
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
  get comparableObjects(): ComparableObject[] | undefined {
    return this._comparableObjects;
  }
  set comparableObjects(value: ComparableObject[] | undefined) {
    this._comparableObjects = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Comparables.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Comparables.AsObject {
    return {
      taxid: this.taxid,
      wozobjectnummer: this.wozobjectnummer,
      prijspeilid: this.prijspeilid,
      comparableObjects: (this.comparableObjects || []).map(m => m.toObject())
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
  ): Comparables.AsProtobufJSON {
    return {
      taxid: this.taxid,
      wozobjectnummer: this.wozobjectnummer,
      prijspeilid: this.prijspeilid,
      comparableObjects: (this.comparableObjects || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module Comparables {
  /**
   * Standard JavaScript object representation for Comparables
   */
  export interface AsObject {
    taxid?: string;
    wozobjectnummer?: string;
    prijspeilid?: string;
    comparableObjects?: ComparableObject.AsObject[];
  }

  /**
   * Protobuf JSON representation for Comparables
   */
  export interface AsProtobufJSON {
    taxid?: string;
    wozobjectnummer?: string;
    prijspeilid?: string;
    comparableObjects?: ComparableObject.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for comparables.ComparableObject
 */
export class ComparableObject implements GrpcMessage {
  static id = 'comparables.ComparableObject';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ComparableObject();
    ComparableObject.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ComparableObject) {
    _instance.transaction = _instance.transaction || undefined;
    _instance.selected = _instance.selected || false;
    _instance.totalScore = _instance.totalScore || 0;
    _instance.afstandScore = _instance.afstandScore || 0;
    _instance.wonOppScore = _instance.wonOppScore || 0;
    _instance.aanbouwOppScore = _instance.aanbouwOppScore || 0;
    _instance.kavelOppScore = _instance.kavelOppScore || 0;
    _instance.transactieDatumScore = _instance.transactieDatumScore || 0;
    _instance.objectTypeScore = _instance.objectTypeScore || 0;
    _instance.bijgebouwenScore = _instance.bijgebouwenScore || 0;
    _instance.bouwjaarScore = _instance.bouwjaarScore || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ComparableObject,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.transaction = new transactions004.Transaction();
          _reader.readMessage(
            _instance.transaction,
            transactions004.Transaction.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.selected = _reader.readBool();
          break;
        case 3:
          _instance.totalScore = _reader.readDouble();
          break;
        case 4:
          _instance.afstandScore = _reader.readDouble();
          break;
        case 5:
          _instance.wonOppScore = _reader.readDouble();
          break;
        case 6:
          _instance.aanbouwOppScore = _reader.readDouble();
          break;
        case 7:
          _instance.kavelOppScore = _reader.readDouble();
          break;
        case 8:
          _instance.transactieDatumScore = _reader.readDouble();
          break;
        case 9:
          _instance.objectTypeScore = _reader.readDouble();
          break;
        case 10:
          _instance.bijgebouwenScore = _reader.readDouble();
          break;
        case 11:
          _instance.bouwjaarScore = _reader.readDouble();
          break;
        default:
          _reader.skipField();
      }
    }

    ComparableObject.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ComparableObject,
    _writer: BinaryWriter
  ) {
    if (_instance.transaction) {
      _writer.writeMessage(
        1,
        _instance.transaction as any,
        transactions004.Transaction.serializeBinaryToWriter
      );
    }
    if (_instance.selected) {
      _writer.writeBool(2, _instance.selected);
    }
    if (_instance.totalScore) {
      _writer.writeDouble(3, _instance.totalScore);
    }
    if (_instance.afstandScore) {
      _writer.writeDouble(4, _instance.afstandScore);
    }
    if (_instance.wonOppScore) {
      _writer.writeDouble(5, _instance.wonOppScore);
    }
    if (_instance.aanbouwOppScore) {
      _writer.writeDouble(6, _instance.aanbouwOppScore);
    }
    if (_instance.kavelOppScore) {
      _writer.writeDouble(7, _instance.kavelOppScore);
    }
    if (_instance.transactieDatumScore) {
      _writer.writeDouble(8, _instance.transactieDatumScore);
    }
    if (_instance.objectTypeScore) {
      _writer.writeDouble(9, _instance.objectTypeScore);
    }
    if (_instance.bijgebouwenScore) {
      _writer.writeDouble(10, _instance.bijgebouwenScore);
    }
    if (_instance.bouwjaarScore) {
      _writer.writeDouble(11, _instance.bouwjaarScore);
    }
  }

  private _transaction?: transactions004.Transaction;
  private _selected?: boolean;
  private _totalScore?: number;
  private _afstandScore?: number;
  private _wonOppScore?: number;
  private _aanbouwOppScore?: number;
  private _kavelOppScore?: number;
  private _transactieDatumScore?: number;
  private _objectTypeScore?: number;
  private _bijgebouwenScore?: number;
  private _bouwjaarScore?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ComparableObject to deeply clone from
   */
  constructor(_value?: RecursivePartial<ComparableObject.AsObject>) {
    _value = _value || {};
    this.transaction = _value.transaction
      ? new transactions004.Transaction(_value.transaction)
      : undefined;
    this.selected = _value.selected;
    this.totalScore = _value.totalScore;
    this.afstandScore = _value.afstandScore;
    this.wonOppScore = _value.wonOppScore;
    this.aanbouwOppScore = _value.aanbouwOppScore;
    this.kavelOppScore = _value.kavelOppScore;
    this.transactieDatumScore = _value.transactieDatumScore;
    this.objectTypeScore = _value.objectTypeScore;
    this.bijgebouwenScore = _value.bijgebouwenScore;
    this.bouwjaarScore = _value.bouwjaarScore;
    ComparableObject.refineValues(this);
  }
  get transaction(): transactions004.Transaction | undefined {
    return this._transaction;
  }
  set transaction(value: transactions004.Transaction | undefined) {
    this._transaction = value;
  }
  get selected(): boolean | undefined {
    return this._selected;
  }
  set selected(value: boolean | undefined) {
    this._selected = value;
  }
  get totalScore(): number | undefined {
    return this._totalScore;
  }
  set totalScore(value: number | undefined) {
    this._totalScore = value;
  }
  get afstandScore(): number | undefined {
    return this._afstandScore;
  }
  set afstandScore(value: number | undefined) {
    this._afstandScore = value;
  }
  get wonOppScore(): number | undefined {
    return this._wonOppScore;
  }
  set wonOppScore(value: number | undefined) {
    this._wonOppScore = value;
  }
  get aanbouwOppScore(): number | undefined {
    return this._aanbouwOppScore;
  }
  set aanbouwOppScore(value: number | undefined) {
    this._aanbouwOppScore = value;
  }
  get kavelOppScore(): number | undefined {
    return this._kavelOppScore;
  }
  set kavelOppScore(value: number | undefined) {
    this._kavelOppScore = value;
  }
  get transactieDatumScore(): number | undefined {
    return this._transactieDatumScore;
  }
  set transactieDatumScore(value: number | undefined) {
    this._transactieDatumScore = value;
  }
  get objectTypeScore(): number | undefined {
    return this._objectTypeScore;
  }
  set objectTypeScore(value: number | undefined) {
    this._objectTypeScore = value;
  }
  get bijgebouwenScore(): number | undefined {
    return this._bijgebouwenScore;
  }
  set bijgebouwenScore(value: number | undefined) {
    this._bijgebouwenScore = value;
  }
  get bouwjaarScore(): number | undefined {
    return this._bouwjaarScore;
  }
  set bouwjaarScore(value: number | undefined) {
    this._bouwjaarScore = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ComparableObject.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ComparableObject.AsObject {
    return {
      transaction: this.transaction ? this.transaction.toObject() : undefined,
      selected: this.selected,
      totalScore: this.totalScore,
      afstandScore: this.afstandScore,
      wonOppScore: this.wonOppScore,
      aanbouwOppScore: this.aanbouwOppScore,
      kavelOppScore: this.kavelOppScore,
      transactieDatumScore: this.transactieDatumScore,
      objectTypeScore: this.objectTypeScore,
      bijgebouwenScore: this.bijgebouwenScore,
      bouwjaarScore: this.bouwjaarScore
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
  ): ComparableObject.AsProtobufJSON {
    return {
      transaction: this.transaction
        ? this.transaction.toProtobufJSON(options)
        : null,
      selected: this.selected,
      totalScore: this.totalScore,
      afstandScore: this.afstandScore,
      wonOppScore: this.wonOppScore,
      aanbouwOppScore: this.aanbouwOppScore,
      kavelOppScore: this.kavelOppScore,
      transactieDatumScore: this.transactieDatumScore,
      objectTypeScore: this.objectTypeScore,
      bijgebouwenScore: this.bijgebouwenScore,
      bouwjaarScore: this.bouwjaarScore
    };
  }
}
export module ComparableObject {
  /**
   * Standard JavaScript object representation for ComparableObject
   */
  export interface AsObject {
    transaction?: transactions004.Transaction.AsObject;
    selected?: boolean;
    totalScore?: number;
    afstandScore?: number;
    wonOppScore?: number;
    aanbouwOppScore?: number;
    kavelOppScore?: number;
    transactieDatumScore?: number;
    objectTypeScore?: number;
    bijgebouwenScore?: number;
    bouwjaarScore?: number;
  }

  /**
   * Protobuf JSON representation for ComparableObject
   */
  export interface AsProtobufJSON {
    transaction?: transactions004.Transaction.AsProtobufJSON | null;
    selected?: boolean;
    totalScore?: number;
    afstandScore?: number;
    wonOppScore?: number;
    aanbouwOppScore?: number;
    kavelOppScore?: number;
    transactieDatumScore?: number;
    objectTypeScore?: number;
    bijgebouwenScore?: number;
    bouwjaarScore?: number;
  }
}
