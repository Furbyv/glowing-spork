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
export enum GridType {
  TAXOVERVIEW = 0,
  TRANSACTIONOVERVIEW = 1
}
export enum DataType {
  VARCHAR = 0,
  NUMBER = 1,
  DATE = 2
}
/**
 * Message implementation for columndefinitions.ColumnDefinition
 */
export class ColumnDefinition implements GrpcMessage {
  static id = 'columndefinitions.ColumnDefinition';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ColumnDefinition();
    ColumnDefinition.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ColumnDefinition) {
    _instance.columnName = _instance.columnName || '';
    _instance.columnHeader = _instance.columnHeader || '';
    _instance.columnDescription = _instance.columnDescription || '';
    _instance.gridType = _instance.gridType || 0;
    _instance.editable = _instance.editable || false;
    _instance.sortOrder = _instance.sortOrder || 0;
    _instance.dataType = _instance.dataType || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ColumnDefinition,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.columnName = _reader.readString();
          break;
        case 2:
          _instance.columnHeader = _reader.readString();
          break;
        case 3:
          _instance.columnDescription = _reader.readString();
          break;
        case 4:
          _instance.gridType = _reader.readEnum();
          break;
        case 5:
          _instance.editable = _reader.readBool();
          break;
        case 6:
          _instance.sortOrder = _reader.readInt32();
          break;
        case 7:
          _instance.dataType = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    ColumnDefinition.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ColumnDefinition,
    _writer: BinaryWriter
  ) {
    if (_instance.columnName) {
      _writer.writeString(1, _instance.columnName);
    }
    if (_instance.columnHeader) {
      _writer.writeString(2, _instance.columnHeader);
    }
    if (_instance.columnDescription) {
      _writer.writeString(3, _instance.columnDescription);
    }
    if (_instance.gridType) {
      _writer.writeEnum(4, _instance.gridType);
    }
    if (_instance.editable) {
      _writer.writeBool(5, _instance.editable);
    }
    if (_instance.sortOrder) {
      _writer.writeInt32(6, _instance.sortOrder);
    }
    if (_instance.dataType) {
      _writer.writeEnum(7, _instance.dataType);
    }
  }

  private _columnName?: string;
  private _columnHeader?: string;
  private _columnDescription?: string;
  private _gridType?: GridType;
  private _editable?: boolean;
  private _sortOrder?: number;
  private _dataType?: DataType;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ColumnDefinition to deeply clone from
   */
  constructor(_value?: RecursivePartial<ColumnDefinition.AsObject>) {
    _value = _value || {};
    this.columnName = _value.columnName;
    this.columnHeader = _value.columnHeader;
    this.columnDescription = _value.columnDescription;
    this.gridType = _value.gridType;
    this.editable = _value.editable;
    this.sortOrder = _value.sortOrder;
    this.dataType = _value.dataType;
    ColumnDefinition.refineValues(this);
  }
  get columnName(): string | undefined {
    return this._columnName;
  }
  set columnName(value: string | undefined) {
    this._columnName = value;
  }
  get columnHeader(): string | undefined {
    return this._columnHeader;
  }
  set columnHeader(value: string | undefined) {
    this._columnHeader = value;
  }
  get columnDescription(): string | undefined {
    return this._columnDescription;
  }
  set columnDescription(value: string | undefined) {
    this._columnDescription = value;
  }
  get gridType(): GridType | undefined {
    return this._gridType;
  }
  set gridType(value: GridType | undefined) {
    this._gridType = value;
  }
  get editable(): boolean | undefined {
    return this._editable;
  }
  set editable(value: boolean | undefined) {
    this._editable = value;
  }
  get sortOrder(): number | undefined {
    return this._sortOrder;
  }
  set sortOrder(value: number | undefined) {
    this._sortOrder = value;
  }
  get dataType(): DataType | undefined {
    return this._dataType;
  }
  set dataType(value: DataType | undefined) {
    this._dataType = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ColumnDefinition.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ColumnDefinition.AsObject {
    return {
      columnName: this.columnName,
      columnHeader: this.columnHeader,
      columnDescription: this.columnDescription,
      gridType: this.gridType,
      editable: this.editable,
      sortOrder: this.sortOrder,
      dataType: this.dataType
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
  ): ColumnDefinition.AsProtobufJSON {
    return {
      columnName: this.columnName,
      columnHeader: this.columnHeader,
      columnDescription: this.columnDescription,
      gridType:
        GridType[
          this.gridType === null || this.gridType === undefined
            ? 0
            : this.gridType
        ],
      editable: this.editable,
      sortOrder: this.sortOrder,
      dataType:
        DataType[
          this.dataType === null || this.dataType === undefined
            ? 0
            : this.dataType
        ]
    };
  }
}
export module ColumnDefinition {
  /**
   * Standard JavaScript object representation for ColumnDefinition
   */
  export interface AsObject {
    columnName?: string;
    columnHeader?: string;
    columnDescription?: string;
    gridType?: GridType;
    editable?: boolean;
    sortOrder?: number;
    dataType?: DataType;
  }

  /**
   * Protobuf JSON representation for ColumnDefinition
   */
  export interface AsProtobufJSON {
    columnName?: string;
    columnHeader?: string;
    columnDescription?: string;
    gridType?: string;
    editable?: boolean;
    sortOrder?: number;
    dataType?: string;
  }
}
