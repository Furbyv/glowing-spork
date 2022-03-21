// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Protos/columndefinition.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace gRPCServer.Protos {

  /// <summary>Holder for reflection information generated from Protos/columndefinition.proto</summary>
  public static partial class ColumndefinitionReflection {

    #region Descriptor
    /// <summary>File descriptor for Protos/columndefinition.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ColumndefinitionReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ch1Qcm90b3MvY29sdW1uZGVmaW5pdGlvbi5wcm90bxIRY29sdW1uZGVmaW5p",
            "dGlvbnMisAEKEENvbHVtbkRlZmluaXRpb24SEwoLY29sdW1uX25hbWUYASAB",
            "KAkSFQoNY29sdW1uX2hlYWRlchgCIAEoCRIaChJjb2x1bW5fZGVzY3JpcHRp",
            "b24YAyABKAkSLgoJZ3JpZF9UeXBlGAQgASgOMhsuY29sdW1uZGVmaW5pdGlv",
            "bnMuR3JpZFR5cGUSEAoIZWRpdGFibGUYBSABKAgSEgoKc29ydF9vcmRlchgG",
            "IAEoBSobCghHcmlkVHlwZRIPCgtUQVhPVkVSVklFVxAAQhSqAhFnUlBDU2Vy",
            "dmVyLlByb3Rvc2IGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(new[] {typeof(global::gRPCServer.Protos.GridType), }, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::gRPCServer.Protos.ColumnDefinition), global::gRPCServer.Protos.ColumnDefinition.Parser, new[]{ "ColumnName", "ColumnHeader", "ColumnDescription", "GridType", "Editable", "SortOrder" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Enums
  public enum GridType {
    [pbr::OriginalName("TAXOVERVIEW")] Taxoverview = 0,
  }

  #endregion

  #region Messages
  public sealed partial class ColumnDefinition : pb::IMessage<ColumnDefinition>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<ColumnDefinition> _parser = new pb::MessageParser<ColumnDefinition>(() => new ColumnDefinition());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<ColumnDefinition> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::gRPCServer.Protos.ColumndefinitionReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public ColumnDefinition() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public ColumnDefinition(ColumnDefinition other) : this() {
      columnName_ = other.columnName_;
      columnHeader_ = other.columnHeader_;
      columnDescription_ = other.columnDescription_;
      gridType_ = other.gridType_;
      editable_ = other.editable_;
      sortOrder_ = other.sortOrder_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public ColumnDefinition Clone() {
      return new ColumnDefinition(this);
    }

    /// <summary>Field number for the "column_name" field.</summary>
    public const int ColumnNameFieldNumber = 1;
    private string columnName_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string ColumnName {
      get { return columnName_; }
      set {
        columnName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "column_header" field.</summary>
    public const int ColumnHeaderFieldNumber = 2;
    private string columnHeader_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string ColumnHeader {
      get { return columnHeader_; }
      set {
        columnHeader_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "column_description" field.</summary>
    public const int ColumnDescriptionFieldNumber = 3;
    private string columnDescription_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string ColumnDescription {
      get { return columnDescription_; }
      set {
        columnDescription_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "grid_Type" field.</summary>
    public const int GridTypeFieldNumber = 4;
    private global::gRPCServer.Protos.GridType gridType_ = global::gRPCServer.Protos.GridType.Taxoverview;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::gRPCServer.Protos.GridType GridType {
      get { return gridType_; }
      set {
        gridType_ = value;
      }
    }

    /// <summary>Field number for the "editable" field.</summary>
    public const int EditableFieldNumber = 5;
    private bool editable_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Editable {
      get { return editable_; }
      set {
        editable_ = value;
      }
    }

    /// <summary>Field number for the "sort_order" field.</summary>
    public const int SortOrderFieldNumber = 6;
    private int sortOrder_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int SortOrder {
      get { return sortOrder_; }
      set {
        sortOrder_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as ColumnDefinition);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(ColumnDefinition other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (ColumnName != other.ColumnName) return false;
      if (ColumnHeader != other.ColumnHeader) return false;
      if (ColumnDescription != other.ColumnDescription) return false;
      if (GridType != other.GridType) return false;
      if (Editable != other.Editable) return false;
      if (SortOrder != other.SortOrder) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (ColumnName.Length != 0) hash ^= ColumnName.GetHashCode();
      if (ColumnHeader.Length != 0) hash ^= ColumnHeader.GetHashCode();
      if (ColumnDescription.Length != 0) hash ^= ColumnDescription.GetHashCode();
      if (GridType != global::gRPCServer.Protos.GridType.Taxoverview) hash ^= GridType.GetHashCode();
      if (Editable != false) hash ^= Editable.GetHashCode();
      if (SortOrder != 0) hash ^= SortOrder.GetHashCode();
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
      if (ColumnName.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(ColumnName);
      }
      if (ColumnHeader.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(ColumnHeader);
      }
      if (ColumnDescription.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(ColumnDescription);
      }
      if (GridType != global::gRPCServer.Protos.GridType.Taxoverview) {
        output.WriteRawTag(32);
        output.WriteEnum((int) GridType);
      }
      if (Editable != false) {
        output.WriteRawTag(40);
        output.WriteBool(Editable);
      }
      if (SortOrder != 0) {
        output.WriteRawTag(48);
        output.WriteInt32(SortOrder);
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
      if (ColumnName.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(ColumnName);
      }
      if (ColumnHeader.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(ColumnHeader);
      }
      if (ColumnDescription.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(ColumnDescription);
      }
      if (GridType != global::gRPCServer.Protos.GridType.Taxoverview) {
        output.WriteRawTag(32);
        output.WriteEnum((int) GridType);
      }
      if (Editable != false) {
        output.WriteRawTag(40);
        output.WriteBool(Editable);
      }
      if (SortOrder != 0) {
        output.WriteRawTag(48);
        output.WriteInt32(SortOrder);
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
      if (ColumnName.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ColumnName);
      }
      if (ColumnHeader.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ColumnHeader);
      }
      if (ColumnDescription.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ColumnDescription);
      }
      if (GridType != global::gRPCServer.Protos.GridType.Taxoverview) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) GridType);
      }
      if (Editable != false) {
        size += 1 + 1;
      }
      if (SortOrder != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(SortOrder);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(ColumnDefinition other) {
      if (other == null) {
        return;
      }
      if (other.ColumnName.Length != 0) {
        ColumnName = other.ColumnName;
      }
      if (other.ColumnHeader.Length != 0) {
        ColumnHeader = other.ColumnHeader;
      }
      if (other.ColumnDescription.Length != 0) {
        ColumnDescription = other.ColumnDescription;
      }
      if (other.GridType != global::gRPCServer.Protos.GridType.Taxoverview) {
        GridType = other.GridType;
      }
      if (other.Editable != false) {
        Editable = other.Editable;
      }
      if (other.SortOrder != 0) {
        SortOrder = other.SortOrder;
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
            ColumnName = input.ReadString();
            break;
          }
          case 18: {
            ColumnHeader = input.ReadString();
            break;
          }
          case 26: {
            ColumnDescription = input.ReadString();
            break;
          }
          case 32: {
            GridType = (global::gRPCServer.Protos.GridType) input.ReadEnum();
            break;
          }
          case 40: {
            Editable = input.ReadBool();
            break;
          }
          case 48: {
            SortOrder = input.ReadInt32();
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
            ColumnName = input.ReadString();
            break;
          }
          case 18: {
            ColumnHeader = input.ReadString();
            break;
          }
          case 26: {
            ColumnDescription = input.ReadString();
            break;
          }
          case 32: {
            GridType = (global::gRPCServer.Protos.GridType) input.ReadEnum();
            break;
          }
          case 40: {
            Editable = input.ReadBool();
            break;
          }
          case 48: {
            SortOrder = input.ReadInt32();
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
