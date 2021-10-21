using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace gRPC_Server.Models
{
    public class DataContext : DbContext
    {
        internal DbSet<WozObject> WozObjects { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
    }
}
