namespace gRPCServer.Converters
{
    public static class ColumnDefinitionConverter
    {
        public static IEnumerable<Protos.ColumnDefinition> GetColumnDefinitions(DataContext context, Protos.GridType gridType)
        {
            return context.ColumnDefinitions.Where(cd =>  cd.GridType == (Models.GridType) gridType).Select(ToProto).ToList();
        }

        private static Protos.ColumnDefinition ToProto(Models.ColumnDefinition coldef)
        {
            var proto = new Protos.ColumnDefinition();
            proto.ColumnName = coldef.ColumnName;
            proto.SortOrder = coldef.SortOrder;
            proto.ColumnHeader = coldef.ColumnHeader;
            proto.ColumnDescription = coldef.ColumnDescription;
            proto.Editable = coldef.Editable;
            proto.GridType = (Protos.GridType)(int) coldef.GridType;
            return proto;
        }
    }
}
