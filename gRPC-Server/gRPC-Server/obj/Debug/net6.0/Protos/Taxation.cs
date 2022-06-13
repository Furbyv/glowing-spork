// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Protos/taxation.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace gRPCServer.Protos {

  /// <summary>Holder for reflection information generated from Protos/taxation.proto</summary>
  public static partial class TaxationReflection {

    #region Descriptor
    /// <summary>File descriptor for Protos/taxation.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static TaxationReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChVQcm90b3MvdGF4YXRpb24ucHJvdG8SCXRheGF0aW9ucxoWUHJvdG9zL3dv",
            "em9iamVjdC5wcm90bxoXUHJvdG9zL3RpbWVwZXJpb2QucHJvdG8aFlByb3Rv",
            "cy9zdWJvYmplY3QucHJvdG8aGFByb3Rvcy9jb21wYXJhYmxlcy5wcm90byI/",
            "Cg9UYXhhdGlvblJlcXVlc3QSFwoPd296b2JqZWN0bnVtbWVyGAEgASgDEhMK",
            "C3ByaWpzcGVpbGlkGAIgASgDImcKD1RheGF0aW9uc09iamVjdBIXCg93b3pv",
            "YmplY3RudW1tZXIYASABKAMSEwoLcHJpanNwZWlsaWQYAiABKAMSJgoJdGF4",
            "YXRpb25zGAMgAygLMhMudGF4YXRpb25zLlRheGF0aW9uIpECCghUYXhhdGlv",
            "bhIKCgJpZBgBIAEoAxItCgZwZXJpb2QYAiABKAsyHS50aW1lcGVyaW9kcy5U",
            "aW1lUGVyaW9kUmVjb3JkEg4KBnN0YXR1cxgDIAEoCRIOCgZhY3RpdmUYBCAB",
            "KAgSNgoPZnJlZXplV296T2JqZWN0GAUgASgLMh0ud296b2JqZWN0LkZ1bGxX",
            "b3pPYmplY3RSZXBseRI3ChFmcmVlemVEZWVsb2JqZWN0cxgGIAMoCzIcLnN1",
            "Ym9iamVjdC5Xb3pTdWJPYmplY3RSZXBseRI5ChJjb21wYXJhYmxlX29iamVj",
            "dHMYByADKAsyHS5jb21wYXJhYmxlcy5Db21wYXJhYmxlT2JqZWN0Ml8KD1Rh",
            "eGF0aW9uT2JqZWN0cxJMChJHZXRUYXhhdGlvbnNPYmplY3QSGi50YXhhdGlv",
            "bnMuVGF4YXRpb25SZXF1ZXN0GhoudGF4YXRpb25zLlRheGF0aW9uc09iamVj",
            "dEIUqgIRZ1JQQ1NlcnZlci5Qcm90b3NiBnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::gRPCServer.Protos.WozobjectReflection.Descriptor, global::gRPCServer.Protos.TimeperiodReflection.Descriptor, global::gRPCServer.Protos.SubobjectReflection.Descriptor, global::gRPCServer.Protos.ComparablesReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::gRPCServer.Protos.TaxationRequest), global::gRPCServer.Protos.TaxationRequest.Parser, new[]{ "Wozobjectnummer", "Prijspeilid" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::gRPCServer.Protos.TaxationsObject), global::gRPCServer.Protos.TaxationsObject.Parser, new[]{ "Wozobjectnummer", "Prijspeilid", "Taxations" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::gRPCServer.Protos.Taxation), global::gRPCServer.Protos.Taxation.Parser, new[]{ "Id", "Period", "Status", "Active", "FreezeWozObject", "FreezeDeelobjects", "ComparableObjects" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class TaxationRequest : pb::IMessage<TaxationRequest>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<TaxationRequest> _parser = new pb::MessageParser<TaxationRequest>(() => new TaxationRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<TaxationRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::gRPCServer.Protos.TaxationReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TaxationRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TaxationRequest(TaxationRequest other) : this() {
      wozobjectnummer_ = other.wozobjectnummer_;
      prijspeilid_ = other.prijspeilid_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TaxationRequest Clone() {
      return new TaxationRequest(this);
    }

    /// <summary>Field number for the "wozobjectnummer" field.</summary>
    public const int WozobjectnummerFieldNumber = 1;
    private long wozobjectnummer_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public long Wozobjectnummer {
      get { return wozobjectnummer_; }
      set {
        wozobjectnummer_ = value;
      }
    }

    /// <summary>Field number for the "prijspeilid" field.</summary>
    public const int PrijspeilidFieldNumber = 2;
    private long prijspeilid_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public long Prijspeilid {
      get { return prijspeilid_; }
      set {
        prijspeilid_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as TaxationRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(TaxationRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Wozobjectnummer != other.Wozobjectnummer) return false;
      if (Prijspeilid != other.Prijspeilid) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (Wozobjectnummer != 0L) hash ^= Wozobjectnummer.GetHashCode();
      if (Prijspeilid != 0L) hash ^= Prijspeilid.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (Wozobjectnummer != 0L) {
        output.WriteRawTag(8);
        output.WriteInt64(Wozobjectnummer);
      }
      if (Prijspeilid != 0L) {
        output.WriteRawTag(16);
        output.WriteInt64(Prijspeilid);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (Wozobjectnummer != 0L) {
        output.WriteRawTag(8);
        output.WriteInt64(Wozobjectnummer);
      }
      if (Prijspeilid != 0L) {
        output.WriteRawTag(16);
        output.WriteInt64(Prijspeilid);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (Wozobjectnummer != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Wozobjectnummer);
      }
      if (Prijspeilid != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Prijspeilid);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(TaxationRequest other) {
      if (other == null) {
        return;
      }
      if (other.Wozobjectnummer != 0L) {
        Wozobjectnummer = other.Wozobjectnummer;
      }
      if (other.Prijspeilid != 0L) {
        Prijspeilid = other.Prijspeilid;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            Wozobjectnummer = input.ReadInt64();
            break;
          }
          case 16: {
            Prijspeilid = input.ReadInt64();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 8: {
            Wozobjectnummer = input.ReadInt64();
            break;
          }
          case 16: {
            Prijspeilid = input.ReadInt64();
            break;
          }
        }
      }
    }
    #endif

  }

  public sealed partial class TaxationsObject : pb::IMessage<TaxationsObject>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<TaxationsObject> _parser = new pb::MessageParser<TaxationsObject>(() => new TaxationsObject());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<TaxationsObject> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::gRPCServer.Protos.TaxationReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TaxationsObject() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TaxationsObject(TaxationsObject other) : this() {
      wozobjectnummer_ = other.wozobjectnummer_;
      prijspeilid_ = other.prijspeilid_;
      taxations_ = other.taxations_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TaxationsObject Clone() {
      return new TaxationsObject(this);
    }

    /// <summary>Field number for the "wozobjectnummer" field.</summary>
    public const int WozobjectnummerFieldNumber = 1;
    private long wozobjectnummer_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public long Wozobjectnummer {
      get { return wozobjectnummer_; }
      set {
        wozobjectnummer_ = value;
      }
    }

    /// <summary>Field number for the "prijspeilid" field.</summary>
    public const int PrijspeilidFieldNumber = 2;
    private long prijspeilid_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public long Prijspeilid {
      get { return prijspeilid_; }
      set {
        prijspeilid_ = value;
      }
    }

    /// <summary>Field number for the "taxations" field.</summary>
    public const int TaxationsFieldNumber = 3;
    private static readonly pb::FieldCodec<global::gRPCServer.Protos.Taxation> _repeated_taxations_codec
        = pb::FieldCodec.ForMessage(26, global::gRPCServer.Protos.Taxation.Parser);
    private readonly pbc::RepeatedField<global::gRPCServer.Protos.Taxation> taxations_ = new pbc::RepeatedField<global::gRPCServer.Protos.Taxation>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<global::gRPCServer.Protos.Taxation> Taxations {
      get { return taxations_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as TaxationsObject);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(TaxationsObject other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Wozobjectnummer != other.Wozobjectnummer) return false;
      if (Prijspeilid != other.Prijspeilid) return false;
      if(!taxations_.Equals(other.taxations_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (Wozobjectnummer != 0L) hash ^= Wozobjectnummer.GetHashCode();
      if (Prijspeilid != 0L) hash ^= Prijspeilid.GetHashCode();
      hash ^= taxations_.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (Wozobjectnummer != 0L) {
        output.WriteRawTag(8);
        output.WriteInt64(Wozobjectnummer);
      }
      if (Prijspeilid != 0L) {
        output.WriteRawTag(16);
        output.WriteInt64(Prijspeilid);
      }
      taxations_.WriteTo(output, _repeated_taxations_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (Wozobjectnummer != 0L) {
        output.WriteRawTag(8);
        output.WriteInt64(Wozobjectnummer);
      }
      if (Prijspeilid != 0L) {
        output.WriteRawTag(16);
        output.WriteInt64(Prijspeilid);
      }
      taxations_.WriteTo(ref output, _repeated_taxations_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (Wozobjectnummer != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Wozobjectnummer);
      }
      if (Prijspeilid != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Prijspeilid);
      }
      size += taxations_.CalculateSize(_repeated_taxations_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(TaxationsObject other) {
      if (other == null) {
        return;
      }
      if (other.Wozobjectnummer != 0L) {
        Wozobjectnummer = other.Wozobjectnummer;
      }
      if (other.Prijspeilid != 0L) {
        Prijspeilid = other.Prijspeilid;
      }
      taxations_.Add(other.taxations_);
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            Wozobjectnummer = input.ReadInt64();
            break;
          }
          case 16: {
            Prijspeilid = input.ReadInt64();
            break;
          }
          case 26: {
            taxations_.AddEntriesFrom(input, _repeated_taxations_codec);
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 8: {
            Wozobjectnummer = input.ReadInt64();
            break;
          }
          case 16: {
            Prijspeilid = input.ReadInt64();
            break;
          }
          case 26: {
            taxations_.AddEntriesFrom(ref input, _repeated_taxations_codec);
            break;
          }
        }
      }
    }
    #endif

  }

  public sealed partial class Taxation : pb::IMessage<Taxation>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<Taxation> _parser = new pb::MessageParser<Taxation>(() => new Taxation());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<Taxation> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::gRPCServer.Protos.TaxationReflection.Descriptor.MessageTypes[2]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Taxation() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Taxation(Taxation other) : this() {
      id_ = other.id_;
      period_ = other.period_ != null ? other.period_.Clone() : null;
      status_ = other.status_;
      active_ = other.active_;
      freezeWozObject_ = other.freezeWozObject_ != null ? other.freezeWozObject_.Clone() : null;
      freezeDeelobjects_ = other.freezeDeelobjects_.Clone();
      comparableObjects_ = other.comparableObjects_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Taxation Clone() {
      return new Taxation(this);
    }

    /// <summary>Field number for the "id" field.</summary>
    public const int IdFieldNumber = 1;
    private long id_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public long Id {
      get { return id_; }
      set {
        id_ = value;
      }
    }

    /// <summary>Field number for the "period" field.</summary>
    public const int PeriodFieldNumber = 2;
    private global::gRPCServer.Protos.TimePeriodRecord period_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::gRPCServer.Protos.TimePeriodRecord Period {
      get { return period_; }
      set {
        period_ = value;
      }
    }

    /// <summary>Field number for the "status" field.</summary>
    public const int StatusFieldNumber = 3;
    private string status_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string Status {
      get { return status_; }
      set {
        status_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "active" field.</summary>
    public const int ActiveFieldNumber = 4;
    private bool active_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Active {
      get { return active_; }
      set {
        active_ = value;
      }
    }

    /// <summary>Field number for the "freezeWozObject" field.</summary>
    public const int FreezeWozObjectFieldNumber = 5;
    private global::gRPCServer.Protos.FullWozObjectReply freezeWozObject_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::gRPCServer.Protos.FullWozObjectReply FreezeWozObject {
      get { return freezeWozObject_; }
      set {
        freezeWozObject_ = value;
      }
    }

    /// <summary>Field number for the "freezeDeelobjects" field.</summary>
    public const int FreezeDeelobjectsFieldNumber = 6;
    private static readonly pb::FieldCodec<global::gRPCServer.Protos.WozSubObjectReply> _repeated_freezeDeelobjects_codec
        = pb::FieldCodec.ForMessage(50, global::gRPCServer.Protos.WozSubObjectReply.Parser);
    private readonly pbc::RepeatedField<global::gRPCServer.Protos.WozSubObjectReply> freezeDeelobjects_ = new pbc::RepeatedField<global::gRPCServer.Protos.WozSubObjectReply>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<global::gRPCServer.Protos.WozSubObjectReply> FreezeDeelobjects {
      get { return freezeDeelobjects_; }
    }

    /// <summary>Field number for the "comparable_objects" field.</summary>
    public const int ComparableObjectsFieldNumber = 7;
    private static readonly pb::FieldCodec<global::gRPCServer.Protos.ComparableObject> _repeated_comparableObjects_codec
        = pb::FieldCodec.ForMessage(58, global::gRPCServer.Protos.ComparableObject.Parser);
    private readonly pbc::RepeatedField<global::gRPCServer.Protos.ComparableObject> comparableObjects_ = new pbc::RepeatedField<global::gRPCServer.Protos.ComparableObject>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<global::gRPCServer.Protos.ComparableObject> ComparableObjects {
      get { return comparableObjects_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as Taxation);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(Taxation other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Id != other.Id) return false;
      if (!object.Equals(Period, other.Period)) return false;
      if (Status != other.Status) return false;
      if (Active != other.Active) return false;
      if (!object.Equals(FreezeWozObject, other.FreezeWozObject)) return false;
      if(!freezeDeelobjects_.Equals(other.freezeDeelobjects_)) return false;
      if(!comparableObjects_.Equals(other.comparableObjects_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (Id != 0L) hash ^= Id.GetHashCode();
      if (period_ != null) hash ^= Period.GetHashCode();
      if (Status.Length != 0) hash ^= Status.GetHashCode();
      if (Active != false) hash ^= Active.GetHashCode();
      if (freezeWozObject_ != null) hash ^= FreezeWozObject.GetHashCode();
      hash ^= freezeDeelobjects_.GetHashCode();
      hash ^= comparableObjects_.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (Id != 0L) {
        output.WriteRawTag(8);
        output.WriteInt64(Id);
      }
      if (period_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Period);
      }
      if (Status.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(Status);
      }
      if (Active != false) {
        output.WriteRawTag(32);
        output.WriteBool(Active);
      }
      if (freezeWozObject_ != null) {
        output.WriteRawTag(42);
        output.WriteMessage(FreezeWozObject);
      }
      freezeDeelobjects_.WriteTo(output, _repeated_freezeDeelobjects_codec);
      comparableObjects_.WriteTo(output, _repeated_comparableObjects_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (Id != 0L) {
        output.WriteRawTag(8);
        output.WriteInt64(Id);
      }
      if (period_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Period);
      }
      if (Status.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(Status);
      }
      if (Active != false) {
        output.WriteRawTag(32);
        output.WriteBool(Active);
      }
      if (freezeWozObject_ != null) {
        output.WriteRawTag(42);
        output.WriteMessage(FreezeWozObject);
      }
      freezeDeelobjects_.WriteTo(ref output, _repeated_freezeDeelobjects_codec);
      comparableObjects_.WriteTo(ref output, _repeated_comparableObjects_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (Id != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Id);
      }
      if (period_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Period);
      }
      if (Status.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Status);
      }
      if (Active != false) {
        size += 1 + 1;
      }
      if (freezeWozObject_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(FreezeWozObject);
      }
      size += freezeDeelobjects_.CalculateSize(_repeated_freezeDeelobjects_codec);
      size += comparableObjects_.CalculateSize(_repeated_comparableObjects_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(Taxation other) {
      if (other == null) {
        return;
      }
      if (other.Id != 0L) {
        Id = other.Id;
      }
      if (other.period_ != null) {
        if (period_ == null) {
          Period = new global::gRPCServer.Protos.TimePeriodRecord();
        }
        Period.MergeFrom(other.Period);
      }
      if (other.Status.Length != 0) {
        Status = other.Status;
      }
      if (other.Active != false) {
        Active = other.Active;
      }
      if (other.freezeWozObject_ != null) {
        if (freezeWozObject_ == null) {
          FreezeWozObject = new global::gRPCServer.Protos.FullWozObjectReply();
        }
        FreezeWozObject.MergeFrom(other.FreezeWozObject);
      }
      freezeDeelobjects_.Add(other.freezeDeelobjects_);
      comparableObjects_.Add(other.comparableObjects_);
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            Id = input.ReadInt64();
            break;
          }
          case 18: {
            if (period_ == null) {
              Period = new global::gRPCServer.Protos.TimePeriodRecord();
            }
            input.ReadMessage(Period);
            break;
          }
          case 26: {
            Status = input.ReadString();
            break;
          }
          case 32: {
            Active = input.ReadBool();
            break;
          }
          case 42: {
            if (freezeWozObject_ == null) {
              FreezeWozObject = new global::gRPCServer.Protos.FullWozObjectReply();
            }
            input.ReadMessage(FreezeWozObject);
            break;
          }
          case 50: {
            freezeDeelobjects_.AddEntriesFrom(input, _repeated_freezeDeelobjects_codec);
            break;
          }
          case 58: {
            comparableObjects_.AddEntriesFrom(input, _repeated_comparableObjects_codec);
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 8: {
            Id = input.ReadInt64();
            break;
          }
          case 18: {
            if (period_ == null) {
              Period = new global::gRPCServer.Protos.TimePeriodRecord();
            }
            input.ReadMessage(Period);
            break;
          }
          case 26: {
            Status = input.ReadString();
            break;
          }
          case 32: {
            Active = input.ReadBool();
            break;
          }
          case 42: {
            if (freezeWozObject_ == null) {
              FreezeWozObject = new global::gRPCServer.Protos.FullWozObjectReply();
            }
            input.ReadMessage(FreezeWozObject);
            break;
          }
          case 50: {
            freezeDeelobjects_.AddEntriesFrom(ref input, _repeated_freezeDeelobjects_codec);
            break;
          }
          case 58: {
            comparableObjects_.AddEntriesFrom(ref input, _repeated_comparableObjects_codec);
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code