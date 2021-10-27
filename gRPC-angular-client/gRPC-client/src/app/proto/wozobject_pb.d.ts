// package: wozobject
// file: wozobject.proto

import * as jspb from "google-protobuf";

export class WozObjectRequestById extends jspb.Message {
  getWozobjectnummer(): number;
  setWozobjectnummer(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WozObjectRequestById.AsObject;
  static toObject(includeInstance: boolean, msg: WozObjectRequestById): WozObjectRequestById.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WozObjectRequestById, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WozObjectRequestById;
  static deserializeBinaryFromReader(message: WozObjectRequestById, reader: jspb.BinaryReader): WozObjectRequestById;
}

export namespace WozObjectRequestById {
  export type AsObject = {
    wozobjectnummer: number,
  }
}

export class WozObjectsReply extends jspb.Message {
  clearWozobjectsList(): void;
  getWozobjectsList(): Array<WozObjectReply>;
  setWozobjectsList(value: Array<WozObjectReply>): void;
  addWozobjects(value?: WozObjectReply, index?: number): WozObjectReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WozObjectsReply.AsObject;
  static toObject(includeInstance: boolean, msg: WozObjectsReply): WozObjectsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WozObjectsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WozObjectsReply;
  static deserializeBinaryFromReader(message: WozObjectsReply, reader: jspb.BinaryReader): WozObjectsReply;
}

export namespace WozObjectsReply {
  export type AsObject = {
    wozobjectsList: Array<WozObjectReply.AsObject>,
  }
}

export class WozObjectReply extends jspb.Message {
  getWozobjectnummer(): number;
  setWozobjectnummer(value: number): void;

  getGemeentenaam(): string;
  setGemeentenaam(value: string): void;

  getStraatnaam(): string;
  setStraatnaam(value: string): void;

  getHuisnummer(): number;
  setHuisnummer(value: number): void;

  getHuisletter(): string;
  setHuisletter(value: string): void;

  getHuisnummertoevoeging(): string;
  setHuisnummertoevoeging(value: string): void;

  getPostcode(): string;
  setPostcode(value: string): void;

  getSoortobjectcode(): string;
  setSoortobjectcode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WozObjectReply.AsObject;
  static toObject(includeInstance: boolean, msg: WozObjectReply): WozObjectReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WozObjectReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WozObjectReply;
  static deserializeBinaryFromReader(message: WozObjectReply, reader: jspb.BinaryReader): WozObjectReply;
}

export namespace WozObjectReply {
  export type AsObject = {
    wozobjectnummer: number,
    gemeentenaam: string,
    straatnaam: string,
    huisnummer: number,
    huisletter: string,
    huisnummertoevoeging: string,
    postcode: string,
    soortobjectcode: string,
  }
}

