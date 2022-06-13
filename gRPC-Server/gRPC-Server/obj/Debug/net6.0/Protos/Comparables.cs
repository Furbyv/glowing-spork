// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Protos/comparables.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace gRPCServer.Protos {

  /// <summary>Holder for reflection information generated from Protos/comparables.proto</summary>
  public static partial class ComparablesReflection {

    #region Descriptor
    /// <summary>File descriptor for Protos/comparables.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ComparablesReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChhQcm90b3MvY29tcGFyYWJsZXMucHJvdG8SC2NvbXBhcmFibGVzGhlQcm90",
            "b3MvdHJhbnNhY3Rpb25zLnByb3RvIoUBCgtDb21wYXJhYmxlcxINCgV0YXhp",
            "ZBgBIAEoAxIXCg93b3pvYmplY3RudW1tZXIYAiABKAMSEwoLcHJpanNwZWls",
            "aWQYAyABKAMSOQoSY29tcGFyYWJsZV9vYmplY3RzGAQgAygLMh0uY29tcGFy",
            "YWJsZXMuQ29tcGFyYWJsZU9iamVjdCK5AgoQQ29tcGFyYWJsZU9iamVjdBIu",
            "Cgt0cmFuc2FjdGlvbhgBIAEoCzIZLnRyYW5zYWN0aW9ucy5UcmFuc2FjdGlv",
            "bhIQCghzZWxlY3RlZBgCIAEoCBITCgt0b3RhbF9zY29yZRgDIAEoARIVCg1h",
            "ZnN0YW5kX3Njb3JlGAQgASgBEhUKDXdvbl9vcHBfc2NvcmUYBSABKAESGQoR",
            "YWFuYm91d19vcHBfc2NvcmUYBiABKAESFwoPa2F2ZWxfb3BwX3Njb3JlGAcg",
            "ASgBEh4KFnRyYW5zYWN0aWVfZGF0dW1fc2NvcmUYCCABKAESGQoRb2JqZWN0",
            "X3R5cGVfc2NvcmUYCSABKAESGQoRYmlqZ2Vib3V3ZW5fc2NvcmUYCiABKAES",
            "FgoOYm91d2phYXJfc2NvcmUYCyABKAFCFKoCEWdSUENTZXJ2ZXIuUHJvdG9z",
            "YgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::gRPCServer.Protos.TransactionsReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::gRPCServer.Protos.Comparables), global::gRPCServer.Protos.Comparables.Parser, new[]{ "Taxid", "Wozobjectnummer", "Prijspeilid", "ComparableObjects" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::gRPCServer.Protos.ComparableObject), global::gRPCServer.Protos.ComparableObject.Parser, new[]{ "Transaction", "Selected", "TotalScore", "AfstandScore", "WonOppScore", "AanbouwOppScore", "KavelOppScore", "TransactieDatumScore", "ObjectTypeScore", "BijgebouwenScore", "BouwjaarScore" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class Comparables : pb::IMessage<Comparables>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<Comparables> _parser = new pb::MessageParser<Comparables>(() => new Comparables());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<Comparables> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::gRPCServer.Protos.ComparablesReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Comparables() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Comparables(Comparables other) : this() {
      taxid_ = other.taxid_;
      wozobjectnummer_ = other.wozobjectnummer_;
      prijspeilid_ = other.prijspeilid_;
      comparableObjects_ = other.comparableObjects_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Comparables Clone() {
      return new Comparables(this);
    }

    /// <summary>Field number for the "taxid" field.</summary>
    public const int TaxidFieldNumber = 1;
    private long taxid_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public long Taxid {
      get { return taxid_; }
      set {
        taxid_ = value;
      }
    }

    /// <summary>Field number for the "wozobjectnummer" field.</summary>
    public const int WozobjectnummerFieldNumber = 2;
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
    public const int PrijspeilidFieldNumber = 3;
    private long prijspeilid_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public long Prijspeilid {
      get { return prijspeilid_; }
      set {
        prijspeilid_ = value;
      }
    }

    /// <summary>Field number for the "comparable_objects" field.</summary>
    public const int ComparableObjectsFieldNumber = 4;
    private static readonly pb::FieldCodec<global::gRPCServer.Protos.ComparableObject> _repeated_comparableObjects_codec
        = pb::FieldCodec.ForMessage(34, global::gRPCServer.Protos.ComparableObject.Parser);
    private readonly pbc::RepeatedField<global::gRPCServer.Protos.ComparableObject> comparableObjects_ = new pbc::RepeatedField<global::gRPCServer.Protos.ComparableObject>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<global::gRPCServer.Protos.ComparableObject> ComparableObjects {
      get { return comparableObjects_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as Comparables);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(Comparables other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Taxid != other.Taxid) return false;
      if (Wozobjectnummer != other.Wozobjectnummer) return false;
      if (Prijspeilid != other.Prijspeilid) return false;
      if(!comparableObjects_.Equals(other.comparableObjects_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (Taxid != 0L) hash ^= Taxid.GetHashCode();
      if (Wozobjectnummer != 0L) hash ^= Wozobjectnummer.GetHashCode();
      if (Prijspeilid != 0L) hash ^= Prijspeilid.GetHashCode();
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
      if (Taxid != 0L) {
        output.WriteRawTag(8);
        output.WriteInt64(Taxid);
      }
      if (Wozobjectnummer != 0L) {
        output.WriteRawTag(16);
        output.WriteInt64(Wozobjectnummer);
      }
      if (Prijspeilid != 0L) {
        output.WriteRawTag(24);
        output.WriteInt64(Prijspeilid);
      }
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
      if (Taxid != 0L) {
        output.WriteRawTag(8);
        output.WriteInt64(Taxid);
      }
      if (Wozobjectnummer != 0L) {
        output.WriteRawTag(16);
        output.WriteInt64(Wozobjectnummer);
      }
      if (Prijspeilid != 0L) {
        output.WriteRawTag(24);
        output.WriteInt64(Prijspeilid);
      }
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
      if (Taxid != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Taxid);
      }
      if (Wozobjectnummer != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Wozobjectnummer);
      }
      if (Prijspeilid != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Prijspeilid);
      }
      size += comparableObjects_.CalculateSize(_repeated_comparableObjects_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(Comparables other) {
      if (other == null) {
        return;
      }
      if (other.Taxid != 0L) {
        Taxid = other.Taxid;
      }
      if (other.Wozobjectnummer != 0L) {
        Wozobjectnummer = other.Wozobjectnummer;
      }
      if (other.Prijspeilid != 0L) {
        Prijspeilid = other.Prijspeilid;
      }
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
            Taxid = input.ReadInt64();
            break;
          }
          case 16: {
            Wozobjectnummer = input.ReadInt64();
            break;
          }
          case 24: {
            Prijspeilid = input.ReadInt64();
            break;
          }
          case 34: {
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
            Taxid = input.ReadInt64();
            break;
          }
          case 16: {
            Wozobjectnummer = input.ReadInt64();
            break;
          }
          case 24: {
            Prijspeilid = input.ReadInt64();
            break;
          }
          case 34: {
            comparableObjects_.AddEntriesFrom(ref input, _repeated_comparableObjects_codec);
            break;
          }
        }
      }
    }
    #endif

  }

  public sealed partial class ComparableObject : pb::IMessage<ComparableObject>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<ComparableObject> _parser = new pb::MessageParser<ComparableObject>(() => new ComparableObject());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<ComparableObject> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::gRPCServer.Protos.ComparablesReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public ComparableObject() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public ComparableObject(ComparableObject other) : this() {
      transaction_ = other.transaction_ != null ? other.transaction_.Clone() : null;
      selected_ = other.selected_;
      totalScore_ = other.totalScore_;
      afstandScore_ = other.afstandScore_;
      wonOppScore_ = other.wonOppScore_;
      aanbouwOppScore_ = other.aanbouwOppScore_;
      kavelOppScore_ = other.kavelOppScore_;
      transactieDatumScore_ = other.transactieDatumScore_;
      objectTypeScore_ = other.objectTypeScore_;
      bijgebouwenScore_ = other.bijgebouwenScore_;
      bouwjaarScore_ = other.bouwjaarScore_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public ComparableObject Clone() {
      return new ComparableObject(this);
    }

    /// <summary>Field number for the "transaction" field.</summary>
    public const int TransactionFieldNumber = 1;
    private global::gRPCServer.Protos.Transaction transaction_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::gRPCServer.Protos.Transaction Transaction {
      get { return transaction_; }
      set {
        transaction_ = value;
      }
    }

    /// <summary>Field number for the "selected" field.</summary>
    public const int SelectedFieldNumber = 2;
    private bool selected_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Selected {
      get { return selected_; }
      set {
        selected_ = value;
      }
    }

    /// <summary>Field number for the "total_score" field.</summary>
    public const int TotalScoreFieldNumber = 3;
    private double totalScore_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public double TotalScore {
      get { return totalScore_; }
      set {
        totalScore_ = value;
      }
    }

    /// <summary>Field number for the "afstand_score" field.</summary>
    public const int AfstandScoreFieldNumber = 4;
    private double afstandScore_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public double AfstandScore {
      get { return afstandScore_; }
      set {
        afstandScore_ = value;
      }
    }

    /// <summary>Field number for the "won_opp_score" field.</summary>
    public const int WonOppScoreFieldNumber = 5;
    private double wonOppScore_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public double WonOppScore {
      get { return wonOppScore_; }
      set {
        wonOppScore_ = value;
      }
    }

    /// <summary>Field number for the "aanbouw_opp_score" field.</summary>
    public const int AanbouwOppScoreFieldNumber = 6;
    private double aanbouwOppScore_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public double AanbouwOppScore {
      get { return aanbouwOppScore_; }
      set {
        aanbouwOppScore_ = value;
      }
    }

    /// <summary>Field number for the "kavel_opp_score" field.</summary>
    public const int KavelOppScoreFieldNumber = 7;
    private double kavelOppScore_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public double KavelOppScore {
      get { return kavelOppScore_; }
      set {
        kavelOppScore_ = value;
      }
    }

    /// <summary>Field number for the "transactie_datum_score" field.</summary>
    public const int TransactieDatumScoreFieldNumber = 8;
    private double transactieDatumScore_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public double TransactieDatumScore {
      get { return transactieDatumScore_; }
      set {
        transactieDatumScore_ = value;
      }
    }

    /// <summary>Field number for the "object_type_score" field.</summary>
    public const int ObjectTypeScoreFieldNumber = 9;
    private double objectTypeScore_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public double ObjectTypeScore {
      get { return objectTypeScore_; }
      set {
        objectTypeScore_ = value;
      }
    }

    /// <summary>Field number for the "bijgebouwen_score" field.</summary>
    public const int BijgebouwenScoreFieldNumber = 10;
    private double bijgebouwenScore_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public double BijgebouwenScore {
      get { return bijgebouwenScore_; }
      set {
        bijgebouwenScore_ = value;
      }
    }

    /// <summary>Field number for the "bouwjaar_score" field.</summary>
    public const int BouwjaarScoreFieldNumber = 11;
    private double bouwjaarScore_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public double BouwjaarScore {
      get { return bouwjaarScore_; }
      set {
        bouwjaarScore_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as ComparableObject);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(ComparableObject other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Transaction, other.Transaction)) return false;
      if (Selected != other.Selected) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.Equals(TotalScore, other.TotalScore)) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.Equals(AfstandScore, other.AfstandScore)) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.Equals(WonOppScore, other.WonOppScore)) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.Equals(AanbouwOppScore, other.AanbouwOppScore)) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.Equals(KavelOppScore, other.KavelOppScore)) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.Equals(TransactieDatumScore, other.TransactieDatumScore)) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.Equals(ObjectTypeScore, other.ObjectTypeScore)) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.Equals(BijgebouwenScore, other.BijgebouwenScore)) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.Equals(BouwjaarScore, other.BouwjaarScore)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (transaction_ != null) hash ^= Transaction.GetHashCode();
      if (Selected != false) hash ^= Selected.GetHashCode();
      if (TotalScore != 0D) hash ^= pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.GetHashCode(TotalScore);
      if (AfstandScore != 0D) hash ^= pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.GetHashCode(AfstandScore);
      if (WonOppScore != 0D) hash ^= pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.GetHashCode(WonOppScore);
      if (AanbouwOppScore != 0D) hash ^= pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.GetHashCode(AanbouwOppScore);
      if (KavelOppScore != 0D) hash ^= pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.GetHashCode(KavelOppScore);
      if (TransactieDatumScore != 0D) hash ^= pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.GetHashCode(TransactieDatumScore);
      if (ObjectTypeScore != 0D) hash ^= pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.GetHashCode(ObjectTypeScore);
      if (BijgebouwenScore != 0D) hash ^= pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.GetHashCode(BijgebouwenScore);
      if (BouwjaarScore != 0D) hash ^= pbc::ProtobufEqualityComparers.BitwiseDoubleEqualityComparer.GetHashCode(BouwjaarScore);
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
      if (transaction_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Transaction);
      }
      if (Selected != false) {
        output.WriteRawTag(16);
        output.WriteBool(Selected);
      }
      if (TotalScore != 0D) {
        output.WriteRawTag(25);
        output.WriteDouble(TotalScore);
      }
      if (AfstandScore != 0D) {
        output.WriteRawTag(33);
        output.WriteDouble(AfstandScore);
      }
      if (WonOppScore != 0D) {
        output.WriteRawTag(41);
        output.WriteDouble(WonOppScore);
      }
      if (AanbouwOppScore != 0D) {
        output.WriteRawTag(49);
        output.WriteDouble(AanbouwOppScore);
      }
      if (KavelOppScore != 0D) {
        output.WriteRawTag(57);
        output.WriteDouble(KavelOppScore);
      }
      if (TransactieDatumScore != 0D) {
        output.WriteRawTag(65);
        output.WriteDouble(TransactieDatumScore);
      }
      if (ObjectTypeScore != 0D) {
        output.WriteRawTag(73);
        output.WriteDouble(ObjectTypeScore);
      }
      if (BijgebouwenScore != 0D) {
        output.WriteRawTag(81);
        output.WriteDouble(BijgebouwenScore);
      }
      if (BouwjaarScore != 0D) {
        output.WriteRawTag(89);
        output.WriteDouble(BouwjaarScore);
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
      if (transaction_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Transaction);
      }
      if (Selected != false) {
        output.WriteRawTag(16);
        output.WriteBool(Selected);
      }
      if (TotalScore != 0D) {
        output.WriteRawTag(25);
        output.WriteDouble(TotalScore);
      }
      if (AfstandScore != 0D) {
        output.WriteRawTag(33);
        output.WriteDouble(AfstandScore);
      }
      if (WonOppScore != 0D) {
        output.WriteRawTag(41);
        output.WriteDouble(WonOppScore);
      }
      if (AanbouwOppScore != 0D) {
        output.WriteRawTag(49);
        output.WriteDouble(AanbouwOppScore);
      }
      if (KavelOppScore != 0D) {
        output.WriteRawTag(57);
        output.WriteDouble(KavelOppScore);
      }
      if (TransactieDatumScore != 0D) {
        output.WriteRawTag(65);
        output.WriteDouble(TransactieDatumScore);
      }
      if (ObjectTypeScore != 0D) {
        output.WriteRawTag(73);
        output.WriteDouble(ObjectTypeScore);
      }
      if (BijgebouwenScore != 0D) {
        output.WriteRawTag(81);
        output.WriteDouble(BijgebouwenScore);
      }
      if (BouwjaarScore != 0D) {
        output.WriteRawTag(89);
        output.WriteDouble(BouwjaarScore);
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
      if (transaction_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Transaction);
      }
      if (Selected != false) {
        size += 1 + 1;
      }
      if (TotalScore != 0D) {
        size += 1 + 8;
      }
      if (AfstandScore != 0D) {
        size += 1 + 8;
      }
      if (WonOppScore != 0D) {
        size += 1 + 8;
      }
      if (AanbouwOppScore != 0D) {
        size += 1 + 8;
      }
      if (KavelOppScore != 0D) {
        size += 1 + 8;
      }
      if (TransactieDatumScore != 0D) {
        size += 1 + 8;
      }
      if (ObjectTypeScore != 0D) {
        size += 1 + 8;
      }
      if (BijgebouwenScore != 0D) {
        size += 1 + 8;
      }
      if (BouwjaarScore != 0D) {
        size += 1 + 8;
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(ComparableObject other) {
      if (other == null) {
        return;
      }
      if (other.transaction_ != null) {
        if (transaction_ == null) {
          Transaction = new global::gRPCServer.Protos.Transaction();
        }
        Transaction.MergeFrom(other.Transaction);
      }
      if (other.Selected != false) {
        Selected = other.Selected;
      }
      if (other.TotalScore != 0D) {
        TotalScore = other.TotalScore;
      }
      if (other.AfstandScore != 0D) {
        AfstandScore = other.AfstandScore;
      }
      if (other.WonOppScore != 0D) {
        WonOppScore = other.WonOppScore;
      }
      if (other.AanbouwOppScore != 0D) {
        AanbouwOppScore = other.AanbouwOppScore;
      }
      if (other.KavelOppScore != 0D) {
        KavelOppScore = other.KavelOppScore;
      }
      if (other.TransactieDatumScore != 0D) {
        TransactieDatumScore = other.TransactieDatumScore;
      }
      if (other.ObjectTypeScore != 0D) {
        ObjectTypeScore = other.ObjectTypeScore;
      }
      if (other.BijgebouwenScore != 0D) {
        BijgebouwenScore = other.BijgebouwenScore;
      }
      if (other.BouwjaarScore != 0D) {
        BouwjaarScore = other.BouwjaarScore;
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
          case 10: {
            if (transaction_ == null) {
              Transaction = new global::gRPCServer.Protos.Transaction();
            }
            input.ReadMessage(Transaction);
            break;
          }
          case 16: {
            Selected = input.ReadBool();
            break;
          }
          case 25: {
            TotalScore = input.ReadDouble();
            break;
          }
          case 33: {
            AfstandScore = input.ReadDouble();
            break;
          }
          case 41: {
            WonOppScore = input.ReadDouble();
            break;
          }
          case 49: {
            AanbouwOppScore = input.ReadDouble();
            break;
          }
          case 57: {
            KavelOppScore = input.ReadDouble();
            break;
          }
          case 65: {
            TransactieDatumScore = input.ReadDouble();
            break;
          }
          case 73: {
            ObjectTypeScore = input.ReadDouble();
            break;
          }
          case 81: {
            BijgebouwenScore = input.ReadDouble();
            break;
          }
          case 89: {
            BouwjaarScore = input.ReadDouble();
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
          case 10: {
            if (transaction_ == null) {
              Transaction = new global::gRPCServer.Protos.Transaction();
            }
            input.ReadMessage(Transaction);
            break;
          }
          case 16: {
            Selected = input.ReadBool();
            break;
          }
          case 25: {
            TotalScore = input.ReadDouble();
            break;
          }
          case 33: {
            AfstandScore = input.ReadDouble();
            break;
          }
          case 41: {
            WonOppScore = input.ReadDouble();
            break;
          }
          case 49: {
            AanbouwOppScore = input.ReadDouble();
            break;
          }
          case 57: {
            KavelOppScore = input.ReadDouble();
            break;
          }
          case 65: {
            TransactieDatumScore = input.ReadDouble();
            break;
          }
          case 73: {
            ObjectTypeScore = input.ReadDouble();
            break;
          }
          case 81: {
            BijgebouwenScore = input.ReadDouble();
            break;
          }
          case 89: {
            BouwjaarScore = input.ReadDouble();
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