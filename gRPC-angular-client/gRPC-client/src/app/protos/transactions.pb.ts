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
import * as columndefinitions002 from './columndefinition.pb';
import * as overviewrequests003 from './overviewrequests.pb';
/**
 * Message implementation for transactions.TransactionsOverview
 */
export class TransactionsOverview implements GrpcMessage {
  static id = 'transactions.TransactionsOverview';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TransactionsOverview();
    TransactionsOverview.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TransactionsOverview) {
    _instance.overviewTransaction = _instance.overviewTransaction || [];
    _instance.columnDefinitions = _instance.columnDefinitions || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TransactionsOverview,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new TransactionOverview();
          _reader.readMessage(
            messageInitializer1,
            TransactionOverview.deserializeBinaryFromReader
          );
          (_instance.overviewTransaction =
            _instance.overviewTransaction || []).push(messageInitializer1);
          break;
        case 2:
          const messageInitializer2 = new columndefinitions002.ColumnDefinition();
          _reader.readMessage(
            messageInitializer2,
            columndefinitions002.ColumnDefinition.deserializeBinaryFromReader
          );
          (_instance.columnDefinitions =
            _instance.columnDefinitions || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    TransactionsOverview.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TransactionsOverview,
    _writer: BinaryWriter
  ) {
    if (_instance.overviewTransaction && _instance.overviewTransaction.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.overviewTransaction as any,
        TransactionOverview.serializeBinaryToWriter
      );
    }
    if (_instance.columnDefinitions && _instance.columnDefinitions.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.columnDefinitions as any,
        columndefinitions002.ColumnDefinition.serializeBinaryToWriter
      );
    }
  }

  private _overviewTransaction?: TransactionOverview[];
  private _columnDefinitions?: columndefinitions002.ColumnDefinition[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TransactionsOverview to deeply clone from
   */
  constructor(_value?: RecursivePartial<TransactionsOverview.AsObject>) {
    _value = _value || {};
    this.overviewTransaction = (_value.overviewTransaction || []).map(
      m => new TransactionOverview(m)
    );
    this.columnDefinitions = (_value.columnDefinitions || []).map(
      m => new columndefinitions002.ColumnDefinition(m)
    );
    TransactionsOverview.refineValues(this);
  }
  get overviewTransaction(): TransactionOverview[] | undefined {
    return this._overviewTransaction;
  }
  set overviewTransaction(value: TransactionOverview[] | undefined) {
    this._overviewTransaction = value;
  }
  get columnDefinitions(): columndefinitions002.ColumnDefinition[] | undefined {
    return this._columnDefinitions;
  }
  set columnDefinitions(
    value: columndefinitions002.ColumnDefinition[] | undefined
  ) {
    this._columnDefinitions = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TransactionsOverview.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TransactionsOverview.AsObject {
    return {
      overviewTransaction: (this.overviewTransaction || []).map(m =>
        m.toObject()
      ),
      columnDefinitions: (this.columnDefinitions || []).map(m => m.toObject())
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
  ): TransactionsOverview.AsProtobufJSON {
    return {
      overviewTransaction: (this.overviewTransaction || []).map(m =>
        m.toProtobufJSON(options)
      ),
      columnDefinitions: (this.columnDefinitions || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module TransactionsOverview {
  /**
   * Standard JavaScript object representation for TransactionsOverview
   */
  export interface AsObject {
    overviewTransaction?: TransactionOverview.AsObject[];
    columnDefinitions?: columndefinitions002.ColumnDefinition.AsObject[];
  }

  /**
   * Protobuf JSON representation for TransactionsOverview
   */
  export interface AsProtobufJSON {
    overviewTransaction?: TransactionOverview.AsProtobufJSON[] | null;
    columnDefinitions?:
      | columndefinitions002.ColumnDefinition.AsProtobufJSON[]
      | null;
  }
}

/**
 * Message implementation for transactions.Transactions
 */
export class Transactions implements GrpcMessage {
  static id = 'transactions.Transactions';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Transactions();
    Transactions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Transactions) {
    _instance.transactions = _instance.transactions || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Transactions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Transaction();
          _reader.readMessage(
            messageInitializer1,
            Transaction.deserializeBinaryFromReader
          );
          (_instance.transactions = _instance.transactions || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Transactions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Transactions,
    _writer: BinaryWriter
  ) {
    if (_instance.transactions && _instance.transactions.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.transactions as any,
        Transaction.serializeBinaryToWriter
      );
    }
  }

  private _transactions?: Transaction[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Transactions to deeply clone from
   */
  constructor(_value?: RecursivePartial<Transactions.AsObject>) {
    _value = _value || {};
    this.transactions = (_value.transactions || []).map(
      m => new Transaction(m)
    );
    Transactions.refineValues(this);
  }
  get transactions(): Transaction[] | undefined {
    return this._transactions;
  }
  set transactions(value: Transaction[] | undefined) {
    this._transactions = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Transactions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Transactions.AsObject {
    return {
      transactions: (this.transactions || []).map(m => m.toObject())
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
  ): Transactions.AsProtobufJSON {
    return {
      transactions: (this.transactions || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module Transactions {
  /**
   * Standard JavaScript object representation for Transactions
   */
  export interface AsObject {
    transactions?: Transaction.AsObject[];
  }

  /**
   * Protobuf JSON representation for Transactions
   */
  export interface AsProtobufJSON {
    transactions?: Transaction.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for transactions.TransactionRequest
 */
export class TransactionRequest implements GrpcMessage {
  static id = 'transactions.TransactionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TransactionRequest();
    TransactionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TransactionRequest) {
    _instance.wozobjectnummer = _instance.wozobjectnummer || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TransactionRequest,
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

    TransactionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TransactionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(1, _instance.wozobjectnummer);
    }
  }

  private _wozobjectnummer?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TransactionRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<TransactionRequest.AsObject>) {
    _value = _value || {};
    this.wozobjectnummer = _value.wozobjectnummer;
    TransactionRequest.refineValues(this);
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
    TransactionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TransactionRequest.AsObject {
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
  ): TransactionRequest.AsProtobufJSON {
    return {
      wozobjectnummer: this.wozobjectnummer
    };
  }
}
export module TransactionRequest {
  /**
   * Standard JavaScript object representation for TransactionRequest
   */
  export interface AsObject {
    wozobjectnummer?: string;
  }

  /**
   * Protobuf JSON representation for TransactionRequest
   */
  export interface AsProtobufJSON {
    wozobjectnummer?: string;
  }
}

/**
 * Message implementation for transactions.Transaction
 */
export class Transaction implements GrpcMessage {
  static id = 'transactions.Transaction';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Transaction();
    Transaction.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Transaction) {
    _instance.wozobjectnummer = _instance.wozobjectnummer || '0';
    _instance.lat = _instance.lat || undefined;
    _instance.lon = _instance.lon || undefined;
    _instance.transactieprijs = _instance.transactieprijs || '0';
    _instance.transactiedatum = _instance.transactiedatum || undefined;
    _instance.soort = _instance.soort || '';
    _instance.aard = _instance.aard || '';
    _instance.bruikbaarheid = _instance.bruikbaarheid || '';
    _instance.volgnummer = _instance.volgnummer || '0';
    _instance.soortobjectcode = _instance.soortobjectcode || undefined;
    _instance.straatnaam = _instance.straatnaam || undefined;
    _instance.huisnummer = _instance.huisnummer || 0;
    _instance.huisletter = _instance.huisletter || undefined;
    _instance.huisnummertoevoeging =
      _instance.huisnummertoevoeging || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Transaction,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.wozobjectnummer = _reader.readInt64String();
          break;
        case 2:
          _instance.lat = new googleProtobuf001.DoubleValue();
          _reader.readMessage(
            _instance.lat,
            googleProtobuf001.DoubleValue.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.lon = new googleProtobuf001.DoubleValue();
          _reader.readMessage(
            _instance.lon,
            googleProtobuf001.DoubleValue.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.transactieprijs = _reader.readInt64String();
          break;
        case 5:
          _instance.transactiedatum = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.transactiedatum,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.soort = _reader.readString();
          break;
        case 7:
          _instance.aard = _reader.readString();
          break;
        case 8:
          _instance.bruikbaarheid = _reader.readString();
          break;
        case 9:
          _instance.volgnummer = _reader.readInt64String();
          break;
        case 10:
          _instance.soortobjectcode = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.soortobjectcode,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.straatnaam = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.straatnaam,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.huisnummer = _reader.readInt32();
          break;
        case 13:
          _instance.huisletter = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.huisletter,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 14:
          _instance.huisnummertoevoeging = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.huisnummertoevoeging,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Transaction.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Transaction,
    _writer: BinaryWriter
  ) {
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(1, _instance.wozobjectnummer);
    }
    if (_instance.lat) {
      _writer.writeMessage(
        2,
        _instance.lat as any,
        googleProtobuf001.DoubleValue.serializeBinaryToWriter
      );
    }
    if (_instance.lon) {
      _writer.writeMessage(
        3,
        _instance.lon as any,
        googleProtobuf001.DoubleValue.serializeBinaryToWriter
      );
    }
    if (_instance.transactieprijs) {
      _writer.writeInt64String(4, _instance.transactieprijs);
    }
    if (_instance.transactiedatum) {
      _writer.writeMessage(
        5,
        _instance.transactiedatum as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.soort) {
      _writer.writeString(6, _instance.soort);
    }
    if (_instance.aard) {
      _writer.writeString(7, _instance.aard);
    }
    if (_instance.bruikbaarheid) {
      _writer.writeString(8, _instance.bruikbaarheid);
    }
    if (_instance.volgnummer) {
      _writer.writeInt64String(9, _instance.volgnummer);
    }
    if (_instance.soortobjectcode) {
      _writer.writeMessage(
        10,
        _instance.soortobjectcode as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.straatnaam) {
      _writer.writeMessage(
        11,
        _instance.straatnaam as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.huisnummer) {
      _writer.writeInt32(12, _instance.huisnummer);
    }
    if (_instance.huisletter) {
      _writer.writeMessage(
        13,
        _instance.huisletter as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.huisnummertoevoeging) {
      _writer.writeMessage(
        14,
        _instance.huisnummertoevoeging as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
  }

  private _wozobjectnummer?: string;
  private _lat?: googleProtobuf001.DoubleValue;
  private _lon?: googleProtobuf001.DoubleValue;
  private _transactieprijs?: string;
  private _transactiedatum?: googleProtobuf000.Timestamp;
  private _soort?: string;
  private _aard?: string;
  private _bruikbaarheid?: string;
  private _volgnummer?: string;
  private _soortobjectcode?: googleProtobuf001.StringValue;
  private _straatnaam?: googleProtobuf001.StringValue;
  private _huisnummer?: number;
  private _huisletter?: googleProtobuf001.StringValue;
  private _huisnummertoevoeging?: googleProtobuf001.StringValue;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Transaction to deeply clone from
   */
  constructor(_value?: RecursivePartial<Transaction.AsObject>) {
    _value = _value || {};
    this.wozobjectnummer = _value.wozobjectnummer;
    this.lat = _value.lat
      ? new googleProtobuf001.DoubleValue(_value.lat)
      : undefined;
    this.lon = _value.lon
      ? new googleProtobuf001.DoubleValue(_value.lon)
      : undefined;
    this.transactieprijs = _value.transactieprijs;
    this.transactiedatum = _value.transactiedatum
      ? new googleProtobuf000.Timestamp(_value.transactiedatum)
      : undefined;
    this.soort = _value.soort;
    this.aard = _value.aard;
    this.bruikbaarheid = _value.bruikbaarheid;
    this.volgnummer = _value.volgnummer;
    this.soortobjectcode = _value.soortobjectcode
      ? new googleProtobuf001.StringValue(_value.soortobjectcode)
      : undefined;
    this.straatnaam = _value.straatnaam
      ? new googleProtobuf001.StringValue(_value.straatnaam)
      : undefined;
    this.huisnummer = _value.huisnummer;
    this.huisletter = _value.huisletter
      ? new googleProtobuf001.StringValue(_value.huisletter)
      : undefined;
    this.huisnummertoevoeging = _value.huisnummertoevoeging
      ? new googleProtobuf001.StringValue(_value.huisnummertoevoeging)
      : undefined;
    Transaction.refineValues(this);
  }
  get wozobjectnummer(): string | undefined {
    return this._wozobjectnummer;
  }
  set wozobjectnummer(value: string | undefined) {
    this._wozobjectnummer = value;
  }
  get lat(): googleProtobuf001.DoubleValue | undefined {
    return this._lat;
  }
  set lat(value: googleProtobuf001.DoubleValue | undefined) {
    this._lat = value;
  }
  get lon(): googleProtobuf001.DoubleValue | undefined {
    return this._lon;
  }
  set lon(value: googleProtobuf001.DoubleValue | undefined) {
    this._lon = value;
  }
  get transactieprijs(): string | undefined {
    return this._transactieprijs;
  }
  set transactieprijs(value: string | undefined) {
    this._transactieprijs = value;
  }
  get transactiedatum(): googleProtobuf000.Timestamp | undefined {
    return this._transactiedatum;
  }
  set transactiedatum(value: googleProtobuf000.Timestamp | undefined) {
    this._transactiedatum = value;
  }
  get soort(): string | undefined {
    return this._soort;
  }
  set soort(value: string | undefined) {
    this._soort = value;
  }
  get aard(): string | undefined {
    return this._aard;
  }
  set aard(value: string | undefined) {
    this._aard = value;
  }
  get bruikbaarheid(): string | undefined {
    return this._bruikbaarheid;
  }
  set bruikbaarheid(value: string | undefined) {
    this._bruikbaarheid = value;
  }
  get volgnummer(): string | undefined {
    return this._volgnummer;
  }
  set volgnummer(value: string | undefined) {
    this._volgnummer = value;
  }
  get soortobjectcode(): googleProtobuf001.StringValue | undefined {
    return this._soortobjectcode;
  }
  set soortobjectcode(value: googleProtobuf001.StringValue | undefined) {
    this._soortobjectcode = value;
  }
  get straatnaam(): googleProtobuf001.StringValue | undefined {
    return this._straatnaam;
  }
  set straatnaam(value: googleProtobuf001.StringValue | undefined) {
    this._straatnaam = value;
  }
  get huisnummer(): number | undefined {
    return this._huisnummer;
  }
  set huisnummer(value: number | undefined) {
    this._huisnummer = value;
  }
  get huisletter(): googleProtobuf001.StringValue | undefined {
    return this._huisletter;
  }
  set huisletter(value: googleProtobuf001.StringValue | undefined) {
    this._huisletter = value;
  }
  get huisnummertoevoeging(): googleProtobuf001.StringValue | undefined {
    return this._huisnummertoevoeging;
  }
  set huisnummertoevoeging(value: googleProtobuf001.StringValue | undefined) {
    this._huisnummertoevoeging = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Transaction.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Transaction.AsObject {
    return {
      wozobjectnummer: this.wozobjectnummer,
      lat: this.lat ? this.lat.toObject() : undefined,
      lon: this.lon ? this.lon.toObject() : undefined,
      transactieprijs: this.transactieprijs,
      transactiedatum: this.transactiedatum
        ? this.transactiedatum.toObject()
        : undefined,
      soort: this.soort,
      aard: this.aard,
      bruikbaarheid: this.bruikbaarheid,
      volgnummer: this.volgnummer,
      soortobjectcode: this.soortobjectcode
        ? this.soortobjectcode.toObject()
        : undefined,
      straatnaam: this.straatnaam ? this.straatnaam.toObject() : undefined,
      huisnummer: this.huisnummer,
      huisletter: this.huisletter ? this.huisletter.toObject() : undefined,
      huisnummertoevoeging: this.huisnummertoevoeging
        ? this.huisnummertoevoeging.toObject()
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
  ): Transaction.AsProtobufJSON {
    return {
      wozobjectnummer: this.wozobjectnummer,
      lat: this.lat ? this.lat.toProtobufJSON(options) : null,
      lon: this.lon ? this.lon.toProtobufJSON(options) : null,
      transactieprijs: this.transactieprijs,
      transactiedatum: this.transactiedatum
        ? this.transactiedatum.toProtobufJSON(options)
        : null,
      soort: this.soort,
      aard: this.aard,
      bruikbaarheid: this.bruikbaarheid,
      volgnummer: this.volgnummer,
      soortobjectcode: this.soortobjectcode
        ? this.soortobjectcode.toProtobufJSON(options)
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
        : null
    };
  }
}
export module Transaction {
  /**
   * Standard JavaScript object representation for Transaction
   */
  export interface AsObject {
    wozobjectnummer?: string;
    lat?: googleProtobuf001.DoubleValue.AsObject;
    lon?: googleProtobuf001.DoubleValue.AsObject;
    transactieprijs?: string;
    transactiedatum?: googleProtobuf000.Timestamp.AsObject;
    soort?: string;
    aard?: string;
    bruikbaarheid?: string;
    volgnummer?: string;
    soortobjectcode?: googleProtobuf001.StringValue.AsObject;
    straatnaam?: googleProtobuf001.StringValue.AsObject;
    huisnummer?: number;
    huisletter?: googleProtobuf001.StringValue.AsObject;
    huisnummertoevoeging?: googleProtobuf001.StringValue.AsObject;
  }

  /**
   * Protobuf JSON representation for Transaction
   */
  export interface AsProtobufJSON {
    wozobjectnummer?: string;
    lat?: googleProtobuf001.DoubleValue.AsProtobufJSON | null;
    lon?: googleProtobuf001.DoubleValue.AsProtobufJSON | null;
    transactieprijs?: string;
    transactiedatum?: googleProtobuf000.Timestamp.AsProtobufJSON | null;
    soort?: string;
    aard?: string;
    bruikbaarheid?: string;
    volgnummer?: string;
    soortobjectcode?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    straatnaam?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    huisnummer?: number;
    huisletter?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    huisnummertoevoeging?: googleProtobuf001.StringValue.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for transactions.TransactionOverview
 */
export class TransactionOverview implements GrpcMessage {
  static id = 'transactions.TransactionOverview';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TransactionOverview();
    TransactionOverview.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TransactionOverview) {
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
    _instance.bouwjaar = _instance.bouwjaar || 0;
    _instance.kwaliteit = _instance.kwaliteit || undefined;
    _instance.onderhoud = _instance.onderhoud || undefined;
    _instance.uitstraling = _instance.uitstraling || undefined;
    _instance.doelmatigheid = _instance.doelmatigheid || undefined;
    _instance.voorzieningen = _instance.voorzieningen || undefined;
    _instance.transactieprijs = _instance.transactieprijs || '0';
    _instance.transactiedatum = _instance.transactiedatum || undefined;
    _instance.soort = _instance.soort || '';
    _instance.aard = _instance.aard || '';
    _instance.bruikbaarheid = _instance.bruikbaarheid || '';
    _instance.volgnummer = _instance.volgnummer || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TransactionOverview,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.wozobjectnummer = _reader.readInt64String();
          break;
        case 2:
          _instance.lat = new googleProtobuf001.DoubleValue();
          _reader.readMessage(
            _instance.lat,
            googleProtobuf001.DoubleValue.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.lon = new googleProtobuf001.DoubleValue();
          _reader.readMessage(
            _instance.lon,
            googleProtobuf001.DoubleValue.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.gemeentecode = _reader.readInt32();
          break;
        case 5:
          _instance.straatnaam = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.straatnaam,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.huisnummer = _reader.readInt32();
          break;
        case 7:
          _instance.huisletter = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.huisletter,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.huisnummertoevoeging = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.huisnummertoevoeging,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.postcode = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.postcode,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.wijkcode = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.wijkcode,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.buurtcode = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.buurtcode,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.woonplaatsnaam = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.woonplaatsnaam,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 13:
          _instance.locatieomschrijving = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.locatieomschrijving,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 14:
          _instance.soortobjectcode = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.soortobjectcode,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 15:
          _instance.indicatieligging = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.indicatieligging,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.groepaanduiding = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.groepaanduiding,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 17:
          _instance.aanduidingbouwstroom = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.aanduidingbouwstroom,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 18:
          _instance.statuswozobject = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.statuswozobject,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 19:
          _instance.waardegebied = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.waardegebied,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 20:
          _instance.model = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.model,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 21:
          _instance.woninh = _reader.readInt32();
          break;
        case 22:
          _instance.wonopp = _reader.readInt32();
          break;
        case 23:
          _instance.bouwjaar = _reader.readInt32();
          break;
        case 24:
          _instance.kwaliteit = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.kwaliteit,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 25:
          _instance.onderhoud = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.onderhoud,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 26:
          _instance.uitstraling = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.uitstraling,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 27:
          _instance.doelmatigheid = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.doelmatigheid,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 28:
          _instance.voorzieningen = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.voorzieningen,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 29:
          _instance.transactieprijs = _reader.readInt64String();
          break;
        case 30:
          _instance.transactiedatum = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.transactiedatum,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 31:
          _instance.soort = _reader.readString();
          break;
        case 32:
          _instance.aard = _reader.readString();
          break;
        case 33:
          _instance.bruikbaarheid = _reader.readString();
          break;
        case 34:
          _instance.volgnummer = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    TransactionOverview.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TransactionOverview,
    _writer: BinaryWriter
  ) {
    if (_instance.wozobjectnummer) {
      _writer.writeInt64String(1, _instance.wozobjectnummer);
    }
    if (_instance.lat) {
      _writer.writeMessage(
        2,
        _instance.lat as any,
        googleProtobuf001.DoubleValue.serializeBinaryToWriter
      );
    }
    if (_instance.lon) {
      _writer.writeMessage(
        3,
        _instance.lon as any,
        googleProtobuf001.DoubleValue.serializeBinaryToWriter
      );
    }
    if (_instance.gemeentecode) {
      _writer.writeInt32(4, _instance.gemeentecode);
    }
    if (_instance.straatnaam) {
      _writer.writeMessage(
        5,
        _instance.straatnaam as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.huisnummer) {
      _writer.writeInt32(6, _instance.huisnummer);
    }
    if (_instance.huisletter) {
      _writer.writeMessage(
        7,
        _instance.huisletter as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.huisnummertoevoeging) {
      _writer.writeMessage(
        8,
        _instance.huisnummertoevoeging as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.postcode) {
      _writer.writeMessage(
        9,
        _instance.postcode as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.wijkcode) {
      _writer.writeMessage(
        10,
        _instance.wijkcode as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.buurtcode) {
      _writer.writeMessage(
        11,
        _instance.buurtcode as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.woonplaatsnaam) {
      _writer.writeMessage(
        12,
        _instance.woonplaatsnaam as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.locatieomschrijving) {
      _writer.writeMessage(
        13,
        _instance.locatieomschrijving as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.soortobjectcode) {
      _writer.writeMessage(
        14,
        _instance.soortobjectcode as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.indicatieligging) {
      _writer.writeMessage(
        15,
        _instance.indicatieligging as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.groepaanduiding) {
      _writer.writeMessage(
        16,
        _instance.groepaanduiding as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.aanduidingbouwstroom) {
      _writer.writeMessage(
        17,
        _instance.aanduidingbouwstroom as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.statuswozobject) {
      _writer.writeMessage(
        18,
        _instance.statuswozobject as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.waardegebied) {
      _writer.writeMessage(
        19,
        _instance.waardegebied as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.model) {
      _writer.writeMessage(
        20,
        _instance.model as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.woninh) {
      _writer.writeInt32(21, _instance.woninh);
    }
    if (_instance.wonopp) {
      _writer.writeInt32(22, _instance.wonopp);
    }
    if (_instance.bouwjaar) {
      _writer.writeInt32(23, _instance.bouwjaar);
    }
    if (_instance.kwaliteit) {
      _writer.writeMessage(
        24,
        _instance.kwaliteit as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.onderhoud) {
      _writer.writeMessage(
        25,
        _instance.onderhoud as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.uitstraling) {
      _writer.writeMessage(
        26,
        _instance.uitstraling as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.doelmatigheid) {
      _writer.writeMessage(
        27,
        _instance.doelmatigheid as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.voorzieningen) {
      _writer.writeMessage(
        28,
        _instance.voorzieningen as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.transactieprijs) {
      _writer.writeInt64String(29, _instance.transactieprijs);
    }
    if (_instance.transactiedatum) {
      _writer.writeMessage(
        30,
        _instance.transactiedatum as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.soort) {
      _writer.writeString(31, _instance.soort);
    }
    if (_instance.aard) {
      _writer.writeString(32, _instance.aard);
    }
    if (_instance.bruikbaarheid) {
      _writer.writeString(33, _instance.bruikbaarheid);
    }
    if (_instance.volgnummer) {
      _writer.writeInt64String(34, _instance.volgnummer);
    }
  }

  private _wozobjectnummer?: string;
  private _lat?: googleProtobuf001.DoubleValue;
  private _lon?: googleProtobuf001.DoubleValue;
  private _gemeentecode?: number;
  private _straatnaam?: googleProtobuf001.StringValue;
  private _huisnummer?: number;
  private _huisletter?: googleProtobuf001.StringValue;
  private _huisnummertoevoeging?: googleProtobuf001.StringValue;
  private _postcode?: googleProtobuf001.StringValue;
  private _wijkcode?: googleProtobuf001.StringValue;
  private _buurtcode?: googleProtobuf001.StringValue;
  private _woonplaatsnaam?: googleProtobuf001.StringValue;
  private _locatieomschrijving?: googleProtobuf001.StringValue;
  private _soortobjectcode?: googleProtobuf001.StringValue;
  private _indicatieligging?: googleProtobuf001.StringValue;
  private _groepaanduiding?: googleProtobuf001.StringValue;
  private _aanduidingbouwstroom?: googleProtobuf001.StringValue;
  private _statuswozobject?: googleProtobuf001.StringValue;
  private _waardegebied?: googleProtobuf001.StringValue;
  private _model?: googleProtobuf001.StringValue;
  private _woninh?: number;
  private _wonopp?: number;
  private _bouwjaar?: number;
  private _kwaliteit?: googleProtobuf001.StringValue;
  private _onderhoud?: googleProtobuf001.StringValue;
  private _uitstraling?: googleProtobuf001.StringValue;
  private _doelmatigheid?: googleProtobuf001.StringValue;
  private _voorzieningen?: googleProtobuf001.StringValue;
  private _transactieprijs?: string;
  private _transactiedatum?: googleProtobuf000.Timestamp;
  private _soort?: string;
  private _aard?: string;
  private _bruikbaarheid?: string;
  private _volgnummer?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TransactionOverview to deeply clone from
   */
  constructor(_value?: RecursivePartial<TransactionOverview.AsObject>) {
    _value = _value || {};
    this.wozobjectnummer = _value.wozobjectnummer;
    this.lat = _value.lat
      ? new googleProtobuf001.DoubleValue(_value.lat)
      : undefined;
    this.lon = _value.lon
      ? new googleProtobuf001.DoubleValue(_value.lon)
      : undefined;
    this.gemeentecode = _value.gemeentecode;
    this.straatnaam = _value.straatnaam
      ? new googleProtobuf001.StringValue(_value.straatnaam)
      : undefined;
    this.huisnummer = _value.huisnummer;
    this.huisletter = _value.huisletter
      ? new googleProtobuf001.StringValue(_value.huisletter)
      : undefined;
    this.huisnummertoevoeging = _value.huisnummertoevoeging
      ? new googleProtobuf001.StringValue(_value.huisnummertoevoeging)
      : undefined;
    this.postcode = _value.postcode
      ? new googleProtobuf001.StringValue(_value.postcode)
      : undefined;
    this.wijkcode = _value.wijkcode
      ? new googleProtobuf001.StringValue(_value.wijkcode)
      : undefined;
    this.buurtcode = _value.buurtcode
      ? new googleProtobuf001.StringValue(_value.buurtcode)
      : undefined;
    this.woonplaatsnaam = _value.woonplaatsnaam
      ? new googleProtobuf001.StringValue(_value.woonplaatsnaam)
      : undefined;
    this.locatieomschrijving = _value.locatieomschrijving
      ? new googleProtobuf001.StringValue(_value.locatieomschrijving)
      : undefined;
    this.soortobjectcode = _value.soortobjectcode
      ? new googleProtobuf001.StringValue(_value.soortobjectcode)
      : undefined;
    this.indicatieligging = _value.indicatieligging
      ? new googleProtobuf001.StringValue(_value.indicatieligging)
      : undefined;
    this.groepaanduiding = _value.groepaanduiding
      ? new googleProtobuf001.StringValue(_value.groepaanduiding)
      : undefined;
    this.aanduidingbouwstroom = _value.aanduidingbouwstroom
      ? new googleProtobuf001.StringValue(_value.aanduidingbouwstroom)
      : undefined;
    this.statuswozobject = _value.statuswozobject
      ? new googleProtobuf001.StringValue(_value.statuswozobject)
      : undefined;
    this.waardegebied = _value.waardegebied
      ? new googleProtobuf001.StringValue(_value.waardegebied)
      : undefined;
    this.model = _value.model
      ? new googleProtobuf001.StringValue(_value.model)
      : undefined;
    this.woninh = _value.woninh;
    this.wonopp = _value.wonopp;
    this.bouwjaar = _value.bouwjaar;
    this.kwaliteit = _value.kwaliteit
      ? new googleProtobuf001.StringValue(_value.kwaliteit)
      : undefined;
    this.onderhoud = _value.onderhoud
      ? new googleProtobuf001.StringValue(_value.onderhoud)
      : undefined;
    this.uitstraling = _value.uitstraling
      ? new googleProtobuf001.StringValue(_value.uitstraling)
      : undefined;
    this.doelmatigheid = _value.doelmatigheid
      ? new googleProtobuf001.StringValue(_value.doelmatigheid)
      : undefined;
    this.voorzieningen = _value.voorzieningen
      ? new googleProtobuf001.StringValue(_value.voorzieningen)
      : undefined;
    this.transactieprijs = _value.transactieprijs;
    this.transactiedatum = _value.transactiedatum
      ? new googleProtobuf000.Timestamp(_value.transactiedatum)
      : undefined;
    this.soort = _value.soort;
    this.aard = _value.aard;
    this.bruikbaarheid = _value.bruikbaarheid;
    this.volgnummer = _value.volgnummer;
    TransactionOverview.refineValues(this);
  }
  get wozobjectnummer(): string | undefined {
    return this._wozobjectnummer;
  }
  set wozobjectnummer(value: string | undefined) {
    this._wozobjectnummer = value;
  }
  get lat(): googleProtobuf001.DoubleValue | undefined {
    return this._lat;
  }
  set lat(value: googleProtobuf001.DoubleValue | undefined) {
    this._lat = value;
  }
  get lon(): googleProtobuf001.DoubleValue | undefined {
    return this._lon;
  }
  set lon(value: googleProtobuf001.DoubleValue | undefined) {
    this._lon = value;
  }
  get gemeentecode(): number | undefined {
    return this._gemeentecode;
  }
  set gemeentecode(value: number | undefined) {
    this._gemeentecode = value;
  }
  get straatnaam(): googleProtobuf001.StringValue | undefined {
    return this._straatnaam;
  }
  set straatnaam(value: googleProtobuf001.StringValue | undefined) {
    this._straatnaam = value;
  }
  get huisnummer(): number | undefined {
    return this._huisnummer;
  }
  set huisnummer(value: number | undefined) {
    this._huisnummer = value;
  }
  get huisletter(): googleProtobuf001.StringValue | undefined {
    return this._huisletter;
  }
  set huisletter(value: googleProtobuf001.StringValue | undefined) {
    this._huisletter = value;
  }
  get huisnummertoevoeging(): googleProtobuf001.StringValue | undefined {
    return this._huisnummertoevoeging;
  }
  set huisnummertoevoeging(value: googleProtobuf001.StringValue | undefined) {
    this._huisnummertoevoeging = value;
  }
  get postcode(): googleProtobuf001.StringValue | undefined {
    return this._postcode;
  }
  set postcode(value: googleProtobuf001.StringValue | undefined) {
    this._postcode = value;
  }
  get wijkcode(): googleProtobuf001.StringValue | undefined {
    return this._wijkcode;
  }
  set wijkcode(value: googleProtobuf001.StringValue | undefined) {
    this._wijkcode = value;
  }
  get buurtcode(): googleProtobuf001.StringValue | undefined {
    return this._buurtcode;
  }
  set buurtcode(value: googleProtobuf001.StringValue | undefined) {
    this._buurtcode = value;
  }
  get woonplaatsnaam(): googleProtobuf001.StringValue | undefined {
    return this._woonplaatsnaam;
  }
  set woonplaatsnaam(value: googleProtobuf001.StringValue | undefined) {
    this._woonplaatsnaam = value;
  }
  get locatieomschrijving(): googleProtobuf001.StringValue | undefined {
    return this._locatieomschrijving;
  }
  set locatieomschrijving(value: googleProtobuf001.StringValue | undefined) {
    this._locatieomschrijving = value;
  }
  get soortobjectcode(): googleProtobuf001.StringValue | undefined {
    return this._soortobjectcode;
  }
  set soortobjectcode(value: googleProtobuf001.StringValue | undefined) {
    this._soortobjectcode = value;
  }
  get indicatieligging(): googleProtobuf001.StringValue | undefined {
    return this._indicatieligging;
  }
  set indicatieligging(value: googleProtobuf001.StringValue | undefined) {
    this._indicatieligging = value;
  }
  get groepaanduiding(): googleProtobuf001.StringValue | undefined {
    return this._groepaanduiding;
  }
  set groepaanduiding(value: googleProtobuf001.StringValue | undefined) {
    this._groepaanduiding = value;
  }
  get aanduidingbouwstroom(): googleProtobuf001.StringValue | undefined {
    return this._aanduidingbouwstroom;
  }
  set aanduidingbouwstroom(value: googleProtobuf001.StringValue | undefined) {
    this._aanduidingbouwstroom = value;
  }
  get statuswozobject(): googleProtobuf001.StringValue | undefined {
    return this._statuswozobject;
  }
  set statuswozobject(value: googleProtobuf001.StringValue | undefined) {
    this._statuswozobject = value;
  }
  get waardegebied(): googleProtobuf001.StringValue | undefined {
    return this._waardegebied;
  }
  set waardegebied(value: googleProtobuf001.StringValue | undefined) {
    this._waardegebied = value;
  }
  get model(): googleProtobuf001.StringValue | undefined {
    return this._model;
  }
  set model(value: googleProtobuf001.StringValue | undefined) {
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
  get bouwjaar(): number | undefined {
    return this._bouwjaar;
  }
  set bouwjaar(value: number | undefined) {
    this._bouwjaar = value;
  }
  get kwaliteit(): googleProtobuf001.StringValue | undefined {
    return this._kwaliteit;
  }
  set kwaliteit(value: googleProtobuf001.StringValue | undefined) {
    this._kwaliteit = value;
  }
  get onderhoud(): googleProtobuf001.StringValue | undefined {
    return this._onderhoud;
  }
  set onderhoud(value: googleProtobuf001.StringValue | undefined) {
    this._onderhoud = value;
  }
  get uitstraling(): googleProtobuf001.StringValue | undefined {
    return this._uitstraling;
  }
  set uitstraling(value: googleProtobuf001.StringValue | undefined) {
    this._uitstraling = value;
  }
  get doelmatigheid(): googleProtobuf001.StringValue | undefined {
    return this._doelmatigheid;
  }
  set doelmatigheid(value: googleProtobuf001.StringValue | undefined) {
    this._doelmatigheid = value;
  }
  get voorzieningen(): googleProtobuf001.StringValue | undefined {
    return this._voorzieningen;
  }
  set voorzieningen(value: googleProtobuf001.StringValue | undefined) {
    this._voorzieningen = value;
  }
  get transactieprijs(): string | undefined {
    return this._transactieprijs;
  }
  set transactieprijs(value: string | undefined) {
    this._transactieprijs = value;
  }
  get transactiedatum(): googleProtobuf000.Timestamp | undefined {
    return this._transactiedatum;
  }
  set transactiedatum(value: googleProtobuf000.Timestamp | undefined) {
    this._transactiedatum = value;
  }
  get soort(): string | undefined {
    return this._soort;
  }
  set soort(value: string | undefined) {
    this._soort = value;
  }
  get aard(): string | undefined {
    return this._aard;
  }
  set aard(value: string | undefined) {
    this._aard = value;
  }
  get bruikbaarheid(): string | undefined {
    return this._bruikbaarheid;
  }
  set bruikbaarheid(value: string | undefined) {
    this._bruikbaarheid = value;
  }
  get volgnummer(): string | undefined {
    return this._volgnummer;
  }
  set volgnummer(value: string | undefined) {
    this._volgnummer = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TransactionOverview.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TransactionOverview.AsObject {
    return {
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
      transactieprijs: this.transactieprijs,
      transactiedatum: this.transactiedatum
        ? this.transactiedatum.toObject()
        : undefined,
      soort: this.soort,
      aard: this.aard,
      bruikbaarheid: this.bruikbaarheid,
      volgnummer: this.volgnummer
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
  ): TransactionOverview.AsProtobufJSON {
    return {
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
      transactieprijs: this.transactieprijs,
      transactiedatum: this.transactiedatum
        ? this.transactiedatum.toProtobufJSON(options)
        : null,
      soort: this.soort,
      aard: this.aard,
      bruikbaarheid: this.bruikbaarheid,
      volgnummer: this.volgnummer
    };
  }
}
export module TransactionOverview {
  /**
   * Standard JavaScript object representation for TransactionOverview
   */
  export interface AsObject {
    wozobjectnummer?: string;
    lat?: googleProtobuf001.DoubleValue.AsObject;
    lon?: googleProtobuf001.DoubleValue.AsObject;
    gemeentecode?: number;
    straatnaam?: googleProtobuf001.StringValue.AsObject;
    huisnummer?: number;
    huisletter?: googleProtobuf001.StringValue.AsObject;
    huisnummertoevoeging?: googleProtobuf001.StringValue.AsObject;
    postcode?: googleProtobuf001.StringValue.AsObject;
    wijkcode?: googleProtobuf001.StringValue.AsObject;
    buurtcode?: googleProtobuf001.StringValue.AsObject;
    woonplaatsnaam?: googleProtobuf001.StringValue.AsObject;
    locatieomschrijving?: googleProtobuf001.StringValue.AsObject;
    soortobjectcode?: googleProtobuf001.StringValue.AsObject;
    indicatieligging?: googleProtobuf001.StringValue.AsObject;
    groepaanduiding?: googleProtobuf001.StringValue.AsObject;
    aanduidingbouwstroom?: googleProtobuf001.StringValue.AsObject;
    statuswozobject?: googleProtobuf001.StringValue.AsObject;
    waardegebied?: googleProtobuf001.StringValue.AsObject;
    model?: googleProtobuf001.StringValue.AsObject;
    woninh?: number;
    wonopp?: number;
    bouwjaar?: number;
    kwaliteit?: googleProtobuf001.StringValue.AsObject;
    onderhoud?: googleProtobuf001.StringValue.AsObject;
    uitstraling?: googleProtobuf001.StringValue.AsObject;
    doelmatigheid?: googleProtobuf001.StringValue.AsObject;
    voorzieningen?: googleProtobuf001.StringValue.AsObject;
    transactieprijs?: string;
    transactiedatum?: googleProtobuf000.Timestamp.AsObject;
    soort?: string;
    aard?: string;
    bruikbaarheid?: string;
    volgnummer?: string;
  }

  /**
   * Protobuf JSON representation for TransactionOverview
   */
  export interface AsProtobufJSON {
    wozobjectnummer?: string;
    lat?: googleProtobuf001.DoubleValue.AsProtobufJSON | null;
    lon?: googleProtobuf001.DoubleValue.AsProtobufJSON | null;
    gemeentecode?: number;
    straatnaam?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    huisnummer?: number;
    huisletter?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    huisnummertoevoeging?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    postcode?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    wijkcode?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    buurtcode?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    woonplaatsnaam?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    locatieomschrijving?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    soortobjectcode?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    indicatieligging?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    groepaanduiding?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    aanduidingbouwstroom?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    statuswozobject?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    waardegebied?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    model?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    woninh?: number;
    wonopp?: number;
    bouwjaar?: number;
    kwaliteit?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    onderhoud?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    uitstraling?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    doelmatigheid?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    voorzieningen?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    transactieprijs?: string;
    transactiedatum?: googleProtobuf000.Timestamp.AsProtobufJSON | null;
    soort?: string;
    aard?: string;
    bruikbaarheid?: string;
    volgnummer?: string;
  }
}
