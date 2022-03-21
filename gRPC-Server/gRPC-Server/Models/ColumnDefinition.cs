﻿namespace gRPCServer.Models
{
    public class ColumnDefinition
    {
        [Key]
        public long Id { get; set; }
        public GridType GridType { get; set; }
        public DataType DataType { get; set; }
        public string ColumnName { get; set; }
        public string ColumnHeader { get; set; }
        public string ColumnDescription { get; set; }
        public bool Editable { get; set; }
        public int SortOrder { get; set; }
    }
}
