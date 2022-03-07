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
/**
 * Message implementation for timeperiods.TimePeriodsReply
 */
export class TimePeriodsReply implements GrpcMessage {
  static id = 'timeperiods.TimePeriodsReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TimePeriodsReply();
    TimePeriodsReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TimePeriodsReply) {
    _instance.timePeriods = _instance.timePeriods || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TimePeriodsReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new TimePeriodRecord();
          _reader.readMessage(
            messageInitializer1,
            TimePeriodRecord.deserializeBinaryFromReader
          );
          (_instance.timePeriods = _instance.timePeriods || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    TimePeriodsReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TimePeriodsReply,
    _writer: BinaryWriter
  ) {
    if (_instance.timePeriods && _instance.timePeriods.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.timePeriods as any,
        TimePeriodRecord.serializeBinaryToWriter
      );
    }
  }

  private _timePeriods?: TimePeriodRecord[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TimePeriodsReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<TimePeriodsReply.AsObject>) {
    _value = _value || {};
    this.timePeriods = (_value.timePeriods || []).map(
      m => new TimePeriodRecord(m)
    );
    TimePeriodsReply.refineValues(this);
  }
  get timePeriods(): TimePeriodRecord[] | undefined {
    return this._timePeriods;
  }
  set timePeriods(value: TimePeriodRecord[] | undefined) {
    this._timePeriods = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TimePeriodsReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TimePeriodsReply.AsObject {
    return {
      timePeriods: (this.timePeriods || []).map(m => m.toObject())
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
  ): TimePeriodsReply.AsProtobufJSON {
    return {
      timePeriods: (this.timePeriods || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module TimePeriodsReply {
  /**
   * Standard JavaScript object representation for TimePeriodsReply
   */
  export interface AsObject {
    timePeriods?: TimePeriodRecord.AsObject[];
  }

  /**
   * Protobuf JSON representation for TimePeriodsReply
   */
  export interface AsProtobufJSON {
    timePeriods?: TimePeriodRecord.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for timeperiods.TimePeriodRecord
 */
export class TimePeriodRecord implements GrpcMessage {
  static id = 'timeperiods.TimePeriodRecord';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TimePeriodRecord();
    TimePeriodRecord.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TimePeriodRecord) {
    _instance.id = _instance.id || '0';
    _instance.description = _instance.description || '';
    _instance.valuationDate = _instance.valuationDate || undefined;
    _instance.propertyDate = _instance.propertyDate || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TimePeriodRecord,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt64String();
          break;
        case 2:
          _instance.description = _reader.readString();
          break;
        case 3:
          _instance.valuationDate = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.valuationDate,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.propertyDate = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.propertyDate,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    TimePeriodRecord.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TimePeriodRecord,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt64String(1, _instance.id);
    }
    if (_instance.description) {
      _writer.writeString(2, _instance.description);
    }
    if (_instance.valuationDate) {
      _writer.writeMessage(
        3,
        _instance.valuationDate as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.propertyDate) {
      _writer.writeMessage(
        4,
        _instance.propertyDate as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _id?: string;
  private _description?: string;
  private _valuationDate?: googleProtobuf000.Timestamp;
  private _propertyDate?: googleProtobuf000.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TimePeriodRecord to deeply clone from
   */
  constructor(_value?: RecursivePartial<TimePeriodRecord.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.description = _value.description;
    this.valuationDate = _value.valuationDate
      ? new googleProtobuf000.Timestamp(_value.valuationDate)
      : undefined;
    this.propertyDate = _value.propertyDate
      ? new googleProtobuf000.Timestamp(_value.propertyDate)
      : undefined;
    TimePeriodRecord.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get valuationDate(): googleProtobuf000.Timestamp | undefined {
    return this._valuationDate;
  }
  set valuationDate(value: googleProtobuf000.Timestamp | undefined) {
    this._valuationDate = value;
  }
  get propertyDate(): googleProtobuf000.Timestamp | undefined {
    return this._propertyDate;
  }
  set propertyDate(value: googleProtobuf000.Timestamp | undefined) {
    this._propertyDate = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TimePeriodRecord.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TimePeriodRecord.AsObject {
    return {
      id: this.id,
      description: this.description,
      valuationDate: this.valuationDate
        ? this.valuationDate.toObject()
        : undefined,
      propertyDate: this.propertyDate ? this.propertyDate.toObject() : undefined
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
  ): TimePeriodRecord.AsProtobufJSON {
    return {
      id: this.id,
      description: this.description,
      valuationDate: this.valuationDate
        ? this.valuationDate.toProtobufJSON(options)
        : null,
      propertyDate: this.propertyDate
        ? this.propertyDate.toProtobufJSON(options)
        : null
    };
  }
}
export module TimePeriodRecord {
  /**
   * Standard JavaScript object representation for TimePeriodRecord
   */
  export interface AsObject {
    id?: string;
    description?: string;
    valuationDate?: googleProtobuf000.Timestamp.AsObject;
    propertyDate?: googleProtobuf000.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for TimePeriodRecord
   */
  export interface AsProtobufJSON {
    id?: string;
    description?: string;
    valuationDate?: googleProtobuf000.Timestamp.AsProtobufJSON | null;
    propertyDate?: googleProtobuf000.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for timeperiods.AddTimePeriodReply
 */
export class AddTimePeriodReply implements GrpcMessage {
  static id = 'timeperiods.AddTimePeriodReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddTimePeriodReply();
    AddTimePeriodReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddTimePeriodReply) {
    _instance.succes = _instance.succes || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddTimePeriodReply,
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

    AddTimePeriodReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddTimePeriodReply,
    _writer: BinaryWriter
  ) {
    if (_instance.succes) {
      _writer.writeBool(1, _instance.succes);
    }
  }

  private _succes?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddTimePeriodReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddTimePeriodReply.AsObject>) {
    _value = _value || {};
    this.succes = _value.succes;
    AddTimePeriodReply.refineValues(this);
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
    AddTimePeriodReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddTimePeriodReply.AsObject {
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
  ): AddTimePeriodReply.AsProtobufJSON {
    return {
      succes: this.succes
    };
  }
}
export module AddTimePeriodReply {
  /**
   * Standard JavaScript object representation for AddTimePeriodReply
   */
  export interface AsObject {
    succes?: boolean;
  }

  /**
   * Protobuf JSON representation for AddTimePeriodReply
   */
  export interface AsProtobufJSON {
    succes?: boolean;
  }
}
