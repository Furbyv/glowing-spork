namespace gRPCServer.Modules.Grids.Converters
{
    public static class ColumnDefinitionConverter
    {
        public static IEnumerable<ColumnDefinition> GetColumnDefinitions(DataContext context, GridType gridType)
        {
            return context.ColumnDefinitions.Where(cd => cd.GridType == (Models.GridType)gridType).Select(ToProto).ToList();
        }

        private static ColumnDefinition ToProto(Models.ColumnDefinition coldef)
        {
            var proto = new ColumnDefinition();
            proto.ColumnName = coldef.ColumnName;
            proto.SortOrder = coldef.SortOrder;
            proto.ColumnHeader = coldef.ColumnHeader;
            proto.ColumnDescription = coldef.ColumnDescription;
            proto.Editable = coldef.Editable;
            proto.GridType = (GridType)coldef.GridType;
            proto.DataType = (Protos.DataType)coldef.DataType;
            return proto;
        }
    }
}
