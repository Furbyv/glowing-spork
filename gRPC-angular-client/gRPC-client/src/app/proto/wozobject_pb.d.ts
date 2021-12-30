// package: wozobject
// file: wozobject.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

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

export class FullWozObjectSaveReply extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FullWozObjectSaveReply.AsObject;
  static toObject(includeInstance: boolean, msg: FullWozObjectSaveReply): FullWozObjectSaveReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FullWozObjectSaveReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FullWozObjectSaveReply;
  static deserializeBinaryFromReader(message: FullWozObjectSaveReply, reader: jspb.BinaryReader): FullWozObjectSaveReply;
}

export namespace FullWozObjectSaveReply {
  export type AsObject = {
    issuccess: boolean,
  }
}

export class WozObjectReply extends jspb.Message {
  getWozobjectnummer(): number;
  setWozobjectnummer(value: number): void;

  hasGemeentenaam(): boolean;
  clearGemeentenaam(): void;
  getGemeentenaam(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGemeentenaam(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasStraatnaam(): boolean;
  clearStraatnaam(): void;
  getStraatnaam(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStraatnaam(value?: google_protobuf_wrappers_pb.StringValue): void;

  getHuisnummer(): number;
  setHuisnummer(value: number): void;

  hasHuisletter(): boolean;
  clearHuisletter(): void;
  getHuisletter(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHuisletter(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasHuisnummertoevoeging(): boolean;
  clearHuisnummertoevoeging(): void;
  getHuisnummertoevoeging(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHuisnummertoevoeging(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPostcode(): boolean;
  clearPostcode(): void;
  getPostcode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPostcode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasSoortobjectcode(): boolean;
  clearSoortobjectcode(): void;
  getSoortobjectcode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSoortobjectcode(value?: google_protobuf_wrappers_pb.StringValue): void;

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
    gemeentenaam?: google_protobuf_wrappers_pb.StringValue.AsObject,
    straatnaam?: google_protobuf_wrappers_pb.StringValue.AsObject,
    huisnummer: number,
    huisletter?: google_protobuf_wrappers_pb.StringValue.AsObject,
    huisnummertoevoeging?: google_protobuf_wrappers_pb.StringValue.AsObject,
    postcode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    soortobjectcode?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class FullWozObjectReply extends jspb.Message {
  getWozobjectnummer(): number;
  setWozobjectnummer(value: number): void;

  hasGemeentenaam(): boolean;
  clearGemeentenaam(): void;
  getGemeentenaam(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGemeentenaam(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasStraatnaam(): boolean;
  clearStraatnaam(): void;
  getStraatnaam(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStraatnaam(value?: google_protobuf_wrappers_pb.StringValue): void;

  getHuisnummer(): number;
  setHuisnummer(value: number): void;

  hasHuisletter(): boolean;
  clearHuisletter(): void;
  getHuisletter(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHuisletter(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasHuisnummertoevoeging(): boolean;
  clearHuisnummertoevoeging(): void;
  getHuisnummertoevoeging(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHuisnummertoevoeging(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPostcode(): boolean;
  clearPostcode(): void;
  getPostcode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPostcode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasSoortobjectcode(): boolean;
  clearSoortobjectcode(): void;
  getSoortobjectcode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSoortobjectcode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasWijkcode(): boolean;
  clearWijkcode(): void;
  getWijkcode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setWijkcode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasBuurtcode(): boolean;
  clearBuurtcode(): void;
  getBuurtcode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBuurtcode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasWoonplaats(): boolean;
  clearWoonplaats(): void;
  getWoonplaats(): google_protobuf_wrappers_pb.StringValue | undefined;
  setWoonplaats(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLocatieomschrijving(): boolean;
  clearLocatieomschrijving(): void;
  getLocatieomschrijving(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLocatieomschrijving(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasIndicatieligging(): boolean;
  clearIndicatieligging(): void;
  getIndicatieligging(): google_protobuf_wrappers_pb.StringValue | undefined;
  setIndicatieligging(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasOmschrijving(): boolean;
  clearOmschrijving(): void;
  getOmschrijving(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOmschrijving(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FullWozObjectReply.AsObject;
  static toObject(includeInstance: boolean, msg: FullWozObjectReply): FullWozObjectReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FullWozObjectReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FullWozObjectReply;
  static deserializeBinaryFromReader(message: FullWozObjectReply, reader: jspb.BinaryReader): FullWozObjectReply;
}

export namespace FullWozObjectReply {
  export type AsObject = {
    wozobjectnummer: number,
    gemeentenaam?: google_protobuf_wrappers_pb.StringValue.AsObject,
    straatnaam?: google_protobuf_wrappers_pb.StringValue.AsObject,
    huisnummer: number,
    huisletter?: google_protobuf_wrappers_pb.StringValue.AsObject,
    huisnummertoevoeging?: google_protobuf_wrappers_pb.StringValue.AsObject,
    postcode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    soortobjectcode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    wijkcode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    buurtcode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    woonplaats?: google_protobuf_wrappers_pb.StringValue.AsObject,
    locatieomschrijving?: google_protobuf_wrappers_pb.StringValue.AsObject,
    indicatieligging?: google_protobuf_wrappers_pb.StringValue.AsObject,
    omschrijving?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class WozObjectImageRequest extends jspb.Message {
  getWozobjectnummer(): number;
  setWozobjectnummer(value: number): void;

  getOnlyMain(): boolean;
  setOnlyMain(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WozObjectImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WozObjectImageRequest): WozObjectImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WozObjectImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WozObjectImageRequest;
  static deserializeBinaryFromReader(message: WozObjectImageRequest, reader: jspb.BinaryReader): WozObjectImageRequest;
}

export namespace WozObjectImageRequest {
  export type AsObject = {
    wozobjectnummer: number,
    onlyMain: boolean,
  }
}

export class WozObjectImageReply extends jspb.Message {
  getImageData(): Uint8Array | string;
  getImageData_asU8(): Uint8Array;
  getImageData_asB64(): string;
  setImageData(value: Uint8Array | string): void;

  getIsMain(): boolean;
  setIsMain(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WozObjectImageReply.AsObject;
  static toObject(includeInstance: boolean, msg: WozObjectImageReply): WozObjectImageReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WozObjectImageReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WozObjectImageReply;
  static deserializeBinaryFromReader(message: WozObjectImageReply, reader: jspb.BinaryReader): WozObjectImageReply;
}

export namespace WozObjectImageReply {
  export type AsObject = {
    imageData: Uint8Array | string,
    isMain: boolean,
  }
}

export class UploadImageRequest extends jspb.Message {
  getWozobjectnummer(): number;
  setWozobjectnummer(value: number): void;

  getImageData(): Uint8Array | string;
  getImageData_asU8(): Uint8Array;
  getImageData_asB64(): string;
  setImageData(value: Uint8Array | string): void;

  getIsMain(): boolean;
  setIsMain(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadImageRequest): UploadImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadImageRequest;
  static deserializeBinaryFromReader(message: UploadImageRequest, reader: jspb.BinaryReader): UploadImageRequest;
}

export namespace UploadImageRequest {
  export type AsObject = {
    wozobjectnummer: number,
    imageData: Uint8Array | string,
    isMain: boolean,
  }
}

export class UploadImageReply extends jspb.Message {
  getSucces(): boolean;
  setSucces(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadImageReply.AsObject;
  static toObject(includeInstance: boolean, msg: UploadImageReply): UploadImageReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadImageReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadImageReply;
  static deserializeBinaryFromReader(message: UploadImageReply, reader: jspb.BinaryReader): UploadImageReply;
}

export namespace UploadImageReply {
  export type AsObject = {
    succes: boolean,
  }
}

