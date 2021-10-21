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

export class WozObjectReply extends jspb.Message {
  getWozobjectnummer(): number;
  setWozobjectnummer(value: number): void;

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
  }
}

